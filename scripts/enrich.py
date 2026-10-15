#!/usr/bin/env python3
"""Tibella of Sweden — Outerwear Enrichment Engine
Usage: python3 enrich.py <batch_file.json>

Reads product configs from JSON file and runs the full 10-step pipeline:
1. productUpdate (title + description)
2. metafieldsSet (specs, materials, shipping, fit, features, color-pattern)
3. productOptionsCreate (Färg + Storlek)
4. productVariantsBulkUpdate (price on auto-created variant)
5. productVariantsBulkCreate (remaining combos)
6. productCreateMedia (upload images from CDN)
7. productVariantAppendMedia (link images to color variants)
8. inventoryAdjustQuantities (10 per variant)
9. productUpdate (ACTIVE)
10. publishablePublish (Online Store + POS + Shop)
"""

import subprocess, json, re, tempfile, os, time, sys
from concurrent.futures import ThreadPoolExecutor
from urllib.request import urlopen, Request

NVM_PREFIX = 'export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 24 > /dev/null 2>&1 && '
STORE = "kei3va-ym.myshopify.com"
LOCATION_GID = "gid://shopify/Location/89877709022"
PUBLICATIONS = [
    "gid://shopify/Publication/191226446046",
    "gid://shopify/Publication/191226478814",
    "gid://shopify/Publication/191226511582",
]
SHIPPING_RETURNS = "Fri frakt på alla beställningar. Leverans inom 5–10 arbetsdagar. 30 dagars öppet köp — returnera enkelt via vår retursida."

COLOR_METAOBJECTS = {
    "Aprikos": "gid://shopify/Metaobject/266896212190",
    "Armégrön": "gid://shopify/Metaobject/266896048350",
    "Beige": "gid://shopify/Metaobject/261897093342",
    "Blå": "gid://shopify/Metaobject/266896244958",
    "Brun": "gid://shopify/Metaobject/261917868254",
    "Cyan": "gid://shopify/Metaobject/266896376030",
    "Grå": "gid://shopify/Metaobject/261897158878",
    "Grön": "gid://shopify/Metaobject/266896474334",
    "Gul": "gid://shopify/Metaobject/266896081118",
    "Lila": "gid://shopify/Metaobject/266965385438",
    "Orange": "gid://shopify/Metaobject/266981638366",
    "Kamel": "gid://shopify/Metaobject/261917901022",
    "Khaki": "gid://shopify/Metaobject/266896015582",
    "Mörkblå": "gid://shopify/Metaobject/261897224414",
    "Mörkbrun": "gid://shopify/Metaobject/266896441566",
    "Mörkgrön": "gid://shopify/Metaobject/266896310494",
    "Olivgrön": "gid://shopify/Metaobject/261917966558",
    "Rosa": "gid://shopify/Metaobject/261917933790",
    "Röd": "gid://shopify/Metaobject/261897191646",
    "Svart": "gid://shopify/Metaobject/261897126110",
    "Vinröd": "gid://shopify/Metaobject/266896146654",
    "Vit": "gid://shopify/Metaobject/266896277726",
}


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


def resolve_higgsfield(share_id, retries=2):
    url = f"https://higgsfield.ai/s/{share_id}"
    for attempt in range(retries + 1):
        try:
            req = Request(url, headers={'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64)'})
            with urlopen(req, timeout=15) as resp:
                html = resp.read().decode('utf-8', errors='replace')
            matches = re.findall(r'https://d8j0ntlcm91z4\.cloudfront\.net/[^\s"\'<>]+', html)
            if matches:
                cdn = matches[0]
                cdn = re.sub(r'_min\.webp$', '.png', cdn)
                return cdn
        except Exception as e:
            if attempt < retries:
                time.sleep(2)
                continue
            print(f"    FAIL resolve {share_id}: {e}")
    return None


def gql_escape(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')


def rich_paragraph(text):
    return json.dumps({"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":text}]}]})


def rich_bullets(items):
    li = [{"type":"list-item","children":[{"type":"text","value":it}]} for it in items]
    return json.dumps({"type":"root","children":[{"type":"list","listType":"unordered","children":li}]})


def step1_update_product(p):
    pid = p["shopify_gid"]
    title = p.get("title_update")
    desc = p.get("description_html", "")
    parts = []
    if title:
        parts.append(f'title: "{gql_escape(title)}"')
    if desc:
        parts.append(f'descriptionHtml: "{gql_escape(desc)}"')
    if not parts:
        return
    fields = ", ".join(parts)
    mutation = f'mutation {{ productUpdate(input: {{ id: "{pid}", {fields} }}) {{ product {{ id title }} userErrors {{ field message }} }} }}'
    print(f"  Step 1: Update product...")
    data = run_gql(mutation)
    if data:
        errors = data.get("productUpdate", {}).get("userErrors", [])
        if errors:
            print(f"    ERRORS: {errors}")
        else:
            print(f"    OK")
    time.sleep(0.3)


def step2_metafields(p):
    pid = p["shopify_gid"]
    colors = p["colors"]
    color_refs = [COLOR_METAOBJECTS[c] for c in colors if c in COLOR_METAOBJECTS]
    color_val = json.dumps(color_refs)

    specs_val = rich_paragraph(p["specifications"])
    mat_val = rich_paragraph(p["materials_care"])
    ship_val = rich_paragraph(SHIPPING_RETURNS)
    fit_val = rich_paragraph(p["fit_sizing"])
    feat_val = rich_bullets(p["key_features"])

    entries = [
        f'{{ ownerId: "{pid}", namespace: "custom", key: "specifications", type: "rich_text_field", value: "{gql_escape(specs_val)}" }}',
        f'{{ ownerId: "{pid}", namespace: "custom", key: "materials_care", type: "rich_text_field", value: "{gql_escape(mat_val)}" }}',
        f'{{ ownerId: "{pid}", namespace: "custom", key: "shipping_returns", type: "rich_text_field", value: "{gql_escape(ship_val)}" }}',
        f'{{ ownerId: "{pid}", namespace: "custom", key: "fit_sizing", type: "rich_text_field", value: "{gql_escape(fit_val)}" }}',
        f'{{ ownerId: "{pid}", namespace: "custom", key: "key_features", type: "rich_text_field", value: "{gql_escape(feat_val)}" }}',
        f'{{ ownerId: "{pid}", namespace: "shopify", key: "color-pattern", type: "list.metaobject_reference", value: "{gql_escape(color_val)}" }}',
    ]
    mutation = f'mutation {{ metafieldsSet(metafields: [{", ".join(entries)}]) {{ metafields {{ id key }} userErrors {{ field message }} }} }}'
    print(f"  Step 2: Set metafields...")
    data = run_gql(mutation)
    if data:
        result = data.get("metafieldsSet", {})
        errors = result.get("userErrors", [])
        if errors:
            print(f"    ERRORS: {errors}")
        else:
            print(f"    OK: {len(result.get('metafields', []))} fields")
    time.sleep(0.3)


def step3_options_variants(p):
    pid = p["shopify_gid"]
    colors = p["colors"]
    sizes = ["S", "M", "L", "XL"]
    price = p["price"]

    cv = ", ".join(f'{{ name: "{c}" }}' for c in colors)
    sv = ", ".join(f'{{ name: "{s}" }}' for s in sizes)
    mutation = f'''mutation {{
  productOptionsCreate(productId: "{pid}", options: [
    {{ name: "Färg", values: [{cv}] }}
    {{ name: "Storlek", values: [{sv}] }}
  ]) {{
    product {{
      id
      options {{ id name optionValues {{ id name }} }}
      variants(first: 5) {{ edges {{ node {{ id selectedOptions {{ name value }} }} }} }}
    }}
    userErrors {{ field message }}
  }}
}}'''
    print(f"  Step 3: Create options ({len(colors)} colors × {len(sizes)} sizes)...")
    data = run_gql(mutation)
    if not data:
        print("    FAILED")
        return None, None

    result = data.get("productOptionsCreate", {})
    errors = result.get("userErrors", [])
    if errors:
        print(f"    ERRORS: {errors}")
        return None, None

    product = result.get("product", {})
    options = product.get("options", [])
    color_oid = size_oid = None
    for o in options:
        if o["name"] == "Färg": color_oid = o["id"]
        elif o["name"] == "Storlek": size_oid = o["id"]

    existing = product.get("variants", {}).get("edges", [])
    existing_combos = set()
    for e in existing:
        opts = {so["name"]: so["value"] for so in e["node"]["selectedOptions"]}
        existing_combos.add((opts.get("Färg",""), opts.get("Storlek","")))

    # Update price on auto-created variant
    time.sleep(0.3)
    for e in existing:
        vid = e["node"]["id"]
        run_gql(f'mutation {{ productVariantsBulkUpdate(productId: "{pid}", variants: [{{ id: "{vid}", price: "{price}" }}]) {{ productVariants {{ id }} userErrors {{ field message }} }} }}')

    # Create remaining combos
    time.sleep(0.3)
    to_create = []
    for color in colors:
        for size in sizes:
            if (color, size) not in existing_combos:
                to_create.append(f'{{ optionValues: [{{ optionId: "{color_oid}", name: "{color}" }}, {{ optionId: "{size_oid}", name: "{size}" }}], price: "{price}" }}')

    total_created = 0
    for i in range(0, len(to_create), 20):
        batch = to_create[i:i+20]
        data = run_gql(f'mutation {{ productVariantsBulkCreate(productId: "{pid}", variants: [{", ".join(batch)}]) {{ productVariants {{ id selectedOptions {{ name value }} }} userErrors {{ field message }} }} }}')
        if data:
            r = data.get("productVariantsBulkCreate", {})
            errs = r.get("userErrors", [])
            if errs:
                print(f"    Variant ERRORS: {errs}")
            else:
                total_created += len(r.get("productVariants", []))
        time.sleep(0.3)

    print(f"    Created {total_created} + {len(existing)} auto = {total_created + len(existing)} total variants")

    # Fetch all variants with inventory item IDs
    time.sleep(0.3)
    total = len(colors) * len(sizes)
    data = run_gql(f'{{ product(id: "{pid}") {{ variants(first: {total + 5}) {{ edges {{ node {{ id selectedOptions {{ name value }} inventoryItem {{ id }} }} }} }} }} }}')
    if data:
        return data.get("product", {}).get("variants", {}).get("edges", []), None
    return None, None


def step4_upload_images(p, cdn_urls):
    pid = p["shopify_gid"]
    entries = [f'{{ originalSource: "{u}", mediaContentType: IMAGE }}' for u in cdn_urls if u]
    if not entries:
        print("    No images")
        return []

    all_ids = []
    for i in range(0, len(entries), 10):
        batch = entries[i:i+10]
        print(f"  Step 4: Upload images batch {i//10+1}...")
        data = run_gql(f'mutation {{ productCreateMedia(productId: "{pid}", media: [{", ".join(batch)}]) {{ media {{ id status }} mediaUserErrors {{ field message }} }} }}')
        if data:
            r = data.get("productCreateMedia", {})
            errs = r.get("mediaUserErrors", [])
            if errs:
                print(f"    Media ERRORS: {errs}")
            for m in r.get("media", []):
                all_ids.append(m["id"])
            print(f"    Uploaded {len(r.get('media', []))}")
        time.sleep(1.5)

    return all_ids


def step5_link_images(p, variants, media_ids):
    pid = p["shopify_gid"]
    colors = p["colors"]
    n_main = p.get("n_main", 5)

    if len(colors) <= 1 or len(media_ids) <= n_main:
        print(f"  Step 5: Skip image linking (single color or no var images)")
        return

    primary_media = media_ids[0] if media_ids else None
    var_media = media_ids[n_main:] if len(media_ids) > n_main else []

    linked = 0
    for v_edge in variants:
        v = v_edge["node"]
        opts = {so["name"]: so["value"] for so in v["selectedOptions"]}
        color = opts.get("Färg", "")

        if color == colors[0]:
            mid = primary_media
        elif color in colors:
            ci = colors.index(color) - 1
            mid = var_media[ci] if 0 <= ci < len(var_media) else None
        else:
            continue

        if not mid:
            continue

        data = run_gql(f'mutation {{ productVariantAppendMedia(productId: "{pid}", variantMedia: [{{ variantId: "{v["id"]}", mediaIds: ["{mid}"] }}]) {{ productVariants {{ id }} userErrors {{ field message }} }} }}')
        if data:
            errs = data.get("productVariantAppendMedia", {}).get("userErrors", [])
            if errs and "already" not in str(errs).lower():
                print(f"    Link err {color}: {errs}")
        linked += 1
        time.sleep(0.15)

    print(f"  Step 5: Linked images to {linked} variants")


def step6_inventory(variants):
    count = 0
    for v_edge in variants:
        v = v_edge["node"]
        iid = v.get("inventoryItem", {}).get("id", "")
        if not iid:
            continue
        key = f"enrich-{iid.split('/')[-1]}-{int(time.time()*1000)}"
        data = run_gql(f'mutation {{ inventoryAdjustQuantities(input: {{ reason: "correction", name: "available", changes: [{{ inventoryItemId: "{iid}", locationId: "{LOCATION_GID}", delta: 10, changeFromQuantity: 0 }}] }}) @idempotent(key: "{key}") {{ inventoryAdjustmentGroup {{ changes {{ name quantityAfterChange }} }} userErrors {{ field message }} }} }}')
        if data:
            errs = data.get("inventoryAdjustQuantities", {}).get("userErrors", [])
            if errs:
                if "expected" in str(errs).lower():
                    pass  # already has stock, skip
                else:
                    print(f"    Inv err: {errs}")
        count += 1
        time.sleep(0.15)
    print(f"  Step 6: Set inventory for {count} variants")


def step7_activate_publish(p):
    pid = p["shopify_gid"]
    data = run_gql(f'mutation {{ productUpdate(input: {{ id: "{pid}", status: ACTIVE }}) {{ product {{ id status }} userErrors {{ field message }} }} }}')
    if data:
        errs = data.get("productUpdate", {}).get("userErrors", [])
        if errs:
            print(f"    Activate ERRORS: {errs}")
        else:
            print(f"  Step 7a: Activated")
    time.sleep(0.3)

    pubs = ", ".join(f'{{ publicationId: "{p}" }}' for p in PUBLICATIONS)
    data = run_gql(f'mutation {{ publishablePublish(id: "{pid}", input: [{pubs}]) {{ shop {{ id }} userErrors {{ field message }} }} }}')
    if data:
        errs = data.get("publishablePublish", {}).get("userErrors", [])
        if errs:
            print(f"    Publish ERRORS: {errs}")
        else:
            print(f"  Step 7b: Published to 3 channels")
    time.sleep(0.3)


def enrich_product(p):
    name = p.get("title_update") or p.get("current_title", "?")
    print(f"\n{'='*60}")
    print(f"ENRICHING: {name}")
    print(f"  GID: {p['shopify_gid']} | Price: {p['price']} SEK")
    print(f"  Colors: {', '.join(p['colors'])}")
    print(f"{'='*60}")

    # Resolve Higgsfield URLs
    all_share_ids = p["main_images"] + p.get("var_images", [])
    # Deduplicate while preserving order
    seen = set()
    unique_ids = []
    for sid in all_share_ids:
        if sid not in seen:
            seen.add(sid)
            unique_ids.append(sid)

    print(f"\n  Resolving {len(unique_ids)} Higgsfield URLs...")
    cdn_urls = []
    with ThreadPoolExecutor(max_workers=5) as ex:
        futures = [(sid, ex.submit(resolve_higgsfield, sid)) for sid in unique_ids]
        for sid, fut in futures:
            url = fut.result()
            cdn_urls.append(url)
            status = "OK" if url else "FAIL"
            print(f"    {status}: {sid}")

    resolved = sum(1 for u in cdn_urls if u)
    print(f"  Resolved: {resolved}/{len(unique_ids)}")

    if resolved == 0:
        print("  ABORTED: No images resolved")
        return False

    # Pipeline
    step1_update_product(p)
    step2_metafields(p)

    variants, _ = step3_options_variants(p)
    if not variants:
        print("  ABORTED: No variants")
        return False

    media_ids = step4_upload_images(p, cdn_urls)

    time.sleep(3)  # wait for media processing
    step5_link_images(p, variants, media_ids)
    step6_inventory(variants)
    step7_activate_publish(p)

    print(f"\n  DONE: {name}")
    return True


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 enrich.py <batch.json>")
        sys.exit(1)

    with open(sys.argv[1]) as f:
        products = json.load(f)

    total = len(products)
    success = 0
    failed = []
    for i, p in enumerate(products):
        print(f"\n\n{'#'*60}")
        print(f"# PRODUCT {i+1} of {total}")
        print(f"{'#'*60}")
        try:
            if enrich_product(p):
                success += 1
            else:
                failed.append(p.get("current_title", "?"))
        except Exception as e:
            print(f"  EXCEPTION: {e}")
            failed.append(p.get("current_title", "?"))

    print(f"\n\n{'='*60}")
    print(f"COMPLETE: {success}/{total} enriched")
    if failed:
        print(f"FAILED: {', '.join(failed)}")
    print(f"{'='*60}")
