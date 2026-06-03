# Scheduling blog posts (Option B: date-gate + nightly rebuild)

This site is statically built (`next build` → zip → Hostinger Node.js plan runs `next start`).
There is no CMS or database. "Publishing" is data-driven by two things in `lib/blog-posts.ts`:

1. The post's `slug` is in the `PUBLISHED_BLOG_SLUGS` array (the on/off switch).
2. The post's `datePublishedISO` (`YYYY-MM-DD`) is **on or before the build date**.

The date check is `isBlogPostLive()` in `lib/blog-posts.ts`. It is evaluated **at build time**,
not per request, so a post only appears after a build runs on or after its publish date. This
single gate feeds every surface at once: the `/blog` index, the homepage "recent posts" strip,
the post page (`generateStaticParams` + a `notFound()` guard on direct hits), and `sitemap.xml`.

## How to schedule a post

1. Write the content file in `lib/content/blog/<slug>.tsx` and wire it into `CONTENT_MAP` in
   `app/blog/[slug]/page.tsx` (same as any post).
2. Add the post's metadata to `BLOG_POSTS` with the **future** date you want it live, e.g.:
   ```ts
   publishedDate: 'June 20, 2026',
   updatedDate: 'June 20, 2026',
   datePublishedISO: '2026-06-20',   // <-- go-live date
   dateModifiedISO: '2026-06-20',
   ```
3. Add the slug to `PUBLISHED_BLOG_SLUGS`.
4. Deploy once (build + upload zip). The post is **invisible** until a build runs on/after
   2026-06-20, at which point it appears on its own.

You can queue many future-dated posts in one deploy; each goes live on its own date as long as
a build runs that day.

## The nightly rebuild (what makes it automatic)

A future-dated post only "appears" when a fresh `next build` runs on or after its date. On the
Hostinger Business Node.js plan, schedule that rebuild with a cron job.

**Prerequisite:** the server needs the full project source (not just a pre-built `.next`), so it
can run `npm ci && next build`. Upload the project source to your app directory once. If you
currently upload only the build output, switch to uploading source (or keep building locally and
instead just re-deploy the zip on the publish date — that is the fully-manual fallback).

**Cron command** (adjust the path to your app's directory in hPanel → Advanced → Cron Jobs):

```sh
cd ~/domains/zelloflooring.com/app && npm ci --omit=dev=false && npm run build && touch tmp/restart.txt
```

- `npm run build` regenerates all static pages and the sitemap with the new build date.
- `touch tmp/restart.txt` tells Hostinger's Passenger/Node manager to restart the app so it serves
  the new build. (Confirm the restart mechanism for your plan — some plans restart via the
  Node.js app manager UI or a `.htaccess`/`restart.txt` trigger.)

**Suggested schedule:** once daily, early morning, e.g. `30 3 * * *` (03:30 server time). Daily is
enough since publish dates have day-level granularity.

### Server timezone note

`isBlogPostLive()` compares against `new Date().toISOString().slice(0,10)`, which is **UTC**. If the
server builds at 03:30 local and local is behind UTC, the UTC date may already be the next day —
which only ever makes a post go live slightly *early*, never late. If you need exact local-midnight
behavior, set the cron to run after local midnight has also passed in UTC, or change the slice in
`isBlogPostLive()` to compute a local date.

## Verifying a scheduled post before it goes live

- It should be **absent** from `/sitemap.xml`, `/blog`, and the homepage until its date.
- Hitting `/blog/<slug>` directly should return 404 until its date (the `notFound()` guard).
- After the rebuild on the go-live date, all four surfaces should show it. Re-run the sitemap check
  in `CLAUDE.md` step 5 after the first scheduled post to confirm the cron path works end to end.
