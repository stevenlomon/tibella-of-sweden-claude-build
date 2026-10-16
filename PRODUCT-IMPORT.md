# Product Import — Shopify CLI + Admin GraphQL API

Lessons from importing 17 dress products (2026-10-11, Session 9) and the prior 83 outerwear/knitwear products (earlier sessions).

---

## API patterns that work

### Creating a product (two-step)

**Step 1** — `productCreate` makes the product with a default variant priced at 0.00:

```graphql
mutation {
  productCreate(product: {
    title: "Knitted Dress"
    status: DRAFT
    productType: "Klänningar"
  }) {
    product {
      id
      handle
      variants(first: 1) { edges { node { id } } }
    }
    userErrors { field message }
  }
}
```

**Step 2** — `productVariantsBulkUpdate` sets the price on the default variant:

```graphql
mutation {
  productVariantsBulkUpdate(
    productId: "gid://shopify/Product/..."
    variants: [{ id: "gid://shopify/ProductVariant/...", price: "899.00" }]
  ) {
    productVariants { id price }
    userErrors { field message }
  }
}
```

### Things the API rejects

| What you'd expect to work | What actually happens |
|---|---|
| `productCreate(product: { variants: [...] })` | `ProductCreateInput` doesn't accept `variants`. Must create product first, then update variant. |
| `productDelete(productInput: { id: "..." })` | Argument is `input`, not `productInput`. Correct: `productDelete(input: { id: "..." })` |
| `collectionsCount { count }` on Product | Field doesn't exist on type `Product`. |

### Adding options and variants (full setup)

**Step 1** — `productOptionsCreate` adds option definitions (e.g. Färg, Storlek) with their values:

```graphql
mutation {
  productOptionsCreate(
    productId: "gid://shopify/Product/..."
    options: [
      { name: "Färg", values: [{ name: "Beige" }, { name: "Svart" }] }
      { name: "Storlek", values: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }] }
    ]
  ) {
    product { options { id name optionValues { id name } } }
    userErrors { field message }
  }
}
```

**Gotcha**: This only creates **1 variant** (the first combination, e.g. Beige/S). It does NOT auto-generate all combinations.

**Step 2** — `productVariantsBulkCreate` creates the remaining variant combinations:

```graphql
mutation {
  productVariantsBulkCreate(
    productId: "gid://shopify/Product/..."
    variants: [
      { optionValues: [{ optionId: "...", name: "Beige" }, { optionId: "...", name: "M" }], price: "999.00" }
      { optionValues: [{ optionId: "...", name: "Svart" }, { optionId: "...", name: "S" }], price: "999.00" }
    ]
  ) {
    productVariants { id selectedOptions { name value } }
    userErrors { field message }
  }
}
```

You need the option IDs from Step 1 to reference which option each value belongs to.

**Adding colors later**: `productVariantsBulkCreate` auto-creates new option values if you pass a `name` that doesn't exist yet. No need to call `productOptionUpdate` first — just pass the new color name with the existing `optionId` and it works.

### Variant images

**To link existing product images to variants**, use `productVariantAppendMedia`:

```graphql
mutation {
  productVariantAppendMedia(
    productId: "gid://shopify/Product/..."
    variantMedia: [
      { variantId: "gid://shopify/ProductVariant/...", mediaIds: ["gid://shopify/MediaImage/..."] }
    ]
  ) {
    productVariants { id }
    userErrors { field message }
  }
}
```

**What DOESN'T work**: `mediaSrc` on `productVariantsBulkUpdate` does NOT link existing images — it's for uploading new images from external URLs. Using CloudFront or Shopify CDN URLs in `mediaSrc` silently does nothing when the image already exists on the product.

**API constraints on `productVariantAppendMedia`:**
- Each `variantMedia` entry can only have **1 mediaId** — multiple IDs in the array returns "Only one mediaId is allowed per media input"
- Each variant can only appear **once per mutation call** — duplicates return "Variant was specified in more than one media input"
- To link multiple images to one variant, make multiple mutation calls (or just link the primary color image — the simplest approach that works)

Other notes:
- `productDeleteMedia` takes `mediaIds` (MediaImage GIDs), not ProductImage IDs
- When variant images aren't assigned, ALL product images show in every variant's gallery
- Each variant can have multiple media attached, but the first one becomes the variant's featured image

### Inventory

- `inventoryAdjustQuantities` requires **both** `changeFromQuantity` AND the `@idempotent` directive — without either one, the mutation returns an error
- `changeFromQuantity` is an optimistic concurrency check; you must know the current quantity first (0 for new variants)
- The `@idempotent` directive goes on the **field**, not the mutation: `inventoryAdjustQuantities(...) @idempotent(key: "unique-key")`
- `inventorySetQuantities` also requires `changeFromQuantity` — there is no "just set it" shortcut

```graphql
mutation {
  inventoryAdjustQuantities(input: {
    reason: "correction"
    name: "available"
    changes: [{
      inventoryItemId: "gid://shopify/InventoryItem/..."
      locationId: "gid://shopify/Location/..."
      delta: 10
      changeFromQuantity: 0
    }]
  }) @idempotent(key: "product-variant-stock") {
    inventoryAdjustmentGroup {
      changes { name quantityAfterChange }
    }
    userErrors { field message }
  }
}
```

### Publishing

Products must be explicitly published to each sales channel. Creating a product or setting it to ACTIVE does **not** make it visible on the storefront — it will exist in the admin but won't appear on collection pages or be purchasable.

**The three sales channels:**

| Channel | Publication ID | What it does |
|---|---|---|
| Online Store | `gid://shopify/Publication/191226446046` | Product appears on the website (collection pages, search, direct URL) |
| Point of Sale | `gid://shopify/Publication/191226478814` | Product available in physical POS system |
| Shop | `gid://shopify/Publication/191226511582` | Product appears in the Shop app |

**To publish a product:**

```graphql
mutation {
  publishablePublish(
    id: "gid://shopify/Product/..."
    input: [
      { publicationId: "gid://shopify/Publication/191226446046" }
      { publicationId: "gid://shopify/Publication/191226478814" }
      { publicationId: "gid://shopify/Publication/191226511582" }
    ]
  ) {
    shop { id }
    userErrors { field message }
  }
}
```

**Gotchas:**
- Requesting `publishedOnCurrentPublication` in the return field requires `read_product_listings` scope — use `shop { id }` instead
- A product can be ACTIVE, in a collection, with variants and stock — and still invisible on the storefront if not published to Online Store
- The Shopify admin "Publishing" section shows which channels a product is on — if "Online Store" is missing, that's why it doesn't appear on collection pages
- Publishing is idempotent — calling `publishablePublish` for a channel the product is already on does nothing harmful

**To check current publishing status:**

```graphql
{
  product(id: "gid://shopify/Product/...") {
    publishedOnCurrentPublication
    resourcePublicationsV2(first: 10) {
      edges { node { publication { id name } isPublished } }
    }
  }
}
```

**Full enrichment pipeline (end-to-end for one product):**

1. `metaobjectCreate` → create any new color metaobjects that don't exist yet
2. `productCreate` → creates product with default variant (DRAFT status)
3. `productVariantsBulkUpdate` → set price on default variant
4. `metafieldsSet` → write product metafields (specifications, materials_care, shipping_returns, fit_sizing, key_features). **key_features must use bulleted list format, not paragraph.** All text in Swedish. shipping_returns uses the standard text (see "Content language" below).
5. `productOptionsCreate` → add Färg + Storlek options (creates 1 auto-variant)
6. `productVariantsBulkCreate` → create remaining color × size combinations (set price on each)
7. `productCreateMedia` → upload images from CDN URLs
8. `productVariantAppendMedia` → link primary color image to each color's variants (1 image per variant, 1 entry per variant per call)
9. `inventorySetQuantities` → set stock to 10 per variant (requires `@idempotent` directive on the field + `changeFromQuantity: 0`)
10. `productUpdate` → set status to ACTIVE
11. `publishablePublish` → publish to Online Store + Point of Sale + Shop

Skip step 11 and the product is invisible to customers despite being Active.

**CLI response format:** `shopify store execute` returns JSON **without** a `data` wrapper — e.g. `{"productCreate": {...}}` not `{"data": {"productCreate": {...}}}`. Parse accordingly.

### Markets

- Primary market cannot have regions added via API — `marketRegionsCreate` returns "Cannot add regions to the primary market." Workaround: create a new market and deactivate the old primary.

### Color metafield (color-pattern)

The `shopify.color-pattern` metafield uses `list.metaobject_reference` — not plain text. Each color is a metaobject of type `shopify--color-pattern` with these required fields:

| Field | Type | Example |
|---|---|---|
| `label` | `single_line_text_field` | `"Beige"` |
| `color` | `color` (hex) | `"#D4B896"` |
| `color_taxonomy_reference` | `list.product_taxonomy_value_reference` | `["gid://shopify/TaxonomyValue/6"]` |
| `pattern_taxonomy_reference` | `product_taxonomy_value_reference` | `gid://shopify/TaxonomyValue/2874` (Solid) |

**Common taxonomy value IDs (colors):**

| Color | ID |
|---|---|
| Beige | `gid://shopify/TaxonomyValue/6` |
| Black | `gid://shopify/TaxonomyValue/1` |
| Blue | `gid://shopify/TaxonomyValue/2` |
| Brown | `gid://shopify/TaxonomyValue/7` |
| Gray | `gid://shopify/TaxonomyValue/8` |
| Navy | `gid://shopify/TaxonomyValue/15` |
| Red | `gid://shopify/TaxonomyValue/13` |
| White | `gid://shopify/TaxonomyValue/3` |
| Green | `gid://shopify/TaxonomyValue/9` |
| Pink | `gid://shopify/TaxonomyValue/11` |

**Common pattern:** `Solid` = `gid://shopify/TaxonomyValue/2874`

**All color metaobjects (22 total):**

| Label | Metaobject ID | Hex | Base color | Taxonomy |
|---|---|---|---|---|
| Aprikos | `gid://shopify/Metaobject/266896212190` | `#FBCEB1` | Pink | 11 |
| Armégrön | `gid://shopify/Metaobject/266896048350` | `#4B5320` | Green | 9 |
| Beige | `gid://shopify/Metaobject/261897093342` | `#D4B896` | Beige | 6 |
| Blå | `gid://shopify/Metaobject/266896244958` | `#4169E1` | Blue | 2 |
| Brun | `gid://shopify/Metaobject/261917868254` | — | Brown | 7 |
| Cyan | `gid://shopify/Metaobject/266896376030` | `#00A9B5` | Blue | 2 |
| Grå | `gid://shopify/Metaobject/261897158878` | — | Gray | 8 |
| Grön | `gid://shopify/Metaobject/266896474334` | `#3A7D44` | Green | 9 |
| Gul | `gid://shopify/Metaobject/266896081118` | `#E8C44A` | Yellow | 4 |
| Kamel | `gid://shopify/Metaobject/261917901022` | — | Brown | 7 |
| Khaki | `gid://shopify/Metaobject/266896015582` | `#BDB395` | Beige | 6 |
| Lila | `gid://shopify/Metaobject/266965385438` | `#7B3F8E` | Purple | 12 |
| Mörkblå | `gid://shopify/Metaobject/261897224414` | — | Navy | 15 |
| Mörkbrun | `gid://shopify/Metaobject/266896441566` | `#4A2912` | Brown | 7 |
| Mörkgrön | `gid://shopify/Metaobject/266896310494` | `#2D5A27` | Green | 9 |
| Olivgrön | `gid://shopify/Metaobject/261917966558` | — | Green | 9 |
| Orange | `gid://shopify/Metaobject/266981638366` | `#CC5500` | Orange | 5 |
| Rosa | `gid://shopify/Metaobject/261917933790` | — | Pink | 11 |
| Röd | `gid://shopify/Metaobject/261897191646` | — | Red | 13 |
| Svart | `gid://shopify/Metaobject/261897126110` | — | Black | 1 |
| Vinröd | `gid://shopify/Metaobject/266896146654` | `#722F37` | Red | 13 |
| Vit | `gid://shopify/Metaobject/266896277726` | `#F5F5F5` | White | 3 |

Create new colors with `metaobjectCreate`, then link to product with `metafieldsSet` using the metaobject GIDs as a JSON array.

**Swatch rendering caveat:** Setting `shopify.color-pattern` does NOT drive storefront swatch colors. Shopify auto-detects swatch colors from option value names, but doesn't recognize all Swedish names (notably "Gul" and "Orange"). The theme has a fallback color lookup in `snippets/product-variant-options.liquid` and `snippets/swatch.liquid` that covers all 22 registry colors. If you add a new color metaobject, also add its hex to the theme lookup tables. See DAWN-THEME.md Lesson 16.

### Metafields (rich text)

Format for `rich_text_field` type — **paragraph** (plain text block):
```json
{
  "type": "root",
  "children": [
    {
      "type": "paragraph",
      "children": [{ "type": "text", "value": "..." }]
    }
  ]
}
```

Format for `rich_text_field` type — **bulleted list** (renders as `<ul><li>` via `metafield_tag`):
```json
{
  "type": "root",
  "children": [
    {
      "type": "list",
      "listType": "unordered",
      "children": [
        { "type": "list-item", "children": [{ "type": "text", "value": "First bullet" }] },
        { "type": "list-item", "children": [{ "type": "text", "value": "Second bullet" }] }
      ]
    }
  ]
}
```

**Use bulleted lists for `key_features`.** The theme renders features under "Höjdpunkter" — plain paragraph text with period-separated sentences looks wrong. Each feature should be its own `list-item`.

### Content language

**All product content must be in Swedish.** Descriptions, metafields (specifications, key_features, materials_care, fit_sizing, shipping_returns) — all Swedish. The spreadsheet uses English product names but the store is Swedish-facing.

The standard `shipping_returns` text for all products:
```
Fri frakt på alla beställningar. Leverans inom 5–10 arbetsdagar. 30 dagars öppet köp — returnera enkelt via vår retursida.
```

Never write "Fri frakt över 999 SEK" or any threshold — shipping is free, period.

**Never claim what the supplier doesn't support.** If the AliExpress listing doesn't mention a property (waterproof, windproof, UV-protective, etc.), don't add it to the Shopify description or title. The supplier listing is the source of truth for material claims. Marketing can emphasize features that exist — it cannot invent ones that don't.

**AliExpress URLs can redirect — always retry once.** Some AliExpress product pages redirect on first load (region-based redirects, expired session tokens, bot detection). If a URL appears to show the wrong product or redirects, visit it a second time before flagging it as broken. One retry catches most false positives.

---

## Higgsfield image pipeline

### How Higgsfield URLs work

Higgsfield share URLs (e.g. `https://higgsfield.ai/s/66WMsVf4GSU`) are **HTML pages**, not direct images. The actual image is hosted on CloudFront at a URL like:

```
https://d8j0ntlcm91z4.cloudfront.net/user_XXX/hf_YYYYMMDD_HHMMSS_UUID.png
```

To extract the CDN URL: fetch the share page HTML, look for `d8j0ntlcm91z4.cloudfront.net` URLs. These are direct, publicly accessible PNG files.

### Importing to Shopify

Use `productCreateMedia` with the CloudFront CDN URLs — Shopify downloads them and re-hosts on its own CDN:

```graphql
mutation {
  productCreateMedia(
    productId: "gid://shopify/Product/..."
    media: [
      { originalSource: "https://d8j0ntlcm91z4.cloudfront.net/user_XXX/hf_XXX.png", mediaContentType: IMAGE }
    ]
  ) {
    media { id status }
    mediaUserErrors { field message }
  }
}
```

Results: images land at full resolution (1856×2304px), status READY, hosted on `cdn.shopify.com`.

### Image structure per product

Each product has:
- 1+ color variations (some products have 1, others up to 4)
- Per color: 1 main image + 4 variation images = 5 images
- Minimum 5 images per product, up to 20+ for multi-color products

### Image ordering — position matters

Upload main images in **spreadsheet column order** (Main 1 → Main 5, then Var images). The resulting `product.images` array must follow this convention:

| Position | `product.images` index | Role | Used by |
|---|---|---|---|
| Main 1 | `[0]` | Front view (featured image) | PDP hero, collection cards |
| Main 2 | `[1]` | Hover shot | Collection grid hover |
| Main 3 | `[2]` | **In-action / lifestyle** | **Product story section** (`dt-product-story.liquid`) |
| Main 4 | `[3]` | Detail (texture, collar, buttons) | Gallery |
| Main 5 | `[4]` | Secondary detail or angle | Gallery |

**Main 3 is load-bearing.** The product story section below the buy box pulls `product.images[2]` as its image. If Main 3 is not the in-action shot, the product story shows the wrong image.

**If images land out of order**, fix with `productReorderMedia`:

```graphql
mutation {
  productReorderMedia(id: "gid://shopify/Product/...", moves: [
    { id: "gid://shopify/MediaImage/...", newPosition: "2" }
  ]) {
    job { id }
    userErrors { field message }
  }
}
```

**Verification after import:** Open the PDP, scroll to the product story section, and confirm the in-action image (not a detail/close-up shot) is displayed.

### Mapping images to variants

After upload, use `productVariantAppendMedia` to link images to correct color variants. Each variant's first linked image becomes its featured image.

---

## CLI quirks

### Output parsing

The `shopify store execute` CLI output includes ANSI escape codes, progress spinners, and a formatted box around success/error messages. The JSON payload is embedded after the box.

**What doesn't work:** piping directly to `jq` or `python3 -c "json.load(sys.stdin)"` — the non-JSON preamble breaks the parser.

**What works:** capture full output as text, use regex to extract the JSON object:

```python
import re, json
match = re.search(r'\{[\s\S]*\}', output_text)
data = json.loads(match.group())
```

### Batch scripting

Shell scripts with `shopify store execute` in loops work but you can't rely on `grep` for parsing structured responses — the CLI formatting defeats simple string matching. Use Python with regex-based JSON extraction (pattern above).

Rate limiting: a 0.5s sleep between calls is sufficient for sequential creates. 17 products created in under 60 seconds.

### Duplicate product titles

Shopify auto-generates unique handles for products with the same title:
- First "Knitted Dress" → `knitted-dress`
- Second "Knitted Dress" → `knitted-dress-1`

No errors, no warnings — it just works.

### Locale push error

Every `shopify theme push` shows `locales/en.json "already exists"` — harmless, ignore it.

---

## Auth scopes needed

Current working set:
```
write_products,read_products,write_online_store_navigation,read_online_store_navigation,
read_publications,write_publications,read_inventory,write_inventory,
read_locations,read_markets,write_markets,
read_metaobjects,write_metaobjects,read_metaobject_definitions,write_metaobject_definitions
```

Re-auth command:
```bash
bash -c 'export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 24 && \
  shopify store auth --store kei3va-ym.myshopify.com --scopes write_products,read_products,write_online_store_navigation,read_online_store_navigation,read_publications,write_publications,read_inventory,write_inventory,read_locations,read_markets,write_markets,read_metaobjects,write_metaobjects,read_metaobject_definitions,write_metaobject_definitions'
```

---

## Product counts after Session 17

| Category | Count | Status |
|---|---|---|
| Boot placeholders (Boot 1–9) | 9 | ACTIVE |
| Outerwear — fully enriched | 33 | ACTIVE (variants, images, stock, published) |
| Outerwear — skipped (broken supplier URLs) | 3 | DRAFT (rows 13, 27, 35) |
| Outerwear — unmapped duplicate | 1 | DRAFT (`hooded-parkas-2`, GID 9370990084318) |
| Knitwear / Tops (imported) | 46 | DRAFT |
| Dresses (imported Session 9) | 17 | DRAFT |
| Accessories (Tassel Shawl — was in knitwear batch) | 1 | DRAFT |
| **Total** | **110** | |

All 33 outerwear products with valid supplier URLs are now fully enriched and live. Next category to enrich: Knitwear/Tops (46 DRAFT products).

### Enrichment engine

The one-shot `enrich_products.py` script from Session 16 had 7 known bugs. A new `enrich.py` engine was built in Session 17 with all bugs fixed. It processes products from a JSON batch file through a 7-step pipeline:

1. Resolve Higgsfield share URLs → CloudFront CDN PNGs
2. `productUpdate` → set title + descriptionHtml (Swedish)
3. `metafieldsSet` → 6 metafields (specifications, materials_care, shipping_returns, fit_sizing, key_features as bulleted list, color-pattern reference)
4. `productOptionsCreate` + `productVariantsBulkCreate` → Färg × Storlek (S/M/L/XL)
5. `productCreateMedia` → upload images in spreadsheet column order
6. `productVariantAppendMedia` → link Main 1 to primary color variants, Var N to Nth additional color variants (1 mediaId per call)
7. `inventoryAdjustQuantities` → 10 per variant (@idempotent + changeFromQuantity: 0)
8. `productUpdate(status: ACTIVE)` + `publishablePublish` → 3 channels

Usage: `python3 enrich.py batch.json` — processes each product sequentially, prints progress per step.

### Skipped outerwear products

| Row | Product | GID | Reason |
|---|---|---|---|
| 13 | Parka med Stor Fuskpälshuva Dam | 9370989920478 | Broken AliExpress supplier URL |
| 27 | Dam Lång Dubbelsidig Vinterkappa | 9370990739678 | Broken AliExpress supplier URL |
| 35 | Avslappnad Kort Kappa i Ullblandning | 9370991231198 | Broken AliExpress supplier URL |
| — | Isolerad Parka med Huva Dam (`hooded-parkas-2`) | 9370990084318 | Unmapped duplicate from import |
