export type SubService = { id: string; name: string; blurb: string };
export type ServiceStat = { label: string; value: string; sourceLabel: string; sourceUrl: string };
export type ServiceReview = {
  name: string;
  location: string;
  quote: string;
  avatar?: string;
  photos?: string[];
  serviceType?: string;
  source?: 'Thumbtack' | 'Yelp' | 'Google';
  sourceUrl?: string;
  date?: string;
  datePublished?: string;
};
export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string[];
  benefits: string[];
  bestFor: string[];
  iconKey: string;
  image: string;
  secondaryImage: string;
  // Most secondaryImage sources are square material/product close-ups, which crop cleanly
  // into the 1.4-ish landscape .alt-image box. A couple (real install photos) are portrait
  // and lose real content (ceiling, floor) to that crop — set true to render those with
  // object-fit: contain (no crop) instead. See app/[slug]/page.tsx.
  secondaryImagePortrait?: boolean;
  // 2026-09-02: thumbnail for the homepage ServiceAnchorGrid card. Falls back to `image`
  // when unset (see app/page.tsx). Only set this to a confirmed real Zelo job photo of
  // this specific material — several of the `image`/`secondaryImage` values across
  // services are stock/manufacturer photos, and this field exists specifically so the
  // anchor grid doesn't inherit that uncertainty for the services we do have real shots
  // for (currently: carpet, LVP, hardwood, tile — see the "real Zelo photos" section
  // in CLAUDE.md for why laminate/cork/rubber/VCT don't have one yet).
  anchorImage?: string;
  // 2026-09-02: a small strip of additional confirmed-real, confirmed-material job
  // photos rendered on this service's own page (see app/[slug]/page.tsx,
  // components/ServicePhotoStrip.tsx). Omit entirely rather than guess at material —
  // several "wood-look" photos in public/img/projects/2025-showcase/ could be hardwood
  // or LVP and weren't confident enough to assign to either.
  realPhotos?: { src: string; alt: string }[];
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  heroTagline: string;
  heroBullets: string[];
  heroChip: string;
  // New lead-gen layout fields
  primaryKeyword: string; // for hero H1, e.g. "Hardwood Flooring San Diego"
  heroValueProp: string; // 1-sentence value prop
  trustBullets: string[]; // 3 differentiators for hero microbar
  subServices: SubService[];
  stats: ServiceStat[];
  reviews: ServiceReview[];
  faqs: ServiceFaq[];
  blogSlug?: string; // optional internal link
};

export const SERVICES: Service[] = [
  {
    slug: 'carpet-flooring-san-diego',
    name: 'Carpet Installation',
    shortName: 'Carpet',
    tagline: 'Soft, warm, and built for everyday comfort.',
    description:
      'Plush, frieze, berber, and patterned carpet installed by experienced San Diego flooring pros.',
    longDescription: [
      'Carpet is still the most comfortable flooring option you can put in a bedroom, family room, or stairway. We carry a wide range of fibers - nylon, polyester, triexta, and wool blends - from the brands installers actually trust.',
    ],
    benefits: [
      'Wide range of styles, colors and price points',
      'Stain and pet-resistant options',
      'Sound absorption and warmth underfoot',
      'Premium 8 lb pad included',
      'Proper seaming and stretching by certified installers',
    ],
    bestFor: ['Bedrooms', 'Family rooms', 'Stairs and hallways', 'Rentals and offices'],
    iconKey: 'carpet',
    // 2026-09-02: was carpet-plush.webp, a generic stock photo (a child's bare feet
    // on shag carpet) — client: "hero images... too ugly". Swapped for a confirmed
    // real Zelo carpet install (same photo used in Carpet's realPhotos strip below;
    // hero is dimmed/atmospheric so reusing it there isn't a visible duplicate).
    image: '/img/projects/portfolio/zelo-project-17.webp',
    // 2026-09-02: was Patterned-Carpet.webp (stock swatch) — client: "there is an
    // internet image, and 2 real images [on this page]... replace the real one" (i.e.
    // replace the stock one with a real photo, to match the 2 real ones already in the
    // photo strip below). Swapped to project-16, the other confirmed real carpet photo,
    // so this page isn't just the same one photo repeated in every slot.
    secondaryImage: '/img/projects/portfolio/zelo-project-16.webp',
    secondaryImagePortrait: true,
    // 2026-09-02: carpet-01/carpet-02 (2025-showcase) were originally assigned here, but
    // client review caught that both are actually old, worn carpet awaiting replacement,
    // not a finished Zelo install (I'd bucketed them as "carpet" by material without
    // checking condition) — moved to BehindTheScenes as before shots instead. Swapped in
    // zelo-project-16/17, confirmed clean finished carpet installs.
    anchorImage: '/img/projects/portfolio/zelo-project-16.webp',
    realPhotos: [
      { src: '/img/projects/portfolio/zelo-project-16.webp', alt: 'Carpet installed by Zelo Flooring' },
      { src: '/img/projects/portfolio/zelo-project-17.webp', alt: 'Carpet installed by Zelo Flooring in a bright room' },
    ],
    metaTitle: 'Carpet Installation San Diego',
    metaDescription:
      'Professional carpet installation in San Diego. Plush, berber, frieze and pet-friendly carpet from trusted brands. Free in-home estimate. Call +1 (619) 777-4334.',
    lastUpdated: '2026-07-11',
    heroChip: 'San Diego, CA',
    heroTagline: 'Power-stretched. Premium pad. No shortcuts.',
    heroBullets: [
      'Power-stretched on every residential install',
      '8 lb premium rebond pad standard',
      'Real samples brought to your home',
      'CSLB Licensed, bonded, and insured',
    ],
    primaryKeyword: 'Carpet Installation San Diego',
    heroValueProp:
      'Power-stretched carpet from trusted brands, installed across San Diego County with a premium pad and free in-home samples.',
    trustBullets: [
      'C-15 Licensed CSLB #1083572',
      '13+ years of journeyman experience',
      '5.0★ on Thumbtack (34 reviews)',
    ],
    subServices: [
      { id: 'plush', name: 'Plush and Frieze Carpet', blurb: 'Soft underfoot for bedrooms and family rooms. Nylon, polyester, and triexta options with stain warranties from Stainmaster, Mohawk SmartStrand, and Shaw R2X.' },
      { id: 'berber', name: 'Berber and Loop Carpet', blurb: 'Low-pile berber for hallways, rentals, and high-traffic rooms. Wool blends and nylon level loop, both pet-resistant and easy to vacuum.' },
      { id: 'patterned', name: 'Patterned and Cut-Loop Carpet', blurb: 'Modern patterned and cut-loop styles that hide footprints and vacuum tracks. Great for living rooms with large open sightlines.' },
      { id: 'stairs', name: 'Stair Runner and Wall-to-Wall Stairs', blurb: 'Tightly wrapped stair installs with proper waterfall or French cap finish. Premium pad upgrade standard on stairs for extra cushion and tread life.' },
      { id: 'commercial', name: 'Commercial and Rental Carpet', blurb: 'Value-priced loop carpet rated for offices, classrooms, and rentals. Quick turnaround between leases for property managers and HOAs.' },
    ],
    stats: [
      { label: 'Average residential carpet lifespan with proper install', value: '8-15 years', sourceLabel: 'Carpet and Rug Institute', sourceUrl: 'https://carpet-rug.org' },
      { label: 'CA contractor licenses verified by the CSLB', value: '290,000+', sourceLabel: 'CSLB', sourceUrl: 'https://www.cslb.ca.gov' },
    ],
    reviews: [
      { name: 'Jennifer K.', location: 'La Jolla, CA', quote: 'Zelo carpeted three bedrooms and the staircase in our La Jolla home. The crew was on time, the seams are completely invisible, and the power stretching made a huge difference compared to our last install years ago.' },
      { name: 'Robert M.', location: 'El Cajon, CA', quote: 'We needed carpet for a rental property between tenants. Zelo recommended a durable, affordable option and had it installed within a week. Clean job, fair price, tenants love it.' },
      { name: 'Sarah T.', location: 'Carlsbad, CA', quote: 'Two dogs, kids, and a SmartStrand recommendation from Zelo. Eight months in and the carpet still looks new even with muddy paws. Worth every dollar.' },
    ],
    faqs: [
      { q: 'How long does a carpet installation job take?', a: 'A single bedroom is usually 1 to 3 hours. A full home with three or four bedrooms, hallway, and stairs is typically a single full day. We give you a clear timeline before any work begins and schedule around your availability.' },
      { q: 'Do I need to move my furniture before you arrive?', a: 'We move heavy items like beds, dressers, and couches as part of the install. We ask that you clear small items, electronics, breakables, and anything fragile or valuable from the rooms being carpeted.' },
      { q: 'Why do you power-stretch carpet instead of just knee-kicking?', a: 'A power stretcher uses a long mechanical pole to apply consistent force across the entire room, pulling carpet tight to the tack strip. A knee kicker only stretches a few feet at a time. Carpet that is only knee-kicked develops ripples within one to two years, and most manufacturers void the warranty without a power stretch.' },
      { q: 'What pad do you include? Can I upgrade?', a: 'Our standard is 8 lb density rebond pad, the minimum most carpet manufacturers require for warranty coverage. Premium 10 lb pad is a common upgrade for stairs and high-traffic areas. We can quote a moisture-barrier pad if your slab has moisture concerns.' },
      { q: 'Do you handle rental properties and turnover work?', a: 'Yes. We carry durable, value-priced options for rentals and run unit-turn projects with quick scheduling between leases. Tell us the unit count and timeline and we will quote.' },
      { q: 'Do you remove and dispose of the old carpet and pad?', a: 'Yes. Old carpet, pad, and tack strip removal and disposal are included in every residential installation. Your home is clean when we leave.' },
      { q: 'Who does carpet installation in San Diego?', a: 'Zelo Flooring handles carpet installation in San Diego and across the county, from a single bedroom to a full whole-home job. Every install includes power-stretching, a premium 8 lb pad, and old carpet removal in the quote, not as an add-on. We are a CSLB-licensed San Diego carpet installer, bonded and insured.' },
    ],
  },
  {
    slug: 'vinyl-flooring-san-diego',
    name: 'Luxury Vinyl Plank (LVP) Flooring',
    shortName: 'Vinyl',
    tagline: 'Waterproof, durable, and beautiful.',
    description:
      'Luxury vinyl plank that looks like real hardwood but handles spills, pets, and San Diego sunlight.',
    longDescription: [
      'Luxury vinyl plank is the most popular flooring we install in San Diego - 100% waterproof, scratch resistant, and the realistic wood-look options today are genuinely hard to tell apart from hardwood.',
    ],
    benefits: [
      '100% waterproof - safe for kitchens and bathrooms',
      'Scratch and dent resistant rigid core',
      'Realistic wood and stone visuals',
      'No expansion issues in San Diego heat',
      'Easy to clean, allergen friendly',
    ],
    bestFor: ['Kitchens', 'Bathrooms', 'Whole-home installs', 'Homes with pets and kids'],
    iconKey: 'vinyl',
    // 2026-09-02: was vinyl-luxury-plank.webp, a plain stock texture — client: "hero
    // images... too ugly". Swapped for a real Zelo LVP install (freed up when the
    // homepage AlternatingSection moved off this same file to room-04.jpg).
    image: '/img/projects/lvp-whole-home/after-open-floor-lvp.webp',
    secondaryImage: '/img/projects/lvp-whole-home/after-kitchen-lvp.webp',
    secondaryImagePortrait: true,
    anchorImage: '/img/projects/lvp-whole-home/after-entryway-lvp.webp',
    // Same entryway before and after, per the file's own naming — one of the only
    // confirmed same-room pairs in the whole photo library (see CLAUDE.md).
    realPhotos: [
      { src: '/img/projects/lvp-whole-home/before-entryway-old-carpet.webp', alt: 'Entryway before, old carpet' },
      { src: '/img/projects/lvp-whole-home/after-entryway-lvp.webp', alt: 'Same entryway after, new LVP flooring' },
      { src: '/img/projects/lvp-whole-home/after-stairway-lvp.webp', alt: 'LVP flooring installed on a stairway' },
      { src: '/img/projects/lvp-whole-home/after-closet-hallway-lvp.webp', alt: 'LVP flooring installed in a hallway' },
    ],
    metaTitle: 'Vinyl Plank Flooring Installation San Diego',
    metaDescription:
      'Waterproof luxury vinyl plank (LVP) installation in San Diego. SPC rigid-core flooring from trusted brands. Free in-home estimates. Call +1 (619) 777-4334.',
    lastUpdated: '2026-07-08',
    heroChip: 'San Diego, CA',
    heroTagline: 'Waterproof. Slab-tested. Manufacturer-spec.',
    heroBullets: [
      'Slab moisture test on every job',
      '100% waterproof rigid-core SPC and WPC',
      'Click-lock and full-spread glue-down',
      'CSLB Licensed, bonded, and insured',
    ],
    primaryKeyword: 'Vinyl Plank Flooring San Diego',
    heroValueProp:
      'Waterproof luxury vinyl plank installed across San Diego with proper slab prep, manufacturer-spec layout, and brands that hold up under real life.',
    trustBullets: [
      'C-15 Licensed CSLB #1083572',
      '13+ years of journeyman experience',
      '5.0★ on Thumbtack (34 reviews)',
    ],
    subServices: [
      { id: 'spc', name: 'Rigid-Core SPC Vinyl', blurb: 'Stone-polymer composite core. The most stable LVP for San Diego slabs and dry-climate temperature swings. Our default whole-home recommendation.' },
      { id: 'wpc', name: 'WPC Wood-Plastic Composite', blurb: 'Softer underfoot than SPC with a thicker core. Great for upper floors and condos where comfort matters.' },
      { id: 'glue-down', name: 'Glue-Down LVP', blurb: 'Full-spread urethane installs for commercial and high-traffic residential. No expansion gaps to worry about, quieter underfoot than click-lock.' },
      { id: 'click-lock', name: 'Click-Lock Floating Plank', blurb: 'Fastest installation method for whole-home retrofits. Proper underlayment and flatness check on every job.' },
      { id: 'waterproof-bath', name: 'Waterproof Kitchen and Bath', blurb: 'LVP-rated for full bathrooms with silicone-perimeter sealing and toilet flange detail. The right choice when tile is overkill.' },
    ],
    stats: [
      { label: 'US homes choosing LVP over hardwood (2024 industry data)', value: '40%+', sourceLabel: 'Floor Covering Weekly', sourceUrl: 'https://www.floorcoveringweekly.com' },
      { label: 'Manufacturer flatness spec for SPC vinyl', value: '3/16" over 10 ft', sourceLabel: 'Shaw Industries', sourceUrl: 'https://shawfloors.com' },
    ],
    reviews: [
      { name: 'Michael R.', location: 'Encinitas, CA', quote: 'Zelo installed COREtec across our entire downstairs in Encinitas. They ground a low spot in the slab I did not even know was there. Two years later, no gaps, no peaking, no complaints from the dog.' },
      { name: 'Anna P.', location: 'Pacific Beach, CA', quote: 'A different installer laid click-lock over our uneven slab. It buckled in three months. Zelo came out, ground the slab, and reinstalled with proper material. Night and day.' },
      { name: 'David L.', location: 'Carlsbad, CA', quote: 'Pet-rated SPC throughout the house. Two big dogs and a kitchen island full of spilled water on a regular basis. The floor still looks brand new after 18 months.' },
    ],
    faqs: [
      { q: 'Do you have to remove existing flooring before LVP goes down?', a: 'It depends. Sheet vinyl, glue-down vinyl, and most carpet must come up. We can sometimes float a click-lock LVP over very flat ceramic tile if grout lines are tight. Hardwood and laminate must come up. We confirm during the in-home visit.' },
      { q: 'How long does an LVP install take in a typical San Diego home?', a: 'A 1,000 to 1,500 square foot home is usually two to three days: one day for tear-out and prep, one to two days for install. Slab grinding extends the timeline by half a day to a full day.' },
      { q: 'Why does LVP need acclimation if it is plastic?', a: 'Even rigid-core SPC has thermal expansion. We deliver material 48 hours ahead of install and store it flat in the install room so it reaches stable temperature. Skipping this causes peaking or gapping later.' },
      { q: 'Will my click-lock floor squeak or sound hollow?', a: 'A flat subfloor and full underlayment contact eliminate hollow spots. Our flatness step prevents low areas. If your slab has a low spot, we patch it before plank goes down rather than letting the floor bridge it.' },
      { q: 'Can LVP go in bathrooms and kitchens?', a: 'Yes. The plank itself is 100% waterproof. We caulk perimeter expansion gaps with silicone in wet areas. Around toilets we install carefully so water at the wax ring cannot wick under the floor.' },
      { q: 'How do I know if my slab needs grinding?', a: 'We bring a 10-foot straight edge to the consultation. Manufacturers typically require flatness within 3/16 inch over 10 feet. If your slab is out of tolerance, we grind, patch, or self-level. Prep is quoted separately.' },
    ],
  },
  {
    slug: 'hardwood-flooring-san-diego',
    name: 'Hardwood Flooring',
    shortName: 'Hardwood',
    tagline: 'Timeless wood floors, properly installed.',
    description:
      'Solid and engineered hardwood from oak, maple, hickory, walnut and more.',
    longDescription: [
      'Hardwood is the floor that earns its keep over decades. Done right, it can be sanded and refinished three or four times across its life and adds real resale value.',
    ],
    benefits: [
      'Solid and engineered hardwood options',
      'Refinishable for long-term value',
      'Adds resale value to your home',
      'NWFA-spec installation',
      'Wide and narrow plank widths available',
    ],
    bestFor: ['Living rooms', 'Dining rooms', 'Bedrooms', 'Whole-home upgrades'],
    iconKey: 'wood',
    // 2026-09-02: was hardwood-solid-wood.webp, a staged stock interior photo (a red
    // throw blanket on a showroom chair) — under the hero's dark overlay the red
    // blanket read as an unexplained red blob (client: "hero images... too ugly").
    // Swapped for a real Zelo hardwood staircase, not already used in this service's
    // realPhotos strip below.
    image: '/img/projects/2025-showcase/stair-05.jpg',
    secondaryImage: '/img/hardwood-engineered-oak-2.webp',
    anchorImage: '/img/projects/2025-showcase/stair-06.jpg',
    realPhotos: [
      { src: '/img/projects/2025-showcase/stair-01.jpg', alt: 'Hardwood staircase installed by Zelo Flooring' },
      { src: '/img/projects/2025-showcase/stair-04.jpg', alt: 'Two-tone hardwood staircase installed by Zelo Flooring' },
      { src: '/img/projects/2025-showcase/stair-08.jpg', alt: 'Hardwood staircase installed by Zelo Flooring' },
      { src: '/img/projects/2025-showcase/stair-09.jpg', alt: 'Hardwood staircase installed by Zelo Flooring' },
      // 2026-09-02: client flagged this as "looks like carpet installation" (image
      // 46/76 in the /projects lightbox) — it's actually dark hardwood flooring in the
      // entryway/staircase, no carpet visible. Added here instead of Carpet.
      { src: '/img/projects/portfolio/zelo-project-08.webp', alt: 'Hardwood flooring in an entryway and staircase' },
    ],
    metaTitle: 'Hardwood Flooring Installation San Diego',
    metaDescription:
      'Solid and engineered hardwood flooring installation, refinishing, and repair in San Diego. Oak, maple, hickory, walnut and more. NWFA-spec installs. Call +1 (619) 777-4334.',
    lastUpdated: '2026-08-27',
    heroChip: 'San Diego, CA',
    heroTagline: 'NWFA-aligned. Refinish-first. No rushed acclimation.',
    heroBullets: [
      'NWFA-aligned moisture testing and acclimation',
      'Solid, engineered, and refinishing of existing hardwood',
      'Dust-contained sanding on refinish jobs',
      'CSLB Licensed, bonded, and insured',
    ],
    primaryKeyword: 'Hardwood Flooring San Diego',
    heroValueProp:
      'NWFA-aligned hardwood installation across San Diego. Solid, engineered, and refinishing of existing hardwood with documented moisture testing and acclimation.',
    trustBullets: [
      'C-15 Licensed CSLB #1083572',
      '13+ years of journeyman experience',
      '5.0★ on Thumbtack (34 reviews)',
    ],
    subServices: [
      { id: 'engineered', name: 'Engineered Hardwood Installation', blurb: 'Multi-ply core stays stable on slab and in dry-climate humidity swings. Our default for San Diego homes. Mirage, Anderson Tuftex, Mannington, Hallmark.' },
      { id: 'solid', name: 'Solid Hardwood Installation', blurb: 'Nail-down install on plywood subfloors. Refinishable many times. Best in older San Diego homes with a proper plywood subfloor.' },
      { id: 'refinishing', name: 'Hardwood Refinishing', blurb: 'Sanding, staining, and finishing of existing solid hardwood. Festool or Bona dust-contained sander keeps the house livable through the project.' },
      { id: 'repair', name: 'Floor Repair and Board Replacement', blurb: 'Water-damaged or gouged board in the middle of an existing floor? Often replaceable with a stain match instead of a full tear-out.' },
      { id: 'wide-plank', name: 'Wide-Plank Installation', blurb: '6-inch and wider engineered plank with adhesive install. We use the right adhesive trowel for the spec, not whatever is in the truck.' },
      { id: 'stairs', name: 'Stair Treads and Risers', blurb: 'Site-finished or factory-finished stair treads matched to the floor. Open-stringer and closed-stringer both.' },
    ],
    stats: [
      { label: 'Acclimation period the NWFA recommends before install', value: '5-7 days', sourceLabel: 'NWFA', sourceUrl: 'https://nwfa.org' },
      { label: 'Times solid hardwood can be sanded and refinished', value: '3-4', sourceLabel: 'NWFA', sourceUrl: 'https://nwfa.org' },
    ],
    reviews: [
      { name: 'Kevin H.', location: 'Del Mar, CA', quote: 'Engineered Mirage white oak across our whole downstairs in Del Mar. Zelo refused to install until the slab readings were where they needed to be. Two summers in, no cups, no gaps.' },
      { name: 'Linda B.', location: 'La Jolla, CA', quote: 'Refinishing instead of replacing was Zelo\'s recommendation, and they were right. Saved us thousands. The dust-contained sander meant we could keep living in the house through the project.' },
      { name: 'Thomas G.', location: 'Coronado, CA', quote: 'Walnut on plywood subfloor in a 1950s Coronado home. Zelo handled the squeak repair, the threshold transitions, and the trim work. Came in on time, on budget, and the floor is gorgeous.' },
    ],
    faqs: [
      { q: 'Why does engineered hardwood cost about the same as solid in your quotes?', a: 'Quality engineered with a 3 to 4 mm wear layer costs roughly the same as mid-grade solid. The difference is mostly in performance over slab and at wide widths, not price. Cheap engineered with a 1 mm wear layer is less expensive but cannot be refinished and we do not recommend it.' },
      { q: 'How long does the install take and when can I walk on it?', a: 'A 1,500 square foot project is typically a full week start to finish: 5 to 7 days of acclimation, 2 to 3 days of install, plus a day for trim. You can walk on engineered floors as soon as installation finishes. Site-finished solid hardwood needs 24 to 48 hours after the last coat.' },
      { q: 'Will my new floor have gaps in winter?', a: 'A small amount of seasonal movement is normal. Larger gaps usually mean the wood went down with high moisture content and lost it later, or the install skipped acclimation. Our acclimation step prevents this. Engineered floors move less than solid because of the cross-ply core.' },
      { q: 'Can hardwood be installed in a kitchen or bathroom?', a: 'Engineered hardwood is fine in kitchens with normal precautions: silicone at sink and dishwasher, mat at the sink, prompt cleanup. We do not recommend any wood in full bathrooms because of long-term humidity. Powder rooms with no shower are a maybe.' },
      { q: 'Do you offer hardwood floor refinishing in San Diego?', a: 'Yes. If you are searching for hardwood floor refinishing near me, Zelo Flooring is a licensed San Diego crew that handles it directly, call (619) 777-4334 for a free estimate. Refinishing is often a better value than tearing out and replacing. We sand and refinish with a dust-contained sander (Festool or Bona) so your home stays livable through the project, and stain-test on your actual floor before committing to a color. Most refinishing jobs take 3 to 5 days plus cure time.' },
      { q: 'Can you stain hardwood floors a different color in San Diego?', a: 'Yes, call (619) 777-4334 for a free in-home consultation. We stain-test 2 to 3 shades directly on your existing floor before committing, since San Diego\'s coastal light and inland light both change how a stain reads once it is down. Popular shifts are golden oak to a modern gray-brown or espresso. Staining happens during the same sanding and refinishing visit, no separate trip required.' },
      { q: 'Do you offer no-sand hardwood floor refinishing in San Diego?', a: 'Sometimes, call (619) 777-4334 and we will tell you honestly after a quick look. Screen-and-recoat (a light abrasion and new topcoat, no sanding) works when the existing finish and wood are still in good shape, and it is faster and less expensive than a full refinish. It will not fix deep scratches, stains, or floors that have already been refinished 3 to 4 times, the wood itself has to have life left in it.' },
      { q: 'Do you repair damaged hardwood floors in San Diego?', a: 'Yes. We repair water-damaged, gouged, and squeaking hardwood boards across San Diego, often replacing just the affected boards with a stain match instead of a full tear-out. Board repair is usually faster and less expensive than homeowners expect, and we quote it separately from a full refinish.' },
      { q: 'Can you match an existing hardwood floor when I add on?', a: 'Sometimes. Same species and same width give you a starting chance, but old floors have aged and oxidized. We are honest about what is achievable. If a perfect match is not possible, we suggest threshold transitions or refinishing the existing floor at the same time.' },
      { q: 'Can you fix a sagging or bouncy hardwood floor?', a: 'Yes. A sagging or bouncy floor is almost always a subfloor problem, not the hardwood itself: weakened floor joists, a damaged subfloor panel, or a settled foundation. As a hardwood floor repair contractor, we inspect the subfloor where accessible, re-sheet or sister damaged framing, then reinstall or refinish the hardwood on top rather than guessing at a surface-level fix.' },
      { q: 'Can you use Pine-Sol or other household cleaners on hardwood floors?', a: 'We do not recommend Pine-Sol or other oil-soap and ammonia-based household cleaners on finished hardwood. Most leave a dulling residue or slowly break down the polyurethane finish with repeated use. Use a pH-neutral hardwood cleaner and a microfiber mop instead, and check your specific finish manufacturer\'s cleaning guidance first.' },
    ],
    blogSlug: 'engineered-vs-solid-hardwood',
  },
  {
    slug: 'laminate-flooring-san-diego',
    name: 'Laminate Flooring',
    shortName: 'Laminate',
    tagline: 'Affordable, durable, and easy to live with.',
    description:
      "The smart-budget option when you want a wood look that's tough enough to handle real life.",
    longDescription: [
      "Today's high-AC-rated laminate from brands like Pergo and Mohawk RevWood is dent-resistant, water-resistant, and visually almost identical to engineered hardwood at a fraction of the cost.",
    ],
    benefits: [
      'Excellent value vs. real hardwood',
      'Scratch and dent resistant surface',
      'Water-resistant options available',
      'Wide range of wood looks and finishes',
      'Quick installation with minimal disruption',
    ],
    bestFor: ['Budget remodels', 'Rentals', 'Hallways', 'Family rooms'],
    iconKey: 'laminate',
    // 2026-09-02: was laminate-room-install.webp — turned out to be mislabeled, the
    // actual photo is a black-and-white checkerboard commercial VCT/tile hallway, no
    // laminate visible at all. No confirmed real Zelo laminate photo exists yet
    // (flagged in CLAUDE.md), so swapped for a stock photo that at least accurately
    // shows laminate/wood-look plank.
    image: '/img/laminate-wide-plank.webp',
    secondaryImage: '/img/Water-Resistant-Laminate-Flooring.jpg',
    metaTitle: 'Laminate Flooring Installation San Diego',
    metaDescription:
      'Quality laminate flooring installation in San Diego. Pergo, Mohawk RevWood and more. Affordable wood-look floors. Call +1 (619) 777-4334.',
    lastUpdated: '2026-07-11',
    heroChip: 'San Diego, CA',
    heroTagline: 'Honest material advice. Clean trim work. Proper underlayment.',
    heroBullets: [
      'AC4 and AC5 commercial-rated lines available',
      'Pergo, Mohawk RevWood, Quick-Step, Shaw Repel',
      'Vapor-barrier underlayment standard on slab',
      'CSLB Licensed, bonded, and insured',
    ],
    primaryKeyword: 'Laminate Flooring San Diego',
    heroValueProp:
      'Laminate flooring installed across San Diego with vapor-barrier underlayment, proper expansion gaps, and the brands that actually hold up under daily use.',
    trustBullets: [
      'C-15 Licensed CSLB #1083572',
      '13+ years of journeyman experience',
      '5.0★ on Thumbtack (34 reviews)',
    ],
    subServices: [
      { id: 'waterproof', name: 'Waterproof Laminate', blurb: 'Pergo Outlast+, Mohawk RevWood Plus, Shaw Repel. Sealed-edge laminate that handles spills and pet accidents that older laminate could not.' },
      { id: 'commercial', name: 'AC4 and AC5 Commercial-Rated', blurb: 'Heavy-traffic laminate for offices, retail, and rental properties. Same install standards as residential, longer wear rating.' },
      { id: 'wood-look', name: 'Wood-Look Whole-Home Install', blurb: 'Realistic embossed surface that reads as engineered hardwood at a fraction of the cost. Whole-home installs in 1 to 2 days for typical 1,000 sq ft layouts.' },
      { id: 'rental', name: 'Rental and Multifamily Turnovers', blurb: 'Value-priced laminate rated for rental durability with quick unit-turn scheduling between leases.' },
    ],
    stats: [
      { label: 'AC rating where laminate is rated for commercial use', value: 'AC4-AC5', sourceLabel: 'EPLF Standards', sourceUrl: 'https://www.eplf.com' },
      { label: 'Typical lifespan of quality residential laminate', value: '15-25 years', sourceLabel: 'World Floor Covering Association', sourceUrl: 'https://wfca.org' },
    ],
    reviews: [
      { name: 'Peter and Jenny F.', location: 'Chula Vista, CA', quote: 'Whole house in Mohawk RevWood for a fraction of what hardwood quotes were. Zelo did the prep work right and the floor has held up to two kids and a Labrador for three years.' },
      { name: 'Nathan W.', location: 'Vista, CA', quote: 'Two-unit duplex in Vista. Pergo Outlast+ in both units. Quick turnaround between tenants and the units rent faster now that the floors look modern.' },
      { name: 'Grace L.', location: 'Poway, CA', quote: 'Asked Zelo to compare laminate and LVP for our home. They pushed us toward laminate because it suited our use better. Honest advice and a clean install.' },
    ],
    faqs: [
      { q: 'Is laminate better than LVP, or vice versa?', a: 'Different floors. Laminate has a harder, firmer feel and a more authentic embossed wood texture; LVP is softer, warmer, and 100% waterproof core. We recommend laminate for whole-home installs in dry rooms, LVP for kitchens, bathrooms, and homes with pets.' },
      { q: 'Can laminate be installed over existing tile?', a: 'Often yes. The tile must be flat (no broken tiles, no missing grout), well bonded, and not in a wet area. We may add self-leveling compound first if grout lines are wide. Otherwise the laminate floats on top with proper underlayment.' },
      { q: 'Will the floor sound hollow or noisy?', a: 'Quality underlayment and a flat subfloor eliminate the hollow click. We use foam or cork underlayment with sound attenuation rating, not the cheapest option. Premium waterproof laminate from Mohawk and Shaw has built-in pad to reduce noise further.' },
      { q: 'How long does the install take?', a: 'A 1,000 square foot home is typically 1 to 2 days. Subfloor prep and slab self-leveling can extend that. Furniture moving, baseboard removal, and trim work also factor in. We give you a clear schedule before we start.' },
      { q: 'Can I install waterproof laminate in my bathroom?', a: 'In a powder room with no shower, yes. In a full bathroom we recommend tile or LVP. Even waterproof laminate has joints, and prolonged shower humidity eventually finds them. We tell you honestly during the consultation.' },
      { q: 'What underlayment do you use, and is it included?', a: 'Foam or cork underlayment with vapor barrier on slab, sound-attenuation pad on upper floors. Underlayment is included in our standard quote. Premium acoustic pad upgrades are quoted separately for noise-sensitive condos.' },
      { q: 'Is laminate wood flooring actually waterproof?', a: 'Most standard laminate is water-resistant, not waterproof, and can swell if water sits at a seam. Newer waterproof laminate wood flooring, like Pergo Outlast+, Mohawk RevWood Plus, and Shaw Repel, uses a sealed core and locking edge that block water at the seams for spills and pet accidents. Even these are not recommended for full bathrooms.' },
      { q: 'How do I clean laminate wood floors?', a: 'Sweep or dry-mop laminate wood floors regularly so grit does not scratch the surface, then damp-mop, never wet-mop, with a laminate-safe cleaner. Skip steam mops, oil soaps, and wax-based products, they can dull the finish or force moisture into the seams. Wipe up spills immediately, especially on standard (non-waterproof) laminate.' },
    ],
  },
  {
    slug: 'tile-flooring-san-diego',
    name: 'Tile Flooring',
    shortName: 'Tile',
    tagline: 'Porcelain, ceramic, and stone tile installation.',
    description:
      'Bathroom, kitchen, and entryway tile installed level, square, and built to last.',
    longDescription: [
      'Tile is still the right call for wet areas - bathrooms, mudrooms, kitchen backsplashes, and outdoor patios. Modern porcelain tiles can also do a convincing wood-look in any room of the house.',
    ],
    benefits: [
      'Waterproof and stain resistant',
      'Porcelain, ceramic, and natural stone',
      'Wood-look porcelain plank options',
      'Proper waterproofing in wet areas',
      'Precise grout lines and layout',
    ],
    bestFor: ['Bathrooms', 'Kitchens', 'Mudrooms', 'Entryways and patios'],
    iconKey: 'tile',
    // 2026-09-02: was tile-porcelain.webp, a plain stock texture — client: "hero
    // images... too ugly". Swapped for a real Zelo tile install (not already used as
    // this service's anchorImage/realPhotos below).
    image: '/img/projects/2025-showcase/tile-03.jpg',
    secondaryImage: '/img/Natural-Stone-Tile.jpg',
    anchorImage: '/img/projects/2025-showcase/tile-02.jpg',
    realPhotos: [
      { src: '/img/projects/2025-showcase/tile-01.jpg', alt: 'Marble-look tile flooring installed by Zelo Flooring' },
      { src: '/img/projects/2025-showcase/tile-02.jpg', alt: 'Marble-look tile hallway installed by Zelo Flooring' },
      { src: '/img/projects/2025-showcase/tile-03.jpg', alt: 'Marble-look tile flooring installed by Zelo Flooring' },
    ],
    metaTitle: 'Tile Flooring Installation San Diego',
    metaDescription:
      'Porcelain, ceramic and natural stone tile installation in San Diego. Bathroom, kitchen, and entryway tile done right. Call +1 (619) 777-4334.',
    lastUpdated: '2026-07-11',
    heroChip: 'San Diego, CA',
    heroTagline: 'Substrate first. Waterproofing where it matters.',
    heroBullets: [
      'Schluter Kerdi or RedGard waterproofing in wet zones',
      'Cement backer board, never greenboard',
      'Crack isolation membrane on slab where needed',
      'CSLB Licensed, bonded, and insured',
    ],
    primaryKeyword: 'Tile Flooring San Diego',
    heroValueProp:
      'Porcelain, ceramic, and natural stone tile installed across San Diego. Proper substrate prep, waterproofing in wet zones, and tight grout lines on every job.',
    trustBullets: [
      'C-15 Licensed CSLB #1083572',
      '13+ years of journeyman experience',
      '5.0★ on Thumbtack (34 reviews)',
    ],
    subServices: [
      { id: 'porcelain', name: 'Porcelain Tile Installation', blurb: 'Through-body porcelain in stone-look, wood-look, and concrete-look visuals. The most durable everyday tile we install.' },
      { id: 'ceramic', name: 'Ceramic Tile Installation', blurb: 'Glazed ceramic for backsplashes, walls, and lower-traffic floors. More affordable than porcelain, easier to cut, narrower color range.' },
      { id: 'stone', name: 'Natural Stone Tile', blurb: 'Travertine, marble, slate, and limestone. Properly sealed before grout. Polished, honed, and tumbled finishes.' },
      { id: 'shower', name: 'Showers and Curbless Wet Rooms', blurb: 'Schluter Kerdi sheet membrane or RedGard liquid waterproofing. Pre-formed Kerdi pans for curbless showers. Pan slope checked with a level before tile.' },
      { id: 'wood-look', name: 'Wood-Look Porcelain Plank', blurb: '6x36 and 8x40 wood-look plank for whole-home installs. Looks like real hardwood, takes pets and spills like tile.' },
      { id: 'patio', name: 'Patio and Outdoor Tile', blurb: 'Frost-rated porcelain with proper expansion joints and slip-rated finish for pool decks and exterior patios.' },
    ],
    stats: [
      { label: 'Tile Council of North America (TCNA) flatness spec for large-format tile', value: '1/8" over 10 ft', sourceLabel: 'TCNA Handbook', sourceUrl: 'https://www.tcnatile.com' },
      { label: 'Typical lifespan of properly installed porcelain tile', value: '50+ years', sourceLabel: 'Ceramic Tile Education Foundation', sourceUrl: 'https://www.tilecareer.com' },
    ],
    reviews: [
      { name: 'Brian S.', location: 'Solana Beach, CA', quote: 'Curbless walk-in shower with Schluter Kerdi waterproofing. Two years in, no leaks, no mold, and the linear drain still runs perfectly. Zelo did the math on the slope and it shows.' },
      { name: 'Mariela R.', location: 'Chula Vista, CA', quote: 'Wood-look porcelain plank across our kitchen and dining room. Looks like real hardwood until you look very close. Survives spills, dogs, and the dishwasher leak we did not know about.' },
      { name: 'Carla M.', location: 'Rancho Santa Fe, CA', quote: 'Patio tile around the pool. Frost-rated porcelain with proper expansion joints. The slip-rated surface gave us peace of mind with the kids.' },
    ],
    faqs: [
      { q: 'Can you tile over my existing tile?', a: 'Sometimes, but it is usually not the right call. Existing tile must be flat, fully bonded (no hollow spots), and the additional height has to work at thresholds and under doors. We tear out and start fresh on most jobs because the result is more reliable.' },
      { q: 'What size tile is best for my floor?', a: 'Larger format (12x24, 24x24, 24x48) reads modern and reduces grout lines. It demands a flatter substrate, which we prep for. Smaller mosaic tile works best in showers because it conforms to slope. Wood-look plank in 6x36 or 8x40 is ideal for kitchens and main floors.' },
      { q: 'How long does the install take?', a: 'A typical bathroom floor is 2 to 3 days including substrate prep and grout cure. A full bathroom remodel with shower waterproofing and tile is 5 to 8 days. Kitchen floor over a flat slab is usually 2 to 3 days. Backsplashes are 1 day.' },
      { q: 'Do you do shower waterproofing?', a: 'Yes. We use Schluter Kerdi sheet membrane or RedGard liquid membrane depending on the build. Pre-formed Kerdi pans for curbless showers. Pan slope checked with a level before tile.' },
      { q: 'Can I walk on the new tile right away?', a: 'Light foot traffic is fine 24 hours after grout. We recommend keeping it out of service for 48 to 72 hours before heavy use, especially in showers where waterproofing needs to fully cure.' },
      { q: 'Can large-format tile crack from slab settling?', a: 'Yes, if there is a crack in the slab below it. We use crack isolation membrane (Schluter Ditra) over slabs with known cracks or in rooms where a crack would be likely. The membrane absorbs minor lateral slab movement so the tile does not transfer it.' },
    ],
  },
  {
    slug: 'cork-flooring-san-diego',
    name: 'Cork Flooring',
    shortName: 'Cork',
    tagline: 'Sustainable, soft, and naturally insulating.',
    description:
      'Eco-friendly cork flooring for homeowners who want comfort and a low environmental footprint.',
    longDescription: [
      'Cork is the underdog of flooring - soft underfoot, naturally antimicrobial, sound-absorbing, and made from a renewable resource.',
    ],
    benefits: [
      'Naturally renewable and sustainable',
      'Soft and warm underfoot',
      'Sound dampening - great for upstairs rooms',
      'Naturally antimicrobial',
      'Hypoallergenic',
    ],
    bestFor: ['Kitchens', 'Home offices', 'Playrooms', 'Eco-conscious builds'],
    iconKey: 'cork',
    // 2026-09-02: checked against the client's "hero images... too ugly" feedback —
    // this one's a plain top-down cork/wood plank texture, no staging issue, kept.
    // No confirmed real Zelo cork photo exists yet to swap in instead.
    image: '/img/Cork-Plank-Flooring.webp',
    secondaryImage: '/img/Cork-Tile-Flooring.webp',
    metaTitle: 'Cork Flooring Installation San Diego',
    metaDescription:
      'Sustainable cork flooring installation in San Diego. Eco-friendly, soft, and quiet. Glue-down and floating cork. Call +1 (619) 777-4334.',
    lastUpdated: '2026-07-11',
    heroChip: 'San Diego, CA',
    heroTagline: 'Niche product done right. Honest suitability advice.',
    heroBullets: [
      'Slab moisture sealing standard on cork installs',
      'Wicanders, APC, US Floors, Globus product lines',
      'Glue-down tile and floating plank both',
      'CSLB Licensed, bonded, and insured',
    ],
    primaryKeyword: 'Cork Flooring San Diego',
    heroValueProp:
      'Cork flooring installed across San Diego. Glue-down tile and floating plank from Wicanders, APC, and Globus, with proper slab moisture sealing on every job.',
    trustBullets: [
      'C-15 Licensed CSLB #1083572',
      '13+ years of journeyman experience',
      '5.0★ on Thumbtack (34 reviews)',
    ],
    subServices: [
      { id: 'glue-down', name: 'Glue-Down Cork Tile', blurb: 'Traditional cork tile in 12x12 or 12x24 with full-spread adhesive. Best for kitchens and bathrooms where moisture resistance matters. Wicanders, APC, Globus.' },
      { id: 'floating', name: 'Floating Cork Plank', blurb: 'Click-lock cork plank with HDF core. Faster install, easier replacement, great for upper floors and condos.' },
      { id: 'sound', name: 'Sound-Reduction Cork Underlayment', blurb: 'Cork as underlayment beneath hardwood, laminate, or tile in condos and townhomes. Meets HOA sound-attenuation specs.' },
      { id: 'eco', name: 'FSC-Certified Sustainable Cork', blurb: 'Sourced from FSC-certified Portuguese cork oak forests. Bark regrows every 9 years without harming the tree.' },
      { id: 'refinish', name: 'Cork Refinishing', blurb: 'Light sanding and re-seal of existing cork. Saves a full replacement when only the finish has worn.' },
    ],
    stats: [
      { label: 'Years between cork bark harvests on a single tree', value: '9 years', sourceLabel: 'Cork Quality Council', sourceUrl: 'https://www.corkqc.com' },
      { label: 'Average sound reduction of cork underlayment vs bare slab', value: '15-20 dB', sourceLabel: 'ASTM E492 testing', sourceUrl: 'https://www.astm.org' },
    ],
    reviews: [
      { name: 'Helen W.', location: 'La Mesa, CA', quote: 'Glue-down Wicanders cork in our kitchen. The difference standing at the stove or sink is night and day compared to the old tile. Knees do not ache anymore.' },
      { name: 'Frank D.', location: 'Escondido, CA', quote: 'Music room over the master bedroom. The drum kit upstairs used to be a problem. Floating cork solved it. Honest install, fair price.' },
      { name: 'Ellen K.', location: 'San Marcos, CA', quote: 'Asked Zelo about cork in a full bathroom and they talked me out of it. Recommended porcelain instead. I appreciated the honesty more than a sales pitch.' },
    ],
    faqs: [
      { q: 'Is cork flooring good for kitchens?', a: 'Yes, with the right install. Glue-down cork tile with sealed perimeter handles kitchen splashes well. We use silicone caulk along the dishwasher, sink, and refrigerator perimeter. Cleanup is wipe-and-go. Standing comfort is the underrated benefit.' },
      { q: 'Will cork hold up with pets?', a: 'Cork is more pet-friendly than people expect. The surface gives slightly under claws and resists scratching better than hardwood. The pre-finished UV-cured top coat resists pet stains. Very large dogs with very long claws can mark it over time.' },
      { q: 'How does cork handle UV and sun exposure?', a: 'Cork can fade and lighten in direct sun over years. UV-cured pre-finished cork resists this much better than older site-finished cork. We do not recommend cork in a south-facing room with all-day sun unless you accept some patina change over time.' },
      { q: 'Is cork good for basements?', a: 'Only with proper moisture management. We do calcium chloride or RH probe testing on the slab and install a vapor barrier or moisture-tolerant adhesive. Cork in a damp basement without prep is a guaranteed failure.' },
      { q: 'How long does cork installation take?', a: 'A 500 to 1,000 square foot kitchen is typically 2 to 3 days including 72-hour acclimation. Floating cork plank goes faster than glue-down tile.' },
      { q: 'Is cork really sustainable?', a: 'Yes. Cork is harvested from the bark of the cork oak tree, which regrows every nine years without harming the tree. The trees themselves live 200+ years. Wicanders, APC, and Globus all source from FSC-certified Portuguese forests.' },
    ],
  },
  {
    slug: 'rubber-flooring-san-diego',
    name: 'Rubber Flooring',
    shortName: 'Rubber',
    tagline: 'Tough flooring for gyms, garages, and commercial spaces.',
    description:
      'Rolled and tile rubber flooring for home gyms, commercial gyms, garages, and play areas.',
    longDescription: [
      'Rubber is the right floor when you need real impact resistance - home gyms, commercial fitness, garages, daycare and play areas.',
    ],
    benefits: [
      'Heavy impact and dropped-weight tested',
      'Slip resistant when wet',
      'Easy to clean and disinfect',
      'Rolled, tile, and interlocking options',
      'Commercial and residential installs',
    ],
    bestFor: ['Home gyms', 'Commercial gyms', 'Garages', 'Daycare and play areas'],
    iconKey: 'rubber',
    // 2026-09-02: checked against the client's "hero images... too ugly" feedback —
    // plain rubber tile texture, no staging issue, kept. No confirmed real Zelo rubber
    // photo exists yet to swap in instead.
    image: '/img/rubber-tiles-commercial.webp',
    secondaryImage: '/img/9191-Ecofit-Rubber-Floor_Mosaic.jpg',
    metaTitle: 'Rubber Flooring Installation San Diego',
    metaDescription:
      'Rubber flooring for home gyms, garages, and commercial spaces in San Diego. Rolled, tile and interlocking. Call +1 (619) 777-4334.',
    lastUpdated: '2026-07-11',
    heroChip: 'San Diego, CA',
    heroTagline: 'Right thickness for the job. Heat-welded seams.',
    heroBullets: [
      'Rolled, interlocking tile, and poured rubber',
      'Heat-welded seams on commercial installs',
      'Ecore, Mondo, Regupol, RB Rubber',
      'CSLB Licensed, bonded, and insured',
    ],
    primaryKeyword: 'Rubber Flooring San Diego',
    heroValueProp:
      'Rubber flooring installed across San Diego for home gyms, commercial fitness, garages, and play areas. Right thickness for the application, every job.',
    trustBullets: [
      'C-15 Licensed CSLB #1083572',
      '13+ years of journeyman experience',
      '5.0★ on Thumbtack (34 reviews)',
    ],
    subServices: [
      { id: 'home-gym', name: 'Home Gym Rubber', blurb: '3/8" to 1/2" rolled or interlocking rubber gym flooring for residential gyms. Free-weight and cardio rated. Slab crack repair included where needed.' },
      { id: 'commercial-gym', name: 'Commercial Gym Buildouts', blurb: 'Full gym buildouts: platform zones, free-weight zones, cardio zones, locker rooms. Mondo, Ecore, Regupol product lines.' },
      { id: 'garage', name: 'Garage Rubber', blurb: 'Interlocking tile and rolled rubber for garages and workshops. Hides slab cracks and oil stains, easy to clean.' },
      { id: 'daycare', name: 'Daycare and Play Areas', blurb: 'Fall-rated rubber tile for play areas and daycare. ASTM F1292 impact attenuation specs met for the play heights you need.' },
      { id: 'rolled', name: 'Rolled Rubber Installation', blurb: 'Full-spread adhesive rolled rubber. The most professional finish, fewest seams, easiest to clean. Heat-welded seams on commercial.' },
      { id: 'poured', name: 'Poured Rubber Surfacing', blurb: 'EPDM granule poured surfacing for play areas and platform zones. Color-blended, seamless, fully bonded to the slab.' },
    ],
    stats: [
      { label: 'ASTM F1292 standard for fall-attenuation rubber surfacing', value: '6-12 ft fall heights', sourceLabel: 'ASTM International', sourceUrl: 'https://www.astm.org' },
      { label: 'Lifespan of commercial-grade rubber flooring', value: '20+ years', sourceLabel: 'Resilient Floor Covering Institute', sourceUrl: 'https://rfci.com' },
    ],
    reviews: [
      { name: 'Jason P.', location: 'Poway, CA', quote: 'Three-quarter inch rolled rubber across our garage gym. Dropping the deadlift bar no longer makes the family upstairs jump. Slab cracks all hidden, no smell after the first week.' },
      { name: 'Patricia O.', location: 'San Diego (Mira Mesa), CA', quote: 'Daycare buildout in Mira Mesa. Zelo handled the fall-rated tile in the play area and the sealed seamed roll in the kitchen. Easy to clean, kids love it.' },
      { name: 'Darius M.', location: 'San Diego (Mission Valley), CA', quote: 'Commercial gym in Mission Valley. Mondo poured rubber in the platform zone, rolled in cardio. Heat-welded seams that look factory.' },
    ],
    faqs: [
      { q: 'What thickness do I need for a home gym?', a: '3/8 inch is the residential default for general fitness, cardio, and lighter dumbbell work. 1/2 inch is the right call if you do free-weight training. 3/4 inch or 1 inch is what you want for olympic lifting and dropping loaded barbells.' },
      { q: 'Will the new rubber smell?', a: 'Yes, briefly. Premium product (Ecore, Mondo) has minimal smell that aerates within a week. Budget recycled tire tile can smell strongly for a month or longer. We tell you which products are which during the consultation.' },
      { q: 'Can rubber go over my existing garage slab with cracks?', a: 'Yes. We fill significant cracks with epoxy first and grind any high spots so the rubber sits flat. Hairline cracks generally do not telegraph through 3/8 inch rubber or thicker.' },
      { q: 'How do I clean rubber flooring?', a: 'Sweep or vacuum first, then damp mop a rubber gym floor with a neutral pH cleaner. Avoid harsh acids and solvents, they degrade the binder over time. For a commercial gym, an auto-scrubber with neutral cleaner is ideal.' },
      { q: 'Should I get rolled or interlocking tile?', a: 'Rolled is more durable, looks more professional, and seams are minimal. Tile is portable, easier to replace if a piece gets damaged, and lets you start small and expand. Rolled wins for permanent installs; tile wins for renters and small spaces.' },
      { q: 'Do you handle commercial gym buildouts?', a: 'Yes. We work with general contractors and gym owners on full buildouts: platform zones, free-weight zones, cardio zones, locker rooms. After-hours installs available to keep gyms open during conversion.' },
      { q: 'Should I hire a rubber flooring installation company, or install it myself?', a: 'DIY can work for a small interlocking-tile area, but full rooms benefit from a professional install: proper slab crack repair, thickness matched to the activity, and heat-welded or fully-bonded seams that will not curl or shift under heavy equipment. As a licensed rubber flooring installation company, we handle both home gyms and full commercial buildouts.' },
    ],
  },
  {
    slug: 'vinyl-composition-tile-flooring-san-diego',
    name: 'VCT Flooring',
    shortName: 'VCT',
    tagline: 'Commercial-grade tile flooring built for high traffic.',
    description:
      'VCT installation for retail, schools, healthcare and commercial spaces in San Diego.',
    longDescription: [
      'Vinyl Composition Tile (VCT) is a workhorse - found in schools, hospitals, retail stores and offices throughout the country.',
    ],
    benefits: [
      'Commercial-grade durability',
      'Pattern and color customization',
      'Affordable per square foot',
      'Easy to maintain long-term',
      'After-hours installation available',
    ],
    bestFor: ['Schools', 'Healthcare', 'Retail', 'Offices and commercial spaces'],
    iconKey: 'vct',
    image: '/img/vct-commercial-heavy-duty.webp',
    secondaryImage: '/img/Patterned-Vinyl-Composition-Tile-2.jpg',
    metaTitle: 'VCT Flooring Installation San Diego',
    metaDescription:
      'Vinyl Composition Tile (VCT) commercial flooring installation in San Diego. Schools, healthcare, retail. Call +1 (619) 777-4334.',
    lastUpdated: '2026-07-11',
    heroChip: 'San Diego, CA',
    heroTagline: 'Commercial volume. After-hours installs. Pattern layouts to spec.',
    heroBullets: [
      'Schools, healthcare, retail, and government',
      'After-hours and weekend scheduling',
      'Armstrong Excelon, Mannington, Tarkett, Roppe',
      'CSLB Licensed, bonded, and insured',
    ],
    primaryKeyword: 'VCT Flooring San Diego',
    heroValueProp:
      'VCT installed across San Diego for schools, healthcare, retail, and offices. Pattern layouts, cove base, and after-hours scheduling so your space stays open.',
    trustBullets: [
      'C-15 Licensed CSLB #1083572',
      '13+ years of journeyman experience',
      '5.0★ on Thumbtack (34 reviews)',
    ],
    subServices: [
      { id: 'schools', name: 'School and Education VCT', blurb: 'Summer-break installs. Color-bordered hallways, custom mascot inlays, full classroom turnover before students return.' },
      { id: 'healthcare', name: 'Healthcare and Dental', blurb: 'Heat-welded seams in operatories, sealed cove base, slip-rated finishes that meet healthcare facility specs.' },
      { id: 'retail', name: 'Retail and Restaurant', blurb: 'Weekend turnovers between leases. Custom patterns, brand colors, water-jet logos.' },
      { id: 'pattern', name: 'Custom Patterns and Logos', blurb: 'Quarter-turn, ashlar, basket-weave, color borders, water-jet cut logos and school mascots. Dry-laid before adhesive.' },
      { id: 'asbestos', name: 'Asbestos-Aware Removal', blurb: 'Pre-1985 VCT may contain asbestos. We coordinate with licensed abatement partners and do not disturb suspect material until tested and abated.' },
      { id: 'maintenance', name: 'Stripping, Waxing, Maintenance', blurb: 'Initial 4 to 5 finish coats out of the gate, then strip-and-re-wax cycles every 12 to 24 months. Maintenance plans available.' },
    ],
    stats: [
      { label: 'Typical lifespan of properly maintained VCT', value: '20-30 years', sourceLabel: 'Resilient Floor Covering Institute', sourceUrl: 'https://rfci.com' },
      { label: 'Year asbestos was banned in new VCT manufacturing', value: '1985', sourceLabel: 'EPA', sourceUrl: 'https://www.epa.gov/asbestos' },
    ],
    reviews: [
      { name: 'Facilities Director', location: 'Elementary School District, San Diego, CA', quote: 'Summer break classroom retrofit at our elementary school. 18,000 square feet of Armstrong Excelon, color-bordered hallways, all done before students returned. Zelo hit every milestone.' },
      { name: 'Retail Operations Manager', location: 'San Diego (Mission Valley), CA', quote: 'Two retail stores in a Mission Valley shopping center. Zelo handled both turnovers in a single weekend, doors open Monday morning.' },
      { name: 'Dr. R. Patel', location: 'San Diego, CA', quote: 'Dental clinic refresh. We needed seamless heat-welded edges in the operatories and a clean cove base throughout. Zelo handled the prep, asbestos coordination on the old tile, and the new install.' },
    ],
    faqs: [
      { q: 'Is VCT the same as LVT?', a: 'No. VCT (Vinyl Composition Tile) is a homogeneous tile of vinyl, limestone, plasticizer, and pigment. It needs regular stripping and waxing. LVT (Luxury Vinyl Tile) is multi-layer with a printed wear layer and pre-finished top coat that does not need waxing. VCT is cheaper per square foot but has higher long-term maintenance.' },
      { q: 'How often does VCT need to be stripped and waxed?', a: 'Standard maintenance is 4 to 5 finish coats out of the gate, then a strip and re-wax every 12 to 24 months depending on traffic. High-traffic schools and hospitals are usually annual. Low-traffic offices can stretch to 24 months.' },
      { q: 'Can you handle asbestos VCT removal?', a: 'We coordinate with licensed asbestos abatement contractors. VCT installed before 1985 may contain asbestos in the tile body or in the cutback adhesive underneath. We do not disturb suspect material until it has been tested and abated where required.' },
      { q: 'Do you work after hours and weekends?', a: 'Yes. Most of our commercial work is nights, weekends, school break, or phased installs in operating buildings. Tell us your operating constraints and we will build the schedule around them.' },
      { q: 'How long until we can walk on the new floor?', a: 'Light foot traffic is fine 24 hours after install. We typically apply seal and finish coats the next day, with full cure of finish in 24 to 48 hours after the last coat. Heavy rolling traffic waits a full week.' },
      { q: 'Can you do custom patterns and logos?', a: 'Yes. Quarter-turn, ashlar, basket-weave, color borders, water-jet cut logos, school mascots, and brand colors. We dry-lay patterns before adhesive so you approve the look before it is committed.' },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const MAIN_SERVICES = SERVICES.filter((s) =>
  ['carpet-flooring-san-diego', 'vinyl-flooring-san-diego', 'hardwood-flooring-san-diego', 'laminate-flooring-san-diego'].includes(s.slug)
);

export const OTHER_SERVICES = SERVICES.filter((s) =>
  ['tile-flooring-san-diego', 'cork-flooring-san-diego', 'rubber-flooring-san-diego', 'vinyl-composition-tile-flooring-san-diego'].includes(s.slug)
);
