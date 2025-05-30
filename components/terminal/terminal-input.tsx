"use client"

import React, { useState, useRef, useEffect, type KeyboardEvent } from "react"
import { Upload } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { FrameworkSelector } from "@/components/study/framework-selector"
import { StudyFramework } from "@/lib/types"

// Define the model options - with Google Gemini 2.5 Flash as the default
const models = [
  { value: "neuman-google", label: "Gemini 2.5 Flash (Preview)", description: "Google's advanced small reasoning model", color: "gemini" },
  { value: "neuman-default", label: "o4 mini", description: "OpenAI's faster mini reasoning model", color: "blue" },
  { value: "neuman-gemini", label: "Gemini 2.5 Pro (Preview)", description: "Google's advanced reasoning model", color: "gemini" },
  { value: "neuman-4o", label: "GPT 4o", description: "OpenAI's flagship model", color: "blue" },
  { value: "neuman-4.1-nano", label: "GPT 4.1-nano", description: "OpenAI's nano model", color: "blue" },
]

interface Attachment {
  name: string;
  contentType: string;
  url: string;
  size: number;
}

type Command = {
  name: string
  description: string
}

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  attachments: Attachment[];
  setAttachments: React.Dispatch<React.SetStateAction<Array<Attachment>>>;
  onStop: () => void;
  status: 'submitted' | 'streaming' | 'ready' | 'error';
  onFrameworkSelect?: (framework: string) => void;
}

export function TerminalInput({
  value, 
  onChange, 
  onSubmit, 
  selectedModel,
  setSelectedModel,
  fileInputRef,
  attachments,
  setAttachments,
  onStop,
  status,
  onFrameworkSelect,
}: TerminalInputProps) {
  const [showCommands, setShowCommands] = useState(false)
  const [activeInterface, setActiveInterface] = useState<string | null>(null)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const isProcessing = status === 'submitted' || status === 'streaming';
  
  const commands: Command[] = [
    { name: "/model", description: "Change AI model" },
    { name: "/frameworks", description: "Study frameworks" },
    { name: "/extreme", description: "Extreme study mode" },
    { name: "/tools", description: "Study tools (coming soon)" },
    { name: "/rules", description: "Study rules (coming soon)" },
    { name: "/clear", description: "Clear conversation history" },
    { name: "/help", description: "List available commands" },
  ]

  useEffect(() => {
    if (value.startsWith("/") && !value.includes(" ")) {
      setShowCommands(true)
    } else {
      setShowCommands(false)
    }

    // Check if the command is complete and set the active interface
    if (value === "/model") {
      setActiveInterface("model")
    } else if (value === "/frameworks") {
      setActiveInterface("frameworks")
    } else if (value === "/help") {
      setActiveInterface("help")
    } else if (value === "/clear") {
      setActiveInterface("clear")
    } else {
      setActiveInterface(null)
    }
  }, [value])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Submit on Enter
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }

    // Command history navigation
    if (e.key === "ArrowUp" && commandHistory.length > 0 && !value) {
      e.preventDefault()
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1)
      setHistoryIndex(newIndex)
      onChange(commandHistory[commandHistory.length - 1 - newIndex])
    }

    if (e.key === "ArrowDown" && historyIndex > -1) {
      e.preventDefault()
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      if (newIndex === -1) {
        onChange("")
      } else {
        onChange(commandHistory[commandHistory.length - 1 - newIndex])
      }
    }

    // Tab completion for commands
    if (e.key === "Tab" && value.startsWith("/") && !value.includes(" ")) {
      e.preventDefault()
      const matchingCommands = commands.filter((cmd) => cmd.name.startsWith(value))
      if (matchingCommands.length === 1) {
        onChange(matchingCommands[0].name + " ")
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
    if (!value.trim() && attachments.length === 0) return

    // Add to command history if not a duplicate of the last command
    if (value.trim() && (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== value)) {
      setCommandHistory((prev) => [...prev, value])
    }
    setHistoryIndex(-1)

    // Handle commands
    if (value.startsWith("/")) {
      handleCommand(value)
      return
    }

    // Handle normal message submission
    onSubmit()
  }

  const handleCommand = (command: string) => {
    const cmd = command.split(" ")[0].toLowerCase()

    switch (cmd) {
      case "/model":
      case "/frameworks":
      case "/help":
      case "/clear":
        // These are handled by the activeInterface state
        break
      case "/extreme":
        // Quick access to extreme mode
        if (onFrameworkSelect) {
          onFrameworkSelect('extreme-mode');
        }
        onChange("")
        setActiveInterface(null)
        break
      case "/tools":
      case "/rules":
        toast.info(`${cmd} - Coming soon!`)
        onChange("")
        setActiveInterface(null)
        break
      default:
        toast.info(`Unknown command: ${cmd}`)
        onChange("")
        setActiveInterface(null)
    }
  }

  const selectCommand = (command: string) => {
    onChange(command)
    setShowCommands(false)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const closeInterface = () => {
    setActiveInterface(null)
    onChange("")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleModelSelect = (model: string) => {
    setSelectedModel(model)
    closeInterface()
    toast.success(`Model changed to ${models.find(m => m.value === model)?.label || model}`)
  }

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  const handleClearChat = () => {
    // This would need to be connected to a clear chat function from the parent
    toast.info("Chat cleared")
    closeInterface()
    // You would need to implement this functionality in the parent and pass it as a prop
  }

  const handleFrameworkSelect = (framework: StudyFramework) => {
    if (onFrameworkSelect) {
      onFrameworkSelect(framework);
    }
    closeInterface()
    toast.success(`Study mode activated: ${framework}`)
  }

  // Model selector component
  const ModelSelector = () => {
    const currentModel = models.find(model => model.value === selectedModel) || models[0];
    
    return (
      <div className="absolute bottom-full left-0 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-md overflow-hidden mb-1 text-neutral-900 dark:text-white">
        <div className="p-3">
          <div className="mb-2">
            <div className="text-base font-medium mb-1">Select model</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              Current: <span className="text-neutral-900 dark:text-white">{currentModel.label}</span>
            </div>
          </div>

          <div className="max-h-[200px] overflow-y-auto">
            {models.map((model) => (
              <div
                key={model.value}
                className={`py-1.5 px-2 cursor-pointer rounded-md text-sm ${
                  model.value === selectedModel 
                  ? "bg-neutral-100 dark:bg-neutral-800" 
                  : "hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                }`}
                onClick={() => handleModelSelect(model.value)}
              >
                <div className="flex flex-col">
                  <span>{model.label}</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{model.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">esc to cancel</div>
        </div>
      </div>
    )
  }

  // Help panel component
  const HelpPanel = () => (
    <div className="absolute bottom-full left-0 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-md overflow-hidden mb-1 text-neutral-900 dark:text-white">
      <div className="p-3">
        <div className="text-base font-medium mb-2">Commands</div>

        <div className="mb-3">
          {commands.map((command) => (
            <div key={command.name} className="flex justify-between py-0.5 text-sm">
              <span className="text-neutral-900 dark:text-white">{command.name}</span>
              <span className="text-neutral-500 dark:text-neutral-400">{command.description}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-200/50 dark:border-neutral-800/50 pt-2 mt-2">
          <div className="text-xs font-medium mb-1">Keyboard Shortcuts</div>
          <div className="grid grid-cols-2 gap-1 text-xs">
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">Tab</span>
              <span>Command completion</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">↑/↓</span>
              <span>Command history</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">Esc</span>
              <span>Close panel</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">Enter</span>
              <span>Submit</span>
            </div>
          </div>
        </div>

        <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">esc to close</div>
      </div>
    </div>
  )

  // Clear confirmation component
  const ClearConfirmation = () => (
    <div className="absolute bottom-full left-0 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-md overflow-hidden mb-1 text-neutral-900 dark:text-white">
      <div className="p-3">
        <div className="text-base font-medium mb-2">Clear conversation?</div>
        <p className="mb-3 text-xs text-neutral-500 dark:text-neutral-400">
          This will clear all messages. This action cannot be undone.
        </p>

        <div className="flex space-x-2">
          <button 
            onClick={handleClearChat}
            className="bg-red-500/90 text-white px-2 py-0.5 rounded text-xs hover:bg-red-600"
          >
            Clear
          </button>
          <button 
            onClick={closeInterface}
            className="bg-neutral-200/90 dark:bg-neutral-800/90 px-2 py-0.5 rounded text-xs hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white"
          >
            Cancel
          </button>
        </div>

        <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">esc to cancel</div>
      </div>
    </div>
  )

      return (
      <div className="relative w-full">
        {/* Command interfaces */}
        {activeInterface === "model" && <ModelSelector />}
        {activeInterface === "frameworks" && (
          <FrameworkSelector 
            onSelect={handleFrameworkSelect} 
            onClose={closeInterface} 
          />
        )}
        {activeInterface === "help" && <HelpPanel />}
        {activeInterface === "clear" && <ClearConfirmation />}

      {/* Command suggestions */}
      {showCommands && !activeInterface && (
        <div className="absolute bottom-full left-0 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-md overflow-hidden mb-1">
          {commands
            .filter((cmd) => cmd.name.startsWith(value))
            .map((command) => (
              <div
                key={command.name}
                className="flex justify-between px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 cursor-pointer text-sm"
                onClick={() => selectCommand(command.name)}
              >
                <span className="text-neutral-900 dark:text-white">{command.name}</span>
                <span className="text-neutral-500 dark:text-neutral-400 text-xs">{command.description}</span>
              </div>
            ))}
        </div>
      )}

      {/* Input field */}
      <div className="flex items-center gap-2 w-full p-1 rounded-md bg-transparent">
        <div className="flex items-center grow gap-2 bg-transparent">
          <span className="text-neutral-500 dark:text-neutral-400 select-none">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent outline-none border-none text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
            placeholder="Type a message or / for commands..."
            disabled={isProcessing}
          />
        </div>
        
        <div className="flex gap-1">
          {/* Hidden file input */}
          <input 
            ref={fileInputRef}
            type="file" 
            className="hidden"
            multiple
            accept="image/*,.pdf,.txt,.md,.csv"
          />
          
          {/* Send or Stop button with minimalist icon */}
          <Button
            type="button"
            onClick={isProcessing ? onStop : handleSubmit}
            disabled={!value.trim() && attachments.length === 0 && !isProcessing}
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800",
              isProcessing 
                ? "text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20" 
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            )}
          >
            {isProcessing ? (
              <span className="text-sm">■</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 14-9v18L5 12z"></path>
              </svg>
            )}
            <span className="sr-only">{isProcessing ? "Stop" : "Send"}</span>
          </Button>
        </div>
      </div>
      
      {/* Attachments display */}
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-1">
          {attachments.map((attachment, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-1.5 py-0.5 bg-neutral-50 dark:bg-neutral-800/50 rounded text-xs"
            >
              <span className="truncate max-w-[120px]">{attachment.name}</span>
              <button
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 ml-1"
                onClick={() => setAttachments(attachments.filter((_, i) => i !== index))}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 