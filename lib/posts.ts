import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Journal posts live as markdown so the family can add a new day without touching React.
const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  authors: string;
  tags: string[];
  draft: boolean;
};

export type Post = PostMeta & {
  content: string;
};

function isMarkdownFile(name: string) {
  return name.endsWith(".md");
}

function asDateString(value: unknown): string {
  // js-yaml turns an unquoted `date: 2026-10-24` into a Date at UTC midnight.
  // String(date) is a timestamp, which breaks the journal heading and the calendar key.
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  return String(value ?? "");
}

function parsePost(filename: string): Post {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  // Quote YAML values that contain colons (summary: "A Pi: the brain") or gray-matter throws.
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    date: asDateString(data.date),
    summary: String(data.summary ?? ""),
    authors: String(data.authors ?? "The Fletcher family"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    // draft: true keeps a post in git but off the public site
    draft: Boolean(data.draft),
    content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter(isMarkdownFile)
    .map(parsePost)
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const post = parsePost(`${slug}.md`);
  // Drafts 404 on the public site so unpublished URLs are not guessable as live pages
  if (post.draft) return null;
  return post;
}

export function formatPostDate(date: string) {
  if (!date) return "";
  const parsed = new Date(`${date}T12:00:00`);
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
