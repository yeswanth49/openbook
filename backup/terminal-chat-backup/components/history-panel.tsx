"use client"

import { useState, useEffect } from "react"

type HistoryPanelProps = {
  history: string[]
  onSelect: (command: string) => void
  onClose: () => void
}

export function HistoryPanel({ history, onSelect, onClose }: HistoryPanelProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const reversedHistory = [...history].reverse()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % reversedHistory.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + reversedHistory.length) % reversedHistory.length)
      } else if (e.key === "Enter") {
        e.preventDefault()
        if (reversedHistory.length > 0) {
          onSelect(reversedHistory[selectedIndex])
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [reversedHistory, selectedIndex, onClose, onSelect])

  if (history.length === 0) {
    return (
      <div className="absolute bottom-full left-0 w-full bg-black border border-[#333333] rounded overflow-hidden mb-1 text-white">
        <div className="p-4">
          <div className="text-lg font-semibold mb-3">Command History</div>
          <p className="text-[#888888]">No command history available.</p>
          <div className="mt-3 text-xs text-[#888888]">press esc to close</div>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute bottom-full left-0 w-full bg-black border border-[#333333] rounded overflow-hidden mb-1 text-white">
      <div className="p-4">
        <div className="text-lg font-semibold mb-3">Command History</div>

        <div className="max-h-[300px] overflow-y-auto">
          {reversedHistory.map((cmd, index) => (
            <div
              key={index}
              className={`py-1 px-2 cursor-pointer ${selectedIndex === index ? "bg-[#333333]" : ""}`}
              onClick={() => onSelect(cmd)}
            >
              <div className={`${selectedIndex === index ? "text-white" : ""}`}>
                {selectedIndex === index && <span className="mr-1">❯</span>}
                {cmd}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 text-xs text-[#888888]">↑/↓ to navigate • enter to select • esc to cancel</div>
      </div>
    </div>
  )
}
