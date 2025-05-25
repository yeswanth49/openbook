"use client";

import * as React from 'react';
import type { ReactNode } from 'react';
import { generateConversationName, shouldUpdateConversationName } from '@/lib/conversation-utils';

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
  createSpace: (name: string, notebook_id?: string) => string;
  deleteSpace: (id: string) => void;
  archiveSpace: (id: string) => void;
  renameSpace: (id: string, name: string, isManualRename?: boolean) => void;
  switchSpace: (id: string) => void;
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
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
      const updatedSpaces = [...spaces];
      let hasChanges = false;
      
      for (const space of spacesToUpdate) {
        const spaceIndex = updatedSpaces.findIndex(s => s.id === space.id);
        if (spaceIndex === -1) continue;
        
        // Generate name with simulated delay
        const newName = await generateNameWithDelay(space);
        
        // Only update if the name has actually changed
        if (newName !== space.name) {
          updatedSpaces[spaceIndex] = {
            ...updatedSpaces[spaceIndex],
            name: newName,
            metadata: {
              ...(updatedSpaces[spaceIndex].metadata || { manuallyRenamed: false }),
              lastAutoNameUpdate: Date.now(),
              isGeneratingName: false
            }
          };
          hasChanges = true;
        } else {
          // Still update the metadata to mark it as no longer generating
          updatedSpaces[spaceIndex] = {
            ...updatedSpaces[spaceIndex],
            metadata: {
              ...(updatedSpaces[spaceIndex].metadata || { manuallyRenamed: false }),
              lastAutoNameUpdate: Date.now(),
              isGeneratingName: false
            }
          };
          hasChanges = true;
        }
      }
      
      // Only update state if changes were made
      if (hasChanges) {
        setSpaces(updatedSpaces);
      }
    };
    
    processSpaces();
  }, [spaces, generateNameWithDelay]);
  
  const createSpace = (name: string, notebook_id?: string) => {
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
    setSpaces(prev => [...prev, newSpace]);
    setCurrentSpaceId(newSpace.id);
    return newSpace.id;
  };

  const deleteSpace = (id: string) => {
    setSpaces(prev => prev.filter(s => s.id !== id));
    if (currentSpaceId === id && spaces.length > 1) {
      const fallback = spaces.find(s => s.id !== id);
      if (fallback) setCurrentSpaceId(fallback.id);
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

  const addMessage = (message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const now = Date.now();
    setSpaces(prev => prev.map(s => {
      if (s.id !== currentSpaceId) return s;
      
      // For the current space, add the message
      const updatedSpace = {
        ...s,
        messages: [...s.messages, { ...message, id: crypto.randomUUID(), timestamp: now }],
        updatedAt: now
      };
      
      // If this is the first user message and the space has auto-naming, 
      // mark it as generating a name
      if (
        message.role === 'user' && 
        updatedSpace.messages.filter(m => m.role === 'user').length === 1 &&
        !updatedSpace.metadata?.manuallyRenamed
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
    }));
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