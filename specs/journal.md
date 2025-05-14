# Journal

## Overview
The Journal feature in OpenBook allows users to create and maintain personal entries with rich content in a focused writing environment. It provides structured organization, search capabilities, and seamless integration with other features.

## Goals
- Provide a rich, block-based personal note-taking environment.
- Support structured content blocks and advanced formatting.
- Enable efficient entry management: create, edit, delete, organize.
- Integrate full-text search and flexible filtering.
- Ensure consistent UI styling and interactions with other features.

## User Experience
- Sidebar with entry list, new entry button, search, and sorting controls.
- Main editor area with title editing and block-based content interface.
- Hover interactions revealing timestamps, edit, and delete actions.
- Mobile-responsive design with collapsible sidebar.
- Smooth animations and visual feedback for interactions.

## Technical Specifications
- Data Model:
  - `JournalEntry` (id, title, date, tags, blocks, createdAt, updatedAt, isFavorite, collectionIds, metadata).
  - `ContentBlock` (id, type, content, metadata).
  - `JournalCollection` and `JournalTag` types for grouping and tagging entries.
- State Management:
  - `JournalContext` and `useJournal` hook with CRUD operations.
  - LocalStorage persistence using key `openbook_journal_data`.
- Editor:
  - `RichEditor` component built on Tiptap for block-based editing.
  - Extensions for text, headings, lists, code, LaTeX, media, and tables.
- Search and Filter:
  - `searchEntries` algorithm filtering title and block content.
  - UI components for search input and filter panel.
- UI Components:
  - `components/journal/JournalLayout.tsx`
  - `components/journal/JournalSidebar.tsx`
  - `components/journal/JournalEditor.tsx`
  - `components/journal/blocks/*` for individual block types.
- Integration:
  - Linking with AI chat via cross-feature navigation.
  - Shared styling and animation patterns with Spaces.

## Implementation Plan
- Phase 1: Core Structure Setup (1 week)
  - Define `JournalEntry` and `ContentBlock` types.
  - Implement `JournalContext` with create, update, delete functions.
  - Set up LocalStorage persistence and hydration.
- Phase 2: UI Development (2 weeks)
  - Build `JournalSidebar` with entry list, search, and sorting controls.
  - Create `JournalEditor` integrating `RichEditor`.
- Phase 3: Search and Organization (1 week)
  - Implement full-text search and filtering UI.
  - Add sorting by date and title criteria.
- Phase 4: Rich Content Blocks (2 weeks)
  - Integrate block extensions for media, code, LaTeX, and tables.
  - Implement block manipulation tools (reordering, nesting).
- Phase 5: UX Refinement (1 week)
  - Add animations for hover and focus states.
  - Ensure mobile responsiveness and accessibility.
- Phase 6: Advanced Features (2 weeks)
  - AI-assisted writing and summarization.
  - Calendar view and collections management.
  - Export/import functionality.

## Relevant Files
- `contexts/JournalContext.tsx`
- `hooks/useJournal.ts`
- `lib/journal/storage.ts`
- `lib/journal/search.ts`
- `components/journal/JournalLayout.tsx`
- `components/journal/JournalSidebar.tsx`
- `components/journal/JournalEditor.tsx`
- `components/journal/blocks/*`

## Integration Points
- Spaces feature for unified hover animations and interactions.
- AI chat integration for content assistance and cross-linking.
- Global search across journal entries and spaces.
- Export/import utilities for data portability.

## Open Questions
- How to implement cloud synchronization and conflict resolution?
- Should journal entries support end-to-end encryption for privacy?
- Design details for calendar view interface.
- Offline-first support and data migration strategies.

## References
- `docs/overview/journal_feature.md`
- `specs/spaces.md`
- `components/journal/*` 