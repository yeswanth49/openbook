import { Extensions } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight'
import { Extension } from '@tiptap/core'
import { Node } from '@tiptap/core'

// Custom LaTeX extension
const LaTeX = Node.create({
  name: 'latex',
  group: 'block',
  content: 'text*',
  
  addAttributes() {
    return {
      rendered: {
        default: '',
      },
    }
  },
  
  parseHTML() {
    return [
      {
        tag: 'latex-block',
      },
    ]
  },
  
  renderHTML({ HTMLAttributes }) {
    return ['latex-block', HTMLAttributes, 0]
  },
})

// Custom drag handle extension
const DragHandle = Extension.create({
  name: 'dragHandle',
  
  addAttributes() {
    return {
      draggable: {
        default: true,
      },
    }
  },
})

// Create Persistent Storage extension
const PersistentStorage = Extension.create({
  name: 'persistentStorage',
  
  addStorage() {
    return {
      saveContent: (content: string) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('tiptap-content', content)
        }
      },
      
      loadContent: () => {
        if (typeof window !== 'undefined') {
          return localStorage.getItem('tiptap-content')
        }
        return null
      },
    }
  },
})

export const getTiptapExtensions = (): Extensions => {
  return [
    StarterKit.configure({
      heading: { levels: [1, 2, 3] },
    }),
    Image.configure({
      allowBase64: true,
      inline: false,
    }),
    Table.configure({
      resizable: true,
    }),
    TableRow,
    TableCell,
    TableHeader,
    HorizontalRule,
    CodeBlockLowlight.configure({
      lowlight,
      defaultLanguage: 'javascript',
    }),
    LaTeX,
    DragHandle,
    PersistentStorage,
  ]
}

export const getInitialTiptapContent = (): string => {
  if (typeof window !== 'undefined') {
    const savedContent = localStorage.getItem('tiptap-content')
    if (savedContent) {
      return savedContent
    }
  }
  
  // Default initial content
  return `
    <h1>Welcome to your journal</h1>
    <p>Start writing or use the slash command to add different elements.</p>
  `
} 