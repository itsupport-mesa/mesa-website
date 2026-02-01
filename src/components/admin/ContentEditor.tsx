"use client";

import { useState } from "react";
import { ContentBlock, ContentType } from "@prisma/client";
import { Save, Check, AlertCircle } from "lucide-react";

type ContentBlockWithEditor = ContentBlock & {
  lastEditedBy: { name: string | null } | null;
};

interface ContentEditorProps {
  contentByPage: Record<string, ContentBlockWithEditor[]>;
}

export function ContentEditor({ contentByPage }: ContentEditorProps) {
  const pages = Object.keys(contentByPage);
  const [activePage, setActivePage] = useState(pages[0] || "");
  const [editedBlocks, setEditedBlocks] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleContentChange = (blockId: string, content: string) => {
    setEditedBlocks((prev) => ({ ...prev, [blockId]: content }));
    // Clear saved state when content changes
    setSaved((prev) => {
      const next = new Set(prev);
      next.delete(blockId);
      return next;
    });
  };

  const handleSave = async (block: ContentBlockWithEditor) => {
    const content = editedBlocks[block.id] ?? block.content;
    setSaving(block.id);
    setErrors((prev) => {
      const next = { ...prev };
      delete next[block.id];
      return next;
    });

    try {
      const response = await fetch(`/api/admin/content/${block.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error("Failed to save");
      }

      setSaved((prev) => new Set(prev).add(block.id));
    } catch {
      setErrors((prev) => ({
        ...prev,
        [block.id]: "Failed to save. Please try again.",
      }));
    } finally {
      setSaving(null);
    }
  };

  const formatPageName = (page: string) => {
    return page
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getInputType = (contentType: ContentType) => {
    switch (contentType) {
      case "MARKDOWN":
      case "HTML":
        return "textarea";
      default:
        return "input";
    }
  };

  return (
    <div className="flex gap-6">
      {/* Page Navigation */}
      <div className="w-48 flex-shrink-0">
        <nav className="sticky top-24 space-y-1">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                activePage === page
                  ? "bg-mesa-green-50 text-mesa-green-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {formatPageName(page)}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Blocks */}
      <div className="flex-1 space-y-6">
        {contentByPage[activePage]?.map((block) => {
          const currentContent = editedBlocks[block.id] ?? block.content;
          const hasChanges = editedBlocks[block.id] !== undefined && editedBlocks[block.id] !== block.content;
          const isSaving = saving === block.id;
          const isSaved = saved.has(block.id);
          const error = errors[block.id];
          const inputType = getInputType(block.contentType);

          return (
            <div
              key={block.id}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{block.title}</h3>
                  <p className="text-sm text-gray-500">
                    Key: {block.key} | Type: {block.contentType}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {isSaved && !hasChanges && (
                    <span className="flex items-center gap-1 text-sm text-green-600">
                      <Check className="h-4 w-4" />
                      Saved
                    </span>
                  )}
                  <button
                    onClick={() => handleSave(block)}
                    disabled={isSaving || (!hasChanges && !error)}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      hasChanges
                        ? "bg-mesa-green-600 text-white hover:bg-mesa-green-700"
                        : "bg-gray-100 text-gray-400"
                    } disabled:cursor-not-allowed`}
                  >
                    <Save className="h-4 w-4" />
                    {isSaving ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>

              {error && (
                <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </div>
              )}

              {inputType === "textarea" ? (
                <textarea
                  value={currentContent}
                  onChange={(e) => handleContentChange(block.id, e.target.value)}
                  rows={8}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 font-mono text-sm focus:border-mesa-green-500 focus:outline-none focus:ring-1 focus:ring-mesa-green-500"
                />
              ) : (
                <input
                  type="text"
                  value={currentContent}
                  onChange={(e) => handleContentChange(block.id, e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-mesa-green-500 focus:outline-none focus:ring-1 focus:ring-mesa-green-500"
                />
              )}

              {block.lastEditedBy && (
                <p className="mt-2 text-xs text-gray-400">
                  Last edited by {block.lastEditedBy.name || "Unknown"} on{" "}
                  {new Date(block.updatedAt).toLocaleDateString()}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
