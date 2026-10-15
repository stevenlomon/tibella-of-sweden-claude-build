---
name: feedback-handoff-format
description: Handoff docs must open with a "Start here" reading list of essential files so the next session can get oriented without guessing
metadata:
  type: feedback
---

Every handoff doc must open with a **"Start here — read these files first"** section before any narrative. List the essential files a new session needs to read to get fully oriented — not just files modified this session, but all load-bearing context files.

**Why:** A handoff that only lists what changed this session forces the next session to guess which other files matter. The reading list eliminates cold-start fumbling and prevents the new session from missing critical context (like image position conventions or API quirks) that lives in files it wouldn't know to look for.

**How to apply:** At the top of every handoff doc (right after the title), add a numbered list of files with a one-line description of what each contains and why it matters. Include:
- Root instructions (`CLAUDE.md`)
- Memory index (`memory/MEMORY.md`)
- Any domain-specific reference docs (API docs, conventions, registries)
- The prior session's handoff (for continuity)
- Source data files (spreadsheets, configs) the work depends on

Related: [[image-convention]]
