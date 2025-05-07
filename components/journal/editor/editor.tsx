"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SlashCommandMenu from "./slash-command-menu"
import EditorContent from "./editor-content"
import EmptyState from "./empty-state"
import { type Block, BlockType } from '../../../lib/types'
import { marked } from 'marked'

interface EditorProps {
  initialBlocks?: Block[]
  onBlocksChange?: (blocks: Block[]) => void
  title?: string
}

export default function Editor({ initialBlocks, onBlocksChange, title }: EditorProps) {
  const [blocks, setBlocks] = useState<Block[]>(() =>
    initialBlocks ?? [
      { id: Date.now().toString(), type: BlockType.Text, content: "", isFocused: true },
    ]
  )

  const [showSlashMenu, setShowSlashMenu] = useState(false)
  const [slashMenuPosition, setSlashMenuPosition] = useState({ top: 0, left: 0 })
  const [currentBlockId, setCurrentBlockId] = useState<string>(blocks[0]?.id || "")
  const [isLoading, setIsLoading] = useState(true)

  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize loading state
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Sync initial blocks
  useEffect(() => {
    if (initialBlocks) {
      setBlocks(initialBlocks)
      setCurrentBlockId(initialBlocks[0]?.id || "")
    }
  }, [initialBlocks])

  const updateBlocks = (updated: Block[]) => {
    setBlocks(updated)
    onBlocksChange?.(updated)
  }

  // Handle pasting markdown: insert parsed HTML inline
  const handlePaste = async (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault()
    // Get plain markdown text
    const markdown = e.clipboardData.getData('text/plain')
    // Parse to HTML
    const html = await marked.parse(markdown)
    // Insert HTML at cursor
    document.execCommand('insertHTML', false, html)
  }

  const handleKeyDown = (e: React.KeyboardEvent, blockId: string) => {
    const blockIndex = blocks.findIndex((b) => b.id === blockId)
    if (blockIndex === -1) return
    const block = blocks[blockIndex]

    if (e.key === "/") {
      e.preventDefault()
      setCurrentBlockId(blockId)
      setShowSlashMenu(true)
      const blockElement = document.getElementById(`block-${blockId}`)
      if (blockElement) {
        const rect = blockElement.getBoundingClientRect()
        setSlashMenuPosition({ top: rect.bottom, left: rect.left })
      }
    } else if (e.key === "Escape" && showSlashMenu) {
      setShowSlashMenu(false)
    } else if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      const newBlock: Block = { id: Date.now().toString(), type: BlockType.Text, content: "", isFocused: true }
      const updated = [...blocks]
      updated[blockIndex] = { ...updated[blockIndex], isFocused: false }
      updated.splice(blockIndex + 1, 0, newBlock)
      updateBlocks(updated)
      setCurrentBlockId(newBlock.id)
    } else if (e.key === "Backspace" && block.content === "" && blocks.length > 1) {
      e.preventDefault()
      const updated = [...blocks]
      updated.splice(blockIndex, 1)
      const newFocus = Math.max(0, blockIndex - 1)
      updated[newFocus] = { ...updated[newFocus], isFocused: true }
      updateBlocks(updated)
      setCurrentBlockId(updated[newFocus].id)
    }
  }

  const handleBlockChange = (id: string, content: string) => {
    updateBlocks(blocks.map((blk) => (blk.id === id ? { ...blk, content } : blk)))
  }

  const handleBlockFocus = (id: string) => {
    updateBlocks(blocks.map((blk) => ({ ...blk, isFocused: blk.id === id })))
    setCurrentBlockId(id)
  }

  const handleCommandSelect = (type: BlockType) => {
    setShowSlashMenu(false)
    updateBlocks(
      blocks.map((blk) => (blk.id === currentBlockId ? { ...blk, type, content: "" } : blk))
    )
  }

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center bg-white text-black dark:bg-black dark:text-white">
        <div className="flex flex-col items-center">
          <div className="h-8 w-8 animate-spin rounded-full border-t-2 border-b-2 border-black dark:border-white"></div>
          <p className="mt-4 text-sm font-light">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-white text-black dark:bg-black dark:text-white">
      <header className="flex h-12 items-center border-b border-solid px-4" style={{ borderColor: "rgb(var(--border-color))" }}>
        <div className="flex items-center space-x-2">
          <span className="text-sm opacity-60">{title || "Untitled"}</span>
          <span className="opacity-30">•</span>
          <span className="text-sm opacity-60">Private</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <button className="text-sm opacity-60 hover:opacity-100">Share</button>
        </div>
      </header>  

      <div ref={editorRef} className="flex-1 overflow-y-auto px-4 py-8 md:px-16" onPaste={handlePaste}>
        {blocks.length === 0 ? (
          <EmptyState onCreateBlock={() => updateBlocks([{ id: Date.now().toString(), type: BlockType.Text, content: "", isFocused: true }])} />
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
            <EditorContent blocks={blocks} onKeyDown={handleKeyDown} onChange={handleBlockChange} onFocus={handleBlockFocus} />
          </motion.div>
        )}
        {showSlashMenu && <SlashCommandMenu position={slashMenuPosition} onSelect={handleCommandSelect} onClose={() => setShowSlashMenu(false)} />}
      </div>
    </div>
  )
} 