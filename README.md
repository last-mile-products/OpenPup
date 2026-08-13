# OpenPup

A family DIY **robot puppy** (Raspberry Pi + OpenClaw + a house computer for hard tasks) and the **static journal site** that documents the build.

This repository is the Fletcher family's public journey log. Fork it if you want to build your own.

- Live site: [https://openpup.web.app](https://openpup.web.app)
- License: [MIT](LICENSE)

The puppy does not have a real name yet. **OpenPup** is the project name.

## What this repo contains

- A Next.js static website (journal, how-it-works, build guide, gallery)
- Starter robot notes: architecture, build phases, bill of materials
- **No secrets.** API keys, OpenClaw config, service accounts, and your Firebase project alias stay on your machine.

## Quick start (website)

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Path | What it is |
| --- | --- |
| `/` | Home |
| `/journal` | Build-day blog |
| `/how-it-works` | Two-brain architecture |
| `/build` | Phases + starter parts list |
| `/gallery` | Photos and videos |

### Add a journal post

Create `content/posts/your-slug.md` with title/date/summary frontmatter. Quote YAML values that contain a colon. Details: [`content/README.md`](content/README.md).

### Add photos or videos

Put files in `public/media/` and list them in `content/gallery.json`. Prefer YouTube (or similar) for long videos — do not commit huge binaries.

This site is public. Do not commit Wi-Fi passwords, home addresses, API keys, or photos you are not willing to share.

## Forking and deploying your own site

The Firebase project in this org (`openpup` → https://openpup.web.app) belongs to the original project. **Forks must create their own Firebase project.** You cannot deploy to ours.

1. Copy the example alias file (gitignored on purpose so clones do not share a project):

   ```bash
   cp .firebaserc.example .firebaserc
   ```

2. Sign in and create or select **your** project:

   ```bash
   npx -y firebase-tools@latest login
   npx -y firebase-tools@latest projects:create your-id --display-name "OpenPup"
   npx -y firebase-tools@latest use --add
   ```

3. Build the static export (`out/`) and deploy Hosting:

   ```bash
   npm run deploy:hosting
   ```

`firebase.json` is safe to keep in git (hosting config only). `.firebaserc` is not committed.

## Robot notes

- [`docs/architecture.md`](docs/architecture.md) — Pi vs house server, OpenClaw split, safety
- [`docs/build-phases.md`](docs/build-phases.md) — order of operations
- [`lib/bom.ts`](lib/bom.ts) — starter bill of materials (also rendered on `/build`)

Hardware work is still ahead. The site is Phase 0.

**Safety:** grown-ups handle mains power, batteries, and soldering. Keep OpenClaw on the local network (or Tailscale). Do not expose the gateway to the public internet. This software is provided as-is; see [LICENSE](LICENSE).

## License

MIT. See [LICENSE](LICENSE).
