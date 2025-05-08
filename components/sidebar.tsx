"use client";

import { useState, useEffect, useRef } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Plus, Search, PenLine, ChevronDown, Settings, Crown, MessageSquare, Flag, HelpCircle, LogOut, FolderPlus, Trash2, Edit2, MoreHorizontal, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useSpaces, Space as SpaceType } from '@/contexts/SpacesContext';
import { useRouter } from 'next/navigation';
import { useJournal } from '@/hooks/useJournal';
import { cn } from '@/lib/utils';

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
    journals: { id: string; title: string; match: string }[];
    spaces: { id: string; name: string; match: string }[];
  }>({ journals: [], spaces: [] });
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const { spaces, currentSpaceId, createSpace, switchSpace, deleteSpace, renameSpace } = useSpaces();
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

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      // Search logic
      const query = searchQuery.toLowerCase().trim();
      
      // Search in journals
      const matchingJournals = entries.filter(entry => 
        entry.title.toLowerCase().includes(query)
      ).map(entry => ({
        id: entry.id,
        title: entry.title,
        match: 'title',
      }));
      
      // Search in spaces
      const matchingSpaces = spaces.filter(space => 
        space.name.toLowerCase().includes(query)
      ).map(space => ({
        id: space.id,
        name: space.name,
        match: 'name',
      }));
      
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

  // Update handleCreateJournal
  const handleCreateJournal = () => {
    setShowNewMenu(false);
    // Create entry with default "Untitled" name without showing a prompt
    const newEntry = createEntry("Untitled");
    // Set this new entry to be in editing mode immediately without navigating
    setEditingJournalId(newEntry.id);
    setEditingJournalTitle("Untitled");
    // Track that this is a newly created journal
    setNewlyCreatedJournalId(newEntry.id);
    // Don't navigate - let the user rename first
    // The user can click on the item later to navigate to it
  };

  // Update handleCreateSpace
  const handleCreateSpace = () => {
    setShowNewMenu(false);
    // Create space with default "Untitled" name without showing a prompt
    const newSpaceId = createSpace("Untitled");
    // Set this new space to be in editing mode immediately without navigating
    setEditingSpaceId(newSpaceId);
    setEditingSpaceName("Untitled");
    // Track that this is a newly created space
    setNewlyCreatedSpaceId(newSpaceId);
    // Don't navigate - let the user rename first
    // The user can click on the item later to navigate to it
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

  return (
    <>
      {/* Add keyframes animations for the modal */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes overlayShow {
          from { opacity: 0; }
          to { opacity: 1; }
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
            
            {/* Updated Search */}
            <div className="relative mt-4">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-neutral-400" />
              <Input 
                ref={searchInputRef}
                placeholder="Search" 
                className="pl-8 h-9 bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  if (searchQuery.trim().length > 0) {
                    setShowSearchResults(true);
                  }
                }}
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
              
              {/* Search Results Popup */}
              {showSearchResults && (
                <div 
                  ref={searchResultsRef}
                  className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md shadow-md z-10 max-h-64 overflow-y-auto"
                >
                  {searchResults.journals.length === 0 && searchResults.spaces.length === 0 ? (
                    <div className="p-3 text-sm text-neutral-500 dark:text-neutral-400 text-center">
                      No results found
                    </div>
                  ) : (
                    <>
                      {searchResults.journals.length > 0 && (
                        <div className="p-1">
                          <div className="px-2 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                            Journals
                          </div>
                          {searchResults.journals.map(journal => (
                            <button
                              key={journal.id}
                              className="flex items-center w-full text-left px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
                              onClick={() => handleSearchItemClick('journal', journal.id)}
                            >
                              <PenLine className="h-3.5 w-3.5 text-neutral-400 mr-2" />
                              <span className="truncate">{journal.title}</span>
                            </button>
                          ))}
                        </div>
                      )}
                      
                      {searchResults.spaces.length > 0 && (
                        <div className="p-1">
                          <div className="px-2 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                            Spaces
                          </div>
                          {spaces.map((space: SpaceType) => {
                            const isActive = currentPageType === 'space' && space.id === currentPageId;
                            const isEditing = space.id === editingSpaceId;
                            
                            return (
                              <div key={space.id} className="group relative">
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
                                        value={editingSpaceName}
                                        onChange={(e) => setEditingSpaceName(e.target.value)}
                                        autoFocus
                                        onKeyDown={(e) => {
                                          if (e.key === 'Enter') {
                                            if (editingSpaceName.trim() && editingSpaceName.trim() !== '') {
                                              renameSpace(space.id, editingSpaceName.trim());
                                              if (newlyCreatedSpaceId === space.id) {
                                                switchSpace(space.id);
                                                router.push(`/space/${space.id}`);
                                                setNewlyCreatedSpaceId(null);
                                              }
                                            }
                                            setEditingSpaceId(null);
                                          } else if (e.key === 'Escape') {
                                            setEditingSpaceId(null);
                                          }
                                        }}
                                        onBlur={() => {
                                          if (editingSpaceName.trim() && editingSpaceName.trim() !== '') {
                                            renameSpace(space.id, editingSpaceName.trim());
                                            if (newlyCreatedSpaceId === space.id) {
                                              switchSpace(space.id);
                                              router.push(`/space/${space.id}`);
                                              setNewlyCreatedSpaceId(null);
                                            }
                                          }
                                          setEditingSpaceId(null);
                                        }}
                                      />
                                    </div>
                                  ) : (
                                    // Show regular button when not editing
                                    <button
                                      onClick={() => {
                                        switchSpace(space.id)
                                        router.push(`/space/${space.id}`)
                                      }}
                                      className="w-full text-left px-4 py-1.5 text-sm flex items-center"
                                      style={{ color: isActive ? 'var(--tw-color-emerald-600)' : 'var(--tw-color-neutral-600)' }}
                                    >
                                      <span className="truncate pl-5 font-normal">{space.name}</span>
                                    </button>
                                  )}
                                  
                                  {!isEditing && (
                                    <div className="absolute right-2 flex items-center gap-0.5 opacity-0 group-hover:opacity-100">
                                      <button 
                                        onClick={(e) => handleRenameSpace(e, space.id, space.name)}
                                        className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                        aria-label="Rename space"
                                      >
                                        <Edit2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                                      </button>
                                      <button 
                                        onClick={(e) => handleDeleteSpace(e, space.id, space.name)}
                                        className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                        aria-label="Delete space"
                                        disabled={currentPageType === 'space' && space.id === currentPageId}
                                        title={currentPageType === 'space' && space.id === currentPageId ? "Cannot delete the current space" : "Delete space"}
                                      >
                                        <Trash2 className={cn("h-3 w-3", 
                                          currentPageType === 'space' && space.id === currentPageId 
                                            ? "text-neutral-300 dark:text-neutral-600" 
                                            : "text-neutral-500 dark:text-neutral-400"
                                        )} />
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
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
                                    updateEntry(entry.id, { title: editingJournalTitle.trim() });
                                    if (newlyCreatedJournalId === entry.id) {
                                      router.push(`/journal/${entry.id}`);
                                      setNewlyCreatedJournalId(null);
                                    }
                                    setEditingJournalId(null);
                                  } else if (e.key === 'Escape') {
                                    setEditingJournalId(null);
                                  }
                                }}
                                onBlur={() => {
                                  updateEntry(entry.id, { title: editingJournalTitle.trim() });
                                  if (newlyCreatedJournalId === entry.id) {
                                    router.push(`/journal/${entry.id}`);
                                    setNewlyCreatedJournalId(null);
                                  }
                                  setEditingJournalId(null);
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
                              <span className="truncate pl-5 font-normal">{entry.title}</span>
                            </button>
                          )}
                          
                          {!isEditing && (
                            <div className="absolute right-2 flex items-center gap-0.5 opacity-0 group-hover:opacity-100">
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
                <div className="mt-1 space-y-0.5 pb-1">                  
                  {spaces.map((space: SpaceType) => {
                    const isActive = currentPageType === 'space' && space.id === currentPageId;
                    const isEditing = space.id === editingSpaceId;
                    
                    return (
                      <div key={space.id} className="group relative">
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
                                value={editingSpaceName}
                                onChange={(e) => setEditingSpaceName(e.target.value)}
                                autoFocus
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    if (editingSpaceName.trim() && editingSpaceName.trim() !== '') {
                                      renameSpace(space.id, editingSpaceName.trim());
                                      if (newlyCreatedSpaceId === space.id) {
                                        switchSpace(space.id);
                                        router.push(`/space/${space.id}`);
                                        setNewlyCreatedSpaceId(null);
                                      }
                                    }
                                    setEditingSpaceId(null);
                                  } else if (e.key === 'Escape') {
                                    setEditingSpaceId(null);
                                  }
                                }}
                                onBlur={() => {
                                  if (editingSpaceName.trim() && editingSpaceName.trim() !== '') {
                                    renameSpace(space.id, editingSpaceName.trim());
                                    if (newlyCreatedSpaceId === space.id) {
                                      switchSpace(space.id);
                                      router.push(`/space/${space.id}`);
                                      setNewlyCreatedSpaceId(null);
                                    }
                                  }
                                  setEditingSpaceId(null);
                                }}
                              />
                            </div>
                          ) : (
                            // Show regular button when not editing
                            <button
                              onClick={() => {
                                switchSpace(space.id)
                                router.push(`/space/${space.id}`)
                              }}
                              className="w-full text-left px-4 py-1.5 text-sm flex items-center"
                              style={{ color: isActive ? 'var(--tw-color-emerald-600)' : 'var(--tw-color-neutral-600)' }}
                            >
                              <span className="truncate pl-5 font-normal">{space.name}</span>
                            </button>
                          )}
                          
                          {!isEditing && (
                            <div className="absolute right-2 flex items-center gap-0.5 opacity-0 group-hover:opacity-100">
                              <button 
                                onClick={(e) => handleRenameSpace(e, space.id, space.name)}
                                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                aria-label="Rename space"
                              >
                                <Edit2 className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                              </button>
                              <button 
                                onClick={(e) => handleDeleteSpace(e, space.id, space.name)}
                                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                aria-label="Delete space"
                                disabled={currentPageType === 'space' && space.id === currentPageId}
                                title={currentPageType === 'space' && space.id === currentPageId ? "Cannot delete the current space" : "Delete space"}
                              >
                                <Trash2 className={cn("h-3 w-3", 
                                  currentPageType === 'space' && space.id === currentPageId 
                                    ? "text-neutral-300 dark:text-neutral-600" 
                                    : "text-neutral-500 dark:text-neutral-400"
                                )} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
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
                Delete "{itemToDelete?.name}"? This cannot be undone.
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