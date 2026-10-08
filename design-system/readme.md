# Dove & Thistle — Design System

Dove & Thistle is a women's clothing and lifestyle brand: clothing (blazers, jackets, pants, knitwear), accessories (scarves, bags, boots), gifts, and home & living. Customer: women 40–60 who value quality, natural beauty and intentional living. The product surface is a **Shopify storefront** (homepage, collection, PDP, cart drawer, navigation, footer).

## Sources
- **Figma:** `Dove & Thistle.fig` (pages `Design` — 37 frames, `Design-Assets` — 7 frames). Key frames: *Homepage* (201:89), *Homepage Mobile*, *Collections Page* (324:3976) + mobile, *Product Display Page Desktop/Mobile Premium* (330:1337), *Cart Drawer*, *Header*, *Footer*, *Trust Strip*, *FAQ Section*, *Dove & Thistle / UI Design System* (321:3036), *Typography System / FINAL* (355:602), *Developer Handoff*.
- **Claude Design project:** https://claude.ai/design/p/e5a4b5e4-f6f9-4137-b5df-279b1529b51d
- **Code context:** https://github.com/Shopify/dawn (target theme base — not imported here).

## Index
- `styles.css` — global entry (imports only)
- `tokens/` — `fig-tokens.css` (37 Figma Variables: Colors, Spacing, Layout), `colors.css` (brand palette + semantic aliases), `typography.css` (FINAL type ramp, desktop + mobile), `shape.css`, `fonts.css`, `interaction.css` (hover/press, links)
- `components/` — React components materialized from the Figma component sets (see list), one `*.card.html` per group
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `ui_kits/storefront/` — click-through Homepage → Collection → PDP → Cart drawer
- `assets/` — `logo-wordmark.png` (primary wordmark, from .fig), `logo-wordmark.svg` (supplied — currently EMPTY: its embedded image has no data, do not use), `favicon.png` (supplied), `icon-mark.png` (dove & leaf), `icons/trust-*.svg` (4 trust icons, from the supplied Trust Strip SVG), `trust-strip-page-desktop.svg` (supplied reference), `fonts/` (self-hosted woff2), `design-system-sheet.png` (brand sheet), `images/` (lifestyle & collection photography, sample product), `components/assets/` (bitmaps used by components)
- `SKILL.md` — Agent Skill entry

## Components
All 15 Figma component sets + 14 standalone symbols (29 total), namespace `window.DoveThistleDesignSystem_e5a4b5`.
- **actions/** Button (Primary Large / Primary Standard / Secondary Standard), CarouselControls (desktop/mobile), CartQuantitySelector
- **navigation/** AnnouncementBar, Header (desktop / mobile / mobile drawer), NavigationMenu, NavigationSharedCategoryClothing, NavigationSharedCategoryShoes, NavigationSharedCategoryHomeLiving, NavigationSharedCategoryGifts, NavigationSharedCategorySeasonal, Footer
- **product/** ProductCard (editorial / grid), ProductCardGridMobile, ProductCardSliderMobile, ProductSwatches (desktop / mobile / pdp), AccordionProductDetails
- **collection/** CollectionToolbar, CollectionFilterSortDrawer, ProductCardCollectionFilterSort
- **cart/** CartDrawer
- **trust/** TrustStrip (page / purchase / checkout × desktop / mobile), TrustItemPurchase, IconTrustFreeShipping, IconTrust30DayReturns, IconTrustSecureCheckout, IconTrustHelpfulSupport
- **faq/** AccordionFAQ, FAQSection

**Intentional additions:** `image` prop on product cards / CartDrawer (to swap the sample photo); `label`, `onClick`, `disabled` on Button; hover/press CSS in `tokens/interaction.css`. Components are fixed-width per their Figma frames — override `width` via `style`.

## Content fundamentals
- **Voice:** a thoughtful friend, not a luxury brand talking down. Warm, sophisticated, never precious. Reassuring and practical ("Clear before clever.").
- **Person:** speaks to *you*; brand is *we* sparingly ("everything we've gathered"). Customer framed as "the woman you are now".
- **Casing:** Headlines in sentence case ("What are you looking for today?", "Can't decide?"). Eyebrows, category labels, announcement and button labels in UPPERCASE with tracking ("SHOP BY COLLECTION", "OUTERWEAR", "FREE SHIPPING ON ALL US ORDERS"). Some section CTAs are sentence/title case ("Shop by collection", "Our philosophy").
- **Tone examples:** "A thoughtful edit of easy fashion, comfortable footwear, and beautiful things for home." · "You do not have to sort through everything." · "For the woman who would rather enjoy December than rush through it." · "The layer that does not feel like an afterthought."
- **Spelling:** British-leaning ("favourites"), curly apostrophes, ampersands in names ("Home & Living").
- **No emoji.** Bullets "•" and middots "·" as separators ("COLOR · CREAM", "Your cart · 1 item").
- Trust copy reduces uncertainty: shipping, returns, secure checkout, helpful support — stated plainly.

## Visual foundations
- **Colour:** Deep Forest `#234238` (logo green, source of truth) for headings, announcement bar, footer and inverse blocks; Warm Parchment `#F7F2E9` for warm sections; Muted Burgundy `#6A3446` drives action (buttons, active chips, links), hover `#542738`; Antique Gold `#AD8954` is a quiet accent (eyebrows, category labels, collection-tile titles, footer accent); Warm Charcoal `#292624` body text; Dove Grey `#C9C3BC` 1px rules; Stone `#706A65` muted text. Page ground is white; parchment alternates for contrast.
- **Type:** Cormorant Garamond SemiBold for editorial headings (48/40/36/32/28/24); Manrope for body (16/26, 15/24, 14/22) and all commerce UI (SemiBold 13/18 buttons with +0.4px tracking; Bold 12/16 labels uppercase +10%). Wordmark set in Cormorant Regular. Mobile ramp in `tokens/typography.css`.
- **Layout:** 1440 desktop canvas, 1024 container with 208 side gutters, 4-col grid with 20px gaps; mobile 390 / 342 / 24px gutters / 2 cols. Full-bleed 720/720 image–copy splits with 120px padding on the copy side. Section rhythm 32–64px.
- **Backgrounds & imagery:** full-bleed warm, natural-light lifestyle photography (knitwear, home, festive). Hero uses a left-to-right black scrim (70%→0) plus 16% charcoal wash; collection tiles use a bottom scrim to wine-black `#160209`. No patterns, textures, gradients for decoration, or illustrations.
- **Corners:** square. "Square or lightly rounded · no pills."
- **Borders & elevation:** 1px Dove Grey inset rules and hairline dividers carry structure — "use structure, not shadows". Only drawers get a soft shadow.
- **Cards:** product cards are image + white info block, no border, no radius, no shadow; gold uppercase category, regular title, forest semibold price, swatches.
- **Buttons:** solid burgundy rectangles, white SemiBold 13px tracked labels (48px standard, 52px large); secondary is white with 1px grey inset. Hover darkens to `#542738`; press nudges 1px down. Disabled = 45% opacity.
- **Motion:** minimal — 150–240ms ease-out fades/slides for drawers and carousels; no bounces.
- **Transparency/blur:** only in image scrims and the drawer backdrop (charcoal 32%). No glass/blur.

## Iconography
- Thin-line (≈0.7–1.1px stroke) outline icons drawn in the Figma file: search, bag, menu, close, arrows, and four trust icons (free shipping, 30-day returns, secure checkout, helpful support). They ship inline as SVG paths inside the components and paint with `currentColor` (trust icons use `--color-icon-trust` burgundy).
- No icon font, no emoji. Unicode "−", "+", "→", "·", "•" appear as text glyphs (quantity stepper, accordions, separators).
- Trust icons (1.6px square-cap strokes, burgundy) come from the supplied Trust Strip SVG; standalone copies live in `assets/icons/`.
- Brand marks: `assets/logo-wordmark.png` (primary wordmark, used by Header; the supplied `logo-wordmark.svg` is empty and unused), `assets/favicon.png`, `assets/icon-mark.png` (dove & leaf). If a new icon is needed, match a thin-line outline set (e.g. Lucide at 1px stroke) and flag it.

## Normalization notes (flag for Figma cleanup)
- Near-miss colours: `rgb(36,66,54)` (3×) vs Deep Forest `rgb(35,66,56)`; `rgb(94,43,56)` (gallery progress) vs hover token `rgb(84,39,56)`; `rgb(117,112,108)` vs muted `rgb(112,106,101)`; `rgb(217,211,203)` / `rgb(216,216,215)` / `rgb(219,214,204)` vs Dove Grey `rgb(201,195,188)`.
- Container: Variables say 1024 / 208 gutters, but the UI Design System sheet says "1224px desktop" — 1024 is what every page frame uses.
- Homepage H1 is 48/48 and body 16/32, versus the FINAL ramp's Display XL 48/52 and Body L 16/26. Homepage eyebrow is 16px Medium with a 12px line-height (likely an error).
- Inter appears in reference sheets only (annotations), not in product UI.
- No text styles are defined as Figma styles (0) — the type ramp lives as a frame; tokenised here from that frame.
- Fonts: no binaries in the file. Cormorant Garamond (400/500/600/700 + italics) and Manrope (400–700) are self-hosted as latin woff2 in `assets/fonts/`, downloaded from Google Fonts (OFL) — the exact families the file names.
