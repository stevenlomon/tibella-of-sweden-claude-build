# Session 15 Handoff — 2026-10-11

## What happened

### Bulk SEO deployed to all 98 products
Deployed Swedish SEO enrichment (title, SEO title, SEO description, tags) to all 98 products in the store via a Python script using `productUpdate` mutations. 17 dress products that had no descriptions also got generated descriptions. All 98 succeeded, zero errors.

Script pattern: inline GraphQL in temp files via `--query-file`, parse only `stdout` (stderr has progress JSON that breaks the parser). 0.5s sleep between calls. Script at `scratchpad/deploy_seo_v3.py`.

Enrichment data saved to:
- `scripts/seo-enrichment-full.json` — full Swedish SEO data for all 98 products
- `scripts/seo-english-secondary.json` — English translations stored for future international expansion

### Collections aligned with spreadsheet
Verified and fixed all collections to match the product planner:

| Collection | Handle | Rule | Products |
|---|---|---|---|
| Jackor & Kappor | `jackor-kappor` | TYPE=Outerwear | 35 |
| Stickat & Toppar | `stickat-toppar` | TYPE=Stickat | 46 |
| Klänningar & Set | `klanningar-set` | TYPE=Klänningar | 17 |
| Väskor | `vaskor` | TYPE=Väskor | 0 (no products yet) |
| Stövlar & Skor | `stovlar-skor` | TYPE=Stövlar | 0 (no products yet) |
| Accessoarer | `accessoarer` | TYPE=Accessoarer | 8 |
| Nyheter | `nyheter` | TAG=Nyheter | varies |

**Fix applied:** Klänningar & Set had rule `TYPE=Dresses` (English) — changed to `TYPE=Klänningar` to match the actual productType on the 17 dress products.

### 8 accessory products imported
Created 8 new products from the "Accessories" sheet in the product planner (all rows marked "Launch"):

| Product | Handle | Price |
|---|---|---|
| Pullover Sjal | `pullover-sjal` | 749 SEK |
| Triangelsjal | `triangelsjal` | 399 SEK |
| Vinterhalsduk | `vinterhalsduk` | 399 SEK |
| Stickad Sjal | `stickad-sjal` | 399 SEK |
| Läderbälte med Dubbel O-Ring Spänne | `laderbalte-med-dubbel-o-ring-spanne` | 399 SEK |
| Smal Skärp med Ringspänne | `smal-skarp-med-ringspanne` | 399 SEK |
| Stretchbälte med Dubbla Spännen | `stretchbalte-med-dubbla-spannen` | 399 SEK |
| Franssjal i Stickad Poncho-Modell | `franssjal-i-stickad-poncho-modell` | 599 SEK |

All 8: created, priced, SEO-enriched (Swedish titles, meta title, meta description, tags, product description), set to ACTIVE, published to Online Store + POS + Shop.

### Homepage category cards fixed
- Added `"collection"` handle to each block in `index.json` so cards link to their dedicated collection pages instead of `/collections/all`
- Set the Jackor & Kappor collection image to the teddy coat theme asset via `collectionUpdate` API (the collection link was overriding the fallback image with a product image)
- Accessoarer card restored with collection link to `/collections/accessoarer`

### Current product counts

| Category | productType | Count | Status |
|---|---|---|---|
| Outerwear | Outerwear | 35 | ACTIVE (SEO done) |
| Knitwear / Tops | Stickat | 46 | ACTIVE (SEO done) |
| Dresses | Klänningar | 17 | ACTIVE (SEO done) |
| Accessories | Accessoarer | 8 | ACTIVE (SEO done) |
| Boots (placeholder) | — | 9 | ACTIVE |
| Woolen Coat (full setup) | Outerwear | 1 | ACTIVE |
| Long Wool Trenchcoat (full setup) | Outerwear | 1 | ACTIVE |
| **Total** | | **117** | |

---

## Where we're going

### Immediate next steps
1. **Sync remaining spreadsheet categories with Shopify** — Women - Bottoms, Women - Two Piece Set, Women - Bags, Women - Boots sheets all have products marked "Launch" that aren't imported yet
2. **Add Accessoarer to the navigation** — the collection exists and the homepage card links to it, but it's not in the top nav menu yet
3. **Images** — still waiting on brother to finish. Once done: upload via `productCreateMedia`, map to variants with `productVariantAppendMedia`, set alt texts. The image position convention (Main 1–5) is documented in `PRODUCT-IMPORT.md`
4. **Options & variants** — products currently have only a default variant. Need `productOptionsCreate` (Färg, Storlek) + `productVariantsBulkCreate` for all combinations. Color metaobjects already exist for Beige, Svart, Grå, Röd, Mörkblå
5. **Inventory** — stock each variant via `inventoryAdjustQuantities` (requires `@idempotent` directive + `changeFromQuantity`)

### Longer term
- Deploy English SEO when international markets open (data already in `scripts/seo-english-secondary.json`)
- Google Shopping feed optimization
- Image alt texts (SEO prompt generates them but they're not deployed yet — needs images first)

---

## Essential files to read

### Start here
- **`CLAUDE.md`** — workspace rules, memory system, file layout
- **This file** — current state and next steps

### API patterns and CLI quirks
- **`PRODUCT-IMPORT.md`** — the complete API reference. Two-step product creation, variant setup, image pipeline, publishing (3 publication IDs), inventory with `@idempotent`, color metaobjects, CLI output parsing. Read this before touching the API.

### SEO
- **`knowledge/seo-product-prompt.md`** — the proven SEO enrichment prompt. Swedish primary, English secondary. Field structure, examples, rules.

### Theme
- **`theme/templates/index.json`** — homepage template. Category cards, hero, tabbed collection, editorial banner, trust bar, FAQ. Each category card block has a `collection` handle setting.
- **`theme/snippets/dt-collection-card.liquid`** — image priority: `block.settings.image` > `collection.featured_image` > `fallback_asset`
- **`theme/sections/dt-collection-grid.liquid`** — renders the "Shoppa efter kategori" carousel

### Data
- **`scripts/seo-enrichment-full.json`** — all 98 products' Swedish SEO data with Shopify product IDs
- **`scripts/seo-english-secondary.json`** — English SEO data stored for international expansion

### Product planner (source of truth)
- Google Sheet: `105rq3Amb7v8aYzDw-dl07qfdEaHlVUA2AGNynw7sMAg`
- Sheets with "Launch" rows: Women - Outerwear (done), Women - Tops (done), Women - Dresses (done), Accessories (done), Women - Bottoms (pending), Women - Two Piece Set (pending), Women - Bags (pending), Women - Boots (pending)

---

## Key technical details

### Store
- Store: `kei3va-ym.myshopify.com`
- Live theme ID: `159361106142`
- Theme push command (run from `theme/` directory): `shopify theme push --store kei3va-ym.myshopify.com --theme 159361106142 --allow-live`

### NVM setup (required before every shopify CLI call)
```bash
export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 24
```

### Publication IDs (for publishablePublish)
- Online Store: `gid://shopify/Publication/191226446046`
- Point of Sale: `gid://shopify/Publication/191226478814`
- Shop: `gid://shopify/Publication/191226511582`

### CLI quirks
- Use `--query-file` for mutations (shell escaping defeats inline `-q` with Swedish characters)
- Parse only `stdout` — `stderr` contains progress JSON that breaks JSON parsers
- `--allow-mutations` required for writes
- `--allow-live` required for theme push (may be blocked by auto-mode classifier — user runs manually)

### Collection rule field
- The column is `TYPE` (not `PRODUCT_TYPE`)
- Values must match the `productType` string exactly (case-sensitive)
