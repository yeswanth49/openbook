"use client";

import * as React from 'react';
import type { ReactNode } from 'react';
import { generateConversationName, shouldUpdateConversationName } from '@/lib/conversation-utils';
import { useUser } from './UserContext';
import { useLimitModal } from './LimitModalContext';

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
};

export type Space = {
  id: string;
  name: string;
  messages: ChatMessage[];
  archived: boolean;
  createdAt: number;
  updatedAt: number;
  notebook_id?: string;
  metadata?: {
    manuallyRenamed: boolean;
    pinned?: boolean;
    lastAutoNameUpdate?: number;
    isGeneratingName?: boolean;
  };
  studyMode?: {
    framework: 'memory-palace' | 'feynman-technique' | 'spaced-repetition' | 'extreme-mode' | null;
    settings?: Record<string, any>;
    activatedAt?: number;
  };
};

export interface SpacesContextType {
  spaces: Space[];
  currentSpaceId: string;
  currentSpace?: Space;
  createSpace: (name: string, notebook_id?: string) => string | null;
  deleteSpace: (id: string) => void;
  archiveSpace: (id: string) => void;
  renameSpace: (id: string, name: string, isManualRename?: boolean) => void;
  switchSpace: (id: string) => void;
  addMessage: (message: ChatMessage) => void;
  exportSpace: (id: string) => void;
  togglePinSpace: (id: string) => void;
  resetToAutoNaming: (id: string) => void;
  searchSpaces: (query: string) => Array<{
    id: string;
    name: string;
    match: {
      text: string;
      context: 'message' | 'name';
      timestamp?: number;
    };
  }>;
}

const SpacesContext = React.createContext<SpacesContextType | undefined>(undefined);
const STORAGE_KEY = 'openbook_spaces_data';

export const SpacesProvider = ({ children }: { children: ReactNode }) => {
  const [spaces, setSpaces] = React.useState<Space[]>([]);
  const [currentSpaceId, setCurrentSpaceId] = React.useState<string>('');
  const { premium } = useUser();
  const { showLimitModal } = useLimitModal();
  const pendingSpaceCreation = React.useRef<string | null>(null);

  // Load from localStorage
  React.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as { spaces: Space[]; currentSpaceId: string };
        
        // Add metadata field to any spaces that don't have it
        const spacesWithMetadata = parsed.spaces.map(space => ({
          ...space,
          metadata: space.metadata || { 
            manuallyRenamed: false,
            isGeneratingName: false
          }
        }));
        
        setSpaces(spacesWithMetadata);
        setCurrentSpaceId(parsed.currentSpaceId);
        return;
      } catch {
        // ignore parse errors
      }
    }
    // initialize default space
    const defaultSpace: Space = {
      id: crypto.randomUUID(),
      name: 'General',
      messages: [],
      archived: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      metadata: {
        manuallyRenamed: true, // Default space is considered manually renamed
        isGeneratingName: false
      }
    };
    setSpaces([defaultSpace]);
    setCurrentSpaceId(defaultSpace.id);
  }, []);

  // Persist to localStorage
  React.useEffect(() => {
    if (spaces.length && currentSpaceId) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ spaces, currentSpaceId }));
    }
  }, [spaces, currentSpaceId]);

  // Simulate a delay for name generation (for better UX)
  const generateNameWithDelay = React.useCallback((space: Space): Promise<string> => {
    return new Promise((resolve) => {
      // Generate a name based on conversation content
      const generatedName = generateConversationName(space);
      
      // Add a small delay to make the loading state visible
      // This helps users understand that something is happening
      setTimeout(() => {
        resolve(generatedName);
      }, 1500);
    });
  }, []);

  // Auto-update conversation names
  React.useEffect(() => {
    // Don't run this effect immediately on first render
    if (spaces.length === 0) return;
    
    // Find spaces that need name updates
    const spacesToUpdate = spaces.filter(space => {
      // Skip spaces that have been manually renamed
      if (space.metadata?.manuallyRenamed) return false;
      
      // Skip spaces already in loading state
      if (space.metadata?.isGeneratingName) return false;
      
      // Skip spaces that were recently auto-named (within last 5 minutes)
      const lastUpdate = space.metadata?.lastAutoNameUpdate || 0;
      if (Date.now() - lastUpdate < 5 * 60 * 1000) return false;
      
      // Check if this space qualifies for auto-naming
      return shouldUpdateConversationName(space);
    });
    
    if (spacesToUpdate.length === 0) return;
    
    // First, mark these spaces as loading
    setSpaces(prevSpaces => prevSpaces.map(space => {
      const needsUpdate = spacesToUpdate.some(s => s.id === space.id);
      if (!needsUpdate) return space;
      
      return {
        ...space,
        metadata: {
          ...(space.metadata || { manuallyRenamed: false }),
          isGeneratingName: true
        }
      };
    }));
    
    // Process each space sequentially to avoid multiple UI updates
    const processSpaces = async () => {
      for (const space of spacesToUpdate) {
        // Generate name with simulated delay
        const newName = await generateNameWithDelay(space);
        
        // Use functional update to ensure we're working with the latest state
        setSpaces(prev => prev.map(s => {
          if (s.id !== space.id) return s;
          
          // Only update if the name has actually changed
          if (newName !== s.name) {
            return {
              ...s,
              name: newName,
              metadata: {
                ...(s.metadata || { manuallyRenamed: false }),
                lastAutoNameUpdate: Date.now(),
                isGeneratingName: false
              }
            };
          } else {
            // Still update the metadata to mark it as no longer generating
            return {
              ...s,
              metadata: {
                ...(s.metadata || { manuallyRenamed: false }),
                lastAutoNameUpdate: Date.now(),
                isGeneratingName: false
              }
            };
          }
        }));
      }
    };
    
    processSpaces();
  }, [spaces, generateNameWithDelay]);
  
  const createSpace = (name: string, notebook_id?: string) => {
    if (!premium && notebook_id) {
      const notebookSpacesCount = spaces.filter(s => s.notebook_id === notebook_id).length;
      if (notebookSpacesCount >= 3) {
        showLimitModal('You\'ve reached the maximum of 3 spaces per notebook in the free plan. Upgrade to premium for unlimited spaces.', 'space');
        return null;
      }
    }
    
    const newSpace: Space = {
      id: crypto.randomUUID(),
      name,
      messages: [],
      archived: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      notebook_id,
      metadata: {
        manuallyRenamed: false, // Default to auto-naming for new spaces
        isGeneratingName: false
      }
    };
    
    // Store the ID we're attempting to create
    pendingSpaceCreation.current = newSpace.id;
    
    // Use functional form to prevent race conditions
    setSpaces(prev => {
      // Re-check the count inside the functional update to ensure atomicity
      if (!premium && notebook_id) {
        const currentNotebookSpacesCount = prev.filter(s => s.notebook_id === notebook_id).length;
        if (currentNotebookSpacesCount >= 3) {
          // This condition should rarely hit due to the earlier check,
          // but it provides a safety net for race conditions
          pendingSpaceCreation.current = null; // Clear the pending ID since creation was aborted
          return prev;
        }
      }
      
      // Space creation allowed - will be added to spaces array
      setCurrentSpaceId(newSpace.id);
      return [...prev, newSpace];
    });
    
    // Return the ID (or null if aborted due to race condition)
    const result = pendingSpaceCreation.current;
    pendingSpaceCreation.current = null; // Reset after use
    return result;
  };

  const deleteSpace = (id: string) => {
    // Find the space to check if it's the General space
    const spaceToDelete = spaces.find(s => s.id === id);
    
    // Prevent deletion of the General space
    if (spaceToDelete?.name === 'General') {
      console.log('Cannot delete the General space');
      return;
    }
    
    setSpaces(prev => prev.filter(s => s.id !== id));
    if (currentSpaceId === id) {
      // If deleting current space, switch to General space first, or any other space
      const generalSpace = spaces.find(s => s.name === 'General' && s.id !== id);
      const fallback = generalSpace || spaces.find(s => s.id !== id);
      
      if (fallback) {
        setCurrentSpaceId(fallback.id);
      } else {
        // No fallback space found, create a new General space
        const newGeneralSpace: Space = {
          id: crypto.randomUUID(),
          name: 'General',
          messages: [],
          archived: false,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          metadata: {
            manuallyRenamed: true, // Default space is considered manually renamed
            isGeneratingName: false
          }
        };
        
        setSpaces(prev => [...prev, newGeneralSpace]);
        setCurrentSpaceId(newGeneralSpace.id);
      }
    }
  };

  const archiveSpace = (id: string) => {
    setSpaces(prev => prev.map(s => s.id === id ? { ...s, archived: true, updatedAt: Date.now() } : s));
    if (currentSpaceId === id) {
      const fallback = spaces.find(s => s.id !== id && !s.archived);
      if (fallback) setCurrentSpaceId(fallback.id);
    }
  };

  const renameSpace = (id: string, name: string, isManualRename = true) => {
    setSpaces(prev => prev.map(s => s.id === id ? { 
      ...s, 
      name, 
      updatedAt: Date.now(),
      metadata: {
        ...s.metadata,
        manuallyRenamed: isManualRename,  // Mark if this was a manual rename
        isGeneratingName: false           // Not generating if manually renamed
      }
    } : s));
  };

  const resetToAutoNaming = (id: string) => {
    // Find the space
    const space = spaces.find(s => s.id === id);
    if (!space) return;
    
    // Set it to generating state
    setSpaces(prev => prev.map(s => s.id === id ? { 
      ...s, 
      metadata: {
        ...(s.metadata || {}),
        manuallyRenamed: false,
        isGeneratingName: true
      }
    } : s));
    
    // Generate a new name
    generateNameWithDelay(space).then(newName => {
      setSpaces(prev => prev.map(s => s.id === id ? { 
        ...s, 
        name: newName,
        metadata: {
          ...(s.metadata || {}),
          manuallyRenamed: false,
          isGeneratingName: false,
          lastAutoNameUpdate: Date.now()
        }
      } : s));
    });
  };

  const togglePinSpace = (id: string) => {
    setSpaces(prev => prev.map(s => s.id === id ? { 
      ...s, 
      metadata: {
        ...(s.metadata || { manuallyRenamed: false }),
        pinned: !(s.metadata?.pinned)
      }
    } : s));
  };

  const switchSpace = (id: string) => {
    setCurrentSpaceId(id);
  };

  const addMessage = (newMessageToAdd: ChatMessage) => {
    const spaceUpdateTimestamp = Date.now(); // For the space's updatedAt field
    
    // Ensure we have a current space - if not, find or create General space
    if (!currentSpaceId || !spaces.find(s => s.id === currentSpaceId)) {
      console.log('No current space found, finding or creating General space');
      
      // First try to find existing General space
      const existingGeneral = spaces.find(s => s.name === 'General');
      if (existingGeneral) {
        setCurrentSpaceId(existingGeneral.id);
        // Add message to existing General space
        setSpaces(prev => prev.map(s => 
          s.id === existingGeneral.id 
            ? { ...s, messages: [...s.messages, newMessageToAdd], updatedAt: spaceUpdateTimestamp }
            : s
        ));
        return;
      }
      
      // Create new General space if none exists
      const defaultSpace: Space = {
        id: crypto.randomUUID(),
        name: 'General',
        messages: [newMessageToAdd],
        archived: false,
        createdAt: Date.now(),
        updatedAt: spaceUpdateTimestamp,
        metadata: {
          manuallyRenamed: true,
          isGeneratingName: false
        }
      };
      setSpaces(prev => [defaultSpace, ...prev]);
      setCurrentSpaceId(defaultSpace.id);
      return;
    }
    
    setSpaces(prev => {
      const updated = prev.map(s => {
        if (s.id !== currentSpaceId) return s;
        
        // Filter out any existing message with the same ID to prevent duplicates,
        // then add the new message.
        const updatedMessages = s.messages.filter(m => m.id !== newMessageToAdd.id);
        updatedMessages.push(newMessageToAdd);

        const updatedSpace = {
          ...s,
          messages: updatedMessages,
          updatedAt: spaceUpdateTimestamp
        };
        
        // Auto-naming logic (uses newMessageToAdd.role) - but not for General space
        if (
          newMessageToAdd.role === 'user' &&
          updatedSpace.messages.filter(m => m.role === 'user').length === 1 &&
          updatedSpace.messages.length <= 2 && // Ensure it's early in the conversation
          !updatedSpace.metadata?.manuallyRenamed &&
          updatedSpace.name !== 'General' // Don't auto-rename General space
        ) {
          return {
            ...updatedSpace,
            metadata: {
              ...(updatedSpace.metadata || { manuallyRenamed: false }),
              isGeneratingName: true
            }
          };
        }
        
        return updatedSpace;
      });
      return updated;
    });
  };

  const exportSpace = (id: string) => {
    const space = spaces.find(s => s.id === id);
    if (!space) return;
    const dataStr = JSON.stringify(space, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${space.name}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const currentSpace = spaces.find(s => s.id === currentSpaceId);

  const searchSpaces = (query: string): Array<{
    id: string;
    name: string;
    match: {
      text: string;
      context: 'message' | 'name';
      timestamp?: number;
    };
  }> => {
    const lower = query.toLowerCase();
    return spaces
      .filter(space => 
        // Search in space name
        space.name.toLowerCase().includes(lower) ||
        // Search in message content
        space.messages.some(message => 
          message.content.toLowerCase().includes(lower)
        )
      )
      .map(space => {
        // Find matching message for context
        const matchingMessage = space.messages.find(message => 
          message.content.toLowerCase().includes(lower)
        );
        
        if (matchingMessage) {
          return {
            id: space.id,
            name: space.name,
            match: { 
              text: matchingMessage.content,
              context: 'message' as const,
              timestamp: matchingMessage.timestamp
            }
          };
        } else {
          return {
            id: space.id,
            name: space.name,
            match: { 
              text: space.name, 
              context: 'name' as const
            }
          };
        }
      });
  };

  return (
    <SpacesContext.Provider value={{ 
      spaces, 
      currentSpaceId, 
      currentSpace, 
      createSpace, 
      deleteSpace, 
      archiveSpace, 
      renameSpace, 
      switchSpace, 
      addMessage, 
      exportSpace,
      togglePinSpace,
      resetToAutoNaming,
      searchSpaces
    }}>
      {children}
    </SpacesContext.Provider>
  );
};

export const useSpaces = () => {
  const context = React.useContext(SpacesContext);
  if (!context) throw new Error('useSpaces must be used within SpacesProvider');
  return context;
}; 