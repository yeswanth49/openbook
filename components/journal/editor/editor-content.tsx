"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { type Block, BlockType } from "../../../lib/types"

interface EditorContentProps {
  blocks: Block[]
  onKeyDown: (e: React.KeyboardEvent, blockId: string) => void
  onChange: (id: string, content: string) => void
  onFocus: (id: string) => void
}

export default function EditorContent({ blocks, onKeyDown, onChange, onFocus }: EditorContentProps) {
  const blockRefs = useRef<Record<string, HTMLDivElement | null>>({})

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
      placeholder: "Type '/' for commands",
      className: "outline-none mb-1 min-h-[1.5em]",
    }

    const blockContent = (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="group relative block-container"
      >
        {renderBlockContent(block, commonProps)}
        <div className="absolute -left-5 top-1.5 block-hover-indicator">
          <div className="h-2 w-2 rounded-full opacity-30"></div>
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
        return <h1 {...contentProps} className="text-3xl font-bold mb-3 outline-none" />
      case BlockType.H2:
        return <h2 {...contentProps} className="text-2xl font-bold mb-2 outline-none" />
      case BlockType.H3:
        return <h3 {...contentProps} className="text-xl font-bold mb-2 outline-none" />
      case BlockType.BulletList:
        return (
          <div className="flex items-start mb-1">
            <span className="mr-2 mt-1 opacity-60">•</span>
            <div {...contentProps} className="outline-none flex-1" />
          </div>
        )
      case BlockType.NumberedList:
        return (
          <div className="flex items-start mb-1">
            <span className="mr-2 mt-1 opacity-60">1.</span>
            <div {...contentProps} className="outline-none flex-1" />
          </div>
        )
      case BlockType.TodoList:
        return (
          <div className="flex items-start mb-1">
            <div className="mr-2 mt-1 h-4 w-4 rounded border border-solid opacity-30"></div>
            <div {...contentProps} className="outline-none flex-1" />
          </div>
        )
      case BlockType.ToggleList:
        return (
          <div className="flex items-start mb-1">
            <span className="mr-2 mt-1 opacity-60">▸</span>
            <div {...contentProps} className="outline-none flex-1" />
          </div>
        )
      case BlockType.Quote:
        return (
          <div className="border-l-2 border-solid border-opacity-30 pl-4 mb-2 opacity-80">
            <div {...contentProps} className="outline-none italic" />
          </div>
        )
      case BlockType.Divider:
        return <hr className="my-4 border-t border-solid opacity-20" />
      case BlockType.Code:
        return (
          <div className="bg-opacity-5 rounded p-3 mb-3 font-mono">
            <div {...contentProps} className="outline-none" />
          </div>
        )
      default:
        return <div {...contentProps} />
    }
  }

  return <div className="max-w-2xl mx-auto">{blocks.map((block, index) => renderBlock(block, index))}</div>
}
