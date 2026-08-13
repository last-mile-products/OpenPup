import Link from "next/link";
import { DeskDoodles, SketchPad } from "@/components/DeskDoodles";
import { PostCard } from "@/components/PostCard";
import { currentGoal, nextGoal } from "@/lib/goals";
import { getAllPosts } from "@/lib/posts";
import { projectStatus, statusLinks } from "@/lib/project-status";

// Home is a status desk. Mood comes from lib/project-status.ts (currently ideating).

export default function HomePage() {
  const latest = getAllPosts().slice(0, 1);
  const now = currentGoal();
  const upcoming = nextGoal();

  return (
    <div className="desk relative overflow-hidden">
      <DeskDoodles />

      <section className="relative z-10 mx-auto max-w-5xl px-4 pt-12 pb-8 md:pt-16">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-3 py-1 text-sm font-extrabold uppercase tracking-[0.16em] text-copper">
          <span className="h-2 w-2 rounded-full bg-copper" aria-hidden="true" />
          Status: {projectStatus.label}
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          {projectStatus.headline}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft">{projectStatus.about}</p>
        <p className="mt-3 text-sm font-bold text-ink-soft">{projectStatus.deskNote}</p>
      </section>

      <section className="relative z-10 mx-auto grid max-w-5xl gap-4 px-4 pb-8 md:grid-cols-2">
        {now ? (
          <Link
            href={`/goals#${now.slug}`}
            className="rounded-3xl border border-copper bg-cream p-6 shadow-[var(--shadow)]"
          >
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-copper">Now</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">{now.title}</h2>
            <p className="mt-2 text-ink-soft">{now.description}</p>
          </Link>
        ) : null}
        {upcoming ? (
          <Link
            href={`/goals#${upcoming.slug}`}
            className="rounded-3xl border border-dashed border-line bg-cream/80 p-6"
          >
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-ink-soft">Next</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">{upcoming.title}</h2>
            <p className="mt-2 text-ink-soft">{upcoming.description}</p>
          </Link>
        ) : (
          <div className="rounded-3xl border border-dashed border-line bg-cream/70 p-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-ink-soft">Next</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">Not pinned yet</h2>
            <p className="mt-2 text-ink-soft">When we pick the next goal, it will sit here before we start.</p>
          </div>
        )}
      </section>

      <section className="relative z-10 mx-auto grid max-w-5xl items-start gap-10 px-4 pb-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <SketchPad />

        <div className="grid gap-3">
          <h2 className="font-display text-2xl font-semibold tracking-tight">On the desk</h2>
          {statusLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-2xl border border-line bg-cream/90 p-4 shadow-[var(--shadow)] transition-transform hover:-rotate-1"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold">{link.title}</h3>
                <span className="text-xs font-extrabold uppercase tracking-wide text-copper">{link.status}</span>
              </div>
              <p className="mt-1 text-sm text-ink-soft">{link.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-4 py-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Latest journal</h2>
          <Link href="/journal" className="text-sm font-extrabold text-copper-deep">
            All entries →
          </Link>
        </div>
        {latest.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-line bg-cream/70 px-5 py-8 text-ink-soft">
            Journal entries show up when a goal is finished — not while we are still in the middle.
          </p>
        ) : (
          <PostCard post={latest[0]} />
        )}
      </section>
    </div>
  );
}
