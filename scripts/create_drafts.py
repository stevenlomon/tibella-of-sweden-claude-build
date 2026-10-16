#!/usr/bin/env python3
"""Create DRAFT product shells in Shopify and output GIDs."""
import subprocess, json, re, tempfile, os, time, sys

NVM_PREFIX = 'export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 24 > /dev/null 2>&1 && '
STORE = "kei3va-ym.myshopify.com"

def run_gql(query_str, retries=2):
    for attempt in range(retries + 1):
        with tempfile.NamedTemporaryFile(mode='w', suffix='.graphql', delete=False) as f:
            f.write(query_str)
            qf = f.name
        try:
            cmd = NVM_PREFIX + f'shopify store execute --store {STORE} --query-file {qf} --allow-mutations 2>/dev/null'
            r = subprocess.run(['bash', '-c', cmd], capture_output=True, text=True, timeout=90)
            m = re.search(r'\{[\s\S]*\}', r.stdout)
            if m:
                return json.loads(m.group())
            if attempt < retries:
                time.sleep(1)
                continue
            print(f"  NO JSON: {r.stdout[:300]}")
            return None
        finally:
            os.unlink(qf)


PRODUCTS = [
    # BAGS (9)
    {"title": "Leather Feeling PU Shoulder Bag", "type": "Väskor"},
    {"title": "Axelväska i Läder med Dubbla Handtag och Frontficka", "type": "Väskor"},
    {"title": "Dam Droppformad Handväska med Lång Axelrem och Dragkedja", "type": "Väskor"},
    {"title": "Slouchy Faux Leather Shoulder Bag", "type": "Väskor"},
    {"title": "Monogram Chain Charm Tote Bag", "type": "Väskor"},
    {"title": "Hobo Bag Women's black everyday casual shoulder bag", "type": "Väskor"},
    {"title": "Bat-Shaped High Street Handbag", "type": "Väskor"},
    {"title": "Women's Woven Drawstring Chain Crossbody Bag", "type": "Väskor"},
    {"title": "PU Leather Female Flap Shoulder Bag", "type": "Väskor"},
    # BOOTS (7)
    {"title": "Stövlar Dam Knähöga Med Spänne", "type": "Stövlar & Skor"},
    {"title": "Höga stövlar för dam i mocka", "type": "Stövlar & Skor"},
    {"title": "knitted boots", "type": "Stövlar & Skor"},
    {"title": "lace up boots with heels", "type": "Stövlar & Skor"},
    {"title": "Cowboy Boots", "type": "Stövlar & Skor"},
    {"title": "Slouchiga Mid-Calf Stövlar", "type": "Stövlar & Skor"},
    {"title": "knähöga stövlar för kvinnor", "type": "Stövlar & Skor"},
    # ACCESSORIES (7)
    {"title": "Pullover Shawl", "type": "Accessoarer"},
    {"title": "Triangle Shawl", "type": "Accessoarer"},
    {"title": "Winter Scarf", "type": "Accessoarer"},
    {"title": "Knitted Shawl", "type": "Accessoarer"},
    {"title": "Tassel Shawl Knitted Cardigan", "type": "Accessoarer"},
    {"title": "Dam Läderbälte med Dubbel O-Ring Spänne", "type": "Accessoarer"},
    {"title": "Dam Smal Skärp med Ringspänne", "type": "Accessoarer"},
]


def create_draft(title, product_type):
    t = title.replace('"', '\\"')
    pt = product_type.replace('"', '\\"')
    mutation = f'''mutation {{
  productCreate(product: {{
    title: "{t}"
    productType: "{pt}"
    status: DRAFT
  }}) {{
    product {{ id title }}
    userErrors {{ field message }}
  }}
}}'''
    data = run_gql(mutation)
    if data:
        result = data.get("productCreate", {})
        errors = result.get("userErrors", [])
        if errors:
            print(f"  ERROR creating '{title}': {errors}")
            return None
        product = result.get("product", {})
        return product.get("id")
    return None


if __name__ == "__main__":
    results = {"bags": [], "boots": [], "accessories": []}

    for i, p in enumerate(PRODUCTS):
        category = "bags" if i < 9 else ("boots" if i < 16 else "accessories")
        idx = i if i < 9 else (i - 9 if i < 16 else i - 16)

        print(f"Creating {category}[{idx+1}]: {p['title']}...")
        gid = create_draft(p["title"], p["type"])
        if gid:
            print(f"  OK: {gid}")
            results[category].append({"index": idx + 1, "title": p["title"], "gid": gid})
        else:
            print(f"  FAILED")
            results[category].append({"index": idx + 1, "title": p["title"], "gid": None})
        time.sleep(0.5)

    outfile = os.path.join(os.path.dirname(__file__), "draft_gids.json")
    with open(outfile, "w") as f:
        json.dump(results, f, indent=2)

    print(f"\nSaved GIDs to {outfile}")
    print(f"Bags: {sum(1 for r in results['bags'] if r['gid'])}/9")
    print(f"Boots: {sum(1 for r in results['boots'] if r['gid'])}/7")
    print(f"Accessories: {sum(1 for r in results['accessories'] if r['gid'])}/7")
