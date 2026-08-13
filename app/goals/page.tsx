import type { Metadata } from "next";
import Link from "next/link";
import { currentGoal, formatGoalDate, goalsByLane, nextGoal, type Goal } from "@/lib/goals";

export const metadata: Metadata = {
  title: "Goals",
  description: "What OpenPup is working on now, what's next, and what we already finished.",
};

const LANE_LABEL: Record<Goal["lane"], string> = {
  current: "Now",
  next: "Next",
  done: "Done",
  later: "Later",
};

function GoalCard({ goal }: { goal: Goal }) {
  return (
    <article
      id={goal.slug}
      className={`rounded-3xl border p-6 shadow-[var(--shadow)] ${
        goal.lane === "current"
          ? "border-copper bg-cream"
          : "border-line bg-cream/80"
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-copper">
          {LANE_LABEL[goal.lane]}
        </p>
        <p className="text-sm text-ink-soft">Pinned {formatGoalDate(goal.announced)}</p>
      </div>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">{goal.title}</h2>
      <p className="mt-2 leading-7 text-ink-soft">{goal.description}</p>
      {goal.finished ? (
        <p className="mt-3 text-sm text-ink-soft">Finished {formatGoalDate(goal.finished)}</p>
      ) : null}
      {goal.journalSlug ? (
        <p className="mt-3">
          <Link href={`/journal/${goal.journalSlug}`} className="font-extrabold text-copper-deep underline">
            Read the journal →
          </Link>
        </p>
      ) : null}
    </article>
  );
}

export default function GoalsPage() {
  const now = currentGoal();
  const upcoming = nextGoal();
  const done = goalsByLane("done");
  const later = goalsByLane("later");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-copper">Pins</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Goals</h1>
      <p className="mt-4 text-lg leading-8 text-ink-soft">
        We pin a goal here before we start. While we work, this page stays still. When we finish, we write it up in the
        journal. Dated events also show on the{" "}
        <Link href="/calendar" className="font-extrabold text-copper-deep underline">
          calendar
        </Link>
        .
      </p>

      <ol className="mt-10 space-y-4">
        {now ? (
          <li>
            <GoalCard goal={now} />
          </li>
        ) : (
          <li className="rounded-3xl border border-dashed border-line bg-cream/70 px-6 py-8 text-ink-soft">
            No current goal pinned yet.
          </li>
        )}
        {upcoming ? (
          <li>
            <GoalCard goal={upcoming} />
          </li>
        ) : null}
        {later.map((goal) => (
          <li key={goal.slug}>
            <GoalCard goal={goal} />
          </li>
        ))}
        {done.map((goal) => (
          <li key={goal.slug}>
            <GoalCard goal={goal} />
          </li>
        ))}
      </ol>
    </div>
  );
}
