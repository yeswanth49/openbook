"use client"

import { useEffect } from "react"

type CompactConfirmationProps = {
  onConfirm: () => void
  onCancel: () => void
}

export function CompactConfirmation({ onConfirm, onCancel }: CompactConfirmationProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        onCancel()
      } else if (e.key === "Enter") {
        e.preventDefault()
        onConfirm()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onConfirm, onCancel])

  return (
    <div className="absolute bottom-full left-0 w-full bg-black border border-[#333333] rounded overflow-hidden mb-1 text-white">
      <div className="p-4">
        <div className="text-lg font-semibold mb-3">Compact Conversation</div>
        <p className="mb-4 text-[#888888]">
          This will clear the conversation history but keep a summary of the important points. This action cannot be
          undone.
        </p>

        <div className="flex space-x-3">
          <button onClick={onConfirm} className="bg-white text-black px-3 py-1 rounded hover:bg-[#DDDDDD]">
            Confirm
          </button>
          <button onClick={onCancel} className="bg-[#333333] px-3 py-1 rounded hover:bg-[#444444]">
            Cancel
          </button>
        </div>

        <div className="mt-3 text-xs text-[#888888]">enter to confirm • esc to cancel</div>
      </div>
    </div>
  )
}
