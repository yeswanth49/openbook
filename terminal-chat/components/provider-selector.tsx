"use client"

import { useState, useEffect, useRef } from "react"

type Provider = {
  id: string
  name: string
}

type ProviderSelectorProps = {
  onSelect: (provider: string) => void
  onClose: () => void
}

export function ProviderSelector({ onSelect, onClose }: ProviderSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Sample provider data
  const providers: Provider[] = [
    { id: "openai", name: "OpenAI" },
    { id: "anthropic", name: "Anthropic" },
    { id: "google", name: "Google AI" },
    { id: "mistral", name: "Mistral AI" },
    { id: "cohere", name: "Cohere" },
    { id: "local", name: "Local Models" },
  ]

  const filteredProviders = providers.filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
        setSelectedIndex((prev) => (prev + 1) % filteredProviders.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredProviders.length) % filteredProviders.length)
      } else if (e.key === "Enter") {
        e.preventDefault()
        if (filteredProviders.length > 0) {
          onSelect(filteredProviders[selectedIndex].id)
        }
      } else if (e.key === "Tab") {
        e.preventDefault()
        // Switch to model selection (would be implemented in parent component)
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [filteredProviders, selectedIndex, onClose, onSelect])

  return (
    <div className="absolute bottom-full left-0 w-full bg-black border border-[#333333] rounded overflow-hidden mb-1 text-white">
      <div className="p-4">
        <div className="mb-4">
          <div className="text-lg font-semibold mb-1">Select provider</div>
          <div className="flex flex-col text-sm text-[#888888]">
            <div>
              Current provider: <span className="text-white">OpenAI</span>
            </div>
            <div className="text-xs mt-1">press tab to switch to model selection</div>
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
          {filteredProviders.map((provider, index) => (
            <div
              key={provider.id}
              className={`py-1 px-2 cursor-pointer ${selectedIndex === index ? "bg-[#333333]" : ""}`}
              onClick={() => onSelect(provider.id)}
            >
              <div className={`${selectedIndex === index ? "text-white" : ""}`}>
                {selectedIndex === index && <span className="mr-1">❯</span>}
                {provider.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 text-xs text-[#888888]">type to search • enter to confirm • esc to cancel</div>
      </div>
    </div>
  )
}
