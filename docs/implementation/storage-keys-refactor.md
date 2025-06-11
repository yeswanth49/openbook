# Storage Keys Refactoring

## Overview

Refactored localStorage key management to use a centralized module instead of hard-coded arrays, addressing CodeRabbit's feedback about maintainability and data leak prevention.

## Problem

The original clear storage implementation had a hard-coded array of localStorage keys that would drift over time:

```typescript
// ❌ Before: Hard-coded, prone to drift
const keysToRemove = [
    'openbook_spaces_data',
    'openbook_notebooks_data',
    // ... more keys
];
keysToRemove.forEach((k) => localStorage.removeItem(k));
```

**Issues:**
- Any new feature adding localStorage must remember to update this array
- Silent data leaks if keys are forgotten
- Mixed naming conventions (camelCase vs snake_case)
- No single source of truth for storage keys

## Solution

Created a centralized storage keys module (`lib/storageKeys.ts`) that serves as the single source of truth:

```typescript
// ✅ After: Centralized, maintainable
export const OPENBOOK_STORAGE_KEYS: readonly string[] = [
  SPACES_DATA_KEY,
  NOTEBOOKS_DATA_KEY,
  // ... all keys defined as constants
] as const;

// Usage
import { clearAllStorageData } from '@/lib/storageKeys';
clearAllStorageData(true);
```

## Key Features

### 1. Centralized Key Definitions
```typescript
// All keys defined as named exports
export const SPACES_DATA_KEY = 'openbook_spaces_data';
export const JOURNAL_ENTRIES_KEY = 'journalEntries'; // Legacy, noted for migration
```

### 2. Categorized Storage
```typescript
export const STORAGE_KEY_CATEGORIES = {
  DATA: {
    keys: [SPACES_DATA_KEY, NOTEBOOKS_DATA_KEY, ...],
    description: 'Core application data'
  },
  PREFERENCES: {
    keys: [SIDEBAR_STATE_KEY, ANIMATIONS_PREFERENCE_KEY, ...],
    description: 'User preferences and UI settings'
  }
} as const;
```

### 3. Flexible Clear Function
```typescript
// Clear everything (default)
clearAllStorageData(true);

// Clear only data, preserve preferences
clearAllStorageData(false);
```

### 4. Type Safety
- All exports are strongly typed
- Readonly arrays prevent accidental mutations
- TypeScript ensures import correctness

## Files Updated

### New Files
- `lib/storageKeys.ts` - Centralized storage key definitions

### Updated Files
- `components/layout/sidebar.tsx` - Uses centralized clear function
- `contexts/SpacesContext.tsx` - Imports SPACES_DATA_KEY
- `contexts/NotebookContext.tsx` - Imports NOTEBOOKS_DATA_KEY  
- `contexts/StudyModeContext.tsx` - Imports STUDY_MODES_KEY
- `contexts/UserContext.tsx` - Imports USER_DATA_KEY
- `contexts/MotionContext.tsx` - Imports ANIMATIONS_PREFERENCE_KEY
- `hooks/useJournal.ts` - Imports JOURNAL_ENTRIES_KEY
- `lib/utils.ts` - Imports USER_ID_KEY
- `app/(core)/ChatClient.tsx` - Imports SIDEBAR_STATE_KEY

## Benefits

1. **Maintainability**: New features just add keys to one file
2. **Documentation**: Keys are self-documenting with TypeScript
3. **Testing**: Easy to verify all keys are included
4. **Consistency**: Centralized naming convention enforcement
5. **Type Safety**: Compiler catches import/usage errors
6. **Flexibility**: Can clear data vs preferences selectively

## Future Improvements

1. **Naming Consistency**: Migrate `journalEntries` to `openbook_journal_entries`
2. **Testing**: Add unit tests when Jest is configured
3. **Validation**: Runtime validation of key format/conventions
4. **Migration**: Helper functions for localStorage key migrations

## Testing Recommendations

The module includes comprehensive testing recommendations:

- Verify all individual keys are included in OPENBOOK_STORAGE_KEYS
- Ensure clearAllStorageData removes all documented keys  
- Test that non-OpenBook keys are preserved during clearing
- Validate no duplicate keys exist in the arrays

## Usage Guidelines

### Adding New Storage

1. Define the key as a named export:
```typescript
export const MY_NEW_KEY = 'openbook_my_feature_data';
```

2. Add it to the main array:
```typescript
export const OPENBOOK_STORAGE_KEYS: readonly string[] = [
  // ... existing keys
  MY_NEW_KEY,
] as const;
```

3. Add to appropriate category:
```typescript
export const STORAGE_KEY_CATEGORIES = {
  DATA: {
    keys: [..., MY_NEW_KEY], // if it's core data
    // or
  },
  PREFERENCES: {
    keys: [..., MY_NEW_KEY], // if it's a preference
  }
}
```

4. Import and use in your component:
```typescript
import { MY_NEW_KEY } from '@/lib/storageKeys';
localStorage.setItem(MY_NEW_KEY, data);
```

This ensures your new storage will be properly cleared and maintained. 