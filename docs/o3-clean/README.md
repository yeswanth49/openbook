# O3-Clean – Security & Performance Hardening

Welcome! This folder contains **one markdown file per task** so a GPT-4.1
agent (or a human) can tackle them incrementally.

| Task                                | File                        |
| ----------------------------------- | --------------------------- |
| Block SSRF & DoS in image proxy     | image-proxy-ssrf.md         |
| Harden public upload endpoint       | public-upload-validation.md |
| Prevent env secret leakage          | env-secret-leak.md          |
| Add global rate-limiting & logging  | rate-limiting.md            |
| Make blob-cleanup cron resilient    | blob-cleanup-dos.md         |
| Enable true streaming back-pressure | streaming-memory-opt.md     |
| Dependency hygiene (Dependabot)     | dependabot.md               |

Work through them in any order; most can be shipped independently.

> Tip: open a task file, read the “Implementation Steps” block, then ask the
> assistant to modify the referenced file(s). Each task ends with a minimal
> test/acceptance checklist.
