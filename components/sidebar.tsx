"use client";

import { useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Plus, Search, Clock, ChevronDown, Settings, MessageSquare, Flag, HelpCircle, LogOut } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { useSpaces, Space as SpaceType } from '@/contexts/SpacesContext';
import { useRouter } from 'next/navigation';
import { useJournal } from '@/hooks/useJournal';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [journalsOpen, setJournalsOpen] = useState(false);
  const [spacesOpen, setSpacesOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme } = useTheme();
  const { spaces, currentSpaceId, createSpace, switchSpace } = useSpaces();
  const { createEntry, entries } = useJournal();
  const router = useRouter();

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
          "bg-white dark:bg-neutral-900 shadow-sm",
          isOpen ? "w-64 pointer-events-auto" : "w-0 pointer-events-none"
        )}
      >
        {/* Hide content when closed for accessibility and performance */}
        <div className={cn(
          "flex flex-col h-full flex-1 transition-opacity duration-200 ease-out overflow-hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        >
          <div className="p-4 pb-2 border-b border-neutral-100 dark:border-neutral-800">
            {/* Brand row */}
            <div className="flex items-center space-x-2 mb-2">
              <BookOpen className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
              <span className="text-xl font-bold text-neutral-800 dark:text-neutral-200">OpenBook</span>
            </div>
            {/* Controls row: collapse, greeting, new */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-medium text-neutral-800 dark:text-neutral-200">Hi, Yeswanth</span>
              </div>
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  onClick={() => setShowNewMenu(!showNewMenu)}
                  aria-label="New"
                >
                  <Plus className="h-5 w-5 text-emerald-500" />
                </Button>
                {showNewMenu && (
                  <div className="absolute mt-2 right-0 bg-white dark:bg-neutral-900 shadow-sm rounded-md z-10">
                    <div className="p-2">
                      <button
                        className="flex items-center gap-2 w-full text-left p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                        onClick={handleCreateSpace}
                      >
                        <div className="h-5 w-5 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded">
                          <span className="text-xs">📄</span>
                        </div>
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">New Space</span>
                      </button>
                      <button
                        className="flex items-center gap-2 w-full text-left p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                        onClick={handleCreateJournal}
                      >
                        <div className="h-5 w-5 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded">
                          <span className="text-xs">📝</span>
                        </div>
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">New Journal</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-4 px-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-neutral-400" />
              <Input 
                placeholder="Search" 
                className="pl-8 bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="px-4 py-2 flex items-center justify-between cursor-pointer" onClick={() => setJournalsOpen(!journalsOpen)}>
              <h3 className="text-xs font-semibold text-neutral-500 tracking-wider">JOURNALS</h3>
              <ChevronDown className={cn("h-4 w-4 text-neutral-400 transition-transform", journalsOpen && "rotate-180")} />
            </div>
            {journalsOpen && (
              <div>
                <button
                  onClick={handleCreateJournal}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
                >
                  <Clock className="h-4 w-4 text-neutral-400" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">Create Journal</span>
                </button>
                <ul className="mt-2 space-y-1 max-h-48 overflow-auto">
                  {entries.map((entry) => (
                    <li key={entry.id}>
                      <button
                        onClick={() => router.push(`/journal/${entry.id}`)}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
                      >
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">{entry.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-6">
            <div className="px-4 py-2 flex items-center justify-between cursor-pointer" onClick={() => setSpacesOpen(!spacesOpen)}>
              <h3 className="text-xs font-semibold text-neutral-500 tracking-wider">SPACES</h3>
              <ChevronDown className={cn("h-4 w-4 text-neutral-400 transition-transform", spacesOpen && "rotate-180")} />
            </div>
            {spacesOpen && (
              <div className="space-y-1">
                {spaces.map((space: SpaceType) => (
                  <button
                    key={space.id}
                    onClick={() => {
                      switchSpace(space.id)
                      router.push(`/space/${space.id}`)
                    }}
                    className={cn(
                      "flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg transition-colors",
                      space.id === currentSpaceId
                        ? "bg-emerald-50 dark:bg-emerald-900/20"
                        : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    )}
                  >
                    <div className="h-4 w-4 flex items-center justify-center">
                      <span className="text-xs">📄</span>
                    </div>
                    <span className={cn(
                      "text-sm",
                      space.id === currentSpaceId
                        ? "text-emerald-700 dark:text-emerald-400 font-semibold"
                        : "text-neutral-600 dark:text-neutral-400"
                    )}>
                      {space.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-auto space-y-1 pb-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 px-4">
            <button className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg">
              <Settings className="h-4 w-4 text-neutral-400" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Get Premium</span>
            </button>
            <button className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg">
              <Settings className="h-4 w-4 text-neutral-400" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Settings</span>
            </button>
            <Link href="https://discord.gg/your-discord" target="_blank">
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg">
                <MessageSquare className="h-4 w-4 text-neutral-400" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Join Discord</span>
              </button>
            </Link>
            <button className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg">
              <Flag className="h-4 w-4 text-neutral-400" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Report Bug</span>
            </button>
            <button className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg">
              <HelpCircle className="h-4 w-4 text-neutral-400" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Help</span>
            </button>
            <Link href="/">
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg">
                <LogOut className="h-4 w-4 text-neutral-400" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Exit to Home</span>
              </button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
} 