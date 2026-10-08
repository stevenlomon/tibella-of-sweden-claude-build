# Theme Build Manifest — Dawn Base

**Purpose:** Every template, section, and route listed here MUST have the design applied before the build is "done." If a row is unchecked, the build is incomplete.

**Base theme:** [Shopify/dawn](https://github.com/Shopify/dawn) (cloned to `dawn-reference/`)

**Build 2026-10-07:** pushed as draft theme **Dove & Thistle — Claude Build (draft)** (#159361106142). Working copy in `theme/`. Based on the live theme (itself Dawn 16.0.0 + the dt-* custom sections) with the new design system applied: self-hosted Cormorant Garamond/Manrope woff2 (previously Cormorant was never loaded — headings silently fell back to system Garamond), final token ramp, 5 brand color schemes (white page ground), and a new `assets/dt-global.css` styling every stock Dawn component the earlier build skipped.

---

## 0. Pre-build audit — template suffix scan

**DO THIS BEFORE BUILDING.** Products, pages, collections, and blogs in Shopify can have a `templateSuffix` that points them to an alternate template file. If a product's suffix is `custom-product`, Shopify looks for `templates/product.custom-product.json`. If that file doesn't exist in the new theme, the storefront silently falls back to a blank/stock page — no error, no warning.

### How to audit

Pull the live theme's templates and compare against Dawn's defaults:

```bash
# Pull live theme templates
shopify theme pull --store STORE --theme LIVE_THEME_ID --only "templates/*" --path /tmp/live-templates

# List all template files — anything beyond the Dawn defaults is an alternate
ls /tmp/live-templates/templates/
```

Dawn's defaults (13 files):
`404.json`, `article.json`, `blog.json`, `cart.json`, `collection.json`, `gift_card.liquid`, `index.json`, `list-collections.json`, `page.contact.json`, `page.json`, `password.json`, `product.json`, `search.json`

Any file not in that list is an alternate template that products/pages are assigned to. **The new theme must include a matching file for every alternate, or those pages go blank.**

### This store's audit result

- **Store:** kei3va-ym.myshopify.com
- **Live theme:** dove-and-thistle-theme/main (#159282888926)
- **Alternate templates found:** None — only the 13 Dawn defaults exist.

Re-run this audit if the merchant assigns products to new custom templates before the new theme goes live.

---

## 1. Global (applies to every page)

| Done | File | What to design |
|------|------|----------------|
| [x] | `layout/theme.liquid` | Global wrapper — CSS custom properties, fonts, meta |
| [x] | `sections/header-group.json` | Header section group |
| [x] | `sections/header.liquid` | Navigation, logo, cart icon, search |
| [x] | `sections/announcement-bar.liquid` | Top banner bar |
| [x] | `sections/footer-group.json` | Footer section group |
| [x] | `sections/footer.liquid` | Footer columns, links, newsletter, socials |
| [x] | `sections/cart-drawer.liquid` | Slide-out cart drawer |
| [x] | `sections/predictive-search.liquid` | Search overlay/dropdown |
| [x] | `config/settings_schema.json` | Theme settings (colors, typography, global tokens) |
| [x] | `config/settings_data.json` | Default values for all theme settings |

---

## 2. Templates — every page type

### Homepage (`templates/index.json`)
| Done | Section | Type |
|------|---------|------|
| [x] | image_banner | `image-banner` |
| [x] | featured_collection | `featured-collection` |
| [x] | *(add design sections here)* | — |

**Verify:** `/`

### Product page (`templates/product.json`)
| Done | Section | Type |
|------|---------|------|
| [x] | main | `main-product` |
| [x] | disclosures | `disclosures` |
| [x] | related-products | `related-products` |

**Verify:** `/products/[handle]`

### Collection page (`templates/collection.json`)
| Done | Section | Type |
|------|---------|------|
| [x] | banner | `main-collection-banner` |
| [x] | product-grid | `main-collection-product-grid` |

**Verify:** `/collections/[handle]`

### Cart (`templates/cart.json`)
| Done | Section | Type |
|------|---------|------|
| [x] | cart-items | `main-cart-items` |
| [x] | cart-footer | `main-cart-footer` |

**Verify:** `/cart`

### Blog listing (`templates/blog.json`)
| Done | Section | Type |
|------|---------|------|
| [x] | main | `main-blog` |

**Verify:** `/blogs/[handle]`

### Article / blog post (`templates/article.json`)
| Done | Section | Type |
|------|---------|------|
| [x] | main | `main-article` |

**Verify:** `/blogs/[handle]/[article]`

### Generic page (`templates/page.json`)
| Done | Section | Type |
|------|---------|------|
| [x] | main | `main-page` |

**Verify:** `/pages/[handle]`

### Contact page (`templates/page.contact.json`)
| Done | Section | Type |
|------|---------|------|
| [x] | main | `main-page` |
| [x] | form | `contact-form` |

**Verify:** `/pages/contact`

### Search results (`templates/search.json`)
| Done | Section | Type |
|------|---------|------|
| [x] | main | `main-search` |

**Verify:** `/search?q=test`

### Collection list (`templates/list-collections.json`)
| Done | Section | Type |
|------|---------|------|
| [x] | main | `main-list-collections` |

**Verify:** `/collections`

### 404 (`templates/404.json`)
| Done | Section | Type |
|------|---------|------|
| [x] | main | `main-404` |

**Verify:** `/nonexistent-page`

### Password / coming soon (`templates/password.json`)
| Done | Section | Type |
|------|---------|------|
| [x] | main | `email-signup-banner` |

**Verify:** (only visible when store is password-protected)

### Gift card (`templates/gift_card.liquid`)
| Done | What |
|------|------|
| [x] | Gift card template styling |

**Verify:** (gift card email preview)

---

## 3. Reusable sections (available to add in Customize)

These are not assigned to a template by default but are part of Dawn's section library. The design should style all of them so they match when a merchant adds them.

| Done | Section file | Purpose |
|------|-------------|---------|
| [x] | `collage.liquid` | Mixed-media grid |
| [x] | `collapsible-content.liquid` | Accordion / FAQ |
| [x] | `collection-list.liquid` | Grid of collection cards |
| [x] | `custom-liquid.liquid` | Freeform HTML/Liquid block |
| [x] | `email-signup-banner.liquid` | Newsletter signup banner |
| [x] | `featured-blog.liquid` | Blog post cards |
| [x] | `featured-collection.liquid` | Product row from a collection |
| [x] | `featured-product.liquid` | Single product showcase |
| [x] | `image-banner.liquid` | Hero / banner image |
| [x] | `image-with-text.liquid` | Split image + text |
| [x] | `multicolumn.liquid` | Multi-column content |
| [x] | `multirow.liquid` | Alternating rows |
| [x] | `newsletter.liquid` | Inline newsletter form |
| [x] | `rich-text.liquid` | Text block |
| [x] | `slideshow.liquid` | Image carousel |
| [x] | `video.liquid` | Video embed |
| [x] | `apps.liquid` | App block container |

---

## 4. Key snippets (affect product/collection rendering)

| Done | Snippet | Used by |
|------|---------|---------|
| [x] | `card-product.liquid` | Collection grid, featured collection, related products, search |
| [x] | `card-collection.liquid` | Collection list |
| [x] | `price.liquid` | Product cards, PDP |
| [x] | `product-media-gallery.liquid` | PDP media |
| [x] | `product-variant-picker.liquid` | PDP variant selector |
| [x] | `buy-buttons.liquid` | PDP add-to-cart |
| [x] | `facets.liquid` | Collection filtering |
| [x] | `pagination.liquid` | Collection, blog, search |
| [x] | `swatch.liquid` / `swatch-input.liquid` | Color/variant swatches |

---

## 5. Verification checklist

After build, hit every route on `shopify theme dev` and confirm no stock Dawn styling leaks through:

| Done | URL | What to check |
|------|-----|---------------|
| [x] | `/` | Homepage — all sections styled, no Dawn defaults |
| [x] | `/collections/all` | Collection — grid, filters, cards |
| [x] | `/collections` | Collection list page |
| [x] | `/products/[any-handle]` | PDP — media, variants, buy box, related |
| [x] | `/cart` | Cart page — line items, totals, checkout button |
| [x] | `/pages/[any-handle]` | Generic page |
| [x] | `/pages/contact` | Contact form |
| [x] | `/blogs/[handle]` | Blog listing |
| [x] | `/blogs/[handle]/[article]` | Single article |
| [x] | `/search?q=test` | Search results |
| [x] | `/nonexistent` | 404 page |
| [x] | Mobile viewport | All of the above at 375px |
| [x] | Cart drawer | Add to cart from PDP, check drawer |
| [x] | Announcement bar | Visible, styled, dismissable if applicable |

---

## 6. Rule for "done"

**The build is not done until every checkbox above is checked.** A single unchecked template means the merchant sees stock Dawn on that page. That's the mistake we're not repeating.


---

## 7. Verification notes — 2026-10-07 build

All routes exercised on `shopify theme dev` (desktop + 375px mobile), checked via computed styles. Data-limited checks, verify after store content exists:

- **Article page** — `/blogs/news` renders styled, but the blog has 0 articles, so `main-article` could not be exercised with real content.
- **Cart with items / drawer line items** — every product on the dev store is sold out (no available variants), so only the empty cart page and the opened empty drawer were verified. Styled via the previous build's `dt-cart-drawer.css` + `dt-global.css`.
- **Variant pills** — no product has selectable variants; the pill CSS (square, forest active state) is in `dt-global.css` but untested against a live variant picker.
- **Password page** — store is not password-protected; `email-signup-banner` is styled via scheme + global CSS but was not rendered.
- **Gift card** — template updated with self-hosted @font-face; email preview not rendered.
- **Generic page** — the store has no `/pages/*` content pages besides contact; `main-page` styling comes from the global layer.
