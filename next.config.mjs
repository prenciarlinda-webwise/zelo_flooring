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
