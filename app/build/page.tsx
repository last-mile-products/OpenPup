import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build guide",
  description: "A draft of how we plan to build the OpenPup robot puppy.",
};

const CHAPTERS = [
  "Desk puppy — a Pi that can say hello, no motors yet",
  "Eyes and ears — camera and microphone",
  "House brain — the plugged-in computer for hard questions",
  "A body — wheels first, then personality (tail, ears)",
  "House jobs — tiny chores, plus a list of things it should never do",
];

export default function BuildPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-copper">Draft</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Build guide</h1>
      <p className="mt-4 text-lg leading-8 text-ink-soft">
        We haven’t started buying parts yet. This is the order we think we’ll build in — it will change.
      </p>

      <ol className="mt-10 space-y-3">
        {CHAPTERS.map((chapter, index) => (
          <li key={chapter} className="flex gap-4 rounded-3xl border border-line bg-cream/80 p-5">
            <span className="font-display text-2xl font-semibold text-copper">{index + 1}</span>
            <p className="pt-0.5 text-ink-soft">{chapter}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-ink-soft">
        Grown-ups will handle power, batteries, and soldering. Kids help design, photograph, test, and write the
        journal. A real parts list will show up here when we have one.
      </p>
    </div>
  );
}
