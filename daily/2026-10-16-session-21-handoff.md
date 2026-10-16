# Session 21 Handoff — Import Bottoms & Two Piece Set

**Date:** 2026-10-16
**Next agent task:** Import and enrich 14 new products (8 Bottoms + 6 Two Piece Set)

---

## Start here — read these files first

1. `PRODUCT-IMPORT.md` — Full API reference, pipeline steps, gotchas, color metaobject table
2. `scripts/enrich.py` — The enrichment engine (runs batch JSON through 7-step pipeline)
3. This file (you're reading it)

---

## Current store state

| Category | ACTIVE | DRAFT (unenriched) | Notes |
|---|---|---|---|
| Outerwear | 31 | 1 (broken supplier URL) | Done |
| Knitwear / Tops | 31 | 15 | 15 still need enrichment — no images, no options |
| Klänningar (Dresses) | 9 | 8 | 8 still need enrichment — no images, no options |
| Accessoarer | 8 | 0 | Done |
| Western Boots | 1 | 0 | Placeholder |
| No type | 8 | 0 | Boot placeholders |
| **Total** | **88** | **24** | |

**Important:** There are 23 unenriched DRAFT products (15 Knitwear + 8 Dresses) that were created in earlier sessions but never enriched. They exist in Shopify with prices set but have NO images, NO options (Färg/Storlek), and NO metafields. They need batch JSON files built and run through `enrich.py` — but their spreadsheet data may not be readily available. The user should confirm whether those are still needed or should be deleted.

---

## Your task: Import Bottoms & Two Piece Set

### Source data

Two spreadsheets in `~/Downloads/`:

**Bottoms** (`Tibella of Sweden — Product Planner - Women - Bottoms.csv`):

| # | Product | Price (SEK) | Main imgs | Var imgs | Colors |
|---|---|---|---|---|---|
| 1 | Blazer Pants | 699 | 5 | 3 | 4 |
| 2 | Elastic Waist Wide Leg Loose Pants | 499 | 5 | 1 | 2 |
| 3 | Pencil Pants | 499 | 5 | 2 | 3 |
| 4 | Women PU Leather Fleece-lined Leggings | 599 | 5 | 1 | 2 |
| 5 | Wide Leg Pants High Waist | 549 | 5 | 0 | 1 |
| 6 | Casual Long Pants | 499 | 5 | 0 | 1 |
| 7 | Seamless High-Waisted Flare Pants | 599 | 5 | 3 | 4 |
| 8 | Women's Super Soft Flare Pants High Waisted | 599 | 5 | 4 | 5 |

**Two Piece Set** (`Tibella of Sweden — Product Planner - Women - Two Piece Set.csv`):

| # | Product | Price (SEK) | Main imgs | Var imgs | Colors |
|---|---|---|---|---|---|
| 1 | Skräddarsydd Dubbelknäppt Blazer Set | 899 | 5 | 2 | 3 |
| 2 | Two piece set | 1 199 | 5 | 0 | 1 |
| 3 | Two Piece | 1 199 | 5 | 4 | 5 |
| 4 | 2 Piece Set | 1 099 | 5 | 1 | 2 |
| 5 | Ribbed Knit Two Piece Outfit | 799 | 5 | 0 | 1 |
| 6 | 2 Peice Set | 699 | 4 | 2 | 3 |

**Note:** Product #6 "2 Peice Set" only has 4 main images (Main Image 3 column is empty). Set `n_main: 4` in the batch JSON.

### What the spreadsheets DON'T have

The CSVs only contain: product name, supplier URL, prices, and Higgsfield image URLs. They do NOT have:
- **Color names** — you must determine these from the supplier AliExpress listing
- **Swedish product title** — translate and make it store-appropriate
- **Description HTML** — write in Swedish, based on the supplier listing
- **Metafield content** (specifications, materials_care, fit_sizing, key_features) — research from AliExpress
- **Product type** — use `"Byxor"` for Bottoms, `"Set"` for Two Piece Set (new types to add)

### Step-by-step process

#### Phase 1: Create bare products in Shopify

For each product (14 total), create it in Shopify as DRAFT:

```graphql
mutation {
  productCreate(product: {
    title: "<English name from spreadsheet>"
    status: DRAFT
    productType: "<Byxor or Set>"
  }) {
    product { id handle variants(first: 1) { edges { node { id } } } }
    userErrors { field message }
  }
}
```

Then set price on the default variant:

```graphql
mutation {
  productVariantsBulkUpdate(
    productId: "gid://shopify/Product/..."
    variants: [{ id: "gid://shopify/ProductVariant/...", price: "<price>.00" }]
  ) {
    productVariants { id }
    userErrors { field message }
  }
}
```

Record the GID for each product — you'll need it for the batch JSON.

#### Phase 2: Research and build batch JSON

For each product, visit the AliExpress supplier URL (column C in the spreadsheet) to determine:
1. **Available colors** — map to Swedish color names from the 22-color registry
2. **Materials/composition** — for specifications and materials_care metafields
3. **Product details** — fit, features, construction

**Critical: Derive color names FROM the images, not from AliExpress.** The `colors` array in the batch JSON determines which variant gets which image:
- `colors[0]` (default color) → Main Image 1 (first image in `main_images`)
- `colors[1]` → Image Var 1 (`var_images[0]`)
- `colors[2]` → Image Var 2 (`var_images[1]`)
- etc.

**DO NOT try to match a color list from AliExpress to a separate image list.** That cross-referencing is what caused the off-by-one bug on wool-hoodie-dress and long-hooded-cotton-jacket. Instead:

1. Open Main Image 1's Higgsfield URL → see what color the garment is → that's `colors[0]`
2. Open Image Var 1's Higgsfield URL → see what color → that's `colors[1]`
3. Open Image Var 2's Higgsfield URL → see what color → that's `colors[2]`
4. etc.

The image IS the source of truth. You're naming the color from what you see in the photo, so the mapping is guaranteed correct.

**Color name registry (22 colors — use ONLY these Swedish names):**
Aprikos, Armégrön, Beige, Blå, Brun, Cyan, Grå, Grön, Gul, Kamel, Khaki, Lila, Mörkblå, Mörkbrun, Mörkgrön, Olivgrön, Orange, Rosa, Röd, Svart, Vinröd, Vit

If a product has a color not in this list, you'll need to create a new metaobject first. See `PRODUCT-IMPORT.md` section "Color metafield (color-pattern)".

**Use AliExpress for materials, specs, and descriptions only** — not for color identification.

Build a batch JSON file per category with this structure:

```json
[
  {
    "csv_row": 6,
    "shopify_gid": "gid://shopify/Product/<from Phase 1>",
    "current_title": "<English name>",
    "title_update": "<Swedish title>",
    "price": "<price>.00",
    "colors": ["<default color>", "<color 2>", ...],
    "main_images": ["<HF share ID 1>", "<HF share ID 2>", ...],
    "var_images": ["<HF share ID for color 2>", "<HF share ID for color 3>", ...],
    "n_main": 5,
    "description_html": "<p>Swedish description...</p>",
    "specifications": "Material: ...\nStängning: ...\n...",
    "materials_care": "...",
    "fit_sizing": "...",
    "key_features": [
      "Feature 1 in Swedish",
      "Feature 2 in Swedish",
      "Feature 3 in Swedish"
    ]
  }
]
```

**Higgsfield share IDs:** Extract from the spreadsheet URLs. Example: `https://higgsfield.ai/s/r4cL0qGKX4Q` → share ID is `r4cL0qGKX4Q`.

Save as `scripts/bottoms-batch.json` and `scripts/two-piece-batch.json`.

#### Phase 3: Run enrichment

```bash
cd /home/stevenlomon/Documents/shopify-workspace/shopify/tibella-of-sweden-claude-build
python3 scripts/enrich.py scripts/bottoms-batch.json
python3 scripts/enrich.py scripts/two-piece-batch.json
```

The script handles all 7 steps: resolve Higgsfield URLs → update title/description → set metafields → create options/variants → upload images → link images to variants → set inventory → activate → publish.

#### Phase 4: Verify

After enrichment:
1. Check that all products are ACTIVE and published
2. Visit each product page on the storefront
3. Verify: swatch colors are correct (no gray circles), variant switching shows correct image per color
4. If a color gets a gray swatch, add its Swedish name to the fallback lookup in `theme/snippets/product-variant-options.liquid` (both the swatch picker and button picker sections)

---

## Technical reference

### Store details
- Store: `kei3va-ym.myshopify.com`
- Live theme ID: `159361106142`
- Theme directory: `tibella-of-sweden-claude-build/theme/`
- Node version: 24 (`nvm use 24`)

### CLI command pattern
```bash
nvm use 24 && shopify store execute -s kei3va-ym.myshopify.com -q '<GraphQL query>' -j --allow-mutations
```

For long queries, use a temp file:
```bash
shopify store execute --store kei3va-ym.myshopify.com --query-file /tmp/query.graphql --allow-mutations
```

**CLI returns JSON WITHOUT a `data` wrapper** — `{"productCreate": {...}}` not `{"data": {"productCreate": {...}}}`.

### enrich.py internals

The script (`scripts/enrich.py`) has these key constants:
- `STORE = "kei3va-ym.myshopify.com"`
- `LOCATION_GID = "gid://shopify/Location/89877709022"`
- `PUBLICATIONS` — 3 channel GIDs (Online Store, POS, Shop)
- `COLOR_METAOBJECTS` — dict of 22 Swedish color names → metaobject GIDs
- `SHIPPING_RETURNS` — standard Swedish shipping text (same for all products)

Image linking logic (`step5_link_images`):
- `media_ids[0]` → linked to all variants of `colors[0]`
- `media_ids[n_main]` → linked to all variants of `colors[1]`
- `media_ids[n_main + 1]` → linked to all variants of `colors[2]`
- etc.

If `len(var_images) < len(colors) - 1`, some colors will have NO image assigned. This causes the variant to show whatever image was last displayed.

### Theme push (if swatch updates needed)
```bash
cd theme/
shopify theme push --only 'snippets/product-variant-options.liquid' --only 'snippets/swatch.liquid' --only 'snippets/swatch-input.liquid' -t 159361106142
```

Note: use separate `--only` flags per file. Space-separated files after a single `--only` only pushes the first one.

### SEO enrichment (after import)

Products also need SEO titles and descriptions. Previous batches used `scripts/seo-enrichment-full.json`. After importing, build a similar SEO batch with `handle`, `seo_title_sv`, `seo_title_en`, `seo_desc_sv`, `seo_desc_en`, and run the SEO update mutations. This can be a separate session task.

---

## Known issues to watch for

1. **Off-by-one image bug**: If the `colors` array order doesn't match the `var_images` order, every color shows the wrong product image. **Always derive color names by opening each Higgsfield image** — never cross-reference AliExpress color lists with image positions independently.

2. **AliExpress URL redirects**: Some supplier URLs redirect on first load. Retry once before flagging as broken.

3. **Higgsfield resolution failures**: The `resolve_higgsfield()` function fetches the share page HTML and extracts the CloudFront CDN URL. If it fails, the product is skipped. The function has 2 retries built in.

4. **Gray swatch circles**: Shopify's auto-detection doesn't recognize all Swedish color names. The theme has a fallback lookup covering 22 colors. If you add a new color, update both lookup tables in `product-variant-options.liquid`.

5. **"2 Peice Set" has only 4 main images**: Set `n_main: 4` in its batch JSON entry so `var_images` start at index 4 instead of 5.

---

## What NOT to do

- Don't try to set swatch colors via the API — it doesn't work. The theme fallback handles it.
- Don't use `productVariantsBulkUpdate` with `mediaSrc` to link existing images — it silently does nothing.
- Don't forget to publish after activating — products can be ACTIVE but invisible without `publishablePublish`.
- Don't write "Fri frakt över 999 SEK" — shipping is free, period. Use the standard text.
- Don't invent product claims not supported by the supplier listing.
