// Public goals. One `current`, optional one `next`, the rest `done` or `later`.
// Announce a goal (write description together) before doing the work.
// Journal only when a goal is finished — not during.

export type GoalLane = "done" | "current" | "next" | "later";

export type Goal = {
  slug: string;
  title: string;
  /** Visitor-facing. Written when we pin the goal on the site. */
  description: string;
  lane: GoalLane;
  announced: string;
  finished?: string;
  journalSlug?: string;
};

export const goals: Goal[] = [
  {
    slug: "how-we-work",
    title: "How we'll work",
    description:
      "Invent the loop for this project: pin a goal on the site, do the work without posting every step, then write a journal entry when that goal is done.",
    lane: "current",
    announced: "2026-08-13",
  },
];

export function formatGoalDate(date: string) {
  if (!date) return "";
  const parsed = new Date(`${date}T12:00:00`);
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function currentGoal() {
  return goals.find((goal) => goal.lane === "current") ?? null;
}

export function nextGoal() {
  return goals.find((goal) => goal.lane === "next") ?? null;
}

export function goalsByLane(lane: GoalLane) {
  return goals.filter((goal) => goal.lane === lane);
}
