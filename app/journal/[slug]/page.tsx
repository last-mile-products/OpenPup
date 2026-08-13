import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownBody } from "@/components/MarkdownBody";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Missing post" };
  return { title: post.title, description: post.summary };
}

export default async function JournalPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
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
