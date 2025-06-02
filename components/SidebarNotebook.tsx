"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Edit2, Trash2, PenLine, FolderPlus, Pin, PinOff, RefreshCw, Clock, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Notebook } from '@/lib/types';
import { useNotebooks } from '@/contexts/NotebookContext';
import { useSpaces, Space } from '@/contexts/SpacesContext';
import { useJournal } from '@/hooks/useJournal';
import { useRouter } from 'next/navigation';
import { ConversationNameDisplay } from '@/components/name-loading';
import { format } from 'date-fns';
import { LimitIndicator } from './LimitIndicator';

// Define types for animation config
interface AnimationConfig {
  transition: {
    ease: number[];
    duration: number;
  };
  spring: {
    type: string;
    stiffness: number;
    damping: number;
  };
  fade: {
    initial: { opacity: number };
    animate: { opacity: number };
    exit: { opacity: number };
    transition: { duration: number };
  };
  hover: {
    scale: number;
    transition: { duration: number };
  };
  tap: {
    scale: number;
  };
}

// Define default animation variants using standard settings
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.03
    }
  }
};

const sectionVariants = {
  open: { 
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        type: "spring",
        stiffness: 500,
        damping: 40,
        duration: 0.2
      },
      opacity: {
        duration: 0.15
      }
    }
  },
  closed: { 
    height: 0, 
    opacity: 0,
    transition: {
      height: {
        type: "spring",
        stiffness: 500,
        damping: 40,
        duration: 0.2
      },
      opacity: {
        duration: 0.1
      }
    }
  }
};

interface SidebarNotebookProps {
  notebook: Notebook;
  currentPageType: string;
  currentPageId: string;
  animationConfig?: AnimationConfig;
}

export default function SidebarNotebook({ 
  notebook, 
  currentPageType, 
  currentPageId,
  animationConfig 
}: SidebarNotebookProps) {
  const { toggleNotebookExpansion, renameNotebook, deleteNotebook, notebooks } = useNotebooks();
  const { spaces, currentSpaceId, createSpace, switchSpace, deleteSpace, renameSpace, togglePinSpace, resetToAutoNaming } = useSpaces();
  const { createEntry, entries, deleteEntry, updateEntry } = useJournal();
  const router = useRouter();

  const [editingNotebookName, setEditingNotebookName] = useState(false);
  const [notebookName, setNotebookName] = useState(notebook.name);
  const [journalsOpen, setJournalsOpen] = useState(true);
  const [spacesOpen, setSpacesOpen] = useState(true);
  const [editingJournalId, setEditingJournalId] = useState<string | null>(null);
  const [editingJournalTitle, setEditingJournalTitle] = useState('');
  const [editingSpaceId, setEditingSpaceId] = useState<string | null>(null);
  const [editingSpaceName, setEditingSpaceName] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: string; name: string; type: 'journal' | 'space' } | null>(null);

  const focusInputRef = useRef<HTMLInputElement>(null);

  // Filter entries and spaces by notebook
  const notebookEntries = entries.filter(entry => entry.notebook_id === notebook.id);
  
  // Get all spaces that belong to this notebook
  let notebookSpaces = spaces.filter(space => space.notebook_id === notebook.id);
  
  // Always include the current active space in the list, regardless of notebook assignment
  const currentActiveSpace = spaces.find(space => space.id === currentSpaceId);
  if (currentActiveSpace && !notebookSpaces.some(space => space.id === currentActiveSpace.id)) {
    notebookSpaces = [currentActiveSpace, ...notebookSpaces];
  }
  
  // For the default notebook, also include spaces without notebook assignment (legacy default spaces)
  if (notebook.name === 'Default') {
    const unassignedSpaces = spaces.filter(space => !space.notebook_id && !notebookSpaces.some(ns => ns.id === space.id));
    notebookSpaces = [...notebookSpaces, ...unassignedSpaces];
  }

  // Sort entries by updated date (most recent first)
  const sortedEntries = [...notebookEntries].sort((a, b) => 
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  // Sort spaces: pinned first, then by last updated
  const sortedSpaces = [...notebookSpaces].sort((a, b) => {
    if (a.metadata?.pinned && !b.metadata?.pinned) return -1;
    if (!a.metadata?.pinned && b.metadata?.pinned) return 1;
    return b.updatedAt - a.updatedAt;
  });

  const handleNotebookToggle = () => {
    toggleNotebookExpansion(notebook.id);
  };

  const handleNotebookRename = () => {
    setEditingNotebookName(true);
    setNotebookName(notebook.name);
  };

  const handleFinishNotebookRename = () => {
    if (notebookName.trim() && notebookName !== notebook.name) {
      renameNotebook(notebook.id, notebookName.trim());
    }
    setEditingNotebookName(false);
  };

  const handleCreateJournal = () => {
    const defaultTitle = `Journal - ${new Date().toLocaleDateString()}`;
    const newEntry = createEntry(defaultTitle, notebook.id);
    if (newEntry) {
      setEditingJournalId(newEntry.id);
      setEditingJournalTitle(defaultTitle);
      if (!journalsOpen) setJournalsOpen(true);
    }
  };

  const handleCreateSpace = () => {
    const defaultTitle = `Untitled`;
    const newSpaceId = createSpace(defaultTitle, notebook.id);
    if (newSpaceId) {
      setEditingSpaceId(newSpaceId);
      setEditingSpaceName(defaultTitle);
      if (!spacesOpen) setSpacesOpen(true);
    }
  };

  const handleJournalClick = (entryId: string) => {
    // Explicitly save sidebar state to ensure it's preserved during navigation
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebar-isOpen', 'true'); // Force sidebar to stay open
    }
    router.push(`/journal/${entryId}`);
  };

  const handleSpaceClick = (spaceId: string) => {
    // Switch space first
    switchSpace(spaceId);
    
    // Explicitly save sidebar state to ensure it's preserved during navigation
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebar-isOpen', 'true'); // Force sidebar to stay open
    }
    
    router.push(`/space/${spaceId}`);
  };

  const handleDeleteJournal = (e: React.MouseEvent, journalId: string, journalName: string) => {
    e.stopPropagation();
    setItemToDelete({ id: journalId, name: journalName, type: 'journal' });
    setShowDeleteConfirm(true);
  };

  const handleDeleteSpace = (e: React.MouseEvent, spaceId: string, spaceName: string) => {
    e.stopPropagation();
    setItemToDelete({ id: spaceId, name: spaceName, type: 'space' });
    setShowDeleteConfirm(true);
  };

  const handleRenameJournal = (e: React.MouseEvent, journalId: string, currentTitle: string) => {
    e.stopPropagation();
    setEditingJournalId(journalId);
    setEditingJournalTitle(currentTitle);
  };

  const handleRenameSpace = (e: React.MouseEvent, spaceId: string, currentName: string) => {
    e.stopPropagation();
    setEditingSpaceId(spaceId);
    setEditingSpaceName(currentName);
  };

  const handleFinishJournalRename = (journalId: string) => {
    if (editingJournalTitle.trim()) {
      updateEntry(journalId, { title: editingJournalTitle.trim() });
    }
    setEditingJournalId(null);
    setEditingJournalTitle('');
  };

  const handleFinishSpaceRename = (spaceId: string) => {
    if (editingSpaceName.trim()) {
      renameSpace(spaceId, editingSpaceName.trim(), true);
    }
    setEditingSpaceId(null);
    setEditingSpaceName('');
  };

  // Focus input on edit
  useEffect(() => {
    if (editingNotebookName && focusInputRef.current) {
      focusInputRef.current.focus();
      focusInputRef.current.select();
    }
  }, [editingNotebookName]);

  // Define item variants here for consistent animations
  const itemVariants = {
    hidden: { opacity: 0, y: 3 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 500,
        damping: 40,
        duration: 0.15
      }
    }
  };

  // Choose between passed-in animation config or defaults
  const fadeAnimation = animationConfig?.fade || {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.15 }
  };

  const tapAnimation = animationConfig?.tap || { scale: 0.98 };
  
  // Use consistent hover animation
  const hoverAnimation = { x: 2 };

  return (
    <div className="mb-2">
      {/* Back button and Notebook Header when expanded */}
      <AnimatePresence>
        {notebook.isExpanded && (
          <motion.div 
            {...fadeAnimation}
            className="px-4 py-2 border-b border-neutral-100 dark:border-neutral-800 mb-2"
          >
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={hoverAnimation}
                whileTap={tapAnimation}
                onClick={handleNotebookToggle}
                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-150"
                title="Back to notebooks"
              >
                <ChevronLeft className="h-4 w-4 text-neutral-400" />
              </motion.button>
              <BookOpen className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
              {editingNotebookName ? (
                <input
                  ref={focusInputRef}
                  value={notebookName}
                  onChange={(e) => setNotebookName(e.target.value)}
                  onBlur={handleFinishNotebookRename}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleFinishNotebookRename();
                    if (e.key === 'Escape') setEditingNotebookName(false);
                  }}
                  className="flex-1 px-1 py-0.5 text-sm font-medium bg-white dark:bg-neutral-800 border border-emerald-400/60 rounded focus:outline-none"
                />
              ) : (
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 flex-1">
                  {notebook.name}
                </span>
              )}
              {!editingNotebookName && (
                <div className="flex items-center gap-1">
                  <motion.button
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                    onClick={handleNotebookRename}
                    className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-150"
                    title="Rename notebook"
                  >
                    <Edit2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                  </motion.button>
                  <motion.button
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                    onClick={() => deleteNotebook(notebook.id)}
                    className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-150"
                    title="Delete notebook"
                  >
                    <Trash2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed notebook view */}
      <AnimatePresence>
        {!notebook.isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 30 
            }}
            className="group relative"
          >
            <motion.div 
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.03)", x: 3 }}
              whileTap={tapAnimation}
              className="flex items-center justify-between px-4 py-2 rounded-md"
            >
              <div className="flex items-center flex-1 min-w-0">
                <button
                  onClick={handleNotebookToggle}
                  className="flex items-center gap-2 flex-1 min-w-0"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  >
                    <ChevronRight className="h-4 w-4 text-neutral-400 flex-shrink-0" />
                  </motion.div>
                  <BookOpen className="h-4 w-4 text-neutral-500 dark:text-neutral-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 truncate">
                    {notebook.name}
                  </span>
                </button>
              </div>
              
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <motion.button
                  whileHover={hoverAnimation}
                  whileTap={tapAnimation}
                  onClick={handleNotebookRename}
                  className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-150"
                  title="Rename notebook"
                >
                  <Edit2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                </motion.button>
                <motion.button
                  whileHover={hoverAnimation}
                  whileTap={tapAnimation}
                  onClick={() => deleteNotebook(notebook.id)}
                  className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-150"
                  title="Delete notebook"
                >
                  <Trash2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notebook Content - only show when expanded */}
      <AnimatePresence>
        {notebook.isExpanded && (
          <motion.div 
            className="space-y-2 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Journals Section */}
            <div>
              <motion.div 
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}
                className="px-4 py-1.5 flex items-center justify-between cursor-pointer rounded-md" 
                onClick={() => setJournalsOpen(!journalsOpen)}
                variants={itemVariants}
              >
                <h4 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wider">JOURNALS</h4>
                <motion.div
                  animate={{ rotate: journalsOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 40, duration: 0.2 }}
                >
                  <ChevronDown className="h-3 w-3 text-neutral-400" />
                </motion.div>
              </motion.div>
              
              <motion.button
                variants={itemVariants}
                whileHover={hoverAnimation}
                whileTap={tapAnimation}
                onClick={handleCreateJournal}
                className="w-full flex items-center gap-2 text-left px-4 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md mt-1"
              >
                <PenLine className="h-3.5 w-3.5 text-neutral-400" />
                <span>New Journal</span>
              </motion.button>

              <AnimatePresence>
                {journalsOpen && (
                  <motion.div 
                    className="space-y-0.5 mt-1 overflow-hidden"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sectionVariants}
                  >
                    {sortedEntries.map((entry, index) => (
                      <motion.div 
                        key={`${entry.id}-${index}`} 
                        className="group relative"
                        variants={itemVariants}
                      >
                        <motion.div
                          whileHover={{ 
                            backgroundColor: currentPageType === 'journal' && currentPageId === entry.id
                              ? "rgba(16, 185, 129, 0.1)"
                              : "rgba(0, 0, 0, 0.03)",
                            x: 3
                          }}
                          whileTap={tapAnimation}
                          className={cn(
                            "flex w-full items-center cursor-pointer rounded-md",
                            currentPageType === 'journal' && currentPageId === entry.id
                              ? "bg-emerald-50 dark:bg-emerald-900/20"
                              : ""
                          )}
                          onClick={() => handleJournalClick(entry.id)}
                        >
                          {editingJournalId === entry.id ? (
                            <div className="flex items-center w-full px-4 py-1">
                              <input
                                value={editingJournalTitle}
                                onChange={(e) => setEditingJournalTitle(e.target.value)}
                                onBlur={() => handleFinishJournalRename(entry.id)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') handleFinishJournalRename(entry.id);
                                  if (e.key === 'Escape') setEditingJournalId(null);
                                }}
                                className="w-full px-1 py-0.5 text-sm bg-white dark:bg-neutral-800 border border-emerald-400/60 rounded focus:outline-none"
                                autoFocus
                              />
                            </div>
                          ) : (
                            <button
                              className="w-full text-left px-4 py-1.5 text-sm flex items-center"
                              style={{ 
                                color: currentPageType === 'journal' && currentPageId === entry.id
                                  ? 'var(--tw-color-emerald-600)' 
                                  : 'var(--tw-color-neutral-600)'
                              }}
                            >
                              <div className="flex items-center truncate pl-5">
                                <span className="truncate font-medium">{entry.title}</span>
                              </div>
                            </button>
                          )}
                          
                          {!editingJournalId && (
                            <div className="absolute right-2 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <motion.button
                                whileHover={hoverAnimation}
                                whileTap={tapAnimation}
                                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                onClick={(e) => handleRenameJournal(e, entry.id, entry.title)}
                                title="Rename journal"
                              >
                                <Edit2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                              </motion.button>
                              <motion.button
                                whileHover={hoverAnimation}
                                whileTap={tapAnimation}
                                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                onClick={(e) => handleDeleteJournal(e, entry.id, entry.title)}
                                title="Delete journal"
                              >
                                <Trash2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                              </motion.button>
                            </div>
                          )}
                        </motion.div>
                        
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="ml-9 px-4 mt-0 pb-0.5 overflow-hidden"
                        >
                          <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 h-0 overflow-hidden group-hover:h-auto transition-all duration-150">
                            <Clock className="h-2.5 w-2.5 mr-0.5" />
                            <span>{format(new Date(entry.updatedAt), 'MMM d, yyyy')}</span>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Spaces Section */}
            <div>
              <motion.div 
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}
                className="px-4 py-1.5 flex items-center justify-between cursor-pointer rounded-md" 
                onClick={() => setSpacesOpen(!spacesOpen)}
                variants={itemVariants}
              >
                <h4 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wider">SPACES</h4>
                <motion.div
                  animate={{ rotate: spacesOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 40, duration: 0.2 }}
                >
                  <ChevronDown className="h-3 w-3 text-neutral-400" />
                </motion.div>
              </motion.div>
              
              <motion.button
                variants={itemVariants}
                whileHover={hoverAnimation}
                whileTap={tapAnimation}
                onClick={handleCreateSpace}
                className="w-full flex items-center gap-2 text-left px-4 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md mt-1"
              >
                <FolderPlus className="h-3.5 w-3.5 text-neutral-400" />
                <span>New Space</span>
              </motion.button>

              <AnimatePresence>
                {spacesOpen && (
                  <motion.div 
                    className="space-y-0.5 mt-1 overflow-hidden"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sectionVariants}
                  >
                    {sortedSpaces.map((space, index) => (
                      <motion.div 
                        key={`${space.id}-${index}`} 
                        className="group relative"
                        variants={itemVariants}
                      >
                        <motion.div
                          whileHover={{ 
                            backgroundColor: currentSpaceId === space.id
                              ? "rgba(16, 185, 129, 0.1)"
                              : "rgba(0, 0, 0, 0.03)",
                            x: 3
                          }}
                          whileTap={tapAnimation}
                          className={cn(
                            "flex w-full items-center cursor-pointer rounded-md",
                            // Highlight if this space is the currently active space
                            currentSpaceId === space.id
                              ? "bg-emerald-50 dark:bg-emerald-900/20"
                              : ""
                          )}
                          onClick={() => handleSpaceClick(space.id)}
                        >
                          {editingSpaceId === space.id ? (
                            <div className="flex items-center w-full px-4 py-1">
                              <input
                                value={editingSpaceName}
                                onChange={(e) => setEditingSpaceName(e.target.value)}
                                onBlur={() => handleFinishSpaceRename(space.id)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') handleFinishSpaceRename(space.id);
                                  if (e.key === 'Escape') setEditingSpaceId(null);
                                }}
                                className="w-full px-1 py-0.5 text-sm bg-white dark:bg-neutral-800 border border-emerald-400/60 rounded focus:outline-none"
                                autoFocus
                              />
                            </div>
                          ) : (
                            <button
                              className="w-full text-left px-4 py-1.5 text-sm flex items-center"
                              style={{ 
                                color: currentSpaceId === space.id
                                  ? 'var(--tw-color-emerald-600)' 
                                  : 'var(--tw-color-neutral-600)'
                              }}
                            >
                              <div className="flex items-center truncate pl-5">
                                {space.metadata?.pinned && (
                                  <Pin className="h-3 w-3 mr-1.5 flex-shrink-0 text-blue-400" />
                                )}
                                {currentSpaceId === space.id && (
                                  <span className="mr-1.5 px-1 py-0.5 text-[10px] font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded">Active</span>
                                )}
                                <ConversationNameDisplay
                                  name={space.name}
                                  isLoading={space.metadata?.isGeneratingName}
                                  isAutoNamed={!space.metadata?.manuallyRenamed}
                                  className="truncate font-medium"
                                />
                              </div>
                            </button>
                          )}
                          
                          {!editingSpaceId && (
                            <div className="absolute right-2 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              {!space.metadata?.isGeneratingName && space.metadata?.manuallyRenamed && space.messages.length > 0 && (
                                <motion.button
                                  whileHover={hoverAnimation}
                                  whileTap={tapAnimation}
                                  className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    resetToAutoNaming(space.id);
                                  }}
                                  title="Reset to auto naming"
                                >
                                  <RefreshCw className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                                </motion.button>
                              )}
                              <motion.button
                                whileHover={hoverAnimation}
                                whileTap={tapAnimation}
                                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  togglePinSpace(space.id);
                                }}
                                title={space.metadata?.pinned ? "Unpin space" : "Pin space"}
                              >
                                {space.metadata?.pinned ? 
                                  <PinOff className="h-3 w-3 text-neutral-500 dark:text-neutral-400" /> : 
                                  <Pin className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                                }
                              </motion.button>
                              <motion.button
                                whileHover={hoverAnimation}
                                whileTap={tapAnimation}
                                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                onClick={(e) => handleRenameSpace(e, space.id, space.name)}
                                title="Rename space"
                              >
                                <Edit2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                              </motion.button>
                              {space.name !== 'General' && (
                                <motion.button
                                  whileHover={hoverAnimation}
                                  whileTap={tapAnimation}
                                  className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                  onClick={(e) => handleDeleteSpace(e, space.id, space.name)}
                                  title="Delete space"
                                >
                                  <Trash2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                                </motion.button>
                              )}
                            </div>
                          )}
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Render the LimitIndicator */}
            {notebook.isExpanded && <LimitIndicator notebookId={notebook.id} />}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Dialog */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div 
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50 flex items-center justify-center p-4" 
            onClick={() => setShowDeleteConfirm(false)}
            {...fadeAnimation}
          >
            <motion.div 
              className="bg-white dark:bg-neutral-900 rounded-md shadow-md max-w-xs w-full border border-neutral-100 dark:border-neutral-800"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center">
                <Trash2 className="h-4 w-4 text-neutral-500 dark:text-neutral-400 mr-2" />
                <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  Delete {itemToDelete?.type === 'journal' ? 'Journal' : 'Space'}
                </h3>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  Delete &quot;{itemToDelete?.name}&quot;? This cannot be undone.
                </p>
                
                <div className="flex justify-end gap-2">
                  <motion.button
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
                    onClick={() => setShowDeleteConfirm(false)}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-red-500/80 text-white hover:bg-red-600 transition-colors"
                    onClick={() => {
                      if (itemToDelete) {
                        if (itemToDelete.type === 'journal') {
                          deleteEntry(itemToDelete.id);
                        } else {
                          deleteSpace(itemToDelete.id);
                        }
                        setShowDeleteConfirm(false);
                        setItemToDelete(null);
                      }
                    }}
                  >
                    Delete
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 