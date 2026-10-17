---
name: spreadsheet-column-layout
description: Product planning spreadsheet column structure across all 8 category tabs — the single source of truth for product data
metadata:
  type: reference
---

Spreadsheet ID: `105rq3Amb7v8aYzDw-dl07qfdEaHlVUA2AGNynw7sMAg`

**Column layout (all 8 tabs):**

| Column | Header | Content |
|---|---|---|
| A | Status | Product status |
| B | Product name/keyword | Search keyword or working name |
| C | Product Line | Brand line name (Hilda, Hedda, Agnes, etc.) |
| D | Product Name | Full Swedish product name |
| E | Product Name English | Clean English translation |
| F | Specifikationer | Specs metafield content (Swedish) |
| G | Passform & Storlek | Fit & sizing metafield content (Swedish) |
| H | Material & Skötsel | Material & care metafield content (Swedish) |
| I | Shopify URL | URL slug: `{product-line}-{english-name}` |
| J+ | Supplier URL | AliExpress product link(s) |

**Sheet IDs:**
Outerwear=183236302, Tops=1590652187, Dresses=1587557099, Bottoms=1563725538, Two Piece Set=436956849, Accessories=1484329838, Bags=728460817, Boots=1248822450

**Current state (as of 2026-10-17):**
- Columns E and I populated for all rows with Product Line + Product Name (106 products)
- Columns F–H mostly empty — overnight task will populate from AliExpress data
- Slug convention: lowercase, hyphenated, Swedish chars normalized (ä→a, ö→o, å→a, é→e)

Related: [[parallel-enrichment-pattern]]
