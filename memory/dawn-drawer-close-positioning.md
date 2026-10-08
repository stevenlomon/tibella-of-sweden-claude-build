---
name: dawn-drawer-close-positioning
description: Dawn's .mobile-facets__close lives inside the toolbar <summary>, not the drawer — position absolutely from the drawer, not from DOM
metadata:
  type: feedback
---

In Dawn's facets drawer (`snippets/facets.liquid`), the `.mobile-facets__close` (X button) is a child of the `<summary class="mobile-facets__open-wrapper">` that doubles as the on-page "FILTER & SORT" toolbar button. When the drawer opens, the summary stays where it was — down in the toolbar — and `position: absolute` on the close anchors to it. That puts the X somewhere near the toolbar instead of in the drawer header.

**Why:** Found while building the Figma-match filter drawer. The X was landing at ~(161, 427) instead of the top-right of the drawer header. The offsetParent was the summary at (83, 405).

**How to apply:** Any time you want to place the close inside the drawer visually, use `position: fixed` scoped to `.mobile-facets__disclosure[open] .mobile-facets__close`, with `top` / `left` tuned to the drawer width (currently 340px → `left: 292px; top: 38px; transform: translateY(-50%)`). Hide the close with `display: none` when the drawer is closed, since fixed positioning would leave it floating.

Same gotcha applies to any other control nested inside the toolbar summary — anything that needs to render inside the open drawer should use fixed positioning or be moved in Liquid/JS.
