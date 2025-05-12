"use client"

import { useEffect } from "react"

type Command = {
  name: string
  description: string
}

type HelpPanelProps = {
  commands: Command[]
  onClose: () => void
}

export function HelpPanel({ commands, onClose }: HelpPanelProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") {
        e.preventDefault()
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <div className="absolute bottom-full left-0 w-full bg-black border border-[#333333] rounded overflow-hidden mb-1 text-white">
      <div className="p-4">
        <div className="text-lg font-semibold mb-3">Available Commands</div>

        <div className="mb-4">
          {commands.map((command) => (
            <div key={command.name} className="flex justify-between py-1">
              <span className="text-white">{command.name}</span>
              <span className="text-[#888888]">{command.description}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-[#333333] pt-3 mt-3">
          <div className="text-sm font-semibold mb-2">Keyboard Shortcuts</div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#888888]">Tab</span>
              <span>Command completion</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#888888]">↑/↓</span>
              <span>Command history</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#888888]">Esc</span>
              <span>Close panel</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#888888]">Enter</span>
              <span>Submit</span>
            </div>
          </div>
        </div>

        <div className="mt-3 text-xs text-[#888888]">press esc or enter to close</div>
      </div>
    </div>
  )
}
