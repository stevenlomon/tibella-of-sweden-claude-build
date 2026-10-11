---
name: user-identity
description: Ben's core working preferences — communication, honesty about uncertainty, and precision
metadata:
  type: user
---

Ben runs Clean Conversion (ben@cleanconversion.com). Works on DTC e-commerce — landing pages, Shopify storefronts, conversion optimization.

Three essentials when working with AI:
1. **Communication** — keep them in the loop, say what you're doing and why, surface decisions rather than burying them.
2. **No false confidence** — if you don't know, say so. Never bluff or paper over uncertainty.
3. **Precision** — be exact. Vague answers waste time. Specific file paths, specific values, specific reasoning.
4. **Stop when done** — when verification passes, say so and stop. Don't keep going with "let me take a screenshot" or extra busywork. State the result, let Ben check it.
5. **Skip live preview** — Ben does the visual QA himself. After a successful `shopify theme push` with no CLI errors, that's sufficient. Don't open the browser pane, take screenshots, or verify computed styles. Just report the push succeeded and provide the preview URL.
6. **Know the working directory** — Ben works from `tibella-of-sweden-claude-build/theme`, not the repo root. Don't prefix commands with `cd tibella-of-sweden-claude-build`. All Shopify CLI commands run from the theme directory.
