# Shopify Admin GraphQL — Lessons Learned

Hard-won gotchas from working with the Shopify Admin GraphQL API via the CLI. Each lesson cost at least one failed mutation.

---

## CLI

### Lesson 1: No `data` wrapper in CLI responses

The Shopify CLI (`shopify store execute`) returns the mutation/query result **without** a `data` wrapper. The response is `{ "productUpdate": {...} }`, not `{ "data": { "productUpdate": {...} } }`.

Every example in the Shopify GraphQL docs shows the `data` wrapper because they assume you're using a standard HTTP client. The CLI strips it.

### Lesson 2: `--allow-mutations` is required for writes

Queries work with just `--query`. Mutations silently fail or error without `--allow-mutations`.

```bash
# Query
shopify store execute --store kei3va-ym.myshopify.com --query '{ shop { name } }'

# Mutation
shopify store execute --store kei3va-ym.myshopify.com --allow-mutations --query 'mutation { ... }'
```

---

## Variant Media

### Lesson 3: One mediaId per variantMedia entry

`productVariantAppendMedia` accepts an array of `variantMedia` entries, but each entry can only have **one** `mediaId`.

```graphql
# WRONG — errors with "Only one mediaId is allowed per media input"
variantMedia: [
  { variantId: "gid://...", mediaIds: ["gid://...1", "gid://...2"] }
]

# RIGHT
variantMedia: [
  { variantId: "gid://...", mediaIds: ["gid://...1"] }
]
```

### Lesson 4: One entry per variant per mutation call

The same `variantId` cannot appear in multiple `variantMedia` entries within a single `productVariantAppendMedia` call.

```graphql
# WRONG — "Variant was specified in more than one media input"
variantMedia: [
  { variantId: "gid://shopify/ProductVariant/123", mediaIds: ["gid://...1"] },
  { variantId: "gid://shopify/ProductVariant/123", mediaIds: ["gid://...2"] }
]
```

To attach multiple images to one variant, you must run separate mutations — but see Lesson 5.

### Lesson 5: Detach before reattaching

`productVariantAppendMedia` fails if the variant already has attached media: "The given variant already has attached media."

The correct sequence for swapping variant images:
1. `productVariantDetachMedia` — remove the wrong image(s)
2. `productVariantAppendMedia` — attach the correct image

You can detach all variants in one call, then attach in a second call. But you cannot detach and reattach in the same mutation.

### Lesson 6: Complementary images can't be variant-assigned

Shopify only allows **one** media per variant via the append API. If a color has 5 images (1 main + 4 complementary), only the main image gets assigned to the variant. The complementary images remain unassigned and show for all variants in the product gallery.

This is a Shopify limitation, not a bug. The gallery carousel shows all images for the product; variant assignment only controls which image shows as the swatch thumbnail.

---

## Variant Reordering & Option Values

### Lesson 7: `productOptionUpdate` does NOT reorder swatches

Calling `productOptionUpdate` with `optionValues` in a new order silently does nothing. The mutation succeeds (no errors) but the option value order is unchanged. This is true even when you include both `id` and `name` for each value.

### Lesson 8: `productVariantsBulkReorder` controls swatch order

The correct mutation for reordering color swatches is `productVariantsBulkReorder`. Reordering the variants drives the option value display order.

To make "Brun" appear before "Svart", place all Brun variants (S, M, L, XL) at positions 1–4 and Svart variants at positions 5–8.

```graphql
mutation {
  productVariantsBulkReorder(
    productId: "gid://shopify/Product/..."
    positions: [
      { id: "gid://shopify/ProductVariant/BRUN_S",  position: 1 },
      { id: "gid://shopify/ProductVariant/BRUN_M",  position: 2 },
      { id: "gid://shopify/ProductVariant/BRUN_L",  position: 3 },
      { id: "gid://shopify/ProductVariant/BRUN_XL", position: 4 },
      { id: "gid://shopify/ProductVariant/SVART_S",  position: 5 },
      { id: "gid://shopify/ProductVariant/SVART_M",  position: 6 },
      { id: "gid://shopify/ProductVariant/SVART_L",  position: 7 },
      { id: "gid://shopify/ProductVariant/SVART_XL", position: 8 }
    ]
  ) {
    product { options { optionValues { name } } }
    userErrors { field message }
  }
}
```

---

## Swatch / Color Metaobjects

### Lesson 9: Renaming a swatch requires the metaobject GID

To change a variant's color swatch (e.g., "Mörkblå" → "Vit"), use `productVariantsBulkUpdate` with both `optionValues` and `linkedMetafieldValue`:

```graphql
mutation {
  productVariantsBulkUpdate(
    productId: "gid://shopify/Product/..."
    variants: [
      {
        id: "gid://shopify/ProductVariant/..."
        optionValues: [
          { name: "Vit", optionId: "gid://shopify/ProductOption/COLOR_OPTION_ID" },
          { name: "S",   optionId: "gid://shopify/ProductOption/SIZE_OPTION_ID" }
        ]
        linkedMetafieldValue: "gid://shopify/Metaobject/VIT_METAOBJECT_ID"
      }
    ]
  ) {
    productVariants { id title }
    userErrors { field message }
  }
}
```

You must include **all** option values for the variant (color + size), not just the one being changed. Omitting the size causes it to be unset.

The `linkedMetafieldValue` points to the color metaobject (type `shopify--color-pattern`) that drives the swatch color chip.

### Lesson 10: The main color should be first in swatch order

The first swatch position determines:
- Which color is selected by default when landing on the product page
- Which variant's image shows in the main gallery on load
- Which color's complementary images appear in the carousel

If a color has the full gallery (carousel with 5 images), it should be the first swatch. Otherwise visitors land on a single-image variant and have to click to discover the carousel exists.

---

## Product Queries

### Lesson 11: Use `productByHandle` when the GID is uncertain

Product GIDs can shift between environments or after deletions/reimports. If a `product(id: ...)` query returns `null`, fall back to `productByHandle(handle: "...")` to get the correct GID.

```graphql
{
  productByHandle(handle: "short-double-breasted-jacket") {
    id
    title
    variants(first: 30) { edges { node { id title } } }
    media(first: 20) { edges { node { ... on MediaImage { id image { url } } } } }
  }
}
```

---

## General Patterns

### Lesson 12: Always check `userErrors`, not just HTTP status

Shopify GraphQL mutations return 200 OK even when the operation fails. The actual success/failure is in the `userErrors` array. Always include it in your selection set and check it before assuming success.

A mutation with empty output and no `userErrors` (like the `productOptionUpdate` reorder attempt) is the most dangerous failure mode — it looks like success but nothing changed.

### Lesson 13: Batch same-color variants in bulk operations

When changing a swatch name or detaching/reattaching media, all size variants of that color need the same treatment. Build the array for all affected variants (S, M, L, XL) in one mutation call rather than running 4 separate mutations.

---

## Variant Reordering vs. Carousel Order

### Lesson 14: `productVariantsBulkReorder` changes swatch order but NOT carousel behavior

Reordering variants controls which swatch appears first and which variant is selected by default. But the product image carousel is controlled by **media position order** (set during upload or via `productReorderMedia`) and **Dawn's `hide_variants` section setting** — not by variant order.

If a color has complementary images (5-image gallery), making it the first swatch does NOT automatically give it the carousel. The carousel grouping depends on:
1. Which images are in the DOM (controlled by `hide_variants`)
2. Which image is the variant's `featured_media`
3. The media position order

### Lesson 15: Dawn's `hide_variants` + custom gallery nav — the full fix

When Dawn's `hide_variants` is `true`, the Liquid template only renders the **selected variant's assigned image** plus all unassigned images. Other variants' assigned images are excluded from the DOM via `{% continue %}`.

**The original bug (session 26):** `dt-gallery-nav.js`'s `setActiveMedia` override stored the first item's `data-media-id` as `initialFirstId` during `connectedCallback`. On every variant switch, Dawn's `product-info.js` `updateMedia()` uses the Section Rendering API to add/remove/reorder gallery `<li>` items, then calls `setActiveMedia`. The check `firstId === initialFirstId` failed after the DOM reorder, hiding the gallery nav entirely.

**Fix 1 — Remove `initialFirstId` gating:** The `setActiveMedia` override should always show the gallery nav after `_refreshItems()` re-queries the DOM. No first-item comparison needed. Dawn's section rendering handles the DOM swap correctly; the gallery nav just needs to reflect the new state.

**Fix 2 — Hide nav when items < 2:** After `_refreshItems()`, if `total < 2`, hide the gallery nav with `display: none` and return. This handles variants with only one image (e.g., a secondary color with no complementary shots).

### Lesson 16: Unassigned complementary images show for ALL variants

Shopify only allows **one** featured media per variant (Lesson 6). Complementary images (additional angles, detail shots) for a color are typically left unassigned. Dawn's `hide_variants` only filters images that are in `variant_images` — unassigned images always render.

This means a 5-image brown gallery (1 hero + 4 complementary) shows all 4 complementary images even when a black variant is selected. The carousel appears for both colors, with the wrong images.

**Fix — Color tags in alt text:** Tag complementary images with `color:{ColorName}` in their alt text (e.g., `"Brun flygarjacka bakifrån | color:Brun"`). Add a Liquid filter in `product-media-gallery.liquid`:

1. Compute `current_color_tag` from the selected variant's first option
2. Count `color_tagged_other` (images tagged for a different color) and subtract from `media_count`
3. In the media loop, skip images whose alt contains `color:` but not `current_color_tag`

Images without `color:` tags (hero images assigned to variants, or truly shared images) are unaffected. The tag is opt-in per product.

### Lesson 17: `productUpdateMedia` sets alt text on product images

```graphql
mutation {
  productUpdateMedia(
    productId: "gid://shopify/Product/..."
    media: [
      { id: "gid://shopify/MediaImage/...", alt: "Description | color:Brun" }
    ]
  ) {
    media { ... on MediaImage { id alt } }
    mediaUserErrors { field message }
  }
}
```

Multiple images can be updated in one call. The `alt` field sets both the HTML alt attribute and the Liquid `media.alt` value. Use descriptive text before the pipe for accessibility; the `color:` tag after it is for programmatic filtering.

---

## Size Guide Tags

### Lesson 18: Product tags route the Storleksguide table type

The size guide modal (`dt-size-guide-modal.liquid`) uses product tags to determine which measurement table to render. Default is the clothing table (bust/waist/hip). Tags override the default:

| Tag | Table shown | Columns | Used for |
|---|---|---|---|
| *(none)* | Clothing | Storlek, Bröst, Midja, Höft | Outerwear, knitwear, dresses, sets |
| `size-guide:bottoms` | Bottoms | Storlek, Midja, Höft | Pants, leggings, skirts |
| `size-guide:boots` | Boots | EU, Fotlängd (cm) | All footwear |
| `size-guide:none` | *(hidden)* | — | Bags, accessories |

The `size-guide:none` tag also hides the "Storleksguide" button in `product-variant-picker.liquid` (both swatch and button picker types).

**Bulk-tagging via CLI:**
```graphql
mutation {
  productUpdate(input: {
    id: "gid://shopify/Product/...",
    tags: ["size-guide:bottoms"]
  }) {
    product { title tags }
    userErrors { message }
  }
}
```

Tags are additive — `productUpdate` with `tags: ["size-guide:bottoms"]` adds that tag without removing existing tags.

### Lesson 19: AliExpress garment measurements vs EU body measurements

AliExpress size charts show **garment measurements** (flat-lay), not body measurements. The Storleksguide shows **body measurements**. The difference is "ease" — extra room built into the garment.

Ease varies by garment type:
| Garment type | Typical bust ease |
|---|---|
| Outerwear (coats, jackets) | +14 to +18 cm |
| Knitwear (cardigans, sweaters) | +4 to +8 cm |
| Stretch knit dresses | -10 to -18 cm (negative = smaller than body) |
| Elastic-waist pants | -2 to +2 cm at waist |

To verify a supplier uses real EU sizing: take their garment measurement, subtract the expected ease for that garment type, and check if the result matches standard EU body measurements. If it does, the supplier's S/M/L/XL corresponds to standard EU sizes.

**Standard EU body measurements (what the Storleksguide shows):**
| Size | EU | Bust (cm) | Waist (cm) | Hip (cm) |
|---|---|---|---|---|
| S | 36 | 84 – 88 | 66 – 70 | 92 – 96 |
| M | 38 | 88 – 92 | 70 – 74 | 96 – 100 |
| L | 40 | 92 – 96 | 74 – 78 | 100 – 104 |
| XL | 44 | 100 – 104 | 82 – 86 | 108 – 112 |

### Lesson 20: `productUpdate` handle change for URL slugs

```graphql
mutation {
  productUpdate(input: {
    id: "gid://shopify/Product/...",
    handle: "hilda-belted-aviator-jacket"
  }) {
    product { handle }
    userErrors { field message }
  }
}
```

Shopify does **NOT** auto-create a 301 redirect when the handle is changed via GraphQL `productUpdate`. You must create the redirect manually with `urlRedirectCreate`:

```graphql
mutation {
  urlRedirectCreate(urlRedirect: {
    path: "/products/old-handle",
    target: "/products/new-handle"
  }) {
    urlRedirect { id path target }
    userErrors { field message }
  }
}
```

Every handle change needs a follow-up redirect. Without it, the old URL returns 404 immediately. The spreadsheet column I contains the target slug for every product, following the `{product-line}-{english-name}` convention.

### Lesson 21: Scraping AliExpress size charts in the browser

AliExpress product pages have a "Size Chart" button with class `.sku-item--sizeIcon--we3E_so`. The scraping pattern:

1. Navigate to the product page
2. Click the Size Chart element (use `javascript_tool` — `find` often can't locate it)
3. Toggle to CM if needed (look for a CM/inches toggle)
4. Extract table data from the modal DOM

The `find` tool and `read_page` struggle with AliExpress's dynamic DOM. Use `javascript_tool` with an IIFE pattern for reliable extraction:
```javascript
(() => {
  const rows = document.querySelectorAll('.size-chart-table tr');
  return Array.from(rows).map(r =>
    Array.from(r.cells).map(c => c.textContent.trim())
  );
})()
```

---

## Color Mismatch Audit & Fix

### Lesson 22: The full color mismatch fix — verify before tagging

The import pipeline frequently maps variant images to the wrong color (positional mapping bug). Upload timestamps can suggest which images belong together, but **never tag or reassign without visual verification**. A batch uploaded within 20 seconds is likely the same color, but you still need to confirm *which* color.

**The reliable fix sequence for a multi-color product:**

1. **Query the product** — get all media IDs (with image URLs), variant image assignments, and option values
2. **Read the spreadsheet** — the Higgsfield URL columns define the canonical color order (see PRODUCT-IMPORT.md Lesson 18). `colors[0]` → Main Image 1, `colors[1]` → Image Var 1, etc. The Higgsfield image filenames embed in the Shopify CDN URLs after upload (`hf_YYYYMMDD_HHMMSS_UUID.png`), so match by filename to determine which Shopify MediaImage corresponds to which spreadsheet color position
3. **Compare against variant assignments** — if Shopify has Svart→MediaImage X but the spreadsheet says that image's position belongs to Aprikos, the assignment is swapped
4. **Detach** all mismatched variants from wrong images (`productVariantDetachMedia`)
5. **Reattach** with correct assignments (`productVariantAppendMedia`) — must be a separate mutation after detach (Lesson 5)
6. **Tag complementary images** — set `color:{ColorName}` alt text on unassigned images (`productUpdateMedia`). Group by Higgsfield upload batch (same timestamp prefix = same color), tag with the color determined by the batch's hero image position in the spreadsheet
7. **Reorder variants** — the color with the most images (the carousel) goes first (`productVariantsBulkReorder`, Lesson 10)

**Source of truth for color-to-image mapping:**

The Higgsfield URL order in the spreadsheet is the single source of truth (PRODUCT-IMPORT.md Lesson 18). Do NOT cross-reference AliExpress color lists — the import pipeline used Higgsfield image order to build the `colors` array, and the spreadsheet preserves that order. AliExpress is only the source of truth for material specs and sizing, never for color-image mapping.

**What NOT to do:**
- Don't assume image filenames or timestamps encode the color — they encode upload order, which correlates with color batch but doesn't tell you WHICH color
- Don't cross-reference AliExpress color options — the color order there may differ from the Higgsfield/spreadsheet order
- Don't tag complementary images based on which variant they're "near" in the media list
- Don't skip the detach step — `productVariantAppendMedia` fails if the variant already has media attached (Lesson 5)

---

## Verification

### Lesson 23: Browser pane screenshots may not composite — use read_page fallbacks

The browser pane can fail with "Screenshot timed out after 5s: the Browser pane is not displayed, so the page is not compositing frames." This can persist for an entire session.

**Reliable alternatives for product page verification:**

| What to verify | Tool | How |
|---|---|---|
| Color tag filtering works | `read_page` | Check image alt text in gallery region — should show `color:Svart` etc. Image count per swatch confirms filtering |
| Swatch switching | `read_page` after clicking swatch | Gallery list should update to show only images matching the clicked color |
| URL redirect works | `javascript_tool` | `window.location.href` after navigating to old URL — confirms it resolved to new URL |
| Which color an image actually shows | `Read` tool on downloaded file | Download Higgsfield CDN images via `curl`, then `Read` the PNG — the tool renders images visually |

**For visual color determination (the overnight process):**

```bash
# Download the three key images (hero for each color position)
curl -sL -o colors0.png "<CloudFront URL for Main Image 1>"
curl -sL -o colors1.png "<CloudFront URL for Image Var 1>"
curl -sL -o colors2.png "<CloudFront URL for Image Var 2>"
```

Then use the `Read` tool on each PNG to visually identify the garment color. This is the only reliable way to determine which color name matches which Higgsfield image position — filenames and timestamps don't encode color information.
