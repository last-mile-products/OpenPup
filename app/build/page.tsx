import type { Metadata } from "next";
import { BOM, bomTotalLabel } from "@/lib/bom";
import { buildIdeas, projectStatus } from "@/lib/project-status";

export const metadata: Metadata = {
  title: "Build guide",
  description: "OpenPup build status and the parts on the table so far.",
};

const STATUS_LABEL = {
  have: "Have",
  needed: "Need",
  maybe: "Maybe",
} as const;

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
        Build day 1 is done. The parts are unboxed, the Pi 5 is mounted on the chassis plate, and we have started the
        camera and pan-tilt bracket.
      </p>

      <section className="mt-10 rounded-3xl border border-line bg-cream p-6 shadow-[var(--shadow)]">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-copper">Right now</p>
        <h2 className="mt-2 font-display text-2xl font-semibold">{projectStatus.label}</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-soft">
          <li>Pi 5 on a PiCar-X for driving, the camera, and audio</li>
          <li>Hard thinking goes to a Mac mini at home</li>
          <li>SunFounder&apos;s tools first, then OpenClaw</li>
          <li>A teal puppy head for the pan-tilt, printed on my brother&apos;s Bambu printer</li>
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

      <section className="mt-12">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-copper">Parts list</p>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">On the table</h2>
        <p className="mt-2 text-ink-soft">{bomTotalLabel}</p>
        <ul className="mt-6 space-y-3">
          {BOM.flatMap((group) =>
            group.items.map((item) => (
              <li key={item.part} className="rounded-2xl border border-line bg-cream p-5 shadow-[var(--shadow)]">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{item.part}</h3>
                  <span className="text-xs font-extrabold uppercase tracking-wide text-copper">
                    {STATUS_LABEL[item.status]}
                  </span>
                </div>
                <p className="mt-1 text-ink">{item.role}</p>
                <p className="mt-1 text-sm text-ink-soft">{item.notes}</p>
              </li>
            )),
          )}
        </ul>
        <p className="mt-4 text-sm text-ink-soft">
          Grown-ups handle power, batteries, and soldering. Kids help design, photograph, test, and write the journal.
        </p>
      </section>
    </div>
  );
}
