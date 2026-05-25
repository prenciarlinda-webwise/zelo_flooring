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
    metaTitle: 'Flooring in San Diego, CA',
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
    relatedLocations: ['flooring-la-jolla', 'flooring-coronado', 'flooring-del-mar', 'flooring-carlsbad', 'flooring-encinitas', 'flooring-poway'],
    heroImage: '/img/projects/lvp-whole-home/after-living-room-lvp.webp',
    heroImageAlt: 'Luxury vinyl plank flooring installed across a San Diego home by Zelo Flooring',
  },

  // ---------- LA JOLLA ----------
  {
    slug: 'flooring-la-jolla',
    city: 'La Jolla',
    state: 'CA',
    type: 'secondary',
    county: 'San Diego County',
    zips: ['92037'],
    neighborhoods: ['Bird Rock', 'La Jolla Shores', 'Windansea', 'The Village', 'Mount Soledad', 'La Jolla Farms', 'Muirlands', 'Hidden Valley'],
    landmarks: ['La Jolla Cove', 'Mount Soledad National Veterans Memorial', 'Scripps Pier', 'Windansea Beach', 'Torrey Pines', 'UC San Diego'],
    driveTimeFromHQ: '15-20 min',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/La_Jolla,_San_Diego',
    metaTitle: 'Flooring in La Jolla, CA',
    metaDescription:
      'Flooring installation in La Jolla, CA. Engineered hardwood, vinyl plank, and tile built for coastal homes. Licensed CSLB #1083572. Free in-home estimate. Call +1 (619) 777-4334.',
    primaryKeyword: 'flooring La Jolla',
    secondaryKeywords: ['flooring installation La Jolla', 'hardwood flooring La Jolla', 'La Jolla flooring contractor', 'engineered hardwood La Jolla', 'vinyl plank La Jolla'],
    heroValueProp:
      'Zelo Flooring installs engineered hardwood, luxury vinyl plank, tile, and carpet in La Jolla homes from Bird Rock to the Village. Coastal-spec materials, licensed CSLB contractor, free in-home estimate.',
    aeoCostAnswer:
      "Flooring installation in La Jolla typically runs $5 to $18 per square foot installed. Engineered hardwood and wide-plank European oak land at the higher end, while rigid-core vinyl plank sits around $6 to $11. La Jolla's oceanfront humidity and older hillside foundations push most installs toward engineered wood and moisture-tested subfloor prep.",
    aeoSecondaryQuestion: {
      q: "What flooring holds up best in La Jolla's coastal climate?",
      a: 'Engineered hardwood with a 4mm-plus wear layer and rigid-core SPC vinyl handle La Jolla salt air and humidity far better than solid hardwood, which can cup and gap within a few feet of the ocean. For bathrooms and entryways near the Shores, porcelain tile is the most durable choice.',
    },
    cityIntro: [
      'Zelo Flooring works throughout La Jolla, from the cliffside homes above Windansea to the condos near the Village and the larger lots up Mount Soledad. Many La Jolla houses are mid-century or older, sit on hillside foundations, and were built well before modern moisture standards, so we test before we install rather than after.',
      'Being within a mile of the Pacific changes what flooring lasts here. Salt air and steady humidity work against solid hardwood and cheap laminate, especially in homes that run open windows instead of constant AC. We steer most La Jolla clients toward engineered hardwood and rigid-core vinyl, and we acclimate every board to the home before a single plank goes down.',
    ],
    localNuances: [
      'Homes within a few blocks of the coast (Bird Rock, La Jolla Shores, Windansea) see high salt-air humidity, so engineered hardwood and SPC vinyl outperform solid wood here.',
      'Hillside homes on Mount Soledad and in Muirlands often have stepped or post-and-pier foundations that need extra subfloor flattening before plank flooring.',
      'Older Village condos frequently carry HOA underlayment requirements with documented STC/IIC sound ratings, which we match before install.',
      'Pre-1980 La Jolla homes may have original sheet vinyl or VCT with asbestos in the adhesive, so we test and coordinate abatement before tear-out.',
      'Tight Village streets and limited driveway access mean we plan material staging and parking ahead of demolition day.',
    ],
    whyChooseUsLocal: [
      { title: 'Coastal-Spec Materials By Default', desc: 'For La Jolla homes near the water we quote engineered hardwood and rigid-core vinyl first, because solid wood cups and gaps in oceanfront humidity.' },
      { title: 'Hillside Subfloor Prep', desc: 'Mount Soledad and Muirlands homes rarely have flat subfloors. We grind, patch, and self-level so your finished floor lays flush, not wavy.' },
      { title: 'HOA And Condo Compliant', desc: 'We carry sound-rated underlayment that meets La Jolla Village condo association STC/IIC requirements, with documentation for your board.' },
      { title: 'Samples Brought To La Jolla', desc: 'We bring physical samples to your home so you see oak, walnut, and vinyl colors in your actual coastal light before choosing.' },
      { title: 'Licensed And Insured', desc: 'CSLB C-15 #1083572, bonded and insured. Your manufacturer warranty stays intact because every install follows spec.' },
    ],
    reviews: [
      { name: 'Catherine M.', location: 'Bird Rock, La Jolla', quote: 'We had solid oak that had cupped from the ocean air. Zelo replaced it with engineered hardwood and explained exactly why. Two years in and it still looks perfect.' },
      { name: 'Robert T.', location: 'La Jolla Village', quote: 'Our condo board had strict sound requirements. Zelo handled the underlayment paperwork and the install passed inspection with no issues. Floors look fantastic.' },
      { name: 'Diane H.', location: 'Muirlands, La Jolla', quote: 'Our hillside home had an uneven subfloor that two other contractors did not even mention. Zelo leveled it properly and the LVP came out flawless.' },
    ],
    faqs: [
      { q: 'How much does flooring installation cost in La Jolla?', a: 'Most La Jolla projects run $5 to $18 per square foot installed. Engineered hardwood and wide-plank oak sit at the top, rigid-core vinyl around $6 to $11, and tile depends on substrate prep. Hillside leveling and coastal moisture work can add to the labor.' },
      { q: 'What flooring is best for homes near the La Jolla coast?', a: 'Engineered hardwood with a thick wear layer and rigid-core SPC vinyl hold up best against salt air and humidity. Solid hardwood can cup within a mile of the water, so we usually recommend against it for Bird Rock and Shores homes.' },
      { q: 'Do you handle La Jolla condo HOA requirements?', a: 'Yes. Many Village condos require sound-attenuation underlayment with documented STC/IIC ratings. We carry compliant underlayment and provide the documentation your association needs before work begins.' },
      { q: 'Can you level the subfloor in hillside La Jolla homes?', a: 'Yes. Mount Soledad and Muirlands homes often have uneven or stepped subfloors. We grind high spots, patch low spots, and self-level so the finished floor sits flat with clean transitions.' },
      { q: 'Do you serve all La Jolla neighborhoods?', a: 'We install throughout La Jolla including Bird Rock, La Jolla Shores, Windansea, the Village, Mount Soledad, Muirlands, and La Jolla Farms. Free in-home estimates across the 92037 ZIP code.' },
      { q: 'How far is your team from La Jolla?', a: 'Our San Diego office is about 15 to 20 minutes from La Jolla, so scheduling estimates and install days is easy and we are local for any follow-up.' },
    ],
    relatedLocations: ['flooring-del-mar', 'flooring-san-diego', 'flooring-coronado'],
    heroImage: '/img/projects/portfolio/zelo-project-01.webp',
    heroImageAlt: 'Engineered hardwood flooring installed in a La Jolla coastal home by Zelo Flooring',
  },

  // ---------- CARLSBAD ----------
  {
    slug: 'flooring-carlsbad',
    city: 'Carlsbad',
    state: 'CA',
    type: 'secondary',
    county: 'San Diego County',
    zips: ['92008', '92009', '92010', '92011'],
    neighborhoods: ['Carlsbad Village', 'La Costa', 'Aviara', 'Bressi Ranch', 'Calavera Hills', 'Olde Carlsbad', 'Rancho Carrillo', 'La Costa Oaks'],
    landmarks: ['Legoland California', 'Carlsbad State Beach', 'The Flower Fields', 'Batiquitos Lagoon', 'Agua Hedionda Lagoon', 'Carlsbad Village'],
    driveTimeFromHQ: '35-45 min',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Carlsbad,_California',
    metaTitle: 'Flooring in Carlsbad, CA',
    metaDescription:
      'Flooring installation in Carlsbad, CA. Vinyl plank, hardwood, tile, and carpet for Village and master-planned homes. Licensed CSLB #1083572. Free in-home estimate. Call +1 (619) 777-4334.',
    primaryKeyword: 'flooring Carlsbad',
    secondaryKeywords: ['flooring installation Carlsbad', 'vinyl plank flooring Carlsbad', 'Carlsbad flooring contractor', 'hardwood flooring Carlsbad', 'LVP Carlsbad'],
    heroValueProp:
      'Zelo Flooring installs luxury vinyl plank, hardwood, tile, and carpet across Carlsbad, from the Village to La Costa and Aviara. Slab-spec installs, licensed CSLB contractor, free in-home estimate.',
    aeoCostAnswer:
      'Flooring installation in Carlsbad generally runs $4 to $15 per square foot installed. Luxury vinyl plank, the most popular choice in La Costa and Aviara tract homes, runs $5 to $10. Hardwood lands at $8 to $15, and tile depends on prep. Newer slab homes need moisture testing before any wood or laminate goes down.',
    aeoSecondaryQuestion: {
      q: "What flooring works best in Carlsbad's newer master-planned homes?",
      a: 'Most Carlsbad tract homes in La Costa, Aviara, and Bressi Ranch sit on concrete slab, which makes rigid-core luxury vinyl plank and engineered hardwood the safest bets. Both tolerate slab moisture better than solid hardwood. We run a moisture test on the slab before recommending a specific product.',
    },
    cityIntro: [
      'Zelo Flooring serves all of Carlsbad, from the older beach cottages in the Village and Olde Carlsbad to the master-planned neighborhoods of La Costa, Aviara, and Bressi Ranch. The city splits between decades-old coastal homes and newer tract construction, and each needs a different approach.',
      'Most newer Carlsbad homes sit on a concrete slab, so the first thing we check is slab moisture. A floor that skips that step can buckle a year later. Closer to the coast and the lagoons, humidity nudges us toward engineered hardwood and rigid-core vinyl over solid wood. We match the product to the foundation and the location, not to a one-size order sheet.',
    ],
    localNuances: [
      'La Costa, Aviara, and Bressi Ranch are mostly slab-on-grade, so calcium chloride or RH moisture testing comes first on every wood or laminate job.',
      'Master-planned Carlsbad HOAs sometimes restrict exterior-visible changes and set construction-hour windows, which we schedule around.',
      'Coastal homes near Carlsbad State Beach and the lagoons get extra humidity, so engineered hardwood and SPC vinyl outlast solid wood here.',
      'Older Village and Olde Carlsbad cottages can have raised foundations and original subfloors that need shimming or re-sheeting.',
      'Two-story tract homes often want sound-dampening underlayment on the upper floor to quiet foot traffic.',
    ],
    whyChooseUsLocal: [
      { title: 'Slab Moisture Testing First', desc: 'Newer Carlsbad homes in La Costa and Aviara are slab-on-grade. We test slab moisture before ordering product so your floor does not buckle later.' },
      { title: 'Built For Master-Planned HOAs', desc: 'We work within Carlsbad HOA construction-hour windows and document anything your association needs before we start tear-out.' },
      { title: 'Coastal And Inland Coverage', desc: 'From Village beach cottages to inland tract homes, we adjust product and prep to each foundation and how close you sit to the water.' },
      { title: 'Free Samples To Your Door', desc: 'We bring vinyl plank, laminate, and hardwood samples to your Carlsbad home so you can match them to your cabinets and light.' },
      { title: 'Licensed, Bonded, Insured', desc: 'CSLB C-15 #1083572. Manufacturer-spec installs keep your flooring warranty valid.' },
    ],
    reviews: [
      { name: 'Mark D.', location: 'La Costa, Carlsbad', quote: 'Zelo tested our slab moisture before quoting, which no one else did. They put in rigid-core vinyl through the whole downstairs and it has been rock solid.' },
      { name: 'Stephanie R.', location: 'Aviara, Carlsbad', quote: 'Great communication from estimate to cleanup. They worked within our HOA hours and the hardwood install looks better than the model home.' },
      { name: 'Greg P.', location: 'Carlsbad Village', quote: 'Our older cottage had a saggy subfloor. Zelo re-sheeted it and laid laminate that finally feels solid underfoot. Honest crew, fair price.' },
    ],
    faqs: [
      { q: 'How much does flooring cost in Carlsbad?', a: 'Carlsbad installs typically run $4 to $15 per square foot installed. Luxury vinyl plank is $5 to $10, hardwood $8 to $15, and tile varies with substrate prep. Slab moisture testing and subfloor work on older Village homes affect the labor portion.' },
      { q: 'Why does my Carlsbad slab need moisture testing?', a: 'Most newer Carlsbad homes sit on concrete slab, which releases moisture vapor. Installing wood or laminate without testing can cause cupping and buckling. We run a calcium chloride or RH test and add a vapor barrier when readings call for one.' },
      { q: 'Do you follow Carlsbad HOA rules in La Costa and Aviara?', a: 'Yes. Master-planned Carlsbad communities often set construction-hour windows and approval steps. We schedule around them and provide any documentation your HOA requires before starting.' },
      { q: 'What flooring is best near Carlsbad State Beach?', a: 'Homes near the coast and the lagoons see more humidity. Engineered hardwood and rigid-core SPC vinyl handle it better than solid hardwood or traditional laminate, so we usually recommend those for coastal Carlsbad.' },
      { q: 'Do you install in both new and older Carlsbad homes?', a: 'Yes. We work on newer slab tract homes in La Costa, Aviara, and Bressi Ranch as well as older raised-foundation cottages in the Village and Olde Carlsbad, adjusting prep to each.' },
      { q: 'How long does a Carlsbad install take?', a: 'A typical 1,000 to 1,500 square foot job runs 1 to 3 days for vinyl or laminate, 2 to 4 days for hardwood, and 3 to 5 days for tile. We give you a firm timeline before starting.' },
    ],
    relatedLocations: ['flooring-encinitas', 'flooring-oceanside', 'flooring-san-marcos'],
    heroImage: '/img/projects/portfolio/zelo-project-05.webp',
    heroImageAlt: 'Luxury vinyl plank flooring installed in a Carlsbad home by Zelo Flooring',
  },

  // ---------- ENCINITAS ----------
  {
    slug: 'flooring-encinitas',
    city: 'Encinitas',
    state: 'CA',
    type: 'secondary',
    county: 'San Diego County',
    zips: ['92024', '92007'],
    neighborhoods: ['Leucadia', 'Cardiff-by-the-Sea', 'Olivenhain', 'Old Encinitas', 'New Encinitas', 'Village Park'],
    landmarks: ["Swami's Beach", 'Moonlight Beach', 'San Elijo Lagoon', 'Self-Realization Fellowship', 'Encinitas Boulevard', 'Cardiff State Beach'],
    driveTimeFromHQ: '30-40 min',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Encinitas,_California',
    metaTitle: 'Flooring in Encinitas, CA',
    metaDescription:
      'Flooring installation in Encinitas, CA. Durable vinyl plank, engineered hardwood, and tile for beach homes and rentals. Licensed CSLB #1083572. Free in-home estimate. Call +1 (619) 777-4334.',
    primaryKeyword: 'flooring Encinitas',
    secondaryKeywords: ['flooring installation Encinitas', 'vinyl plank flooring Encinitas', 'Encinitas flooring contractor', 'engineered hardwood Encinitas', 'beach home flooring Encinitas'],
    heroValueProp:
      'Zelo Flooring installs luxury vinyl plank, engineered hardwood, tile, and carpet across Encinitas, from Leucadia and Cardiff to Olivenhain. Coastal-spec installs, licensed CSLB contractor, free in-home estimate.',
    aeoCostAnswer:
      'Flooring installation in Encinitas usually runs $4 to $16 per square foot installed. Rigid-core vinyl plank, popular in Leucadia and Cardiff beach homes, runs $5 to $10, while engineered hardwood lands at $8 to $15. Salt air this close to the water makes moisture-resistant materials and proper subfloor prep the priority.',
    aeoSecondaryQuestion: {
      q: 'What flooring suits Encinitas beach homes and rentals?',
      a: 'Rigid-core luxury vinyl plank is the top pick for Encinitas beach homes and vacation rentals because it shrugs off sand, moisture, and heavy foot traffic without cupping. For owners who want real wood, engineered hardwood with a thick wear layer holds up far better than solid wood near the coast.',
    },
    cityIntro: [
      'Zelo Flooring installs throughout Encinitas, covering the beach bungalows of Leucadia and Cardiff-by-the-Sea, the newer homes of New Encinitas, and the larger semi-rural lots out in Olivenhain. It is a true surf-town mix, and the flooring that fits a Cardiff rental is rarely what fits an Olivenhain ranch.',
      'Sand, salt air, and open-window living are the constants near the coast here. Those conditions wear out solid hardwood and bargain laminate quickly, so we lean on rigid-core vinyl and engineered wood for most Encinitas homes. Out in Olivenhain, where lots are bigger and homes sit farther from the water, we have more room to recommend traditional hardwood when a client wants it.',
    ],
    localNuances: [
      'Leucadia and Cardiff beach homes deal with sand and salt humidity, so rigid-core vinyl and engineered wood resist both better than solid hardwood.',
      'Olivenhain has larger semi-rural lots and some homes on septic and well, so we plan staging and dust control for longer driveways and detached layouts.',
      'Vacation rentals and beach cottages get heavy foot traffic, so we recommend high-wear-layer LVP for durability between guests.',
      'Older Cardiff and Old Encinitas bungalows may have raised foundations with original plank subfloors that need re-sheeting before tile or vinyl.',
      'Two-story New Encinitas homes often benefit from acoustic underlayment to cut upstairs noise.',
    ],
    whyChooseUsLocal: [
      { title: 'Beach-Home Durability', desc: 'For Leucadia and Cardiff rentals and cottages we recommend high-wear-layer rigid-core vinyl that handles sand, moisture, and constant traffic.' },
      { title: 'Coastal Material Guidance', desc: 'We help you weigh engineered hardwood versus solid wood based on how close your Encinitas home sits to the water.' },
      { title: 'Olivenhain Acreage Ready', desc: 'Larger semi-rural lots get a staging and cleanup plan that fits long driveways and detached garages, with care for septic and well lines.' },
      { title: 'Subfloor Repair On Older Bungalows', desc: 'We re-sheet and flatten the original raised subfloors common in Old Encinitas and Cardiff before laying tile or vinyl.' },
      { title: 'Licensed And Local', desc: 'CSLB C-15 #1083572, bonded and insured, with samples brought to your Encinitas door.' },
    ],
    reviews: [
      { name: 'Lauren K.', location: 'Leucadia, Encinitas', quote: 'We rent our place near the beach and needed something that survives sandy feet. Zelo put in tough vinyl plank that still looks new after a busy summer.' },
      { name: 'Tom B.', location: 'Olivenhain, Encinitas', quote: 'Big house, long driveway, and they handled it all cleanly. The engineered hardwood through the main level is gorgeous and the crew was respectful of the property.' },
      { name: 'Priya N.', location: 'Cardiff-by-the-Sea', quote: 'Our old bungalow had a bouncy floor. Zelo re-sheeted the subfloor and the new LVP feels completely solid now. Fair quote, no surprises.' },
    ],
    faqs: [
      { q: 'How much does flooring cost in Encinitas?', a: 'Encinitas installs run about $4 to $16 per square foot installed. Rigid-core vinyl plank is $5 to $10, engineered hardwood $8 to $15, and tile varies with prep. Subfloor repair on older Cardiff and Leucadia bungalows adds to the labor.' },
      { q: 'What flooring is best for an Encinitas beach rental?', a: 'High-wear-layer rigid-core luxury vinyl plank is ideal for rentals and beach cottages. It resists sand, moisture, and heavy guest traffic, and it does not cup the way solid hardwood can near the coast.' },
      { q: 'Can you install hardwood in Olivenhain homes?', a: 'Yes. Olivenhain sits farther inland with larger lots, so solid and engineered hardwood are both viable. We still check subfloor and moisture conditions and recommend the product that fits your specific home.' },
      { q: 'Do older Cardiff and Leucadia homes need subfloor work?', a: 'Often, yes. Many older raised-foundation bungalows have original plank subfloors that flex. We re-sheet or flatten them so the finished tile or vinyl sits solid and quiet.' },
      { q: 'Which Encinitas areas do you serve?', a: 'We install across Encinitas including Leucadia, Cardiff-by-the-Sea, Olivenhain, Old Encinitas, and New Encinitas, covering the 92024 and 92007 ZIP codes with free in-home estimates.' },
      { q: 'How long will my Encinitas floor take to install?', a: 'A 1,000 to 1,500 square foot project usually takes 1 to 3 days for vinyl or laminate, 2 to 4 days for hardwood, and 3 to 5 days for tile, including any subfloor repair.' },
    ],
    relatedLocations: ['flooring-carlsbad', 'flooring-del-mar', 'flooring-rancho-santa-fe'],
    heroImage: '/img/projects/portfolio/zelo-project-09.webp',
    heroImageAlt: 'Luxury vinyl plank flooring installed in an Encinitas beach home by Zelo Flooring',
  },

  // ---------- POWAY ----------
  {
    slug: 'flooring-poway',
    city: 'Poway',
    state: 'CA',
    type: 'secondary',
    county: 'San Diego County',
    zips: ['92064'],
    neighborhoods: ['Green Valley', 'Garden Road', 'Old Poway', 'Lake Poway', 'Bridlewood', 'Stone Canyon', 'Sycamore Canyon'],
    landmarks: ['Lake Poway', 'Blue Sky Ecological Reserve', 'Old Poway Park', 'Maderas Golf Club', 'Poway Center for the Performing Arts'],
    driveTimeFromHQ: '15-20 min',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Poway,_California',
    metaTitle: 'Flooring in Poway, CA',
    metaDescription:
      'Flooring installation in Poway, CA. Hardwood, vinyl plank, tile, and carpet for inland homes and larger lots. Licensed CSLB #1083572. Free in-home estimate. Call +1 (619) 777-4334.',
    primaryKeyword: 'flooring Poway',
    secondaryKeywords: ['flooring installation Poway', 'hardwood flooring Poway', 'Poway flooring contractor', 'vinyl plank flooring Poway', 'solid hardwood Poway'],
    heroValueProp:
      'Zelo Flooring installs hardwood, luxury vinyl plank, tile, and carpet across Poway, from Green Valley to the homes around Lake Poway. Inland-spec installs, licensed CSLB contractor, free in-home estimate.',
    aeoCostAnswer:
      "Flooring installation in Poway generally runs $4 to $15 per square foot installed. Poway's drier inland air makes solid and engineered hardwood ($8 to $15) more practical than at the coast, while luxury vinyl plank runs $5 to $10. Larger Poway homes and horse properties often mean bigger square footage, which lowers the per-foot rate.",
    aeoSecondaryQuestion: {
      q: 'Is solid hardwood a safe choice in Poway?',
      a: "Yes, more so than at the coast. Poway's inland climate is drier and more stable, so solid hardwood is less prone to the cupping that affects oceanfront homes. We still acclimate the wood and check slab or crawl-space moisture first, but solid oak and maple are realistic options for most Poway homes.",
    },
    cityIntro: [
      'Zelo Flooring serves all of Poway, the self-described City in the Country, from the Green Valley and Garden Road neighborhoods to the larger lots and horse properties up near Lake Poway and Blue Sky. Homes here range from 1970s ranch houses to newer custom builds, and many sit on bigger footprints than coastal San Diego.',
      "Poway's inland location works in your favor for flooring. The air is drier and more stable than at the coast, which means solid hardwood is a genuine option rather than a risk. We still acclimate every board and check moisture on slab and crawl-space homes, but Poway clients have more freedom to choose real wood throughout the house.",
    ],
    localNuances: [
      "Poway's drier inland climate is friendlier to solid hardwood than coastal San Diego, and with proper acclimation it holds up well.",
      'Larger Poway lots and horse properties often mean 2,000-plus square foot jobs, where per-square-foot pricing drops on bigger orders.',
      'Hillside and custom homes near Lake Poway can have split-level subfloors and transitions that need careful leveling.',
      'Poway sits in a wildfire-aware zone, so we can discuss harder-wearing, easier-to-clean surfaces for homes that take on more dust and ash.',
      'Some 1970s Poway ranch homes have raised foundations with original subfloors that benefit from re-sheeting before new flooring.',
    ],
    whyChooseUsLocal: [
      { title: 'Solid Hardwood Friendly Climate', desc: "Poway's drier inland air makes solid oak and maple realistic. We acclimate and moisture-test, then install real wood where coastal homes could not." },
      { title: 'Built For Larger Homes', desc: 'Many Poway homes and horse properties run big. We quote whole-home jobs efficiently, and per-square-foot pricing improves on larger orders.' },
      { title: 'Split-Level Leveling', desc: 'Hillside and custom Poway homes often have stepped subfloors. We level and detail transitions so multi-level installs flow cleanly.' },
      { title: 'Minutes From Your Home', desc: 'Our office sits about 15 to 20 minutes from Poway, which keeps estimates, install days, and follow-ups easy to schedule.' },
      { title: 'Licensed And Insured', desc: 'CSLB C-15 #1083572, bonded and insured. Every job follows manufacturer spec so warranties stay valid.' },
    ],
    reviews: [
      { name: 'Bill and Susan H.', location: 'Green Valley, Poway', quote: 'We wanted real oak throughout and Zelo made it happen the right way, acclimating the wood for days first. The floors are stunning and dead flat.' },
      { name: 'Karen W.', location: 'Lake Poway area', quote: 'Our split-level home had tricky transitions. Zelo leveled everything and the vinyl plank flows perfectly between levels. Professional from start to finish.' },
      { name: 'Dennis L.', location: 'Garden Road, Poway', quote: 'Big house, fair price, and they finished on schedule. The crew was tidy and the hardwood looks incredible. Easy to recommend.' },
    ],
    faqs: [
      { q: 'How much does flooring cost in Poway?', a: 'Poway installs run about $4 to $15 per square foot installed. Solid and engineered hardwood are $8 to $15, vinyl plank $5 to $10, and tile varies with prep. Larger Poway homes often see a lower per-foot rate on whole-home jobs.' },
      { q: 'Can I install solid hardwood in my Poway home?', a: "Usually yes. Poway's drier inland climate is more stable than the coast, so solid hardwood is less prone to cupping. We acclimate the wood and test moisture on slab or crawl-space homes before installing." },
      { q: 'Do you handle large Poway homes and horse properties?', a: 'Yes. We regularly install 2,000-plus square foot jobs in Poway. Bigger orders typically bring the per-square-foot price down, and we plan staging around larger lots and outbuildings.' },
      { q: 'Can you level split-level and hillside Poway floors?', a: 'Yes. Custom and hillside Poway homes often have stepped subfloors. We grind, patch, and self-level, then detail the transitions so multi-level floors look and feel seamless.' },
      { q: 'Which parts of Poway do you serve?', a: 'We install throughout Poway, including Green Valley, Garden Road, the Lake Poway area, and Blue Sky, covering the 92064 ZIP with free in-home estimates.' },
      { q: 'How quickly can you start a Poway project?', a: 'Our office is about 15 to 20 minutes away, so we can usually get out for an estimate quickly and schedule install soon after material arrives. We confirm timing during the consultation.' },
    ],
    relatedLocations: ['flooring-san-diego', 'flooring-san-marcos', 'flooring-rancho-santa-fe'],
    heroImage: '/img/projects/portfolio/zelo-project-13.webp',
    heroImageAlt: 'Hardwood flooring installed in a Poway home by Zelo Flooring',
  },

  // ---------- DEL MAR ----------
  {
    slug: 'flooring-del-mar',
    city: 'Del Mar',
    state: 'CA',
    type: 'secondary',
    county: 'San Diego County',
    zips: ['92014'],
    neighborhoods: ['Beach Colony', 'Olde Del Mar', 'Del Mar Heights', 'Del Mar Terrace', 'The Village', 'Crest Canyon'],
    landmarks: ['Del Mar Racetrack', 'Del Mar Fairgrounds', 'Powerhouse Park', 'Torrey Pines State Reserve', '15th Street Beach'],
    driveTimeFromHQ: '20-25 min',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Del_Mar,_California',
    metaTitle: 'Flooring in Del Mar, CA',
    metaDescription:
      'Flooring installation in Del Mar, CA. Engineered hardwood, large-format tile, and vinyl plank for beachfront homes. Licensed CSLB #1083572. Free in-home estimate. Call +1 (619) 777-4334.',
    primaryKeyword: 'flooring Del Mar',
    secondaryKeywords: ['flooring installation Del Mar', 'engineered hardwood Del Mar', 'Del Mar flooring contractor', 'tile flooring Del Mar', 'beachfront flooring Del Mar'],
    heroValueProp:
      'Zelo Flooring installs engineered hardwood, luxury vinyl plank, tile, and carpet across Del Mar, from the Beach Colony to Del Mar Heights. Coastal-spec installs, licensed CSLB contractor, free in-home estimate.',
    aeoCostAnswer:
      "Flooring installation in Del Mar typically runs $5 to $18 per square foot installed. Engineered hardwood and wide-plank oak sit at the top, rigid-core vinyl around $6 to $11. Del Mar's beachfront humidity and the high-end finishes common here mean most projects favor engineered wood, large-format tile, and careful moisture prep.",
    aeoSecondaryQuestion: {
      q: 'What flooring works in beachfront Del Mar homes?',
      a: "Engineered hardwood with a thick wear layer, large-format porcelain tile, and rigid-core vinyl are the go-to choices for Del Mar's beachfront and bluff homes. Solid hardwood struggles this close to the ocean. For second homes that sit empty between visits, moisture-stable materials matter even more.",
    },
    cityIntro: [
      'Zelo Flooring installs throughout Del Mar, from the Beach Colony and Olde Del Mar near the racetrack to the homes up in Del Mar Heights. Del Mar is small, high-end, and right on the water, so most of our work here is remodels, second homes, and finish-driven upgrades rather than tract installs.',
      'Few San Diego communities sit closer to the ocean than Del Mar, and that humidity is unforgiving on the wrong floor. Solid hardwood cups, cheap laminate swells, and second homes that sit closed up for weeks trap moisture. We specify engineered hardwood, large-format tile, and rigid-core vinyl here, and we moisture-test before any wood product is ordered.',
    ],
    localNuances: [
      "Del Mar's beachfront and bluff homes see heavy salt-air humidity, so engineered hardwood, tile, and SPC vinyl far outlast solid wood here.",
      'Many Del Mar properties are second homes that sit closed up, which traps humidity and makes moisture-stable flooring important.',
      'Tight Del Mar lots and narrow streets near the village need planned material staging and parking before demolition.',
      'High-end Del Mar remodels often call for wide-plank European oak and large-format tile, which demand a very flat substrate.',
      'Bluff and hillside homes in Del Mar Heights can have stepped foundations that need leveling for plank flooring.',
    ],
    whyChooseUsLocal: [
      { title: 'Beachfront-Grade Materials', desc: 'For Del Mar homes on the sand or the bluff we specify engineered hardwood, large-format tile, and rigid-core vinyl that survive constant salt-air humidity.' },
      { title: 'Flat Substrate For Wide Plank', desc: 'Wide-plank oak and large-format tile show every dip. We grind and self-level so high-end Del Mar finishes lay perfectly flat.' },
      { title: 'Second-Home Moisture Strategy', desc: 'Homes that sit closed up between visits trap humidity. We choose moisture-stable products and prep so your floor survives the off-season.' },
      { title: 'Tight-Lot Logistics', desc: "We plan staging and parking for Del Mar's narrow village streets so demolition and delivery stay clean and on schedule." },
      { title: 'Licensed And Insured', desc: 'CSLB C-15 #1083572, bonded and insured, with samples brought to your Del Mar home.' },
    ],
    reviews: [
      { name: 'Elizabeth C.', location: 'Beach Colony, Del Mar', quote: 'Our beachfront condo is humid year-round. Zelo steered us to engineered oak and large tile, and a year later it still looks brand new. Smart, honest people.' },
      { name: 'Jonathan F.', location: 'Olde Del Mar', quote: 'We did a full remodel with wide-plank floors. Zelo leveled the substrate obsessively and it shows, the floor is dead flat and beautiful.' },
      { name: 'Marissa V.', location: 'Del Mar Heights', quote: 'They handled the tight street access and parking without any drama and finished on time. The LVP throughout looks like real wood. Highly recommend.' },
    ],
    faqs: [
      { q: 'How much does flooring cost in Del Mar?', a: 'Del Mar installs typically run $5 to $18 per square foot installed. Engineered hardwood and wide-plank oak are at the top, rigid-core vinyl around $6 to $11, and large-format tile depends on substrate prep and finish level.' },
      { q: 'What flooring holds up in beachfront Del Mar homes?', a: "Engineered hardwood with a thick wear layer, large-format porcelain tile, and rigid-core vinyl handle Del Mar's salt air best. Solid hardwood tends to cup this close to the water, so we usually steer clients away from it." },
      { q: 'I have a Del Mar second home, does that change the flooring?', a: 'It can. Homes that sit closed up between visits trap humidity, which stresses solid wood and cheap laminate. We recommend moisture-stable engineered wood, tile, or rigid-core vinyl for second homes.' },
      { q: 'Can you install wide-plank and large-format tile in Del Mar?', a: 'Yes. These high-end finishes show every imperfection, so we grind and self-level the substrate first. Flatness is the difference between a clean wide-plank floor and a wavy one.' },
      { q: "How do you handle Del Mar's tight streets and parking?", a: 'We plan material staging, delivery windows, and parking before demolition day so the work stays clean and on schedule even on narrow village streets.' },
      { q: 'Which Del Mar areas do you serve?', a: 'We install across Del Mar including the Beach Colony, Olde Del Mar, and Del Mar Heights in the 92014 ZIP, with free in-home estimates throughout.' },
    ],
    relatedLocations: ['flooring-la-jolla', 'flooring-encinitas', 'flooring-rancho-santa-fe'],
    heroImage: '/img/projects/portfolio/zelo-project-17.webp',
    heroImageAlt: 'Engineered hardwood flooring installed in a Del Mar beachfront home by Zelo Flooring',
  },

  // ---------- VISTA ----------
  {
    slug: 'flooring-vista',
    city: 'Vista',
    state: 'CA',
    type: 'secondary',
    county: 'San Diego County',
    zips: ['92081', '92083', '92084'],
    neighborhoods: ['Shadowridge', 'Downtown Vista', 'Brengle Terrace', 'Vista Village', 'Buena Vista', 'Foothill'],
    landmarks: ['Moonlight Amphitheatre', 'Brengle Terrace Park', 'Antique Gas and Steam Engine Museum', 'The Wave Waterpark', 'Vista Village'],
    driveTimeFromHQ: '35-45 min',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Vista,_California',
    metaTitle: 'Flooring in Vista, CA',
    metaDescription:
      'Flooring installation in Vista, CA. Durable vinyl plank, laminate, hardwood, and tile at fair prices. Licensed CSLB #1083572. Free in-home estimate. Call +1 (619) 777-4334.',
    primaryKeyword: 'flooring Vista',
    secondaryKeywords: ['flooring installation Vista CA', 'vinyl plank flooring Vista', 'Vista flooring contractor', 'laminate flooring Vista', 'affordable flooring Vista'],
    heroValueProp:
      'Zelo Flooring installs luxury vinyl plank, laminate, hardwood, tile, and carpet across Vista, from Shadowridge to the older neighborhoods near downtown. Practical, durable installs, licensed CSLB contractor, free in-home estimate.',
    aeoCostAnswer:
      'Flooring installation in Vista generally runs $3 to $14 per square foot installed. Vista is more value-focused than the coastal cities, so durable luxury vinyl plank ($5 to $9) and laminate ($4 to $7) are popular. Hardwood runs $8 to $14. The inland climate is dry and stable, which gives more flooring options.',
    aeoSecondaryQuestion: {
      q: 'What flooring gives the best value in Vista?',
      a: 'Luxury vinyl plank and quality laminate give Vista homeowners the best balance of looks, durability, and price. Both handle kids, pets, and the warm inland climate well, and rigid-core vinyl is fully waterproof. For a longer-term investment, engineered hardwood is a solid mid-range upgrade.',
    },
    cityIntro: [
      'Zelo Flooring serves all of Vista, from the master-planned Shadowridge neighborhood to the older ranch homes and hillside streets around downtown and Brengle Terrace. Vista is a practical, family-oriented North County city, and a lot of our work here is durable, good-value flooring that stands up to daily life.',
      'Vista sits inland in a warm, dry valley, which is easy on flooring. There is none of the constant coastal humidity that limits wood choices at the beach, so Vista homeowners can pick from the full range. We focus on matching the right durability to the household, whether that is waterproof rigid-core vinyl for a busy family or engineered hardwood for a longer-term upgrade.',
    ],
    localNuances: [
      "Vista's warm, dry inland climate is stable for flooring, so solid hardwood, laminate, and vinyl all perform well here.",
      'Many Vista homes are value-focused, so durable rigid-core vinyl and quality laminate give the best looks-per-dollar.',
      'Older ranch homes near downtown Vista can have raised foundations with original subfloors that need flattening or re-sheeting.',
      'Hillside Vista streets sometimes mean split-level homes with multiple transitions to detail.',
      "Vista's busy family households often want fully waterproof, scratch-resistant surfaces for kids and pets.",
    ],
    whyChooseUsLocal: [
      { title: 'Best Value Per Square Foot', desc: 'Vista shoppers want durable floors that look great without coastal pricing. We steer you to rigid-core vinyl and quality laminate that deliver both.' },
      { title: 'Full Range Of Options', desc: "Vista's dry inland climate is stable, so hardwood, laminate, and vinyl are all on the table. We match the product to your budget and household." },
      { title: 'Kid And Pet Tough', desc: 'For busy Vista families we recommend fully waterproof, scratch-resistant rigid-core vinyl that handles spills, paws, and heavy traffic.' },
      { title: 'Older-Home Subfloor Repair', desc: 'Ranch homes near downtown often have flexing subfloors. We re-sheet and flatten them so the new floor feels solid underfoot.' },
      { title: 'Licensed And Insured', desc: 'CSLB C-15 #1083572, bonded and insured. Honest quotes and manufacturer-spec installs on every job.' },
    ],
    reviews: [
      { name: 'Hector M.', location: 'Shadowridge, Vista', quote: 'We have three kids and a dog. Zelo put in waterproof vinyl plank through the whole house and it has survived everything. Great price and great crew.' },
      { name: 'Angela S.', location: 'Downtown Vista', quote: 'Our older home had a bouncy floor in the living room. Zelo fixed the subfloor and laid laminate that feels totally solid now. Honest and fair.' },
      { name: 'Ray P.', location: 'Brengle Terrace, Vista', quote: 'Got a few bids and Zelo explained the most without upselling. The engineered hardwood looks fantastic and they finished right on schedule.' },
    ],
    faqs: [
      { q: 'How much does flooring cost in Vista?', a: 'Vista installs run about $3 to $14 per square foot installed. Laminate is $4 to $7, rigid-core vinyl $5 to $9, and hardwood $8 to $14. Subfloor repair on older downtown homes can add to the labor.' },
      { q: 'What is the best-value flooring for a Vista family home?', a: 'Rigid-core luxury vinyl plank and quality laminate give the best mix of durability, looks, and price. Rigid-core vinyl is fully waterproof and scratch-resistant, which suits busy households with kids and pets.' },
      { q: 'Can I install hardwood in Vista?', a: "Yes. Vista's warm, dry inland climate is stable and friendly to solid and engineered hardwood. We acclimate the wood and check subfloor moisture, then install the product that fits your budget." },
      { q: 'Do older Vista homes need subfloor repair?', a: 'Sometimes. Older ranch homes near downtown can have raised foundations with subfloors that flex over time. We re-sheet or flatten them so your new flooring sits solid and quiet.' },
      { q: 'Which Vista areas do you serve?', a: 'We install across Vista including Shadowridge, downtown, Brengle Terrace, and the surrounding neighborhoods in the 92081, 92083, and 92084 ZIPs, with free in-home estimates.' },
      { q: 'How long does a Vista flooring job take?', a: 'A typical 1,000 to 1,500 square foot project runs 1 to 3 days for vinyl or laminate, 2 to 4 days for hardwood, and 3 to 5 days for tile, including any subfloor work.' },
    ],
    relatedLocations: ['flooring-san-marcos', 'flooring-oceanside', 'flooring-carlsbad'],
    heroImage: '/img/projects/portfolio/zelo-project-21.webp',
    heroImageAlt: 'Luxury vinyl plank flooring installed in a Vista family home by Zelo Flooring',
  },

  // ---------- RANCHO SANTA FE ----------
  {
    slug: 'flooring-rancho-santa-fe',
    city: 'Rancho Santa Fe',
    state: 'CA',
    type: 'secondary',
    county: 'San Diego County',
    zips: ['92067', '92091'],
    neighborhoods: ['The Covenant', 'Fairbanks Ranch', 'The Bridges', 'Cielo', 'Rancho Santa Fe Farms', 'Del Rayo'],
    landmarks: ['Rancho Santa Fe Golf Club', 'The Inn at Rancho Santa Fe', 'San Dieguito River Park', 'Del Dios Highway'],
    driveTimeFromHQ: '25-35 min',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Rancho_Santa_Fe,_California',
    metaTitle: 'Flooring in Rancho Santa Fe, CA',
    metaDescription:
      'Flooring installation in Rancho Santa Fe, CA. Wide-plank hardwood, natural stone, and engineered wood for estates. Licensed CSLB #1083572. Free in-home consultation. Call +1 (619) 777-4334.',
    primaryKeyword: 'flooring Rancho Santa Fe',
    secondaryKeywords: ['flooring installation Rancho Santa Fe', 'wide-plank hardwood Rancho Santa Fe', 'Rancho Santa Fe flooring contractor', 'estate flooring Rancho Santa Fe', 'European oak Rancho Santa Fe'],
    heroValueProp:
      'Zelo Flooring installs wide-plank hardwood, engineered wood, natural stone, tile, and luxury vinyl across Rancho Santa Fe estates, from the Covenant to Fairbanks Ranch. Estate-grade installs, licensed CSLB contractor, free in-home consultation.',
    aeoCostAnswer:
      'Flooring installation in Rancho Santa Fe typically runs $6 to $20 or more per square foot installed. Estates here favor wide-plank European oak, engineered hardwood, and natural stone, which sit at the high end. Rancho Santa Fe large square footage and custom finishes mean projects are bigger and more detail-driven than a standard tract install.',
    aeoSecondaryQuestion: {
      q: 'What flooring suits Rancho Santa Fe estates?',
      a: 'Wide-plank European oak, engineered hardwood, and natural stone are the standards for Rancho Santa Fe estates. These finishes demand a very flat, properly prepped substrate and careful acclimation. The dry inland climate supports solid and wide-plank wood, though acclimation and moisture testing still come first on every estate job.',
    },
    cityIntro: [
      'Zelo Flooring installs across Rancho Santa Fe, from the original Covenant estates to Fairbanks Ranch, The Bridges, and Cielo. The Ranch is large-lot, custom-home country, and the flooring work here is estate-scale: bigger square footage, higher-end materials, and finish details that have to be right.',
      'Rancho Santa Fe sits inland with a dry, stable climate, which supports the wide-plank oak and solid hardwood that estate clients want. The challenge is rarely the climate and almost always the substrate. Wide-plank and stone show every imperfection, so we spend real time grinding, patching, and self-leveling before a single board or slab goes down.',
    ],
    localNuances: [
      "Rancho Santa Fe's Covenant has an Art Jury and design guidelines, so we work within any documentation and approvals an estate project requires.",
      'Estate homes run large, and jobs are often 3,000-plus square feet, which changes scheduling, staging, and material lead times.',
      'Wide-plank European oak and natural stone demand an exceptionally flat substrate, so we self-level to tight tolerances.',
      'The dry inland climate supports solid and wide-plank hardwood, with full acclimation and moisture testing first.',
      'Long private drives and gated entries mean we coordinate delivery, staging, and crew access in advance.',
    ],
    whyChooseUsLocal: [
      { title: 'Estate-Scale Project Management', desc: 'Rancho Santa Fe jobs run large and detailed. We manage staging, lead times, and crews so a 3,000-plus square foot install stays organized.' },
      { title: 'Wide-Plank And Stone Specialists', desc: 'European oak and natural stone show every dip. We self-level to tight tolerances so estate finishes lay flawlessly flat.' },
      { title: 'Covenant Aware', desc: 'We work within Rancho Santa Fe Covenant guidelines and provide whatever documentation an estate project and its designers require.' },
      { title: 'Climate-Right Wood Options', desc: 'The dry inland air supports solid and wide-plank hardwood. We acclimate fully and moisture-test before installing.' },
      { title: 'Licensed And Insured', desc: 'CSLB C-15 #1083572, bonded and insured, with samples brought to your Rancho Santa Fe estate.' },
    ],
    reviews: [
      { name: 'William and Grace A.', location: 'The Covenant, Rancho Santa Fe', quote: 'We installed wide-plank European oak throughout the main house. Zelo prep work was meticulous and the floor is perfectly flat across a huge footprint. Exceptional.' },
      { name: 'Charles R.', location: 'Fairbanks Ranch', quote: 'A big, complex job handled smoothly. They coordinated with our designer, kept the site clean, and the stone and hardwood combination came out beautifully.' },
      { name: 'Helena M.', location: 'The Bridges, Rancho Santa Fe', quote: 'Detail-obsessed in the best way. Every transition and threshold is perfect. For a home this size, that consistency is impressive.' },
    ],
    faqs: [
      { q: 'How much does flooring cost in Rancho Santa Fe?', a: 'Rancho Santa Fe installs typically run $6 to $20 or more per square foot installed. Wide-plank European oak, engineered hardwood, and natural stone sit at the high end, and estate-scale square footage and custom detailing affect the total.' },
      { q: 'What flooring is right for a Rancho Santa Fe estate?', a: 'Wide-plank European oak, engineered hardwood, and natural stone are the usual choices. They require a very flat substrate and careful acclimation, both of which we handle as part of the install.' },
      { q: 'Do you work within Rancho Santa Fe Covenant guidelines?', a: 'Yes. We work within the Covenant design and approval process and provide documentation as needed, coordinating with your architect or designer on estate projects.' },
      { q: 'Can you handle very large estate installs?', a: 'Yes. We regularly manage 3,000-plus square foot jobs in Rancho Santa Fe, planning staging, material lead times, and crew scheduling so a large install stays organized and on track.' },
      { q: 'Is solid hardwood a good fit in Rancho Santa Fe?', a: 'Generally yes. The dry inland climate is stable and supports solid and wide-plank hardwood. We still acclimate the wood on site and test substrate moisture before installing.' },
      { q: 'Which Rancho Santa Fe areas do you serve?', a: 'We install across Rancho Santa Fe including the Covenant, Fairbanks Ranch, The Bridges, and Cielo in the 92067 and 92091 ZIPs, with free in-home consultations.' },
    ],
    relatedLocations: ['flooring-del-mar', 'flooring-la-jolla', 'flooring-poway'],
    heroImage: '/img/projects/portfolio/zelo-project-25.webp',
    heroImageAlt: 'Wide-plank hardwood flooring installed in a Rancho Santa Fe estate by Zelo Flooring',
  },

  // ---------- CORONADO ----------
  {
    slug: 'flooring-coronado',
    city: 'Coronado',
    state: 'CA',
    type: 'secondary',
    county: 'San Diego County',
    zips: ['92118'],
    neighborhoods: ['The Village', 'Coronado Cays', 'Coronado Shores', 'Country Club', 'near North Island'],
    landmarks: ['Hotel del Coronado', 'Coronado Beach', 'Coronado Bridge', 'Orange Avenue', 'Naval Air Station North Island'],
    driveTimeFromHQ: '25-30 min',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Coronado,_California',
    metaTitle: 'Flooring in Coronado, CA',
    metaDescription:
      'Flooring installation in Coronado, CA. Engineered hardwood, tile, and vinyl plank for historic and oceanfront homes. Licensed CSLB #1083572. Free in-home estimate. Call +1 (619) 777-4334.',
    primaryKeyword: 'flooring Coronado',
    secondaryKeywords: ['flooring installation Coronado', 'engineered hardwood Coronado', 'Coronado flooring contractor', 'tile flooring Coronado', 'vinyl plank Coronado'],
    heroValueProp:
      'Zelo Flooring installs engineered hardwood, luxury vinyl plank, tile, and carpet across Coronado, from the historic homes near Orange Avenue to the Coronado Cays. Salt-air-spec installs, licensed CSLB contractor, free in-home estimate.',
    aeoCostAnswer:
      "Flooring installation in Coronado typically runs $5 to $17 per square foot installed. Engineered hardwood and tile suit the island's salt air and historic homes, while rigid-core vinyl runs $6 to $11. Coronado's older housing stock and intense coastal humidity make moisture testing and material selection especially important here.",
    aeoSecondaryQuestion: {
      q: "What flooring works in Coronado's historic and oceanfront homes?",
      a: "Engineered hardwood, porcelain tile, and rigid-core vinyl handle Coronado's heavy salt air best. Solid hardwood struggles on the island. In historic early-1900s homes, we also match period-appropriate looks where owners want them, and we test older flooring for asbestos before removal.",
    },
    cityIntro: [
      'Zelo Flooring installs throughout Coronado, from the historic Victorians and Craftsman homes near Orange Avenue and the Hotel del to the waterfront properties out in the Coronado Cays. The Crown City has a unique housing mix: century-old homes alongside newer builds, and a large community of military families tied to North Island.',
      'Coronado sits nearly surrounded by water, so salt-air humidity is about as intense as it gets in San Diego County. That rules out solid hardwood for most homes and puts engineered wood, tile, and rigid-core vinyl front and center. Many Coronado homes also predate modern materials, so we test older sheet vinyl and VCT for asbestos before any tear-out begins.',
    ],
    localNuances: [
      'Coronado is nearly surrounded by water, so salt-air humidity is intense and favors engineered hardwood, tile, and SPC vinyl over solid wood.',
      'Many Coronado homes date to the early 1900s, so pre-1985 flooring and adhesives may contain asbestos and are tested before removal.',
      'Historic-district homes near Orange Avenue can have design considerations, so we match period-appropriate looks when owners want them.',
      'Military families near North Island often need fast, durable turnarounds around PCS move timelines, so we schedule accordingly.',
      'Getting to the island via the bridge or ferry means we plan material delivery and staging to avoid peak congestion.',
    ],
    whyChooseUsLocal: [
      { title: 'Salt-Air-Spec Materials', desc: 'Surrounded by water, Coronado is hard on solid wood. We default to engineered hardwood, tile, and rigid-core vinyl that survive the island humidity.' },
      { title: 'Historic-Home Experience', desc: 'For early-1900s Coronado homes we test older flooring for asbestos and can match period-appropriate looks near Orange Avenue.' },
      { title: 'Military Move Timelines', desc: 'North Island families often work against PCS dates. We schedule fast, durable installs that fit tight move-in and move-out windows.' },
      { title: 'Island Logistics Handled', desc: 'We plan delivery and staging around bridge and ferry access so material arrives on time without island congestion delays.' },
      { title: 'Licensed And Insured', desc: 'CSLB C-15 #1083572, bonded and insured. Manufacturer-spec installs keep your warranty valid.' },
    ],
    reviews: [
      { name: 'James W.', location: 'Coronado (near North Island)', quote: 'We were on a tight PCS timeline and Zelo turned the whole house around fast without cutting corners. Durable vinyl plank, clean work, exactly what we needed.' },
      { name: 'Margaret O.', location: 'Orange Avenue area, Coronado', quote: 'Our 1910 home needed care. Zelo tested the old flooring for asbestos first and put in engineered oak that fits the house perfectly. True professionals.' },
      { name: 'Steve and Lisa K.', location: 'Coronado Cays', quote: 'Waterfront humidity wrecked our old floors. Zelo explained why engineered wood and tile were the move, and it has held up beautifully. Highly recommend.' },
    ],
    faqs: [
      { q: 'How much does flooring cost in Coronado?', a: 'Coronado installs typically run $5 to $17 per square foot installed. Engineered hardwood and tile are at the upper end, rigid-core vinyl around $6 to $11. Asbestos testing and abatement on older homes can add to the project.' },
      { q: "What flooring survives Coronado's salt air?", a: "Engineered hardwood, porcelain tile, and rigid-core SPC vinyl handle the island's intense humidity best. Solid hardwood tends to cup and gap surrounded by water, so we usually recommend against it in Coronado." },
      { q: 'My Coronado home is old, could the flooring contain asbestos?', a: 'Possibly. Pre-1985 sheet vinyl, VCT, and cutback adhesive can contain asbestos. We test before tear-out and coordinate licensed abatement when needed, so removal is done safely.' },
      { q: 'Can you work around a military PCS timeline?', a: 'Yes. We install for many North Island families and understand move deadlines. We schedule fast, durable installs that fit tight move-in or move-out windows.' },
      { q: 'How do you handle getting materials onto the island?', a: 'We plan delivery and staging around bridge and ferry access and traffic, so material arrives on schedule and demolition and install stay on track.' },
      { q: 'Which Coronado areas do you serve?', a: 'We install across Coronado including the historic district near Orange Avenue, the area near North Island, and the Coronado Cays in the 92118 ZIP, with free in-home estimates.' },
    ],
    relatedLocations: ['flooring-san-diego', 'flooring-la-jolla', 'flooring-del-mar'],
    heroImage: '/img/projects/portfolio/zelo-project-29.webp',
    heroImageAlt: 'Engineered hardwood flooring installed in a historic Coronado home by Zelo Flooring',
  },

  // ---------- SAN MARCOS ----------
  {
    slug: 'flooring-san-marcos',
    city: 'San Marcos',
    state: 'CA',
    type: 'secondary',
    county: 'San Diego County',
    zips: ['92069', '92078'],
    neighborhoods: ['San Elijo Hills', 'Twin Oaks Valley', 'Lake San Marcos', 'Rancho Coronado', 'Discovery Hills', 'Santa Fe Hills'],
    landmarks: ['Cal State San Marcos', 'Palomar College', 'Lake San Marcos', 'Discovery Lake', 'Double Peak Park'],
    driveTimeFromHQ: '35-45 min',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/San_Marcos,_California',
    metaTitle: 'Flooring in San Marcos, CA',
    metaDescription:
      'Flooring installation in San Marcos, CA. Vinyl plank, laminate, hardwood, and tile for hillside and master-planned homes. Licensed CSLB #1083572. Free in-home estimate. Call +1 (619) 777-4334.',
    primaryKeyword: 'flooring San Marcos',
    secondaryKeywords: ['flooring installation San Marcos', 'vinyl plank flooring San Marcos', 'San Marcos flooring contractor', 'hardwood flooring San Marcos', 'LVP San Marcos'],
    heroValueProp:
      'Zelo Flooring installs luxury vinyl plank, laminate, hardwood, tile, and carpet across San Marcos, from San Elijo Hills to the Lake San Marcos area. Slab-spec installs, licensed CSLB contractor, free in-home estimate.',
    aeoCostAnswer:
      'Flooring installation in San Marcos generally runs $4 to $14 per square foot installed. Many San Marcos homes are newer slab-on-grade builds in San Elijo Hills and Twin Oaks, where rigid-core vinyl ($5 to $10) and engineered hardwood are the practical picks. Slab moisture testing comes before any wood or laminate install.',
    aeoSecondaryQuestion: {
      q: "What flooring fits San Marcos's newer hillside homes?",
      a: 'Newer San Marcos homes in San Elijo Hills and Twin Oaks Valley sit on concrete slabs, often on graded hillside lots. Rigid-core luxury vinyl plank and engineered hardwood handle slab moisture better than solid wood. For rooms with grade transitions, we level the substrate so the finished floor stays flat.',
    },
    cityIntro: [
      'Zelo Flooring serves all of San Marcos, from the master-planned hillside neighborhoods of San Elijo Hills and Twin Oaks Valley to the homes around Lake San Marcos and the older areas near the colleges. With Cal State San Marcos and Palomar nearby, the city also has a steady mix of rentals alongside family homes.',
      'Most San Marcos homes are newer and sit on concrete slab, frequently on graded hillside lots. That means two things drive our work here: slab moisture testing before any wood or laminate, and substrate leveling where hillside grading left transitions. We match durable, slab-friendly products to each home rather than guessing.',
    ],
    localNuances: [
      'San Elijo Hills, Twin Oaks, and most newer San Marcos tracts are slab-on-grade, so moisture testing comes first on wood and laminate jobs.',
      'Hillside grading in San Marcos can leave grade transitions between rooms, so we level the substrate for a flat finished floor.',
      'Rental properties near Cal State San Marcos and Palomar benefit from durable, easy-to-replace rigid-core vinyl.',
      'Master-planned San Marcos HOAs may set construction-hour windows and approvals, which we schedule around.',
      'Two-story San Marcos homes often want acoustic underlayment upstairs to cut foot-traffic noise.',
    ],
    whyChooseUsLocal: [
      { title: 'Slab Moisture Testing First', desc: 'Newer San Marcos homes are slab-on-grade. We test slab moisture before ordering so your wood or laminate floor does not buckle later.' },
      { title: 'Hillside Substrate Leveling', desc: 'Graded San Elijo Hills and Twin Oaks lots can leave grade transitions. We level the substrate so the finished floor lays flat room to room.' },
      { title: 'Durable Rental-Ready Options', desc: 'For homes near the colleges we recommend tough, easy-to-replace rigid-core vinyl that stands up to tenant turnover.' },
      { title: 'HOA-Compliant Scheduling', desc: 'We work within master-planned San Marcos HOA construction hours and approvals so your project stays in good standing.' },
      { title: 'Licensed And Insured', desc: 'CSLB C-15 #1083572, bonded and insured, with samples brought to your San Marcos home.' },
    ],
    reviews: [
      { name: 'Daniel and Mei L.', location: 'San Elijo Hills, San Marcos', quote: 'Zelo moisture-tested our slab before quoting, which gave us confidence. The rigid-core vinyl downstairs looks great and has held up with two young kids.' },
      { name: 'Brittany H.', location: 'Twin Oaks Valley, San Marcos', quote: 'Our hillside home had uneven transitions between rooms. They leveled it and the floor is perfectly flat now. Professional and on time.' },
      { name: 'Omar S.', location: 'near Cal State San Marcos', quote: 'I own a rental near campus and needed durable, good-looking flooring. Zelo recommended vinyl plank that handles tenants well. Fair price, quick turnaround.' },
    ],
    faqs: [
      { q: 'How much does flooring cost in San Marcos?', a: 'San Marcos installs run about $4 to $14 per square foot installed. Rigid-core vinyl is $5 to $10, laminate $4 to $7, and hardwood $8 to $14. Slab moisture testing and hillside substrate leveling can affect the labor.' },
      { q: 'Why test the slab in newer San Marcos homes?', a: 'Most San Marcos homes are slab-on-grade, and concrete releases moisture vapor. Installing wood or laminate without testing risks cupping and buckling. We run a moisture test and add a vapor barrier if readings call for one.' },
      { q: 'Can you level hillside floors in San Elijo Hills?', a: 'Yes. Graded hillside lots can leave grade transitions between rooms. We grind, patch, and self-level the substrate so your finished floor lays flat with clean thresholds.' },
      { q: 'What flooring is best for a San Marcos rental near the colleges?', a: 'Durable rigid-core luxury vinyl plank is ideal for rentals. It resists scratches and water, looks like wood, and is straightforward to repair or replace between tenants.' },
      { q: 'Do you follow San Marcos HOA rules?', a: 'Yes. Master-planned San Marcos communities often set construction-hour windows and approvals. We schedule around them and provide documentation your HOA needs before starting.' },
      { q: 'Which San Marcos areas do you serve?', a: 'We install across San Marcos including San Elijo Hills, Twin Oaks Valley, the Lake San Marcos area, and neighborhoods near the colleges, covering the 92069 and 92078 ZIPs with free in-home estimates.' },
    ],
    relatedLocations: ['flooring-vista', 'flooring-carlsbad', 'flooring-oceanside'],
    heroImage: '/img/projects/portfolio/zelo-project-33.webp',
    heroImageAlt: 'Luxury vinyl plank flooring installed in a San Marcos hillside home by Zelo Flooring',
  },

  // ---------- OCEANSIDE ----------
  {
    slug: 'flooring-oceanside',
    city: 'Oceanside',
    state: 'CA',
    type: 'secondary',
    county: 'San Diego County',
    zips: ['92054', '92056', '92057', '92058'],
    neighborhoods: ['The Strand', 'Fire Mountain', 'Downtown Oceanside', 'Rancho del Oro', 'Ocean Hills', 'Jeffries Ranch'],
    landmarks: ['Oceanside Pier', 'Oceanside Harbor', 'Mission San Luis Rey', 'Camp Pendleton', 'The Strand'],
    driveTimeFromHQ: '40-50 min',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Oceanside,_California',
    metaTitle: 'Flooring in Oceanside, CA',
    metaDescription:
      'Flooring installation in Oceanside, CA. Durable vinyl plank, engineered hardwood, and tile for beach and military homes. Licensed CSLB #1083572. Free in-home estimate. Call +1 (619) 777-4334.',
    primaryKeyword: 'flooring Oceanside',
    secondaryKeywords: ['flooring installation Oceanside', 'vinyl plank flooring Oceanside', 'Oceanside flooring contractor', 'engineered hardwood Oceanside', 'military housing flooring Oceanside'],
    heroValueProp:
      'Zelo Flooring installs luxury vinyl plank, engineered hardwood, tile, and carpet across Oceanside, from the beachside Strand to inland Rancho del Oro. Coastal and slab-spec installs, licensed CSLB contractor, free in-home estimate.',
    aeoCostAnswer:
      'Flooring installation in Oceanside generally runs $4 to $15 per square foot installed. Rigid-core vinyl plank ($5 to $10) is the most popular choice for beach homes and military rentals, while engineered hardwood runs $8 to $15. Coastal homes near the pier need moisture-resistant materials, and inland tracts need slab moisture testing.',
    aeoSecondaryQuestion: {
      q: 'What flooring works best for Oceanside beach and military homes?',
      a: 'Rigid-core luxury vinyl plank is the workhorse for Oceanside beach cottages, military rentals, and busy family homes. It resists sand, moisture, and heavy traffic, and it installs fast. Near the coast we steer away from solid hardwood; inland in Rancho del Oro and Fire Mountain, engineered wood is a solid upgrade.',
    },
    cityIntro: [
      'Zelo Flooring installs throughout Oceanside, the largest coastal city in North County, covering the beach cottages along the Strand, the historic homes around Fire Mountain, and the newer inland tracts in Rancho del Oro. With Camp Pendleton right next door, Oceanside also has a large military community that often needs flooring on a deadline.',
      'Oceanside spans both worlds: salt-air coast near the pier and harbor, and drier inland neighborhoods a few miles east. Near the water we lean on rigid-core vinyl and engineered wood that shrug off humidity and sand. Inland, where many homes sit on slab, we moisture-test first. Either way, we keep installs efficient for the military families working against move timelines.',
    ],
    localNuances: [
      'Beachside Oceanside homes near the Strand and harbor get salt air and sand, so rigid-core vinyl and engineered wood outlast solid hardwood here.',
      'Inland Oceanside tracts in Rancho del Oro and Ocean Hills are often slab-on-grade, so moisture testing comes first on wood and laminate.',
      'Camp Pendleton military families frequently work against PCS deadlines, so we schedule fast, durable turnarounds.',
      'Beach rentals and busy households do best with high-wear-layer waterproof vinyl that handles sand and traffic.',
      'Older Fire Mountain and downtown Oceanside homes can have raised foundations and original subfloors that need flattening.',
    ],
    whyChooseUsLocal: [
      { title: 'Coastal And Inland Coverage', desc: 'From the Strand to Rancho del Oro, we adjust product and prep to whether your Oceanside home faces salt air or sits on an inland slab.' },
      { title: 'Military Move Timelines', desc: 'Camp Pendleton families often work against PCS dates. We schedule fast, durable installs that fit tight move-in and move-out windows.' },
      { title: 'Beach-Tough Vinyl', desc: 'For Strand cottages and rentals we recommend high-wear-layer waterproof vinyl plank that handles sand, moisture, and heavy foot traffic.' },
      { title: 'Slab Testing Inland', desc: 'Inland Oceanside tracts are mostly slab-on-grade. We moisture-test before installing wood or laminate so floors do not buckle later.' },
      { title: 'Licensed And Insured', desc: 'CSLB C-15 #1083572, bonded and insured. Manufacturer-spec installs keep your warranty valid.' },
    ],
    reviews: [
      { name: 'Marcus T.', location: 'Oceanside (near Camp Pendleton)', quote: 'PCS timeline was tight and Zelo made it work. Durable vinyl plank through the whole place, clean install, finished before our move-in. Could not ask for more.' },
      { name: 'Nicole D.', location: 'The Strand, Oceanside', quote: 'Sand was destroying our old floor. Zelo put in waterproof vinyl plank that wipes clean and still looks new after a summer of beach days. Great crew.' },
      { name: 'Frank R.', location: 'Rancho del Oro, Oceanside', quote: 'They tested our slab moisture before quoting, which other companies skipped. The engineered hardwood looks fantastic and the whole job was on schedule.' },
    ],
    faqs: [
      { q: 'How much does flooring cost in Oceanside?', a: 'Oceanside installs run about $4 to $15 per square foot installed. Rigid-core vinyl is $5 to $10, engineered hardwood $8 to $15, and tile varies with prep. Coastal moisture work and inland slab testing affect the labor.' },
      { q: 'What flooring is best for an Oceanside beach home?', a: 'High-wear-layer rigid-core vinyl plank is the top choice near the coast. It resists sand, moisture, and heavy traffic and does not cup the way solid hardwood can near the water. Engineered wood is a good real-wood alternative.' },
      { q: 'Can you work around a Camp Pendleton PCS timeline?', a: 'Yes. We install for many military families and understand move deadlines. We schedule fast, durable installs that fit tight move-in or move-out windows.' },
      { q: 'Do inland Oceanside homes need slab moisture testing?', a: 'Yes. Tracts in Rancho del Oro and Ocean Hills are typically slab-on-grade. We test slab moisture before installing wood or laminate and add a vapor barrier when readings call for one.' },
      { q: 'Do older Oceanside homes need subfloor work?', a: 'Sometimes. Older Fire Mountain and downtown homes can have raised foundations with subfloors that flex. We flatten or re-sheet them so the new floor sits solid and quiet.' },
      { q: 'Which Oceanside areas do you serve?', a: 'We install across Oceanside including the Strand, Fire Mountain, downtown, Rancho del Oro, and Ocean Hills, covering the 92054, 92056, 92057, and 92058 ZIPs with free in-home estimates.' },
    ],
    relatedLocations: ['flooring-carlsbad', 'flooring-vista', 'flooring-san-marcos'],
    heroImage: '/img/projects/portfolio/zelo-project-37.webp',
    heroImageAlt: 'Luxury vinyl plank flooring installed in an Oceanside beach home by Zelo Flooring',
  },
];

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);

export const MAIN_LOCATION = LOCATIONS.find((l) => l.type === 'main')!;

export function isLocationSlug(slug: string): boolean {
  return LOCATIONS.some((l) => l.slug === slug);
}
