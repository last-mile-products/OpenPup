import type { Metadata } from "next";
import { BOM } from "@/lib/bom";

export const metadata: Metadata = {
  title: "Build guide",
  description: "Phases and a starter bill of materials for the OpenPup robot puppy.",
};

const PHASES = [
  {
    n: "0",
    title: "Story shop",
    body: "This website, Day 0, and a name for the project. (Puppy name still TBD.)",
    now: true,
  },
  {
    n: "1",
    title: "Desk puppy",
    body: "Boot a Raspberry Pi, install OpenClaw, add a mic and speaker. No motors yet — just a hello.",
    now: false,
  },
  {
    n: "2",
    title: "Eyes",
    body: "Camera on. Snapshot of the room. Family rule: we decide where it is allowed to look.",
    now: false,
  },
  {
    n: "3",
    title: "House brain",
    body: "Plug in the always-on computer. Prove a hard question leaves the Pi and comes back as an answer.",
    now: false,
  },
  {
    n: "4",
    title: "Body",
    body: "Sketch, 3D-print or kitbash a shell. Wheels first. Tail or ears for personality.",
    now: false,
  },
  {
    n: "5",
    title: "House jobs",
    body: "Tiny chores plus a written list of things it should never do.",
    now: false,
  },
];

const STATUS_LABEL = {
  needed: "Need it",
  have: "We have this",
  maybe: "Maybe later",
} as const;

export default function BuildPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-copper">DIY</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Build guide</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
        Grown-ups handle power, batteries, and soldering. Kids help design, photograph, test, and write the journal.
        Parts will change — when they do, we log it in a post.
      </p>

      <ol className="mt-10 grid gap-3">
        {PHASES.map((phase) => (
          <li
            key={phase.n}
            className={`flex gap-4 rounded-3xl border p-5 ${
              phase.now ? "border-copper bg-cream shadow-[var(--shadow)]" : "border-line bg-cream/70"
            }`}
          >
            <span className="font-display text-3xl font-semibold text-copper">{phase.n}</span>
            <div>
              <h2 className="font-display text-2xl font-semibold">
                {phase.title}
                {phase.now ? <span className="ml-2 text-sm font-extrabold text-moss">we are here</span> : null}
              </h2>
              <p className="mt-1 text-ink-soft">{phase.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-14 font-display text-3xl font-semibold tracking-tight">Starter parts list</h2>
      <p className="mt-2 max-w-2xl text-ink-soft">
        A first shopping list, not a promise. Edit <code className="rounded bg-paper-deep px-1.5">lib/bom.ts</code> when
        we pick real SKUs.
      </p>

      <div className="mt-6 grid gap-6">
        {BOM.map((group) => (
          <section key={group.group} className="overflow-x-auto rounded-3xl border border-line bg-cream p-5">
            <h3 className="font-display text-xl font-semibold">{group.group}</h3>
            <table className="mt-3 w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-ink-soft">
                  <th className="py-2 pr-3 font-extrabold">Part</th>
                  <th className="py-2 pr-3 font-extrabold">Job</th>
                  <th className="py-2 pr-3 font-extrabold">Notes</th>
                  <th className="py-2 font-extrabold">Status</th>
                </tr>
              </thead>
              <tbody>
                {group.items.map((item) => (
                  <tr key={item.part} className="border-b border-line/70 align-top">
                    <td className="py-3 pr-3 font-bold">{item.part}</td>
                    <td className="py-3 pr-3">{item.role}</td>
                    <td className="py-3 pr-3 text-ink-soft">{item.notes}</td>
                    <td className="py-3 whitespace-nowrap">{STATUS_LABEL[item.status]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </div>
  );
}
