export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  updatedDate: string;
  metaTitle: string;
  metaDescription: string;
  relatedServices: string[];
  image?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cost-to-install-carpet',
    title: 'How Much Carpet Installation Costs in 2026',
    excerpt: 'How much does it cost to install carpet? National average is $3-$8/sqft installed. We break down carpet installation costs by carpet type, room size, labor, and what is included in a professional estimate.',
    publishedDate: 'March 18, 2026',
    updatedDate: 'May 6, 2026',
    metaTitle: 'Carpet Installation Cost in 2026 - $3-$8/sqft Installed Guide',
    metaDescription: 'Carpet installation costs $3-$8 per square foot installed in 2026. Full breakdown by fiber, brand, pad, room size, stair cost, labor cost per square foot, and what should be included in your quote.',
    relatedServices: ['carpet-flooring-san-diego', 'vinyl-flooring-san-diego', 'laminate-flooring-san-diego'],
  },
  {
    slug: 'best-carpet-for-living-room',
    title: 'Choosing the Right Carpet for a Living Room',
    excerpt: 'Choosing carpet for your living room means balancing comfort, durability, and stain resistance. Here is what actually works based on years of installing carpet in San Diego homes.',
    publishedDate: 'February 28, 2026',
    updatedDate: 'May 6, 2026',
    metaTitle: 'Best Carpet for Living Room - 2026 Buyer Guide',
    metaDescription: 'Choosing the best carpet for a living room in 2026. Fiber, face weight, density, pile type, brand, color trend, and allergy-friendly options compared by San Diego carpet installers.',
    relatedServices: ['carpet-flooring-san-diego'],
  },
  {
    slug: 'lvp-vs-hardwood',
    title: 'LVP vs Hardwood Flooring in 2026',
    excerpt: 'Comparing luxury vinyl plank and hardwood flooring on cost, durability, water resistance, and long-term value.',
    publishedDate: 'February 10, 2026',
    updatedDate: 'May 6, 2026',
    metaTitle: 'LVP vs Hardwood Flooring - 2026 Buyer Guide',
    metaDescription: 'LVP vs hardwood flooring comparison. Cost, durability, water resistance, and which works better for your home. Expert breakdown from licensed installers.',
    relatedServices: ['vinyl-flooring-san-diego', 'hardwood-flooring-san-diego'],
  },
  {
    slug: 'best-flooring-for-pets',
    title: 'The Best Flooring for Homes with Pets',
    excerpt: 'Scratch-resistant, waterproof, and easy to clean. Here are the flooring types that hold up best with dogs and cats.',
    publishedDate: 'January 22, 2026',
    updatedDate: 'May 6, 2026',
    metaTitle: 'Best Flooring For Homes With Pets - 2026 Buyer Guide',
    metaDescription: 'Best flooring for homes with pets. Scratch-proof, waterproof options compared. LVP, tile, laminate, and carpet rated for dogs and cats.',
    relatedServices: ['vinyl-flooring-san-diego', 'tile-flooring-san-diego', 'carpet-flooring-san-diego'],
  },
  {
    slug: 'vinyl-plank-flooring-cost',
    title: 'How Much Vinyl Plank Flooring Costs in 2026',
    excerpt: 'How much does vinyl plank flooring cost to install? We break down LVP costs by product type, room size, and labor.',
    publishedDate: 'January 8, 2026',
    updatedDate: 'May 6, 2026',
    metaTitle: 'Vinyl Plank Flooring Cost in 2026 - $4-$16/sqft Installed',
    metaDescription: 'Vinyl plank flooring installation cost in 2026. Average $4-$9 per square foot installed. Breakdown by LVP type, room size, labor, and what affects price.',
    relatedServices: ['vinyl-flooring-san-diego'],
  },
  {
    slug: 'polyester-vs-nylon-carpet',
    title: 'Polyester vs Nylon Carpet: Which Fiber Is Better for Your Home?',
    excerpt: 'Nylon is more durable. Polyester is cheaper. But the right choice depends on your room, traffic, and budget.',
    publishedDate: 'December 18, 2025',
    updatedDate: 'May 6, 2026',
    metaTitle: 'Polyester vs Nylon Carpet - 2026 Fiber Buyer Guide',
    metaDescription: 'Polyester vs nylon carpet compared in 2026. Durability, stain resistance, real-life pet and stain handling, cost tiers, and brand picks for every room and traffic level.',
    relatedServices: ['carpet-flooring-san-diego'],
  },
  {
    slug: 'engineered-vs-solid-hardwood',
    title: 'Engineered Hardwood vs Solid Hardwood: Which Should You Install?',
    excerpt: 'Engineered hardwood handles moisture and concrete slabs better. Solid hardwood can be refinished more times. Here is how to choose.',
    publishedDate: 'December 5, 2025',
    updatedDate: 'May 6, 2026',
    metaTitle: 'Engineered vs Solid Hardwood - 2026 Buyer Guide',
    metaDescription: 'Engineered vs solid hardwood compared in 2026. Wear layer thickness, refinishing potential, install method by subfloor, cost tiers, brand picks, and which works in your home.',
    relatedServices: ['hardwood-flooring-san-diego'],
  },
];

export const PUBLISHED_BLOG_SLUGS = [
  'cost-to-install-carpet',
  'best-carpet-for-living-room',
  'lvp-vs-hardwood',
  'best-flooring-for-pets',
  'vinyl-plank-flooring-cost',
  'polyester-vs-nylon-carpet',
  'engineered-vs-solid-hardwood',
];

export const PUBLISHED_BLOG_POSTS = BLOG_POSTS.filter((p) =>
  PUBLISHED_BLOG_SLUGS.includes(p.slug)
);

export const getBlogPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
