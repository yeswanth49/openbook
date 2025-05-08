"use client";

import { useState, useEffect } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Plus, Search, PenLine, ChevronDown, Settings, Crown, MessageSquare, Flag, HelpCircle, LogOut, FolderPlus, Trash2, Edit2, MoreHorizontal } from 'lucide-react';
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
  
  // Make sure journals section is open if viewing a journal
  useEffect(() => {
    if (currentPageType === 'journal' && !journalsOpen) {
      setJournalsOpen(true);
    }
    if (currentPageType === 'space' && !spacesOpen) {
      setSpacesOpen(true);
    }
  }, [currentPageType, journalsOpen, spacesOpen]);

  const handleCreateSpace = () => {
    const name = window.prompt('Enter space name');
    if (name && name.trim()) {
      createSpace(name.trim());
    }
    setShowNewMenu(false);
  };

  const handleCreateJournal = () => {
    setShowNewMenu(false);
    const title = window.prompt('New journal title', 'Untitled')?.trim() || 'Untitled';
    const newEntry = createEntry(title);
    router.push(`/journal/${newEntry.id}`);
  };

  const handleRenameSpace = (e: React.MouseEvent, spaceId: string, currentName: string) => {
    e.stopPropagation();
    const newName = window.prompt('Rename space', currentName);
    if (newName && newName.trim() && newName !== currentName) {
      renameSpace(spaceId, newName.trim());
    }
  };

  const handleDeleteSpace = (e: React.MouseEvent, spaceId: string, spaceName: string) => {
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete "${spaceName}"?`)) {
      deleteSpace(spaceId);
    }
  };

  const handleRenameJournal = (e: React.MouseEvent, journalId: string, currentTitle: string) => {
    e.stopPropagation();
    const newTitle = window.prompt('Rename journal', currentTitle);
    if (newTitle && newTitle.trim() && newTitle !== currentTitle) {
      updateEntry(journalId, { title: newTitle.trim() });
    }
  };

  const handleDeleteJournal = (e: React.MouseEvent, journalId: string, journalTitle: string) => {
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete "${journalTitle}"?`)) {
      deleteEntry(journalId);
    }
  };

  return (
    <>
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
            
            {/* Search */}
            <div className="relative mt-4">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-neutral-400" />
              <Input 
                placeholder="Search" 
                className="pl-8 h-9 bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Content area with sections */}
          <div className="flex-1 overflow-y-auto py-2">
            {/* Journals section */}
            <div className="mb-2">
              <div className="px-4 py-1.5 flex items-center justify-between cursor-pointer" onClick={() => setJournalsOpen(!journalsOpen)}>
                <h3 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wider">JOURNALS</h3>
                <ChevronDown className={cn("h-4 w-4 text-neutral-400 transition-transform", journalsOpen && "rotate-180")} />
              </div>
              {journalsOpen && (
                <>
                  <button
                    onClick={handleCreateJournal}
                    className="flex items-center gap-2 w-full text-left px-4 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <PenLine className="h-3.5 w-3.5 text-neutral-400" />
                    <span>New Journal</span>
                  </button>
                  
                  {entries.map((entry) => {
                    const isActive = currentPageType === 'journal' && entry.id === currentPageId;
                    return (
                      <div 
                        key={entry.id} 
                        className={cn(
                          "group relative flex w-full items-center",
                          isActive 
                            ? "bg-emerald-50 dark:bg-emerald-900/20"
                            : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        )}
                      >
                        <button
                          onClick={() => router.push(`/journal/${entry.id}`)}
                          className={cn(
                            "flex items-center w-full text-left px-4 py-1.5 text-sm",
                            isActive
                              ? "text-emerald-600 dark:text-emerald-400 font-medium"
                              : "text-neutral-600 dark:text-neutral-400"
                          )}
                        >
                          <span className="truncate pl-5">{entry.title}</span>
                        </button>
                        <div className="absolute right-2 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={(e) => handleRenameJournal(e, entry.id, entry.title)}
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
                      </div>
                    );
                  })}
                </>
              )}
            </div>

            {/* Spaces section */}
            <div className="mb-2">
              <div className="px-4 py-1.5 flex items-center justify-between cursor-pointer" onClick={() => setSpacesOpen(!spacesOpen)}>
                <h3 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wider">SPACES</h3>
                <ChevronDown className={cn("h-4 w-4 text-neutral-400 transition-transform", spacesOpen && "rotate-180")} />
              </div>
              {spacesOpen && (
                <>
                  <button
                    onClick={handleCreateSpace}
                    className="flex items-center gap-2 w-full text-left px-4 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <FolderPlus className="h-3.5 w-3.5 text-neutral-400" />
                    <span>New Space</span>
                  </button>
                  
                  {spaces.map((space: SpaceType) => {
                    const isActive = currentPageType === 'space' && space.id === currentPageId;
                    return (
                      <div 
                        key={space.id}
                        className={cn(
                          "group relative flex w-full items-center",
                          isActive 
                            ? "bg-emerald-50 dark:bg-emerald-900/20"
                            : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        )}
                      >
                        <button
                          onClick={() => {
                            switchSpace(space.id)
                            router.push(`/space/${space.id}`)
                          }}
                          className={cn(
                            "flex items-center w-full text-left px-4 py-1.5 text-sm",
                            isActive
                              ? "text-emerald-600 dark:text-emerald-400 font-medium"
                              : "text-neutral-600 dark:text-neutral-400"
                          )}
                        >
                          <span className="truncate pl-5">{space.name}</span>
                        </button>
                        <div className="absolute right-2 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
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
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-neutral-100 dark:border-neutral-800 py-3 px-4">
            <div className="space-y-1">
              <button className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">
                <Crown className="h-4 w-4 text-neutral-400" />
                <span>Get Premium</span>
              </button>
              <button className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">
                <Settings className="h-4 w-4 text-neutral-400" />
                <span>Settings</span>
              </button>
              <Link href="https://discord.gg/your-discord" target="_blank" className="block">
                <button className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">
                  <MessageSquare className="h-4 w-4 text-neutral-400" />
                  <span>Join Discord</span>
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
              <Link href="/" className="block">
                <button className="flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">
                  <LogOut className="h-4 w-4 text-neutral-400" />
                  <span>Exit to Home</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
} 