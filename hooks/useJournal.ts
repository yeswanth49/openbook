import { useState, useEffect, useCallback } from 'react'
import { JournalEntry, Block } from '../lib/types'

const STORAGE_KEY = 'journalEntries'

export function useJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [initialized, setInitialized] = useState(false)

  // Load entries from localStorage on mount
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) {
      try {
        setEntries(JSON.parse(data))
      } catch (e) {
        console.error('Failed to parse journal entries from storage', e)
      }
    }
    // Mark as initialized whether or not data was present
    setInitialized(true)
  }, [])

  // Persist entries on change, but skip initial load to avoid overwriting
  useEffect(() => {
    if (!initialized) {
      return
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
    } catch (e) {
      console.error('Failed to persist entries', e)
    }
  }, [entries, initialized])

  const createEntry = useCallback((title: string) => {
    const now = new Date().toISOString()
    const id =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 9)
    const newEntry: JournalEntry = {
      id,
      title,
      blocks: [],
      tags: [],
      createdAt: now,
      updatedAt: now,
    }
    setEntries(prev => {
      const updated = [newEntry, ...prev]
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)) } catch (e) { console.error('Failed to persist entries', e) }
      return updated
    })
    return newEntry
  }, [])

  const updateEntry = useCallback((id: string, updates: Partial<Pick<JournalEntry, 'title' | 'blocks' | 'tags'>>) => {
    setEntries(prev => {
      const updated = prev.map(entry =>
        entry.id === id
          ? { ...entry, ...updates, updatedAt: new Date().toISOString() }
          : entry
      )
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)) } catch (e) { console.error('Failed to persist entries', e) }
      return updated
    })
  }, [])

  const deleteEntry = useCallback((id: string) => {
    setEntries(prev => {
      const updated = prev.filter(entry => entry.id !== id)
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)) } catch (e) { console.error('Failed to persist entries', e) }
      return updated
    })
  }, [])

  const getEntry = useCallback((id: string) => {
    return entries.find(entry => entry.id === id)
  }, [entries])


  const searchEntries = useCallback((query: string) => {
    const lower = query.toLowerCase()
    return entries.filter(entry =>
      entry.title.toLowerCase().includes(lower) ||
      entry.tags?.some(tag => tag.toLowerCase().includes(lower)) ||
      entry.blocks.some(block => 
        block.content.toLowerCase().includes(lower)
      )
    ).map(entry => {
      // Find matching block content for context
      const matchingBlock = entry.blocks.find(block => 
        block.content.toLowerCase().includes(lower)
      )
      
      return {
        id: entry.id,
        title: entry.title,
        // If we have a matching block, provide a preview of it for search results
        match: matchingBlock 
          ? { 
              text: matchingBlock.content,
              context: 'content' 
            } 
          : entry.title.toLowerCase().includes(lower) 
            ? { text: entry.title, context: 'title' }
            : { text: entry.tags?.find(t => t.toLowerCase().includes(lower)) || '', context: 'tag' }
      }
    })
  }, [entries])

  return {
    entries,
    createEntry,
    updateEntry,
    deleteEntry,
    getEntry,
    searchEntries,
    initialized,
  }
} 