import Link from "next/link";
import { PuppyMark } from "@/components/PuppyMark";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const latest = getAllPosts().slice(0, 2);

  return (
    <div>
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-copper">Family DIY · in progress</p>
          <h1 className="mt-3 max-w-xl font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
            We are building a robot puppy for the house.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft">
            OpenPup is a real mini robot — Raspberry Pi brain, OpenClaw software, and a computer in the house for the
            hard thinking. This site is our journal: blogs, photos, videos, and the messy build notes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/journal"
              className="rounded-full bg-copper px-5 py-2.5 text-sm font-extrabold text-cream hover:bg-copper-deep"
            >
              Read the journal
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border border-ink/15 bg-cream px-5 py-2.5 text-sm font-extrabold hover:bg-paper-deep"
            >
              See the two brains
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative rounded-[2.5rem] border border-line bg-cream p-8 shadow-[var(--shadow)]">
            <PuppyMark className="h-56 w-56 sm:h-64 sm:w-64" />
            <p className="mt-4 text-center text-sm font-bold text-ink-soft">Name still TBD. Suggestions welcome.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-4 px-4 pb-8 sm:grid-cols-3">
        {[
          {
            title: "Pi in the body",
            body: "A Raspberry Pi rides along so the puppy can see, hear, talk, and move without a giant computer on its back.",
          },
          {
            title: "House brain",
            body: "Hard tasks — long answers, memory, big models — go to a plugged-in computer on our home network.",
          },
          {
            title: "Kids on the crew",
            body: "Designed for builders about 8–12: photos, tests, naming, and journal entries are real jobs.",
          },
        ].map((card) => (
          <article key={card.title} className="rounded-3xl border border-line bg-cream/80 p-5">
            <h2 className="font-display text-xl font-semibold">{card.title}</h2>
            <p className="mt-2 text-ink-soft">{card.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Latest from the journal</h2>
          <Link href="/journal" className="text-sm font-extrabold text-copper-deep">
            All days →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {latest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
