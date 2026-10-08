---
name: dawn-facets-toolbar
description: Dawn's drawer-mode facets toolbar renders an always-present empty pills form that wraps to a new row and inflates the toolbar height — set flex-wrap:nowrap and hide the pills form
metadata:
  type: feedback
---

Dawn's `.facets-container.facets-container-drawer` (filter_type: "drawer") renders four flex children: `menu-drawer` (the "Filter & Sort" summary toggle), a hidden `active-facets.active-facets-mobile`, a hidden `facet-filters-form.facets.small-hide` (standalone sort form), the visible `.product-count` ("N products"), and `facet-filters-form.facets.facets-pill` — the active-filter pills form.

**Trap:** The pills form is ALWAYS rendered (not just when filters are active), its `.active-facets` child has `width: 100%`, and Dawn's `.facets-container` defaults to `flex-wrap: wrap`. Combined, the empty pills form wraps to a second row and reserves ~24px of vertical space, inflating the toolbar from ~40px (what you'd expect from `padding + content`) to ~64px.

**Fix:**
```css
body .facets-container.facets-container-drawer {
  flex-wrap: nowrap;  /* stop the wrap */
}
body .facets-container.facets-container-drawer facet-filters-form.facets-pill {
  display: none;  /* and hide the pills form entirely */
}
```

Users can still remove active filters via the drawer's "Clear all" footer button. If you want pills visible, render them BELOW the toolbar line instead of inline.

**Why:** Spent ~15 minutes bisecting toolbar height from 124px → 64px → 40px. Padding reduction accounted for 60px of that, flex-wrap for the remaining 24.

**Related label-size trap:** Dawn's `.mobile-facets__open-label` has its own `font: var(--dt-type-ui-m)` rule in `dt-global.css:446`. Setting `font-size` on the parent `.mobile-facets__open` doesn't cascade because the child's own `font:` shorthand replaces it. Override the child explicitly: `body .facets-container.facets-container-drawer .mobile-facets__open-label { font: ...; }`.

**How to apply:** Any time the drawer toolbar height feels wrong, check (a) `flex-wrap`, (b) all children's heights (`Array.from(toolbar.children).map(c => c.getBoundingClientRect().height)`), and (c) whether the pills form is rendering at `width: 100%` and wrapping. The three usual suspects for inflated toolbar height.

See also: [[dawn-mobile-facets-nested-details]], [[dawn-css-load-order]].
