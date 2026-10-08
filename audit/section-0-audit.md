# Section 0 Audit — Template Suffix Scan

**Date:** 2026-10-07
**Store:** kei3va-ym.myshopify.com
**Live theme:** dove-and-thistle-theme/main (#159282888926)
**Method:** `shopify theme pull --theme 159282888926 --only "templates/*"`, listed files against Dawn's 13 defaults.

## Live theme template files found (13)

```
404.json
article.json
blog.json
cart.json
collection.json
gift_card.liquid
index.json
list-collections.json
page.contact.json
page.json
password.json
product.json
search.json
```

## Result

**Alternate templates found: none.** Every file matches a Dawn default; no `product.*.json`, `page.*.json` (beyond `page.contact.json`, a Dawn default), `collection.*.json`, or `blog.*.json` suffix templates exist. No products, pages, collections, or blogs are assigned to custom templates, so the new theme needs only the 13 standard templates.

## Action

No extra template files required. Re-run this audit if the merchant assigns any resource to a new custom template before the new theme is published.
