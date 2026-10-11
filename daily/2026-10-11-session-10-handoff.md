# Session 10 Handoff — 2026-10-11

## Store

- **Dev store**: `kei3va-ym.myshopify.com`
- **Theme**: Tibella of Sweden X Dawn (`#159361106142`) — pushed and live
- **Working dir**: `/home/stevenlomon/Documents/shopify-workspace/shopify/tibella-of-sweden-claude-build/`
- **Push command**:
  ```bash
  cd /home/stevenlomon/Documents/shopify-workspace/shopify/tibella-of-sweden-claude-build/theme && \
    bash -c 'export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 24 && \
    shopify theme push --store kei3va-ym.myshopify.com --theme 159361106142 --allow-live'
  ```
- **GraphQL mutation command**:
  ```bash
  bash -c 'export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 24 && \
    shopify store execute --store kei3va-ym.myshopify.com --allow-mutations --query "mutation { ... }"'
  ```

---

## What got done this session

### 1. Long Wool Trenchcoat — fully enriched from scratch

Took a bare product with a default variant and turned it into a complete, purchasable product with 5 colors, 20 variants, 9 images, and inventory. This was the **first full end-to-end enrichment** proving the entire pipeline works.

**Final product state:**
- **Product**: Long Wool Trenchcoat (`gid://shopify/Product/9370989658334`)
- **Options**: Färg (Beige, Svart, Grå, Röd, Mörkblå) × Storlek (S, M, L, XL) = **20 variants**
- **Price**: 999 SEK (all variants)
- **Stock**: 10 units per variant at Location `gid://shopify/Location/89877709022` (Tallbacken 26)
- **Images**: 9 total — 5 Beige gallery (front, back, in-action, collar detail, skirt detail) + 1 each for Grå, Svart, Röd, Mörkblå
- **Variant images**: Each color's variants correctly show that color's image
- **Published**: Online Store + Point of Sale + Shop
- **Status**: ACTIVE, visible on Jackor & Kappor collection page

### 2. Higgsfield image pipeline — proven and documented

Established the full pipeline from Higgsfield share URLs to Shopify variant thumbnails:

1. Higgsfield share URL (`higgsfield.ai/s/XXX`) → HTML page
2. Extract CloudFront CDN URL (`d8j0ntlcm91z4.cloudfront.net/user_XXX/hf_XXX.png`) from the page
3. `productCreateMedia` with CDN URL → Shopify uploads and re-hosts on `cdn.shopify.com`
4. `productVariantAppendMedia` with `{ variantId, mediaIds }` → links image to variant

### 3. Critical API discovery: `productVariantAppendMedia` vs `mediaSrc`

**This was the biggest finding.** We spent time debugging why variant images showed "NO IMAGE" after using `mediaSrc` on `productVariantsBulkUpdate`. The fix:

- `mediaSrc` on `productVariantsBulkUpdate` = for uploading **NEW** images from external URLs. If the image already exists on the product, it silently does nothing.
- `productVariantAppendMedia` = for linking **EXISTING** product images to variants. Input: `{ variantId: ID!, mediaIds: [ID!]! }`. This is the correct mutation.

### 4. Product not visible on collection page — publishing fix

Long Wool Trenchcoat was ACTIVE, in the Jackor & Kappor collection, had variants and stock — but didn't appear on the storefront. Root cause: it was published only to "Point of Sale" and "Shop", **not "Online Store"**. Fixed with `publishablePublish` to `gid://shopify/Publication/191226446046`.

This is a silent failure — no error, no warning. Product looks fully set up in admin but is invisible to customers.

### 5. Image convention established and documented

Created `memory/image-convention.md` documenting the spreadsheet image structure:
- Main Images 1-5 (cols M-Q): primary color gallery — main, hover, in-action, detail, detail
- Image Var 1-4 (cols R-U): one front shot per additional color

Ben's brother generates images via Higgsfield. Duplicates can happen (brother pasted same URL in two columns — caught and fixed this session).

### 6. PRODUCT-IMPORT.md — extensively updated

Added full documentation for:
- The 9-step publish pipeline (end-to-end)
- `publishablePublish` mutation with all 3 publication IDs
- Publishing gotchas (ACTIVE ≠ visible, idempotent, how to check status)
- `productVariantAppendMedia` pattern (correct) vs `mediaSrc` (wrong for linking)
- `productVariantsBulkCreate` auto-creates new option values
- `inventoryAdjustQuantities` with `@idempotent` + `changeFromQuantity`
- Higgsfield CDN pipeline

### 7. Spreadsheet duplicate detection

Caught that Image Var 1 and Var 2 had the same Higgsfield URL. Flagged to Ben, brother fixed it. Also correctly traced the URL shifts when brother reorganized the columns and added Mörkblå.

---

## Current state of the store

### Products

| Category | Count | Status |
|---|---|---|
| Boot placeholders (Boot 1–9) | 9 | ACTIVE |
| Woolen Coat | 1 | ACTIVE, fully enriched (16 variants, 4 images) |
| Long Wool Trenchcoat | 1 | ACTIVE, fully enriched (20 variants, 9 images) |
| Outerwear (imported) | 35 | DRAFT |
| Knitwear / Tops (imported) | 46 | DRAFT |
| Dresses (imported Session 9) | 17 | DRAFT |
| Accessories (Tassel Shawl) | 1 | DRAFT |
| **Total** | **110** | |

All 89 unique "Launch" products from the Product Planner spreadsheet are in the store. 2 are fully enriched (variants, images, stock, published). 99 remain as Draft placeholders.

### What's built and working
- Cart drawer (production-ready, Tibella-branded, Swedish)
- Product page (gallery, variant picker, trust badges, metafield accordions, product story)
- Homepage (hero, collections carousel, tabbed collection, image features, trust, FAQ, footer)
- Header (dual-logo, always-sticky, conditional transparent/solid)
- Collection page (banner, portrait grid, filter drawer)
- All Dawn templates styled via `dt-global.css`
- Mobile responsive at 375px
- Sverige market active

---

## Where we're going next

### Priority 1: Collection hover effect — show back shot instead of zoom

Currently hovering a product card on the collection page does a slight zoom on Main Image 1. Ben wants it to **swap to Main Image 2** (the back/alternate shot) on hover instead. This is a Dawn template change — likely in the product card snippet. Main Image 2 needs to be available as a secondary image source in the card markup.

### Priority 2: Bulk product enrichment

99 Draft products need the same treatment as Long Wool Trenchcoat:
1. Fetch image URLs from the Google Sheet ("Tibella of Sweden — Product Planner", fileId: `105rq3Amb7v8aYzDw-dl07qfdEaHlVUA2AGNynw7sMAg`)
2. Extract CloudFront CDN URLs from Higgsfield share pages
3. Upload via `productCreateMedia`
4. Create color/size variants via `productOptionsCreate` + `productVariantsBulkCreate`
5. Link images to variants via `productVariantAppendMedia`
6. Stock via `inventoryAdjustQuantities` (with `@idempotent` + `changeFromQuantity`)
7. Set ACTIVE + publish to all 3 channels

The pipeline is proven — it's now about scaling it. Consider batching with Python scripts (see `scratchpad/fix-trenchcoat.py` and `scratchpad/add-morkbla.py` for working patterns).

### Priority 3: Store cleanup
- Navigation menu (currently placeholder, should match header links)
- Collection page filter buttons (shoe subcategories showing on Jackor & Kappor)
- Store policies (shipping, returns, about pages)
- Boot 1-9 placeholder removal
- Purchase event tracking (Ben mentioned this in Session 8)

---

## Key IDs

| Thing | ID |
|---|---|
| Store | `kei3va-ym.myshopify.com` |
| Theme | `#159361106142` |
| Location (Tallbacken 26) | `gid://shopify/Location/89877709022` |
| Online Store publication | `gid://shopify/Publication/191226446046` |
| Point of Sale publication | `gid://shopify/Publication/191226478814` |
| Shop publication | `gid://shopify/Publication/191226511582` |
| Long Wool Trenchcoat | `gid://shopify/Product/9370989658334` |
| Woolen Coat | `gid://shopify/Product/9370989756638` |
| Google Sheet | `105rq3Amb7v8aYzDw-dl07qfdEaHlVUA2AGNynw7sMAg` |

---

## Shopify CLI auth

Current scopes:
```
write_products,read_products,write_online_store_navigation,read_online_store_navigation,read_publications,write_publications,read_inventory,write_inventory,read_locations,read_markets,write_markets
```

Re-auth command:
```bash
bash -c 'export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 24 && \
  shopify store auth --store kei3va-ym.myshopify.com --scopes write_products,read_products,write_online_store_navigation,read_online_store_navigation,read_publications,write_publications,read_inventory,write_inventory,read_locations,read_markets,write_markets'
```

---

## Essential reading for a new session

### Must-read (before doing anything)
1. **This file** — `daily/2026-10-11-session-10-handoff.md`
2. **`PRODUCT-IMPORT.md`** — The entire Shopify API playbook: product creation, variant setup, image upload + linking, inventory, publishing. Every gotcha we've hit and solved. **Read the full publish pipeline section.**
3. **`DAWN-THEME.md`** — Dawn architecture, push safety, CSS specificity traps, rem scaling (1rem = 10px), all 15 lessons
4. **`memory/MEMORY.md`** — Memory index (user prefs, CSS gotchas, image convention)
5. **`memory/user-identity.md`** — Ben's working preferences (no false confidence, precision, skip live preview after push)

### Product enrichment context
6. **`memory/image-convention.md`** — How the spreadsheet image columns map to product images and variant assignments
7. **Scratchpad scripts** — `scratchpad/fix-trenchcoat.py` and `scratchpad/add-morkbla.py` have working Python patterns for the full enrichment pipeline (JSON extraction, GraphQL execution, variant creation, image mapping, inventory stocking)

### Design system
8. **`theme/assets/dt-dove-thistle.css`** (first ~80 lines) — Tibella color tokens
9. **`dove-and-thistle-handoff.md`** — Brand tokens, typography

### Store build
10. **`THEME-BUILD-MANIFEST.md`** — Section/template inventory and verification checklist

---

## Team
- **Ben** (`ben@cleanconversion.com`) — branding, sales, design decisions. Does visual QA himself.
- **Steven** — dev, handles all git/GitHub operations. Never push or touch remote without Steven.
