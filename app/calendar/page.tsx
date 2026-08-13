import type { Metadata } from "next";
import { EventCalendar } from "@/components/EventCalendar";
import { getCalendarEvents } from "@/lib/calendar-events";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Days we pinned a goal, finished one, or published a journal entry.",
};

export default function CalendarPage() {
  const events = getCalendarEvents();

  // Fill leftover viewport under the header. Footer is hidden on this route.
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-3 py-3 sm:px-4">
      <EventCalendar events={events} />
    </div>
  );
}
