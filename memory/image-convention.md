---
name: image-convention
description: Product image ordering convention — Main 1-5 positions matter (3 = in-action, used by product story section); Image Var 1-4 are one shot per additional color
metadata:
  type: project
---

All products follow this image structure in the Product Planner spreadsheet:

**Main Images 1-5** (columns M-Q): Gallery images for the PRIMARY color, uploaded in this exact order:
- Main 1 = main product shot (featured image, front view)
- Main 2 = hover image (shown on collection grid hover)
- Main 3 = "in action" / lifestyle shot (e.g. walking in the street, wearing the garment in context)
- Main 4 = detail shot (texture, buttons, collar close-up)
- Main 5 = additional detail or secondary angle

**Position 3 is load-bearing.** The product story section (`dt-product-story.liquid`) pulls `product.images[2]` as its fallback image. If Main 3 is not the in-action shot, the product story shows the wrong image. Reorder via `productReorderMedia` if images land out of convention order.

**Image Var 1-4** (columns R-U): One main shot per ADDITIONAL color variant. Each is a front-view studio shot in a different color.

**Why:** Ben's brother generates images via Higgsfield. He occasionally pastes the same URL in two columns by accident (check for duplicates). The primary color gets 5 images; each additional color gets only 1 main shot (for now).

**How to apply:** When importing a product, upload all unique images via `productCreateMedia` **in spreadsheet column order** (Main 1 first, Main 5 last, then Var images). This ensures `product.images[2]` = Main 3 = in-action shot. Identify colors visually, create variant options for each color, and link images to variants using `productVariantAppendMedia` (NOT `mediaSrc` — that's for uploading new images, not linking existing ones). Map Main 1 to primary-color variants and each Var image to its respective color variants. After import, verify the gallery order matches: front, hover, in-action, detail, detail.
