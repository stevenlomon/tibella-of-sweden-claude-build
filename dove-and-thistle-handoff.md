# Dove & Thistle — Technical Handoff

*Last updated: 2026-10-07*

## What this is

A Shopify Dawn 16.0.0 theme customization for Dove & Thistle, a women's clothing and lifestyle brand (clothing, footwear, accessories, home & living, gifts). Customer: women 40–60. The build skins Dawn to match a Figma design using custom sections, CSS overrides, and minimal Liquid changes to core Dawn files.

**Store:** `kei3va-ym.myshopify.com`
**Draft theme ID:** `159361106142`
**Theme name:** Dove & Thistle — Claude Build (draft)

## How to push / dev

**Critical:** Always `cd theme/` before running Shopify CLI commands. Running from the project root treats root as the theme directory and nukes the draft.

```bash
export PATH="/home/stevenlomon/.nvm/versions/node/v24.14.0/bin:$PATH"
cd /home/stevenlomon/Documents/shopify-workspace/shopify/dove-and-thistle-claude-build/theme

# Push to draft
shopify theme push --store kei3va-ym.myshopify.com --theme 159361106142

# Dev server (hot-reloads to a separate Development theme, not the draft)
shopify theme dev --store kei3va-ym.myshopify.com
```

A `.claude/launch.json` exists for the dev server via the Browser pane (`shopify-dev` configuration on port 9292).

## Project structure

```
dove-and-thistle-claude-build/
├── theme/                          # The Shopify theme (push from here)
│   ├── assets/
│   │   ├── dt-dove-thistle.css     # Primary design-system CSS (~2436 lines)
│   │   ├── dt-global.css           # Global Dawn overrides (~1178 lines)
│   │   ├── dt-cart-drawer.css      # Cart drawer styles (~447 lines)
│   │   ├── icon-filter.svg         # Custom 3-line filter icon
│   │   └── (Dawn assets + self-hosted fonts)
│   ├── sections/
│   │   ├── dt-hero.liquid          # Full-bleed hero with scrim overlay
│   │   ├── dt-collection-grid.liquid  # 3-2 layout collection grid
│   │   ├── dt-image-feature.liquid # 50/50 image-copy split
│   │   ├── dt-product-story.liquid # Product story section
│   │   ├── dt-trust-bar.liquid     # Trust badges (shipping, returns, etc.)
│   │   ├── dt-faq.liquid           # Accordion FAQ section
│   │   └── featured-collection.liquid  # Modified Dawn section (carousel)
│   ├── snippets/
│   │   └── facets.liquid           # Modified: desktop label, sort in drawer
│   ├── layout/
│   │   └── theme.liquid            # Modified: loads dt-dove-thistle.css + fonts
│   ├── templates/
│   │   ├── index.json              # Homepage sections
│   │   ├── collection.json         # Collection page sections
│   │   └── product.json            # PDP sections
│   ├── locales/
│   │   └── en.default.json         # Modified: "Filter & Sort" string
│   └── config/
│       └── settings_data.json      # Color scheme + theme settings
├── design-system/                  # Design reference (not deployed)
│   ├── readme.md                   # Brand book: colors, type, layout, components, voice
│   ├── tokens/                     # CSS tokens (colors, typography, spacing, shapes)
│   ├── components/                 # React components from Figma
│   └── ui_kits/storefront/         # Reference screens (HomeScreen.jsx, CollectionScreen.jsx, etc.)
├── DAWN-THEME.md                   # Hard-won Dawn lessons (read before touching CSS)
├── CLAUDE.md                       # Session instructions
└── memory/                         # Persistent memory files
    ├── MEMORY.md                   # Index
    └── user-identity.md            # Ben at Clean Conversion
```

## CSS architecture

Three custom CSS files, loaded in this order:

1. **`dt-dove-thistle.css`** (index 2) — Design tokens, section-specific styles, component overrides. All custom sections use `.dt-` prefixed classes. Contains the type ramp, color tokens, and per-section styling.

2. **`dt-global.css`** (index 3) — Global Dawn overrides using `body` prefix for specificity. Covers header, footer, cards, pagination, collection toolbar, drawer toolbar, and color-scheme heading overrides.

3. **`dt-cart-drawer.css`** — Cart drawer-specific styles.

Dawn's component CSS files (e.g. `component-facets.css`) load at indices 16–44, *after* both custom files. This means:
- At equal specificity, Dawn wins over `dt-dove-thistle.css` (loaded earlier)
- `body` prefix in `dt-global.css` beats Dawn's bare selectors
- For overrides in `dt-dove-thistle.css`, you need `body` prefix or higher specificity to beat Dawn

**Key specificity pattern:** `dt-global.css` uses compound selectors like `body .facets-container.facets-container-drawer .mobile-facets__open` — if you try to override these from `dt-dove-thistle.css`, you need at least matching specificity. See `DAWN-THEME.md` for details.

## Color tokens

```
--dt-color-forest:        #234238   (headings, footer, inverse blocks)
--dt-color-parchment:     #F7F2E9   (warm sections)
--dt-color-burgundy:      #6A3446   (buttons, active states, links)
--dt-color-burgundy-deep: #542738   (button hover)
--dt-color-gold:          #AD8954   (eyebrows, category labels — except FAQ which uses forest)
--dt-color-charcoal:      #292624   (body text)
--dt-color-grey:          #C9C3BC   (1px rules, borders)
--dt-color-stone:         #706A65   (muted text)
--dt-color-ink:           #181515
--dt-color-wine:          #160209   (collection tile scrims)
```

## Typography

- **Display/headings:** Cormorant Garamond SemiBold (self-hosted woff2)
- **Body/UI:** Manrope (self-hosted woff2)
- Type ramp tokens: `--dt-type-display-xl` through `--dt-type-ui-s`
- Buttons: `--dt-type-ui-m` (13px/18px SemiBold) or `--dt-type-ui-s` (12px/16px SemiBold) + uppercase + tracking

## Pages built

### Homepage (`index.json`)
Section order: dt_hero → dt_collections → dt_feature → featured_collection → dt_editorial (multirow) → dt_trust → dt_faq.
- Collection cards (`dt-collection-card.liquid`) no longer render the `↗` arrow — the paragraph now fills the row.
- Four eyebrows cleared via `index.json`: `dt_hero.eyebrow` ("Thoughtfully chosen", cleared 2026-10-07), `dt_feature.eyebrow` ("A considered edit"), `dt_editorial.gifting.caption` ("Thoughtful gifting"), `dt_editorial.philosophy.caption` ("Our point of view"). The Liquid still gates on `!= blank`, so the eyebrows just don't render.
- **Editorial multirow diagonal touch (2026-10-07):** gifting image's bottom-right corner touches philosophy image's top-left corner at a single pixel. Fixed by `row-gap: 0` on `.dt-multirow .multirow__inner` (Dawn ships it at 36px) and zeroing the 1px `.media` border on `.dt-multirow .image-with-text__media`. See [[dawn-multirow-diagonal-touch]].

### Collection page (`collection.json`)
- **Banner:** `main-collection-banner` with collection hero, breadcrumbs, description, subcollection pills (linked to menus via `subcollection_menu` setting)
- **Product grid:** `main-collection-product-grid` — 4 columns desktop, 2 mobile, portrait images, drawer filter
- **Trust bar + FAQ** below the grid

### Product page (`product.json`)
- Custom block order: category → title → price → shipping note → variant picker (button style, circle swatches) → quantity → buy buttons → trust badges → description → product details → share
- Sticky info panel, stacked gallery, left media position
- **Figma-aligned pass (2026-10-07):**
  - FAQ eyebrow is "Customer care" (was "Product care")
  - `.product__tax` ("Taxes included.") and `.dt-product-shipping-line` are hidden via CSS. The shipping copy already lives in the trust strip, and the tax disclosure is store-level, not something to edit per-block.
  - 1px grey divider between price and variant picker, applied as a top border on `variant-selects` with 20px top padding/margin.
  - Trust badges reworked (`snippets/dt-product-trust.liquid` + CSS): now a vertical 4-item flex column, each row is a horizontal `icon | title | detail`. Added fourth item (Helpful support). Icons scaled to 20px. Locale strings updated so detail copy matches the homepage trust bar ("On every US order", "Shop with confidence", "Your payment is protected", "Here when you need us").

## Modified Dawn files

### `snippets/facets.liquid`
1. **Desktop filter label** — Changed from just "Filter" to "Filter & Sort" on all screen sizes (was only "Filter and sort" on mobile)
2. **Drawer heading** — Same: shows "Filter & Sort" on desktop too
3. **Sort in drawer** — Removed `medium-hide large-up-hide` class from the sort section inside the drawer so it's visible on all breakpoints

### `sections/featured-collection.liquid`
1. **Carousel controls** — Added `data-dt-center="1"` attribute to the product grid `<ul>` for staircase layout
2. **Functional prev/next buttons** — Replaced Dawn's static slider buttons with JS-driven carousel that rotates `data-dt-center` attribute (center card at full opacity + 16px translateY, side cards at 0.7 opacity)
3. **Script** — Inline JS handles click events to cycle the center index

### `layout/theme.liquid`
- Loads `dt-dove-thistle.css` and self-hosted font files

### `locales/en.default.json`
- `filter_and_sort` changed from "Filter and sort" to "Filter & Sort"

### `assets/icon-filter.svg`
- Replaced Dawn's slider-with-dots icon with a 3-line funnel filter icon

## Key technical decisions

### Featured collection carousel
- Uses CSS Grid (not Dawn's slider component) because Dawn's `.slider__slide` sets `max-width: calc(33.33% - 13.33px)` which resolves against grid track width, shrinking cards to ~82px. Override: `max-width: none !important; width: 100% !important; flex: none !important;`
- Dawn's `scroll-trigger animate--slide-in` animation must be disabled (`animation: none`) to allow custom transforms
- Staircase effect via `data-dt-center` attribute: CSS rules match `[data-dt-center="0"] > :nth-child(1)` etc.
- 4px card overlap via `width: calc(100% + 4px); margin-left: -2px`
- 14px left padding on `.card__content` for text indent from image edge
- 133% portrait ratio (3:4) via `--ratio-percent` override on `.card` and `.card__inner.ratio`

### Filter drawer
- Slides from left (not Dawn's default right) via:
  - `margin-left: 0; margin-right: auto` (positions flush left)
  - `translateX(-105vw)` when closed (off-screen left)
  - Dawn's existing `translateX(0)` on `.menu-opening` brings it on screen
- Standalone sort dropdown (`#FacetSortDrawerForm`) hidden with `display: none`
- Drawer styled to match Figma: 340px max-width, Cormorant Garamond 24px heading, uppercase section labels, burgundy "Show Products" button
- `dt-global.css` has the highest-specificity rules for the filter toolbar (compound selectors like `body .facets-container.facets-container-drawer .mobile-facets__open`) — override these there, not in `dt-dove-thistle.css`

### Button hover states
- All `.dt-button--primary:hover` and `.product-form__submit:hover` use `--dt-color-burgundy-deep` (#542738), not forest green
- This includes the homepage CTA and product page Add to Cart

### FAQ eyebrow
- Uses `.dt-faq__intro .dt-eyebrow` override to change color from gold to forest green + uppercase. Other `.dt-eyebrow` instances (hero, collection grid, featured collection) remain gold.

## Collection page configuration

- `filter_type: "drawer"` — drawer-based filtering, not horizontal or vertical sidebar
- `enable_filtering: true`, `enable_sorting: true`
- Subcollection navigation via menu handle (`subcollection_menu: "shoes-meny"`) — connected through `main-collection-banner` settings
- 12 products per page, 4 columns desktop, 2 mobile, portrait image ratio

## Design reference

- **Figma:** `Dove & Thistle.fig` — pages: Design (37 frames), Design-Assets (7 frames)
- **Claude Design project:** `e5a4b5e4-f6f9-4137-b5df-279b1529b51d` (accessible via DesignSync tool)
- **Design system readme:** `design-system/readme.md` — comprehensive brand book with all tokens, components, voice guidelines
- **UI kits:** `design-system/ui_kits/storefront/` — React reference screens (HomeScreen.jsx, CollectionScreen.jsx, ProductScreen.jsx)

## Open loops / known gaps

0. **Product page Figma-match, remaining items (2026-10-07):**
   - **Media gallery** — Figma shows 2-up on the top row and a wider image below. Current renders Dawn's stacked layout. Would require touching the media section in `main-product.liquid`.
   - **"SIZE" vs "SHOE SIZE"** — the label comes from the product's option name in Shopify admin, not theme code. Overridable in Liquid but hacky; cleaner to rename the option on each product.
   - **"SIZE GUIDE" link** beside the size label — needs the `size_guide_page` setting wired in `product.json` plus a variant-picker snippet tweak to render the link.
   - **"COLOR · CREAM" format** with a middle-dot — Dawn's variant picker renders `COLOR: <value>`. Needs a snippet edit.
1. **Store data gaps** — Boot 1 and Boot 2 products don't have product types set in Shopify admin, so the gold category eyebrow on product cards is empty for those. Merchant content issue, not code.
2. **Subcollection menus** — Only "shoes-meny" menu exists. Other collections need their own menus created in Shopify admin Navigation.
3. **Tablet breakpoint** — Not yet verified. The carousel goes single-column at 749px. The collection grid goes single-column at 749px. May need a tablet-specific layout (2 columns?).
4. **Cart drawer** — Styled but not deeply iterated against Figma yet.
5. **Mobile nav drawer** — Uses Dawn defaults with dt-global.css overrides. Not custom-built to Figma.
6. **Footer** — Styled in dt-dove-thistle.css but may need Figma alignment pass.
7. **Search** — Uses Dawn defaults.
8. **Filter & Sort drawer + toolbar — Figma-aligned pass complete (2026-10-07).** Current drawer order: **SORT BY → PRICE → COLOR**. Availability hidden by Liquid skip in `facets.liquid` (`filter.v.availability`). Toolbar is a 40px slim band with "Filter & Sort" (title case, 15px) + "{N} products" vertically centered.
   - **Toolbar:** `padding: 16px 0`, `flex-wrap: nowrap`, pills form hidden. The empty pills form was reserving a wrapped second row (24px) when `flex-wrap: wrap` was active. See [[dawn-facets-toolbar]] for the full gotcha.
   - **Sort:** inline radio list (burgundy-dot `:checked` state) with hardcoded Figma whitelist of 6 (Featured, Newest, Price: Low to High, Price: High to Low, Name: A-Z, Name: Z-A). Each option only renders if its Shopify value exists in `results.sort_options`; falls back to Featured when the collection's current sort isn't in the whitelist.
   - **Price:** dual-handle range slider (`<dt-price-slider>` custom element) built on top of Dawn's hidden min/max inputs. Dragging a thumb updates the hidden input and dispatches an `input` event, so Dawn's existing debounced submit picks up the change unchanged. Dawn's From/To text inputs are visually hidden but kept in the DOM for form submission. Dawn's `.mobile-facets__submenu` slide-in pattern is overridden to `position: static` for the price panel so it renders inline.
   - **Color (static):** hardcoded Figma swatches (Black, Brown, Cream, Burgundy) rendered when no `color` filter exists in `results.filters`. Clicks write `filter.v.option.color=<name>` URL params. **Merchant action required for the filter to actually work:** in Shopify admin, (a) add a Color variant option to products with values matching the four names, (b) go to **Settings → Search & discovery → Filters → Add filter → Color** and configure it. Until that's done, clicking a swatch updates the URL but no products match.
   - **Section headers:** CSS-generated `+`/`—` icons via `::before`/`::after` on `.mobile-facets__arrow`
   - **Subtitle:** "{collection.title} · {count} products" under the heading (stone grey, 13px). A stale `display: none` on `.mobile-facets__count` in `dt-global.css` had to be removed.
   - **Section labels:** 12px uppercase 600 Manrope, matching Figma
   - **X close:** `position: fixed` at (292, 38) scoped to `.mobile-facets__disclosure[open]`. Dawn nests the close inside the toolbar `<summary>`, so absolute positioning anchors to the toolbar, not the drawer. See [[dawn-drawer-close-positioning]].
   - **Glitch fix (minus-click):** Dawn's `MenuDrawer` adds `menu-opening` + sets `aria-expanded="true"` 100ms after every summary click, fighting the native close. Capture-phase script after `</menu-drawer>` stops propagation on `.mobile-facets__details > summary` clicks. See [[dawn-mobile-facets-nested-details]].
   - **Locale tweaks:** `clear_all` → "Clear all", `sort_by_label` → "Sort by". Hardcoded "Show Products" as the drawer submit button text in facets.liquid.

## Gotchas

1. **Push from `theme/` directory only.** Running from project root deletes everything.
2. **Node PATH** — Shopify CLI requires `export PATH="/home/stevenlomon/.nvm/versions/node/v24.14.0/bin:$PATH"` on this machine.
3. **`shopify theme dev` creates a separate Development theme**, not the draft. Push to the draft for checkpoint reviews.
4. **CSS load order** — `dt-dove-thistle.css` loads at index 2, `dt-global.css` at 3, Dawn components at 16–44. You can't override Dawn component CSS from `dt-dove-thistle.css` at equal specificity — use `body` prefix or put the rule in `dt-global.css`.
5. **Dawn's color-scheme heading rule** — `body .color-scheme-1 :is(h1, h2, ...)` in `dt-global.css` sets headings to forest green. To override for a specific element, you need higher specificity (e.g. `body .mobile-facets__inner .mobile-facets__heading`).
6. **Dawn's scroll-trigger animations** — Any section using custom transforms must disable `animation: none` on `.scroll-trigger.animate--slide-in` elements, or Dawn's IntersectionObserver will fight your transforms.
7. **Shopify CDN caching** — After pushing, the version parameter on CSS files changes. Force-refreshing the browser may be needed to see changes immediately.
8. **Not a git repo** — This project directory is not under version control. The draft theme on Shopify is the only checkpoint mechanism.
9. **`.dt-section h3` catches every heading inside a `.dt-section`.** `dt-dove-thistle.css` has a `.dt-section h1, …, .dt-section h3, …` rule setting `font-family: var(--dt-font-display)` with specificity (0,0,1,1). Any single-class override like `.dt-trust__title` (0,0,1,0) loses — the heading renders in Cormorant. Use a two-class descendant chain (`.dt-trust .dt-trust__title`) or move the override to `dt-global.css` with `body` prefix. See `DAWN-THEME.md`.
10. **Manrope is only loaded at 400/500/600/700.** `font-weight: 800` triggers synthetic bold or a fallback — often reads as a serif on the page. Keep body-text weights at ≤700 unless you load an 800 face.
11. **Dawn's `.media` has an invisible 1px border** (`rgba(41,38,36,0.05)`) that insets images by 1px. Doesn't matter until you want two images to touch at a corner — then zero it on the specific wrapper.
12. **Dawn's `.multirow__inner` has `row-gap: 36px`.** Section padding of 0 is not enough to make rows butt against each other. Override `row-gap: 0` on `.dt-multirow .multirow__inner`.
