'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useJournal } from '../../../hooks/useJournal';
import Editor from '../../../components/journal/editor/editor';
import type { Block } from '../../../lib/types';

export default function JournalPage() {
  const params = useParams();
  const id = params.id as string;
  const { getEntry, updateEntry } = useJournal();
  const entry = getEntry(id);

  if (!entry) {
    return <div>Loading...</div>;
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateEntry(id, { title: e.target.value });
  };

  const handleBlocksChange = (blocks: Block[]) => {
    updateEntry(id, { blocks });
  };

  return (
    <div className="h-full">
      <Editor
        initialBlocks={entry.blocks}
        onBlocksChange={(blocks) => handleBlocksChange(blocks)}
      />
    </div>
  );
} 