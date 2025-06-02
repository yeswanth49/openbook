"use client";

import { useUser } from '@/contexts/UserContext';
import { useNotebooks } from '@/contexts/NotebookContext';
import { useJournal } from '@/hooks/useJournal';
import { useSpaces } from '@/contexts/SpacesContext';

interface LimitIndicatorProps {
  notebookId: string;
}

export const LimitIndicator = ({ notebookId }: LimitIndicatorProps) => {
  const { premium } = useUser();
  const { notebooks } = useNotebooks();
  const { entries } = useJournal();
  const { spaces } = useSpaces();
  
  if (premium) return null; // Don't show for premium users
  
  const notebookEntries = entries.filter(entry => entry.notebook_id === notebookId);
  const notebookSpaces = spaces.filter(space => space.notebook_id === notebookId);
  
  return (
    <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 px-4">
      <div className="flex flex-col gap-1 py-1">
        <div className={`flex justify-between ${notebooks.length >= 3 ? 'text-amber-500 dark:text-amber-400' : ''}`}>
          <span>Notebooks:</span>
          <span>{notebooks.length}/3</span>
        </div>
        <div className={`flex justify-between ${notebookEntries.length >= 3 ? 'text-amber-500 dark:text-amber-400' : ''}`}>
          <span>Journals:</span>
          <span>{notebookEntries.length}/3</span>
        </div>
        <div className={`flex justify-between ${notebookSpaces.length >= 3 ? 'text-amber-500 dark:text-amber-400' : ''}`}>
          <span>Spaces:</span>
          <span>{notebookSpaces.length}/3</span>
        </div>
      </div>
    </div>
  );
}; 