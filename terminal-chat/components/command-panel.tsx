"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

type Command = {
  name: string
  description: string
}

type CommandPanelProps = {
  commands: Command[]
  filter: string
  onSelect: (command: string) => void
}

export function CommandPanel({ commands, filter, onSelect }: CommandPanelProps) {
  const [filteredCommands, setFilteredCommands] = useState<Command[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const filtered = commands.filter((cmd) => cmd.name.toLowerCase().startsWith(filter.toLowerCase()))
    setFilteredCommands(filtered)
    setSelectedIndex(0)
  }, [commands, filter])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (filteredCommands.length === 0) return

      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length)
      } else if (e.key === "Enter") {
        e.preventDefault()
        onSelect(filteredCommands[selectedIndex].name)
      } else if (e.key === "Escape") {
        e.preventDefault()
        onSelect(filter)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [filteredCommands, selectedIndex, onSelect, filter])

  if (filteredCommands.length === 0) return null

  return (
    <div className="absolute bottom-[80px] left-8 w-[calc(100%-4rem)] max-w-md bg-black border border-[#333333] rounded-md shadow-lg overflow-hidden z-10">
      <div className="p-2 text-xs text-[#888888] border-b border-[#333333]">Available commands</div>
      <div className="max-h-[300px] overflow-y-auto">
        {filteredCommands.map((command, index) => (
          <div
            key={command.name}
            className={cn(
              "flex justify-between px-3 py-2 hover:bg-[#333333] cursor-pointer",
              selectedIndex === index && "bg-[#333333]",
            )}
            onClick={() => onSelect(command.name)}
          >
            <span className="text-white font-medium">{command.name}</span>
            <span className="text-[#888888] text-sm">{command.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
