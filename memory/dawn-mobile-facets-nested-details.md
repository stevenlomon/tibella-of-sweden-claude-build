---
name: dawn-mobile-facets-nested-details
description: Dawn's MenuDrawer intercepts every <summary> click inside the drawer and treats nested details as sliding submenus — stop propagation + override submenu CSS when building a custom nested section
metadata:
  type: feedback
---

Dawn's `MenuDrawer` custom element (in `assets/global.js`) does two things to every nested `<details>` inside the mobile filter drawer:

**1. Click interception.** In its `bindEvents()`, it attaches a bubble-phase click handler to *every* `<summary>` descendant. On click of a nested summary, it schedules (via 100ms `setTimeout`) `classList.add('menu-opening')`, `aria-expanded="true"`, and `trapFocus()`. If the native `<details>` toggle just closed the panel, those actions fight the close and leave the details in a contradictory state (`open=false` but `menu-opening=true`). Visual result: panel content briefly flickers and the drawer feels broken.

**Fix:** Add a capture-phase click listener on the drawer that `stopImmediatePropagation()`s on `.mobile-facets__details > summary`. The native `<details>` toggle still fires because we don't `preventDefault`. Already in [facets.liquid](theme/snippets/facets.liquid) at the inline script after `</menu-drawer>`.

**2. Submenu-slide positioning.** Dawn's `.js .mobile-facets__submenu` (in `component-facets.css`) is `position: absolute; transform: translateX(100%); visibility: hidden`, revealed only when the parent details has both `[open]` AND `.menu-opening`. If you want a nested panel that renders inline under its summary (standard disclosure pattern), you must override: `position: static; transform: none; visibility: visible`. Dawn's selector is `(0,2,0)` specificity — use a double-class on your element to win cheaply, e.g. `.mobile-facets__submenu.mobile-facets__submenu--yourname` is `(0,2,1)` and sits above Dawn without needing `!important`.

**Why:** Learned building the Dove & Thistle price-slider section. First the glitch on Sort close (fix #1), then the slider rail landed 358px off-screen because the submenu was still `translateX(100%)` (fix #2). The two learnings compound — the glitch fix removes `menu-opening` from the toolkit, so panels that depend on it stop displaying at all.

**How to apply:**
- Any new nested section inside `.mobile-facets__main` → add a `.mobile-facets__your-panel` class on the panel div (not `.mobile-facets__submenu`) to opt out of the submenu-slide pattern entirely.
- If you *must* use `.mobile-facets__submenu` (e.g., preserving some Dawn-authored partial), compound your own class to override the three properties.
- The `.js` class is on `<html>`, not `<body>` — selectors like `body.js ...` won't match. Use `html.js ...` or omit `.js` and compound your own class instead.

See also: [[dawn-drawer-close-positioning]], [[dawn-css-load-order]].
