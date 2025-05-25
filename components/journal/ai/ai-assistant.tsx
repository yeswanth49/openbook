"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, MessageSquare, Lightbulb, Loader2, X, Copy, Check } from 'lucide-react'
import { useChat } from '@ai-sdk/react'
import { Block, BlockType } from '@/lib/types'
import { useSpaces } from '@/contexts/SpacesContext'
import { useRouter } from 'next/navigation'

interface AIAssistantProps {
  selectedBlocks: Block[]
  currentBlock?: Block
  onBlockUpdate?: (blockId: string, content: string) => void
  onCreateBlock?: (content: string, type?: BlockType) => void
  onClose: () => void
}

export default function AIAssistant({ 
  selectedBlocks, 
  currentBlock, 
  onBlockUpdate, 
  onCreateBlock,
  onClose 
}: AIAssistantProps) {
  const [activeFeature, setActiveFeature] = useState<'explain' | 'suggest' | 'ask-space' | null>(null)
  const [explanation, setExplanation] = useState<string>('')
  const [suggestion, setSuggestion] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const { createSpace, addMessage } = useSpaces()
  const router = useRouter()

  const { messages, input, handleInputChange, handleSubmit, isLoading: chatLoading } = useChat({
    api: '/api/search',
    body: {
      model: 'neuman-google',
      group: 'chat',
    },
  })

  const handleExplainBlocks = async () => {
    if (selectedBlocks.length === 0) return
    
    setActiveFeature('explain')
    setIsLoading(true)
    
    try {
      const context = selectedBlocks.map(block => block.content).join('\n\n')
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{
            role: 'user',
            content: `Please explain the following content from my journal in a clear and helpful way:\n\n${context}`
          }],
          model: 'neuman-google',
          group: 'chat',
        }),
      })

      if (!response.ok) throw new Error('Failed to get explanation')
      
      const reader = response.body?.getReader()
      if (!reader) throw new Error('No response body')

      let explanationText = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        
        const chunk = new TextDecoder().decode(value)
        const lines = chunk.split('\n')
        
        for (const line of lines) {
          if (line.startsWith('0:')) {
            try {
              const data = JSON.parse(line.slice(2))
              if (data.type === 'text-delta') {
                explanationText += data.textDelta
                setExplanation(explanationText)
              }
            } catch (e) {
              // Ignore parsing errors
            }
          }
        }
      }
    } catch (error) {
      console.error('Error explaining blocks:', error)
      setExplanation('Sorry, I encountered an error while explaining the content.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuggestContent = async () => {
    if (!currentBlock) return
    
    setActiveFeature('suggest')
    setIsLoading(true)
    
    try {
      const context = selectedBlocks.length > 0 
        ? selectedBlocks.map(block => block.content).join('\n\n')
        : 'No additional context provided'
      
      const prompt = `Based on the following context from my journal, suggest content for a ${currentBlock.type} block. The suggestion should be relevant, helpful, and fit naturally with the existing content.

Context:
${context}

Current block type: ${currentBlock.type}
Current block content: ${currentBlock.content || '(empty)'}

Please provide a thoughtful suggestion that would enhance this journal entry:`

      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: prompt }],
          model: 'neuman-google',
          group: 'chat',
        }),
      })

      if (!response.ok) throw new Error('Failed to get suggestion')
      
      const reader = response.body?.getReader()
      if (!reader) throw new Error('No response body')

      let suggestionText = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        
        const chunk = new TextDecoder().decode(value)
        const lines = chunk.split('\n')
        
        for (const line of lines) {
          if (line.startsWith('0:')) {
            try {
              const data = JSON.parse(line.slice(2))
              if (data.type === 'text-delta') {
                suggestionText += data.textDelta
                setSuggestion(suggestionText)
              }
            } catch (e) {
              // Ignore parsing errors
            }
          }
        }
      }
    } catch (error) {
      console.error('Error getting suggestion:', error)
      setSuggestion('Sorry, I encountered an error while generating a suggestion.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleAskInSpace = () => {
    if (selectedBlocks.length === 0) return
    
    const context = selectedBlocks.map(block => block.content).join('\n\n')
    const spaceName = `Journal Discussion - ${new Date().toLocaleTimeString()}`
    const newSpaceId = createSpace(spaceName)
    
    addMessage({ 
      role: 'user', 
      content: `I'd like to discuss this content from my journal:\n\n${context}\n\nCan you help me explore this further?` 
    })
    
    router.push(`/space/${newSpaceId}`)
  }

  const handleApplySuggestion = () => {
    if (currentBlock && suggestion && onBlockUpdate) {
      onBlockUpdate(currentBlock.id, suggestion)
      onClose()
    }
  }

  const handleCopyExplanation = async () => {
    if (explanation) {
      await navigator.clipboard.writeText(explanation)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleCreateNewBlock = () => {
    if (suggestion && onCreateBlock) {
      onCreateBlock(suggestion)
      onClose()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="bg-white dark:bg-neutral-900 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            AI Assistant
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          {!activeFeature && (
            <div className="space-y-3">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {selectedBlocks.length > 0 
                  ? `${selectedBlocks.length} block(s) selected`
                  : 'No blocks selected'
                }
              </p>

              <div className="grid gap-3">
                {selectedBlocks.length > 0 && (
                  <>
                    <button
                      onClick={handleExplainBlocks}
                      className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <Lightbulb className="h-5 w-5 text-blue-500" />
                      <div className="text-left">
                        <div className="font-medium">Explain Selected Blocks</div>
                        <div className="text-sm text-neutral-500">Get AI explanation of your content</div>
                      </div>
                    </button>

                    <button
                      onClick={handleAskInSpace}
                      className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <MessageSquare className="h-5 w-5 text-green-500" />
                      <div className="text-left">
                        <div className="font-medium">Ask in Space</div>
                        <div className="text-sm text-neutral-500">Start a conversation about this content</div>
                      </div>
                    </button>
                  </>
                )}

                {currentBlock && (
                  <button
                    onClick={handleSuggestContent}
                    className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <Cpu className="h-5 w-5 text-purple-500" />
                    <div className="text-left">
                      <div className="font-medium">Suggest Content</div>
                      <div className="text-sm text-neutral-500">Get AI suggestions for this block</div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          )}

          {activeFeature === 'explain' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Explanation</h3>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyExplanation}
                    className="flex items-center gap-1 px-2 py-1 text-sm rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                  <button
                    onClick={() => setActiveFeature(null)}
                    className="px-2 py-1 text-sm rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    Back
                  </button>
                </div>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="flex items-center gap-2 text-neutral-500">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating explanation...
                  </div>
                ) : (
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {explanation || 'No explanation generated yet.'}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeFeature === 'suggest' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Content Suggestion</h3>
                <button
                  onClick={() => setActiveFeature(null)}
                  className="px-2 py-1 text-sm rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  Back
                </button>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="flex items-center gap-2 text-neutral-500">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating suggestion...
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="prose prose-sm dark:prose-invert max-w-none p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                      {suggestion || 'No suggestion generated yet.'}
                    </div>
                    
                    {suggestion && (
                      <div className="flex gap-2">
                        <button
                          onClick={handleApplySuggestion}
                          className="px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
                        >
                          Apply to Current Block
                        </button>
                        <button
                          onClick={handleCreateNewBlock}
                          className="px-3 py-1.5 border border-neutral-300 dark:border-neutral-600 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 text-sm"
                        >
                          Create New Block
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
} 