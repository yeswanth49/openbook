"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Notebook } from '@/lib/types';

export interface NotebookContextType {
  notebooks: Notebook[];
  currentNotebookId: string;
  currentNotebook?: Notebook;
  createNotebook: (name: string) => string;
  deleteNotebook: (id: string) => void;
  renameNotebook: (id: string, name: string) => void;
  switchNotebook: (id: string) => void;
  toggleNotebookExpansion: (id: string) => void;
  reorderNotebooks: (notebooks: Notebook[]) => void;
}

const NotebookContext = createContext<NotebookContextType | undefined>(undefined);
const STORAGE_KEY = 'openbook_notebooks_data';

export const NotebookProvider = ({ children }: { children: ReactNode }) => {
  const [notebooks, setNotebooks] = useState<Notebook[]>([]);
  const [currentNotebookId, setCurrentNotebookId] = useState<string>('');

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as { notebooks: Notebook[]; currentNotebookId: string };
        setNotebooks(parsed.notebooks);
        setCurrentNotebookId(parsed.currentNotebookId);
        return;
      } catch {
        // ignore parse errors
      }
    }
    
    // Initialize default notebook
    const defaultNotebook: Notebook = {
      id: crypto.randomUUID(),
      name: 'Default',
      order: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      isExpanded: true,
      metadata: {}
    };
    setNotebooks([defaultNotebook]);
    setCurrentNotebookId(defaultNotebook.id);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (notebooks.length && currentNotebookId) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ notebooks, currentNotebookId }));
    }
  }, [notebooks, currentNotebookId]);

  const currentNotebook = notebooks.find(notebook => notebook.id === currentNotebookId);

  const createNotebook = (name: string): string => {
    const newNotebook: Notebook = {
      id: crypto.randomUUID(),
      name,
      order: notebooks.length,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      isExpanded: true,
      metadata: {}
    };
    
    setNotebooks(prev => [...prev, newNotebook]);
    setCurrentNotebookId(newNotebook.id);
    return newNotebook.id;
  };

  const deleteNotebook = (id: string) => {
    // Don't allow deleting the last notebook
    if (notebooks.length <= 1) return;
    
    setNotebooks(prev => prev.filter(notebook => notebook.id !== id));
    
    // If we're deleting the current notebook, switch to the first remaining one
    if (currentNotebookId === id) {
      const remaining = notebooks.filter(notebook => notebook.id !== id);
      if (remaining.length > 0) {
        setCurrentNotebookId(remaining[0].id);
      }
    }
  };

  const renameNotebook = (id: string, name: string) => {
    setNotebooks(prev => prev.map(notebook => 
      notebook.id === id 
        ? { ...notebook, name, updatedAt: Date.now() }
        : notebook
    ));
  };

  const switchNotebook = (id: string) => {
    setCurrentNotebookId(id);
  };

  const toggleNotebookExpansion = (id: string) => {
    setNotebooks(prev => prev.map(notebook => 
      notebook.id === id 
        ? { ...notebook, isExpanded: !notebook.isExpanded, updatedAt: Date.now() }
        : { ...notebook, isExpanded: false, updatedAt: Date.now() }
    ));
  };

  const reorderNotebooks = (reorderedNotebooks: Notebook[]) => {
    const updatedNotebooks = reorderedNotebooks.map((notebook, index) => ({
      ...notebook,
      order: index,
      updatedAt: Date.now()
    }));
    setNotebooks(updatedNotebooks);
  };

  return (
    <NotebookContext.Provider value={{
      notebooks,
      currentNotebookId,
      currentNotebook,
      createNotebook,
      deleteNotebook,
      renameNotebook,
      switchNotebook,
      toggleNotebookExpansion,
      reorderNotebooks
    }}>
      {children}
    </NotebookContext.Provider>
  );
};

export const useNotebooks = () => {
  const context = useContext(NotebookContext);
  if (context === undefined) {
    throw new Error('useNotebooks must be used within a NotebookProvider');
  }
  return context;
}; 