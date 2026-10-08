---
name: feedback-product-story-height
description: Product story section on desktop should be compact — constrain image height, don't let align-items:center balloon the section
metadata:
  type: feedback
---

When building full-bleed image+text sections (like the product story), `align-items: center` on the grid + `height: 100%` on the image makes the section as tall as the image wants to be — which on a large viewport is way too much.

**Why:** Ben flagged the desktop product story as "way too tall — should be about 2/3 of what it currently is." The image was driving the section height unconstrained.

**How to apply:** Cap the image container with `max-height` (e.g., `480px`) rather than letting it grow freely. Use `align-items: stretch` if the text should fill the same height as the image, or `align-items: center` with a capped container if the text should center within a fixed-height band. Always verify section height on desktop after changes — a 50/50 grid where one column is an image can balloon fast.
