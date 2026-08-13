import type { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Journal",
  description: "Build-day notes, photos, and the story of OpenPup.",
};

export default function JournalPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-copper">The journey</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Journal</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-soft">
        One post per build day (or whenever something funny happens). Add a new markdown file in{" "}
        <code className="rounded bg-paper-deep px-1.5">content/posts/</code>.
      </p>
      <div className="mt-8 grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
