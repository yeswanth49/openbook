# Implementation Plan: Notebook, Journal, and Space Limits

This document outlines the step-by-step plan to implement usage limits for free users in OpenBook.

## Overview

Free users will be limited to:
- 3 notebooks maximum
- 3 journals per notebook maximum
- 3 spaces per notebook maximum

Premium users (identified by a `premium` boolean flag) will have no limitations.

## Implementation Steps

### 1. Create UserContext for Premium Status

1. Create a new context to manage user-related state including premium status:
```tsx
// contexts/UserContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface UserContextType {
  premium: boolean;
  setPremium: (value: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);
const STORAGE_KEY = 'openbook_user_data';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [premium, setPremium] = useState<boolean>(false);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as { premium: boolean };
        setPremium(parsed.premium);
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ premium }));
  }, [premium]);

  return (
    <UserContext.Provider value={{
      premium,
      setPremium
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
```

2. Add UserProvider to the providers chain in `app/providers.tsx`:
```tsx
import { UserProvider } from "@/contexts/UserContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <UserProvider>
          <StudyModeProvider>
            {children}
          </StudyModeProvider>
        </UserProvider>
      </ThemeProvider>
    </PostHogProvider>
  )
}
```

### 2. Modify NotebookContext to Enforce Limits

1. Update `NotebookContext.tsx` to check limits before creating notebooks:
```tsx
import { useUser } from '@/contexts/UserContext';

export const NotebookProvider = ({ children }: { children: ReactNode }) => {
  // ... existing code

  const { premium } = useUser();
  
  const createNotebook = (name: string): string => {
    // Check if limit is reached for free users
    if (!premium && notebooks.length >= 3) {
      throw new Error('Free users can only create up to 3 notebooks. Upgrade to premium for unlimited notebooks.');
    }
    
    const newNotebook: Notebook = {
      // ... existing notebook creation code
    };
    
    setNotebooks(prev => [...prev, newNotebook]);
    setCurrentNotebookId(newNotebook.id);
    return newNotebook.id;
  };
  
  // ... rest of the existing code
};
```

### 3. Modify Journal Functionality to Enforce Limits

1. Update `hooks/useJournal.ts` to check limits before creating journals:
```tsx
import { useUser } from '@/contexts/UserContext';

export function useJournal() {
  // ... existing code
  
  const { premium } = useUser();
  
  const createEntry = useCallback((title: string, notebook_id?: string) => {
    if (!premium && notebook_id) {
      // Count existing entries for this notebook
      const notebookEntries = entries.filter(entry => entry.notebook_id === notebook_id);
      if (notebookEntries.length >= 3) {
        throw new Error('Free users can only create up to 3 journals per notebook. Upgrade to premium for unlimited journals.');
      }
    }
    
    const now = new Date().toISOString();
    // ... rest of the existing creation code
  }, [entries, premium]);
  
  // ... rest of the existing code
}
```

### 4. Modify Spaces Functionality to Enforce Limits

1. Update `contexts/SpacesContext.tsx` to check limits before creating spaces:
```tsx
import { useUser } from '@/contexts/UserContext';

export const SpacesProvider = ({ children }: { children: ReactNode }) => {
  // ... existing code
  
  const { premium } = useUser();
  
  const createSpace = (name: string, notebook_id?: string) => {
    if (!premium && notebook_id) {
      // Count existing spaces for this notebook
      const notebookSpaces = spaces.filter(space => space.notebook_id === notebook_id);
      if (notebookSpaces.length >= 3) {
        throw new Error('Free users can only create up to 3 spaces per notebook. Upgrade to premium for unlimited spaces.');
      }
    }
    
    const newSpace: Space = {
      // ... existing space creation code
    };
    
    setSpaces(prev => [...prev, newSpace]);
    setCurrentSpaceId(newSpace.id);
    return newSpace.id;
  };
  
  // ... rest of the existing code
};
```

### 5. Update UI Components to Handle Limit Errors

1. Modify `components/sidebar.tsx` to handle errors when creating notebooks:
```tsx
const handleCreateNotebook = () => {
  try {
    const name = prompt('Enter notebook name:');
    if (name) {
      createNotebook(name.trim());
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
      // Optionally show a premium upgrade modal here
    }
  }
};
```

2. Modify `components/SidebarNotebook.tsx` to handle errors when creating journals and spaces:
```tsx
const handleCreateJournal = () => {
  try {
    const defaultTitle = `Journal - ${new Date().toLocaleDateString()}`;
    const newEntry = createEntry(defaultTitle, notebook.id);
    setEditingJournalId(newEntry.id);
    setEditingJournalTitle(defaultTitle);
    if (!journalsOpen) setJournalsOpen(true);
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
      // Optionally show a premium upgrade modal here
    }
  }
};

const handleCreateSpace = () => {
  try {
    const defaultTitle = `Untitled`;
    const newSpaceId = createSpace(defaultTitle, notebook.id);
    setEditingSpaceId(newSpaceId);
    setEditingSpaceName(defaultTitle);
    if (!spacesOpen) setSpacesOpen(true);
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
      // Optionally show a premium upgrade modal here
    }
  }
};
```

### 6. Add Limit Status Indicators in UI (Optional Enhancement)

1. Create a component to show limits in the sidebar:
```tsx
// components/LimitIndicator.tsx
import { useUser } from '@/contexts/UserContext';
import { useNotebooks } from '@/contexts/NotebookContext';
import { useJournal } from '@/hooks/useJournal';
import { useSpaces } from '@/contexts/SpacesContext';

export const LimitIndicator = ({ notebookId }: { notebookId: string }) => {
  const { premium } = useUser();
  const { notebooks } = useNotebooks();
  const { entries } = useJournal();
  const { spaces } = useSpaces();
  
  if (premium) return null; // Don't show for premium users
  
  const notebookEntries = entries.filter(entry => entry.notebook_id === notebookId);
  const notebookSpaces = spaces.filter(space => space.notebook_id === notebookId);
  
  return (
    <div className="text-xs text-neutral-500 mt-1 px-4">
      <div>Notebooks: {notebooks.length}/3</div>
      <div>Journals: {notebookEntries.length}/3</div>
      <div>Spaces: {notebookSpaces.length}/3</div>
    </div>
  );
};
```

2. Add the component to the SidebarNotebook component:
```tsx
// Inside SidebarNotebook.tsx render
return (
  <div>
    {/* Existing notebook header */}
    
    {/* Journal and space sections */}
    
    {/* Add limit indicator */}
    <LimitIndicator notebookId={notebook.id} />
  </div>
);
```

### 7. Testing Plan

1. Test notebook creation:
   - Create 3 notebooks as a free user
   - Verify error when attempting to create a 4th notebook
   - Switch to premium user and verify unlimited notebooks can be created

2. Test journal creation:
   - Create 3 journals in a notebook as a free user
   - Verify error when attempting to create a 4th journal in that notebook
   - Verify journals can still be created in other notebooks (up to their limits)
   - Switch to premium user and verify unlimited journals can be created

3. Test spaces creation:
   - Create 3 spaces in a notebook as a free user
   - Verify error when attempting to create a 4th space in that notebook
   - Verify spaces can still be created in other notebooks (up to their limits)
   - Switch to premium user and verify unlimited spaces can be created

4. Test persistence:
   - Refresh the page and verify limits are still enforced
   - Test that limit status indicators update correctly

## Future Premium Features (For Reference)

Beyond these current limits, potential premium features could include:
- Advanced AI capabilities
- Extended memory for AI context
- Cloud synchronization across devices
- Export and backup options
- Custom themes and styling
- Additional study mode features

## Implementation Notes

- All error messages should be user-friendly and suggest upgrading to premium
- Consider adding a premium upgrade modal/button when users hit limits
- The current implementation uses a simple boolean flag for premium status
- In a production environment, this would be connected to a proper auth and payment system 