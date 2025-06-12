import { useState, useEffect, useCallback } from 'react';
import { JournalEntry, Block } from '../lib/types';
import { useUser } from '@/contexts/UserContext';
import { useLimitModal } from '@/contexts/LimitModalContext';

import { JOURNAL_ENTRIES_KEY } from '@/lib/storageKeys';

const STORAGE_KEY = JOURNAL_ENTRIES_KEY;
const JOURNAL_LIMIT = 3;

// -----------------------------------------------------------------------------
// Helper utilities
// -----------------------------------------------------------------------------

/**
 * Generate a unique "Untitled" style title within the provided entries scope.
 * If other "Untitled" or "Untitled n" titles exist (optionally scoped to a
 * notebook), this helper will increment the numeric suffix to ensure the
 * returned title is unique.
 */
function generateUniqueUntitledTitle(entries: JournalEntry[], notebook_id?: string): string {
    const baseTitle = 'Untitled';

    const relevantEntries = notebook_id ? entries.filter((e) => e.notebook_id === notebook_id) : entries;
    const existingTitles = new Set(relevantEntries.map((e) => e.title));

    // If "Untitled" itself is free we can return it directly.
    if (!existingTitles.has(baseTitle)) return baseTitle;

    let suffix = 2; // start from 2 because "Untitled" is considered the first
    let candidate = `${baseTitle} ${suffix}`;

    while (existingTitles.has(candidate)) {
        suffix += 1;
        candidate = `${baseTitle} ${suffix}`;
    }

    return candidate;
}

export function useJournal() {
    const [entries, setEntries] = useState<JournalEntry[]>([]);
    const [initialized, setInitialized] = useState(false);
    const { premium } = useUser();
    const { showLimitModal } = useLimitModal();

    // Load entries from localStorage on mount
    useEffect(() => {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            try {
                setEntries(JSON.parse(data));
            } catch (e) {
                console.error('Failed to parse journal entries from storage', e);
            }
        }
        // Mark as initialized whether or not data was present
        setInitialized(true);
    }, []);

    // Persist entries on change, but skip initial load to avoid overwriting
    useEffect(() => {
        if (!initialized) {
            return;
        }

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
        } catch (e) {
            console.error('Failed to persist entries', e);
        }
    }, [entries, initialized]);

    // Helper function to safely save entries to localStorage
    const saveEntries = useCallback((updatedEntries: JournalEntry[]) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
        } catch (e) {
            console.error('Failed to persist entries', e);
        }
        return updatedEntries;
    }, []);

    const createEntry = useCallback(
        (title: string, notebook_id?: string) => {
            if (!premium && notebook_id) {
                // Count existing entries for this notebook
                const notebookEntries = entries.filter((entry) => entry.notebook_id === notebook_id);
                if (notebookEntries.length >= JOURNAL_LIMIT) {
                    showLimitModal(
                        `You've reached the maximum of ${JOURNAL_LIMIT} journals per notebook in the free plan. Upgrade to premium for unlimited journals.`,
                        'journal',
                    );
                    return null;
                }
            }

            const now = new Date().toISOString();
            const id =
                typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
                    ? crypto.randomUUID()
                    : Math.random().toString(36).substring(2, 9);

            // Determine a unique default title when the input title is empty or auto-generated
            const trimmedInputTitle = title.trim();
            const defaultTitle = generateUniqueUntitledTitle(entries, notebook_id);

            // Use input title only if it's non-empty and not an auto-generated placeholder
            const finalTitle = !trimmedInputTitle || trimmedInputTitle === 'Untitled' ? defaultTitle : trimmedInputTitle;

            const newEntry: JournalEntry = {
                id,
                title: finalTitle,
                blocks: [],
                createdAt: now,
                updatedAt: now,
                notebook_id,
            };

            setEntries((prev) => {
                const updated = [newEntry, ...prev];
                // No need to save here, the useEffect will handle it
                return updated;
            });

            return newEntry;
        },
        [entries, premium, showLimitModal],
    );

    const updateEntry = useCallback((id: string, updates: Partial<Pick<JournalEntry, 'title' | 'blocks'>>) => {
        setEntries((prev) => {
            return prev.map((entry) => {
                if (entry.id !== id) return entry;

                // Prepare new values defaulting to current ones
                let newTitle = entry.title;
                let newBlocks = entry.blocks;

                if (updates.title !== undefined) {
                    const trimmed = updates.title.trim();

                    if (trimmed) {
                        // Non-empty explicit title provided by the user
                        newTitle = trimmed;
                    } else {
                        // Empty/whitespace title – fall back to a unique auto-generated one
                        newTitle = generateUniqueUntitledTitle(prev, entry.notebook_id);
                    }
                }

                if (updates.blocks !== undefined) {
                    newBlocks = updates.blocks;
                }

                return {
                    ...entry,
                    title: newTitle,
                    blocks: newBlocks,
                    updatedAt: new Date().toISOString(),
                };
            });
        });
    }, []);

    const deleteEntry = useCallback((id: string) => {
        setEntries((prev) => {
            const updated = prev.filter((entry) => entry.id !== id);
            // No need to save here, the useEffect will handle it
            return updated;
        });
    }, []);

    const getEntry = useCallback(
        (id: string) => {
            return entries.find((entry) => entry.id === id);
        },
        [entries],
    );

    const searchEntries = useCallback(
        (query: string) => {
            const lower = query.toLowerCase().trim();
            if (!lower) return [];

            return entries
                .filter(
                    (entry) =>
                        entry.title.toLowerCase().includes(lower) ||
                        entry.blocks.some((block) => block.content.toLowerCase().includes(lower)),
                )
                .map((entry) => {
                    // Find matching block content for context
                    const matchingBlock = entry.blocks.find((block) => block.content.toLowerCase().includes(lower));

                    return {
                        ...entry,
                        match: matchingBlock
                            ? {
                                  text: matchingBlock.content,
                                  context: 'content',
                              }
                            : {
                                  text: entry.title,
                                  context: 'title',
                              },
                    };
                });
        },
        [entries],
    );

    return {
        entries,
        createEntry,
        updateEntry,
        deleteEntry,
        getEntry,
        searchEntries,
        initialized,
    };
}
