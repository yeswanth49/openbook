"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { type Block, BlockType } from "../../../lib/types"
import { MoreHorizontal, Trash2, Copy, MoveVertical, Palette, Check } from "lucide-react"

interface EditorContentProps {
  blocks: Block[]
  onKeyDown: (e: React.KeyboardEvent, blockId: string) => void
  onChange: (id: string, content: string) => void
  onFocus: (id: string) => void
  onDeleteBlock?: (id: string) => void
  onDuplicateBlock?: (id: string) => void
  onBlocksChange?: (blocks: Block[]) => void
}

export default function EditorContent({ 
  blocks, 
  onKeyDown, 
  onChange, 
  onFocus,
  onDeleteBlock,
  onDuplicateBlock,
  onBlocksChange
}: EditorContentProps) {
  const blockRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    // Focus on the block that has isFocused set to true
    const focusedBlock = blocks.find((block) => block.isFocused)
    if (focusedBlock && blockRefs.current[focusedBlock.id]) {
      const node = blockRefs.current[focusedBlock.id]
      if (!node) return

      // Focus the element
      node.focus()

      // Place cursor at the end of the text
      if (typeof window.getSelection !== "undefined" && typeof document.createRange !== "undefined") {
        const range = document.createRange()
        range.selectNodeContents(node)
        range.collapse(false) // false means collapse to end
        const selection = window.getSelection()
        if (selection) {
          selection.removeAllRanges()
          selection.addRange(range)
        }
      }
    }
  }, [blocks])

  const handleBlockAction = (action: string, blockId: string) => {
    setActiveMenu(null)
    
    switch (action) {
      case 'delete':
        onDeleteBlock?.(blockId)
        break
      case 'duplicate':
        onDuplicateBlock?.(blockId)
        break
      case 'move':
        // Future implementation
        console.log('Move action for block:', blockId)
        break
      case 'color':
        // Future implementation
        console.log('Color action for block:', blockId)
        break
    }
  }

  const renderBlock = (block: Block, index: number) => {
    const commonProps = {
      id: `block-${block.id}`,
      key: block.id,
      contentEditable: true,
      suppressContentEditableWarning: true,
      onKeyDown: (e: React.KeyboardEvent) => onKeyDown(e, block.id),
      onInput: (e: React.FormEvent<HTMLDivElement>) => {
        onChange(block.id, (e.target as HTMLDivElement).textContent || "")
      },
      onFocus: () => onFocus(block.id),
      ref: (el: HTMLDivElement) => (blockRefs.current[block.id] = el),
      placeholder: "",
      className: "outline-none mb-1 min-h-[1.5em]",
    }

    const blockContent = (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="group relative block-container"
      >
        <div className="absolute -left-10 top-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex">
          <button 
            onClick={() => setActiveMenu(activeMenu === block.id ? null : block.id)}
            className="h-6 w-6 rounded-md flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <MoreHorizontal className="h-3.5 w-3.5 text-neutral-400" />
          </button>
        </div>
        
        {/* Action menu dropdown */}
        {activeMenu === block.id && (
          <div 
            ref={menuRef}
            className="absolute z-40 top-0 -left-40 bg-white dark:bg-neutral-900 rounded-lg shadow-lg w-36 overflow-hidden border border-neutral-200 dark:border-neutral-800"
          >
            <div className="py-1">
              <button 
                onClick={() => handleBlockAction('delete', block.id)}
                className="flex items-center gap-2 w-full px-3 py-1.5 text-sm text-left hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <Trash2 className="h-3.5 w-3.5 text-neutral-500" />
                <span>Delete</span>
              </button>
              <button 
                onClick={() => handleBlockAction('duplicate', block.id)}
                className="flex items-center gap-2 w-full px-3 py-1.5 text-sm text-left hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <Copy className="h-3.5 w-3.5 text-neutral-500" />
                <span>Duplicate</span>
              </button>
              <button 
                onClick={() => handleBlockAction('move', block.id)}
                className="flex items-center gap-2 w-full px-3 py-1.5 text-sm text-left hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <MoveVertical className="h-3.5 w-3.5 text-neutral-500" />
                <span>Move to</span>
              </button>
              <button 
                onClick={() => handleBlockAction('color', block.id)}
                className="flex items-center gap-2 w-full px-3 py-1.5 text-sm text-left hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <Palette className="h-3.5 w-3.5 text-neutral-500" />
                <span>Color</span>
              </button>
            </div>
          </div>
        )}

        {renderBlockContent(block, commonProps)}
        {/* Only show command hint when block is focused and empty */}
        {block.content.trim() === "" && block.isFocused && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="flex items-center gap-1 text-neutral-400 select-none text-sm font-normal opacity-70">
              Type <span className="inline-block px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-xs font-medium">/</span> for commands
            </span>
          </div>
        )}
        <div className="absolute -left-5 top-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-600"></div>
        </div>
      </motion.div>
    )

    return blockContent
  }

  const renderBlockContent = (block: Block, commonProps: any) => {
    // Create a div with the content already set
    const contentProps = {
      ...commonProps,
      dangerouslySetInnerHTML: { __html: block.content || "" },
    }

    switch (block.type) {
      case BlockType.H1:
        return <h1 {...contentProps} className="text-3xl font-bold mb-4 outline-none" />
      case BlockType.H2:
        return <h2 {...contentProps} className="text-2xl font-semibold mb-3 outline-none" />
      case BlockType.H3:
        return <h3 {...contentProps} className="text-xl font-medium mb-3 outline-none" />
      case BlockType.BulletList:
        return (
          <div className="flex items-start mb-1 py-1">
            <span className="mr-2 mt-1 opacity-60 text-sm">•</span>
            <div {...contentProps} className="outline-none flex-1" />
          </div>
        )
      case BlockType.NumberedList:
        return (
          <div className="flex items-start mb-1 py-1">
            <span className="mr-2 mt-1 opacity-60 text-sm">1.</span>
            <div {...contentProps} className="outline-none flex-1" />
          </div>
        )
      case BlockType.TodoList:
        return (
          <div className="flex items-start mb-1 py-1">
            <div 
              className={`mr-2 mt-1 h-4 w-4 rounded border border-solid border-neutral-300 dark:border-neutral-600 flex items-center justify-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 ${block.metadata?.checked ? 'bg-blue-500 border-blue-500 dark:bg-blue-600 dark:border-blue-600' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                const isChecked = !!block.metadata?.checked
                onChange(block.id, block.content)
                // Update the metadata for the block
                const updatedBlocks = blocks.map(b => 
                  b.id === block.id 
                    ? { 
                        ...b, 
                        metadata: { 
                          ...b.metadata, 
                          checked: !isChecked 
                        } 
                      } 
                    : b
                )
                // We need to update the blocks state in the parent component
                // This will be picked up by the editor component
                onBlocksChange?.(updatedBlocks)
              }}
            >
              {block.metadata?.checked && (
                <Check className="h-3 w-3 text-white" />
              )}
            </div>
            <div 
              {...contentProps} 
              className={`outline-none flex-1 ${block.metadata?.checked ? 'line-through text-neutral-400 dark:text-neutral-500' : ''}`} 
            />
          </div>
        )
      case BlockType.ToggleList:
        return (
          <div className="flex items-start mb-1 py-1">
            <span className="mr-2 mt-1 opacity-60 text-sm">▸</span>
            <div {...contentProps} className="outline-none flex-1" />
          </div>
        )
      case BlockType.Quote:
        return (
          <div className="border-l-4 border-neutral-200 dark:border-neutral-700 pl-4 mb-3 text-neutral-600 dark:text-neutral-300">
            <div {...contentProps} className="outline-none" />
          </div>
        )
      case BlockType.Divider:
        return (
          <div className="relative py-6 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md transition-colors">
            <hr className="border-t border-neutral-200 dark:border-neutral-700" />
            <div 
              className="sr-only"
              {...commonProps}
            ></div>
          </div>
        )
      case BlockType.Code:
        return (
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-md p-4 mb-4 font-mono text-sm">
            <div {...contentProps} className="outline-none" />
          </div>
        )
      default:
        return <div {...contentProps} className="py-1 outline-none" />
    }
  }

  return <div className="max-w-2xl mx-auto">{blocks.map((block, index) => renderBlock(block, index))}</div>
}
