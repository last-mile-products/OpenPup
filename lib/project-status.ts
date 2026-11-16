// The home page mood follows this object. Change `phase` when the project
// actually moves (ideating → building → alive) and restyle the desk there.
export type ProjectPhase = "ideating" | "building" | "alive";

export const projectStatus = {
  // Still "building": it drives and follows a face, but the head is unprinted and OpenClaw is not on it.
  phase: "building" as ProjectPhase,
  label: "Building",
  headline: "We are building a robot puppy for the house.",
  about:
    "The PiCar-X is built. A Raspberry Pi 5 on our Wi-Fi drives it, the mic and speaker work, and the camera follows a face. Right turns are still being figured out. Hard thinking goes to a Mac mini at home once we add OpenClaw. A 3D-printed teal puppy head still needs measuring before we print it on my brother's Bambu printer. No AI yet.",
  deskNote: "It drives, and it looks back. That entry is in the journal.",
  // Newsletter link on the home hero. Label stays “Follow along”.
  followAlongHref: "https://jonlmp.substack.com",
};

export const statusLinks = [
  { href: "/journal", title: "Journal", status: "It drives", note: "Built, calibrated, and following faces. No AI yet." },
  { href: "/goals", title: "Goals", status: "Now", note: "The head is still to print. AI is next." },
  { href: "/calendar", title: "Calendar", status: "Live", note: "Days a goal or journal went public." },
  { href: "/how-it-works", title: "How it works", status: "Draft", note: "A short sketch of two brains." },
  { href: "/build", title: "Build guide", status: "It drives", note: "Pi is on Wi-Fi. Turning is still being figured out." },
  { href: "/gallery", title: "Gallery", status: "New photos", note: "The finished car, plus build day 1." },
] as const;

// Loose later ideas on the build page — not a locked sequence. The live status is projectStatus.
export const buildIdeas = [
  {
    title: "Desk puppy",
    note: "The Pi is on the chassis, on our Wi-Fi, and driving. Turning still needs work.",
  },
  {
    title: "Eyes and ears",
    note: "The camera follows a face. The mic and speaker work. We still decide where it is allowed to look.",
  },
  {
    title: "House brain",
    note: "A plugged-in computer for questions that are too big for a battery Pi. Not hooked up yet.",
  },
  {
    title: "A body",
    note: "Wheels are on and it drives. Next is a teal head, then personality: tail, ears, a name.",
  },
  {
    title: "House jobs",
    note: "Tiny chores, plus a list of things it should never do.",
  },
] as const;
