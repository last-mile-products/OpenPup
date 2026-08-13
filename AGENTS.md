<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# OpenPup (project notes for future agents)

Family DIY robot puppy + static journey site.

- **Site:** Next.js 16 static export (`output: "export"`) → Firebase Hosting `out/`
- **Journal:** markdown in `content/posts/` (`lib/posts.ts`)
- **Gallery:** `content/gallery.json` + files in `public/media/`
- **Robot docs:** `docs/architecture.md`, `docs/build-phases.md`, parts in `lib/bom.ts`
- **Voice:** kids ~8–12 and parents reading together; not cutesy, not corporate
- **Do not** expose OpenClaw to the public internet; house LAN first
- Puppy **name is TBD**; project name is OpenPup
- Add comments in new code so later prompts can find the “why”

