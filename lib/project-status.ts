// The home page mood follows this object. Change `phase` when the project
// actually moves (ideating → building → alive) and restyle the desk there.
export type ProjectPhase = "ideating" | "building" | "alive";

export const projectStatus = {
  phase: "ideating" as ProjectPhase,
  label: "Ideating",
  headline: "We are building a robot puppy for the house.",
  about:
    "A family DIY robot — Raspberry Pi in the body, OpenClaw software, and a computer in the house for hard thinking. Right now we are still on paper: naming, sketching, and arguing about ears.",
  deskNote: "The desk is a mess of ideas. That is the point.",
};

export const statusLinks = [
  { href: "/journal", title: "Journal", status: "Empty", note: "We write when a goal is finished." },
  { href: "/goals", title: "Goals", status: "Now", note: "What's pinned, and what's next." },
  { href: "/calendar", title: "Calendar", status: "Live", note: "Days a goal or journal went public." },
  { href: "/how-it-works", title: "How it works", status: "Draft", note: "A short sketch of two brains." },
  { href: "/build", title: "Build guide", status: "Ideating", note: "Still on paper. No parts ordered." },
  { href: "/gallery", title: "Gallery", status: "Coming soon", note: "Pictures once there is a puppy." },
] as const;

// Loose ideas for the build page while phase is ideating — not a locked sequence.
export const buildIdeas = [
  {
    title: "Desk puppy",
    note: "A Pi on the table that can say hello. No motors.",
  },
  {
    title: "Eyes and ears",
    note: "Camera and microphone. We decide where it is allowed to look.",
  },
  {
    title: "House brain",
    note: "A plugged-in computer for questions that are too big for a battery Pi.",
  },
  {
    title: "A body",
    note: "Wheels first, then personality — tail, ears, a name.",
  },
  {
    title: "House jobs",
    note: "Tiny chores, plus a list of things it should never do.",
  },
] as const;
