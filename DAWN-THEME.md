# Dawn Theme Build — Learnings

Hard-won lessons from the Dove & Thistle build. Read this before touching Dawn CSS.

## Push safety

**Always `cd theme/` before pushing.** Running `shopify theme push --path .` from the project root treats the root as the theme directory and silently deletes every remote file not present at root level during its "clean" step. This nuked the draft to 4 files mid-session.

```bash
cd /home/stevenlomon/Documents/shopify-workspace/shopify/dove-and-thistle-claude-build/theme && shopify theme push --store kei3va-ym.myshopify.com --theme 159361106142
```

Same applies to `shopify theme dev` — run from inside `theme/`.

**The `--only` cleaning step strips ALL custom files from remote, not just same-type files.** When you push `--only sections/file.liquid --only templates/index.json`, the cleaning step removes any remote file not in that exact list — including `assets/dt-dove-thistle.css`, other sections, snippets, etc. This broke the entire homepage visual in session 2026-10-08: the recovery push used `--only` with only two files, which silently removed `dt-dove-thistle.css` from remote. Every section lost its CSS and rendered unstyled.

**Default to a full push. Use `--only` only when you are certain you're listing every custom file that needs to stay on remote:**

```bash
# Safest — full push from theme/ dir, syncs everything
cd /home/stevenlomon/Documents/shopify-workspace/shopify/dove-and-thistle-claude-build/theme && \
  shopify theme push --store kei3va-ym.myshopify.com --theme 159361106142
```

**Never use `shopify theme pull --only <file>` to check if a file exists on the remote.** If the file is absent from the remote, the pull command will delete your local copy to "match" the remote. Use `shopify theme pull` (full pull into a temp directory) to inspect remote state, or just check after a push rather than before.

## Node PATH

Shopify CLI needs the Node 24 PATH prefix on this machine:
```bash
export PATH="/home/stevenlomon/.nvm/versions/node/v24.14.0/bin:$PATH"
```

## Dawn's slider vs CSS grid conflict

**The problem:** When a section has `swipe_on_mobile: true`, Dawn adds `.slider__slide` to each grid item with `max-width: calc(33.33% - 13.33px)`. In a CSS grid, that percentage resolves against the *grid track width*, not the container. A 900px grid with 3 × 287px tracks gives each item a max-width of only ~82px.

**The fix:** Override `.slider__slide` constraints on any section where you're using CSS grid for desktop layout:

```css
.your-section .product-grid > li {
  max-width: none !important;
  width: 100% !important;
  flex: none !important;
}
```

This is the #1 reason cards appear tiny inside a narrowed grid container.

## Dawn's scroll-trigger animation vs custom transforms

Dawn's `scroll-trigger animate--slide-in` classes apply their own `transform` and `opacity` via IntersectionObserver. If your design uses custom transforms (like the staircase layout), you must disable the animation:

```css
.your-section .product-grid > li.scroll-trigger.animate--slide-in,
.your-section .product-grid > li.scroll-trigger.animate--slide-in.scroll-trigger--loaded {
  animation: none;
}
```

Then apply your own `opacity` and `transform` with `!important` to beat Dawn's specificity.

## Portrait image ratio

Dawn's `card-product.liquid` uses `ratio = 0.8` for portrait mode, giving `--ratio-percent: 125%` (4:5). To get taller cards matching a Figma design, override inside the section:

```css
.your-section .card,
.your-section .card__inner.ratio {
  --ratio-percent: 133% !important; /* 3:4 portrait */
}
```

## CSS specificity strategy for Dawn overrides

Dawn uses layered specificity. The reliable override pattern:

1. **Section wrapper class** (e.g., `.dt-featured-collection`) — added to the section's outer div in Liquid
2. **`!important`** on properties Dawn also sets with `!important` (badge positions, grid widths)
3. **`body` prefix** in `dt-global.css` for global overrides that need to beat Dawn's `.color-scheme` selectors

When `!important` battles `!important`, specificity wins. A data-attribute selector like `[data-dt-center="1"]` adds specificity cheaply without inventing new classes.

## Dev server vs draft theme

`shopify theme dev` creates a *separate* Development theme — it does NOT preview the draft. Changes sync to the dev theme in real-time, which is useful for iteration. Push to the draft when ready for checkpoint review.

## `.dt-section h3` beats `.dt-trust__title` on specificity

**The trap:** `dt-dove-thistle.css` has a general heading-family rule:

```css
.dt-section h1, .dt-section h2, .dt-section h3, ... {
  font-family: var(--dt-font-display);
}
```

Specificity: `.dt-section h3` is `(0,0,1,1)` — one class + one element. Any single-class selector like `.dt-trust__title` `(0,0,1,0)` loses. Trust-bar h3 titles rendered in Cormorant Garamond even though `.dt-trust__title` explicitly set `font-family: var(--dt-font-body)`.

**The fix:** descendant chain. `.dt-trust .dt-trust__title` is `(0,0,2,0)` — beats `.dt-section h3`.

```css
.dt-trust .dt-trust__title { font-family: var(--dt-font-body); }
```

Rule of thumb: any `h1–h6` sitting inside `.dt-section` picks up Cormorant unless the override wins against `.dt-section h3`. Use a descendant chain of two classes, or move the override into `dt-global.css` and prefix with `body`.

## Manrope is only loaded at 400/500/600/700

The `@font-face` block in `layout/theme.liquid` only declares weights 400, 500, 600, and 700 for Manrope. Any `font-weight: 800` on body text triggers synthetic bold or falls back to a system font — which can read as a different family entirely. **Cap body-text weight at 700.** If a Figma label needs heavier, load an 800 face first.

## Dawn's `.media` wrapper has a subtle 1px border

Dawn's `.media` component sets:

```css
border: 1px solid rgba(41, 38, 36, 0.05);
```

Invisible on most backgrounds, but it insets the image by 1px on all sides. Doesn't matter normally — matters a lot when you're trying to make two images **touch exactly at a diagonal corner**. The containers meet at `(center, boundary)` but the images are inset 1px inside each container, so there's a 2px visual gap on each axis. Zero the border on the specific media wrapper:

```css
.dt-multirow .image-with-text__media { border: 0; }
```

## Dawn multirow has `row-gap: 36px` on `.multirow__inner`

Dawn's `.multirow__inner` is a flex column with `row-gap: 36px`. Setting the section's padding to 0 is not enough to make rows butt against each other — the gap is a separate property. Override it:

```css
.dt-multirow .multirow__inner { row-gap: 0; }
```

Combine with the `.media` border zeroing above for pixel-perfect diagonal corner-touching between adjacent rows' images.

## PDP tax line and shipping-note gating

Dawn renders the tax/duties disclaimer in `main-product.liquid` whenever `cart.taxes_included`, `cart.duties_included`, or `shop.shipping_policy.body` is set. That's a store-level toggle, not a theme-level one. Hide via CSS rather than editing the Liquid — keeps the theme editor happy and avoids re-touching the block each time Dawn updates:

```css
.dt-product-page .product__tax,
.dt-product-shipping-line { display: none; }
```

The `shipping_note` block is user-added content; same approach works for it.

## Single-focus gallery: neutralizing Dawn's slider-component

When replacing Dawn's stacked/slider gallery with a single-focus image (show one, hide rest via `display: none` / `is-active` toggle), three separate Dawn JS mechanisms fight you:

### 1. `media-gallery.setActiveMedia()` strips all `is-active` classes

Dawn's `media-gallery.js` `setActiveMedia()` runs `querySelectorAll("[data-media-id]").forEach(el => el.classList.remove("is-active"))` then adds it to its target. Fires on variant change. Override the method on the instance to route through your own nav logic.

### 2. `slider-component` ResizeObserver loop

The `slider-component` wrapping the media list has a `ResizeObserver` on the slider element. Every `display` toggle resizes the container → fires `initPages()` → `update()` → dispatches `slideChanged` → triggers `onSlideChanged` on media-gallery. This creates a feedback loop that flashes images. Neutralize by overriding `update`, `initPages`, and `onButtonClick` to no-ops after your custom element connects.

### 3. `scroll-trigger animate--fade-in` replay

Dawn items carry `scroll-trigger animate--fade-in` classes. Each time an item's `display` changes from `none` to visible, IntersectionObserver re-fires and replays the fade-in animation. Strip both classes from all gallery items on init.

```javascript
// In your custom element's connectedCallback:
this.items.forEach(item => item.classList.remove('scroll-trigger', 'animate--fade-in'));

var slider = this.gallery.querySelector('slider-component');
if (slider) {
  slider.update = function() {};
  slider.initPages = function() {};
  slider.onButtonClick = function() {};
}

this.gallery.setActiveMedia = function(mediaId) {
  // route through your own nav logic
};
```

### 5. Don't crossfade gallery items with `position: absolute`

Crossfading old and new images by making the old item `position: absolute` during exit causes a visible flash — the image briefly renders at its natural/collapsed size before the absolute constraints apply. Dawn's responsive image sizing (padding-top aspect-ratio hacks, percentage widths) breaks when the element leaves normal flow.

**Use incoming-only animation instead.** The old item disappears instantly (`display: none` via `is-active` removal) and the new item slides in. The slide-in provides enough visual continuity without the complexity of dual animations and absolute positioning.

### 6. `animationend` events may not fire in Dawn's context

When using CSS animations on gallery items, `animationend` events can silently fail to fire — even though the animation visually runs and `getComputedStyle` shows the correct animation property. This may be caused by Dawn's other JS intercepting or canceling the animation lifecycle, or by the element's display/position changing mid-animation.

**Never gate navigation on `animationend`.** Use `setTimeout` matching the known animation duration (plus a small buffer) instead:

```javascript
setTimeout(function() {
  oldItem.classList.remove('dt-slide-out');
  newItem.classList.remove(inClass);
  self.animating = false;
}, 420); // 400ms animation + 20ms buffer
```

### 6. Crossfade `dt-slide-out` specificity must match the hide rule

When showing one image at a time via `.is-active`, the hide rule uses the full ancestor chain:

```css
.dt-product-page .product--stacked .product__media-list .product__media-item { display: none; }
/* specificity: (0,4,0) */
```

A `dt-slide-out` class that temporarily shows the old item during crossfade must match or exceed that specificity:

```css
/* WRONG — (0,3,0), loses to hide rule, item stays display:none, animation never plays */
.dt-product-page .product__media-item.dt-slide-out { display: list-item; }

/* RIGHT — (0,5,0), wins */
.dt-product-page .product--stacked .product__media-list .product__media-item.dt-slide-out { display: list-item; }
```

### 7. `div:empty` hides elements with no content

Dawn's `base.css` has `div:empty { display: none }`. Any purely visual div (progress bar fill, decorative elements) with no text content gets hidden. Add `&nbsp;` with `font-size: 0; overflow: hidden` to defeat it without affecting layout.

## Mobile carousel: scroll-snap + JS button navigation

Dawn's `slider-component` and `scroll-trigger` classes break custom mobile carousels the same way they break desktop. For a mobile horizontal carousel, bypass Dawn entirely with CSS scroll-snap:

```css
.your-section .product-grid {
  display: flex !important;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  gap: 16px;
  padding: 0 24px;
}
.your-section .product-grid > li {
  position: static !important;
  opacity: 1 !important;
  transform: none !important;
  width: calc(100vw - 80px) !important;
  min-width: calc(100vw - 80px);
  flex: 0 0 auto;
  scroll-snap-align: center;
  transition: none !important;
}
```

For prev/next buttons, use `scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })` — it works with scroll-snap and doesn't fight Dawn's slider JS.

## Dead CSS from non-scoped mobile/desktop blocks

When writing mobile-first and desktop-specific rules, **never** put both outside media queries. The later block silently wins. Structure as:

1. Base rules (mobile) — no media query
2. Desktop overrides — wrapped in `@media (min-width: 750px)`

Similarly, when adding rules in a `@media (max-width: 749px)` block, check the entire file for later blocks with the same breakpoint. Dawn's CSS + custom additions can have multiple `@media (max-width: 749px)` blocks — the last one's rules win when selectors are equal.

## Trust badges: mobile 2x2 grid with dividers

The grid approach using `border` on the container + `border-right` on odd items + `border-bottom` on items creates cell dividers. Key detail: the outer border (`border: 1px solid`) adds a top/bottom line that may not be desired. Remove it and use internal borders only:

```css
.dt-trust__list {
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0;
  /* No border on the container — just internal dividers */
}
.dt-trust__item { border-bottom: 1px solid var(--dt-color-grey); }
.dt-trust__item:nth-child(odd) { border-right: 1px solid var(--dt-color-grey); }
.dt-trust__item:nth-last-child(-n+2) { border-bottom: 0; }
```

## Collection filter pills: horizontal scroll on mobile

The subcollection pills container needs `overflow-x: auto` + `scrollbar-width: none`. Key: add `padding-left` to the pills flex container so the first pill has spacing, and `padding-right` so the last pill has room when scrolled fully right. Without these, the pills touch the edge of the screen.

## Dawn color schemes live in `settings_data.json`, not CSS tokens

Dawn sections (announcement bar, header, footer, cards, badges) get their colors from **color scheme definitions** in `config/settings_data.json`, not from `--dt-*` or `--tb-*` CSS custom properties. The schemes are stored as hardcoded hex values under `current.color_schemes.scheme-N.settings` and injected by Dawn as inline `--color-background`, `--color-foreground` etc.

Changing `--dt-color-forest` in `dt-dove-thistle.css` does **not** change the announcement bar's background — that's driven by whichever `scheme-N` the section references in `header-group.json` (or `footer-group.json`, template JSON, etc.). To rebrand Dawn's built-in sections, update both:

1. The CSS custom properties in `dt-dove-thistle.css` (for custom `.dt-*` components)
2. The color scheme hex values in `config/settings_data.json` (for Dawn's native sections)

```
announcement-bar → color_scheme in sections/header-group.json
header           → color_scheme in sections/header-group.json
footer           → color_scheme in sections/footer-group.json
product cards    → card_color_scheme in settings_data.json global settings
badges           → sale_badge_color_scheme / sold_out_badge_color_scheme in global settings
```

## `locales/en.json` blocks Shopify CLI dev server

The Shopify CLI dev server shows a blocking error overlay when `locales/en.json` exists locally — "The locale 'en' already exists". This file is a locale override that must be uploaded manually via Shopify Admin (Settings → Languages → English → Import). **For dev server use, temporarily rename it to `en.json.bak` before starting `shopify theme dev`, then restore it afterward.** The error also appears during `shopify theme push` but is harmless there — the push still succeeds for all other files.

## Custom sections: new Liquid files need both section + template reference

Creating a new section file (e.g., `dt-editorial-banner.liquid`) is not enough — it must also be referenced in the template JSON (`index.json`) with a section key in both the `sections` object and the `order` array. If the key is in `sections` but not `order`, the section exists but won't render.

## Dawn's `.grid` class uses flexbox, not CSS grid

Despite the name, Dawn's `.grid` class uses `display: flex` with `flex-wrap: wrap`. The companion classes `grid--3-col-desktop`, `grid--2-col-tablet-down` etc. set `flex-basis` on children via `--grid-desktop-columns`. This works fine for product grids — don't override with CSS grid unless you need features flex can't provide.

## Editorial banner: two-image section pattern

For a full-width editorial with centered text overlay on two side-by-side images:
- Use `display: grid; grid-template-columns: 1fr 1fr` for the image container
- Position the scrim and text overlay with `position: absolute; inset: 0`
- On mobile, hide the second image with `display: none` on `:nth-child(2)` rather than stacking
- Use `--tb-scrim` tokens or `rgba(30, 26, 27, 0.45)` for the overlay darkness

## Image focal point: `object-position` for hero/banner crops

When `object-fit: cover` crops a tall image inside a shorter container, `object-position: center` crops evenly from top and bottom — typically cutting off heads. Fix with a vertical offset:
- `object-position: center 20%` — shows the top 20% as the anchor, revealing heads/upper body
- `object-position: center 35%` — middle-biased, good for full-body shots
- On mobile, combine with horizontal shift: `object-position: 62% 20%` to favor the subject's position

This is the single most common visual mismatch between Figma (which shows the full image) and live (which crops to the container's aspect ratio). Always check after pushing.

## Font-size escalation trap

Using Sunoire-scale `clamp()` values (e.g. `clamp(46px, 13vw, 112px)`) for headings looks right on a 1440px reference but breaks on wider screens and with longer Swedish text. Stick to the design tokens (`--tb-type-display-banner` etc.) which already embed safe `clamp()` ranges tuned for this brand's copy length. Don't override tokens with raw clamp values from a reference site without checking how the copy wraps at max.

## Hero text line-wrap: font-size × container-width interaction

When controlling which words land on which line of a centered display heading, you're tuning **two variables at once**: font-size and container `max-width`. Changing one without the other produces the wrong break point.

The math: for each candidate line, estimate `(char_count × font_size × avg_char_width) + (char_count × font_size × letter_spacing)`. For Cormorant Garamond uppercase, average char width is ~0.55em. Then check whether that total exceeds the container `max-width`.

Example: "VAR VÄLKLÄDD" (12 chars) at 58px with 0.12em tracking ≈ 470px → fits in 600px. "VAR VÄLKLÄDD UNDER" (18 chars) ≈ 720px → breaks at 600px. Result: "VAR VÄLKLÄDD" on line 1, "UNDER VINTERN" on line 2.

The trap: widening `max-width` to 800px to "give more room" lets "VAR VÄLKLÄDD UNDER" fit on one line, breaking after UNDER instead of after VÄLKLÄDD. When you reduce font-size, the original container width often becomes correct again — don't widen both at once.

## Left-edge gutter: `clamp()` vs `max()` with content-width

`padding-left: max(24px, calc((100% - var(--dt-content-width)) / 2))` creates a centered-content effect — good for page-width alignment, but on wide screens (1920px+) it pushes headings far from the viewport edge: `(1920 - 1440) / 2 = 240px`.

For sections where the heading should hug the left edge (category cards, tabbed collections), use `padding-left: clamp(24px, 3vw, 80px)` instead. This scales with viewport but caps at 80px, keeping headings close to the edge on any screen. Use the `max()` formula only when you want content to align with a centered page-width column.

## Multi-file CSS specificity: `body` prefix in dt-global.css silently wins

When the same component has rules in both `dt-global.css` (with `body .class` selectors) and `dt-dove-thistle.css` (with `.class` selectors), `dt-global.css` always wins — `body .class` (0-1-1) beats `.class` (0-1-0). Worse: `dt-global.css` uses `body :is(.color-scheme-1, ...) .class` (0-2-1) for some rules, which beats even two-class selectors in `dt-dove-thistle.css`.

This caused the collection page to look unchanged after a full CSS rewrite: `dt-dove-thistle.css` had correct Sunoire-style rules (sentence-case title, rounded pills, compact toolbar), but `dt-global.css` had older Dove & Thistle rules (uppercase title, square pills, different toolbar layout) that silently overrode them.

**Debugging:** `getComputedStyle()` showed the wrong values. Iterating all `document.styleSheets` and checking `el.matches(rule.selectorText)` revealed the competing rules and their source files.

**Fix:** Don't maintain the same component in two CSS files. Remove the old rules from `dt-global.css` when `dt-dove-thistle.css` takes over a component. Or, if both files must coexist, use the same specificity pattern (e.g., both use `body .class` prefix).

**Prevention:** Before writing new CSS for an existing `.dt-*` class, grep BOTH `dt-global.css` and `dt-dove-thistle.css` for that class name. If it appears in both, decide which file owns it and remove the other.
