# Task: Tiptap Editor with Custom Blocks

Phase reference: 4B.

Objectives

• Integrate Tiptap as the rich-text editor for journal entries.  
• Add custom _todo_ and _code_ blocks.  
• Ensure JSON persists and markdown export parity.

Implementation Steps

1. `pnpm add @tiptap/react @tiptap/starter-kit @tiptap/extension-code-block-lowlight lowlight`

2. Create `components/JournalEditor.tsx` that receives `entryId` and manages editor state.

3. Register custom _todo_ extension (checkbox + text) and _code_ block using lowlight for syntax highlighting.

4. Persist editor `getJSON()` to notebook state on every update debounce(500ms).

5. Add export util `lib/export/journal.ts` converting the JSON into markdown using `@tiptap/extension-markdown` or manual traverse for now.

Acceptance Checklist

✓ Typing in editor updates LocalStorage within 1 s.  
✓ Toggling a todo checkbox persists correctly.  
✓ Export util returns valid GFM markdown.

Commit: `feat(journal): tiptap editor + custom blocks`.
