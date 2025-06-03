"use client"

import { useState, useEffect, useRef } from "react"

type Model = {
  id: string
  name: string
  provider: string
}

type ModelSelectorProps = {
  onSelect: (model: string) => void
  onClose: () => void
}

export function ModelSelector({ onSelect, onClose }: ModelSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Sample model data
  const models: Model[] = [
    { id: "c4-mini-2025-04-16", name: "c4-mini-2025-04-16", provider: "OpenAI" },
    { id: "babbage-002", name: "babbage-002", provider: "OpenAI" },
    { id: "chatgpt-4o-latest", name: "chatgpt-4o-latest", provider: "OpenAI" },
    { id: "dall-e-2", name: "dall-e-2", provider: "OpenAI" },
    { id: "dall-e-3", name: "dall-e-3", provider: "OpenAI" },
    { id: "davinci-002", name: "davinci-002", provider: "OpenAI" },
    { id: "gpt-3.5-turbo", name: "gpt-3.5-turbo", provider: "OpenAI" },
    { id: "gpt-3.5-turbo-0125", name: "gpt-3.5-turbo-0125", provider: "OpenAI" },
    { id: "gpt-3.5-turbo-1106", name: "gpt-3.5-turbo-1106", provider: "OpenAI" },
    { id: "gpt-3.5-turbo-16k", name: "gpt-3.5-turbo-16k", provider: "OpenAI" },
  ]

  const filteredModels = models.filter((model) => model.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    // Focus the search input when component mounts
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filteredModels.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredModels.length) % filteredModels.length)
      } else if (e.key === "Enter") {
        e.preventDefault()
        if (filteredModels.length > 0) {
          onSelect(filteredModels[selectedIndex].id)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [filteredModels, selectedIndex, onClose, onSelect])

  return (
    <div className="absolute bottom-full left-0 w-full bg-black border border-[#333333] rounded overflow-hidden mb-1 text-white">
      <div className="p-4">
        <div className="mb-4">
          <div className="text-lg font-semibold mb-1">Select model</div>
          <div className="flex flex-col text-sm text-[#888888]">
            <div>
              Current model: <span className="text-white">c4-mini-2025-04-16</span>
            </div>
            <div>
              Current provider: <span className="text-white">OpenAI</span>
            </div>
            <div className="text-xs mt-1">press tab to switch to provider selection</div>
          </div>
        </div>

        <div className="mb-3">
          <input
            ref={searchInputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setSelectedIndex(0)
            }}
            className="w-full bg-[#111111] border border-[#333333] rounded p-2 outline-none"
            placeholder="Type to search"
          />
        </div>

        <div className="max-h-[300px] overflow-y-auto">
          {filteredModels.map((model, index) => (
            <div
              key={model.id}
              className={`py-1 px-2 cursor-pointer ${selectedIndex === index ? "bg-[#333333]" : ""}`}
              onClick={() => onSelect(model.id)}
            >
              <div className={`${selectedIndex === index ? "text-white" : ""}`}>
                {selectedIndex === index && <span className="mr-1">❯</span>}
                {model.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 text-xs text-[#888888]">type to search • enter to confirm • esc to cancel</div>
      </div>
    </div>
  )
}
