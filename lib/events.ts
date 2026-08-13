// Shared calendar types. Keep this file free of node:fs so client components can import it.

export type CalendarEventKind = "goal-pinned" | "goal-finished" | "journal";

export type CalendarEvent = {
  date: string;
  title: string;
  kind: CalendarEventKind;
  href: string;
};

const KIND_LABEL: Record<CalendarEventKind, string> = {
  "goal-pinned": "Goal pinned",
  "goal-finished": "Goal finished",
  journal: "Journal",
};

export function eventKindLabel(kind: CalendarEventKind) {
  return KIND_LABEL[kind];
}

export function eventKindNavLabel(kind: CalendarEventKind) {
  if (kind === "journal") return "Read journal";
  return "Open goal";
}

export function parseDay(date: string) {
  return new Date(`${date}T12:00:00`);
}
