# Spaces and Journal Architecture

## Overview
The Spaces and Journal Architecture outlines the design and implementation approaches for the two core features in OpenBook: conversation management (Spaces) and personal knowledge management (Journal). It describes how both features integrate within the application's modular architecture, share common patterns, and manage data flow.

## Architecture Overview
- **App Router**: Next.js App Router structure with dynamic routes for spaces and journal entries.
- **UI Layer**: React Server and Client Components styled with Tailwind CSS v4.
- **State Management**: React Context and custom hooks (`SpacesContext`, `JournalContext`).
- **Persistence**: LocalStorage-based persistence for offline-first support.
- **Data Flow**: Unidirectional flow: contexts → components → user actions → contexts.
- **Shared Patterns**: Hover animations, loading skeletons, block-based editing, search filtering.

## Spaces Workflow Architecture
- **Context**: `SpacesContext` providing `spaces`, `currentSpaceId`, and actions (create, delete, archive, rename, switch, addMessage, export, search).
- **Routing**: `app/space/[spaceId]/page.tsx` leverages `useSpaces().switchSpace` to load the selected space.
- **UI Components**:
  - **Sidebar**: Lists spaces with name, metadata, and action controls.
  - **NameLoading**: Loading state for automatic naming.
  - **MessageLoading**: Skeletons and typing animations for AI responses.
- **Auto-naming**: Utilizes `generateConversationName` and `shouldUpdateConversationName` with throttled updates.

## Journal Workflow Architecture
- **Context**: `JournalContext` exposing `entries` and actions (createEntry, updateEntry, deleteEntry, searchEntries).
- **Persistence**: LocalStorage under `openbook_journal_data` with effect hooks.
- **Editor**: `RichEditor` based on Tiptap providing block-based content editing with extensions.
- **UI Components**:
  - **JournalSidebar**: Entry list with hover interactions.
  - **JournalEditor**: Main editing interface.
  - **Block Components**: TextBlock, CodeBlock, MediaBlock, TableNode, LaTeXNode.

## Data Flow
1. **Initialization**: Contexts load state from LocalStorage on app mount.
2. **User Actions**: Components dispatch context actions (e.g., createSpace, createEntry).
3. **State Updates**: Contexts update state and persist changes.
4. **Re-render**: Components subscribe to context values and update the UI.
5. **Side-effects**: Auto-naming, search, and persistence are handled within context hooks.

## Security Considerations
- **Local Data**: All data stored locally; initial features require no server-side storage.
- **Sanitization**: Rely on Tiptap and Next.js validation for content sanitization.
- **Future Sync**: Cloud synchronization should enforce encryption and secure authentication.

## Performance Considerations
- **Context Batching**: Use effect dependencies to batch LocalStorage writes.
- **Lazy Loading**: Dynamically load Tiptap extensions and large components.
- **Memoization**: Memoize context values and heavy computations (`searchEntries`, `generateConversationName`).
- **Throttling**: Prevent frequent auto-naming updates.
- **Search Optimization**: Use in-memory filtering; consider IndexedDB for scalability.

## Implementation Plan
- **Phase 1**: Define types and contexts (1 week).
- **Phase 2**: Implement UI layers (2 weeks).
- **Phase 3**: Integrate auto-naming, loading states, and animations (2 weeks).
- **Phase 4**: Develop search, filter, and organization features (2 weeks).
- **Phase 5**: Refine UX, performance, and accessibility (1 week).
- **Phase 6**: Prepare for cloud sync and collaboration (2 weeks).

## Relevant Files
- `contexts/SpacesContext.tsx`, `contexts/JournalContext.tsx`
- `app/space/[spaceId]/page.tsx`, `app/journal/[entryId]/*`
- `lib/conversation-utils.ts`, `lib/journal/search.ts`, `lib/journal/storage.ts`
- `components/sidebar.tsx`, `components/journal/JournalSidebar.tsx`
- `components/name-loading.tsx`, `components/message-loading.tsx`
- `components/journal/JournalEditor.tsx`, `components/journal/blocks/*`

## Integration Points
- **Shared Animations**: Hover and loading animations reused across both features.
- **Global Search**: Combined search across spaces and journal entries.
- **AI Integration**: Journal entries link to AI chat for content enhancement.
- **Export/Import**: Unified export functionality for conversations and entries.

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