"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Plus, Check, Loader2 } from 'lucide-react'
import { useJournal } from '@/hooks/useJournal'
import { useRouter } from 'next/navigation'
import { Block, BlockType } from '@/lib/types'

interface AddToJournalButtonProps {
  userMessage: string
  assistantMessage: string
  className?: string
}

export default function AddToJournalButton({ 
  userMessage, 
  assistantMessage, 
  className = '' 
}: AddToJournalButtonProps) {
  const [isAdding, setIsAdding] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const { entries, createEntry, updateEntry } = useJournal()
  const router = useRouter()

  const handleAddToJournal = async () => {
    setIsAdding(true)
    
    try {
      // Create blocks for the conversation strip
      const conversationBlocks: Block[] = [
        {
          id: Date.now().toString(),
          type: BlockType.Quote,
          content: `**Question:** ${userMessage}`,
          isFocused: false
        },
        {
          id: (Date.now() + 1).toString(),
          type: BlockType.Text,
          content: assistantMessage,
          isFocused: false
        },
        {
          id: (Date.now() + 2).toString(),
          type: BlockType.Divider,
          content: '',
          isFocused: false
        }
      ]

      // Check if there's a recent journal entry (today's entry)
      const today = new Date().toDateString()
      const todayEntry = entries.find(entry => 
        new Date(entry.createdAt).toDateString() === today
      )

      if (todayEntry) {
        // Add to existing entry
        const updatedBlocks = [...todayEntry.blocks, ...conversationBlocks]
        updateEntry(todayEntry.id, { blocks: updatedBlocks })
        
        // Navigate to the entry
        router.push(`/journal/${todayEntry.id}`)
      } else {
        // Create new entry for today
        const title = `Journal - ${new Date().toLocaleDateString()}`
        const newEntry = createEntry(title)
        
        // Add the conversation blocks to the new entry
        updateEntry(newEntry.id, { blocks: conversationBlocks })
        
        // Navigate to the new entry
        router.push(`/journal/${newEntry.id}`)
      }

      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 2000)
    } catch (error) {
      console.error('Error adding to journal:', error)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <motion.button
      onClick={handleAddToJournal}
      disabled={isAdding || isAdded}
      className={`
        inline-flex items-center gap-1.5 px-2 py-1 text-xs rounded-md
        transition-all duration-200 hover:scale-90
        ${isAdded 
          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
        }
        ${className}
      `}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {isAdding ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-1.5"
          >
            <Loader2 className="h-3 w-3 animate-spin" />
            <span>Adding...</span>
          </motion.div>
        ) : isAdded ? (
          <motion.div
            key="added"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-1.5"
          >
            <Check className="h-3 w-3" />
            <span>Added!</span>
          </motion.div>
        ) : (
          <motion.div
            key="default"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-1.5"
          >
            <BookOpen className="h-3 w-3" />
            <span>Add to Journal</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
} 