# Session 28 Handoff — Two-Product Dry Run, Color Tags, URL Slugs

**Date:** 2026-10-17
**Previous session:** Session 27 (carousel fix, spreadsheet columns, size guide overhaul)
**Commits this session:** `904e5a6` (Lesson 20 correction + Lesson 22), plus this handoff commit

---

## Start here — read these files first

1. `GRAPHQL.md` — Now 23 lessons. **New/changed this session:**
   - **Lesson 20 CORRECTED:** Shopify does NOT auto-create 301 redirects on handle change. Must call `urlRedirectCreate` manually.
   - **Lesson 22 NEW:** The full color mismatch fix sequence — verify visually, match Higgsfield filenames, detach/reattach/tag/reorder.
   - **Lesson 23 NEW:** Browser pane screenshots may not composite — `read_page`, `javascript_tool`, and `Read` (for image files) are reliable fallbacks.
2. `PRODUCT-IMPORT.md` — Lesson 18 is the source of truth for color-to-image mapping via Higgsfield URL order.
3. `daily/2026-10-17-session-27-handoff.md` — Full context on all 4 workstreams, collection GIDs, CLI patterns, spreadsheet structure.
4. This file (you're reading it).

---

## What was completed in session 28

### 1. Product 1: Dam Dubbelknäppt Lång Kappa (Sigrid) — All 4 workstreams

Product ID: `gid://shopify/Product/9370991034590`
Spreadsheet row: Women - Outerwear, row 32

**Workstream 1 — Spreadsheet metafields:** Populated F32:H32 from Shopify metafields.

**Workstream 2 — Size data:** Metafields already in Shopify. AliExpress scraped (specs section is reliable; description iframe is not). Standard EU sizing confirmed.

**Workstream 3 — Color mismatch: CRITICAL FIX REQUIRED**

This product had a **wrong color-to-variant assignment**. The import mapped:
- Svart variant → image that was actually Aprikos (beige coat)
- Aprikos variant → image that was actually Svart (black coat)

The fix sequence:
1. Detached all wrong variant-media assignments (`productVariantDetachMedia`)
2. Reattached correctly: Svart→black image, Aprikos→beige image (`productVariantAppendMedia`)
3. Fixed color tags: changed wrongly-tagged complementary images from `color:Svart` to `color:Aprikos`
4. Reordered variants: Aprikos moved to first position (it has 5 images = carousel)

**Key lesson learned:** Upload timestamps were misleading. Images 1-5 uploaded within 20 seconds looked like they were all one color, but image 1 was actually Aprikos and images 2-5 were its complementary shots. Visual verification is mandatory.

**Workstream 4 — URL slug:** Updated handle from `dam-dubbelknppt-lng-kappa-med-konstlammfodrat-krage` to `sigrid-double-breasted-long-coat-with-faux-shearling-collar`. Created `urlRedirectCreate` manually (Lesson 20 correction — Shopify does NOT auto-create redirects).

### 2. Product 2: Stickad Trenchcoat med Huva (Ellinor) — All 4 workstreams

Product ID: `gid://shopify/Product/9370991591646`
Spreadsheet row: Women - Outerwear, row 41

**Workstream 1 — Spreadsheet metafields:** Populated F41:H41 from Shopify metafields:
- F: "Stickad trenchcoat. Lång. Dragkedja och snörning. Huva."
- G: "Normal passform. Lång modell."
- H: "Yttertyg: 100% polyester (stickad). Skötsel: Handtvätt 30°C."

**Workstream 2 — Size data:** Metafields already populated. Size chart present with standard EU sizing.

**Workstream 3 — Color tags: NO MISMATCH, BUT MISSING TAGS**

This product had **correct** variant-image assignments but **zero color tags** on any image. Without tags, the Liquid gallery filter can't separate images by color variant.

The fix:
1. Resolved Higgsfield share URLs via `WebFetch` → got CloudFront CDN filenames
2. Matched CDN filenames to Shopify MediaImage IDs
3. Downloaded 3 hero images via `curl` and viewed with `Read` tool for visual color verification:
   - colors[0] (Main Image 1-5): BLACK = Svart ✅
   - colors[1] (Image Var 1): BEIGE/KHAKI = Khaki ✅
   - colors[2] (Image Var 2): RED/BURGUNDY = Röd ✅
4. Added color tags via `productUpdateMedia`: images 1-5 → `color:Svart`, image 6 → `color:Khaki`, image 7 → `color:Röd`
5. Verified: Svart swatch shows 5-image carousel, Röd shows 1 image, Khaki shows 1 image

No variant reorder needed — Svart (5 images, carousel) was already in first position.

**Workstream 4 — URL slug:** Updated handle from `wind-and-waterproof-hooded-trench-coat` to `ellinor-knit-trenchcoat-with-hood`. Created 301 redirect. Verified old URL redirects to new URL via `javascript_tool`.

### 3. Lesson 20 corrected in GRAPHQL.md

Changed from "Shopify auto-creates a 301 redirect" to "Shopify does NOT auto-create a 301 redirect" with the `urlRedirectCreate` mutation example. This was discovered when the old Sigrid URL returned a 404 after the handle change.

### 4. Lesson 22 added to GRAPHQL.md

Full color mismatch fix sequence documenting:
- The reliable fix order (query → read spreadsheet → compare → detach → reattach → tag → reorder)
- Source of truth: Higgsfield URL order in the spreadsheet (not AliExpress)
- What NOT to do (don't assume timestamps = colors, don't cross-reference AliExpress)

### 5. Lesson 23 added to GRAPHQL.md

Browser pane screenshot fallbacks. The browser pane failed to composite throughout the entire session. Documented `read_page`, `javascript_tool`, and `Read` (for downloaded images) as reliable alternatives.

---

## Two failure modes discovered — both need handling in the overnight run

### Failure Mode A: Wrong variant-image assignments (Sigrid coat)

The import mapped the wrong image to the wrong color variant. Symptoms:
- Swatch says "Svart" but shows a beige coat
- The color with 5 images (carousel) is NOT in first swatch position

Fix requires the full detach/reattach/tag/reorder sequence (GRAPHQL.md Lesson 22).

### Failure Mode B: Correct assignments but missing color tags (Ellinor trenchcoat)

The import assigned the right hero image to the right variant, but NO images had `color:` alt text tags. Symptoms:
- All images show for every color variant (no filtering)
- Or gallery shows empty for non-primary colors (depends on Liquid implementation)

Fix requires only adding color tags via `productUpdateMedia` and verifying gallery filtering.

**Both products needed color tags added.** This is likely universal across the store — the import pipeline does not set color tags.

---

## The verified overnight process — step by step per product

This is the exact process proven on both dry-run products. Follow this for every multi-color product in the store.

### Step 1: Query product data
```graphql
{
  product(id: "gid://shopify/Product/<ID>") {
    id title handle
    options { name values }
    media(first: 20) {
      edges { node { ... on MediaImage { id image { url altText } alt } } }
    }
    variants(first: 20) {
      edges { node { id title selectedOptions { name value } image { id url } position } }
    }
    metafields(first: 10, namespace: "custom") {
      edges { node { key value namespace } }
    }
  }
}
```

### Step 2: Find spreadsheet row and populate metafields

- Spreadsheet ID: `105rq3Amb7v8aYzDw-dl07qfdEaHlVUA2AGNynw7sMAg`
- Tab name: `Women - Outerwear` (NOT "Outerwear" — the full tab name includes "Women - " prefix)
- Headers in row 5, data starts row 6
- Match product by column D (Product Name) or B (keyword)
- Extract plain text from metafield JSON: `specifications` → F, `fit_sizing` → G, `materials_care` → H
- Write with `mcp__0130100f-*__update_values`

**Other tabs follow the same structure:** Women - Tops, Women - Dresses, Women - Bottoms, Women - Two Piece Set, Accessories, Women - Bags, Women - Boots.

### Step 3: Resolve Higgsfield URLs and match to Shopify media

1. Read columns T-Z from the product's spreadsheet row (Higgsfield share URLs)
2. Resolve each share URL via `WebFetch` → extract CloudFront CDN filename (`hf_YYYYMMDD_HHMMSS_UUID.png`)
3. Match CDN filenames to Shopify MediaImage IDs by filename substring

The mapping:
- T-X (Main Image 1-5) = `colors[0]` = primary color (5 images, gets carousel)
- Y (Image Var 1) = `colors[1]` = second color (1 hero image)
- Z (Image Var 2) = `colors[2]` = third color (1 hero image)

Not all products have all 7 images. Some have only T (single color, no variants to fix).

### Step 4: Visual color verification

Download the hero image for each color position and view with `Read`:

```bash
curl -sL -o colors0.png "<CDN URL for Main Image 1>"
curl -sL -o colors1.png "<CDN URL for Image Var 1>"
curl -sL -o colors2.png "<CDN URL for Image Var 2>"
```

Then `Read` each file to determine the actual garment color. Match against the variant color names (Svart, Röd, Khaki, etc.).

### Step 5: Check current assignments and decide fix path

Compare Shopify's current variant→image assignments against what the visual verification says:

**If assignments are WRONG** (Failure Mode A):
1. `productVariantDetachMedia` — detach all wrong assignments
2. `productVariantAppendMedia` — reattach with correct mapping
3. `productUpdateMedia` — set `color:` tags on ALL images
4. `productVariantsBulkReorder` — put carousel color first

**If assignments are CORRECT but tags missing** (Failure Mode B):
1. `productUpdateMedia` — set `color:` tags on ALL images
2. Verify swatch order (carousel color should be first); reorder if needed

### Step 6: Update URL slug + create redirect

```graphql
mutation {
  productUpdate(input: {
    id: "gid://shopify/Product/<ID>"
    handle: "<slug-from-spreadsheet-column-I>"
  }) {
    product { id handle }
    userErrors { field message }
  }
}
```

Then IMMEDIATELY create the redirect (Shopify does NOT auto-create):

```graphql
mutation {
  urlRedirectCreate(urlRedirect: {
    path: "/products/<old-handle>"
    target: "/products/<new-handle>"
  }) {
    urlRedirect { id path target }
    userErrors { field message }
  }
}
```

### Step 7: Verify

- `read_page` on the product page — confirm gallery shows correct images per swatch
- Click each swatch, `read_page` the gallery region — confirm image count and alt text
- `javascript_tool` → `window.location.href` on old URL — confirm redirect

---

## Products completed so far

| Product | GID | Spreadsheet Row | Colors | Fix Type | New Handle |
|---|---|---|---|---|---|
| Dam Dubbelknäppt Lång Kappa (Sigrid) | `9370991034590` | Outerwear 32 | Aprikos, Svart, Khaki | Wrong assignments + missing tags | `sigrid-double-breasted-long-coat-with-faux-shearling-collar` |
| Stickad Trenchcoat med Huva (Ellinor) | `9370991591646` | Outerwear 41 | Svart, Röd, Khaki | Correct assignments, missing tags | `ellinor-knit-trenchcoat-with-hood` |

---

## Products remaining — Outerwear collection

These need the full 4-workstream treatment. Multi-color products (need color verification) are marked.

| Product | GID | Colors | Handle (current) |
|---|---|---|---|
| Stickad Trenchcoat med Huva | `9370991591646` | Svart, Röd, Khaki | ✅ Done |
| Kort Dubbelknäppt Jacka Dam | `9370991460574` | Grön, Svart, Vit, Brun, Röd | `short-double-breasted-jacket` |
| Bältesförsedd Flygarjacka | `9370991100126` | Brun, Svart | `bltesfrsedd-flygarjacka` |
| Dam Bikerjacka med Avtagbar Huva | `9370990969054` | Khaki, Brun, Svart, Beige | `dam-bikerjakka-med-huva-och-avtagbar-kapuschong` |
| Dam Dubbelknäppt Lång Kappa | `9370991034590` | Aprikos, Svart, Khaki | ✅ Done |
| Teddy Fleece-Kappa | `9370991526110` | Vit (single) | `teddy-fleece-mantel` |
| Oversized Bomberjacka | `9370991395038` | Svart (single) | `fur-lined-oversized-bomber-jacket` |
| Lång Kappa i Fuskpäls | `9370991362270` | Mörkbrun (single) | `lng-kappa-i-fuskpls` |
| Kort Läderkappa med Breda Slag | `9370991296734` | Vinröd (single) | `red-lapel-leather-short-coat` |
| Vinterjacka med Huva Dam | `9370991165662` | Aprikos (single) | `hooded-winter-jacket` |

Single-color products still need: spreadsheet metafield population, URL slug update + redirect, and color tag on their images (even single-color products benefit from tags for consistency).

Query the remaining products from the other collections for the full store coverage:
```graphql
{
  collection(id: "gid://shopify/Collection/<COLLECTION_GID>") {
    products(first: 50) {
      edges { node { id title handle options { name values } } }
    }
  }
}
```

---

## Spreadsheet tab names (CRITICAL — session 27 handoff had wrong names)

The actual Google Sheets tab names include the "Women - " prefix:

| Tab name (exact) | Sheet ID |
|---|---|
| `Women - Outerwear` | `183236302` |
| `Women - Tops` | `1590652187` |
| `Women - Dresses` | `1587557099` |
| `Women - Bottoms` | `1563725538` |
| `Women - Two Piece Set` | `436956849` |
| `Accessories` | `1484329838` |
| `Women - Bags` | `728460817` |
| `Women - Boots` | `1248822450` |

All tabs have: row 1 = title, rows 2-4 = metadata, **row 5 = column headers**, data starts at **row 6**.

---

## Higgsfield URL resolution pipeline

The Higgsfield share URLs (`https://higgsfield.ai/s/<ID>`) resolve to CloudFront CDN PNG URLs. The resolution is done via `WebFetch`:

```
Input:  https://higgsfield.ai/s/_TKePP1W5SY
Output: https://d8j0ntlcm91z4.cloudfront.net/user_3KPbK225Z5evh7QTzoHyAKJMfos/hf_20261011_012152_775602a9-39ba-4547-a921-e5a1911eafd7.png
```

The filename `hf_20261011_012152_775602a9-...` appears identically in the Shopify CDN URL after upload:
```
https://cdn.shopify.com/s/files/1/0809/3833/6478/files/hf_20261011_012152_775602a9-39ba-4547-a921-e5a1911eafd7.png
```

Match by the `hf_YYYYMMDD_HHMMSS_UUID` portion to map spreadsheet positions to Shopify MediaImage IDs.

---

## Workstream 1 detail: metafield extraction

The Shopify metafields use rich_text_field type with JSON values. Extract the plain text:

```json
{
  "type": "root",
  "children": [{
    "type": "paragraph",
    "children": [{"type": "text", "value": "THE PLAIN TEXT VALUE"}]
  }]
}
```

Navigate: `.children[0].children[0].value` for single-paragraph metafields. Some may have multiple paragraphs or lists — concatenate all text nodes.

Metafield key → spreadsheet column mapping:
- `custom.specifications` → F (Specifikationer)
- `custom.fit_sizing` → G (Passform & Storlek)
- `custom.materials_care` → H (Material & Skötsel)

If a metafield is empty/missing, the column stays empty — do NOT scrape AliExpress to fill it. The spreadsheet records what IS in Shopify; AliExpress scraping is a separate future task.

---

## Technical reference (carried forward + updated)

### Store details
- Store: `kei3va-ym.myshopify.com`
- Live theme ID: `159361106142`
- Theme directory: `tibella-of-sweden-claude-build/theme/`
- Node version: 24 (`nvm use 24`)

### CLI command patterns
```bash
# Query
source ~/.nvm/nvm.sh && nvm use 24 && \
shopify store execute --store kei3va-ym.myshopify.com --query '<QUERY>'

# Mutation
source ~/.nvm/nvm.sh && nvm use 24 && \
shopify store execute --store kei3va-ym.myshopify.com --allow-mutations --query '<MUTATION>'
```

### Key IDs
- Online Store publication: `gid://shopify/Publication/191226446046`
- Inventory location: `gid://shopify/Location/92906471646`
- Spreadsheet: `105rq3Amb7v8aYzDw-dl07qfdEaHlVUA2AGNynw7sMAg`

### Collection GIDs
| Collection | GID |
|---|---|
| Jackor & Kappor | `gid://shopify/Collection/1135923790046` |
| Stickat & Toppar | `gid://shopify/Collection/1135923822814` |
| Klänningar | `gid://shopify/Collection/1135924183262` |
| Väskor | `gid://shopify/Collection/1135924216030` |
| Stövlar & Skor | `gid://shopify/Collection/1135924248798` |
| Accessoarer | `gid://shopify/Collection/1135942435038` |
| Set | `gid://shopify/Collection/1136270278878` |
| Byxor | `gid://shopify/Collection/1136273359070` |

### Google Sheets MCP tools
- `mcp__0130100f-5b37-4f80-9a2e-f4b3a0ad83de__get_values`
- `mcp__0130100f-5b37-4f80-9a2e-f4b3a0ad83de__update_values`
- `mcp__0130100f-5b37-4f80-9a2e-f4b3a0ad83de__get_spreadsheet`

### Mutations used this session
- `productUpdateMedia` — set alt text (color tags) on images
- `productVariantDetachMedia` — detach wrong variant-image assignments
- `productVariantAppendMedia` — attach correct variant-image assignments
- `productVariantsBulkReorder` — set swatch order (carousel color first)
- `productUpdate` — change handle for URL slug
- `urlRedirectCreate` — create 301 redirect (MUST be called manually)

---

## Remaining tasks (carried forward from session 27)

### Priority 1 — Overnight workstreams for all remaining products
1. Run all 4 workstreams on every product in the store (see "The verified overnight process" above)
2. Start with multi-color products (most likely to have issues), then single-color

### Priority 2 — Follow-up
1. Push metafield values from spreadsheet columns F–H to Shopify (for products where metafields are empty but spreadsheet is populated)
2. Set taxonomy categories on 23 new products
3. Populate `Utvalt — Väskor` and `Utvalt — Stövlar` (5 products each)
4. Delete old "Shoes meny" (`shoes-meny`, GID `255663800542`)
5. Activate Freja Outerwear draft (`Product/9370990608606`)
6. Decide on 23 draft shells (15 Knitwear + 8 Klänningar)
7. Verify all product pages after overnight task completes
8. Verify collection sorting
9. Import missing "Woolen Trench Coat" (row 11, AliExpress 1005012864545306)

---

## Essential reference files

| File | What it contains |
|---|---|
| `GRAPHQL.md` | 23 lessons on Shopify Admin GraphQL API (Lessons 20, 22, 23 new/updated) |
| `DAWN-THEME.md` | 21 lessons on Dawn CSS/JS/Liquid gotchas |
| `PRODUCT-IMPORT.md` | API reference, pipeline steps, color metaobject table, Lesson 18 color order |
| `dove-and-thistle-handoff.md` | Theme architecture: CSS classes, Liquid structure, custom elements |
| `theme/snippets/product-media-gallery.liquid` | Gallery markup with color-tag filtering |
| `memory/MEMORY.md` | Memory index |
