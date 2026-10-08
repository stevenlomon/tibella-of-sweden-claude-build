---
name: dawn-multirow-diagonal-touch
description: Making two Dawn multirow images meet at a diagonal corner requires zeroing both the row-gap and the invisible .media border
metadata:
  type: project
---

Two obstacles to diagonal-corner-touching images in Dawn's multirow section:

1. `.multirow__inner` is a flex column with `row-gap: 36px`. Zero section padding is not enough — the gap is a separate property.
2. Dawn's `.media` wrapper has `border: 1px solid rgba(41, 38, 36, 0.05)` — invisible on the page but it insets each image by 1px, leaving a 2px visual gap on each axis even once the containers meet.

**Why:** both come from Dawn defaults, not design choices. The gap is for stacked rows that need breathing room; the border is a hairline guard around the media container.

**How to apply:** when a design wants two multirow images to butt up or touch at a diagonal:

```css
.dt-multirow .multirow__inner { row-gap: 0; }
.dt-multirow .image-with-text__media { border: 0; }
```

Related: [[dawn-css-load-order]].
