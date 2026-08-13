# How to add a journal post or media

## New journal post

1. Copy an existing file in `content/posts/`.
2. Name it `some-short-slug.md` (this becomes the URL `/journal/some-short-slug`).
3. Fill the frontmatter (quote any value that contains a colon):

```md
---
title: Day 3 — First tail wag
date: 2026-08-20
summary: One or two sentences for the journal card.
authors: The Fletcher family
draft: false
tags:
  - hardware
---
```

Set `draft: true` to keep a post in the repo but off the public site.

4. Write the story in markdown. Drop photos in `public/media/` and embed them with `![alt](/media/your-photo.jpg)`.
5. Run `npm run dev` and open `/journal`.

## Gallery photos and videos

Edit `content/gallery.json`:

```json
{
  "items": [
    {
      "type": "image",
      "src": "/media/desk-puppy.jpg",
      "alt": "Pi on the table with a speaker",
      "caption": "Desk puppy, first boot",
      "date": "2026-08-20"
    },
    {
      "type": "youtube",
      "src": "https://www.youtube.com/embed/VIDEO_ID",
      "alt": "First hello",
      "caption": "It said hello",
      "date": "2026-08-21"
    }
  ]
}
```

Prefer YouTube/Vimeo (or Firebase Storage later) for long videos. Git and Firebase Hosting are a poor place for huge MP4s.

This journal is public. Do not commit secrets, home addresses, or media you are not willing to share.
