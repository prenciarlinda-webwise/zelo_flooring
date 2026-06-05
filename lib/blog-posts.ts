export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string; // human-readable, shown in the byline (e.g. "March 18, 2026")
  updatedDate: string; // human-readable, shown in the byline
  datePublishedISO: string; // ISO 8601 for Article schema + OpenGraph + sitemap
  dateModifiedISO: string; // ISO 8601 for Article schema + OpenGraph + sitemap
  metaTitle: string;
  metaDescription: string;
  relatedServices: string[];
  image: string; // featured image, unique per post
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'lvp-vs-engineered-hardwood',
    title: 'LVP vs Engineered Hardwood: Which Should You Choose?',
    excerpt:
      'LVP is cheaper, waterproof, and lower-maintenance; engineered hardwood is real wood that adds more resale value and can be refinished. A side-by-side comparison.',
    publishedDate: 'May 31, 2026',
    updatedDate: 'May 31, 2026',
    datePublishedISO: '2026-05-31',
    dateModifiedISO: '2026-05-31',
    metaTitle: 'LVP vs Engineered Hardwood: Which Is Better?',
    metaDescription:
      'LVP vs engineered hardwood compared: water resistance, cost, resale value, refinishing, and lifespan. Which is better for kitchens, pets, and real-wood value.',
    relatedServices: ['vinyl-flooring-san-diego', 'hardwood-flooring-san-diego', 'laminate-flooring-san-diego'],
    image: '/img/projects/portfolio/zelo-project-18.webp',
  },
  {
    slug: 'types-of-hardwood-flooring',
    title: 'Types of Hardwood Flooring: Species, Finishes, and Widths',
    excerpt:
      'The main types of hardwood flooring explained: solid vs engineered, popular wood species and their hardness, prefinished vs site-finished, and plank widths and grades.',
    publishedDate: 'May 31, 2026',
    updatedDate: 'May 31, 2026',
    datePublishedISO: '2026-05-31',
    dateModifiedISO: '2026-05-31',
    metaTitle: 'Types of Hardwood Flooring Explained (2026 Guide)',
    metaDescription:
      'The types of hardwood flooring: solid vs engineered, oak, maple, hickory and walnut species, prefinished vs site-finished, and plank widths. How to choose for your home.',
    relatedServices: ['hardwood-flooring-san-diego', 'vinyl-flooring-san-diego', 'laminate-flooring-san-diego'],
    image: '/img/projects/portfolio/zelo-project-14.webp',
  },
  {
    slug: 'low-pile-vs-high-pile-carpet',
    title: 'Low Pile vs High Pile Carpet: Which Is Right for You?',
    excerpt:
      'Low pile carpet is durable and easy to clean for high-traffic areas and pets; high pile is soft and cozy for bedrooms. Carpet pile types compared, room by room.',
    publishedDate: 'May 31, 2026',
    updatedDate: 'May 31, 2026',
    datePublishedISO: '2026-05-31',
    dateModifiedISO: '2026-05-31',
    metaTitle: 'Low Pile vs High Pile Carpet: Which Is Better?',
    metaDescription:
      'Low pile vs high pile carpet compared: durability, comfort, cleaning, and pets. Plus the main types of carpet pile and which is best for each room.',
    relatedServices: ['carpet-flooring-san-diego', 'laminate-flooring-san-diego', 'vinyl-flooring-san-diego'],
    image: '/img/projects/portfolio/zelo-project-23.webp',
  },
  {
    slug: 'how-to-clean-luxury-vinyl-plank-flooring',
    title: 'How to Clean Luxury Vinyl Plank Flooring',
    excerpt:
      'How to clean and maintain LVP: routine sweeping and damp mopping, the right cleaners, what to avoid (steam mops, wax, harsh chemicals), and stain and scratch tips.',
    publishedDate: 'May 31, 2026',
    updatedDate: 'May 31, 2026',
    datePublishedISO: '2026-05-31',
    dateModifiedISO: '2026-05-31',
    metaTitle: 'How to Clean Luxury Vinyl Plank Flooring (LVP)',
    metaDescription:
      'How to clean luxury vinyl plank flooring: the best cleaners, why to avoid steam mops and wax, stain removal, scratch prevention, and a simple maintenance schedule.',
    relatedServices: ['vinyl-flooring-san-diego', 'laminate-flooring-san-diego', 'tile-flooring-san-diego'],
    image: '/img/projects/portfolio/zelo-project-03.webp',
  },
  {
    slug: 'tile-vs-vinyl-flooring',
    title: 'Tile vs Vinyl Flooring: Which Should You Choose?',
    excerpt:
      'Porcelain tile is the most durable and adds the most value; vinyl plank is softer, warmer, and cheaper. Both are waterproof. A room-by-room comparison on cost and feel.',
    publishedDate: 'May 31, 2026',
    updatedDate: 'May 31, 2026',
    datePublishedISO: '2026-05-31',
    dateModifiedISO: '2026-05-31',
    metaTitle: 'Tile vs Vinyl Flooring: Which Is Better?',
    metaDescription:
      'Tile vs vinyl plank flooring compared: durability, water resistance, comfort, cost, and installation. Which is better for bathrooms, kitchens, and whole-home installs.',
    relatedServices: ['tile-flooring-san-diego', 'vinyl-flooring-san-diego', 'hardwood-flooring-san-diego'],
    image: '/img/tile-porcelain.webp',
  },
  {
    slug: 'vinyl-vs-laminate-flooring',
    title: 'Vinyl vs Laminate Flooring: Which Should You Choose?',
    excerpt:
      'Vinyl plank is waterproof and better for kitchens, baths, and pets; laminate is harder, more textured, and usually cheaper. A side-by-side comparison by room, cost, and durability.',
    publishedDate: 'May 31, 2026',
    updatedDate: 'May 31, 2026',
    datePublishedISO: '2026-05-31',
    dateModifiedISO: '2026-05-31',
    metaTitle: 'Vinyl vs Laminate Flooring: Which Is Better?',
    metaDescription:
      'Vinyl plank vs laminate flooring compared. Water resistance, durability, feel, cost, and which is better for kitchens, pets, and budgets. A clear room-by-room verdict.',
    relatedServices: ['vinyl-flooring-san-diego', 'laminate-flooring-san-diego', 'hardwood-flooring-san-diego'],
    image: '/img/projects/portfolio/zelo-project-01.webp',
  },
  {
    slug: 'how-to-install-vinyl-plank-flooring',
    title: 'How to Install Vinyl Plank Flooring (Step by Step)',
    excerpt:
      'A step-by-step guide to installing click-lock vinyl plank flooring: subfloor prep, acclimation, layout direction, expansion gaps, common mistakes, and when to hire a pro.',
    publishedDate: 'May 31, 2026',
    updatedDate: 'May 31, 2026',
    datePublishedISO: '2026-05-31',
    dateModifiedISO: '2026-05-31',
    metaTitle: 'How to Install Vinyl Plank Flooring (Step by Step)',
    metaDescription:
      'How to install vinyl plank flooring step by step: subfloor prep, acclimation, layout direction, expansion gaps, the most common mistakes, and when to hire a pro.',
    relatedServices: ['vinyl-flooring-san-diego', 'laminate-flooring-san-diego', 'tile-flooring-san-diego'],
    image: '/img/projects/portfolio/zelo-project-20.webp',
  },
  {
    slug: 'best-flooring-for-san-diego-homes',
    title: 'Best Flooring for San Diego Homes',
    excerpt:
      'The best flooring for San Diego homes is rigid-core LVP or engineered hardwood, built for slab foundations and coastal humidity. Best picks by goal, area, room, and budget.',
    publishedDate: 'May 31, 2026',
    updatedDate: 'May 31, 2026',
    datePublishedISO: '2026-05-31',
    dateModifiedISO: '2026-05-31',
    metaTitle: 'Best Flooring for San Diego Homes (2026 Guide)',
    metaDescription:
      'The best flooring for San Diego homes is engineered hardwood and rigid-core LVP, built for slab foundations and coastal humidity. Best picks by goal, area, room, and budget.',
    relatedServices: ['vinyl-flooring-san-diego', 'hardwood-flooring-san-diego', 'tile-flooring-san-diego'],
    image: '/img/projects/portfolio/zelo-project-02.webp',
  },
  {
    slug: 'how-long-does-hardwood-refinishing-take',
    title: 'How Long Does Hardwood Floor Refinishing Take?',
    excerpt:
      'Hardwood floor refinishing takes 3 to 5 days of active work, plus cure time before furniture and rugs go back. A day-by-day timeline and the factors that change it.',
    publishedDate: 'May 30, 2026',
    updatedDate: 'May 30, 2026',
    datePublishedISO: '2026-05-30',
    dateModifiedISO: '2026-05-30',
    metaTitle: 'How Long Does Hardwood Floor Refinishing Take?',
    metaDescription:
      'Hardwood floor refinishing takes 3 to 5 days of active work, plus cure time. Day-by-day timeline, water vs oil finish, and when you can walk, move furniture, and add rugs.',
    relatedServices: ['hardwood-flooring-san-diego', 'laminate-flooring-san-diego', 'vinyl-flooring-san-diego'],
    image: '/img/projects/portfolio/zelo-project-04.webp',
  },
  {
    slug: 'laminate-flooring-thickness',
    title: 'Laminate Flooring Thickness and Wear Layers Explained',
    excerpt:
      'Laminate ranges from 6mm to 12mm thick. Here is what thickness actually affects, how it differs from the AC wear rating, and which combination to choose by room.',
    publishedDate: 'May 30, 2026',
    updatedDate: 'June 2, 2026',
    datePublishedISO: '2026-05-30',
    dateModifiedISO: '2026-06-02',
    metaTitle: 'Laminate Flooring Thickness: 7mm to 12mm Explained',
    metaDescription:
      'Laminate flooring ranges from 6mm to 12mm thick. What thickness actually affects, how it differs from the AC wear rating, and which to choose by room.',
    relatedServices: ['laminate-flooring-san-diego', 'vinyl-flooring-san-diego', 'hardwood-flooring-san-diego'],
    image: '/img/laminate-ac5-rating.webp',
  },
  {
    slug: 'laminate-over-existing-floors',
    title: 'Can You Install Laminate Over Existing Floors?',
    excerpt:
      'Yes, in most cases, if the surface is flat, solid, and dry. A surface-by-surface guide to installing laminate over tile, vinyl, hardwood, concrete, existing laminate, and carpet.',
    publishedDate: 'May 30, 2026',
    updatedDate: 'June 2, 2026',
    datePublishedISO: '2026-05-30',
    dateModifiedISO: '2026-06-02',
    metaTitle: 'Can You Install Laminate Over Existing Floors?',
    metaDescription:
      'Yes, laminate can go over tile, vinyl, hardwood, and concrete if the floor is flat, solid, and dry. Surface-by-surface guide to floating laminate over existing floors.',
    relatedServices: ['laminate-flooring-san-diego', 'tile-flooring-san-diego', 'vinyl-flooring-san-diego'],
    image: '/img/projects/portfolio/zelo-project-12.webp',
  },
  {
    slug: 'cost-to-install-carpet',
    title: 'How Much Carpet Installation Costs in 2026',
    excerpt: 'How much does it cost to install carpet? National average is $3-$8/sqft installed. We break down carpet installation costs by carpet type, room size, labor, and what is included in a professional estimate.',
    publishedDate: 'March 18, 2026',
    updatedDate: 'May 6, 2026',
    datePublishedISO: '2026-03-18',
    dateModifiedISO: '2026-05-06',
    image: '/img/projects/portfolio/zelo-project-16.webp',
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
    datePublishedISO: '2026-02-28',
    dateModifiedISO: '2026-05-06',
    image: '/img/Patterned-Carpet.webp',
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
    datePublishedISO: '2026-02-10',
    dateModifiedISO: '2026-05-06',
    image: '/img/vinyl-plank-light-oak.webp',
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
    datePublishedISO: '2026-01-22',
    dateModifiedISO: '2026-05-06',
    image: '/img/projects/portfolio/zelo-project-08.webp',
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
    datePublishedISO: '2026-01-08',
    dateModifiedISO: '2026-05-06',
    image: '/img/Luxury-Vinyl-Plank.jpg',
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
    datePublishedISO: '2025-12-18',
    dateModifiedISO: '2026-05-06',
    image: '/img/projects/portfolio/zelo-project-11.webp',
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
    datePublishedISO: '2025-12-05',
    dateModifiedISO: '2026-05-06',
    image: '/img/projects/portfolio/zelo-project-07.webp',
    metaTitle: 'Engineered vs Solid Hardwood - 2026 Buyer Guide',
    metaDescription: 'Engineered vs solid hardwood compared in 2026. Wear layer thickness, refinishing potential, install method by subfloor, cost tiers, brand picks, and which works in your home.',
    relatedServices: ['hardwood-flooring-san-diego'],
  },
];

export const PUBLISHED_BLOG_SLUGS = [
  'lvp-vs-engineered-hardwood',
  'types-of-hardwood-flooring',
  'low-pile-vs-high-pile-carpet',
  'how-to-clean-luxury-vinyl-plank-flooring',
  'tile-vs-vinyl-flooring',
  'vinyl-vs-laminate-flooring',
  'how-to-install-vinyl-plank-flooring',
  'best-flooring-for-san-diego-homes',
  'how-long-does-hardwood-refinishing-take',
  'laminate-flooring-thickness',
  'laminate-over-existing-floors',
  'cost-to-install-carpet',
  'best-carpet-for-living-room',
  'lvp-vs-hardwood',
  'best-flooring-for-pets',
  'vinyl-plank-flooring-cost',
  'polyester-vs-nylon-carpet',
  'engineered-vs-solid-hardwood',
];

// Build-time "today" (YYYY-MM-DD). Frozen when `next build` runs, NOT at request time.
// This is what makes scheduling work: a post listed in PUBLISHED_BLOG_SLUGS but dated in
// the future stays hidden until a build runs on or after its datePublishedISO. Pair this
// with a nightly Hostinger cron rebuild (see SCHEDULING.md) so future-dated posts go live
// on their own without a manual re-deploy.
const BUILD_TODAY = new Date().toISOString().slice(0, 10);

// A post is live when it is (1) switched on via the slug list AND (2) its publish date has
// arrived as of the build. Lexicographic compare is safe for fixed-width YYYY-MM-DD strings.
export const isBlogPostLive = (p: BlogPost, asOf: string = BUILD_TODAY) =>
  PUBLISHED_BLOG_SLUGS.includes(p.slug) && p.datePublishedISO.slice(0, 10) <= asOf;

export const PUBLISHED_BLOG_POSTS = BLOG_POSTS.filter((p) => isBlogPostLive(p));

export const getBlogPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
