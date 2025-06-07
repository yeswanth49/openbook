# Task: Message Skeleton & Export Stub

Phase reference: 3C.

Objective

Render a minimal message history view and placeholder for future export-to-Markdown without yet styling bubbles or AI avatars.

Implementation Steps

1. Create `components/SpaceChat.tsx`:
   • Accept `spaceId` prop.  
   • Pull messages from `useSpacesStore` by id.  
   • For now, render text-only blocks inside a `<div className="space-y-4">`.

2. Add simple “typing” skeleton when a message has `status:'loading'`.

3. Implement `exportChat(spaceId)` util in `lib/export/chat.ts` that returns markdown string. For this task it can return `<!-- TODO -->` sentinel.

4. Place a disabled “Export” button above the chat list for future wiring.

Acceptance Checklist

✓ Opening a space with no messages gives “No messages yet.” placeholder text.  
✓ Devtools network tab shows no extra requests – all local.  
✓ Clicking “Export” logs `<!-- TODO -->` to console.

Commit: `feat(spaces): message skeleton + export stub`.
