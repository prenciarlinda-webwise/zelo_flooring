/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'production-next-images-cdn.thumbtack.com',
        pathname: '/i/**',
      },
    ],
  },
  // Long-lived cache for static assets in /public (images, fonts). Next already
  // sets immutable caching on /_next/static, but public files default to no
  // cache under `next start`, which is what Lighthouse's "efficient cache
  // lifetimes" flags. NOTE: this is immutable for a year, so when you replace an
  // image, change its filename (e.g. add -2) so returning visitors get the new one.
  async headers() {
    return [
      {
        source: '/:path*.:ext(webp|jpg|jpeg|png|gif|svg|ico|avif|woff|woff2)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // 2026-09-19: PageSpeed Insights (Best Practices > Trust and Safety) flagged
      // no HSTS header on live. Confirmed via curl: the site is HTTPS-only already
      // (HTTP correctly 301s on both hostnames), so this just tells browsers to
      // skip the HTTP round trip on repeat visits, it doesn't change any existing
      // behavior. NOT including `preload` here - that's a one-way commitment
      // submitted to browser vendors' HSTS preload list, a separate decision.
      // Deliberately NOT adding a stricter Content-Security-Policy or
      // Cross-Origin-Opener-Policy here in the same pass (also flagged by PSI) -
      // the live site loads the SendAJob iframe + reCAPTCHA, Formspree, and
      // Thumbtack's image CDN, and a wrong CSP/COOP value can silently break an
      // embedded iframe or form submission. That needs its own tested pass
      // enumerating every real third-party origin in use, not a blind add here.
      {
        source: '/:path*',
        headers: [{ key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' }],
      },
    ];
  },
  async redirects() {
    const slugs = [
      'carpet-flooring',
      'vinyl-flooring',
      'hardwood-flooring',
      'laminate-flooring',
      'tile-flooring',
      'cork-flooring',
      'rubber-flooring',
      'vinyl-composition-tile-flooring',
    ];
    return [
      ...slugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/${slug}-san-diego`,
        permanent: true,
      })),
      // /free-estimate and /contact were two overlapping lead-gen pages (same
      // Formspree endpoint, near-duplicate forms). Consolidated onto /contact;
      // most estimate CTAs site-wide now open a popup instead of linking here,
      // this redirect covers direct/bookmarked/no-JS visits to the old URL.
      { source: '/free-estimate', destination: '/contact', permanent: true },
      // 2026-09-19 (/technical-seo-audit + GSC Page Indexing report): confirmed
      // via curl that https://zeloflooring.com (no www) and the www version both
      // return HTTP 200 with byte-identical HTML, no host-level redirect between
      // them, only a <link rel="canonical"> pointing to www. GSC's own "Why pages
      // aren't indexed" report shows 35 pages excluded as "Alternate page with
      // proper canonical tag" - almost certainly these non-www duplicates, wasting
      // crawl budget that could otherwise go toward the 53 pages sitting in
      // "Discovered - currently not indexed". SITE.url in lib/areas.ts already
      // declares www as canonical; this just enforces it at the redirect level
      // instead of relying on canonical tags alone.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'zeloflooring.com' }],
        destination: 'https://www.zeloflooring.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
