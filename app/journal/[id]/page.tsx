"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Sidebar from "@/components/sidebar";
import Editor from "@/components/journal/editor/editor";
import { useJournal } from "@/hooks/useJournal";

const SIDEBAR_WIDTH = 256;

export default function JournalEntryPage() {
  const params = useParams();
  const idParam = params.id;
  const { getEntry, updateEntry, initialized } = useJournal();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Always ensure sidebar is open when navigating to a journal page
  useEffect(() => {
    // Force sidebar to be open on journal pages for better UX
    setSidebarOpen(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebar-isOpen', 'true');
    }
  }, [idParam]); // Re-run when journal ID changes

  if (!initialized) {
    return null;
  }

  if (typeof idParam !== "string") {
    return <div>Invalid journal ID</div>;
  }

  const entry = getEntry(idParam);
  if (!entry) {
    return <div>Journal entry not found</div>;
  }

  return (
    <div className="flex font-sans min-h-screen bg-background text-foreground transition-all duration-500">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <main
        className="flex-1 min-h-screen transition-all duration-300"
        style={{ marginLeft: sidebarOpen ? SIDEBAR_WIDTH : 0 }}
      >
        <Editor
          initialBlocks={entry.blocks}
          title={entry.title}
          onBlocksChange={(blocks) => 
            updateEntry(idParam, {
              blocks,
            })
          }
          onTitleChange={(newTitle) => {
            if (newTitle !== entry.title) {
              updateEntry(idParam, { title: newTitle });
            }
          }}
        />
      </main>
    </div>
  );
}
