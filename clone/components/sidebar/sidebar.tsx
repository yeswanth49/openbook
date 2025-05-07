"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Home,
  Inbox,
  Users,
  FileText,
  Calendar,
  CheckSquare,
  BookOpen,
  FileEdit,
  LifeBuoy,
  BarChart,
  BookMarked,
  Plus,
  Settings,
} from "lucide-react"

interface SidebarProps {
  isOpen: boolean
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const [activeSection, setActiveSection] = useState("private")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    shared: true,
    private: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  if (!isOpen) return null

  return (
    <div
      className="w-64 h-full bg-white border-r border-solid flex flex-col dark:bg-black"
      style={{ borderColor: "rgb(var(--border-color))" }}
    >
      <div
        className="h-12 border-b border-solid flex items-center px-4"
        style={{ borderColor: "rgb(var(--border-color))" }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-black bg-opacity-5 flex items-center justify-center text-xs dark:bg-white dark:bg-opacity-10">
            Y
          </div>
          <span className="font-medium text-sm">Yeswanth ...</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-1">
          <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
            <Search className="w-4 h-4 opacity-60" />
            <span className="text-sm opacity-80">Search</span>
          </div>

          <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
            <div className="w-4 h-4 flex items-center justify-center opacity-60">✨</div>
            <span className="text-sm opacity-80">Notion AI</span>
          </div>

          <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
            <Home className="w-4 h-4 opacity-60" />
            <span className="text-sm opacity-80">Home</span>
          </div>

          <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
            <Inbox className="w-4 h-4 opacity-60" />
            <span className="text-sm opacity-80">Inbox</span>
          </div>
        </div>

        <div className="mt-1">
          <div
            className="flex items-center justify-between p-2 cursor-pointer sidebar-item"
            onClick={() => toggleSection("shared")}
          >
            <span className="text-xs font-medium opacity-60">Shared</span>
            <div className="flex items-center">
              <Plus className="w-3 h-3 opacity-60 mr-1" />
              <span className="opacity-60 text-xs">{expandedSections.shared ? "−" : "+"}</span>
            </div>
          </div>

          {expandedSections.shared && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="px-1 overflow-hidden"
            >
              <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
                <Users className="w-4 h-4 opacity-60" />
                <span className="text-sm opacity-80">Shared pages will go here</span>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
                <span className="text-sm opacity-80">Start collaborating</span>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-1">
          <div
            className="flex items-center justify-between p-2 cursor-pointer sidebar-item"
            onClick={() => toggleSection("private")}
          >
            <span className="text-xs font-medium opacity-60">Private</span>
            <div className="flex items-center">
              <Plus className="w-3 h-3 opacity-60 mr-1" />
              <span className="opacity-60 text-xs">{expandedSections.private ? "−" : "+"}</span>
            </div>
          </div>

          {expandedSections.private && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="px-1 overflow-hidden"
            >
              <div className="flex items-center space-x-2 p-2 rounded bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 sidebar-item">
                <FileEdit className="w-4 h-4 opacity-80" />
                <span className="text-sm">Physics Notes</span>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
                <Calendar className="w-4 h-4 opacity-60" />
                <span className="text-sm opacity-80">Finance Tracker</span>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
                <BookOpen className="w-4 h-4 opacity-60" />
                <span className="text-sm opacity-80">Notebook</span>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
                <FileEdit className="w-4 h-4 opacity-60" />
                <span className="text-sm opacity-80">Quick Note</span>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
                <LifeBuoy className="w-4 h-4 opacity-60" />
                <span className="text-sm opacity-80">L i f e o s</span>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
                <CheckSquare className="w-4 h-4 opacity-60" />
                <span className="text-sm opacity-80">Habits</span>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
                <BarChart className="w-4 h-4 opacity-60" />
                <span className="text-sm opacity-80">Daily Manifest</span>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded sidebar-item">
                <BookMarked className="w-4 h-4 opacity-60" />
                <span className="text-sm opacity-80">Journal</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="p-3 border-t border-solid" style={{ borderColor: "rgb(var(--border-color))" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 opacity-60" />
            <span className="text-sm opacity-80">Templates</span>
          </div>
          <Settings className="w-4 h-4 opacity-60" />
        </div>
      </div>
    </div>
  )
}
