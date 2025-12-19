import fs from "fs";
import path from "path";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  tags: string[];
  coverImage?: string;
  status: "draft" | "published";
}

export type BlogPostInput = Omit<BlogPost, "id" | "slug" | "publishedAt" | "updatedAt">;

const BLOG_DATA_DIR = path.join(process.cwd(), "data", "blog");

// Ensure the blog data directory exists
function ensureDataDir() {
  if (!fs.existsSync(BLOG_DATA_DIR)) {
    fs.mkdirSync(BLOG_DATA_DIR, { recursive: true });
  }
}

// Generate a URL-friendly slug from a title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// Generate a unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

// Get all blog posts
export function getAllPosts(includeUnpublished = false): BlogPost[] {
  ensureDataDir();

  const postsFile = path.join(BLOG_DATA_DIR, "posts.json");

  if (!fs.existsSync(postsFile)) {
    fs.writeFileSync(postsFile, JSON.stringify([], null, 2));
    return [];
  }

  const data = fs.readFileSync(postsFile, "utf-8");
  const posts: BlogPost[] = JSON.parse(data);

  // Filter to published posts unless includeUnpublished is true
  const filteredPosts = includeUnpublished
    ? posts
    : posts.filter((post) => post.status === "published");

  // Sort by publishedAt date (newest first)
  return filteredPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts(true);
  return posts.find((post) => post.slug === slug) || null;
}

// Get a single post by ID
export function getPostById(id: string): BlogPost | null {
  const posts = getAllPosts(true);
  return posts.find((post) => post.id === id) || null;
}

// Create a new blog post
export function createPost(input: BlogPostInput): BlogPost {
  ensureDataDir();

  const posts = getAllPosts(true);
  const now = new Date().toISOString();

  // Generate unique slug
  let slug = generateSlug(input.title);
  let slugCounter = 1;
  while (posts.some((p) => p.slug === slug)) {
    slug = `${generateSlug(input.title)}-${slugCounter}`;
    slugCounter++;
  }

  const newPost: BlogPost = {
    ...input,
    id: generateId(),
    slug,
    publishedAt: now,
    updatedAt: now,
  };

  posts.push(newPost);
  savePosts(posts);

  return newPost;
}

// Update an existing blog post
export function updatePost(id: string, input: Partial<BlogPostInput>): BlogPost | null {
  const posts = getAllPosts(true);
  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    return null;
  }

  const existingPost = posts[postIndex];
  const now = new Date().toISOString();

  // If title changed, update slug
  let slug = existingPost.slug;
  if (input.title && input.title !== existingPost.title) {
    slug = generateSlug(input.title);
    let slugCounter = 1;
    while (posts.some((p) => p.slug === slug && p.id !== id)) {
      slug = `${generateSlug(input.title)}-${slugCounter}`;
      slugCounter++;
    }
  }

  const updatedPost: BlogPost = {
    ...existingPost,
    ...input,
    slug,
    updatedAt: now,
  };

  posts[postIndex] = updatedPost;
  savePosts(posts);

  return updatedPost;
}

// Delete a blog post
export function deletePost(id: string): boolean {
  const posts = getAllPosts(true);
  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    return false;
  }

  posts.splice(postIndex, 1);
  savePosts(posts);

  return true;
}

// Get featured posts
export function getFeaturedPosts(): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.featured).slice(0, 3);
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.tags.includes(tag.toLowerCase()));
}

// Get all unique tags
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

// Save posts to file
function savePosts(posts: BlogPost[]): void {
  ensureDataDir();
  const postsFile = path.join(BLOG_DATA_DIR, "posts.json");
  fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}

// Get recent posts (for sidebar/homepage)
export function getRecentPosts(limit = 5): BlogPost[] {
  return getAllPosts().slice(0, limit);
}



