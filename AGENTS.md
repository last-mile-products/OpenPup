<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# OpenPup (project notes for future agents)

Family DIY robot puppy + static journey site.

- **Site:** Next.js 16 static export (`output: "export"`) → Firebase Hosting `out/`
- **Brand:** `docs/brand.md` — type, color, voice, shadcn mapping
- **Goals:** `lib/goals.ts` → `/goals` and Now/Next on home. Pin a goal before the work.
- **Calendar:** `/calendar` — public events from goals + published journal posts (`lib/calendar-events.ts`)
- **Journal:** markdown in `content/posts/` (`lib/posts.ts`). Public recap when a goal is **done**. Starts as `draft: true`.
- **Local notes:** `notes/entries/` (gitignored). Copy `notes/TEMPLATE.md`. See loop below.
- **Gallery:** `content/gallery.json` + files in `public/media/`
- **Robot docs:** `docs/architecture.md`, `docs/build-phases.md`, parts in `lib/bom.ts`
- **Status / mood:** `lib/project-status.ts` (home + build guide follow this)
- **Voice:** kids ~8–12 and parents reading together; not cutesy, not corporate; first-person “we”
- **Do not** expose OpenClaw to the public internet; house LAN first
- Puppy **name is TBD**; project name is OpenPup
- Add comments in new code so later prompts can find the “why”
- This is a **public** GitHub repo (MIT). Never commit `.env`, service accounts, `.firebaserc`, OpenClaw gateway config, or `notes/entries/`. Forks copy `.firebaserc.example`.

## Journal loop (do this, in order)

Public work runs in three beats. Local notes sit in the middle beat only.

1. **Pin the goal.** Write the title + visitor-facing description together. Put it in `lib/goals.ts` as `lane: "current"` (or `"next"` if it is queued). It shows on `/` and `/goals`. Do this *before* the work, so the site says what we are attempting.
2. **Do the work (not posting).** Talk, learn, gather photos. Dump messy bullets in `notes/entries/YYYY-MM-DD-slug.md` (from `notes/TEMPLATE.md`). That folder is gitignored. Do not ship WIP journal posts. Do not invent quotes.
3. **Finish → journal.** When the goal is done, draft `content/posts/slug.md` from the notes **together**. Keep `draft: true` until Jon says publish. Then set the goal `lane: "done"`, `finished`, and `journalSlug`. Optionally pin the next goal.

If there is no notes file for the current goal yet, create one before writing a post.
Do not put secrets, addresses, or API keys in notes or posts.



