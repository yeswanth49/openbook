"use client";

import { useState, useEffect, useRef } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Plus, Search, PenLine, ChevronDown, Settings, Crown, MessageSquare, Flag, HelpCircle, LogOut, FolderPlus, Trash2, Edit2, MoreHorizontal, X, Pin, PinOff, RefreshCw, Clock, Star } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useSpaces, Space as SpaceType } from '@/contexts/SpacesContext';
import { useNotebooks } from '@/contexts/NotebookContext';
import { useRouter, usePathname } from 'next/navigation';
import { useJournal } from '@/hooks/useJournal';
import { cn } from '@/lib/utils';
import { ConversationMetadata } from '@/components/conversation-metadata';
import { ConversationNameDisplay, NameLoading } from '@/components/name-loading';
import { format } from 'date-fns';
import SidebarNotebook from '@/components/SidebarNotebook';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@/contexts/UserContext';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

// Define consistent animation settings used throughout the site
const animationConfig = {
  // Standard transition presets
  transition: {
    ease: [0.25, 0.1, 0.25, 1], // Standard cubic bezier
    duration: 0.3  // Standard duration
  },

  // Spring configuration
  spring: {
    type: 'spring',
    stiffness: 500,  // Increased for faster animation
    damping: 40      // Balanced for less bounce but still responsive
  },

  // Fade in/out preset
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.15 } // Faster fade
  },
  
  // Hover animation preset
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  
  // Tap animation preset
  tap: {
    scale: 0.98
  }
};

// Sidebar variants
const sidebarVariants = {
  open: (isMobile: boolean) => ({
    width: isMobile ? '80%' : '256px',
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 40,
      duration: 0.2 // Limit maximum duration
    }
  }),
  closed: {
    width: '0px',
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 40,
      duration: 0.2, // Limit maximum duration
      when: "afterChildren"
    }
  }
};

// Content variants
const contentVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.05, // Reduced delay
      duration: 0.15, // Faster fade in
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.1, // Faster fade out
    }
  }
};

// Backdrop variants
const backdropVariants = {
  open: {
    opacity: 1,
    backdropFilter: 'blur(2px)',
    transition: {
      duration: 0.15, // Faster transition
    }
  },
  closed: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: {
      duration: 0.1, // Faster transition
    }
  }
};

// Toggle button variants
const toggleButtonVariants = {
  open: (isMobile: boolean) => ({
    x: isMobile ? 0 : 256,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 40,
      duration: 0.2 // Limit maximum duration
    }
  }),
  closed: {
    x: 0,
    rotate: 180,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 40,
      duration: 0.2 // Limit maximum duration
    }
  }
};

// Modal variants
const modalVariants = {
  initial: { opacity: 0, scale: 0.98, y: 5 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 0.15 // Faster animation
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.98, 
    y: 5,
    transition: {
      duration: 0.1 // Faster exit
    }
  }
};

// List item variants
const itemVariants = {
  initial: { opacity: 0, y: 3 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.15 // Faster animation
    }
  },
  exit: {
    opacity: 0,
    y: 3,
    transition: {
      duration: 0.1 // Faster exit
    }
  }
};

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [initialExpansionDone, setInitialExpansionDone] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: string; name: string; type: 'journal' | 'space' } | null>(null);
  const [showClearDataConfirm, setShowClearDataConfirm] = useState(false);
  const [searchResults, setSearchResults] = useState<{
    journals: { id: string; title: string; preview?: string; matchType: string }[];
    spaces: { id: string; name: string; preview?: string; matchType: string }[];
  }>({ journals: [], spaces: [] });
  const [isMobile, setIsMobile] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const { notebooks, createNotebook } = useNotebooks();
  const { entries, deleteEntry } = useJournal();
  const { spaces, switchSpace, deleteSpace } = useSpaces();
  const router = useRouter();
  const pathname = usePathname();
  const { premium, setPremium } = useUser();

  // Get current path and parse current page type and ID
  const currentPageType = pathname?.startsWith('/journal/') 
    ? 'journal' 
    : pathname?.startsWith('/space/') 
      ? 'space' 
      : '';
  
  const currentPageId = currentPageType === 'journal' && pathname
    ? pathname.split('/journal/')[1]?.split(/[/?#]/)[0] || ''
    : currentPageType === 'space' && pathname
      ? pathname.split('/space/')[1]?.split(/[/?#]/)[0] || ''
      : '';
  
  // Detect path changes and ensure sidebar state is preserved
  const lastPathRef = useRef(pathname);
  useEffect(() => {
    // If path changed, ensure we're using the stored sidebar state
    if (pathname !== lastPathRef.current && typeof window !== 'undefined') {
      const savedState = localStorage.getItem('sidebar-isOpen');
      if (savedState !== null) {
        setIsOpen(savedState === 'true');
      }
      lastPathRef.current = pathname;
    }
  }, [pathname, setIsOpen]);

  // Persist sidebar state to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebar-isOpen', String(isOpen));
    }
  }, [isOpen]);

  // Initialize sidebar state from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('sidebar-isOpen');
      if (savedState !== null) {
        setIsOpen(savedState === 'true');
      }
    }
  }, []);
  
  // Only expand sections on initial page load, not when manually collapsed
  useEffect(() => {
    if (!initialExpansionDone) {
      setInitialExpansionDone(true);
    }
  }, [currentPageType, initialExpansionDone]);

  // Add a media query to detect mobile screens
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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

  // Handle backdrop click to close sidebar on mobile
  const handleBackdropClick = () => {
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };

  // Handle clear all local data
  const handleClearAllData = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <>
      {/* Mobile backdrop overlay */}
      <AnimatePresence mode="wait">
        {isMobile && isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>
      
      {/* Toggle button that always stays visible */}
      <motion.button
        className={cn(
          "fixed top-24 left-0 z-50 bg-white dark:bg-neutral-900",
          "rounded-r-md p-2 shadow-sm",
          "hover:bg-neutral-100 dark:hover:bg-neutral-800 opacity-40 hover:opacity-90"
        )}
        onClick={() => {
          const newState = !isOpen;
          setIsOpen(newState);
          // Explicitly update localStorage when toggling
          if (typeof window !== 'undefined') {
            localStorage.setItem('sidebar-isOpen', String(newState));
          }
        }}
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        custom={isMobile}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={toggleButtonVariants}
      >
        <ChevronLeft className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
      </motion.button>
      
      <motion.aside
        className={cn(
          "fixed top-0 left-0 h-screen z-50 flex flex-col overflow-hidden",
          "bg-white dark:bg-neutral-900 border-r border-neutral-100 dark:border-neutral-800",
          isMobile ? "max-w-xs" : ""
        )}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        custom={isMobile}
        variants={sidebarVariants}
      >
        {/* Content container with animation */}
        <motion.div 
          className="flex flex-col h-full flex-1 overflow-hidden"
          variants={contentVariants}
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
            
            <AnimatePresence>
              {showNewMenu && (
                <motion.div 
                  className="absolute right-4 mt-1 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-md z-10 shadow-sm"
                  {...animationConfig.fade}
                >
                  <div className="p-1">
                    <motion.button
                      whileHover={{ x: 2 }}
                      whileTap={animationConfig.tap}
                      className="flex items-center gap-2 w-full text-left p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                      onClick={handleCreateNotebook}
                    >
                      <BookOpen className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">New Notebook</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          
            {/* Search button styled like the original input */}
            <div className="relative px-4 mt-4 mb-2">
              <motion.button
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}
                whileTap={animationConfig.tap}
                className="w-full flex items-center justify-between px-2 py-1.5 bg-neutral-50 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500 text-sm cursor-text hover:bg-neutral-100 dark:hover:bg-neutral-700/50"
                onClick={() => setShowSearchModal(true)}
              >
                <div className="flex items-center">
                  <Search className="h-3.5 w-3.5 mr-2" />
                  <span>Search...</span>
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-600 font-mono">⌘K</span>
              </motion.button>
            </div>
          </div>

          {/* Content area with notebooks */}
          <div className="flex-1 overflow-y-auto py-2">
            {/* Notebooks section */}
            <div className="mb-2">
              {/* Check if any notebook is expanded */}
              {notebooks.some(notebook => notebook.isExpanded) ? (
                // Show only the expanded notebook
                <div>
                  {notebooks
                    .filter(notebook => notebook.isExpanded)
                    .map(notebook => (
                      <SidebarNotebook
                        key={notebook.id}
                        notebook={notebook}
                        currentPageType={currentPageType}
                        currentPageId={currentPageId}
                        animationConfig={animationConfig}
                      />
                    ))}
                </div>
              ) : (
                // Show all notebooks when none are expanded
                <div>
                  <div className="px-4 py-1.5 flex items-center justify-between">
                    <h3 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wider">NOTEBOOKS</h3>
                  </div>
                  
                  {/* Notebooks list with animations */}
                  <div className="space-y-0.5">
                    {notebooks.map((notebook) => (
                      <motion.div 
                        key={notebook.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <SidebarNotebook
                          notebook={notebook}
                          currentPageType={currentPageType}
                          currentPageId={currentPageId}
                          animationConfig={animationConfig}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* New Notebook button */}
                  <motion.button
                    whileHover={{ x: 2 }}
                    whileTap={animationConfig.tap}
                    onClick={handleCreateNotebook}
                    className="w-full flex items-center gap-2 text-left px-4 py-1.5 mt-1 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <BookOpen className="h-3.5 w-3.5 text-neutral-400" />
                    <span>New Notebook</span>
                  </motion.button>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-neutral-100 dark:border-neutral-800 py-3 px-4">
            <div className="space-y-1">
              <motion.button 
                whileHover={{ x: 2 }}
                whileTap={animationConfig.tap}
                className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              >
                <Settings className="h-4 w-4 text-neutral-400" />
                <span>Settings</span>
              </motion.button>
              <Link href="https://x.com/GoOpenBook" target="_blank" className="block">
                <motion.button 
                  whileHover={{ x: 2 }}
                  whileTap={animationConfig.tap}
                  className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                >
                  <MessageSquare className="h-4 w-4 text-neutral-400" />
                  <span>Follow on X</span>
                </motion.button>
              </Link>
              <motion.button 
                whileHover={{ x: 2 }}
                whileTap={animationConfig.tap}
                className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              >
                <Flag className="h-4 w-4 text-neutral-400" />
                <span>Report Bug</span>
              </motion.button>
              <motion.button 
                whileHover={{ x: 2 }}
                whileTap={animationConfig.tap}
                className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              >
                <HelpCircle className="h-4 w-4 text-neutral-400" />
                <span>Help</span>
              </motion.button>
              <motion.button 
                whileHover={{ x: 2 }}
                whileTap={animationConfig.tap}
                onClick={() => setShowClearDataConfirm(true)}
                className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-red-600 dark:text-red-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
                <span>Delete all local data</span>
              </motion.button>
              <motion.button 
                whileHover={{ x: 2 }}
                whileTap={animationConfig.tap}
                onClick={() => setPremium(!premium)}
                className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              >
                <Star className="h-4 w-4 text-neutral-400" />
                <span>{premium ? "Disable Premium" : "Enable Premium"}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.aside>

      {/* Add the search modal with improved animations */}
      <AnimatePresence>
        {showSearchModal && (
          <motion.div 
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-50 flex items-center justify-center p-4" 
            onClick={() => {
              setShowSearchModal(false);
              setSearchQuery('');
              setShowSearchResults(false);
            }}
            {...animationConfig.fade}
          >
            <motion.div 
              className="bg-white dark:bg-neutral-900 rounded-md shadow-sm max-w-md w-full border border-neutral-200 dark:border-neutral-800"
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
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
                
                {/* Search Results with animation */}
                <div className="mt-3 max-h-64 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {searchQuery.trim().length > 0 ? (
                      <motion.div
                        key="results"
                        {...animationConfig.fade}
                      >
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
                                    <motion.button
                                      key={journal.id}
                                      initial="initial"
                                      animate="animate"
                                      exit="exit"
                                      variants={itemVariants}
                                      whileHover={{ x: 2 }}
                                      whileTap={animationConfig.tap}
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
                                    </motion.button>
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
                                  {searchResults.spaces.map((space, index) => (
                                    <motion.button
                                      key={space.id}
                                      initial="initial"
                                      animate="animate" 
                                      exit="exit"
                                      variants={itemVariants}
                                      transition={{ delay: index * 0.03 }}
                                      whileHover={{ x: 2 }}
                                      whileTap={animationConfig.tap}
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
                                    </motion.button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="empty"
                        {...animationConfig.fade}
                        className="py-8 text-sm text-neutral-500 dark:text-neutral-400 text-center"
                      >
                        Type to search journals and spaces
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              <div className="border-t border-neutral-100 dark:border-neutral-800 p-2 flex justify-end">
                <motion.button
                  whileHover={{ x: 2 }}
                  whileTap={animationConfig.tap}
                  className="px-2 py-1 text-xs rounded text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                  onClick={() => {
                    setShowSearchModal(false);
                    setSearchQuery('');
                  }}
                >
                  ESC
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Add the delete confirmation dialog with improved animations */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div 
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50 flex items-center justify-center p-4" 
            onClick={() => setShowDeleteConfirm(false)}
            {...animationConfig.fade}
          >
            <motion.div 
              className="bg-white dark:bg-neutral-900 rounded-md shadow-md max-w-xs w-full border border-neutral-100 dark:border-neutral-800"
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
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
                    whileHover={{ x: 2 }}
                    whileTap={animationConfig.tap}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
                    onClick={() => setShowDeleteConfirm(false)}
                    autoFocus
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ x: 2 }}
                    whileTap={animationConfig.tap}
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
      
      {/* Add the clear data confirmation dialog with improved animations */}
      <AnimatePresence>
        {showClearDataConfirm && (
          <motion.div 
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50 flex items-center justify-center p-4" 
            onClick={() => setShowClearDataConfirm(false)}
            {...animationConfig.fade}
          >
            <motion.div 
              className="bg-white dark:bg-neutral-900 rounded-md shadow-md max-w-xs w-full border border-neutral-100 dark:border-neutral-800"
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center">
                <Trash2 className="h-4 w-4 text-red-500 mr-2" />
                <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  Delete All Local Data
                </h3>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  This will delete all your notes, spaces, and settings. This action cannot be undone.
                </p>
                
                <div className="flex justify-end gap-2">
                  <motion.button
                    whileHover={{ x: 2 }}
                    whileTap={animationConfig.tap}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
                    onClick={() => setShowClearDataConfirm(false)}
                    autoFocus
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ x: 2 }}
                    whileTap={animationConfig.tap}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-red-500/80 text-white hover:bg-red-600 transition-colors"
                    onClick={handleClearAllData}
                  >
                    Delete All
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 