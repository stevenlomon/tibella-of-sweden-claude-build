# Handoff: 2XL Size Expansion

Date: 2026-10-18

## Start here — read these files first

1. **This handoff** — scope, decisions, skip list, and technical approach
2. `PRODUCT-IMPORT.md` — variant creation pipeline (step 4 hardcodes S/M/L/XL, lines 54-92 cover `productOptionsCreate` + `productVariantsBulkCreate`)
3. `GRAPHQL.md` — Lessons 23 (inventory `@idempotent` + `changeFromQuantity`) and 24 (changing variant options)
4. `daily/2026-10-18-session-30-handoff.md` — the original AliExpress supplier size audit with full mismatch table

---

## Goal

Add 2XL (EU 46) as a size option to all eligible clothing products in the store. Currently every product offers S/M/L/XL only.

---

## Critical context: fulfillment model

AliExpress suppliers are used for **product modeling only** (photos, measurements, size range signals), NOT for order fulfillment. Once the store gets real sales, other suppliers will be sourced.

This means:
- **"Size temporarily out of stock at AliExpress"** → irrelevant. The size exists, it can be sourced elsewhere.
- **"Size does not exist in the AliExpress listing"** → still a problem. No reference data (photos, measurements) for that size. Don't offer it.
- The AliExpress listing is the **source of truth for whether a size exists**, not for whether it can be shipped today.

---

## Products to SKIP (do NOT add 2XL)

### Sizes don't exist at supplier

| Product | Handle | Reason |
|---|---|---|
| Hilda — Suede Jacket | `hilda-suede-jacket` | Supplier listing caps at L. XL already zeroed (inventory 0). |
| Thyra — Knit Dress | `thyra-turtleneck-dress` | Supplier caps at L. XL variants already zeroed. |
| Hedda — Oversized Cable Knit Pullover | `hedda-oversized-cable-knit-pullover` | Sourced from a plus-size listing (1XL-3XL only). S/M/L zeroed. XL retained (maps to supplier 1XL). No 2XL reference data in standard sizing. |

### Supplier caps at XL (no 2XL in listing)

| Product | Handle | Reason |
|---|---|---|
| Hedda — V-Neck Knit Cardigan | `v-neck-knitted-cardigan` | Supplier has S-XL only. Currently DRAFT. |
| Thyra — Elegant Knit Dress | `thyra-elegant-knit-dress` | Supplier has S-XL only. |
| Marta — Wide Leg Dress Pants | `marta-wide-leg-dress-pants` | Supplier has S-XL only, low stock. |

### All bottoms (pants category)

AliExpress pants suppliers use generic S/M/L/XL/2XL labels, but actual measurements show supplier "2XL" = waist 80-84cm. Swedish 2XL (EU 52-54) = waist 105-117cm. That's a 25-30cm gap. The reference measurements are wrong regardless of who fulfills, so bottoms cannot be expanded to 2XL without finding suppliers with real EU-standard sizing.

### Products with known inventory issues (sizes exist but were zeroed for other reasons)

These two Vera products had their inventory restored to 10 in Session 32 after the fulfillment model was clarified (OOS at AliExpress ≠ problem). They CAN be expanded to 2XL if the listing shows 2XL:

| Product | Handle | Status |
|---|---|---|
| Vera — Long Sleeve Knit Top | `vera-long-sleeve-knit-top` | All variants at 10. Check if AliExpress listing includes 2XL. |
| Vera — Knit Top Premium | `vera-knit-long-sleeve-top-premium` | All 20 variants at 10. Check if AliExpress listing includes 2XL. |

---

## Eligible products (~30)

Session 30 checked all 38 supplier URLs. The ~30 products NOT in the skip list above are eligible for 2XL. To get the exact list, query all ACTIVE products and subtract the skip list:

```graphql
{ products(first: 100, query: "status:ACTIVE") { nodes { id title handle options { id name optionValues { id name } } variants(first: 50) { nodes { id title selectedOptions { name value } } } } } }
```

This will also give you the option IDs needed for variant creation.

---

## Technical approach

### Step 1: Update PRODUCT-IMPORT.md

Line 501 currently reads:
```
4. `productOptionsCreate` + `productVariantsBulkCreate` → Färg × Storlek (S/M/L/XL)
```
Change to include 2XL. Also update line 62 where the example `productOptionsCreate` mutation hardcodes the size values.

### Step 2: Add 2XL option value to each eligible product

For existing products, you don't need `productOptionsCreate` again. Use `productVariantsBulkCreate` directly — it auto-creates new option values when you pass a name that doesn't exist yet (documented in PRODUCT-IMPORT.md line 92).

For each eligible product:
1. Get the Storlek option ID (from the product query above)
2. Get all existing color option values
3. Create one new variant per color: `{ optionValues: [{ optionId: "<Färg ID>", name: "<Color>" }, { optionId: "<Storlek ID>", name: "2XL" }], price: "<same as other sizes>" }`

Example mutation:
```graphql
mutation {
  productVariantsBulkCreate(
    productId: "gid://shopify/Product/..."
    variants: [
      { optionValues: [{ optionId: "FÄRG_OPT_ID", name: "Beige" }, { optionId: "STORLEK_OPT_ID", name: "2XL" }], price: "999.00" }
      { optionValues: [{ optionId: "FÄRG_OPT_ID", name: "Svart" }, { optionId: "STORLEK_OPT_ID", name: "2XL" }], price: "999.00" }
    ]
  ) {
    productVariants { id selectedOptions { name value } }
    userErrors { field message }
  }
}
```

### Step 3: Set inventory for new variants

New variants start with 0 inventory. Set each to 10 using `inventorySetQuantities` with `@idempotent` on the **field** (not the mutation) and `changeFromQuantity: 0`:

```graphql
mutation {
  inventorySetQuantities(input: {
    reason: "correction"
    name: "available"
    quantities: [
      { inventoryItemId: "gid://shopify/InventoryItem/...", locationId: "gid://shopify/Location/89877709022", quantity: 10, changeFromQuantity: 0 }
    ]
  }) @idempotent(key: "2xl-init-<handle>-2026-10-18") {
    inventoryAdjustmentGroup { reason }
    userErrors { field message }
  }
}
```

Location ID: `gid://shopify/Location/89877709022` (Tallbacken 26)

### Step 4: Update the size guide

The size guide uses product tags for routing (see `memory/size-guide-tag-routing.md`). Add a 2XL row to the clothing size table with EU 46 body measurements. The size guide section is in the theme — check `sections/` for the size guide template.

### Step 5: Verify

For a sample product, check the storefront:
- 2XL appears as a selectable size option
- Price matches other sizes
- Inventory shows as in stock
- Size guide includes 2XL

---

## Batch approach

With ~30 products averaging ~4 colors each, that's ~120 new variants. Recommended batching:

1. Query all eligible products in one call (get product IDs, option IDs, colors, prices)
2. Build variant creation mutations — can batch multiple variants per product in one `productVariantsBulkCreate` call
3. After creation, query the new variants' inventory item IDs
4. Batch inventory mutations (up to 10 items per `inventorySetQuantities` call)

The parallel enrichment pattern from memory applies: split into groups of ~5 products, process in parallel.

---

## Store reference

- **Shopify store:** `kei3va-ym.myshopify.com`
- **Live theme ID:** `159361106142`
- **Location ID:** `gid://shopify/Location/89877709022`
- **CLI pattern:**
  ```bash
  source ~/.nvm/nvm.sh && nvm use 24 > /dev/null 2>&1
  shopify store execute --store kei3va-ym.myshopify.com --query '<GRAPHQL>' [--allow-mutations]
  ```

---

## Resume prompt

```text
Read daily/2026-10-18-session-32-2xl-expansion-handoff.md first — it has the complete scope, skip list, and technical approach for adding 2XL to all eligible clothing products.

Also read: PRODUCT-IMPORT.md (variant creation pipeline), GRAPHQL.md Lessons 23-24 (inventory mutations and variant option changes), and memory/project-fulfillment-model.md (AliExpress = modeling only, not fulfillment).

Task: Add 2XL (EU 46) as a size option to all eligible active products. The handoff has the skip list, eligible product query, mutation patterns, and batching approach. Start by querying all active products to build the work list.
```
