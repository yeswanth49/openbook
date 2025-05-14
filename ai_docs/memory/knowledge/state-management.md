---
id: "knowledge-state-management-001"
type: "knowledge"
source: "user"
confidence: 0.95
created: "2023-10-15T12:45:00Z"
updated: "2023-10-15T12:45:00Z"
accessed: "2023-10-15T12:45:00Z"
contexts: ["state", "react", "context", "persistence"]
---

# State Management Patterns

Established patterns for managing state across the application.

## Core Patterns

- Use React Context + Hooks for feature-specific state management
- Conversation metadata is stored in context and persisted to localStorage
- Loading states should be tracked in the relevant component's state
- Use optimistic UI updates with rollback capability when appropriate

## Context Organization

- Create separate contexts for distinct features (e.g., `SpacesContext`, `JournalContext`)
- Provide custom hooks for accessing context values (e.g., `useSpaces()`, `useJournal()`)
- Keep context providers as high in the component tree as needed, but no higher
- Memoize context values to prevent unnecessary re-renders

## Persistence Strategy

- Use localStorage for offline-first functionality
- Implement effect hooks that sync state to/from storage
- Handle edge cases like storage limits and parsing errors
- Batch localStorage updates to improve performance

## Loading State Management

- Track loading states within component state, not in global context
- Use state machines or dedicated state variables for complex loading scenarios
- Implement proper error handling and fallback UIs
- Ensure loading states are updated appropriately when operations complete

## Examples

```typescript
// Context example
const SpacesContext = createContext<SpacesContextType | undefined>(undefined);

// Custom hook
export const useSpaces = () => {
  const context = useContext(SpacesContext);
  if (context === undefined) {
    throw new Error('useSpaces must be used within a SpacesProvider');
  }
  return context;
};

// Local storage persistence
useEffect(() => {
  if (spaces.length) {
    localStorage.setItem('openbook_spaces_data', JSON.stringify({ spaces, currentSpaceId }));
  }
}, [spaces, currentSpaceId]);
``` 