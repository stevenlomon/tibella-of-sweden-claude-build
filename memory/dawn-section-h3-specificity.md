---
name: dawn-section-h3-specificity
description: .dt-section h3 beats .dt-trust__title and other single-class heading overrides inside dt-sections — chain two classes or add body prefix
metadata:
  type: project
---

`dt-dove-thistle.css` has a general heading-family rule:

```css
.dt-section h1, .dt-section h2, .dt-section h3, ... {
  font-family: var(--dt-font-display);
}
```

Specificity `(0,0,1,1)` — one class + one element. Any single-class override on a heading inside a `.dt-section` loses:

- `.dt-trust__title { font-family: var(--dt-font-body) }` → specificity `(0,0,1,0)`, loses, title renders in Cormorant Garamond.

**Why:** this is the trap we hit on the trust bar — code looked correct, inspection showed Cormorant winning. It will hit again for any custom h1–h6 inside a `.dt-section` that needs a non-display font.

**How to apply:** use a two-class descendant chain, or move the override into `dt-global.css` with `body` prefix:

```css
.dt-trust .dt-trust__title { font-family: var(--dt-font-body); }
```

Also: Manrope is only loaded at 400/500/600/700 — if the title had `font-weight: 800`, it fell back to synthetic bold or a system face, which can read as a serif on its own. Cap body-text weight at 700.

Related: [[dawn-css-load-order]].
