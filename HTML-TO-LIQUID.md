# HTML-to-Liquid Translation Guide

Hard-won lessons from converting full HTML page source files (e.g. Sunoire) into Shopify Dawn Liquid sections. Updated each session.

---

## 1. Reading the source HTML

### Structure mapping
- Third-party Shopify themes inline their CSS inside `<style data-shopify>` blocks, one per section. Search for the section's BEM prefix (e.g. `sunoire-bs__`) to find both the HTML and its CSS — they're often 2000+ lines apart.
- The HTML is the layout contract; the CSS is the proportions. You need both before writing any Liquid.

### CSS custom properties
- Reference sites define scoped tokens per section (e.g. `--hd-ink`, `--bag-gutter`). Map these to your own token system rather than copying the names — you'll never remember what `--hd-grey` means in six months.

### Breakpoint strategy
- Most Shopify themes use three breakpoints: mobile-first base, `min-width: 750px` (tablet), `min-width: 990px` (desktop). Extract all three tiers from the reference CSS.
- The mobile layout is the base; desktop is the enhancement. Read mobile CSS first to understand the default, then layer on the desktop overrides.

---

## 2. Layout patterns that translate well

### Edge-to-edge scroll rail (category cards)
**HTML pattern**: flex container with `overflow-x: auto`, negative right margin to bleed past the page gutter.
**Liquid translation**: works directly — the flex/scroll CSS applies to any `<ul>` of rendered snippets. The key trick is the container: `padding-right: 0` lets the scroll rail run to the right viewport edge.

**Left gutter strategy**: For the left edge padding, choose based on intent:
- `padding-left: max(24px, calc((100% - var(--content-width)) / 2))` — aligns with a centered page-width column. Good for body content alignment, but pushes headings 200px+ from the left edge on 1920px+ screens when content-width is 1440px.
- `padding-left: clamp(24px, 3vw, 80px)` — keeps headings close to the viewport edge at all widths. Better for section headings that should feel "pinned left." On 1920px: 57px vs 240px with the `max()` formula.

### 50/50 split grid (featured + product grid)
**HTML pattern**: CSS Grid with `grid-template-columns: minmax(0, 1fr) minmax(0, 1fr)`, featured item in left column spanning full height, right column containing a nested 2×2 grid + "view all" link.
**Liquid translation**: requires restructuring the Liquid template. You can't just use a flat `{% for product %}` loop — you need to separate the first product (featured) from the rest. Use:
```liquid
{%- assign featured = collection.products.first -%}
<div class="featured">{% render 'card-product', card_product: featured %}</div>
<div class="side">
  <ul class="product-grid">
    {%- for product in collection.products limit: count offset: 1 -%}
      <li>{% render 'card-product', card_product: product %}</li>
    {%- endfor -%}
  </ul>
  <a class="view-all" href="...">View all</a>
</div>
```

### Count trap: offset + limit
When splitting a collection into featured + grid, the `limit` on the grid loop must be `products_to_show - 1`, not `products_to_show`. The featured is rendered separately via `collection.products.first`, so `limit: products_to_show offset: 1` gives you products_to_show items *on top of* the featured = total products_to_show + 1. Fix:
```liquid
{%- assign grid_count = products_to_show | minus: 1 -%}
{%- for product in collection.products limit: grid_count offset: 1 -%}
```

### Mobile reorder with `display: contents`
**HTML pattern**: on mobile, the side panel collapses and its children participate directly in the parent grid via `display: contents`, with `order` properties to rearrange (product grid first, featured image second, view-all third).
**Liquid translation**: no Liquid changes needed — this is pure CSS. The Liquid structure stays the same, only CSS changes per breakpoint.

---

## 3. Tab/pill conversion

### Pill tabs → text+underline tabs
Reference sites often use text-only tabs with a `border-bottom` active state rather than pill buttons. To convert:
- Remove `border-radius`, `border`, and `background` from the tab button
- Add `border-bottom: 2px solid transparent` as default
- Active state: `border-bottom-color: var(--accent-color)`
- Set `padding: 0 0 9px` (just bottom padding for the underline gap)
- The Liquid `<button>` markup stays identical — the class name (e.g. `.dt-tab-pill`) doesn't need renaming since it's only a CSS concern

---

## 4. Dawn-specific gotchas when translating

### Product card ratio override
Dawn's `card-product` snippet uses `--ratio-percent` to control image aspect ratio. When you put Dawn product cards inside a custom grid, you must force the ratio:
```css
.your-grid .card__inner.ratio {
  --ratio-percent: 125% !important;
}
```
The `!important` is necessary because Dawn sets this inline via Liquid.

### Featured card height chain
When a product card needs to fill its grid cell height (e.g. the featured left column), you need to set `height: 100%` on the entire chain: `.card-wrapper`, `.card`, `.card__media`, `.media`. Miss one and the card collapses.

### `page-width` class removal
Dawn's `.page-width` constrains sections to `max-width: var(--page-width)` (default 1200px). Custom sections that need full-bleed or custom widths must NOT use this class. Remove it from the Liquid container div and manage width in your own CSS.

### Section wrapper class
Dawn adds a class from the schema's `"class"` field to the section wrapper. Use this for negative-margin tricks (e.g. hero overlay: `.shopify-section--dt-hero { margin-top: calc(-1 * var(--header-height)); }`).

---

## 5. SVG/icon translation

### Arrow icons
Reference sites often use custom SVG arrows. Copy the `viewBox`, `path`, and `stroke` attributes directly into the snippet. Update the `width`/height` attributes and CSS to match. Sunoire's arrow pattern:
```html
<svg viewBox="0 0 30 14" width="30" height="14" aria-hidden="true" focusable="false">
  <path d="M0.5 7h28M22.5 1l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```
Always keep `aria-hidden="true"` and `focusable="false"` on decorative SVGs.

---

## 6. Typography translation

### Font weight mapping
Reference sites may use weight 500 where your theme uses 400. Check your `@font-face` declarations — Manrope only loads 400-700 in this build, so 500 works. Cormorant Garamond loads 400 and 500.

### Display type pattern
Most luxury/fashion sites follow the same display type formula: serif font, uppercase, wide letter-spacing (0.03em–0.12em), light weight (400-500). The variation is in size and line-height. Extract the `clamp()` values from the reference CSS and adapt the range to your viewport targets.

### `!important` on font-size in reference CSS
Third-party themes often use `!important` on headings to override Dawn's base styles. You typically don't need this in custom sections since your selectors are already more specific than Dawn's defaults.

---

## 7. Scrim/overlay translation

### Gradient scrim patterns
- **Bottom-only scrim** (cards): `linear-gradient(180deg, rgba(0,0,0,0) 66%, rgba(0,0,0,0.36) 100%)` — transparent top 2/3, gentle darken bottom 1/3
- **Full overlay scrim** (editorial banners): `rgba(20,18,19,0.50)` — uniform darken
- **Hero scrim** (bottom-heavy): `linear-gradient(180deg, rgba(x,0.10) 0%, rgba(x,0.05) 40%, rgba(x,0.50) 100%)` — mostly transparent, darkens at bottom where text sits

### Text shadow on overlaid text
Add `text-shadow: 0 2px 24px rgba(15,11,10,0.35)` to large display text over images. For smaller labels: `text-shadow: 0 1px 8px rgba(0,0,0,0.3)`.

---

## 8. Image sizing translation

### `sizes` attribute
Update the `sizes` attribute on `image_tag` to match your new card widths:
- Cards at 18.6vw desktop → `sizes: '(min-width: 990px) 19vw, (min-width: 750px) 34vw, 62vw'`
- Featured product at 50% → `sizes: '(min-width: 990px) 50vw, 100vw'`

### `aspect-ratio` vs `--ratio-percent`
For your own elements, use CSS `aspect-ratio`. For Dawn product cards, use `--ratio-percent` (it's what Dawn's JS and CSS expect). Don't mix them on the same element.

---

## 9. Restyling Dawn's drawer-mode facets as a Sunoire-style toolbar

### The problem
Sunoire uses a custom `scv4-toolbar` with sort, pipe divider, filter text, product count — all in one clean horizontal row. Dawn's drawer mode renders three sibling elements: `menu-drawer.mobile-facets__wrapper` (filter button at all sizes), `facet-filters-form.small-hide` (sort select, desktop only), and `div.product-count`. These three live inside `.facets-container-drawer` which uses `display: flex` set in `component-facets.css`.

### Specificity battles with component-facets.css
Dawn's `component-facets.css` is loaded per-page via `{{ 'component-facets.css' | asset_url | stylesheet_tag }}` inside the section Liquid. It sets:
- `.facets-container { display: grid; grid-template-columns: repeat(2, auto); }` (line 1) — the grid override
- `.facets-container-drawer { display: flex; }` (line ~1222) — flex for drawer mode
- `.mobile-facets__wrapper { flex-grow: 1; margin-right: 2rem; }` (line ~1230) — the filter button eats all available space

The `flex-grow: 1` on `.mobile-facets__wrapper` is the main layout breaker: it pushes the sort select and product count to the far right and occupies all remaining space. You MUST use `!important` on `flex-grow: 0` to defeat it — a longer selector alone isn't enough because Dawn's rule is on the element class.

### What you need to override (with !important)
```css
.dt-collection-product-grid .facets-container.facets-container-drawer {
  display: flex !important;
  flex-flow: row nowrap !important;
}
.dt-collection-product-grid .facets-container-drawer .mobile-facets__wrapper {
  flex-grow: 0 !important;
  margin-right: 0 !important;
}
```

### Reordering toolbar items with CSS order
Dawn renders filter first, then sort, then count. Sunoire shows sort first, pipe, filter, count. Use `order` properties:
- `facet-filters-form` → `order: 1` (sort)
- `menu-drawer` → `order: 2` (filter)
- `.product-count` → `order: 3` (count, pushed right with `margin-left: auto`)
- `.active-facets-mobile` → `order: 4` (active filter pills, full width below)

### Pipe divider between sort and filter
Use a `::after` pseudo-element on `facet-filters-form`:
```css
.facets-container-drawer > facet-filters-form::after {
  content: "|";
  margin: 0 14px;
  color: var(--tb-border-subtle);
}
```
On mobile, hide it with `display: none`.

### Mobile: hide sort, show filter icon
Dawn's `.small-hide` utility hides the sort `facet-filters-form` on mobile via `display: none !important`. This is fine — we want sort hidden on mobile. But the filter button's SVG icon is hidden on desktop (with `display: none` on `.svg-wrapper`). On mobile, restore it:
```css
@media (max-width: 749px) {
  .facets-container-drawer .mobile-facets__open .svg-wrapper {
    display: flex;
    width: 16px;
    height: 16px;
  }
}
```

### Key lesson: sentence case, not uppercase
Sunoire's collection title "Bags" is sentence case — NOT uppercase. My first attempt wrongly used `text-transform: uppercase` because luxury sites often do. Always check the reference HTML before assuming text transform.

---

## 10. Subcollection pills: horizontal scroll on mobile

### Desktop layout
Centered flex-wrap container with `gap: 10px`. Each pill has `border-radius: 999px`, `padding: 9px 18px`, active pill filled with accent color.

### Mobile conversion
Switch to horizontal scroll:
```css
@media (max-width: 749px) {
  .dt-collection-subcollections {
    overflow-x: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }
  .dt-collection-banner__pills {
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding-left: 16px;
  }
  .dt-collection-banner__pills::after {
    content: '';
    flex: 0 0 8px;
  }
}
```
The `::after` pseudo-element adds right-edge breathing room at the end of the scroll.

### Placement in section Liquid
Subcollection pills should render BEFORE the facets toolbar, not after. In `main-collection-product-grid.liquid`, move the pills block above the `<div class="facets-vertical...">` wrapper. This matches Sunoire's visual order: title → pills → toolbar → grid.

---

## 11. Dawn card chrome removal

### The problem
Dawn's `card-product.liquid` snippet outputs multiple layers of decorative chrome: borders on `.card`, `border-radius` on `.card-wrapper`, `box-shadow` on `.card__inner`. For a clean Sunoire-style grid (no card borders, image flows into text), you need to strip all of it.

### Minimum reset
```css
.card-wrapper { border-radius: 0; }
.card { border: 0; border-radius: 0; background: var(--page-bg); }
.card--standard.card--media .card__inner {
  border: 0; border-radius: 0; box-shadow: none; background: var(--page-bg);
}
.card__media { border-radius: 0; }
```
All four selectors are needed — Dawn applies decoration at every level.
