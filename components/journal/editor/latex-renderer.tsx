"use client"

import { useEffect, useRef } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface LaTeXRendererProps {
  formula: string
  block?: boolean
  errorColor?: string
}

export default function LaTeXRenderer({ 
  formula, 
  block = true, 
  errorColor = '#cc0000' 
}: LaTeXRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    
    try {
      katex.render(formula, containerRef.current, {
        throwOnError: false,
        errorColor,
        displayMode: block,
        output: 'html',
      })
    } catch (error) {
      console.error('Failed to render LaTeX formula:', error)
      if (containerRef.current) {
        containerRef.current.textContent = `Error: Could not render LaTeX: ${formula}`
        containerRef.current.style.color = errorColor
      }
    }
  }, [formula, block, errorColor])

  return (
    <div 
      className={`katex-container ${block ? 'block py-2' : 'inline-block'}`}
      ref={containerRef}
    />
  )
} 