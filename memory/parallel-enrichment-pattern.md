---
name: parallel-enrichment-pattern
description: Proven pattern for enriching large product batches — parallel research agents + automated batch runner + enrich.py pipeline
metadata:
  type: feedback
---

When enriching more than ~10 products, parallelize with this pattern:

1. **Split into groups of 5** — one research agent per group. Each agent gets the CSV rows, Shopify GIDs, supplier URLs, and writes a batch JSON file.
2. **Launch all research agents simultaneously** — they're independent. Each does AliExpress research, writes Swedish content, maps colors/images, outputs a validated batch JSON.
3. **Run `scripts/run-all-batches.sh`** in the background — it polls for batch JSON files every 30s, runs `enrich.py` on each as they appear, max 2 in parallel (Shopify API rate limit safe). Batches start enriching as soon as their JSON is written, even while other agents are still researching.
4. **Validate each batch JSON before (or as) it lands** — check color counts match (1 primary + N var images = N+1 colors), verify all colors exist in `enrich.py` COLOR_METAOBJECTS dict, flag any new colors needed.

**Why:** Session 19 enriched 40 products in ~45 minutes wall-clock (7 research agents + runner). Sequential would have taken 3-4 hours. The runner script handles orchestration automatically — no babysitting between batches.

**How to apply:** Use this for any batch enrichment run of 10+ products. The batch JSON schema, `enrich.py`, and `run-all-batches.sh` are all in `scripts/`. Agent prompts need: CSV data, Shopify GIDs, image IDs, color registry, and the batch JSON schema from the Session 17 handoff.

**Known limits:**
- AliExpress blocks ~60% of supplier page accesses (CAPTCHA). Agents must write conservative material descriptions from images — never fabricate specs.
- Variant-image color matching is positional — visual QA after enrichment is the only safeguard for multi-color products.
- New colors may be needed — agents should flag any color not in the registry. Create the metaobject first, then update `enrich.py` and `PRODUCT-IMPORT.md` before enrichment runs.

Related: [[image-convention]], [[handoff-format]]
