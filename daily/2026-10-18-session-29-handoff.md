# Session 29 Handoff — 2026-10-18

## Start here — read these files first

1. **This handoff** — you're reading it
2. `GRAPHQL.md` — 23 lessons on Shopify Admin GraphQL API via CLI (especially Lessons 15-17 on color tags, Lesson 20 on handle changes, Lesson 22 on the full color mismatch fix)
3. `DAWN-THEME.md` — 21 lessons on Dawn CSS/JS/Liquid (especially the gallery nav and `dt-slide-*` animation system)
4. `PRODUCT-IMPORT.md` — API reference, pipeline steps, color metaobject table, Lesson 18 on color order
5. `theme/snippets/product-media-gallery.liquid` — the gallery Liquid with color-tag filtering (lines 28-37, 108-112)
6. `theme/assets/dt-gallery-nav.js` — the custom gallery nav component (111 lines)
7. `memory/MEMORY.md` — memory index

---

## Priority 1 — TWO BUGS requiring investigation

### Bug 1: Gallery carousel not visible on Ellinor Long Wool Blend Trenchcoat

**URL:** `https://kei3va-ym.myshopify.com/products/ellinor-long-wool-blend-trenchcoat?variant=49185117831390`

**Symptom:** The gallery navigation (prev/next arrows, counter "1/5") does not appear on the main product image. The product has multiple images and color swatches but the dt-gallery-nav element is missing or hidden.

**Where to look:**
- `theme/assets/dt-gallery-nav.js` — the `connectedCallback()` returns early if `this.total < 2` (line 9). If the DOM only has 1 `<li>` visible after color-tag filtering + hide_variants, the nav never initializes.
- `theme/snippets/product-media-gallery.liquid` — lines 99-112 control which `<li>` items render. The `hide_variants` filter (line 103) removes variant-assigned images, and the `color:` filter (lines 108-112) removes other-color images. If the combination leaves only 1 image in the DOM, no carousel.
- Check: does this product have its images correctly tagged? Does `current_color_tag` resolve correctly for the default variant?
- The `setActiveMedia` override (line 35-59 in dt-gallery-nav.js) also hides nav when `self.total < 2` (line 47-49).

**This product is ACTIVE** (not drafted) — it was processed in the bulk run and has color tags. The carousel issue is a theme/Liquid bug, not a data issue.

### Bug 2: Image flashing/flickering on Nova Cropped Bomber Jacket swatch switching

**URL:** `https://kei3va-ym.myshopify.com/products/nova-cropped-bomber-jacket?variant=49185125499102`

**Symptom:** The carousel IS visible and works, but when switching between color swatches, there's a visible flash/flicker during the transition. This is a regression — the flash was fixed in a prior session but has returned.

**Where to look:**
- `theme/assets/dt-gallery-nav.js` — the `_switchTo` method (lines 89-107) uses CSS animation classes `dt-slide-out`, `dt-slide-entering`, `dt-slide-in-right`/`dt-slide-in-left` with a 420ms timeout. The flash likely happens during the `setActiveMedia` callback (line 35) which Dawn's `product-info.js` calls when a swatch is clicked — this triggers a Section Rendering API fetch that replaces gallery `<li>` elements in the DOM.
- `theme/assets/dt-dove-thistle.css` — find the `.dt-slide-out`, `.dt-slide-entering`, `.dt-slide-in-right`, `.dt-slide-in-left` animation rules. If there's a gap between the old image fading out and the new one appearing, that's the flash.
- The interaction is: Dawn's `updateMedia()` → Section Rendering API → DOM swap → `setActiveMedia()` → gallery nav updates. The flash could be the brief moment where the old DOM is removed and the new DOM is inserted but not yet styled.
- Prior fix history: Session 26 fixed the `initialFirstId` comparison bug. The fix was to remove the gating entirely and always show nav after `_refreshItems()`. The flash might be a different issue — possibly the Section Rendering API's DOM swap is visible for a frame.

**This product is ACTIVE** — the flashing is a theme/CSS/JS timing bug.

---

## Priority 2 — Fix and activate 14 scrambled-colors drafts

All 14 products are tagged `scrambled-colors` in Shopify and set to DRAFT. To find them:

```graphql
{ products(first: 50, query: "status:DRAFT tag:scrambled-colors") { nodes { id title handle } } }
```

### Two categories of scrambled products:

**Category A — Have color tags but tags are WRONG (6 Outerwear products):**

These went through the automated batch tagging in this session using the `main_count = total_images - (num_colors - 1)` formula, but the formula assigned colors to the wrong images. The user visually confirmed the colors are still scrambled on the storefront.

| Handle | Title | Colors | Media | Tagged |
|---|---|---|---|---|
| `freja-padded-winter-jacket-with-hood-and-faux-fur-collar` | Vadderad Vinterjacka med Huva och Fuskpälskrage | Aprikos, Armégrön, Svart, Mörkblå, Rosa | 9 | 9 |
| `astrid-wool-coat-straight-fit` | Yllekappa med Rak Passform | Brun, Aprikos, Khaki | 7 | 7 |
| `freja-long-hooded-cotton-jacket` | Lång Bomullsjacka med Huva | Vinröd, Grå, Khaki, Mörkblå | 8 | 8 |
| `vintra-quilted-hooded-parka` | Quiltad Parka med Huva Dam | Armégrön, Svart, Grå, Khaki, Mörkblå | 9 | 9 |
| `ellinor-lightweight-wool-trenchcoat` | Trenchcoat i Ylle Lättare Modell | Aprikos, Svart | 6 | 6 |
| `ellinor-trenchcoat-with-reversible-collar` | Trenchcoat med Vändbar Krage | Svart, Röd, Grå, Khaki | 8 | 8 |

**Fix approach:** These need the full Lesson 22 fix — visual verification of each image's actual color (download from Shopify CDN, `Read` the PNG), then correct the `color:` tags with `productUpdateMedia`. The batch formula cannot be trusted for these; each image must be visually confirmed.

Also includes Sigrid (partially tagged, 4/7):
| `sigrid-double-breasted-long-coat-with-faux-shearling-collar` | Dam Dubbelknäppt Lång Kappa | Aprikos, Svart, Khaki | 7 | 4 |

**Category B — No color tags at all (6 Knitwear + 1 Dress):**

These were not in the collection query results during Phase 3 (possibly not assigned to the Stickat & Toppar collection) so they were never processed.

| Handle | Title | Colors | Media |
|---|---|---|---|
| `knit-cardigan` | Stickad Kofta | Beige, Grön, Vinröd, Svart | 8 |
| `cable-knit-cardigan` | Flätstickad Kofta | Beige, Blå, Rosa, Brun, Lila | 9 |
| `v-neck-knitted-cardigan` | Stickad Kofta med V-ringning | Vinröd, Vit, Rosa | 7 |
| `hooded-long-sleeve-cardigan` | Stickad Kofta med Huva | Beige, Grå, Blå, Rosa | 8 |
| `fleece-jacket` | Fleecejacka Dam | Beige, Blå, Rosa | 7 |
| `knitted-dress` | Stickad Klänning | Mörkbrun, Beige | 6 |

**Fix approach:** These need the same Lesson 22 treatment. Download images, visually verify colors, tag with `productUpdateMedia`, then set to ACTIVE. Also need handle updates (check spreadsheet column I for planned handles — Tops rows 6-10, Dresses tab) and 301 redirects.

**After fixing each product:**
1. Verify in browser — click each swatch, confirm gallery shows correct images
2. Set status to ACTIVE
3. Remove the `scrambled-colors` tag

---

## Priority 3 — Remaining follow-ups

1. **23 draft shells** — 15 Knitwear + 8 Klänningar created as empty shells, never enriched. Need decision: finish importing or delete. They are NOT tagged `scrambled-colors`.
2. **Import "Woolen Trench Coat"** — row 11 in Outerwear spreadsheet, AliExpress 1005012864545306. Full import pipeline needed.
3. **Dresses/Sets/Bottoms metafields** — These 3 collections have empty `custom.specifications`, `custom.fit_sizing`, `custom.materials_care` in both Shopify AND the spreadsheet. Data needs to be written from scratch (either manually or by scraping AliExpress product descriptions).

---

## What was completed this session

### Phase 2 (Outerwear) — 30 products
All 30 Outerwear products processed through the 4-workstream pipeline:
- Color tags on all images (`productUpdateMedia`)
- Handle updates to `{product-line}-{english-name}` format (`productUpdate`)
- 301 redirects from old handles (`urlRedirectCreate`)
- Metafield text extracted and written to spreadsheet F/G/H
- Slugs written to spreadsheet column I

### Phase 3 (All other collections) — 7 collections
| Collection | Color Tags | Handle Updates | Redirects | Metafields F/G/H |
|---|---|---|---|---|
| Dresses (13) | 13 | 10 | 10 | — (empty in Shopify) |
| Two Piece Sets (6) | 6 | 6 | 6 | — (empty) |
| Bottoms (7) | 7 | 7 | 7 | — (empty) |
| Accessories (7) | 7 | 7 | 7 | 7 written |
| Boots (7) | 7 | 7 | 7 | 7 written |
| Bags (9) | 9 | 9 | 9 | 9 written |
| Tops (26) | 26 | 23 | 23 | 23 written |

### Priority 2 follow-ups completed
| Task | Result |
|---|---|
| Push metafields to Shopify | Moot — Dresses/Sets/Bottoms F/G/H empty in both systems |
| Taxonomy categories | 32 products categorized (Dresses, Skirt, Boots, Handbags, Scarves, Belts) |
| Curated collections | 5 bags → Utvalt — Väskor, 5 boots → Utvalt — Stövlar |
| Delete shoes-meny | Already gone (returns null) |
| Activate Freja draft | Activated then re-drafted (scrambled colors) |
| Draft scrambled products | 14 products drafted with `scrambled-colors` tag |

---

## Technical reference

### Store
- **Shopify store:** `kei3va-ym.myshopify.com`
- **Live theme ID:** `159361106142`

### Shopify CLI pattern
```bash
source ~/.nvm/nvm.sh && nvm use 24 > /dev/null 2>&1
shopify store execute --store kei3va-ym.myshopify.com --query '<GRAPHQL>' [--allow-mutations]
```
- No `data` wrapper in CLI responses (Lesson 1)
- JSON extraction from CLI output needs brace-depth tracking (CLI adds ANSI + trailing `[exited with code 0]`)

### Google Sheets
- **Spreadsheet ID:** `105rq3Amb7v8aYzDw-dl07qfdEaHlVUA2AGNynw7sMAg`
- **MCP tools:** `mcp__0130100f-5b37-4f80-9a2e-f4b3a0ad83de__get_values` / `update_values`
- **Tab sheet IDs:** Outerwear=183236302, Tops=1590652187, Dresses=1587557099, Bottoms=1563725538, Two Piece Set=436956849, Accessories=1484329838, Bags=728460817, Boots=1248822450
- Row 5 = headers, data starts row 6. Col F=Specifications, G=Fit & Sizing, H=Materials & Care, I=Shopify URL slug

### Color tag system
- Alt text format: `color:ColorName` (e.g., `color:Svart`, `color:Beige`)
- Gallery Liquid (`product-media-gallery.liquid` lines 28-37, 108-112) filters images by matching `current_color_tag` against `media.alt`
- The `main_count = total_images - (num_colors - 1)` formula assigns first `main_count` images to `colors[0]`, then one per additional color — BUT this was shown to be unreliable for some products (Category A above). Visual verification is required.

### Metafield extraction
- Rich text JSON: `{type:"root", children:[{type:"paragraph", children:[{type:"text", value:"..."}]}]}`
- Navigate `.children[0].children[0].value` for simple text, iterate `.children` for multi-paragraph
- Keys: `custom.specifications` → col F, `custom.fit_sizing` → col G, `custom.materials_care` → col H

### Key theme files
| File | Purpose |
|---|---|
| `theme/snippets/product-media-gallery.liquid` (360 lines) | Gallery with color-tag filtering |
| `theme/assets/dt-gallery-nav.js` (111 lines) | Custom carousel nav (prev/next, counter, slide animations) |
| `theme/assets/dt-dove-thistle.css` | Main custom CSS (slide animations: `.dt-slide-out`, `.dt-slide-entering`, `.dt-slide-in-right/left`) |
| `theme/snippets/product-thumbnail.liquid` | Individual media item rendering |

### Collection GIDs
| Collection | GID |
|---|---|
| Jackor & Kappor | `gid://shopify/Collection/1135923790046` |
| Stickat & Toppar | `gid://shopify/Collection/1135923822814` |
| Klänningar | `gid://shopify/Collection/1135924183262` |
| Väskor | `gid://shopify/Collection/1135924216030` |
| Stövlar & Skor | `gid://shopify/Collection/1135924248798` |
| Accessoarer | `gid://shopify/Collection/1135942435038` |
| Set | `gid://shopify/Collection/1136270278878` |
| Byxor | `gid://shopify/Collection/1136273359070` |
| Utvalt — Väskor | `gid://shopify/Collection/1135942795486` |
| Utvalt — Stövlar | `gid://shopify/Collection/1135942828254` |

### Taxonomy categories used
| Category | Taxonomy ID |
|---|---|
| Dresses | `gid://shopify/TaxonomyCategory/aa-1-4` |
| Skirts | `gid://shopify/TaxonomyCategory/aa-1-15` |
| Boots | `gid://shopify/TaxonomyCategory/aa-8-3` |
| Handbags | `gid://shopify/TaxonomyCategory/aa-5-4` |
| Scarves & Shawls | `gid://shopify/TaxonomyCategory/aa-2-26` |
| Belts | `gid://shopify/TaxonomyCategory/aa-2-6` |
| Sweaters (existing) | `gid://shopify/ProductTaxonomyNode/14325` |
| Outfit Sets (existing) | `gid://shopify/ProductTaxonomyNode/172` |

### Taxonomy mutation (correct field)
```graphql
mutation {
  productUpdate(input: {id: "gid://shopify/Product/...", category: "gid://shopify/TaxonomyCategory/aa-1-4"}) {
    product { id } userErrors { message }
  }
}
```
Note: the field is `category`, NOT `productCategory` (the latter throws `argumentNotAccepted`).
