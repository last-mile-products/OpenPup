# OpenPup

A Fletcher family DIY project: a real-life mini robot puppy for the house, plus this website as the journey log.

The puppy does not have a real name yet. **OpenPup** is the project name.

## What we are building

- A DIY robot puppy kids (~8–12) can help design, test, photograph, and write about
- A **Raspberry Pi** in the body running **OpenClaw** (see, hear, talk, move)
- A **local house server** for hard tasks (long thinking, memory, bigger models)
- A **static website** (this repo) with journal posts, photos, and videos, hosted on **Firebase Hosting**

## Website (this folder)

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

Create `content/posts/your-slug.md` with title/date/summary frontmatter. Details: [`content/README.md`](content/README.md).

### Add photos or videos

Put files in `public/media/` and list them in `content/gallery.json`. Prefer YouTube for long videos.

## Deploy to Firebase Hosting

This app is a static export (`next.config.ts` → `output: "export"`). The built files land in `out/`.

1. Log in: `npx -y firebase-tools@latest login`
2. Project is already set: **openpup** (`.firebaserc`)
3. `npm run deploy:hosting`

Live URL after deploy: [https://openpup.web.app](https://openpup.web.app)

## Robot notes

- [`docs/architecture.md`](docs/architecture.md) — Pi vs house server, OpenClaw split, safety
- [`docs/build-phases.md`](docs/build-phases.md) — order of operations
- [`lib/bom.ts`](lib/bom.ts) — starter bill of materials (also rendered on `/build`)

Hardware work is still ahead. The site is Phase 0.
