"use client";

import * as React from 'react';
import type { ReactNode } from 'react';

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
};

export interface SpacesContextType {
  spaces: Space[];
  currentSpaceId: string;
  currentSpace?: Space;
  createSpace: (name: string) => string;
  deleteSpace: (id: string) => void;
  archiveSpace: (id: string) => void;
  renameSpace: (id: string, name: string) => void;
  switchSpace: (id: string) => void;
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  exportSpace: (id: string) => void;
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
        setSpaces(parsed.spaces);
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

  const createSpace = (name: string) => {
    const newSpace: Space = {
      id: crypto.randomUUID(),
      name,
      messages: [],
      archived: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
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

  const renameSpace = (id: string, name: string) => {
    setSpaces(prev => prev.map(s => s.id === id ? { ...s, name, updatedAt: Date.now() } : s));
  };

  const switchSpace = (id: string) => {
    setCurrentSpaceId(id);
  };

  const addMessage = (message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    setSpaces(prev => prev.map(s => s.id === currentSpaceId
      ? { ...s, messages: [...s.messages, { ...message, id: crypto.randomUUID(), timestamp: Date.now() } ], updatedAt: Date.now() }
      : s
    ));
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

  return (
    <SpacesContext.Provider value={{ spaces, currentSpaceId, currentSpace, createSpace, deleteSpace, archiveSpace, renameSpace, switchSpace, addMessage, exportSpace }}>
      {children}
    </SpacesContext.Provider>
  );
};

export const useSpaces = () => {
  const context = React.useContext(SpacesContext);
  if (!context) throw new Error('useSpaces must be used within SpacesProvider');
  return context;
}; 