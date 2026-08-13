import type { Metadata } from "next";
import { buildIdeas, projectStatus } from "@/lib/project-status";

export const metadata: Metadata = {
  title: "Build guide",
  description: "OpenPup is still ideating — no parts yet, just a pile of ideas.",
};

const IDEA_TILT = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "rotate-0"] as const;

export default function BuildPage() {
  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden px-4 py-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/doodles/doodle-pencil.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-8 hidden w-28 rotate-[28deg] opacity-80 sm:block"
      />

      <p className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-3 py-1 text-sm font-extrabold uppercase tracking-[0.16em] text-copper">
        <span className="h-2 w-2 rounded-full bg-copper" aria-hidden="true" />
        Status: {projectStatus.label}
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">Build guide</h1>
      <p className="mt-4 text-lg leading-8 text-ink-soft">
        We are still on paper. Nothing is ordered, nothing is wired. This page will turn into real steps when we leave
        the sketch pad.
      </p>

      <section className="mt-10 rounded-3xl border border-dashed border-line bg-cream p-6 shadow-[var(--shadow)]">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-copper">Right now</p>
        <h2 className="mt-2 font-display text-2xl font-semibold">Ideating</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-soft">
          <li>Naming the puppy (OpenPup is the project, not the pet)</li>
          <li>Sketching what it might look like</li>
          <li>Talking through Pi vs house computer</li>
          <li>Not shopping. Not soldering. Not yet.</li>
        </ul>
      </section>

      <h2 className="mt-12 font-display text-2xl font-semibold tracking-tight">Ideas on the pile</h2>
      <p className="mt-2 text-ink-soft">Not a schedule. Sticky notes we may reorder or throw out.</p>
      <ul className="mt-6 space-y-3">
        {buildIdeas.map((idea, index) => (
          <li
            key={idea.title}
            className={`rounded-2xl border border-line bg-cream/90 p-5 shadow-[var(--shadow)] ${IDEA_TILT[index] ?? ""}`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-xl font-semibold">{idea.title}</h3>
              <span className="text-xs font-extrabold uppercase tracking-wide text-ink-soft">Maybe</span>
            </div>
            <p className="mt-1 text-ink-soft">{idea.note}</p>
          </li>
        ))}
      </ul>

      <section className="mt-12 rounded-3xl border border-dashed border-line bg-cream/70 px-6 py-10 text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-copper">Parts list</p>
        <h2 className="mt-2 font-display text-2xl font-semibold">Blank</h2>
        <p className="mx-auto mt-2 max-w-md text-ink-soft">
          Grown-ups will handle power, batteries, and soldering when we get there. Kids help design, photograph, test,
          and write the journal.
        </p>
      </section>
    </div>
  );
}
