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
    slug: "camera-and-head",
    title: "Camera, bracket, and a head",
    description:
      "Finish the camera and pan-tilt bracket we started on build day, then put a 3D-printed teal puppy head on that mount.",
    lane: "current",
    announced: "2026-10-26",
  },
  {
    slug: "build-day-1",
    title: "Build day 1",
    description:
      "Unbox the PiCar-X kit and the Pi 5, read the manual together, mount the Pi on the chassis plate, and start the camera bracket.",
    lane: "done",
    announced: "2026-10-24",
    finished: "2026-10-24",
    journalSlug: "build-day-1",
  },
  {
    slug: "how-we-work",
    title: "How we'll work",
    description:
      "Invent the loop for this project: pin a goal on the site, do the work without posting every step, then write a journal entry when that goal is done.",
    lane: "done",
    announced: "2026-08-13",
    finished: "2026-08-13",
    // The write-up of this loop is still a draft, so there is no public journal link yet.
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
