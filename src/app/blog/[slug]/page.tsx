import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRecentPosts } from "@/lib/blog";
import AdPlaceholder from "@/components/layout/AdPlaceholder";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

// Generate static paths for all published posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Simple markdown to HTML converter (basic implementation)
function renderMarkdown(content: string): string {
  let html = content;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-foreground mt-8 mb-4">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-foreground mt-10 mb-4">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-foreground mt-10 mb-4">$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/gim, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>');
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Code blocks
  html = html.replace(/```([^`]+)```/gim, '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm"><code>$1</code></pre>');
  html = html.replace(/`([^`]+)`/gim, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');

  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li class="ml-4 list-disc text-foreground/80">$1</li>');
  html = html.replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4 list-decimal text-foreground/80">$2</li>');

  // Tables (basic support)
  html = html.replace(/\|(.+)\|/g, (match) => {
    const cells = match.split('|').filter(cell => cell.trim());
    const isHeader = cells.some(cell => cell.includes('---'));
    if (isHeader) return '';
    const cellHtml = cells.map(cell => `<td class="border border-border px-4 py-2">${cell.trim()}</td>`).join('');
    return `<tr>${cellHtml}</tr>`;
  });

  // Wrap tables
  html = html.replace(/(<tr>.*<\/tr>[\s\n]*)+/g, (match) => {
    return `<table class="w-full border-collapse border border-border my-4">${match}</table>`;
  });

  // Paragraphs
  html = html.split('\n\n').map(para => {
    if (para.startsWith('<') || para.trim() === '') return para;
    return `<p class="text-foreground/80 leading-relaxed mb-4">${para}</p>`;
  }).join('\n\n');

  // Line breaks
  html = html.replace(/\n/g, '<br/>');

  return html;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  const recentPosts = getRecentPosts(5).filter((p) => p.id !== post.id);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top Banner Ad */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <AdPlaceholder type="banner" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <article className="flex-1">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-foreground/60">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground truncate max-w-[200px]">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {post.featured && (
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    Featured
                  </span>
                )}
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-muted text-foreground/60 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-foreground/70 mb-6">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-foreground/60">
                <span>By {post.author}</span>
                <span>•</span>
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                {post.updatedAt !== post.publishedAt && (
                  <>
                    <span>•</span>
                    <span>Updated {formatDate(post.updatedAt)}</span>
                  </>
                )}
              </div>
            </header>

            {/* Article Body */}
            <div className="bg-background border border-border rounded-xl p-6 sm:p-8 lg:p-10">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
              />
            </div>

            {/* Article Footer */}
            <footer className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-muted text-foreground/70 text-sm rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
                >
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
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Blog
                </Link>
              </div>
            </footer>

            {/* Mobile Ad */}
            <div className="lg:hidden mt-8">
              <AdPlaceholder type="mobile" />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-72 space-y-6">
            {/* Recent Posts */}
            {recentPosts.length > 0 && (
              <div className="bg-background border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-4">
                  Recent Articles
                </h3>
                <div className="space-y-4">
                  {recentPosts.slice(0, 4).map((recentPost) => (
                    <Link
                      key={recentPost.id}
                      href={`/blog/${recentPost.slug}`}
                      className="block group"
                    >
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                        {recentPost.title}
                      </h4>
                      <span className="text-xs text-foreground/50">
                        {formatDate(recentPost.publishedAt)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Sidebar Ad */}
            <div className="sticky top-24">
              <AdPlaceholder type="sidebar" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}



