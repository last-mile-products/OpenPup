import { goals } from "@/lib/goals";
import { getAllPosts } from "@/lib/posts";
import type { CalendarEvent } from "@/lib/events";

// Server-only: reads goals + markdown posts. Do not import from client components.

export function getCalendarEvents(): CalendarEvent[] {
  const fromGoals: CalendarEvent[] = [];

  for (const goal of goals) {
    fromGoals.push({
      date: goal.announced,
      title: goal.title,
      kind: "goal-pinned",
      href: `/goals#${goal.slug}`,
    });
    if (goal.finished) {
      fromGoals.push({
        date: goal.finished,
        title: goal.title,
        kind: "goal-finished",
        href: goal.journalSlug ? `/journal/${goal.journalSlug}` : `/goals#${goal.slug}`,
      });
    }
  }

  const fromJournal: CalendarEvent[] = getAllPosts().map((post) => ({
    date: post.date,
    title: post.title,
    kind: "journal" as const,
    href: `/journal/${post.slug}`,
  }));

  return [...fromGoals, ...fromJournal].sort((a, b) => (a.date < b.date ? -1 : 1));
}
