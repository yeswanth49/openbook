# Spaces

## Overview
Spaces in OpenBook are persistent conversation areas where users can interact with AI assistants. Each space maintains its own conversation history, can be automatically or manually named, and supports management features such as pinning, sorting, archiving, and exporting.

## Goals
- Provide persistent, organized conversation environments.
- Enable automatic and manual naming based on conversation content.
- Support conversation metadata tracking and management.
- Facilitate efficient navigation and organization through pinning, sorting, and archiving.
- Ensure smooth, minimalistic UI with interactive loading states and animations.

## User Experience
- Clean, minimalistic sidebar listing spaces.
- Buttons for creating, renaming, pinning, archiving, and deleting spaces.
- Visual feedback during message generation and name generation.
- Hover states revealing metadata: message count, last activity, sentiment icon.
- Loading skeletons and typing animations for AI responses.
- Consistent styling with journal entries for a unified look.

## Technical Specifications
- Data model:
  - `Space` (id, name, messages[], archived, createdAt, updatedAt, metadata).
  - `ChatMessage` (id, role, content, timestamp).
- State management:
  - React Context (`SpacesContext`) providing CRUD operations and UI state.
  - LocalStorage persistence with `STORAGE_KEY = 'openbook_spaces_data'`.
- Name generation:
  - `generateConversationName` and `shouldUpdateConversationName` logic.
  - Automatic renaming with simulated delay and loading states.
  - Manual override with reset to auto-naming.
- Search:
  - `searchSpaces` function filtering by name and message content.
- UI components:
  - `app/space/[spaceId]/page.tsx`
  - `sidebar.tsx`
  - `conversation-metadata.tsx`
  - `name-loading.tsx`
  - `message-loading.tsx`
- Routing:
  - App Router dynamic route `app/space/[spaceId]/page.tsx` for switching spaces.
- Persistence:
  - LocalStorage synchronization in effect hooks.

## Implementation Plan
- Phase 1: Core Context and Data Model (1 week)
  - Implement `SpacesContext` with CRUD, LocalStorage persistence.
  - Define data types `Space` and `ChatMessage`.
  - Initialize default space on first load.
- Phase 2: UI Components (1 week)
  - Build sidebar listing spaces.
  - Create components: `Sidebar`, `SpaceItem`, `NameLoading`, `MessageLoading`.
  - Integrate routing for space switching.
- Phase 3: Automatic Naming and Loading States (1 week)
  - Integrate `generateConversationName` logic.
  - Add simulated delay, loading skeletons, and animations.
- Phase 4: Metadata and Management (1 week)
  - Add pinning, archiving, exporting functions.
  - Implement search functionality in UI.
- Phase 5: Styling and UX Refinement (1 week)
  - Polish animations with Framer Motion.
  - Ensure mobile responsiveness and accessibility.
  - Sync styles with Journal entries for consistency.

## Relevant Files
- `contexts/SpacesContext.tsx`
- `app/space/[spaceId]/page.tsx`
- `components/sidebar.tsx`
- `components/conversation-metadata.tsx`
- `components/name-loading.tsx`
- `components/message-loading.tsx`
- `lib/conversation-utils.ts`

## Integration Points
- Journal feature: consistent hover animations for timeline items.
- Chat interface: allow linking between chat messages and spaces.
- Export: integration with export utilities.
- Search: global search across spaces and journal entries.

## Open Questions
- Should spaces support multi-user collaboration?
- How to handle large message histories performance?
- Persist spaces to backend for cross-device sync?
- What additional metadata to track (sentiment, topics)?

## References
- `docs/overview/spaces.md`
- `contexts/SpacesContext.tsx`
- `lib/conversation-utils.ts` 