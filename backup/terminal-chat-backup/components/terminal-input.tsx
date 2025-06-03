"use client"

import type React from "react"

import { useState, useRef, useEffect, type KeyboardEvent } from "react"
import { ModelSelector } from "@/components/model-selector"
import { ProviderSelector } from "@/components/provider-selector"
import { HelpPanel } from "@/components/help-panel"
import { ClearConfirmation } from "@/components/clear-confirmation"
import { CompactConfirmation } from "@/components/compact-confirmation"
import { HistoryPanel } from "@/components/history-panel"

type Command = {
  name: string
  description: string
}

export function TerminalInput() {
  const [input, setInput] = useState("")
  const [showCommands, setShowCommands] = useState(false)
  const [activeInterface, setActiveInterface] = useState<string | null>(null)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands: Command[] = [
    { name: "/model", description: "Change AI model" },
    { name: "/provider", description: "Change AI provider" },
    { name: "/clear", description: "Clear conversation history" },
    { name: "/compact", description: "Clear history but keep summary" },
    { name: "/history", description: "View command history" },
    { name: "/help", description: "List available commands" },
  ]

  useEffect(() => {
    if (input.startsWith("/") && !input.includes(" ")) {
      setShowCommands(true)
    } else {
      setShowCommands(false)
    }

    // Check if the command is complete and set the active interface
    if (input === "/model") {
      setActiveInterface("model")
    } else if (input === "/provider") {
      setActiveInterface("provider")
    } else if (input === "/help") {
      setActiveInterface("help")
    } else if (input === "/clear") {
      setActiveInterface("clear")
    } else if (input === "/compact") {
      setActiveInterface("compact")
    } else if (input === "/history") {
      setActiveInterface("history")
    } else {
      setActiveInterface(null)
    }
  }, [input])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Submit on Enter
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }

    // Command history navigation
    if (e.key === "ArrowUp" && commandHistory.length > 0 && !input) {
      e.preventDefault()
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1)
      setHistoryIndex(newIndex)
      setInput(commandHistory[commandHistory.length - 1 - newIndex])
    }

    if (e.key === "ArrowDown" && historyIndex > -1) {
      e.preventDefault()
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      if (newIndex === -1) {
        setInput("")
      } else {
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    }

    // Tab completion for commands
    if (e.key === "Tab" && input.startsWith("/") && !input.includes(" ")) {
      e.preventDefault()
      const matchingCommands = commands.filter((cmd) => cmd.name.startsWith(input))
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0].name + " ")
      }
    }

    // Close active interface with Escape
    if (e.key === "Escape" && activeInterface) {
      e.preventDefault()
      setActiveInterface(null)
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }

  const handleSubmit = () => {
    if (!input.trim()) return

    // Add to command history if not a duplicate of the last command
    if (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== input) {
      setCommandHistory((prev) => [...prev, input])
    }
    setHistoryIndex(-1)

    // Handle commands
    if (input.startsWith("/")) {
      handleCommand(input)
      return
    }

    // Handle normal message submission
    console.log("Submitted:", input)
    setInput("")
  }

  const handleCommand = (command: string) => {
    const cmd = command.split(" ")[0].toLowerCase()

    switch (cmd) {
      case "/model":
      case "/provider":
      case "/help":
      case "/clear":
      case "/compact":
      case "/history":
        // These are handled by the activeInterface state
        break
      default:
        console.log(`Unknown command: ${cmd}`)
        setInput("")
        setActiveInterface(null)
    }
  }

  const selectCommand = (command: string) => {
    setInput(command)
    setShowCommands(false)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const closeInterface = () => {
    setActiveInterface(null)
    setInput("")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleAction = (action: string, value?: string) => {
    console.log(`Action: ${action}`, value ? `Value: ${value}` : "")
    closeInterface()
  }

  return (
    <div className="relative">
      {/* Command interfaces */}
      {activeInterface === "model" && (
        <ModelSelector onSelect={(model) => handleAction("selectModel", model)} onClose={closeInterface} />
      )}

      {activeInterface === "provider" && (
        <ProviderSelector onSelect={(provider) => handleAction("selectProvider", provider)} onClose={closeInterface} />
      )}

      {activeInterface === "help" && <HelpPanel commands={commands} onClose={closeInterface} />}

      {activeInterface === "clear" && (
        <ClearConfirmation onConfirm={() => handleAction("clearChat")} onCancel={closeInterface} />
      )}

      {activeInterface === "compact" && (
        <CompactConfirmation onConfirm={() => handleAction("compactChat")} onCancel={closeInterface} />
      )}

      {activeInterface === "history" && (
        <HistoryPanel
          history={commandHistory}
          onSelect={(cmd) => {
            setInput(cmd)
            closeInterface()
          }}
          onClose={closeInterface}
        />
      )}

      {/* Command suggestions */}
      {showCommands && !activeInterface && (
        <div className="absolute bottom-full left-0 w-full bg-black border border-[#333333] rounded overflow-hidden mb-1">
          {commands
            .filter((cmd) => cmd.name.startsWith(input))
            .map((command) => (
              <div
                key={command.name}
                className="flex justify-between px-3 py-2 hover:bg-[#333333] cursor-pointer"
                onClick={() => selectCommand(command.name)}
              >
                <span className="text-white">{command.name}</span>
                <span className="text-[#888888] text-sm">{command.description}</span>
              </div>
            ))}
        </div>
      )}

      {/* Input field */}
      <div className="flex items-center bg-black text-white">
        <span className="text-white mr-2">❯</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent outline-none border-none"
          placeholder="Type a message or / for commands..."
        />
      </div>
    </div>
  )
}
