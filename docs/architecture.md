# OpenPup architecture

Family reference for future build sessions. The kid-facing version lives on the website at `/how-it-works`.

## Goal

A DIY mini robot puppy for the house:

- Raspberry Pi in the body running **OpenClaw**
- Local house server for hard tasks (planning, memory, larger models)
- Journey documented on a static Firebase-hosted site

## Layers

1. **Body** — chassis, power, motors/servos, speaker, mic, camera
2. **Onboard brain** — Raspberry Pi 5, OpenClaw agent, sensor/motor adapters
3. **House brain** — always-on machine on the LAN; heavier OpenClaw/LLM/tools
4. **Story** — this repo’s Next.js static site (journal, photos, videos)

## Network

- Default: home Wi-Fi only. Puppy Pi talks to house server on the LAN.
- Optional later: Tailscale for remote access, still binding OpenClaw to loopback and serving through a secure proxy — do not expose the gateway to the public internet.

## OpenClaw split

- **On-Pi OpenClaw**: low-latency skills (speech, vision snapshots, motion). Keep tools small so a battery Pi stays cool.
- **House OpenClaw / inference**: long context, research, memory. The Pi should treat this as a “ask the house” tool rather than duplicating every capability.

## Safety (non-negotiable)

- Grown-ups handle mains power, LiPo charging, and soldering.
- Motors and Pi logic power stay on separate rails.
- No public inbound ports. Local network first.
- The puppy should fail safe: stop moving if the brain disconnects.
