import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogFrontmatter } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function parseBlogFile(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const fm = data as BlogFrontmatter;
  const stats = readingTime(content);

  return {
    slug,
    title: fm.title,
    excerpt: fm.excerpt,
    date: fm.date,
    category: fm.category,
    author: fm.author,
    readingTime: stats.text,
    image: fm.image,
    tags: fm.tags ?? [],
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .map(parseBlogFile)
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  return parseBlogFile(slug);
}

export function getRelatedPosts(current: BlogPost, limit = 3): BlogPost[] {
  const all = getAllPosts().filter((p) => p.slug !== current.slug);
  const sameCategory = all.filter((p) => p.category === current.category);
  const byTag = all.filter((p) =>
    p.tags.some((t) => current.tags.includes(t))
  );
  const combined = [...new Map([...sameCategory, ...byTag].map((p) => [p.slug, p])).values()];
  return combined.slice(0, limit);
}
