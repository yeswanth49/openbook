"use client"

import { motion } from "framer-motion"
import { FileText, Plus } from "lucide-react"

interface EmptyStateProps {
  onCreateBlock: () => void
}

export default function EmptyState({ onCreateBlock }: EmptyStateProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-64 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="mb-6"
      >
        <div className="w-20 h-20 mx-auto mb-4 relative">
          <div className="absolute inset-0 border border-solid rounded-lg transform rotate-3 opacity-10"></div>
          <div className="absolute inset-0 border border-solid rounded-lg transform -rotate-3 opacity-10"></div>
          <div className="absolute inset-0 border border-solid rounded-lg flex items-center justify-center">
            <FileText className="w-8 h-8 opacity-30" />
          </div>
        </div>
      </motion.div>

      <h3 className="text-xl font-medium mb-2">Start writing</h3>
      <p className="opacity-60 mb-6 max-w-sm">Begin typing or use the slash command to insert content blocks</p>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onCreateBlock}
        className="flex items-center px-4 py-2 bg-black bg-opacity-5 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-5 dark:hover:bg-opacity-10 rounded transition-colors"
      >
        <Plus className="w-4 h-4 mr-2" />
        <span>New block</span>
      </motion.button>
    </motion.div>
  )
}
