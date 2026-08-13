# OpenPup brand

Design source of truth for the public site. Match this when adding UI (including shadcn). Tokens also live in `app/globals.css`.

## Name

- **OpenPup** is the project.
- The robot puppy does not have a name yet. Do not invent one in UI copy.

## Voice

Family DIY. Kids about 8–12 and parents reading together. First-person “we”. Warm, clear, not cutesy, not corporate. Do not invent quotes.

## Type

- Display (headings): [Fraunces](https://fonts.google.com/specimen/Fraunces)
- Body: [Nunito](https://fonts.google.com/specimen/Nunito)
- CSS: `--font-display`, `--font-body` (body maps to Tailwind `font-sans`)

## Color

Workshop paper, copper hardware, ink notes. High contrast.

| Token | Hex | Use |
| --- | --- | --- |
| `--paper` | `#f3ead8` | Page background |
| `--paper-deep` | `#e4d3b4` | Muted fills, hover |
| `--cream` | `#fff8ee` | Cards, sticky notes |
| `--ink` | `#2c2118` | Text |
| `--ink-soft` | `#5e4c3c` | Secondary text |
| `--copper` | `#c45c2a` | Status, primary actions |
| `--copper-deep` | `#8f3a14` | Links, hover |
| `--sky` | `#4f7fa3` | Occasional accent |
| `--moss` | `#3f6b48` | Occasional accent |
| `--line` | `rgba(44, 33, 24, 0.12)` | Borders |

shadcn `--primary` is copper. `--background` is paper. `--card` is cream. Do not reintroduce a cold gray theme.

## Shape

- Big rounding on cards (`rounded-3xl`)
- Soft shadow `--shadow: 0 18px 40px rgba(44, 33, 24, 0.08)`
- Ideating home desk: faint notebook lines (`.desk`) plus scattered doodles

## Mark and doodles

- Logo mark: `components/PuppyMark.tsx` (geometric pup, copper + cream)
- Scatter / sketch art: `public/doodles/` (JPEG scraps with cream backgrounds)
- Favicon: `app/icon.svg`

## UI kit

shadcn/ui (Radix Nova) in `components/ui/`. Prefer `Button`, `Card`, `Badge`, `Calendar` for new interactive bits so spacing and focus rings stay consistent. Restyle with brand tokens, not default zinc.

## Don’t

- Dark mode for now (the `.dark` block exists for shadcn; the site does not toggle it)
- Neon, SaaS-dashboard chrome, or stock robot clipart
- Secrets, home addresses, or unpublished journal notes on the public site
