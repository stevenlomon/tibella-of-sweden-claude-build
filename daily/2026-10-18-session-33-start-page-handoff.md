# Session 33 Handoff — Start Page Final Refinements

## Start here
1. `theme/templates/index.json` — homepage section configuration
2. `theme/sections/` — all custom section templates
3. `memory/MEMORY.md` — full memory index

## What was done this session

### Policies and legal pages (complete)
All five policy/legal pages are live on Shopify with no remaining placeholders:

- **Returpolicy** — 30-day open purchase, 14-day ångerrätt (distansavtalslagen), 3-year reklamationsrätt (konsumentköplagen)
- **Fraktpolicy** — free shipping, same-day processing before 13:00, 1–3 day domestic delivery, international origin disclosure (7–14 days from outside EU, customs covered by Tibella)
- **Integritetspolicy** — full GDPR/Swedish privacy policy, IMY complaint reference, Shopify data processing disclosure
- **Användarvillkor** — Swedish consumer law terms, ARN and EU ODR dispute resolution
- **Faktureringsvillkor** — custom page at `/pages/faktureringsvillkor`, Klarna and card payment terms

### Footer (complete)
- Two new navigation menus created: "Kundservice" (contact link) and "Villkor" (all 5 policy links)
- Footer columns now point to correct separate menus instead of sharing one
- Business info filled in: Tibella AB, hello@tibella.se, 070-539 51 53, Nygatan 22, 582 22 Linköping
- Copyright hardcoded to "Tibella" (shop.name in Shopify Admin still says "Tibella of Sweden" — can't change via API, only in Admin > Settings > Store details)
- Instagram link removed from footer
- All "Tibella of Sweden" references changed to "Tibella" in theme files
- All "tibellaofsweden.se" changed to "tibella.se" in policies

### Business details
| Field | Value |
|-------|-------|
| Legal name | Tibella AB |
| Email | hello@tibella.se |
| Phone | 070-539 51 53 |
| Address | Nygatan 22, 582 22 Linköping |
| Hours | Måndag till söndag, 09:00–17:00 (CET) |
| Org number | Skipped for now |

## What's left for start page refinements

The homepage (`templates/index.json`) has these sections in order:
1. Hero slideshow
2. Collection list (Shoppa efter kategori)
3. Featured collection tabs (Utvalt för säsongen)
4. Image with text (brand story)
5. Trust badges (Handla tryggt)
6. FAQ accordion (Vanliga frågor)

Review each section for:
- Content accuracy and tone consistency with the new "Tibella" branding (not "Tibella of Sweden")
- Image quality and alt text
- Mobile responsiveness
- Any remaining placeholder text or broken links

## Note on shop.name
The Shopify store name is still "Tibella of Sweden" in Admin > Settings > Store details. This affects the browser tab title, order confirmation emails, and any Liquid template using `{{ shop.name }}`. The copyright was hardcoded to avoid this, but a manual change in Admin would fix it globally. The `shopUpdate` mutation doesn't exist in the current API — it must be done in the Admin UI.
