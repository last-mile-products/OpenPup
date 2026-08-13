// Starter bill of materials. Expect this list to change after the first
// hardware experiments — keep notes in the journal when a part is swapped.

export type BomItem = {
  part: string;
  role: string;
  notes: string;
  status: "needed" | "have" | "maybe";
};

export type BomGroup = {
  group: string;
  items: BomItem[];
};

export const BOM: BomGroup[] = [
  {
    group: "Brain (on the puppy)",
    items: [
      {
        part: "Raspberry Pi 5 (8GB)",
        role: "The puppy's onboard computer",
        notes: "Runs OpenClaw, cameras, mic, and motors.",
        status: "needed",
      },
      {
        part: "microSD or NVMe SSD",
        role: "Where the Pi keeps its brain files",
        notes: "SSD is nicer if the Pi 5 has a hat for it.",
        status: "needed",
      },
      {
        part: "Official Pi 5 active cooler",
        role: "Keeps the brain from overheating",
        notes: "A moving robot in a body needs airflow.",
        status: "needed",
      },
    ],
  },
  {
    group: "Senses & voice",
    items: [
      {
        part: "Raspberry Pi Camera Module 3",
        role: "Eyes",
        notes: "Wide angle is friendlier for a house robot.",
        status: "needed",
      },
      {
        part: "USB microphone (or ReSpeaker HAT)",
        role: "Ears",
        notes: "Far-field mics hear you from across a room.",
        status: "needed",
      },
      {
        part: "Small speaker",
        role: "Voice",
        notes: "Start with a USB/3.5mm speaker; upgrade later.",
        status: "needed",
      },
    ],
  },
  {
    group: "Body & movement",
    items: [
      {
        part: "DIY chassis (3D print or kit)",
        role: "The puppy body",
        notes: "We will sketch and print this as a family.",
        status: "maybe",
      },
      {
        part: "Servos or a small wheeled base",
        role: "Wag, look around, roll",
        notes: "Wheels first is easier than four legs.",
        status: "maybe",
      },
      {
        part: "Motor driver + battery pack",
        role: "Power for moving parts",
        notes: "Keep logic power (Pi) separate from motors.",
        status: "needed",
      },
    ],
  },
  {
    group: "House brain (hard tasks)",
    items: [
      {
        part: "Always-on home computer",
        role: "The big thinker",
        notes: "Mac mini, NUC, or a second Pi/GPU box on the LAN.",
        status: "needed",
      },
      {
        part: "Local Wi-Fi (and maybe Tailscale)",
        role: "How the puppy talks to the house",
        notes: "Stay on the home network first; Tailscale if we want remote access.",
        status: "have",
      },
    ],
  },
];
