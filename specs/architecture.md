# Spaces and Journal Architecture

## Overview

The Spaces and Journal Architecture outlines the design and implementation approaches for the two core features in OpenBook: conversation management (**Spaces**) and personal knowledge management (**Journal**). It describes how both features integrate within the application's modular architecture, share common patterns, and manage data flow.

## Architecture Overview

- **App Router** – Next.js App Router structure with dynamic routes for spaces and journal entries.
- **UI Layer** – React Server & Client Components styled with Tailwind CSS v4.
- **State Management** – React Contexts & custom hooks (`SpacesContext`, `NotebookContext`, `useJournal`).
- **Persistence** – LocalStorage-based persistence for offline-first support.
- **Data Flow** – Unidirectional flow: contexts/hooks → components → user actions → contexts/hooks.
- **Shared Patterns** – Slide & Settle motion presets, loading skeletons, block-based editing, search filtering.

## Spaces Workflow Architecture

- **Context** – `contexts/SpacesContext.tsx` providing `spaces`, `currentSpaceId`, and actions (`createSpace`, `deleteSpace`, `archiveSpace`, `renameSpace`, `switchSpace`, `addMessage`, `export`, `togglePinSpace`, `resetToAutoNaming`, `searchSpaces`).
- **Routing** – `app/space/[spaceId]/page.tsx` leverages `useSpaces().switchSpace` to load the selected space.
- **UI Components**
  - **Sidebar** (`components/sidebar.tsx`) – Lists spaces & journals with metadata and controls.
  - **NameLoading** (`components/name-loading.tsx`) – Loading state for automatic naming.
  - **MessageLoading** (`components/message-loading.tsx`) – Skeletons and typing animations for AI responses.
- **Auto-naming** – Utilises `lib/conversation-utils.ts` (`generateConversationName`, `shouldUpdateConversationName`) with throttled updates & user override.

## Journal Workflow Architecture

- **State Hook** – `hooks/useJournal.ts` exposing `entries` and CRUD actions (`createEntry`, `updateEntry`, `deleteEntry`, `searchEntries`).
- **Notebook Context** – `contexts/NotebookContext.tsx` groups journal entries and exposes notebook-level operations.
- **Persistence** – LocalStorage key `journalEntries` with batched updates inside `useEffect` hooks.
- **Editor** – Tiptap-powered editor in `components/journal/editor`. Custom blocks such as `sortable-block`, `latex-renderer`, `file-upload-zone`, etc.
- **UI Components**
  - **JournalSidebar** (`components/journal/JournalSidebar.tsx`) – Entry list with search and sort.
  - **Editor Surface** (`components/journal/editor/editor.tsx`) – Main editing interface.
  - **Block Components** – `sortable-block.tsx`, `latex-renderer.tsx`, `table-menu.tsx`, etc.

## Data Flow

1. **Initialization** – Contexts/hooks load state from LocalStorage on app mount.
2. **User Actions** – Components dispatch context/hook actions (e.g. `createSpace`, `createEntry`).
3. **State Updates** – Contexts/hooks update state and persist changes.
4. **Re-render** – Components subscribe to context/hook values and update the UI.
5. **Side-effects** – Auto-naming, search, and persistence handled within the respective hooks.

## Security Considerations

- All data currently stored locally; no backend required.
- Sanitisation delegated to Tiptap & Next.js safeguards.
- Future cloud-sync must introduce encryption & auth.

## Performance Considerations

- **Context batching** – Batch LocalStorage writes where possible.
- **Lazy loading** – Dynamically load heavy components such as Tiptap extensions.
- **Memoisation** – Memoise expensive computations (`searchEntries`, name generation).
- **Throttling** – Debounce auto-naming to avoid excessive updates.
- **Search optimisation** – In-memory filtering; investigate IndexedDB for large datasets.

## Implementation Plan

| Phase | Focus                                              | Duration |
| ----- | -------------------------------------------------- | -------- |
| 1     | Define types & contexts/hooks                      | 1 week   |
| 2     | Implement UI layers                                | 2 weeks  |
| 3     | Integrate auto-naming, loading states & animations | 2 weeks  |
| 4     | Develop search, filter & organisation features     | 2 weeks  |
| 5     | Refine UX, performance & accessibility             | 1 week   |
| 6     | Prepare for cloud sync & collaboration             | 2 weeks  |

## Relevant Files

- `contexts/SpacesContext.tsx`
- `contexts/NotebookContext.tsx`
- `hooks/useJournal.ts`
- `app/space/[spaceId]/page.tsx`
- `app/journal/[id]/page.tsx`
- `lib/conversation-utils.ts`
- `lib/motion-config.ts`
- `components/sidebar.tsx`
- `components/name-loading.tsx`, `components/message-loading.tsx`
- `components/journal/JournalSidebar.tsx`, `components/journal/editor/*`

## Integration Points

- **Shared Animations** – Slide & Settle motion presets from `lib/motion-config.ts` reused across features.
- **Global Search** – Combined search across spaces & journal entries surfaced in the sidebar.
- **AI Integration** – Journal entries can link to AI chat for content enhancement (future work).
- **Export / Import** – Unified export utilities for conversations and journal content (future work).

## Open Questions

- Cloud sync strategy and data privacy model.
- Multi-user collaboration support.
- Scalability for extensive message and entry volumes.
- Offline-first conflict resolution.

## References

- `docs/overview/spaces.md`
- `docs/overview/journal_feature.md`
- Next.js App Router docs
- Tailwind CSS v4 docs
