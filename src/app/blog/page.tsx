import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getFeaturedPosts } from "@/lib/blog";

// Force static generation
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Unit Converter blog - Tips, guides, and articles about unit conversions, measurement systems, and more.",
  openGraph: {
    title: "Blog | Unit Converter",
    description:
      "Tips, guides, and articles about unit conversions and measurement systems.",
  },
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Blog
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Tips, guides, and articles about unit conversions and measurement systems.
        </p>
      </div>

      {allPosts.length === 0 ? (
        /* Coming Soon - if no posts */
        <div className="bg-card rounded-xl p-8 sm:p-12 shadow-sm border border-border text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Coming Soon!
          </h2>
          <p className="text-foreground/70 mb-6 max-w-md mx-auto">
            We&apos;re working on helpful articles about unit conversions, measurement 
            history, and practical tips. Check back soon!
          </p>
        </div>
      ) : (
        <>
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                          Featured
                        </span>
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-muted text-foreground/60 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-foreground/60">
                        <span>{post.author}</span>
                        <time dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt)}
                        </time>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {featuredPosts.length > 0 ? "All Articles" : "Articles"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {allPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
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
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-foreground/60">
                    <span>{post.author}</span>
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}



