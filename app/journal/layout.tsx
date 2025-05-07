'use client';

import React, { useState } from 'react';
import { JournalSidebar } from '@/components/journal/JournalSidebar';
import { useParams, useRouter } from 'next/navigation';

const SIDEBAR_WIDTH = 256;

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const params = useParams();
  const router = useRouter();
  const selectedEntryId = (params as { id?: string }).id;

  const handleSelect = (id: string) => {
    router.push(`/journal/${id}`);
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all">
      {sidebarOpen && (
        <div style={{ width: SIDEBAR_WIDTH }}>
          <JournalSidebar selectedEntryId={selectedEntryId} onSelect={handleSelect} />
        </div>
      )}
      <main
        className="flex-1 transition-all duration-300"
        style={{ marginLeft: sidebarOpen ? SIDEBAR_WIDTH : 0 }}
      >
        {children}
      </main>
    </div>
  );
} 