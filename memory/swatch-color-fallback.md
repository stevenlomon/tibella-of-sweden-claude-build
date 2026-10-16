---
name: swatch-color-fallback
description: Shopify swatch auto-detection fails for Gul/Orange; theme-level fallback lookup in product-variant-options.liquid covers all 22 registry colors
metadata:
  type: project
---

Shopify's storefront swatch rendering auto-detects colors from option value names but doesn't recognize "Gul" (yellow) or "Orange" in the Swedish store context. The API has no way to set swatch colors programmatically (multiple mutations tried, all failed).

**Why:** The `SwatchDrop.color` property is populated at Liquid render time by Shopify's internal name-to-color mapping. It's not stored or settable via any Admin API field. The `shopify.color-pattern` metafield with color metaobjects is set correctly but Dawn's swatch snippet doesn't read from it.

**How to apply:** The fix is a theme-level fallback in three files: `swatch.liquid` accepts `fallback_color`, `swatch-input.liquid` passes it through, `product-variant-options.liquid` computes it from a 22-color lookup (matching the metaobject registry). Both the swatch picker and button picker paths have the lookup. If a new color is added to the metaobject registry, add its hex to both lookup tables in `product-variant-options.liquid`. See [[dawn-theme-learnings]] DAWN-THEME.md Lessons 16-17.
