# Working on the Johns Creek FBLA website

This is an [Astro](https://astro.build) site. It builds to plain HTML and deploys
to GitHub Pages automatically whenever something lands on `main`.

You do not need to understand Astro to update content. Almost everything lives in
plain data files under `src/data/`, and each one has instructions at the top.

## Running it locally

```bash
npm install
npm run dev
```

Open the URL it prints. Edits show up immediately.

Before you open a pull request:

```bash
npm run build
```

If that fails, the deploy will fail too. Fix it first.

## Where things live

| I want to change... | Edit this |
|---|---|
| A news post or announcement | `src/data/news.js` |
| Meeting or conference dates | `src/data/schedule.js` |
| Competition results | `src/data/winners.js` |
| A form or payment link | `src/data/formsIndex.js` |
| Committee names and descriptions | `src/data/committees.js` |
| Gallery photos | `src/data/conferenceGallery.js` + files in `public/eventImgs/` |
| Meeting slide decks | `src/components/events/meeting.jsx` + PDFs in `public/meetings/` |
| Conference detail pages | `src/components/events/conferences.jsx` |
| The navigation menu | `src/components/home/navbar.jsx` |
| Officer team | `src/components/about/26-27.jsx` |

## Common jobs

### Add a news post

Open `src/data/news.js` and add an entry at the top of the array:

```js
{
  date: '2026-10-15',
  title: 'October meeting moved to Thursday',
  body: 'One or two sentences explaining it.',
  link: '/schedule',          // optional
  linkText: 'See the schedule' // optional
}
```

Dates are `YYYY-MM-DD`. Newest first. The home page shows the three most recent.

### Add photos to the gallery

1. Put the image files in `public/eventImgs/<year>/<event>/`, for example
   `public/eventImgs/2026-27/fall-rally/`.
2. Use `.jpg` or `.png`. **Not `.heic`** — browsers cannot display HEIC. If the
   photos came off an iPhone, export them as JPEG first.
3. Resize anything over about 1600px wide before committing. Large photos make
   the site slow and bloat the repository.
4. Add them to the right section in `src/data/conferenceGallery.js` with a short
   `alt` description of what is happening in the photo.

### Post a new meeting's slides

1. Export the slide deck to PDF.
2. Save it to `public/meetings/` with a clear name, e.g. `FBLA_Oct_Meeting.pdf`.
3. Add or update the entry in `src/components/events/meeting.jsx`.
4. Make sure the page exists in `src/pages/meetings/` and the link is in the
   navbar's Meetings dropdown.

When a meeting is from a previous year, do not delete it. Rename the PDF with the
year (`FBLA_Aug_Meeting_2025.pdf`) and move the nav link into the archive group.

### Add a form

Open `src/data/formsIndex.js`, find the right group, add an entry. If the form is
not ready yet, set `href: null` — the card shows "Coming soon" instead of a link
that goes nowhere. Never commit a link you have not clicked.

## Rules

1. **Work on a branch, never directly on `main`.** Open a pull request and let
   Dennis review it.
2. **Run `npm run build` before you open the PR.** A broken build blocks everyone.
3. **Do not commit `node_modules/`, `dist/`, or `.DS_Store`.** They are gitignored.
4. **Do not delete other people's work to resolve a conflict.** If two branches
   touch the same lines, ask before picking a winner. This has already caused one
   near-miss where a cleanup branch silently reverted two days of link fixes.
5. **Check dates before you publish.** The most common bug on this site is last
   year's date sitting on a live page.
6. **Never commit HEIC or video files.** They do not render and they are huge.

## Getting help

Open an issue on the repository or ask in the officers GroupMe. If something is
broken on the live site, say so immediately rather than waiting for the next
meeting.
