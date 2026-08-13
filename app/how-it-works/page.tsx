import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works",
  description: "Raspberry Pi in the puppy, house computer for hard tasks, OpenClaw in the middle.",
};

const BRAINS = [
  {
    title: "Puppy brain",
    kicker: "Raspberry Pi + OpenClaw",
    points: [
      "Rides in the body on a battery",
      "Sees, hears, talks, and moves",
      "Handles “right now” pet jobs",
      "Asks the house when a job is too big",
    ],
  },
  {
    title: "House brain",
    kicker: "Always-on home computer",
    points: [
      "Stays plugged into the wall",
      "Long answers, memory, bigger models",
      "Talks to the puppy over home Wi-Fi",
      "Optional Tailscale later — never the public internet",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-copper">Architecture</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Two brains, one puppy</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
        A pet robot should feel fast and local. A little Pi cannot also be a supercomputer. So we split the work the
        same way a body splits work with a brain: reflexes on board, homework at the desk.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {BRAINS.map((brain) => (
          <section key={brain.title} className="rounded-3xl border border-line bg-cream p-6 shadow-[var(--shadow)]">
            <p className="text-sm font-extrabold text-sky">{brain.kicker}</p>
            <h2 className="mt-1 font-display text-3xl font-semibold">{brain.title}</h2>
            <ul className="mt-4 space-y-2 text-ink-soft">
              {brain.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-10 overflow-x-auto rounded-3xl border border-line bg-cream p-6">
        <h2 className="font-display text-2xl font-semibold">Who does what?</h2>
        <table className="mt-4 w-full min-w-[28rem] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-ink-soft">
              <th className="py-2 pr-3 font-extrabold">Job</th>
              <th className="py-2 pr-3 font-extrabold">Puppy Pi</th>
              <th className="py-2 font-extrabold">House server</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Come here / look at me", "Yes", "No"],
              ["Short hello", "Yes", "Maybe"],
              ["Help plan a weekend", "Asks the house", "Yes"],
              ["Remember a long story", "Asks the house", "Yes"],
              ["Move motors", "Yes", "No"],
            ].map(([job, pi, house]) => (
              <tr key={job} className="border-b border-line/80">
                <td className="py-3 pr-3 font-bold">{job}</td>
                <td className="py-3 pr-3">{pi}</td>
                <td className="py-3">{house}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <p className="mt-8 text-ink-soft">
        Deeper notes for future us live in{" "}
        <code className="rounded bg-paper-deep px-1.5">docs/architecture.md</code>. Build order is on the{" "}
        <Link href="/build" className="font-extrabold text-copper-deep underline">
          build guide
        </Link>
        .
      </p>
    </div>
  );
}
