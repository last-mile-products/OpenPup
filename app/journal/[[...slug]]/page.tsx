import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EmptyState } from "@/components/EmptyState";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PostCard } from "@/components/PostCard";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";

// Optional catch-all so static export still works with zero published posts
// (`output: "export"` cannot emit an empty generateStaticParams list).
type JournalParams = { slug?: string[] };

export function generateStaticParams() {
  return [
    { slug: [] },
    ...getAllPosts().map((post) => ({ slug: [post.slug] })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<JournalParams>;
}): Promise<Metadata> {
  const slug = (await params).slug?.[0];
  if (!slug) {
    return { title: "Journal", description: "Build-day notes, photos, and the story of OpenPup." };
  }
  const post = getPost(slug);
  if (!post) return { title: "Missing post" };
  return { title: post.title, description: post.summary };
}

export default async function JournalPage({
  params,
}: {
  params: Promise<JournalParams>;
}) {
  const parts = (await params).slug ?? [];

  if (parts.length > 1) notFound();

  if (parts.length === 1) {
    const post = getPost(parts[0]);
    if (!post) notFound();

    return (
      <article className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-sm font-extrabold text-copper">{formatPostDate(post.date)}</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-balance">{post.title}</h1>
        <p className="mt-3 text-ink-soft">{post.authors}</p>
        <div className="mt-8">
          <MarkdownBody content={post.content} />
        </div>
      </article>
    );
  }

  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-copper">The journey</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Journal</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-soft">
        One post per build day — or whenever something funny happens.
      </p>
      <div className="mt-8">
        {posts.length === 0 ? (
          <EmptyState title="No entries yet">
            <p>We write here when a goal is finished — not while we are still in the middle of it.</p>
          </EmptyState>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
