"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  eventKindLabel,
  eventKindNavLabel,
  type CalendarEvent,
} from "@/lib/events";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const POSTIT: Record<CalendarEvent["kind"], string> = {
  "goal-pinned": "bg-[#f5e6a8] rotate-[-6deg]",
  "goal-finished": "bg-[#d4e4c8] rotate-[5deg]",
  journal: "bg-[#d9e6f0] rotate-[-3deg]",
};

function toKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function monthKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, count: number) {
  return new Date(date.getFullYear(), date.getMonth() + count, 1);
}

function parseMonth(key: string) {
  const [year, month] = key.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

function monthLabel(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function buildCells(month: Date) {
  const start = startOfMonth(month);
  const weekday = start.getDay();
  const firstCell = new Date(start);
  firstCell.setDate(start.getDate() - weekday);
  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(firstCell);
    day.setDate(firstCell.getDate() + index);
    return day;
  });
}

function PostIt({ event }: { event: CalendarEvent }) {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "w-[92%] truncate rounded-sm px-1 py-0.5 text-left text-[10px] font-extrabold text-ink shadow-sm sm:text-xs",
          POSTIT[event.kind]
        )}
      >
        {event.title}
      </PopoverTrigger>
      <PopoverContent className="w-72 rounded-2xl border border-line bg-cream p-3 shadow-[var(--shadow)]">
        <PopoverHeader>
          <Badge>{eventKindLabel(event.kind)}</Badge>
          <PopoverTitle className="font-display text-lg font-semibold">{event.title}</PopoverTitle>
          <PopoverDescription>{event.date}</PopoverDescription>
        </PopoverHeader>
        <Button asChild className="mt-1 w-full rounded-full">
          <Link href={event.href}>{eventKindNavLabel(event.kind)}</Link>
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export function EventCalendar({ events }: { events: CalendarEvent[] }) {
  const grouped = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const event of events) {
      const list = map.get(event.date) ?? [];
      list.push(event);
      map.set(event.date, list);
    }
    return map;
  }, [events]);

  // Months that actually have a pin — jump chips, so empty months stay a click away.
  const eventMonths = useMemo(() => {
    const keys = new Set<string>();
    for (const event of events) {
      keys.add(event.date.slice(0, 7));
    }
    return [...keys].sort().map((key) => parseMonth(key));
  }, [events]);

  const firstEventMonth = events[0] ? parseMonth(events[0].date.slice(0, 7)) : new Date();
  const [month, setMonth] = useState(() => startOfMonth(firstEventMonth));
  const cells = buildCells(month);
  const today = new Date();
  const todayKey = toKey(today);
  const viewingKey = monthKey(month);

  return (
    <div className="flex min-h-0 flex-1 flex-col rounded-3xl border border-line bg-cream p-3 shadow-[var(--shadow)] sm:p-4">
      {/* shrink-0 so the 6-row grid can take every leftover pixel. */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
          <h1 className="font-display text-2xl font-semibold tracking-tight">Calendar</h1>
          <p className="hidden text-sm text-ink-soft sm:block">Tap a sticky note to open it.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <nav aria-label="Jump to month" className="flex flex-wrap items-center gap-1.5">
            <Button
              type="button"
              variant={viewingKey === monthKey(today) ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setMonth(startOfMonth(today))}
            >
              Today
            </Button>
            {eventMonths.map((jump) => {
              const key = monthKey(jump);
              const active = key === viewingKey;
              return (
                <Button
                  key={key}
                  type="button"
                  variant={active ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => setMonth(jump)}
                >
                  {monthLabel(jump)}
                </Button>
              );
            })}
          </nav>

          <h2 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            {month.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </h2>
          <div className="flex gap-1">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Previous month"
              onClick={() => setMonth((current) => addMonths(current, -1))}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Next month"
              onClick={() => setMonth((current) => addMonths(current, 1))}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-2 flex min-h-0 flex-1 flex-col">
        <div className="grid shrink-0 grid-cols-7 gap-1 text-center text-xs font-extrabold uppercase tracking-wide text-ink-soft">
          {WEEKDAYS.map((day) => (
            <div key={day} className="py-0.5">
              <span className="sm:hidden">{day.slice(0, 1)}</span>
              <span className="hidden sm:inline">{day}</span>
            </div>
          ))}
        </div>

        <div className="mt-1 grid min-h-0 flex-1 grid-cols-7 grid-rows-6 gap-1">
          {cells.map((day) => {
            const key = toKey(day);
            const inMonth = day.getMonth() === month.getMonth();
            const dayEvents = grouped.get(key) ?? [];

            return (
              <div
                key={key}
                className={cn(
                  "flex min-h-0 flex-col overflow-hidden rounded-xl border border-line bg-paper/70 p-1",
                  !inMonth && "opacity-40",
                  key === todayKey && "ring-2 ring-copper"
                )}
              >
                <span className="px-1 text-xs font-extrabold text-ink-soft">{day.getDate()}</span>
                <div className="mt-0.5 flex min-h-0 flex-1 flex-col items-center gap-1 overflow-y-auto">
                  {dayEvents.map((event) => (
                    <PostIt key={`${event.kind}-${event.href}`} event={event} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
