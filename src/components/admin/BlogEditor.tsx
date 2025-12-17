"use client";

import { useState } from "react";

interface BlogEditorProps {
  initialData?: {
    title: string;
    excerpt: string;
    content: string;
    author: string;
    tags: string[];
    status: "draft" | "published";
    featured: boolean;
  };
  onSubmit: (data: {
    title: string;
    excerpt: string;
    content: string;
    author: string;
    tags: string[];
    status: "draft" | "published";
    featured: boolean;
  }) => void;
  isLoading: boolean;
  isEdit?: boolean;
}

export default function BlogEditor({
  initialData,
  onSubmit,
  isLoading,
  isEdit = false,
}: BlogEditorProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [author, setAuthor] = useState(initialData?.author || "Unit Converter Team");
  const [tagsInput, setTagsInput] = useState(initialData?.tags.join(", ") || "");
  const [status, setStatus] = useState<"draft" | "published">(
    initialData?.status || "draft"
  );
  const [featured, setFeatured] = useState(initialData?.featured || false);
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const tags = tagsInput
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter((tag) => tag.length > 0);

    onSubmit({
      title,
      excerpt,
      content,
      author,
      tags,
      status,
      featured,
    });
  };

  // Simple markdown preview
  const renderPreview = () => {
    let html = content;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');

    // Bold and italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/gim, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Code blocks
    html = html.replace(/```([^`]+)```/gim, '<pre class="bg-muted p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto"><code>$1</code></pre>');
    html = html.replace(/`([^`]+)`/gim, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');

    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li class="ml-4 list-disc">$1</li>');

    // Paragraphs
    html = html.split('\n\n').map(para => {
      if (para.startsWith('<') || para.trim() === '') return para;
      return `<p class="mb-4">${para}</p>`;
    }).join('\n\n');

    // Line breaks
    html = html.replace(/\n/g, '<br/>');

    return html;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div className="bg-background border border-border rounded-xl p-6">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-foreground/70 mb-2"
        >
          Title *
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter post title..."
          required
        />
      </div>

      {/* Excerpt */}
      <div className="bg-background border border-border rounded-xl p-6">
        <label
          htmlFor="excerpt"
          className="block text-sm font-medium text-foreground/70 mb-2"
        >
          Excerpt * <span className="text-foreground/50">(Short description for previews)</span>
        </label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="A brief summary of the post..."
          required
        />
      </div>

      {/* Content */}
      <div className="bg-background border border-border rounded-xl overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-border">
          <button
            type="button"
            onClick={() => setActiveTab("write")}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === "write"
                ? "bg-muted text-foreground border-b-2 border-primary"
                : "text-foreground/60 hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Write
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === "preview"
                ? "bg-muted text-foreground border-b-2 border-primary"
                : "text-foreground/60 hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Preview
            </span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {activeTab === "write" ? (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-foreground/70"
                >
                  Content * <span className="text-foreground/50">(Markdown supported)</span>
                </label>
                <span className="text-xs text-foreground/50">
                  Supports: **bold**, *italic*, # headers, `code`, lists
                </span>
              </div>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={16}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                placeholder="Write your blog post content here...

## Example Header

This is a paragraph with **bold** and *italic* text.

- List item 1
- List item 2

`inline code` or:

```
code block
```"
                required
              />
            </div>
          ) : (
            <div className="min-h-[400px] prose max-w-none">
              {content ? (
                <div
                  className="text-foreground"
                  dangerouslySetInnerHTML={{ __html: renderPreview() }}
                />
              ) : (
                <p className="text-foreground/50 italic">
                  Nothing to preview yet. Start writing!
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Meta Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Author */}
        <div className="bg-background border border-border rounded-xl p-6">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-foreground/70 mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Author name"
          />
        </div>

        {/* Tags */}
        <div className="bg-background border border-border rounded-xl p-6">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-foreground/70 mb-2"
          >
            Tags <span className="text-foreground/50">(comma-separated)</span>
          </label>
          <input
            type="text"
            id="tags"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="e.g., education, temperature, tips"
          />
        </div>
      </div>

      {/* Options */}
      <div className="bg-background border border-border rounded-xl p-6">
        <h3 className="text-sm font-medium text-foreground/70 mb-4">Options</h3>
        <div className="flex flex-wrap gap-6">
          {/* Status */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-foreground/70">Status:</span>
            <div className="flex rounded-lg overflow-hidden border border-border">
              <button
                type="button"
                onClick={() => setStatus("draft")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  status === "draft"
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    : "bg-background text-foreground/60 hover:bg-muted"
                }`}
              >
                Draft
              </button>
              <button
                type="button"
                onClick={() => setStatus("published")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  status === "published"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-background text-foreground/60 hover:bg-muted"
                }`}
              >
                Published
              </button>
            </div>
          </div>

          {/* Featured */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="w-5 h-5 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
            />
            <span className="text-sm text-foreground/70">Featured post</span>
          </label>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="px-6 py-3 border border-border text-foreground/70 font-medium rounded-lg hover:bg-muted transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading || !title || !excerpt || !content}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              {isEdit ? "Saving..." : "Creating..."}
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {isEdit ? "Save Changes" : "Create Post"}
            </>
          )}
        </button>
      </div>
    </form>
  );
}

