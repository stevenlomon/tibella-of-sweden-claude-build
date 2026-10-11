---
name: image-convention
description: Product image column convention — Main 1-5 are primary color gallery shots, Image Var 1-4 are one main shot per additional color
metadata:
  type: project
---

All products follow this image structure in the Product Planner spreadsheet:

**Main Images 1-5** (columns M-Q): Gallery images for the PRIMARY color
- Main 1 = main product shot (featured image)
- Main 2 = hover image (shown on collection grid hover)
- Main 3 = "in action" / lifestyle shot
- Main 4-5 = detail/standard shots

**Image Var 1-4** (columns R-U): One main shot per ADDITIONAL color variant. Each is a front-view studio shot in a different color.

**Why:** Ben's brother generates images via Higgsfield. He occasionally pastes the same URL in two columns by accident (check for duplicates). The primary color gets 5 images; each additional color gets only 1 main shot (for now).

**How to apply:** When importing a product, upload all unique images via `productCreateMedia`, identify colors visually, create variant options for each color, and link images to variants using `productVariantAppendMedia` (NOT `mediaSrc` — that's for uploading new images, not linking existing ones). Map Main 1 to primary-color variants and each Var image to its respective color variants.
