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
