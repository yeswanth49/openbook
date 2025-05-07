"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SlashCommandMenu from './SlashMenu'
import EditorContent from './EditorContent'
import JournalWelcomeCard from './JournalWelcomeCard'
import { type Block, BlockType } from "@/lib/types"

export default function BlockEditor() {
  const [blocks, setBlocks] = useState<Block[]>([
    { id: "1", type: BlockType.H1, content: "Physics Notes" },
    { id: "2", type: BlockType.H2, content: "Unit 1" },
    { id: "3", type: BlockType.Text, content: "", isFocused: true },
  ])

  const [showSlashMenu, setShowSlashMenu] = useState(false)
  const [slashMenuPosition, setSlashMenuPosition] = useState({ top: 0, left: 0 })
  const [currentBlockId, setCurrentBlockId] = useState("3")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent, blockId: string) => {
    const block = blocks.find((b) => b.id === blockId)
    if (!block) return

    if (e.key === "/" && block.content === "") {
      e.preventDefault()
      setShowSlashMenu(true)

      // Position the slash menu below the current block
      const blockElement = document.getElementById(`block-${blockId}`)
      if (blockElement) {
        const rect = blockElement.getBoundingClientRect()
        setSlashMenuPosition({
          top: rect.bottom,
          left: rect.left,
        })
      }
    } else if (e.key === "Escape" && showSlashMenu) {
      setShowSlashMenu(false)
    } else if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()

      // Add a new block after the current one
      const newBlock: Block = {
        id: Date.now().toString(),
        type: BlockType.Text,
        content: "",
        isFocused: true,
      }

      const blockIndex = blocks.findIndex((b) => b.id === blockId)
      const updatedBlocks = [...blocks]

      // Remove focus from current block
      updatedBlocks[blockIndex] = { ...updatedBlocks[blockIndex], isFocused: false }

      // Insert new block after current
      updatedBlocks.splice(blockIndex + 1, 0, newBlock)

      setBlocks(updatedBlocks)
      setCurrentBlockId(newBlock.id)
    } else if (e.key === "Backspace" && block.content === "" && blocks.length > 1) {
      e.preventDefault()

      // Delete the current block if it's empty and not the only block
      const blockIndex = blocks.findIndex((b) => b.id === blockId)
      const updatedBlocks = [...blocks]

      // Remove the current block
      updatedBlocks.splice(blockIndex, 1)

      // Focus the previous block if available, otherwise the next block
      const newFocusIndex = Math.max(0, blockIndex - 1)
      updatedBlocks[newFocusIndex] = { ...updatedBlocks[newFocusIndex], isFocused: true }

      setBlocks(updatedBlocks)
      setCurrentBlockId(updatedBlocks[newFocusIndex].id)
    }
  }

  const handleBlockChange = (id: string, content: string) => {
    setBlocks(blocks.map((block) => (block.id === id ? { ...block, content } : block)))
  }

  const handleBlockFocus = (id: string) => {
    setBlocks(blocks.map((block) => ({ ...block, isFocused: block.id === id })))
    setCurrentBlockId(id)
  }

  const handleCommandSelect = (blockType: BlockType) => {
    setShowSlashMenu(false)

    // Change the current block type
    setBlocks(blocks.map((block) => (block.id === currentBlockId ? { ...block, type: blockType, content: "" } : block)))
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white text-black dark:bg-black dark:text-white">
        <div className="flex flex-col items-center">
          <div className="h-8 w-8 animate-spin rounded-full border-t-2 border-b-2 border-black dark:border-white"></div>
          <p className="mt-4 text-sm font-light">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-white text-black dark:bg-black dark:text-white">
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative z-10"
          >
            <Sidebar isOpen={sidebarOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header
          className="flex h-12 items-center border-b border-solid px-4"
          style={{ borderColor: "rgb(var(--border-color))" }}
        >
          <button onClick={toggleSidebar} className="mr-4 text-black opacity-60 hover:opacity-100 dark:text-white">
            ☰
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm opacity-60">Physics Notes</span>
            <span className="opacity-30">•</span>
            <span className="text-sm opacity-60">Private</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <button className="text-sm opacity-60 hover:opacity-100">Share</button>
          </div>
        </header>

        <div ref={editorRef} className="flex-1 overflow-y-auto px-4 py-8 md:px-16">
          {blocks.length === 0 ? (
            <EmptyState
              onCreateBlock={() => {
                setBlocks([
                  {
                    id: Date.now().toString(),
                    type: BlockType.Text,
                    content: "",
                    isFocused: true,
                  },
                ])
              }}
            />
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
              <EditorContent
                blocks={blocks}
                onKeyDown={handleKeyDown}
                onChange={handleBlockChange}
                onFocus={handleBlockFocus}
              />
            </motion.div>
          )}

          <AnimatePresence>
            {showSlashMenu && (
              <SlashCommandMenu
                position={slashMenuPosition}
                onSelect={handleCommandSelect}
                onClose={() => setShowSlashMenu(false)}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
