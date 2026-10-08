---
name: dawn-css-load-order
description: Dawn component CSS loads AFTER dt-dove-thistle.css; use dt-global.css with body prefix for overrides
metadata:
  type: feedback
---

The theme loads `dt-dove-thistle.css` at index 2, `dt-global.css` at index 3, then Dawn's `component-*.css` files at indices 16–44. At equal specificity, Dawn wins over `dt-dove-thistle.css` because it loads later.

**Why:** Learned the hard way across the filter drawer iteration — rules in `dt-dove-thistle.css` kept getting overridden by Dawn's component CSS, and compound selectors in `dt-global.css` (like `body .facets-container.facets-container-drawer .mobile-facets__count`) had enough specificity to invisibly undo later edits.

**How to apply:**
- Dawn overrides go in `dt-global.css` prefixed with `body ` for specificity.
- When something still won't render as expected after an edit, grep `dt-global.css` for the selector — a stale `display: none` or compound rule may be winning. Lost ~15 minutes on `.mobile-facets__count { display: none; }` doing exactly this.
- When touching `dt-global.css`, note the `body .facets-container.facets-container-drawer ...` block exists specifically because those selectors need to beat Dawn's own `.facets-container-drawer` rules.

See also: [[dawn-drawer-close-positioning]].
