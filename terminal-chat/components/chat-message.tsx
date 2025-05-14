"use client"

import { cn } from "@/lib/utils"

type ChatMessageProps = {
  message: {
    id: string
    content: string
    role: "user" | "assistant"
  }
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] px-3 py-2 rounded",
          isUser ? "bg-[#333333]" : "bg-transparent",
          !isUser && "border-l-2 border-white pl-3",
        )}
      >
        {isUser ? (
          <div className="text-white">{message.content}</div>
        ) : (
          <div>
            <div className="text-white text-xs mb-1">AI</div>
            <div className="text-white whitespace-pre-line">{message.content}</div>
          </div>
        )}
      </div>
    </div>
  )
}
