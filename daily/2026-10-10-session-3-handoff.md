# Session 3 Handoff — Product Page

**Date**: 2026-10-10
**Previous work**: Collection page styled to match Sunoire layout with Tibella branding
**Next task**: Product page

---

## Where we're at

The collection page is done. The toolbar reads `sortera ▾ | alla filter | färg | 9 produkter` — matching Sunoire's layout with Tibella branding. The full `en.default.json` locale file is now Swedish. Filter drawer slides from the left (intentional deviation from Sunoire's right-side drawer). Column toggle icons (3/4 columns) were deliberately skipped for now.

### What's live
- **Dev theme**: `#159360975070` on `kei3va-ym.myshopify.com`
- **Push command**: `cd theme/ && shopify theme push --development --path .` (use Node 24)
- **Push safety**: NEVER use `--only`; always push all files. The `locales/en.json` error ("locale already exists") is pre-existing and non-blocking.

---

## Where we're going

The Product page needs the same treatment: make it look like Sunoire's product page but with Tibella branding applied. No Figma — the reference is the Sunoire site and any saved HTML source files.

---

## Key files to read first

### Reference material
- `sunoire-collection-page.html` — 539KB saved source of Sunoire's collection page (toolbar, filters, cards). Already analyzed.
- `sunoire-homepage.html` — Sunoire homepage source. Partially analyzed.
- **No Sunoire product page source saved yet** — you'll need to save one or work from the live site.

### CSS architecture (critical to understand)
- **`theme/assets/dt-dove-thistle.css`** (~3900 lines) — ALL custom CSS goes here. Collection styles start at line ~459. Product styles will go after. Uses Tibella design tokens (`--tb-vinrod`, `--tb-natt`, `--tb-surface-page`, etc.) and font variables (`--dt-font-display` = Cormorant Garamond, `--dt-font-body` = Manrope).
- **`theme/assets/dt-global.css`** — Dawn component overrides with `body .class` prefix (specificity 0-1-1). Previous session removed collection overrides that were silently winning over dt-dove-thistle.css. **Check this file before writing ANY `.dt-*` class CSS** — if the class exists here with `body` prefix, it will override your rules.
- **`theme/assets/component-facets.css`** — Dawn's facets CSS, loaded per-page. Has `flex-grow: 1` and grid rules that need `!important` to override.

### Locale files
- **`theme/locales/en.default.json`** — now fully Swedish. This is what the store actually reads. The `en.json` override file exists but isn't applied (Shopify reads `en.default.json` for the default locale).
- Product-related keys are already translated: "Lägg i varukorg", "Slutsåld", "Storleksguide", "Ordinarie pris", "Reapris", etc.
- Custom dt_ keys for trust badges and detail tabs are also Swedish.

### Liquid templates
- **`theme/snippets/facets.liquid`** — heavily customized. Has hardcoded Swedish sort labels, static color filter, price slider, "färg" button JS. Reference for how to customize Dawn snippets.
- **`theme/sections/main-product.liquid`** — the product page section. Check what customizations exist.
- **`theme/snippets/card-product.liquid`** — product card snippet used on collection and product pages.

### Documentation
- **`DAWN-THEME.md`** — Dawn architecture guide including multi-file CSS specificity trap documentation.
- **`HTML-TO-LIQUID.md`** — 12 lessons on translating HTML reference pages to Dawn Liquid. Covers card chrome removal, toolbar restyling, mobile scroll patterns, and more.
- **`knowledge/dr-principles.md`** — Direct response principles for conversion.

### Memory
- **`memory/MEMORY.md`** — index of saved memories. Check for user preferences and feedback.
- **`memory/feedback_shopify_push_only.md`** — CRITICAL: never split pushes across multiple `--only` commands.

---

## CSS specificity trap (learned the hard way)

`dt-global.css` uses `body .class` selectors (specificity 0-1-1) which silently beat `.class` selectors (0-1-0) in `dt-dove-thistle.css`. Before writing CSS for any `.dt-*` class:

1. `grep` BOTH CSS files for the class name
2. If it exists in `dt-global.css` with `body` prefix, either remove it there first or match the specificity

This bug cost an entire session to diagnose on the collection page.

---

## Tibella design tokens

```css
--tb-vinrod: #6D2634       /* accent / CTA */
--tb-natt: #1E1A1B         /* dark text */
--tb-surface-page: #FAF8F5 /* page background */
--tb-text-brand: var(--tb-natt)
--tb-text-body: #3D3638
--tb-text-muted: #8A7E80
--tb-text-inverse: #FAF8F5
--tb-border-subtle: #E0D8D3
--dt-font-display: 'Cormorant Garamond', serif  /* headings */
--dt-font-body: 'Manrope', sans-serif           /* body text */
```

---

## English that remains (can't be fixed via locale files)

These come from Shopify admin settings, not theme locale files:
- Navigation links: "Home", "Catalog", "Contact" → change in admin → Online Store → Navigation
- Subcollection pill text: "All shoes", "Boots", etc. → change in admin → Navigation → menu items
- Product titles/types: "Boot 1", "Western Boots" → change in admin → Products
- Sort dropdown options: "Featured", "Alphabetically, A-Z" → Shopify system strings, tied to admin language setting
- "Price" filter label → change in admin → Settings → Search & discovery → Filters

---

## Ben's working preferences

- Show examples before building. Analysis first, production after proof.
- Don't be obnoxious. No cheerleading, no AI fluff.
- Patterns that work twice → promote to memory.
- At session end: ask what's worth promoting into memory.
- Push safety: always batch all files, never `--only`.
