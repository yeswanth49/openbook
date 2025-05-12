"use client"

import { TerminalInput } from "@/components/terminal-input"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-2xl">
        <TerminalInput />
      </div>
    </main>
  )
}
