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

**Full publish pipeline (end-to-end for one product):**

1. `productCreate` → creates product with default variant (DRAFT status)
2. `productVariantsBulkUpdate` → set price on default variant
3. `productOptionsCreate` → add Färg + Storlek options (creates 1 variant)
4. `productVariantsBulkCreate` → create remaining color × size combinations
5. `productCreateMedia` → upload images from CDN URLs
6. `productVariantAppendMedia` → link images to correct color variants
7. `inventoryAdjustQuantities` → stock each variant (with `@idempotent` + `changeFromQuantity`)
8. `productUpdate` → set status to ACTIVE
9. `publishablePublish` → publish to Online Store + Point of Sale + Shop

Skip step 9 and the product is invisible to customers despite being Active.

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

**Existing metaobjects (created Session 14):**

| Label | Metaobject ID | Base color |
|---|---|---|
| Beige | `gid://shopify/Metaobject/261897093342` | Beige |
| Svart | `gid://shopify/Metaobject/261897126110` | Black |
| Grå | `gid://shopify/Metaobject/261897158878` | Gray |
| Röd | `gid://shopify/Metaobject/261897191646` | Red |
| Mörkblå | `gid://shopify/Metaobject/261897224414` | Navy |

Create new colors with `metaobjectCreate`, then link to product with `metafieldsSet` using the metaobject GIDs as a JSON array.

### Metafields (rich text)

Format for `rich_text_field` type:
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

## Product counts after Session 10

| Category | Count | Status |
|---|---|---|
| Boot placeholders (Boot 1–9) | 9 | ACTIVE |
| Woolen Coat | 1 | ACTIVE |
| Long Wool Trenchcoat | 1 | ACTIVE (8 variants, images mapped, stocked) |
| Outerwear (imported) | 35 | DRAFT |
| Knitwear / Tops (imported) | 46 | DRAFT |
| Dresses (imported Session 9) | 17 | DRAFT |
| Accessories (Tassel Shawl — was in knitwear batch) | 1 | DRAFT |
| **Total** | **110** | |

All 89 unique "Launch" products from the Product Planner spreadsheet are now in the store.

### Fully enriched products

| Product | Variants | Price | Images | Status |
|---|---|---|---|---|
| Woolen Coat | 16 (4 colors × 4 sizes) | 899 SEK | 4 (1 per color) | ACTIVE |
| Long Wool Trenchcoat | 20 (5 colors × 4 sizes) | 999 SEK | 9 (5 Beige + Grå + Svart + Röd + Mörkblå) | ACTIVE |
