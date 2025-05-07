"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { BlockType } from "@/lib/types"
import {
  Type,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  CheckSquare,
  ChevronRight,
  Quote,
  Minus,
  Code,
} from "lucide-react"

interface SlashCommandMenuProps {
  position: { top: number; left: number }
  onSelect: (blockType: BlockType) => void
  onClose: () => void
}

interface CommandOption {
  type: BlockType
  label: string
  icon: React.ReactNode
  shortcut?: string
}

export default function SlashCommandMenu({ position, onSelect, onClose }: SlashCommandMenuProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const menuRef = useRef<HTMLDivElement>(null)
  const selectedRef = useRef<HTMLDivElement>(null)

  const commands: CommandOption[] = [
    { type: BlockType.Text, label: "Text", icon: <Type className="w-4 h-4" /> },
    { type: BlockType.H1, label: "Heading 1", icon: <Heading1 className="w-4 h-4" />, shortcut: "#" },
    { type: BlockType.H2, label: "Heading 2", icon: <Heading2 className="w-4 h-4" />, shortcut: "##" },
    { type: BlockType.H3, label: "Heading 3", icon: <Heading3 className="w-4 h-4" />, shortcut: "###" },
    { type: BlockType.BulletList, label: "Bulleted list", icon: <List className="w-4 h-4" />, shortcut: "-" },
    { type: BlockType.NumberedList, label: "Numbered list", icon: <ListOrdered className="w-4 h-4" />, shortcut: "1." },
    { type: BlockType.TodoList, label: "To-do list", icon: <CheckSquare className="w-4 h-4" />, shortcut: "[]" },
    { type: BlockType.ToggleList, label: "Toggle list", icon: <ChevronRight className="w-4 h-4" />, shortcut: ">" },
    { type: BlockType.Quote, label: "Quote", icon: <Quote className="w-4 h-4" /> },
    { type: BlockType.Divider, label: "Divider", icon: <Minus className="w-4 h-4" /> },
    { type: BlockType.Code, label: "Code", icon: <Code className="w-4 h-4" /> },
  ]

  // Filter commands based on search term
  const filteredCommands = commands.filter((command) => command.label.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    // Scroll selected item into view
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({ block: "nearest" })
    }
  }, [selectedIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length)
      } else if (e.key === "Enter") {
        e.preventDefault()
        onSelect(filteredCommands[selectedIndex].type)
      } else if (e.key === "Escape") {
        e.preventDefault()
        onClose()
      } else if (/^[a-zA-Z0-9]$/.test(e.key)) {
        // Update search term for filtering
        setSearchTerm((prev) => prev + e.key)
        setSelectedIndex(0)
      } else if (e.key === "Backspace") {
        setSearchTerm((prev) => prev.slice(0, -1))
        setSelectedIndex(0)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onSelect, onClose, selectedIndex, filteredCommands])

  useEffect(() => {
    // Close the menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])

  return (
    <motion.div
      ref={menuRef}
      className="absolute z-50 bg-white rounded shadow-sm w-56 overflow-hidden dark:bg-black border border-solid"
      style={{
        top: position.top + 5,
        left: position.left,
        borderColor: "rgb(var(--border-color))",
      }}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.1 }}
    >
      {searchTerm && (
        <div className="p-2 border-b border-solid" style={{ borderColor: "rgb(var(--border-color))" }}>
          <div className="text-xs opacity-60 px-2">Searching: {searchTerm}</div>
        </div>
      )}

      <div className="p-1 border-b border-solid" style={{ borderColor: "rgb(var(--border-color))" }}>
        <div className="text-xs opacity-60 px-2 py-1">Basic blocks</div>
      </div>

      <div className="max-h-64 overflow-y-auto p-1">
        {filteredCommands.length > 0 ? (
          filteredCommands.map((command, index) => (
            <div
              key={command.type}
              ref={selectedIndex === index ? selectedRef : null}
              className={`flex items-center px-2 py-1.5 cursor-pointer rounded menu-item ${
                selectedIndex === index ? "bg-[rgb(var(--hover-color))]" : ""
              }`}
              onClick={() => onSelect(command.type)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="w-6 h-6 flex items-center justify-center opacity-60">{command.icon}</div>
              <div className="ml-2 flex-1">
                <div className="text-sm">{command.label}</div>
              </div>
              {command.shortcut && <div className="text-xs opacity-40 px-2 font-mono">{command.shortcut}</div>}
            </div>
          ))
        ) : (
          <div className="p-4 text-center opacity-60 text-sm">No commands found</div>
        )}
      </div>

      <div
        className="p-2 border-t border-solid text-xs opacity-60 flex items-center"
        style={{ borderColor: "rgb(var(--border-color))" }}
      >
        <span>Type / on the page</span>
        <span className="ml-auto px-1 border border-solid rounded text-xs font-mono opacity-40">esc</span>
      </div>
    </motion.div>
  )
}
