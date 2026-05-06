import type { ServiceReview, ServiceFaq } from './services';

export type LocationType = 'main' | 'secondary';

export type Location = {
  slug: string; // url segment, always begins with `flooring-`
  city: string;
  state: string; // 'CA'
  type: LocationType;
  county: string;
  zips: string[];
  neighborhoods: string[]; // sub-neighborhoods or districts within
  landmarks: string[];
  driveTimeFromHQ?: string; // secondary only, e.g. "20-25 min"
  wikipediaUrl: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroValueProp: string;
  // 40-60 word AEO direct answer to "How much does flooring cost in {city}?"
  aeoCostAnswer: string;
  // 40-60 word AEO direct answer to a second top question
  aeoSecondaryQuestion: { q: string; a: string };
  cityIntro: string[]; // 1-2 paragraphs setting context (climate, housing, install nuances)
  localNuances: string[]; // 3-5 bullets: HOA rules, slab vs raised, beach humidity, permit notes
  whyChooseUsLocal: { title: string; desc: string }[]; // 4-6 city-specific differentiators
  reviews: ServiceReview[];
  faqs: ServiceFaq[];
  // Internal links to other location combos (curated, not auto-generated)
  relatedLocations: string[]; // slugs
  // image for hero
  heroImage: string;
  heroImageAlt: string;
};

// SHARED data for the main San Diego HQ, used in schema and visible NAP
export const SAN_DIEGO_HQ_BLOCK = {
  city: 'San Diego',
  state: 'CA',
  county: 'San Diego County',
};

export const LOCATIONS: Location[] = [
  // ---------- MAIN ----------
  {
    slug: 'flooring-san-diego',
    city: 'San Diego',
    state: 'CA',
    type: 'main',
    county: 'San Diego County',
    zips: ['92101', '92103', '92104', '92107', '92109', '92110', '92116', '92117', '92126', '92129'],
    neighborhoods: [
      'North Park',
      'Hillcrest',
      'Mission Hills',
      'Point Loma',
      'Pacific Beach',
      'Ocean Beach',
      'University Heights',
      'Kearny Mesa',
      'Mira Mesa',
      'Rancho Peñasquitos',
      'Clairemont',
      'Bay Park',
    ],
    landmarks: ['Balboa Park', 'San Diego Bay', 'Mission Bay', 'Interstate 5', 'Interstate 8', 'Interstate 805'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/San_Diego',
    metaTitle: 'Flooring in San Diego, CA - Zelo Flooring',
    metaDescription:
      'Flooring installation in San Diego, CA. Hardwood, vinyl plank, tile, carpet, laminate. Licensed CSLB #1083572. Free in-home estimate. Call +1 (619) 777-4334.',
    primaryKeyword: 'flooring San Diego',
    secondaryKeywords: [
      'flooring installation San Diego',
      'flooring contractor San Diego',
      'San Diego flooring company',
      'hardwood flooring San Diego',
      'vinyl plank San Diego',
    ],
    heroValueProp:
      'Zelo Flooring installs carpet, vinyl plank, hardwood, laminate, and tile across San Diego. Licensed CSLB contractor, manufacturer-spec installs, free in-home estimate.',
    aeoCostAnswer:
      'Flooring installation in San Diego runs roughly $3 to $15 per square foot installed. Carpet sits at the low end ($3 to $7), luxury vinyl plank in the middle ($5 to $10), and hardwood at the top ($8 to $15). Labor in coastal San Diego runs higher than national averages because of slab moisture prep.',
    aeoSecondaryQuestion: {
      q: 'How long does flooring installation take in San Diego?',
      a: 'A typical 1,000 to 1,500 square foot install takes 1 to 3 days for vinyl plank or laminate, 2 to 4 days for hardwood including acclimation, and 3 to 5 days for tile with substrate prep. Slab grinding, asbestos testing on older homes, or HOA scheduling can extend the timeline.',
    },
    cityIntro: [
      'Zelo Flooring is a family-run San Diego flooring contractor based in Mira Mesa, serving homeowners and businesses across San Diego County. We focus on the boring details that decide whether a floor lasts five years or twenty: slab moisture testing, manufacturer-spec acclimation, proper subfloor flatness, and clean transitions.',
      'San Diego homes have a few traits that change how floors get installed here. Most homes built since the 1980s sit on concrete slab, which means moisture testing and vapor barriers matter more than they would in a Midwest crawl-space home. Coastal humidity from Point Loma to Pacific Beach pushes engineered hardwood and rigid-core vinyl ahead of solid hardwood for most rooms. We adjust the install spec to the house, not to whatever is fastest.',
    ],
    localNuances: [
      'Slab homes from the 1970s onward dominate San Diego, calcium chloride or RH probe moisture testing is standard before any wood or laminate install.',
      'Coastal humidity from La Jolla, Pacific Beach, and Coronado favors engineered hardwood and rigid-core SPC vinyl over solid hardwood and traditional laminate.',
      'Pre-1985 VCT and sheet vinyl in older San Diego homes may contain asbestos in the tile body or cutback adhesive, we coordinate with licensed abatement partners before tear-out.',
      'HOA-governed buildings (downtown high-rises, Mission Valley condos) often require sound-attenuation underlayment with documented STC/IIC ratings. We carry compliant underlayment for these projects.',
      'San Diego does not require a city permit for like-for-like residential flooring replacement, but condo associations and historic-district homes (e.g. parts of Bankers Hill, Mission Hills) may require ARC approval for visible changes.',
    ],
    whyChooseUsLocal: [
      { title: 'San Diego Slab-First Approach', desc: 'Every quote includes slab flatness and moisture testing line-items before product is ordered. No surprise change orders mid-install.' },
      { title: 'Coastal Climate-Spec Materials', desc: 'We default to engineered hardwood and rigid-core SPC vinyl for homes within 5 miles of the coast, where humidity ages solid wood faster.' },
      { title: 'CSLB Licensed Locally', desc: 'CSLB Lic #1083572. Licensed, bonded, and insured under California Contractors State License Board for residential and commercial work.' },
      { title: 'Free In-Home Estimate Across the County', desc: 'We bring physical samples to your house from Carlsbad to Chula Vista. You see colors in your real lighting before you commit.' },
      { title: 'Manufacturer-Spec Installs', desc: 'NWFA-aligned hardwood, TCNA-spec tile substrate prep, and brand-specific underlayment. Your warranty stays valid.' },
    ],
    reviews: [
      { name: 'Maria S.', location: 'La Jolla, CA', quote: 'Zelo replaced all the flooring in our home with luxury vinyl plank. They were on time every day, the install looks flawless, and they cleaned up better than they found us.' },
      { name: 'David R.', location: 'Chula Vista, CA', quote: 'Got three quotes, Zelo wasn\'t the cheapest but the most thorough. They explained exactly what they\'d do, brought samples, and the hardwood floors look incredible.' },
      { name: 'Jennifer K.', location: 'Carlsbad, CA', quote: 'Carpeted three bedrooms and the stairs. Crew was professional, install was quick, and the quality is way better than what we had before. Five stars all day.' },
    ],
    faqs: [
      { q: 'How much does flooring cost in San Diego?', a: 'Installation runs $3 to $15 per square foot installed depending on material. Carpet $3-$7, luxury vinyl plank $5-$10, hardwood $8-$15. Slab prep, moisture testing, and stair/transition work add to the labor portion.' },
      { q: 'Do I need a permit for flooring replacement in San Diego?', a: 'Like-for-like residential flooring replacement does not require a city permit in San Diego. Condo associations may require ARC approval, and historic-district homes can have additional review. We confirm during the in-home consultation.' },
      { q: 'What flooring is best for San Diego coastal homes?', a: 'Engineered hardwood with a 3-4 mm wear layer and rigid-core SPC vinyl handle coastal humidity better than solid hardwood or traditional laminate. We default to these in homes within 5 miles of the coast.' },
      { q: 'Do you handle older San Diego homes with potential asbestos in old VCT?', a: 'Yes. We coordinate with licensed asbestos abatement partners. Pre-1985 VCT or cutback adhesive is tested before tear-out, and abated where required, before new flooring goes in.' },
      { q: 'How long does the install take?', a: 'A 1,000-1,500 sq ft project typically runs 1-3 days for vinyl or laminate, 2-4 days for hardwood including acclimation, and 3-5 days for tile. We give a clear timeline before any work begins.' },
      { q: 'Do you serve all of San Diego County?', a: 'Yes. We install across San Diego County including Coronado, Del Mar, La Jolla, Carlsbad, Encinitas, Chula Vista, Poway, and Escondido. Free in-home estimates everywhere we serve.' },
      { q: 'Are you licensed and insured?', a: 'Yes. Zelo Flooring is licensed by the California Contractors State License Board (CSLB Lic #1083572), bonded, and carries general liability and workers compensation insurance.' },
    ],
    relatedLocations: [],
    heroImage: '/img/projects/lvp-whole-home/after-living-room-lvp.webp',
    heroImageAlt: 'Luxury vinyl plank flooring installed across a San Diego home by Zelo Flooring',
  },
];

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);

export const MAIN_LOCATION = LOCATIONS.find((l) => l.type === 'main')!;

export function isLocationSlug(slug: string): boolean {
  return LOCATIONS.some((l) => l.slug === slug);
}
