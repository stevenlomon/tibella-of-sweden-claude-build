# SEO Product Enrichment Prompt

## The prompt

---

**Situation**
You are creating SEO-optimized product content for Tibella of Sweden, a Swedish e-commerce brand selling women's fashion and apparel. Products are sold through a Shopify store targeting Swedish customers, with Google Shopping ads as the primary acquisition channel. The store and Google Shopping feed both target Sweden — all primary content is in Swedish. English versions are generated as secondary output, stored for future international expansion.

**Task**
Given an input block containing a product's current title, description, product type, tags, and price — generate a complete SEO content package covering all fields listed below. Swedish is the primary language for all Shopify fields. English is secondary (stored, not deployed).

**Objective**
Maximize search visibility on Google Shopping Sweden and Swedish organic search, accurately describe the product, and drive click-through rates — while maintaining compliance with Google Shopping policies and consistency with Tibella's brand voice (Scandinavian, understated, quality-focused).

**Knowledge**

### Language priority

| Destination | Language | Notes |
|---|---|---|
| Shopify SEO title | **Swedish** | Goes into the `SEO title` field in Shopify admin |
| Shopify SEO description | **Swedish** | Goes into the `SEO description` field in Shopify admin |
| Shopify image alt texts | **Swedish** | Goes into each image's alt text field |
| Shopify tags | **Swedish** | Already Swedish — enriched with more search terms |
| Shopify color metafield | **Swedish** | Google-compatible Swedish color names |
| Google Shopping feed (Sweden) | **Swedish** | Pulls from Shopify, matches Swedish search queries |
| Future international feed | English | Stored in this doc, loaded when expanding to EN markets |

### Output fields

For each product, generate ALL of the following. Swedish fields are marked **PRIMARY** (deploy to Shopify). English fields are marked SECONDARY (store for later).

#### 1. SEO-titel (SV) — PRIMARY
Structure: `[Kön/Kategori] + [Material/Mönster] + [Produkttyp med Säsong] + [Adjektiv 1] + [Adjektiv 2]`
- Max 150 characters (Google truncates at ~70 visible, but indexes up to 150)
- Use the `|` separator between primary title and secondary descriptors
- Use natural Swedish product terminology (kappa, jacka, tröja — not direct translations of English marketing terms)
- Swedish search terms should match what a Swedish customer actually types into Google
- Example: `Dam Lång Trenchcoat i Ullblandning | Bältad Skräddad Vinterkappa`

#### 2. SEO Title (EN) — SECONDARY
Structure: `[Gender/Category] + [Main Material/Pattern] + [Product Type with Season] + [Adj 1] + [Adj 2]`
- Same constraints as Swedish, adapted for English search patterns
- Example: `Women's Long Wool Blend Trenchcoat | Belted Tailored Winter Coat`

#### 3. SEO-beskrivning (SV) — PRIMARY
- 150-155 characters (meta description for search results)
- Include primary keyword + one benefit/feature + a subtle call to action
- No promotional language (no "Fri Frakt", "Bästa Pris", "Rea")
- End with `Handla hos Tibella of Sweden.`
- Example: `Skräddad trenchcoat i ullblandning med bältad midja och förlängd siluett. Perfekt över stickat och klänningar. Handla hos Tibella of Sweden.`

#### 4. SEO Description (EN) — SECONDARY
- Same constraints, natural English
- End with `Shop Tibella of Sweden.`
- Example: `Tailored wool blend trenchcoat with belted waist and elongated silhouette. Layers effortlessly over knitwear and dresses. Shop Tibella of Sweden.`

#### 5. Bild-alttexter (SV) — PRIMARY
Follow the store's 5-position image convention:
- **Main 1 (Fram):** `[Produktnamn] — [nyckeldetalj] — framifrån`
- **Main 2 (Hover):** `[Produktnamn] — [vinkel/stylingdetalj] — sidovy`
- **Main 3 (I aktion):** `[Produktnamn] — [kontext/scen] — livsstilsbild`
- **Main 4 (Detalj 1):** `[Produktnamn] — [specifik detalj: krage/knapp/textur]`
- **Main 5 (Detalj 2):** `[Produktnamn] — [annan detalj: tyg/foder/ficka]`

#### 6. Image Alt Texts (EN) — SECONDARY
- **Main 1 (Front):** `[Product name] — [key visual detail] — front view`
- **Main 2 (Hover):** `[Product name] — [angle/styling detail] — side/back view`
- **Main 3 (In-action):** `[Product name] — [context/scene] — lifestyle`
- **Main 4 (Detail 1):** `[Product name] — [specific detail: collar/button/texture]`
- **Main 5 (Detail 2):** `[Product name] — [another detail: fabric/lining/pocket]`

#### 7. Färg-metafält — PRIMARY
The Shopify `color-pattern` metafield value. Use Swedish color names that map to Google Shopping's color taxonomy.
- Single color: `Beige`
- Multi-color product: `Beige / Grå / Svart` (one entry per variant)

#### 8. Enriched Tags (SV) — PRIMARY
Comma-separated. Combine existing category tags with search-relevant terms.
- Keep the existing base: `Dam, [category tags]`
- Add: material, season, style descriptor, occasion, silhouette
- Swedish only (the store's tag language)
- Example: `Dam, Kappor, Outerwear, Ullblandning, Trenchcoat, Vinterkappa, Bältad, Knälång, Klassisk, Autumn, Winter`

### Rules
- Never include brand names with intellectual property (Gucci, Dior, Nike, etc.)
- Never include promotional language (Free Shipping, Fri Frakt, Best Price, Bästa Pris, Sale, Rea, Discount)
- Standard Swedish capitalization for Swedish fields (not English-style Title Case)
- Title case for English fields
- Avoid ALL CAPS
- No unnecessary punctuation beyond the `|` separator in titles
- Season descriptors (Vinter, Sommar / Winter, Summer) only when relevant to the product type
- Adjectives must accurately describe the specific product — don't guess features not stated in the input
- Swedish product terms should match how Swedish customers actually search (check: would a Swede type this into Google?)

---

## Example: Long Wool Trenchcoat

### Input
```
Title: Long Wool Trenchcoat
Description: A timeless long trenchcoat in a wool blend. Tailored lines and a belted waist create a sharp, elongated silhouette that layers effortlessly over knitwear and dresses.
Type: Outerwear
Tags: Dam, Jackor, Kappor, Outerwear, Autumn, Winter
Price: 999.00 SEK
Google Category: Apparel & Accessories > Clothing > Outerwear > Coats & Jackets
Gender: Female
Custom Label 0: Jackor & Kappor
Custom Label 1: Autumn / Winter
```

### Output

**1. SEO-titel (SV) — PRIMARY → Shopify**
Dam Lång Trenchcoat i Ullblandning | Bältad Skräddad Vinterkappa

**2. SEO Title (EN) — SECONDARY → stored**
Women's Long Wool Blend Trenchcoat | Belted Tailored Winter Coat

**3. SEO-beskrivning (SV) — PRIMARY → Shopify**
Skräddad trenchcoat i ullblandning med bältad midja och förlängd siluett. Perfekt över stickat och klänningar. Handla hos Tibella of Sweden.

**4. SEO Description (EN) — SECONDARY → stored**
Tailored wool blend trenchcoat with belted waist and elongated silhouette. Layers effortlessly over knitwear and dresses. Shop Tibella of Sweden.

**5. Bild-alttexter (SV) — PRIMARY → Shopify**
- Main 1: Dam Lång Trenchcoat i Ullblandning Beige — framifrån
- Main 2: Dam Lång Trenchcoat i Ullblandning — bälte och midjedetalj — sidovy
- Main 3: Kvinna i Lång Trenchcoat i Ullblandning på stadsgata — livsstilsbild
- Main 4: Lång Trenchcoat i Ullblandning — slag- och kragedetalj
- Main 5: Lång Trenchcoat i Ullblandning — närbild på ullblandad textil

**6. Image Alt Texts (EN) — SECONDARY → stored**
- Main 1: Women's Long Wool Blend Trenchcoat in Beige — front view
- Main 2: Women's Long Wool Blend Trenchcoat — belted waist detail — side view
- Main 3: Woman wearing Long Wool Blend Trenchcoat walking on city street — lifestyle
- Main 4: Long Wool Blend Trenchcoat — notch collar and lapel detail
- Main 5: Long Wool Blend Trenchcoat — wool blend fabric texture close-up

**7. Färg-metafält**
Beige

**8. Enriched Tags (SV)**
Dam, Kappor, Jackor, Outerwear, Ullblandning, Trenchcoat, Vinterkappa, Bältad, Knälång, Skräddad, Klassisk, Autumn, Winter
