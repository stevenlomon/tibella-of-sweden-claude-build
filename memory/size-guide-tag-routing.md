---
name: size-guide-tag-routing
description: Storleksguide uses product tags to route between clothing/bottoms/boots/none tables — verified EU body measurements
metadata:
  type: project
---

The size guide modal (`dt-size-guide-modal.liquid`) renders different tables based on product tags. Default is the clothing table (bust/waist/hip).

**Tag → table mapping:**

| Tag | Table | Used for |
|---|---|---|
| *(none)* | Clothing (bröst/midja/höft) | Outerwear, knitwear, dresses, sets |
| `size-guide:bottoms` | Bottoms (midja/höft) | Pants, leggings |
| `size-guide:boots` | Boots (EU 35-41/fotlängd) | All footwear |
| `size-guide:none` | Hidden entirely | Bags, accessories |

**Why:** The original table was hardcoded with guessed values and showed bust measurements for boots. XL row was wrong. Values are now standard EU body measurements verified against AliExpress garment data with ease adjustments per garment type.

**How to apply:** When importing new products, tag them based on category. The `size-guide:none` tag also hides the Storleksguide button in `product-variant-picker.liquid`. All current products are already tagged (as of 2026-10-17).

**Files:** `theme/snippets/dt-size-guide-modal.liquid`, `theme/snippets/product-variant-picker.liquid`

Related: [[spreadsheet-column-layout]]
