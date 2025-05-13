"use client";

import { useState, useEffect, useRef } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Plus, Search, PenLine, ChevronDown, Settings, Crown, MessageSquare, Flag, HelpCircle, LogOut, FolderPlus, Trash2, Edit2, MoreHorizontal, X, Pin, PinOff, RefreshCw, Clock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useSpaces, Space as SpaceType } from '@/contexts/SpacesContext';
import { useRouter } from 'next/navigation';
import { useJournal } from '@/hooks/useJournal';
import { cn } from '@/lib/utils';
import { ConversationMetadata } from '@/components/conversation-metadata';
import { ConversationNameDisplay, NameLoading } from '@/components/name-loading';
import { format } from 'date-fns';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [journalsOpen, setJournalsOpen] = useState(true);
  const [spacesOpen, setSpacesOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [initialExpansionDone, setInitialExpansionDone] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState<{
    journals: { id: string; title: string; preview?: string; matchType: string }[];
    spaces: { id: string; name: string; preview?: string; matchType: string }[];
  }>({ journals: [], spaces: [] });
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const focusInputRef = useRef<HTMLInputElement>(null);
  const { spaces, currentSpaceId, createSpace, switchSpace, deleteSpace, renameSpace, togglePinSpace, resetToAutoNaming } = useSpaces();
  const { createEntry, entries, deleteEntry, updateEntry } = useJournal();
  const router = useRouter();

  // Get current path and parse current page type and ID
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  
  // Extract IDs directly from pathname - more reliable than using context
  const currentPageType = pathname.startsWith('/journal/') 
    ? 'journal' 
    : pathname.startsWith('/space/') 
      ? 'space' 
      : '';
  
  const currentPageId = currentPageType === 'journal'
    ? pathname.split('/journal/')[1]?.split(/[/?#]/)[0] || ''
    : currentPageType === 'space'
      ? pathname.split('/space/')[1]?.split(/[/?#]/)[0] || ''
      : '';
  
  // Only expand sections on initial page load, not when manually collapsed
  useEffect(() => {
    if (!initialExpansionDone) {
      // Only auto-expand on the first load
      if (currentPageType === 'journal') {
        setJournalsOpen(true);
      }
      if (currentPageType === 'space') {
        setSpacesOpen(true);
      }
      setInitialExpansionDone(true);
    }
  }, [currentPageType, initialExpansionDone]);

  // Enhanced search functionality
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      // Get search query
      const query = searchQuery.trim();
      
      // Search in journals (including content)
      const matchingJournals = entries
        .filter(entry => 
          // Search in title
          entry.title.toLowerCase().includes(query.toLowerCase()) ||
          // Search in block content
          entry.blocks.some(block => block.content.toLowerCase().includes(query.toLowerCase()))
        )
        .map(entry => {
          // First try to find a block that matches the query
          const matchingBlock = entry.blocks.find(block => 
            block.content.toLowerCase().includes(query.toLowerCase())
          );
          
          // Then determine the best preview and match type
          if (matchingBlock) {
            return {
              id: entry.id,
              title: entry.title,
              preview: matchingBlock.content,
              matchType: 'content'
            };
          } else {
            return {
              id: entry.id,
              title: entry.title,
              matchType: 'title'
            };
          }
        });
      
      // Search in spaces (including message content)
      const matchingSpaces = spaces
        .filter(space =>
          // Search in space name
          space.name.toLowerCase().includes(query.toLowerCase()) ||
          // Search in message content
          space.messages.some(message => 
            message.content.toLowerCase().includes(query.toLowerCase())
          )
        )
        .map(space => {
          // Try to find a message that matches the query
          const matchingMessage = space.messages.find(message => 
            message.content.toLowerCase().includes(query.toLowerCase())
          );
          
          if (matchingMessage) {
            return {
              id: space.id,
              name: space.name,
              preview: matchingMessage.content,
              matchType: 'message'
            };
          } else {
            return {
              id: space.id,
              name: space.name,
              matchType: 'name'
            };
          }
        });
      
      setSearchResults({
        journals: matchingJournals,
        spaces: matchingSpaces,
      });
      
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  }, [searchQuery, entries, spaces]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultsRef.current && 
        !searchResultsRef.current.contains(event.target as Node) &&
        searchInputRef.current && 
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search item click
  const handleSearchItemClick = (type: 'journal' | 'space', id: string) => {
    if (type === 'journal') {
      router.push(`/journal/${id}`);
    } else {
      switchSpace(id);
      router.push(`/space/${id}`);
    }
    setSearchQuery('');
    setShowSearchResults(false);
  };

  // Add a state to track newly created items
  const [editingJournalId, setEditingJournalId] = useState<string | null>(null);
  const [editingJournalTitle, setEditingJournalTitle] = useState('');
  const [editingSpaceId, setEditingSpaceId] = useState<string | null>(null);
  const [editingSpaceName, setEditingSpaceName] = useState('');
  const [newlyCreatedJournalId, setNewlyCreatedJournalId] = useState<string | null>(null);
  const [newlyCreatedSpaceId, setNewlyCreatedSpaceId] = useState<string | null>(null);

  // Add these new states:
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: string; name: string; type: 'journal' | 'space' } | null>(null);

  // Add a state for controlling the search popup modal visibility
  const [showSearchModal, setShowSearchModal] = useState(false);

  // Add useEffect for keyboard shortcut near the other useEffect hooks
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearchModal(true);
      }
      
      // Also close modal with Escape key
      if (e.key === 'Escape' && showSearchModal) {
        setShowSearchModal(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showSearchModal]);

  // Update handleCreateJournal
  const handleCreateJournal = () => {
    setShowNewMenu(false);
    
    // Create entry with a more descriptive default name
    const defaultTitle = `Journal - ${new Date().toLocaleDateString()}`;
    const newEntry = createEntry(defaultTitle);
    
    // Set this new entry to be in editing mode immediately
    setEditingJournalId(newEntry.id);
    setEditingJournalTitle(defaultTitle);
    
    // Track that this is a newly created journal
    setNewlyCreatedJournalId(newEntry.id);
    
    // Open the journals section if it's closed
    if (!journalsOpen) {
      setJournalsOpen(true);
    }
  };

  // Update handleCreateSpace
  const handleCreateSpace = () => {
    setShowNewMenu(false);
    // Create space with descriptive default name
    const defaultTitle = `Space - ${new Date().toLocaleDateString()}`;
    const newSpaceId = createSpace(defaultTitle);
    // Set this new space to be in editing mode immediately
    setEditingSpaceId(newSpaceId);
    setEditingSpaceName(defaultTitle);
    // Track that this is a newly created space
    setNewlyCreatedSpaceId(newSpaceId);
    // Open spaces section if it's closed
    if (!spacesOpen) {
      setSpacesOpen(true);
    }
  };

  // Update the journal rename function as you already have

  // Update the space rename function to use inline editing
  const handleRenameSpace = (e: React.MouseEvent, spaceId: string, currentName: string) => {
    e.stopPropagation();
    setEditingSpaceId(spaceId);
    setEditingSpaceName(currentName);
  };

  // Update the delete space function to use the confirmation dialog
  const handleDeleteSpace = (e: React.MouseEvent, spaceId: string, spaceName: string) => {
    e.stopPropagation();
    setItemToDelete({ id: spaceId, name: spaceName, type: 'space' });
    setShowDeleteConfirm(true);
  };

  // Add a new function for handling journal deletion
  const handleDeleteJournal = (e: React.MouseEvent, journalId: string, journalName: string) => {
    e.stopPropagation();
    setItemToDelete({ id: journalId, name: journalName, type: 'journal' });
    setShowDeleteConfirm(true);
  };

  // Find the SpacesList component or section and update it
  const SpacesList = () => {
    const { 
      spaces, 
      currentSpaceId, 
      switchSpace, 
      renameSpace, 
      deleteSpace,
      togglePinSpace,
      resetToAutoNaming
    } = useSpaces();
    const router = useRouter();
    const [editingSpaceId, setEditingSpaceId] = useState<string | null>(null);
    const [editingSpaceName, setEditingSpaceName] = useState('');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<{ id: string; name: string; type: 'journal' | 'space' } | null>(null);
    const [newlyCreatedSpaceId, setNewlyCreatedSpaceId] = useState<string | null>(null);
    
    // Get active spaces (not archived)
    const activeSpaces = spaces.filter(space => !space.archived);
    
    // Sort spaces: pinned first, then by last updated
    const sortedSpaces = [...activeSpaces].sort((a, b) => {
      // First by pinned status
      if (a.metadata?.pinned && !b.metadata?.pinned) return -1;
      if (!a.metadata?.pinned && b.metadata?.pinned) return 1;
      
      // Then by updated date (most recent first)
      return b.updatedAt - a.updatedAt;
    });

    const handleSpaceClick = (e: React.MouseEvent, spaceId: string) => {
      e.preventDefault();
      switchSpace(spaceId);
      router.push(`/space/${spaceId}`);
    };
    
    const handleRenameSpace = (e: React.MouseEvent, spaceId: string, currentName: string) => {
      e.stopPropagation();
      setEditingSpaceId(spaceId);
      setEditingSpaceName(currentName);
    };
    
    const handleFinishRename = (spaceId: string) => {
      if (editingSpaceName.trim()) {
        renameSpace(spaceId, editingSpaceName.trim(), true); // Mark as manually renamed
      }
      setEditingSpaceId(null);
      setEditingSpaceName('');
    };
    
    const handleDeleteSpace = (e: React.MouseEvent, spaceId: string, spaceName: string) => {
      e.stopPropagation();
      setItemToDelete({ id: spaceId, name: spaceName, type: 'space' });
      setShowDeleteConfirm(true);
    };
    
    const handleTogglePin = (e: React.MouseEvent, spaceId: string) => {
      e.stopPropagation();
      togglePinSpace(spaceId);
    };
    
    const focusInputRef = useRef<HTMLInputElement>(null);
    
    // Focus input on edit
    useEffect(() => {
      if (editingSpaceId && focusInputRef.current) {
        focusInputRef.current.focus();
      }
    }, [editingSpaceId]);
    
    return (
      <div className="space-y-0.5 mt-1">
        {sortedSpaces.map(space => (
          <div
            key={space.id}
            className="group relative"
          >
            <div
              className={cn(
                "flex w-full items-center",
                space.id === currentSpaceId
                  ? "bg-emerald-50 dark:bg-emerald-900/20"
                  : ""
              )}
              onClick={e => handleSpaceClick(e, space.id)}
            >
              {editingSpaceId === space.id ? (
                // Editing name
                <div className="flex items-center w-full px-4 py-1">
                  <input
                    ref={focusInputRef}
                    value={editingSpaceName}
                    onChange={e => setEditingSpaceName(e.target.value)}
                    className="w-full px-1 py-0.5 text-sm bg-white dark:bg-neutral-800 border border-emerald-400/60 rounded focus:outline-none"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleFinishRename(space.id);
                      } else if (e.key === 'Escape') {
                        setEditingSpaceId(null);
                      }
                    }}
                    onBlur={() => handleFinishRename(space.id)}
                  />
                </div>
              ) : (
                // Display name
                <button
                  className="w-full text-left px-4 py-1.5 text-sm flex items-center"
                  style={{ 
                    color: space.id === currentSpaceId 
                      ? 'var(--tw-color-emerald-600)' 
                      : 'var(--tw-color-neutral-600)' 
                  }}
                >
                  <div className="flex items-center truncate pl-5">
                    {space.metadata?.pinned && (
                      <Pin className="h-3 w-3 mr-1.5 flex-shrink-0 text-blue-400" />
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
                    <button
                      className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        resetToAutoNaming(space.id);
                      }}
                      title="Reset to auto naming"
                    >
                      <RefreshCw className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                    </button>
                  )}
                  <button
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
                  </button>
                  <button
                    className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRenameSpace(e, space.id, space.name);
                    }}
                    title="Rename space"
                  >
                    <Edit2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                  </button>
                  <button
                    className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteSpace(e, space.id, space.name);
                    }}
                    title="Delete space"
                  >
                    <Trash2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                  </button>
                </div>
              )}
            </div>
            
            {/* Metadata with hover effect */}
            {space.messages.length > 0 && (
              <div 
                className="ml-9 px-4 mt-0 pb-0.5 overflow-hidden transition-all duration-300 max-h-0 opacity-0 transform translate-y-[-5px] group-hover:opacity-100 group-hover:max-h-8 group-hover:mt-0.5 group-hover:translate-y-0"
              >
                <ConversationMetadata space={space} compact={true} className="text-neutral-500 dark:text-neutral-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Add keyframes animations for the modal */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes overlayShow {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(2px); }
        }
      `}</style>
      
      {/* Toggle button that always stays visible */}
      <button
        className={cn(
          "fixed top-24 left-0 z-50 bg-white dark:bg-neutral-900",
          "rounded-r-md p-2 shadow-sm transition-transform duration-200 ease-out",
          "hover:bg-neutral-100 dark:hover:bg-neutral-800"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        style={{ 
          transform: isOpen ? 'translateX(256px)' : 'translateX(0)'
        }}
      >
        {isOpen ? 
          <ChevronLeft className="h-5 w-5 text-neutral-600 dark:text-neutral-400" /> :
          <ChevronRight className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
        }
      </button>
      
      <aside
        className={cn(
          "fixed top-0 left-0 h-screen transition-[width] duration-200 ease-out flex flex-col overflow-hidden",
          "bg-white dark:bg-neutral-900 border-r border-neutral-100 dark:border-neutral-800",
          isOpen ? "w-64 pointer-events-auto" : "w-0 pointer-events-none"
        )}
      >
        {/* Hide content when closed for accessibility and performance */}
        <div className={cn(
          "flex flex-col h-full flex-1 transition-opacity duration-200 ease-out overflow-hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        >
          <div className="p-4 border-b border-neutral-100 dark:border-neutral-800">
            {/* Brand row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                <span className="text-lg font-medium text-neutral-800 dark:text-neutral-200">OpenBook</span>
              </div>
                <Button
                  variant="ghost"
                  size="icon"
                className="h-7 w-7 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  onClick={() => setShowNewMenu(!showNewMenu)}
                  aria-label="New"
                >
                <Plus className="h-4 w-4 text-emerald-500" />
                </Button>
            </div>
            
                {showNewMenu && (
              <div className="absolute right-4 mt-1 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-md z-10 shadow-sm">
                <div className="p-1">
                      <button
                        className="flex items-center gap-2 w-full text-left p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                        onClick={handleCreateSpace}
                      >
                    <FolderPlus className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">New Space</span>
                      </button>
                      <button
                        className="flex items-center gap-2 w-full text-left p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                        onClick={handleCreateJournal}
                      >
                    <PenLine className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">New Journal</span>
                      </button>
                    </div>
                  </div>
                )}
          
            {/* Search button styled like the original input */}
            <div className="relative px-4 mt-4 mb-2">
              <button
                className="w-full flex items-center justify-between px-2 py-1.5 bg-neutral-50 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500 text-sm cursor-text hover:bg-neutral-100 dark:hover:bg-neutral-700/50"
                onClick={() => setShowSearchModal(true)}
              >
                <div className="flex items-center">
                  <Search className="h-3.5 w-3.5 mr-2" />
                  <span>Search...</span>
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-600 font-mono">⌘K</span>
              </button>
            </div>
          </div>

          {/* Content area with sections */}
          <div className="flex-1 overflow-y-auto py-2">
            {/* Journals section */}
            <div className="mb-2">
              <div className="px-4 py-1.5 flex items-center justify-between cursor-pointer" onClick={() => setJournalsOpen(!journalsOpen)}>
                <h3 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wider">JOURNALS</h3>
                <ChevronDown className={cn(
                  "h-4 w-4 text-neutral-400 transition-transform duration-200 ease-in-out",
                  journalsOpen ? "rotate-180" : ""
                )} />
              </div>
              
              {/* New Journal button - always visible */}
              <button
                onClick={handleCreateJournal}
                className="w-full flex items-center gap-2 text-left px-4 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-1"
              >
                <PenLine className="h-3.5 w-3.5 text-neutral-400" />
                <span>New Journal</span>
              </button>
              
              {/* Animate journals dropdown - contains only journal entries */}
              <div className={cn(
                "overflow-hidden transition-all duration-200 ease-in-out",
                journalsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="mt-1 space-y-0.5 pb-1">                  
                  {entries.map((entry) => {
                    const isActive = currentPageType === 'journal' && entry.id === currentPageId;
                    const isEditing = entry.id === editingJournalId;
                    
                    return (
                      <div key={entry.id} className="group relative">
                        <div className={cn(
                          "flex w-full items-center",
                          isActive ? "bg-emerald-50 dark:bg-emerald-900/20" : ""
                        )}>
                          {isEditing ? (
                            // Show input field when editing
                            <div className="flex items-center w-full px-4 py-1">
                              <input
                                type="text"
                                className="w-full px-1 py-0.5 text-sm bg-white dark:bg-neutral-800 border border-emerald-400/60 rounded focus:outline-none"
                                value={editingJournalTitle}
                                onChange={(e) => setEditingJournalTitle(e.target.value)}
                                autoFocus
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    const defaultTitle = `Journal - ${new Date().toLocaleDateString()}`;
                                    const title = editingJournalTitle.trim() || defaultTitle;
                                    updateEntry(entry.id, { title });
                                    setEditingJournalId(null);
                                    
                                    // Navigate to the newly created journal
                                    if (newlyCreatedJournalId === entry.id) {
                                      router.push(`/journal/${entry.id}`);
                                      setNewlyCreatedJournalId(null);
                                    }
                                  } else if (e.key === 'Escape') {
                                    setEditingJournalId(null);
                                  }
                                }}
                                onBlur={() => {
                                  const defaultTitle = `Journal - ${new Date().toLocaleDateString()}`;
                                  const title = editingJournalTitle.trim() || defaultTitle;
                                  updateEntry(entry.id, { title });
                                  setEditingJournalId(null);
                                  
                                  // Navigate to the newly created journal
                                  if (newlyCreatedJournalId === entry.id) {
                                    router.push(`/journal/${entry.id}`);
                                    setNewlyCreatedJournalId(null);
                                  }
                                }}
                              />
                            </div>
                          ) : (
                            // Show regular button when not editing
                            <button
                              onClick={() => router.push(`/journal/${entry.id}`)}
                              className="w-full text-left px-4 py-1.5 text-sm flex items-center"
                              style={{ color: isActive ? 'var(--tw-color-emerald-600)' : 'var(--tw-color-neutral-600)' }}
                            >
                              <span className="truncate pl-5 font-medium">{entry.title}</span>
                            </button>
                          )}
                          
                          {!isEditing && (
                            <div className="absolute right-2 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEditingJournalId(entry.id);
                                  setEditingJournalTitle(entry.title);
                                }}
                                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                aria-label="Rename journal"
                              >
                                <Edit2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                              </button>
                              <button 
                                onClick={(e) => handleDeleteJournal(e, entry.id, entry.title)}
                                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                aria-label="Delete journal"
                              >
                                <Trash2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Timestamp with hover effect */}
                        <div 
                          className="ml-9 px-4 mt-0 pb-0.5 overflow-hidden transition-all duration-300 max-h-0 opacity-0 transform translate-y-[-5px] group-hover:opacity-100 group-hover:max-h-8 group-hover:mt-0.5 group-hover:translate-y-0"
                        >
                          <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                            <Clock className="h-2.5 w-2.5 mr-0.5" />
                            <span>{format(new Date(entry.updatedAt), 'MMM d, yyyy')}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Spaces section */}
            <div className="mb-2">
              <div className="px-4 py-1.5 flex items-center justify-between cursor-pointer" onClick={() => setSpacesOpen(!spacesOpen)}>
                <h3 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wider">SPACES</h3>
                <ChevronDown className={cn(
                  "h-4 w-4 text-neutral-400 transition-transform duration-200 ease-in-out",
                  spacesOpen ? "rotate-180" : ""
                )} />
              </div>
              
              {/* New Space button - always visible */}
              <button
                onClick={handleCreateSpace}
                className="w-full flex items-center gap-2 text-left px-4 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-1"
              >
                <FolderPlus className="h-3.5 w-3.5 text-neutral-400" />
                <span>New Space</span>
              </button>
              
              {/* Animate spaces dropdown - contains only space entries */}
              <div className={cn(
                "overflow-hidden transition-all duration-200 ease-in-out",
                spacesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="space-y-0.5 mt-1">
                  {/* Filter non-archived spaces and sort them */}
                  {spaces
                    .filter(space => !space.archived)
                    .sort((a, b) => {
                      // Sort by pinned status first
                      if (a.metadata?.pinned && !b.metadata?.pinned) return -1;
                      if (!a.metadata?.pinned && b.metadata?.pinned) return 1;
                      // Then by updated date
                      return b.updatedAt - a.updatedAt;
                    })
                    .map(space => (
                      <div 
                        key={space.id}
                        className="group relative"
                      >
                        <div
                          className={cn(
                            "flex w-full items-center",
                            space.id === currentPageId
                              ? "bg-emerald-50 dark:bg-emerald-900/20"
                              : ""
                          )}
                          onClick={() => {
                            if (currentPageType !== 'space' || currentPageId !== space.id) {
                              switchSpace(space.id);
                              router.push(`/space/${space.id}`);
                            }
                          }}
                        >
                          {editingSpaceId === space.id ? (
                            <div className="flex items-center w-full px-4 py-1">
                              <input
                                ref={editingSpaceId === space.id && newlyCreatedSpaceId === space.id ? focusInputRef : null}
                                value={editingSpaceName}
                                onChange={(e) => setEditingSpaceName(e.target.value)}
                                onBlur={() => {
                                  if (editingSpaceName.trim()) {
                                    renameSpace(space.id, editingSpaceName.trim(), true); // Mark as manually renamed
                                  }
                                  setEditingSpaceId(null);
                                }}
                                className="w-full px-1 py-0.5 text-sm bg-white dark:bg-neutral-800 border border-emerald-400/60 rounded focus:outline-none"
                                autoFocus
                              />
                            </div>
                          ) : (
                            <button
                              className="w-full text-left px-4 py-1.5 text-sm flex items-center"
                              style={{ 
                                color: space.id === currentPageId 
                                  ? 'var(--tw-color-emerald-600)' 
                                  : 'var(--tw-color-neutral-600)' 
                              }}
                            >
                              <div className="flex items-center truncate pl-5">
                                {space.metadata?.pinned && (
                                  <Pin className="h-3 w-3 mr-1.5 flex-shrink-0 text-blue-400" />
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
                                <button
                                  className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    resetToAutoNaming(space.id);
                                  }}
                                  title="Reset to auto naming"
                                >
                                  <RefreshCw className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                                </button>
                              )}
                              <button
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
                              </button>
                              <button
                                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRenameSpace(e, space.id, space.name);
                                }}
                                title="Rename space"
                              >
                                <Edit2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                              </button>
                              <button
                                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteSpace(e, space.id, space.name);
                                }}
                                title="Delete space"
                              >
                                <Trash2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                              </button>
                            </div>
                          )}
                        </div>
                        
                        {/* Metadata with hover effect */}
                        {space.messages.length > 0 && (
                          <div 
                            className="ml-9 px-4 mt-0 pb-0.5 overflow-hidden transition-all duration-300 max-h-0 opacity-0 transform translate-y-[-5px] group-hover:opacity-100 group-hover:max-h-8 group-hover:mt-0.5 group-hover:translate-y-0"
                          >
                            <ConversationMetadata space={space} compact={true} className="text-neutral-500 dark:text-neutral-400" />
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-neutral-100 dark:border-neutral-800 py-3 px-4">
            <div className="space-y-1">
              <button className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">
              <Settings className="h-4 w-4 text-neutral-400" />
                <span>Settings</span>
              </button>
              <Link href="https://x.com/GoOpenBook" target="_blank" className="block">
                <button className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">
                  <MessageSquare className="h-4 w-4 text-neutral-400" />
                  <span>Follow on X</span>
              </button>
            </Link>
              <button className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">
              <Flag className="h-4 w-4 text-neutral-400" />
                <span>Report Bug</span>
            </button>
              <button className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">
              <HelpCircle className="h-4 w-4 text-neutral-400" />
                <span>Help</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Add the search modal */}
      {showSearchModal && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-50 flex items-center justify-center p-4" 
          onClick={() => {
            setShowSearchModal(false);
            setSearchQuery('');
            setShowSearchResults(false);
          }}
          style={{ animation: 'overlayShow 0.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div 
            className="bg-white dark:bg-neutral-900 rounded-md shadow-sm max-w-md w-full transform transition-all ease-out duration-300 border border-neutral-200 dark:border-neutral-800"
            style={{ animation: 'fadeIn 0.2s ease-out' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                <Input 
                  ref={searchInputRef}
                  placeholder="Search..." 
                  className="pl-9 h-9 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 rounded-md focus-visible:ring-emerald-500/30 focus-visible:ring-offset-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {searchQuery && (
                  <button 
                    className="absolute right-2 top-2.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                    onClick={() => {
                      setSearchQuery('');
                      setShowSearchResults(false);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              {/* Search Results */}
              <div className="mt-3 max-h-64 overflow-y-auto">
                {searchQuery.trim().length > 0 ? (
                  <>
                    {searchResults.journals.length === 0 && searchResults.spaces.length === 0 ? (
                      <div className="p-3 text-sm text-neutral-500 dark:text-neutral-400 text-center">
                        No results found
                      </div>
                    ) : (
                      <>
                        {searchResults.journals.length > 0 && (
                          <div className="mb-3">
                            <div className="px-1 py-1 text-xs font-medium text-emerald-500/70 dark:text-emerald-400/70 tracking-wider">
                              Journals
                            </div>
                            <div className="space-y-1">
                              {searchResults.journals.map(journal => (
                                <button
                                  key={journal.id}
                                  className="flex flex-col w-full text-left px-2 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
                                  onClick={() => {
                                    handleSearchItemClick('journal', journal.id);
                                    setShowSearchModal(false);
                                  }}
                                >
                                  <div className="flex items-center">
                                    <PenLine className="h-3.5 w-3.5 text-neutral-400 mr-2 flex-shrink-0" />
                                    <span className="font-medium truncate">{journal.title}</span>
                                  </div>
                                  {journal.preview && (
                                    <div className="ml-5 mt-1 text-xs text-neutral-500 dark:text-neutral-500 line-clamp-1">
                                      {journal.preview}
                                    </div>
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {searchResults.spaces.length > 0 && (
                          <div>
                            <div className="px-1 py-1 text-xs font-medium text-emerald-500/70 dark:text-emerald-400/70 tracking-wider">
                              Spaces
                            </div>
                            <div className="space-y-1">
                              {searchResults.spaces.map(space => (
                                <button
                                  key={space.id}
                                  className="flex flex-col w-full text-left px-2 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
                                  onClick={() => {
                                    handleSearchItemClick('space', space.id);
                                    setShowSearchModal(false);
                                  }}
                                >
                                  <div className="flex items-center">
                                    <span className="w-3 h-3 rounded-sm bg-neutral-200 dark:bg-neutral-700 mr-2 flex-shrink-0"></span>
                                    <span className="font-medium truncate">{space.name}</span>
                                  </div>
                                  {space.preview && (
                                    <div className="ml-5 mt-1 text-xs text-neutral-500 dark:text-neutral-500 line-clamp-1">
                                      {space.preview}
                                    </div>
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <div className="py-8 text-sm text-neutral-500 dark:text-neutral-400 text-center">
                    Type to search journals and spaces
                  </div>
                )}
              </div>
            </div>
            
            <div className="border-t border-neutral-100 dark:border-neutral-800 p-2 flex justify-end">
              <button
                className="px-2 py-1 text-xs rounded text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                onClick={() => {
                  setShowSearchModal(false);
                  setSearchQuery('');
                }}
              >
                ESC
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Add the delete confirmation dialog */}
      {showDeleteConfirm && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50 flex items-center justify-center p-4" 
          onClick={() => setShowDeleteConfirm(false)}
          style={{ animation: 'overlayShow 0.15s ease-out' }}
        >
          <div 
            className="bg-white dark:bg-neutral-900 rounded-md shadow-md max-w-xs w-full transform transition-all ease-out duration-300 scale-100 opacity-100 border border-neutral-100 dark:border-neutral-800"
            style={{ animation: 'fadeIn 0.2s ease-out' }}
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
                <button
                  className="px-3 py-1.5 text-xs font-medium rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
                  onClick={() => setShowDeleteConfirm(false)}
                  autoFocus
                >
                  Cancel
                </button>
                <button
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
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 