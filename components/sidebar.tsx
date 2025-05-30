"use client";

import { useState, useEffect, useRef } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Plus, Search, PenLine, ChevronDown, Settings, Crown, MessageSquare, Flag, HelpCircle, LogOut, FolderPlus, Trash2, Edit2, MoreHorizontal, X, Pin, PinOff, RefreshCw, Clock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useSpaces, Space as SpaceType } from '@/contexts/SpacesContext';
import { useNotebooks } from '@/contexts/NotebookContext';
import { useRouter } from 'next/navigation';
import { useJournal } from '@/hooks/useJournal';
import { cn } from '@/lib/utils';
import { ConversationMetadata } from '@/components/conversation-metadata';
import { ConversationNameDisplay, NameLoading } from '@/components/name-loading';
import { format } from 'date-fns';
import SidebarNotebook from '@/components/SidebarNotebook';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [initialExpansionDone, setInitialExpansionDone] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: string; name: string; type: 'journal' | 'space' } | null>(null);
  const [searchResults, setSearchResults] = useState<{
    journals: { id: string; title: string; preview?: string; matchType: string }[];
    spaces: { id: string; name: string; preview?: string; matchType: string }[];
  }>({ journals: [], spaces: [] });
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const { notebooks, createNotebook } = useNotebooks();
  const { entries, deleteEntry } = useJournal();
  const { spaces, switchSpace, deleteSpace } = useSpaces();
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

  // Update handleCreateNotebook
  const handleCreateNotebook = () => {
    setShowNewMenu(false);
    const defaultName = `Notebook ${notebooks.length + 1}`;
    createNotebook(defaultName);
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
                        onClick={handleCreateNotebook}
                      >
                    <BookOpen className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">New Notebook</span>
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

          {/* Content area with notebooks */}
          <div className="flex-1 overflow-y-auto py-2">
            {/* Notebooks section */}
            <div className="mb-2">
              <AnimatePresence mode="wait">
                {/* Check if any notebook is expanded */}
                {notebooks.some(notebook => notebook.isExpanded) ? (
                  // Show only the expanded notebook with animation
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {notebooks
                      .filter(notebook => notebook.isExpanded)
                      .map(notebook => (
                        <SidebarNotebook
                          key={notebook.id}
                          notebook={notebook}
                          currentPageType={currentPageType}
                          currentPageId={currentPageId}
                        />
                      ))}
                  </motion.div>
                ) : (
                  // Show all notebooks when none are expanded with animation
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 py-1.5 flex items-center justify-between">
                      <h3 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wider">NOTEBOOKS</h3>
                    </div>
                    
                    {/* Notebooks list */}
                    <div className="space-y-0.5">
                      {notebooks.map((notebook, index) => (
                        <motion.div
                          key={notebook.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.2, 
                            delay: index * 0.05,
                            ease: "easeOut" 
                          }}
                        >
                          <SidebarNotebook
                            notebook={notebook}
                            currentPageType={currentPageType}
                            currentPageId={currentPageId}
                          />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* New Notebook button */}
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: notebooks.length * 0.05 + 0.1 }}
                      onClick={handleCreateNotebook}
                      className="w-full flex items-center gap-2 text-left px-4 py-1.5 mt-1 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                    >
                      <BookOpen className="h-3.5 w-3.5 text-neutral-400" />
                      <span>New Notebook</span>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
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