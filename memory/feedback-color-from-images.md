---
name: feedback-color-from-images
description: When building batch JSON for product import, derive color names by opening each Higgsfield image — never cross-reference AliExpress color lists with image positions independently
metadata:
  type: feedback
---

Derive variant color names FROM the Higgsfield images, not from AliExpress supplier pages.

**Why:** Cross-referencing an AliExpress color list with a separate image list caused off-by-one bugs on wool-hoodie-dress and long-hooded-cotton-jacket — colors were listed in one order and images in another, so every variant showed the wrong product photo.

**How to apply:** When building the `colors` array for a batch JSON, open each image (Main 1, Var 1, Var 2, etc.) and name the color from what you see. The mapping is guaranteed correct because the name comes from the image itself. Use AliExpress only for materials, specs, and descriptions. See [[swatch-color-fallback]] for the related swatch rendering issue.
