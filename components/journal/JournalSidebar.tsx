'use client'

import React, { useState, useMemo } from 'react'
import { useJournal } from '@/hooks/useJournal'
import { JournalEntry } from '@/lib/types'
import { format } from 'date-fns'

interface JournalSidebarProps {
  selectedEntryId?: string
  onSelect: (id: string) => void
}

export const JournalSidebar: React.FC<JournalSidebarProps> = ({ selectedEntryId, onSelect }) => {
  const { entries, createEntry, searchEntries } = useJournal()
  const [sortBy, setSortBy] = useState<'createdAt' | 'updatedAt' | 'title'>('updatedAt')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter entries by search query
  const filtered = searchQuery ? searchEntries(searchQuery) : entries

  // Sort filtered entries
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title)
      }
      return new Date(b[sortBy]).getTime() - new Date(a[sortBy]).getTime()
    })
  }, [filtered, sortBy])

  // Create a new entry and select it
  const handleNew = () => {
    const title = window.prompt('New entry title', 'Untitled')?.trim() || 'Untitled'
    const newEntry = createEntry(title)
    onSelect(newEntry.id)
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col">
      <button
        onClick={handleNew}
        className="mb-4 px-3 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        New Entry
      </button>

      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="mb-4 w-full rounded border border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-900 focus:outline-none focus:ring dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
      />

      <div className="mb-4">
        <label className="text-xs text-gray-600 dark:text-gray-400">Sort by</label>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value as any)}
          className="mt-1 w-full rounded border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 focus:outline-none focus:ring dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        >
          <option value="updatedAt">Last edited</option>
          <option value="createdAt">Date created</option>
          <option value="title">Title</option>
        </select>
      </div>

      <ul className="flex-1 overflow-auto space-y-2">
        {sorted.map((entry: JournalEntry) => (
          <li
            key={entry.id}
            onClick={() => onSelect(entry.id)}
            className={`flex justify-between items-center p-2 rounded cursor-pointer truncate ${
              entry.id === selectedEntryId
                ? 'bg-indigo-100 dark:bg-indigo-800'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <span className="font-medium truncate">{entry.title}</span>
            <span className="text-xs text-gray-500">{format(new Date(entry.updatedAt), 'MMM d, yyyy')}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
} 