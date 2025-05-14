"use client"

import type React from "react"

import { useState, useRef, useEffect, type KeyboardEvent } from "react"
import { CommandPanel } from "@/components/command-panel"
import { ChatMessage } from "@/components/chat-message"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
}

export function TerminalChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Welcome to Terminal AI. Type /help to see available commands.",
      role: "assistant",
    },
  ])
  const [showCommands, setShowCommands] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const commands = [
    { name: "/clear", description: "Clear conversation history and free up context" },
    { name: "/model", description: "Open model selection panel" },
    { name: "/provider", description: "Change AI provider" },
    { name: "/history", description: "View command history" },
    { name: "/help", description: "List available commands and their descriptions" },
    { name: "/compact", description: "Clear conversation history but keep a summary" },
  ]

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  useEffect(() => {
    if (input.startsWith("/") && !input.includes(" ")) {
      setShowCommands(true)
    } else {
      setShowCommands(false)
    }
  }, [input])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Handle multiline input with Shift+Enter
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
  }

  const handleSubmit = async () => {
    if (!input.trim()) return

    // Add to command history if not a duplicate of the last command
    if (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== input) {
      setCommandHistory((prev) => [...prev, input])
    }
    setHistoryIndex(-1)

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Handle commands
    if (input.startsWith("/")) {
      handleCommand(input)
      return
    }

    // Simulate AI response
    setIsProcessing(true)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `This is a simulated response to: "${userMessage.content}"`,
        role: "assistant",
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsProcessing(false)
    }, 1000)
  }

  const handleCommand = (command: string) => {
    const cmd = command.split(" ")[0].toLowerCase()

    switch (cmd) {
      case "/clear":
        setMessages([])
        break
      case "/help":
        const helpMessage: Message = {
          id: Date.now().toString(),
          content: commands.map((cmd) => `${cmd.name} - ${cmd.description}`).join("\n"),
          role: "assistant",
        }
        setMessages((prev) => [...prev, helpMessage])
        break
      case "/history":
        const historyMessage: Message = {
          id: Date.now().toString(),
          content:
            commandHistory.length > 0
              ? "Command history:\n" + commandHistory.join("\n")
              : "No command history available.",
          role: "assistant",
        }
        setMessages((prev) => [...prev, historyMessage])
        break
      case "/model":
      case "/provider":
      case "/compact":
        const responseMessage: Message = {
          id: Date.now().toString(),
          content: `Command '${cmd}' functionality is not implemented in this demo.`,
          role: "assistant",
        }
        setMessages((prev) => [...prev, responseMessage])
        break
      default:
        const unknownMessage: Message = {
          id: Date.now().toString(),
          content: `Unknown command: ${cmd}. Type /help to see available commands.`,
          role: "assistant",
        }
        setMessages((prev) => [...prev, unknownMessage])
    }
  }

  const selectCommand = (command: string) => {
    setInput(command + " ")
    setShowCommands(false)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="flex flex-col h-[80vh] bg-black text-white font-mono rounded-md overflow-hidden">
      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isProcessing && (
          <div className="flex items-center text-[#888888]">
            <span className="animate-pulse">●</span>
            <span className="ml-2">AI is thinking...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Command panel */}
      {showCommands && <CommandPanel commands={commands} filter={input} onSelect={selectCommand} />}

      {/* Input area */}
      <div className="border-t border-[#333333] p-4 flex items-start">
        <span className="text-white mr-2 mt-1.5">❯</span>
        <div className="flex-1 relative">
          <textarea
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent resize-none outline-none min-h-[24px] max-h-[120px] overflow-y-auto"
            placeholder="Type a message or / for commands..."
            rows={1}
            style={{
              height: "auto",
              overflow: "hidden",
            }}
          />
        </div>
      </div>

      {/* Status bar */}
      <div className="px-4 py-2 text-xs text-[#888888] border-t border-[#333333] flex justify-between">
        <div>100% context left</div>
        <div className="flex space-x-4">
          <span>shift+enter for new line</span>
          <span>↑↓ for history</span>
          <span>ctrl+c to exit</span>
        </div>
      </div>
    </div>
  )
}
