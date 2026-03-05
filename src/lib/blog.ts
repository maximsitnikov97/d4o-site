import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type { PostMeta, Post } from "./blog-types";
export { CATEGORIES } from "./blog-categories";

import type { PostMeta, Post } from "./blog-types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} мин`;
}

function parsePost(filename: string): PostMeta | null {
  const slug = filename.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
  const { data, content } = matter(raw);

  if (!data.published) return null;

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    updatedAt: data.updatedAt,
    author: data.author ?? "Команда D4O",
    category: data.category ?? "",
    tags: data.tags ?? [],
    ogImage: data.ogImage,
    published: data.published ?? false,
    readingTime: estimateReadingTime(content),
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts: PostMeta[] = [];

  for (const filename of files) {
    const post = parsePost(filename);
    if (post) posts.push(post);
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    updatedAt: data.updatedAt,
    author: data.author ?? "Команда D4O",
    category: data.category ?? "",
    tags: data.tags ?? [],
    ogImage: data.ogImage,
    published: data.published ?? false,
    readingTime: estimateReadingTime(content),
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
