# Implementation Plan

Project Goal: Build “OpenBook” – an offline-first, AI-assisted web application that offers persistent AI chat “Spaces”, a rich block-based personal **Journal**, and shared Motion & Global Search features across the product.

---

## Phase 0: Repository Audit & Cleanup – Agent_Omega

Objective: Establish a clean, tooling-consistent baseline before any feature work begins.

### Task 0A – Agent_Omega: Execute `docs/o3-clean` Checklist

1. Inventory repository against every item in `docs/o3-clean`.
    - Guidance: Record each checklist item as ✅ / ⚠️ / ❌ to surface gaps early.
2. Remove flagged assets, `.env` files and obsolete npm scripts.
    - Guidance: Do **not** touch files outside the scope of the checklist without Manager approval.
3. Produce `docs/clean-report.md` summarising actions, removals and outstanding questions.

### Task 0B – Agent_Omega: Purge Dead Code & Assets

1. Run static-analysis tools (`ts-prune`, `webpack-bundle-analyzer`) to detect unused exports and bundles.
2. Delete confirmed-unused files and assets.
3. Add CI script `scripts/verify-unused.ts` and wire it to `pnpm unused:check`.
    - Guidance: CI must exit non-zero on any unused export.

### Task 0C – Agent_Omega: Add Baseline Tooling

1. Install and configure ESLint, Prettier and lint-staged.
2. Implement custom rule `eslint-plugin-no-style-regression` enforcing the **Global-Style-Guard**.
3. Configure Husky pre-commit hooks to run lints and tests.
4. Update CI workflow so that `pnpm lint && pnpm test` passes before merge.

---

## Phase 1: System-wide Rename & Refactor – Agent_Sigma

Objective: Apply the naming changes described in `docs/o3-rename` while maintaining API stability.

### Task 1A – Agent_Sigma: Apply Rename Mappings

1. Extract rename tables from `docs/o3-rename`.
2. Author codemod `scripts/rename.ts` that performs the bulk refactor automatically.
3. Execute codemod and commit results under branch `rename-sweep`.

### Task 1B – Agent_Sigma: Codemod Script Tests & CI Guard

1. Create fixture repositories and unit-test codemod edge-cases.
2. Add CI job `scripts/rename-guard.mjs` that fails when legacy identifiers remain.

### Task 1C – Agent_Sigma: Update Docs & Storybook

1. Search-and-replace outdated names in `/docs` and Storybook stories.
2. Regenerate component screenshots to reflect the new naming.

---

## Phase 2: Core Architecture & State Layer – Agent_Alpha

Objective: Lay a scalable foundation (types, global state, routing) with **no** visible UI change.

### Task 2A – Agent_Alpha: Shared Types & Storage Helpers

1. Draft domain types in `lib/types/*.ts`.
2. Implement versioned LocalStorage wrapper with JSON-schema validation.

### Task 2B – Agent_Alpha: React Contexts & Hooks

1. Implement `SpacesProvider` and `NotebookProvider` contexts.
2. Expose hooks `useSpaces` and `useJournal` that guard against null context.

### Task 2C – Agent_Alpha: Next.js App-Router Skeleton

1. Initialise `/app` directory and create root `layout.tsx`.
2. Add `_providers.tsx` composition wrapper.
3. Upgrade to Tailwind v4 **add-only**; no existing classes may be removed.

---

## Phase 3: Spaces Feature MVP – Agent_Beta

Objective: Deliver functional chat “Spaces” with persistence (**no new styling**).

### Task 3A – Agent_Beta: Spaces CRUD & Persistence

1. Define `Space` data model.
2. Implement CRUD operations in context.
3. Add auto-name algorithm for untitled spaces.

### Task 3B – Agent_Beta: Sidebar List UI

1. Build `SidebarSpaces.tsx` reusing existing list styles.
2. Add Next.js route `/app/space/[id]/page.tsx`.

### Task 3C – Agent_Beta: Message Skeleton & Export Placeholder

1. Render message history skeleton in `components/SpaceChat.tsx`.
2. Implement typing animation placeholder.
3. Stub “Export chat” feature for later expansion.

---

## Phase 4: Journal Feature MVP – Agent_Gamma

Objective: Provide rich personal Journal with block editor while upholding **Global-Style-Guard**.

### Task 4A – Agent_Gamma: Journal CRUD & Persistence

1. Define `JournalEntry` and `Notebook` models.
2. Implement CRUD logic in `useJournal` hook.

### Task 4B – Agent_Gamma: Tiptap Editor + Blocks

1. Integrate Tiptap editor.
2. Add custom blocks (todo, code).
3. Persist content JSON; ensure markdown export parity.

### Task 4C – Agent_Gamma: Sidebar List, Sort & Search

1. Build list component reusing existing styles.
2. Implement sort options (date, title).
3. Add local search filter (<100 ms response).

---

## Phase 5: Motion Implementation (Add-only) – Agent_Delta

Objective: Introduce Slide & Settle motion presets **without** altering existing styles.

### Task 5A – Agent_Delta: `lib/motion-config.ts`

1. Define Framer-Motion variants.
2. Export helper utilities with snapshot unit tests.

### Task 5B – Agent_Delta: Apply Animations

1. Wrap sidebars & modals with `motion.div`.
2. Honour prefers-reduced-motion user setting.

### Task 5C – Agent_Delta: `usePrefersReducedMotion` Hook

1. Implement hook to detect media-query.
2. Disable animations when preference is true.

---

## Phase 6: Global Search & Integration – Agent_Epsilon

Objective: Provide seamless search across Spaces & Journal with cross-linking support.

### Task 6A – Agent_Epsilon: Unified Sidebar Search

1. Index Spaces & Journal entities.
2. Build `GlobalSearch.tsx` component reusing existing input styles.

### Task 6B – Agent_Epsilon: Cross-linking Logic

1. Allow chat message deep-link to journal entry.
2. Permit journal entry reference to open a chat space.

### Task 6C – Agent_Epsilon: Premium-limit Gating

1. Add limit context with configurable thresholds.
2. Show modal using existing modal component when limit hit.

---

## Phase 7: Performance, QA & Deployment – Agent_Zeta

Objective: Final polish, accessibility, test coverage and Vercel launch.

### Task 7A – Agent_Zeta: Performance & A11y Passes

1. Run Lighthouse CI and address performance bottlenecks (target LCP < 2.5 s).
2. Execute Axe accessibility audit; fix critical issues.

### Task 7B – Agent_Zeta: Automated Tests

1. Reach ≥85 % unit-test coverage.
2. Add basic Playwright e2e suite; ensure CI green across all suites.

### Task 7C – Agent_Zeta: Vercel Deployment & Docs

1. Configure `vercel.json`.
2. Draft `docs/deployment.md`.
3. Tag release `v1.0.0` and verify production smoke test.

---

## Memory Bank Structure

The project’s complexity (eight phases, 24 distinct tasks, multiple specialised agents) warrants a **multi-file Memory Bank directory**. The agreed structure is:

```
Memory/
  Phase_0_Repository_Audit_Cleanup/
    Task_0A_Execute_o3_clean_Checklist_Log.md
    Task_0B_Purge_Dead_Code_Log.md
    Task_0C_Add_Baseline_Tooling_Log.md
  Phase_1_Systemwide_Rename_Refactor/
    Task_1A_Apply_Rename_Mappings_Log.md
    Task_1B_Codemod_CI_Guard_Log.md
    Task_1C_Update_Docs_Storybook_Log.md
  … (one sub-directory per phase, one log file per task)
```

Each log file starts with the standard header defined in `prompts/02_Utility_Prompts_And_Format_Definitions/Memory_Bank_Log_Format.md`.

---

## Timeline & Milestones

• **Weeks 1–2**  Phase 0 → Phase 1  
• **Weeks 3–4**  Phase 2  
• **Weeks 5–6**  Phase 3  
• **Weeks 7–8**  Phase 4  
• **Week 9**    Phase 5  
• **Week 10**   Phase 6  
• **Week 11**   Phase 7 & Final QA

Slack channels: `#ob-alpha`, `#ob-beta`, …  
Daily stand-ups via async thread; weekly demo every Friday.

---

## Risks & Mitigations

1. **Rename fallout** → codemod + CI guard (Phase 1B).  
2. **Style regressions** → Global-Style-Guard + lint rule.  
3. **LocalStorage data-loss** → versioned migrations, Jest coverage.  
4. **Motion perf overhead** → prefers-reduced-motion guard.

---

## Note on Handover Protocol

For long-running projects or situations requiring context transfer (e.g., exceeding LLM context limits, changing specialised agents), the APM Handover Protocol should be initiated. This ensures smooth transitions and preserves project knowledge. Detailed procedures are outlined in the framework guide:

`prompts/01_Manager_Agent_Core_Guides/05_Handover_Protocol_Guide.md`

The current Manager Agent or the User should initiate this protocol as needed.
