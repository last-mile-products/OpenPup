// The home page mood follows this object. Change `phase` when the project
// actually moves (ideating → building → alive) and restyle the desk there.
export type ProjectPhase = "ideating" | "building" | "alive";

export const projectStatus = {
  phase: "building" as ProjectPhase,
  label: "Building",
  headline: "We are building a robot puppy for the house.",
  about:
    "A Raspberry Pi 5 rides on a SunFounder PiCar-X for driving, the camera, and audio. Hard thinking goes to a Mac mini at home. We start with SunFounder's tools, then move to OpenClaw. A 3D-printed teal puppy head will sit on the pan-tilt mount, printed on my brother's Bambu printer. We have started building.",
  deskNote: "The parts are on the table. Build day 1 is in the journal.",
  // Newsletter link on the home hero. Label stays “Follow along”.
  followAlongHref: "https://jonlmp.substack.com",
};

export const statusLinks = [
  { href: "/journal", title: "Journal", status: "Build day 1", note: "Saturday, October 24. About an hour." },
  { href: "/goals", title: "Goals", status: "Now", note: "What's pinned, and what's next." },
  { href: "/calendar", title: "Calendar", status: "Live", note: "Days a goal or journal went public." },
  { href: "/how-it-works", title: "How it works", status: "Draft", note: "A short sketch of two brains." },
  { href: "/build", title: "Build guide", status: "Started", note: "Parts are here. The Pi is on the plate." },
  { href: "/gallery", title: "Gallery", status: "Build day 1", note: "Four photos from the table." },
] as const;

// Loose later ideas on the build page — not a locked sequence. The live status is projectStatus.
export const buildIdeas = [
  {
    title: "Desk puppy",
    note: "The Pi on the chassis says hello before we worry about a finished body.",
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
