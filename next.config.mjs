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
    return slugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/${slug}-san-diego`,
      permanent: true,
    }));
  },
};

export default nextConfig;
