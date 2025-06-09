'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import SlashCommandMenu from './slash-command-menu';
import EditorContent from './editor-content';
import EmptyState from './empty-state';
import { type Block, BlockType } from '@/lib/types';
import { marked } from 'marked';
import { useSpaces } from '@/contexts/SpacesContext';
import { useRouter } from 'next/navigation';

interface EditorProps {
    initialBlocks?: Block[];
    onBlocksChange?: (blocks: Block[]) => void;
    title?: string;
    onTitleChange?: (title: string) => void;
}

/**
 * A rich text journal editor component with block-based editing, markdown shortcuts, slash command menu, and theme toggling.
 *
 * Supports dynamic creation, deletion, duplication, and reordering of content blocks. Users can change block types via markdown-like shortcuts or a slash command menu, paste markdown to be parsed as HTML, and toggle between light and dark themes. Integrates with a "Spaces" context to create new collaborative conversations from selected blocks.
 *
 * @param initialBlocks - Optional initial array of content blocks to populate the editor.
 * @param onBlocksChange - Optional callback invoked when the blocks array changes.
 * @param title - Optional initial title for the editor.
 * @param onTitleChange - Optional callback invoked when the title changes.
 *
 * @returns The rendered editor component.
 */
export default function Editor({ initialBlocks, onBlocksChange, title, onTitleChange }: EditorProps) {
    const [blocks, setBlocks] = useState<Block[]>(
        () => initialBlocks ?? [{ id: Date.now().toString(), type: BlockType.Text, content: '', isFocused: true }],
    );

    // Create a more descriptive default title
    const defaultTitle = `Journal - ${new Date().toLocaleDateString()}`;
    const [currentTitle, setCurrentTitle] = useState(title || defaultTitle);

    const [showSlashMenu, setShowSlashMenu] = useState(false);
    const [slashMenuPosition, setSlashMenuPosition] = useState({ top: 0, left: 0 });
    const [currentBlockId, setCurrentBlockId] = useState<string>(blocks[0]?.id || '');
    const [isLoading, setIsLoading] = useState(true);

    const editorRef = useRef<HTMLDivElement>(null);

    // Spaces integration for 'Ask in spaces'
    const router = useRouter();
    const { createSpace, addMessage } = useSpaces();

    // Theme toggle component
    const ThemeToggle: React.FC = () => {
        const { resolvedTheme, setTheme } = useTheme();

        return (
            <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                title="Toggle theme"
            >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </button>
        );
    };

    useEffect(() => {
        // Initialize loading state
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    // Sync initial blocks
    useEffect(() => {
        if (initialBlocks) {
            setBlocks(initialBlocks);
            setCurrentBlockId(initialBlocks[0]?.id || '');
        }
    }, [initialBlocks]);

    // Sync title from props
    useEffect(() => {
        if (title && title !== currentTitle) {
            setCurrentTitle(title);
        }
    }, [title, currentTitle]);

    const updateBlocks = (updated: Block[]) => {
        setBlocks(updated);
        onBlocksChange?.(updated);
    };

    const handleTitleChange = (newTitle: string) => {
        setCurrentTitle(newTitle);
        onTitleChange?.(newTitle);
    };

    // Handle pasting markdown: insert parsed HTML inline
    const handlePaste = async (e: React.ClipboardEvent<HTMLDivElement>) => {
        e.preventDefault();
        // Get plain markdown text
        const markdown = e.clipboardData.getData('text/plain');
        // Parse to HTML
        const html = await marked.parse(markdown);
        // Insert HTML at cursor
        document.execCommand('insertHTML', false, html);
    };

    const handleKeyDown = (e: React.KeyboardEvent, blockId: string) => {
        const blockIndex = blocks.findIndex((b) => b.id === blockId);
        if (blockIndex === -1) return;
        const block = blocks[blockIndex];

        if (e.key === '/') {
            e.preventDefault();
            setCurrentBlockId(blockId);
            setShowSlashMenu(true);
            const blockElement = document.getElementById(`block-${blockId}`);
            if (blockElement) {
                const rect = blockElement.getBoundingClientRect();
                setSlashMenuPosition({ top: rect.bottom, left: rect.left });
            }
        } else if (e.key === 'Escape' && showSlashMenu) {
            setShowSlashMenu(false);
        } else if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const newBlock: Block = {
                id: Date.now().toString(),
                type: BlockType.Text,
                content: '',
                isFocused: true,
            };
            const updated = [...blocks];
            updated[blockIndex] = { ...updated[blockIndex], isFocused: false };
            updated.splice(blockIndex + 1, 0, newBlock);
            updateBlocks(updated);
            setCurrentBlockId(newBlock.id);
        } else if (e.key === 'Backspace' && block.content === '' && blocks.length > 1) {
            e.preventDefault();
            const updated = [...blocks];
            updated.splice(blockIndex, 1);
            const newFocus = Math.max(0, blockIndex - 1);
            updated[newFocus] = { ...updated[newFocus], isFocused: true };
            updateBlocks(updated);
            setCurrentBlockId(updated[newFocus].id);
        } else if (e.key === 'ArrowUp' && !e.shiftKey) {
            // Only handle arrow up if at the start of the text
            const selection = window.getSelection();
            const range = selection?.getRangeAt(0);
            const container = range?.startContainer;
            const offset = range?.startOffset;

            if (offset === 0 && blockIndex > 0) {
                e.preventDefault();
                const updated = [...blocks];
                updated.forEach((blk) => (blk.isFocused = false));
                updated[blockIndex - 1].isFocused = true;
                updateBlocks(updated);
                setCurrentBlockId(updated[blockIndex - 1].id);
            }
        } else if (e.key === 'ArrowDown' && !e.shiftKey) {
            // Only handle arrow down if at the end of the text
            const selection = window.getSelection();
            const range = selection?.getRangeAt(0);
            const container = range?.startContainer;
            const offset = range?.startOffset;
            const length = container?.textContent?.length || 0;

            if (offset === length && blockIndex < blocks.length - 1) {
                e.preventDefault();
                const updated = [...blocks];
                updated.forEach((blk) => (blk.isFocused = false));
                updated[blockIndex + 1].isFocused = true;
                updateBlocks(updated);
                setCurrentBlockId(updated[blockIndex + 1].id);
            }
        } else if (block.content === '#' && e.key === ' ') {
            e.preventDefault();
            updateBlocks(blocks.map((blk) => (blk.id === blockId ? { ...blk, type: BlockType.H1, content: '' } : blk)));
        } else if (block.content === '##' && e.key === ' ') {
            e.preventDefault();
            updateBlocks(blocks.map((blk) => (blk.id === blockId ? { ...blk, type: BlockType.H2, content: '' } : blk)));
        } else if (block.content === '###' && e.key === ' ') {
            e.preventDefault();
            updateBlocks(blocks.map((blk) => (blk.id === blockId ? { ...blk, type: BlockType.H3, content: '' } : blk)));
        } else if (block.content === '-' && e.key === ' ') {
            e.preventDefault();
            updateBlocks(
                blocks.map((blk) => (blk.id === blockId ? { ...blk, type: BlockType.BulletList, content: '' } : blk)),
            );
        } else if (block.content === '1.' && e.key === ' ') {
            e.preventDefault();
            updateBlocks(
                blocks.map((blk) => (blk.id === blockId ? { ...blk, type: BlockType.NumberedList, content: '' } : blk)),
            );
        } else if (block.content === '[]' && e.key === ' ') {
            e.preventDefault();
            updateBlocks(
                blocks.map((blk) => (blk.id === blockId ? { ...blk, type: BlockType.TodoList, content: '' } : blk)),
            );
        } else if (block.content === '>' && e.key === ' ') {
            e.preventDefault();
            updateBlocks(
                blocks.map((blk) => (blk.id === blockId ? { ...blk, type: BlockType.Quote, content: '' } : blk)),
            );
        } else if (block.content === '---' && e.key === ' ') {
            e.preventDefault();
            updateBlocks(
                blocks.map((blk) => (blk.id === blockId ? { ...blk, type: BlockType.Divider, content: '' } : blk)),
            );
        } else if (block.content === '```' && e.key === ' ') {
            e.preventDefault();
            updateBlocks(
                blocks.map((blk) => (blk.id === blockId ? { ...blk, type: BlockType.Code, content: '' } : blk)),
            );
        }
    };

    const handleBlockChange = (id: string, content: string) => {
        updateBlocks(blocks.map((blk) => (blk.id === id ? { ...blk, content } : blk)));
    };

    const handleBlockFocus = (id: string) => {
        updateBlocks(blocks.map((blk) => ({ ...blk, isFocused: blk.id === id })));
        setCurrentBlockId(id);
    };

    const handleDeleteBlock = (id: string) => {
        const updated = blocks.filter((block) => block.id !== id);
        if (updated.length === 0) {
            // If we deleted the last block, add a new empty one
            updated.push({
                id: Date.now().toString(),
                type: BlockType.Text,
                content: '',
                isFocused: true,
            });
        } else {
            // Focus the previous block or the next one if we deleted the first
            const index = blocks.findIndex((block) => block.id === id);
            const newFocusIndex = Math.max(0, index > 0 ? index - 1 : 0);
            updated[newFocusIndex] = { ...updated[newFocusIndex], isFocused: true };
        }
        updateBlocks(updated);
    };

    const handleDuplicateBlock = (id: string) => {
        const blockToDuplicate = blocks.find((block) => block.id === id);
        if (!blockToDuplicate) return;

        const index = blocks.findIndex((block) => block.id === id);
        const duplicatedBlock = {
            ...blockToDuplicate,
            id: Date.now().toString(),
            isFocused: true,
        };

        const updated = [...blocks];
        // Remove focus from all blocks
        updated.forEach((block) => (block.isFocused = false));
        // Insert the duplicated block after the original
        updated.splice(index + 1, 0, duplicatedBlock);

        updateBlocks(updated);
    };

    const handleCommandSelect = (type: BlockType) => {
        setShowSlashMenu(false);
        updateBlocks(blocks.map((blk) => (blk.id === currentBlockId ? { ...blk, type } : blk)));
    };

    // Spaces integration for 'Ask in spaces'
    const handleCreateSpaceConversation = (selectedBlocks: Block[]) => {
        // Create a new space and navigate to it
        const spaceName = `Conversation ${new Date().toLocaleTimeString()}`;
        const newSpaceId = createSpace(spaceName);
        // Compile context and send as initial user message
        const context = selectedBlocks.map((b) => b.content).join('\n\n');
        addMessage({ role: 'user', content: `Here is the context for your conversation:\n${context}` });
        // Redirect to the new space conversation
        router.push(`/space/${newSpaceId}`);
    };

    if (isLoading) {
        return (
            <div className="flex h-full items-center justify-center bg-white text-black dark:bg-black dark:text-white">
                <div className="flex flex-col items-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-t-2 border-b-2 border-black dark:border-white"></div>
                    <p className="mt-4 text-sm font-light">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-white text-black dark:bg-neutral-900 dark:text-white">
            <header className="flex h-20 items-center px-8" style={{ borderBottom: 'none' }}>
                <div className="flex items-center space-x-2 w-full max-w-2xl mx-auto">
                    <input
                        type="text"
                        className="text-3xl font-bold bg-transparent border-none outline-none focus:ring-0 w-full opacity-90 focus:opacity-100"
                        value={currentTitle}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        placeholder={defaultTitle}
                    />
                    <ThemeToggle />
                </div>
            </header>

            <div ref={editorRef} className="flex-1 overflow-y-auto py-8 px-8" onPaste={handlePaste}>
                <div className="max-w-2xl mx-auto">
                    {blocks.length === 0 ? (
                        <EmptyState
                            onCreateBlock={() =>
                                updateBlocks([
                                    { id: Date.now().toString(), type: BlockType.Text, content: '', isFocused: true },
                                ])
                            }
                        />
                    ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                            <EditorContent
                                blocks={blocks}
                                onKeyDown={handleKeyDown}
                                onChange={handleBlockChange}
                                onFocus={handleBlockFocus}
                                onDeleteBlock={handleDeleteBlock}
                                onDuplicateBlock={handleDuplicateBlock}
                                onBlocksChange={updateBlocks}
                                onCreateSpaceConversation={handleCreateSpaceConversation}
                            />
                        </motion.div>
                    )}
                    {showSlashMenu && (
                        <SlashCommandMenu
                            position={slashMenuPosition}
                            onSelect={handleCommandSelect}
                            onClose={() => setShowSlashMenu(false)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
