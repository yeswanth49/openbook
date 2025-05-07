"use client";

import { useState } from "react";
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
  const [newTag, setNewTag] = useState("");

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
        <div className="p-4 flex flex-wrap items-center gap-2 border-b border-gray-200 dark:border-gray-700">
          {entry.tags?.map((tag) => (
            <div key={tag} className="flex items-center bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
              <span>{tag}</span>
              <button
                onClick={() => {
                  const newTags = (entry.tags || []).filter((t) => t !== tag);
                  updateEntry(idParam, { tags: newTags });
                }}
                className="ml-1 text-sm"
              >
                &times;
              </button>
            </div>
          ))}
          <input
            type="text"
            placeholder="Add tag..."
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && newTag.trim()) {
                const newTags = Array.from(new Set([...(entry.tags || []), newTag.trim()]));
                updateEntry(idParam, { tags: newTags });
                setNewTag("");
              }
            }}
            className="border rounded px-2 py-1 text-sm"
          />
        </div>
        <Editor
          initialBlocks={entry.blocks}
          title={entry.title}
          onBlocksChange={(blocks) =>
            updateEntry(idParam, {
              blocks,
              title: blocks[0]?.content || entry.title,
            })
          }
        />
      </main>
    </div>
  );
}
