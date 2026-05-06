// Per-service AEO answers + GEO local nuances for the
// /[service]-flooring-san-diego combo location pages.
// One block per service, indexed by service slug.

export type ServiceLocalData = {
  // 40-60 word direct answer to a top cost/duration question
  aeoCostAnswer: string;
  // Secondary AEO question
  aeoSecondaryQuestion: { q: string; a: string };
  // 3-5 service-specific San Diego nuances (slab, coastal humidity, asbestos, HOA)
  localNuances: string[];
  // 1-2 paragraphs setting the SD context for this service
  cityContext: string[];
  // 2 paragraphs for the trust + map section, unique per service (no templated repetition)
  localTrustParagraphs: string[];
  // All major section headers, written uniquely per service so no two pages share the same template H2/H3
  headers: {
    cityContextH2: string;
    considerationsH3: string;
    subServicesH2: string;
    trustH3: string;
    reviewsH2: string;
    faqH2: string;
    finalCtaH3: string;
  };
};

export const SERVICE_LOCAL_DATA: Record<string, ServiceLocalData> = {
  'carpet-flooring-san-diego': {
    aeoCostAnswer:
      'Carpet installation in San Diego typically takes a single day for a 1,500 sq ft home with hallways and stairs, or a few hours for one bedroom. We power-stretch every residential install, include 8 lb premium rebond pad, and remove old carpet, pad, and tack strip as part of every quote.',
    aeoSecondaryQuestion: {
      q: 'What carpet works best for San Diego homes with pets and kids?',
      a: 'Triexta (Mohawk SmartStrand) and stain-treated nylon (Stainmaster, Shaw R2X) are the most pet- and kid-friendly carpets we install in San Diego. Triexta resists pet stains permanently because the stain blocker is part of the fiber. Nylon resists wear in high-traffic rooms. Polyester is fine for guest rooms but wears faster in main-traffic zones.',
    },
    localNuances: [
      'Coastal-area homes near Pacific Beach, La Jolla, and Coronado benefit from moisture-barrier pad upgrades on slab to prevent vapor migration.',
      'Power stretching is required by every major carpet manufacturer; cheap installs that knee-kick only develop ripples within 1-2 years and void the warranty.',
      'Pre-1985 carpet pad in older San Diego homes (Bankers Hill, Mission Hills, North Park) may have glue residue that needs scraping before new pad goes down.',
      'HOA-governed condos in downtown San Diego, Mission Valley, and Coronado Shores often require sound-attenuation pad with documented IIC 50+ rating.',
    ],
    cityContext: [
      'Carpet is still the most comfortable floor for San Diego bedrooms, family rooms, and stairways. We install it across the entire San Diego County footprint, from coastal homes in La Jolla to inland homes in Poway and Escondido. Coastal humidity changes which pad works best; inland dryness changes how the carpet wears.',
      'Every Zelo Flooring carpet install starts with a free in-home estimate where we bring physical samples to your San Diego home so you see colors in your real lighting before you commit. We power-stretch on every residential install and never use the knee-kick-only shortcut that voids manufacturer warranties.',
    ],
    localTrustParagraphs: [
      'Zelo Flooring is a CSLB-licensed carpet contractor in San Diego, running every job out of our Mira Mesa office. Most San Diego carpet installation consultations are scheduled within 2 to 4 business days, with samples brought to your home so you can see fiber, pile depth, and color in real lighting before committing. Power stretching, premium 8 lb pad, and old carpet removal are included on every residential quote, never quoted as add-ons.',
      'Carpet warranties on the brands we install (Mohawk SmartStrand, Stainmaster, Shaw R2X) require manufacturer-spec installation procedures, which is why our carpet installers in San Diego follow each spec sheet to the letter. CSLB Lic #1083572. Bonded and insured for residential, rental, and property-management work. Reach the office Monday through Sunday, 8am to 5pm.',
    ],
    headers: {
      cityContextH2: 'Carpet Installation For San Diego Homes',
      considerationsH3: 'Before You Carpet A San Diego Home',
      subServicesH2: 'Carpet Styles We Install',
      trustH3: 'Trusted Carpet Contractors In San Diego, CA',
      reviewsH2: 'What San Diego Customers Say About Their Carpet',
      faqH2: 'San Diego Carpet FAQs Answered',
      finalCtaH3: 'Get A Free Carpet Installation Quote',
    },
  },

  'vinyl-flooring-san-diego': {
    aeoCostAnswer:
      'Luxury vinyl plank installs in San Diego typically take 2-3 days for a 1,000-1,500 sq ft home: half a day for slab prep, one to two days for install. Every job starts with a 10-foot straight-edge flatness check and calcium chloride or RH probe moisture testing. Slab grinding adds half a day to a full day if the floor is out of tolerance.',
    aeoSecondaryQuestion: {
      q: 'Why does San Diego LVP need slab moisture testing if vinyl is waterproof?',
      a: 'The plank itself is waterproof, but the adhesive (for glue-down) and the underlayment (for click-lock) are not. High slab moisture pushes vapor through these layers, lifts the plank over time, and voids the manufacturer warranty. We test every slab before any LVP goes down across San Diego County.',
    },
    localNuances: [
      'Manufacturer flatness spec for SPC vinyl is 3/16 inch over 10 feet; many older San Diego slabs are out of tolerance and need grinding or self-leveling compound.',
      'Coastal homes within 5 miles of the ocean see thermal expansion that makes manufacturer-spec expansion-gap planning more important than for inland homes.',
      'Pre-1985 vinyl flooring in older San Diego homes may have asbestos-containing cutback adhesive; we test before tear-out and coordinate licensed abatement where required.',
      'HOA condos in downtown San Diego and Mission Valley typically require sound-attenuation underlayment with documented IIC 50+ rating; we provide spec sheets.',
      'Pet-rated SPC with a 20-mil wear layer outperforms standard 12-mil wear layer in San Diego homes with dogs that have access to outdoor sand and dirt.',
    ],
    cityContext: [
      'Luxury vinyl plank is the most popular flooring we install in San Diego, by a wide margin. Rigid-core SPC handles San Diego coastal humidity, slab climate, and pets without complaint. Click-lock floats over a flat slab; full-spread glue-down is the right call for very high-traffic commercial and rental scopes.',
      'Every install starts with proper substrate prep. We bring a 10-foot straight edge to every consultation, run calcium chloride or RH probe moisture tests, and quote slab grinding line-item separately so there are no surprises when the install starts. We install across San Diego County, from coastal Pacific Beach to inland Escondido.',
    ],
    localTrustParagraphs: [
      'As a CSLB-licensed luxury vinyl plank flooring contractor in San Diego, Zelo Flooring covers homes from coastal Pacific Beach and Mission Bay to inland Bressi Ranch, Poway, and Escondido. Slab moisture testing with calcium chloride or RH probe, flatness verification with a 10-foot straight edge, and brand-spec underlayment are part of every quote, not surprise add-ons after the install starts. Vinyl plank flooring San Diego consultations are typically scheduled within 3 business days from our Mira Mesa office.',
      'We install rigid-core SPC and WPC from Shaw, Mohawk, COREtec, and Mannington. Manufacturer warranties on these lines require the prep steps we already include. CSLB Lic #1083572. Bonded and insured for residential and commercial vinyl flooring installation across San Diego County. Office hours Monday through Sunday, 8am to 5pm.',
    ],
    headers: {
      cityContextH2: 'LVP Flooring Across San Diego County',
      considerationsH3: 'Slab, Climate, And LVP Choices In San Diego',
      subServicesH2: 'Luxury Vinyl Options We Carry',
      trustH3: 'Local Vinyl Plank Installers In San Diego',
      reviewsH2: 'Vinyl Plank Stories From San Diego Customers',
      faqH2: 'Common Vinyl Plank Questions From San Diego Homeowners',
      finalCtaH3: 'Request A Free LVP Quote',
    },
  },

  'hardwood-flooring-san-diego': {
    aeoCostAnswer:
      'Hardwood installation in San Diego runs as a 1-2 week project: 5 to 7 days of acclimation in the install room, 2 to 3 days for the install itself, plus a day for trim and transitions. Engineered hardwood is our default for most San Diego homes; coastal humidity from the ocean makes solid wood riskier in homes within 5 miles of the coast.',
    aeoSecondaryQuestion: {
      q: 'Should I install solid or engineered hardwood in San Diego?',
      a: 'Engineered hardwood with a 3 to 4 mm wear layer is our default for most San Diego homes. The cross-ply core stays stable across coastal humidity swings, especially near La Jolla, Pacific Beach, and Coronado. Solid hardwood is viable inland in Poway, Escondido, or in older homes with raised plywood subfloors.',
    },
    localNuances: [
      'Coastal homes within 5 miles of the ocean see 70-80% year-round humidity that favors engineered hardwood (3-4 mm wear layer) over solid wood.',
      'NWFA-recommended acclimation is a minimum of 5-7 days in the install room before opening boxes; we do not skip this step regardless of project pressure.',
      'Slab homes (most San Diego construction since the 1980s) need calcium chloride or RH probe testing; raised-foundation homes (older Coronado Village, Mission Hills, parts of La Jolla) need pin-meter readings on plywood.',
      'Pre-1985 stained finishes may contain lead paint in some San Diego historic-district homes; we follow EPA RRP-certified procedures for any sanding or refinishing on these.',
      'Historic-district homes in Bankers Hill, Mission Hills, and parts of La Jolla may require Architectural Review for visible exterior threshold or transition changes.',
    ],
    cityContext: [
      'Hardwood is the floor that earns its keep over decades of San Diego use. Done right with proper moisture testing and acclimation, it can be sanded and refinished three or four times across its life and adds real resale value to a San Diego home. Done wrong, it cups by the second summer, especially in coastal humidity.',
      'We follow NWFA installation standards on every San Diego hardwood project: documented moisture testing, 5-7 day acclimation, manufacturer-spec fastener pattern, and proper expansion gaps. Engineered hardwood is our default for most homes; solid is reserved for inland projects and raised-foundation homes where it makes sense.',
    ],
    localTrustParagraphs: [
      'Zelo Flooring is one of the few hardwood flooring contractors in San Diego that document NWFA-aligned moisture testing and 5-7 day acclimation on every job. Engineered hardwood projects are typically scheduled 4 to 7 business days out from our Mira Mesa office; solid hardwood and hardwood floor refinishing in San Diego run longer because of the in-room acclimation we will not skip. Festool or Bona dust-contained sanders on every refinish, so the household can stay in the home through the project.',
      'CSLB Lic #1083572. Licensed, bonded, and insured for residential hardwood flooring San Diego work, including historic-district homes that require Architectural Review for visible threshold or transition changes. Office hours Monday through Sunday, 8am to 5pm.',
    ],
    headers: {
      cityContextH2: 'Hardwood Flooring Across San Diego, CA',
      considerationsH3: 'What Coastal Humidity Means For San Diego Hardwood',
      subServicesH2: 'Hardwood Services We Offer',
      trustH3: 'NWFA-Aligned Hardwood Contractors In San Diego',
      reviewsH2: 'Hardwood Stories From Recent San Diego Projects',
      faqH2: 'Hardwood Flooring Questions From San Diego Homeowners',
      finalCtaH3: 'Book Your Hardwood Consultation',
    },
  },

  'laminate-flooring-san-diego': {
    aeoCostAnswer:
      'Laminate flooring installs in San Diego run 1-2 days for a typical 1,000 sq ft home including subfloor prep. We install AC4 and AC5 commercial-rated lines from Pergo, Mohawk RevWood, Quick-Step, and Shaw Repel. Vapor-barrier underlayment is standard on every slab; sound-attenuation pad on upper floors and HOA condos.',
    aeoSecondaryQuestion: {
      q: 'Is laminate or LVP better for a San Diego home?',
      a: 'Different floors. Laminate has a harder, firmer feel and a more authentic embossed wood texture. LVP is softer, warmer, and 100% waterproof core. We recommend laminate for whole-home installs in dry rooms (bedrooms, living rooms, hallways) and AC4+ commercial-rated laminate for rentals; LVP for kitchens, baths, and homes with pets.',
    },
    localNuances: [
      'Coastal-area homes within 5 miles of the ocean have higher humidity that can stress laminate joints; we prefer waterproof laminate (Pergo Outlast+, Mohawk RevWood Plus, Shaw Repel) for these.',
      'Vapor-barrier underlayment is mandatory on every San Diego slab install; it is included in our standard quote, not an add-on.',
      'Pre-1985 vinyl flooring needs an asbestos test before laminate floats over it; our quote line-items the abatement coordination if required.',
      'HOA-governed condos may require sound-attenuation underlayment with documented STC and IIC 50+ ratings.',
      'We do not recommend laminate in full bathrooms; even waterproof versions have joints that fail under prolonged shower humidity. LVP or tile is the right call there.',
    ],
    cityContext: [
      'Laminate has come a long way. Today\'s high-AC-rated laminate from Pergo, Mohawk RevWood, and Shaw Repel is dent-resistant, water-resistant, and visually almost identical to engineered hardwood at a fraction of the cost. It is the smart-budget option for San Diego whole-home installs, rental properties, and high-traffic family homes.',
      'We install across San Diego County with proper vapor-barrier underlayment on slab, sound-attenuation pad on upper floors, and manufacturer-spec expansion gaps. The boring details, done right, decide whether your laminate floor lasts 5 years or 25.',
    ],
    localTrustParagraphs: [
      'Most laminate flooring San Diego jobs we book are whole-home or whole-floor installs, scheduled within 2 to 4 business days from our Mira Mesa office. Vapor-barrier underlayment, slab moisture testing, and manufacturer-spec expansion gaps are line-itemed on every laminate flooring installation San Diego quote. We carry AC4 and AC5 commercial-rated lines for rental and high-traffic projects.',
      'Licensed by the CSLB (Lic #1083572), bonded, and insured for residential and rental property work. As a laminate flooring contractor in San Diego, we follow each manufacturer\'s installation spec so Pergo, Mohawk RevWood, Quick-Step, and Shaw Repel warranties stay valid. Reach the office Monday through Sunday, 8am to 5pm.',
    ],
    headers: {
      cityContextH2: 'Laminate Flooring Across San Diego County',
      considerationsH3: 'When Laminate Is The Right Call In San Diego',
      subServicesH2: 'Laminate Lines We Install',
      trustH3: 'Experienced Laminate Pros Serving San Diego',
      reviewsH2: 'What San Diego Homeowners Say About Their Laminate',
      faqH2: 'Laminate Flooring Questions Answered For San Diego',
      finalCtaH3: 'Schedule A Laminate Walkthrough',
    },
  },

  'tile-flooring-san-diego': {
    aeoCostAnswer:
      'Tile installs in San Diego run 2-3 days for a typical bathroom floor including substrate prep and grout cure, 5-8 days for a full bathroom remodel with shower waterproofing, and 2-3 days for a kitchen floor over a flat slab. Backsplashes are typically a 1-day install. Substrate prep, cement backer board, and waterproofing membrane are line-item separately.',
    aeoSecondaryQuestion: {
      q: 'What waterproofing do you use for San Diego shower tile?',
      a: 'Schluter Kerdi sheet membrane or RedGard liquid membrane depending on the build. Pre-formed Kerdi pans for curbless showers. Pan slope is checked with a level before tile goes down. Both systems are ANSI A118.10 compliant and exceed San Diego County health code for residential bathroom waterproofing.',
    },
    localNuances: [
      'TCNA flatness spec for large-format tile is 1/8 inch over 10 feet; many older San Diego slabs need grinding or self-leveling compound to meet it.',
      'Shower waterproofing is the single most important step; we use Schluter Kerdi sheet or RedGard liquid, never plastic sheeting alone, regardless of the price quote.',
      'Outdoor patio tile in San Diego coastal climates needs frost-rated porcelain (V0 absorption rating) due to thermal expansion at homes within 5 miles of the ocean.',
      'Crack isolation membrane (Schluter Ditra) is standard on slabs with known cracks; common in older Coronado Village, La Jolla Shores, and historic North Park homes.',
      'San Diego does not require a city permit for like-for-like residential tile replacement; full bathroom remodels with plumbing changes do.',
    ],
    cityContext: [
      'Tile is still the right call for San Diego wet zones, bathrooms, mudrooms, kitchen backsplashes, and outdoor patios. Modern through-body porcelain in 6x36 wood-look plank or 24x24 large-format reads as hardwood or stone but takes water, sand, and pets like tile. Natural stone is viable in inland San Diego homes where humidity is lower.',
      'Every Zelo Flooring tile install starts with proper substrate prep, cement backer board (never greenboard), Schluter Kerdi or RedGard waterproofing where it matters, and crack isolation membrane on any slab with known cracks. We dry-lay every pattern before adhesive goes down so you approve the layout at your San Diego home before it is committed.',
    ],
    localTrustParagraphs: [
      'As a San Diego tile flooring contractor, our crew handles bathroom remodels, kitchen floors, backsplashes, curbless walk-in showers, and outdoor patios across the county. Substrate prep, ANSI A118.10-compliant waterproofing in wet zones, and Schluter Ditra crack-isolation membrane on slabs with known cracks are documented before any tile is set. San Diego tile flooring consultations are typically scheduled within 3 to 5 business days from our Mira Mesa office.',
      'CSLB Lic #1083572. Bonded and insured. Travertine, porcelain, ceramic, and natural stone tile flooring in San Diego, all installed to TCNA spec. Full bathroom remodels with plumbing changes may require a city permit, which we coordinate as part of the project. Reach the office by phone or email Monday through Sunday, 8am to 5pm.',
    ],
    headers: {
      cityContextH2: 'Tile Flooring Across San Diego, CA',
      considerationsH3: 'Substrate, Slope, And Slab Prep For San Diego Tile',
      subServicesH2: 'Tile Work We Take On',
      trustH3: 'Professional Tile Setters Across San Diego County',
      reviewsH2: 'San Diego Tile Project Reviews',
      faqH2: 'Tile Flooring FAQs From San Diego Homeowners',
      finalCtaH3: 'Get An Estimate For Your Tile Project',
    },
  },

  'cork-flooring-san-diego': {
    aeoCostAnswer:
      'Cork installs in San Diego run 2-3 days for a 500-1,000 sq ft kitchen including 72-hour acclimation. Floating click-lock cork plank goes faster than glue-down cork tile. We install Wicanders, APC, and Globus product lines, all FSC-certified Portuguese cork. Slab moisture sealing and vapor barrier are mandatory on every glue-down install.',
    aeoSecondaryQuestion: {
      q: 'Where does cork flooring work in a San Diego home?',
      a: 'Cork is best in San Diego kitchens, home offices, music rooms, and play areas where comfort underfoot matters. Glue-down cork tile in kitchens with sealed perimeter handles splashes well. We do not recommend cork in full bathrooms or in south-facing rooms with all-day sun exposure due to UV-related color shift over time.',
    },
    localNuances: [
      'Cork is hygroscopic; slab moisture testing and vapor barrier are mandatory on every San Diego glue-down install regardless of slab age.',
      'South-facing rooms in San Diego receive direct sun much of the year; UV-cured pre-finished cork resists fade and color shift much better than older site-finished cork.',
      'Cork is sound-attenuating; widely accepted in San Diego HOA condos as compliant underlayment for upper-floor units that need IIC 50+ documentation.',
      'Pre-1985 vinyl in older San Diego homes (Bankers Hill, North Park, Mission Hills) must be asbestos-tested before cork is glued down over it.',
      'Glue-down cork in kitchens needs silicone caulk along the dishwasher, sink, and refrigerator perimeter to handle splashes.',
    ],
    cityContext: [
      'Cork is the underdog of San Diego flooring. Soft underfoot, naturally antimicrobial, sound-absorbing, and made from a renewable resource. We install it across San Diego in kitchens (where standing comfort matters), home offices, music rooms, and play areas. Done right with proper slab moisture sealing, cork in a San Diego kitchen lasts 25+ years.',
      'We install both glue-down cork tile and floating cork plank from Wicanders, APC, US Floors, and Globus, all FSC-certified Portuguese cork sourced from forests that regrow on a 9-year cycle. Cork needs proper moisture sealing on slab, which is why amateur installs often fail. We do it right.',
    ],
    localTrustParagraphs: [
      'Cork is a niche product we install with care, mostly out of our Mira Mesa office. Slab moisture sealing and vapor barrier are mandatory on every glue-down install. We will not skip this on any San Diego cork flooring project regardless of budget pressure. Cork flooring San Diego consultations are typically scheduled 4 to 6 business days out due to material lead time on Wicanders and APC orders.',
      'CSLB Lic #1083572. Licensed, bonded, and insured. As a cork flooring contractor in San Diego, we also use cork as compliant sound-attenuation underlayment when documented STC and IIC ratings are needed for HOA condos. Reach the office Monday through Sunday, 8am to 5pm.',
    ],
    headers: {
      cityContextH2: 'Cork Flooring For San Diego Kitchens And Offices',
      considerationsH3: 'Where Cork Works In San Diego, And Where It Does Not',
      subServicesH2: 'Cork Products We Install',
      trustH3: 'Cork Specialists Working Out Of San Diego',
      reviewsH2: 'San Diego Customers On Their Cork Floors',
      faqH2: 'Cork Flooring Questions From San Diego Customers',
      finalCtaH3: 'Talk To Us About Your Cork Project',
    },
  },

  'rubber-flooring-san-diego': {
    aeoCostAnswer:
      'Rubber flooring installs in San Diego run 1-2 days for a 500 sq ft home gym including slab crack prep and adhesive cure. Commercial scope (5,000 sq ft gym, daycare, healthcare) runs 1-2 weeks depending on zone complexity. We install Ecore, Mondo, Regupol, and RB Rubber, with heat-welded seams on commercial installs.',
    aeoSecondaryQuestion: {
      q: 'What rubber thickness do I need for a San Diego home gym?',
      a: '3/8 inch is the residential default for general fitness, cardio, and lighter dumbbell work. 1/2 inch is the right call for free-weight training. 3/4 inch or 1 inch is what you want for olympic lifting and dropping loaded barbells. Going thinner than 3/8 inch on a slab is asking for cracks in the rubber and the slab beneath.',
    },
    localNuances: [
      'Slab cracks in older San Diego garages get filled with epoxy and ground flat before rubber installs over them; hairline cracks under 1/16 inch typically do not telegraph through 3/8 inch rubber or thicker.',
      'Premium product (Ecore, Mondo) has minimal smell that aerates within a week; budget recycled tire tile can off-gas strongly for a month or longer.',
      'San Diego commercial gym buildouts in Mission Valley, Sorrento Valley, and Mira Mesa typically require after-hours scheduling to avoid disrupting tenants.',
      'Daycare and play-area rubber meets ASTM F1292 fall-attenuation specs for play heights up to 12 feet; we provide compliance documentation for inspections.',
      'San Diego does not require a permit for residential rubber over existing garage slab; commercial gyms with major reconfiguration may need a building permit.',
    ],
    cityContext: [
      'Rubber is the right floor when San Diego homes and businesses need real impact resistance: home gyms, commercial fitness, garages, daycare, and play areas. It absorbs shock, protects the slab beneath, grips wet feet, and cleans up easy. We install rolled rubber, interlocking tile, and poured rubber surfacing across San Diego County.',
      'Commercial scope in San Diego is the bulk of our rubber work. Mission Valley gyms, Sorrento Valley fitness facilities, Mira Mesa daycares, and Carlsbad commercial buildouts. We work with general contractors and gym owners on full buildouts: platform zones, free-weight zones, cardio zones, locker rooms, with heat-welded seams that look factory-installed.',
    ],
    localTrustParagraphs: [
      'Our rubber flooring San Diego work is heavily commercial: gym buildouts, daycares, healthcare facilities, alongside residential home gyms in Poway, Mira Mesa, and beyond. Slab crack repair, ASTM F1292 fall-attenuation specs for play areas, and heat-welded seams on commercial installs are standard scope. Gym flooring San Diego consultations are typically scheduled 3 to 5 business days out, often coordinated directly with general contractors.',
      'CSLB Lic #1083572. Bonded and insured. As a commercial rubber flooring contractor in San Diego, we offer after-hours and weekend scheduling for buildouts so gyms and facilities stay operational during the install. Phone or email Monday through Sunday, 8am to 5pm.',
    ],
    headers: {
      cityContextH2: 'Rubber Flooring For San Diego Gyms And Garages',
      considerationsH3: 'What To Plan For Before A Rubber Install',
      subServicesH2: 'Rubber Surfaces We Lay',
      trustH3: 'Commercial Rubber Flooring Installers In San Diego',
      reviewsH2: 'Recent Rubber Floor Projects In San Diego',
      faqH2: 'Rubber Flooring Questions From Gym And Facility Owners',
      finalCtaH3: 'Request A Quote For Your Rubber Project',
    },
  },

  'vinyl-composition-tile-flooring-san-diego': {
    aeoCostAnswer:
      'VCT installs in San Diego commercial buildouts run 4-7 days for a 5,000 sq ft school classroom retrofit, including substrate prep, layout, install, and 4-5 finish coats. After-hours, weekend, and school-break scheduling is standard so your space stays operational. We install Armstrong Excelon, Mannington, Tarkett, and Roppe lines.',
    aeoSecondaryQuestion: {
      q: 'How is VCT different from LVT in San Diego commercial spaces?',
      a: 'VCT is a homogeneous tile (vinyl, limestone, plasticizer, pigment) that needs regular stripping and waxing. LVT (luxury vinyl tile) is multi-layer with a pre-finished top coat that does not need waxing. VCT is cheaper per square foot but has higher long-term maintenance. We install VCT in San Diego schools, healthcare, and high-traffic retail; LVT in offices and lower-maintenance commercial.',
    },
    localNuances: [
      'Pre-1985 VCT in San Diego schools, hospitals, and offices may contain asbestos in the tile body or cutback adhesive; we coordinate with licensed abatement partners before tear-out.',
      'After-hours, weekend, and school-break scheduling is standard for San Diego commercial VCT installs; classrooms, retail stores, and operatories stay operational.',
      'VCT requires 4-5 finish coats out of the gate, then strip-and-re-wax every 12-24 months depending on traffic; high-traffic schools and hospitals are usually on a 12-month cycle.',
      'Cove base installation is included in every VCT install; we use 4-inch standard cove unless spec or healthcare facility requirements call for taller.',
      'Pattern installs (quarter-turn, ashlar, basket-weave, water-jet logos, school mascots) are dry-laid before adhesive so the customer approves the layout.',
    ],
    cityContext: [
      'VCT (Vinyl Composition Tile) is a workhorse, found in San Diego schools, hospitals, retail stores, and offices throughout the county. It is affordable, durable, and easy to maintain with regular stripping and waxing. We install Armstrong Excelon, Mannington, Tarkett, and Roppe commercial lines across San Diego County.',
      'Strict commercial schedules? We work nights, weekends, school breaks, and phased installs to keep your San Diego business open. We coordinate asbestos abatement on pre-1985 VCT and cutback adhesive removal where required, and we provide cove base, pattern installs, and water-jet logo work as standard scope.',
    ],
    localTrustParagraphs: [
      'VCT flooring San Diego is almost entirely commercial scope for us: schools, hospitals, dental offices, retail stores. We work nights, weekends, and school break across San Diego County to keep operating buildings open during the install. Asbestos abatement coordination on pre-1985 VCT is built into every commercial flooring San Diego quote where required, with licensed abatement partners.',
      'CSLB Lic #1083572. As a commercial flooring contractor in San Diego, we are licensed, bonded, and insured for healthcare and educational facility work. Scheduling typically requires 1 to 2 weeks of lead time for pattern installs and finish coats. Reach the office Monday through Sunday, 8am to 5pm.',
    ],
    headers: {
      cityContextH2: 'VCT Flooring For San Diego Commercial Spaces',
      considerationsH3: 'What Schools, Clinics, And Retailers Should Know About VCT',
      subServicesH2: 'VCT Services We Provide',
      trustH3: 'Licensed Commercial VCT Contractors Serving San Diego',
      reviewsH2: 'Recent VCT Projects Across San Diego County',
      faqH2: 'VCT Flooring Questions From San Diego Facilities Managers',
      finalCtaH3: 'Schedule Your Commercial VCT Project',
    },
  },
};

export const getServiceLocalData = (slug: string) => SERVICE_LOCAL_DATA[slug];
