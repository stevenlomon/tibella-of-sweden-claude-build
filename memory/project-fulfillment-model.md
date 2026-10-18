---
name: project-fulfillment-model
description: AliExpress is for product modeling only, not fulfillment — OOS at AliExpress is irrelevant, but non-existent sizes still matter
metadata:
  type: project
---

AliExpress suppliers are used only for product modeling (photos, measurements, size range signals), NOT for order fulfillment. Once the store gets real sales, Steven and his brother will source from other suppliers.

**Why:** This means "temporarily out of stock at AliExpress" is not a problem — those sizes exist and can be sourced elsewhere. But "size does not exist in the AliExpress listing" IS still a problem — no reference data (photos, measurements) exists for that size.

**How to apply:**
- When auditing supplier size ranges: only zero out variants for sizes that literally don't exist in the listing. Do NOT zero out sizes that exist but are temporarily OOS.
- The [[project-unenriched-drafts]] and size expansion decisions should focus on whether the product data exists, not whether AliExpress can currently ship it.
- Session 30's bottoms sizing mismatch (AliExpress "2XL" ≠ Swedish 2XL by measurement) is still relevant — the reference measurements are wrong regardless of who fulfills.
