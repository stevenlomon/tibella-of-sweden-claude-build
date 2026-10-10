# Handoff: Tibella Homepage Done (Mostly), Collections Page Next

**Date:** 2026-10-10
**Store:** kei3va-ym.myshopify.com
**Dev theme:** `#159360975070`
**Preview:** `https://kei3va-ym.myshopify.com?preview_theme_id=159360975070`
**Branch:** `main` (all committed, nothing staged)

---

## Where we are

The homepage has been through multiple iteration rounds. Four custom sections are built, pushed, and rendering. The user (Ben) is happy enough with the hero, category cards, editorial banner, and trust bar to move on. The tabbed collection grid needs more work but is parked for now.

**Next task: Collections page.**

---

## Homepage section status

### 1. Hero — DONE
- Two-line heading: "VAR VÄLKLÄDD" / "UNDER VINTERN"
- Font: `--tb-type-display-hero: 400 clamp(32px, 4vw, 58px)/1.1 Cormorant Garamond`
- Copy container: `max-width: 600px`, centered at bottom
- Image: `object-position: center 20%` (shows woman's head)
- Mobile: `object-position: 62% 20%`
- Hero height: `min-height: 100vh`

### 2. Category cards — DONE
- Scroll rail: `flex`, `overflow-x: auto`, right-edge bleeds to viewport
- Container gutter: `padding-left: clamp(24px, 3vw, 80px); padding-right: 0`
- Cards: `flex: 0 0 18.6vw`, `aspect-ratio: 3/4`, `border-radius: 2px`
- Sunoire-style long arrow SVG (30x14)
- Nav buttons: 44px circular, prev/next scroll

### 3. Tabbed collection — NEEDS RETURN VISIT
- Tab border: active tab shows 1px rectangle border with 4px radius (matches Figma)
- Card overlay: product title/price overlaid on image via absolute positioning + gradient scrim
- Featured card: text hidden, full-height image
- **What's still off:** The overlay cards don't look fully polished. The "SOLD OUT" badge overlaps the price text. The scrim/text positioning needs refinement. The featured card's aspect ratio vs the 2×2 grid alignment isn't matching the Figma perfectly.
- **Figma reference:** Shows product name + price + color swatches overlaid inside each image, clean alignment. The current implementation gets the concept right but the execution needs CSS cleanup.
- Container gutter: `padding-left: clamp(24px, 3vw, 80px)` (same as category cards)

### 4. Editorial banner — DONE
- Full-bleed, `min-height: 640px`
- Heading: `--tb-type-display-banner: 400 clamp(32px, 3.2vw, 56px)/1.22 Cormorant`
- Image: `object-position: center 25%`
- Scrim: `rgba(20, 18, 19, 0.50)` uniform overlay

### 5. Trust bar — DONE (unchanged this session)

---

## Key files

### Production files (in `theme/`)
| File | What it does |
|------|-------------|
| `assets/dt-dove-thistle.css` (~3770 lines) | All custom section CSS + design tokens |
| `assets/dt-global.css` | Dawn component overrides (transparent header, etc.) |
| `sections/dt-hero.liquid` | Hero section |
| `sections/dt-collection-grid.liquid` | Category cards scroll rail |
| `sections/dt-tabbed-collection.liquid` | Tabbed collection (featured + 2×2 grid) |
| `sections/dt-editorial-banner.liquid` | Editorial banner with image overlay |
| `sections/dt-trust-bar.liquid` | Trust badges row |
| `snippets/dt-collection-card.liquid` | Category card component |
| `snippets/card-product.liquid` | Dawn product card (modified — has `dt-card-category` and `dt-product-swatches`) |
| `templates/index.json` | Homepage template — section order and settings |
| `config/settings_data.json` | Theme settings (page_width, fonts, colors) |

### Documentation (project root)
| File | What it covers |
|------|---------------|
| `DAWN-THEME.md` (~350 lines) | Build learnings — push safety, CSS specificity, image focal points, font-size traps, gutter strategies |
| `HTML-TO-LIQUID.md` (~150 lines) | Translating reference HTML to Liquid — layout patterns, tab conversion, Dawn gotchas, SVG icons, typography, scrims |
| `CLAUDE.md` | Session instructions — how Ben works, where things live, rules |
| `memory/MEMORY.md` | Memory index |
| `memory/user-identity.md` | Ben's working preferences |
| `memory/feedback_shopify_push_only.md` | Never split `--only` pushes |

### Reference files
| File | What it is |
|------|-----------|
| `sunoire-homepage.html` (9123 lines) | Full HTML source of Sunoire.com — the definitive layout reference |

---

## CSS architecture quick reference

### Token system (`:root` in dt-dove-thistle.css, lines 1–100)

**Colors:**
- `--tb-vinrod: #6D2634` — brand accent (announcement bar, active borders)
- `--tb-natt: #1E1A1B` — dark headings, active tab text
- `--tb-kol: #292624` — body text
- `--tb-sten: #706A65` — muted/secondary text
- `--tb-linne: #F7F2E9` — warm cream backgrounds
- `--tb-sno: #FFFFFF` — white
- `--tb-is: #D6D3D0` — subtle borders

**Type tokens:**
- `--tb-type-display-hero: 400 clamp(32px, 4vw, 58px)/1.1 Cormorant Garamond`
- `--tb-type-display-banner: 400 clamp(32px, 3.2vw, 56px)/1.22 Cormorant Garamond`
- `--tb-type-section-title: 400 clamp(24px, 1.78vw, 34px)/1.2 Cormorant Garamond`
- `--tb-tracking-display: 0.12em` — display heading letter-spacing
- `--dt-font-display: Cormorant Garamond` — serif display
- `--dt-font-body: Manrope` — sans-serif body/UI

**Layout:**
- `--dt-content-width: 1440px` — max content width (used in some calc expressions)

### Breakpoints
- Base: mobile-first
- `max-width: 749px` — mobile overrides (lines ~3300+)
- `min-width: 750px` — tablet
- `min-width: 990px` — desktop

### CSS line ranges (approximate, changes shift these)
- `:root` tokens: 1–100
- Hero: 165–240
- Category cards container/grid: 1518–1600
- Category card component: 2124–2196
- Editorial banner: 2251–2330
- Tabbed collection: 2580–2760
- Mobile breakpoint: 3300–3500
- 750px breakpoint: 3708–3730
- 990px breakpoint: 3734–3770

---

## Push workflow

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm use 24 > /dev/null 2>&1 && cd /home/stevenlomon/Documents/shopify-workspace/shopify/dove-and-thistle-claude-build/theme && shopify theme push --development 2>&1
```

**Rules:**
- Always `cd theme/` before pushing
- Always use `--development` flag (no `--theme` needed)
- Never use `--only` — silently wipes unlisted custom files from remote
- `locales/en.json` error on every push — pre-existing, non-blocking, ignore it
- Must use Node 24 (nvm use 24)

---

## Ben's working preferences (from memory/user-identity.md)

1. **Communication** — say what you're doing and why
2. **No false confidence** — if you don't know, say so
3. **Precision** — specific file paths, specific values, specific reasoning
4. **Stop when done** — don't keep going with extra busywork
5. **Skip live preview** — Ben does visual QA himself. After a successful push with no CLI errors, just report success and provide the preview URL. Don't open browser pane or take screenshots.

---

## Recent commit history

```
259bfea Tabbed collection: bordered active tab, overlay product cards on images
387ed35 Docs: line-wrap math lesson, left-edge gutter strategy
45b6686 Hero: revert copy max-width to 600px for correct two-line wrap
913cdd1 Editorial banner: increase min-height to 640px for more image breathing room
24ff4e1 Tabbed collection: normalize grid card heights with grid-auto-rows
32bcacb Left-edge headings: use clamp(24px, 3vw, 80px) for tighter gutters
271c595 Hero: smaller heading for two-line layout (VAR VÄLKLÄDD / UNDER VINTERN)
8f206c6 Editorial banner: smaller heading, image shows woman's head
54b2529 Tabbed collection: 5 products total (1 featured + 2x2 grid)
ba51221 Sections: pin headings closer to left viewport edge
eae2b0e Hero: shift image focal point up to show woman's head
8c34039 Sunoire-guided layout alignment: all homepage sections
```

---

## What to do next: Collections page

Ben hasn't specified exactly what he wants for the collections page yet. The next session should:

1. **Read this handoff** and the files listed above to get oriented
2. **Ask Ben what the collections page should look like** — does he have Figma designs? Should it follow Sunoire's collection page pattern?
3. **Check the existing collection template** — `templates/collection.json` and `sections/main-collection-product-grid.liquid` (or the Dawn default). The file `sections/dt-collection-product-grid.liquid` already exists with custom CSS (facets, filters, product cards)
4. **Read the Sunoire source** if needed — the file is at `sunoire-homepage.html` but a collection page source may need to be fetched separately

### Existing collection infrastructure
- `sections/dt-collection-product-grid.liquid` — custom collection product grid section
- `sections/dt-collection-hero.liquid` — collection hero/header with breadcrumbs
- Related CSS in `dt-dove-thistle.css`:
  - Collection hero: lines ~292–410
  - Collection product grid: lines ~440–610
  - Facets/filters: lines ~1330–2070
- The collection page likely already has basic styling but may need the same level of iteration the homepage got

---

## Lessons learned (for the next session)

### Font-size × container-width interaction
When controlling line breaks in centered display text, you tune font-size AND container max-width together. Widening the container without checking lets extra words fit on one line, breaking at the wrong place. See DAWN-THEME.md "Hero text line-wrap" section.

### Left-edge gutter: clamp() vs max()
`padding-left: max(24px, calc((100% - 1440px) / 2))` pushes content 240px from the left on 1920px screens. Use `clamp(24px, 3vw, 80px)` when headings should stay near the viewport edge. See DAWN-THEME.md and HTML-TO-LIQUID.md.

### Product card overlay pattern
Overlaying Dawn product card text on the image requires:
- `.card` gets `position: relative; overflow: hidden`
- `.card__inner.ratio::after` adds the gradient scrim (z-index: 1)
- `.card > .card__content` gets `position: absolute; bottom: 0` (z-index: 2)
- Text colors switch to white
- Watch for badge elements overlapping text — needs z-index cleanup

### Sunoire as reference
`sunoire-homepage.html` is the layout bible. CSS per section is inside `<style data-shopify>` blocks. Search by BEM prefix (e.g. `sunoire-bs__`). The HTML and its CSS are often 2000+ lines apart in the file.
