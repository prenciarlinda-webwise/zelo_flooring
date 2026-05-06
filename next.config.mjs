/** @type {import('next').NextConfig} */
const nextConfig = {
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
