import Link from "next/link";
import { formatPostDate, type PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/journal/${post.slug}`}
      className="block rounded-3xl border border-line bg-cream p-6 shadow-[var(--shadow)] transition-transform hover:-translate-y-0.5"
    >
      <p className="text-sm font-bold text-copper">{formatPostDate(post.date)}</p>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">{post.title}</h2>
      <p className="mt-2 text-ink-soft">{post.summary}</p>
      <p className="mt-4 text-sm font-bold text-ink">Read this day →</p>
    </Link>
  );
}
