# Storefront UI kit

Desktop (1440) recreation of the Shopify storefront from the .fig: Homepage (201:89), Collections Page (324:3976), Product Display Page / Desktop / Premium (330:1337), Cart Drawer.

- `index.html` — router; click nav items → collection, logo → home, product cards → PDP, bag icon / ADD TO CART → cart drawer (Esc or backdrop closes). Collection toolbar opens the filter drawer.
- `Shell.jsx` — header, split feature, cart overlay. `HomeScreen.jsx`, `CollectionScreen.jsx`, `ProductScreen.jsx`.

Mobile frames exist in the .fig (Homepage Mobile, Collections Mobile, PDP Mobile); their components (mobile header, mobile cards, mobile drawers, mobile footer) are in the component cards but full mobile screens are not yet recreated here. Product data is the file's single sample product.
