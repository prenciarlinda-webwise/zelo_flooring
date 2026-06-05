export type ServiceArea = {
  name: string;
  wikipediaUrl: string;
};

export const SERVICE_AREAS: ServiceArea[] = [
  { name: 'San Diego', wikipediaUrl: 'https://en.wikipedia.org/wiki/San_Diego' },
  { name: 'Coronado', wikipediaUrl: 'https://en.wikipedia.org/wiki/Coronado,_California' },
  { name: 'Del Mar', wikipediaUrl: 'https://en.wikipedia.org/wiki/Del_Mar,_California' },
  { name: 'Oceanside', wikipediaUrl: 'https://en.wikipedia.org/wiki/Oceanside,_California' },
  { name: 'La Jolla', wikipediaUrl: 'https://en.wikipedia.org/wiki/La_Jolla,_San_Diego' },
  { name: 'Carlsbad', wikipediaUrl: 'https://en.wikipedia.org/wiki/Carlsbad,_California' },
  { name: 'Poway', wikipediaUrl: 'https://en.wikipedia.org/wiki/Poway,_California' },
  { name: 'Vista', wikipediaUrl: 'https://en.wikipedia.org/wiki/Vista,_California' },
  { name: 'Encinitas', wikipediaUrl: 'https://en.wikipedia.org/wiki/Encinitas,_California' },
  { name: 'Rancho Santa Fe', wikipediaUrl: 'https://en.wikipedia.org/wiki/Rancho_Santa_Fe,_California' },
  { name: 'San Marcos', wikipediaUrl: 'https://en.wikipedia.org/wiki/San_Marcos,_California' },
];

export const SITE = {
  name: 'Zelo Flooring',
  legalName: 'Zelo Flooring',
  entityType: 'Sole Proprietorship',
  phone: '+1 (619) 777-4334',
  phoneRaw: '+16197774334',
  city: 'San Diego',
  region: 'CA',
  license: '1083572',
  yearEstablished: 2021, // Zelo Flooring entity founded 2021-10-12 per BBB
  ownerExperienceYears: 13, // Endri's flooring/journeyman experience
  numberOfEmployees: 4,
  hiredCount: 57, // Times hired on Thumbtack
  address: 'San Diego, CA',
  tagline: 'San Diego flooring installation',
  description:
    'Zelo Flooring is a flooring installation company based in San Diego. We have over a decade of journeyman experience installing residential and commercial flooring. We pride ourselves on craftsmanship, communication, and diligence.',
  url: 'https://www.zeloflooring.com',
  // Drives sitemap lastmod for static routes. Bump when chrome (header/footer/global schema) changes.
  lastUpdated: '2026-05-07',
  // Operating hours: 7am-7pm seven days/week (Pacific). Used by schema and visible NAP blocks.
  hoursDisplay: 'Open daily 7:00am - 7:00pm',
  hoursOpen: '07:00',
  hoursClose: '19:00',
  paymentMethods: [
    'Apple Pay',
    'Cash',
    'Check',
    'Credit Card',
    'Cash App',
    'Venmo',
    'Zelle',
  ] as string[],
  // Profile URLs for sameAs entity linking (helps GEO/AEO and disambiguates the business)
  socials: [
    'https://www.facebook.com/ZeloFlooring/',
    'https://www.instagram.com/zeloflooring',
    'https://www.yelp.com/biz/zelo-flooring-san-diego',
    'https://www.thumbtack.com/ca/san-diego/hardwood-floor-installation/zelo-flooring/service/414577564885925896',
    'https://www.mapquest.com/us/california/zelo-flooring-716292534',
    'https://www.bbb.org/us/ca/san-diego/profile/floor-coverings/zelo-flooring-1126-1000103311',
  ] as string[],
  facebookUrl: 'https://www.facebook.com/ZeloFlooring/',
  instagramUrl: 'https://www.instagram.com/zeloflooring',
  yelpUrl: 'https://www.yelp.com/biz/zelo-flooring-san-diego',
  thumbtackUrl: 'https://www.thumbtack.com/ca/san-diego/hardwood-floor-installation/zelo-flooring/service/414577564885925896',
  mapquestUrl: 'https://www.mapquest.com/us/california/zelo-flooring-716292534',
  bbbUrl: 'https://www.bbb.org/us/ca/san-diego/profile/floor-coverings/zelo-flooring-1126-1000103311',
  bbb: {
    accredited: true,
    rating: 'A+',
    accreditedSince: '2022-10-27',
    chapter: 'BBB Pacific Southwest',
    profileUrl: 'https://www.bbb.org/us/ca/san-diego/profile/floor-coverings/zelo-flooring-1126-1000103311',
  },
  // Verified review count and rating sourced from Thumbtack profile.
  rating: {
    value: 5.0,
    count: 34,
    source: 'Thumbtack',
    sourceUrl: 'https://www.thumbtack.com/ca/san-diego/hardwood-floor-installation/zelo-flooring/service/414577564885925896',
  },
  // Recognized awards for award schema and trust badging.
  awards: ['Thumbtack Top Pro 2023', 'Thumbtack Top Pro 2024', 'Thumbtack Top Pro 2025'] as string[],
  owner: {
    name: 'Endri Zelollari',
    givenName: 'Endri',
    familyName: 'Zelollari',
    jobTitle: 'Owner',
    inUSSince: 2013,
    teamYearsExperience: 20,
    backgroundCheckDate: '2021-10-14',
    backgroundCheckSource: 'Thumbtack',
  },
  licenseDetails: {
    number: '1083572',
    classification: 'C-15',
    classificationName: 'Flooring and Floor Covering Contractor',
    state: 'CA',
    issuer: 'California Contractors State License Board',
    issuerAcronym: 'CSLB',
    issuerUrl: 'https://www.cslb.ca.gov',
    verifiedDate: '2026-04-07',
    validThrough: '2027-12-01',
    bonded: true,
    insured: true,
  },
  // Authoritative product/service catalog for copy and schema knowsAbout.
  productCategories: [
    'Luxury Vinyl Plank (LVP)',
    'Vinyl Plank glue-down',
    'Vinyl Composition Tile (VCT)',
    'Vinyl Wall Base',
    'Carpet (residential and commercial)',
    'Laminate',
    'Solid Hardwood',
    'Engineered Hardwood',
    'Cork Tiles',
    'Tile (porcelain, ceramic, stone)',
    'Backsplash',
    'Rubber',
    'Home Gym Flooring',
    'Self-Leveling',
    'Wood Baseboard',
  ] as string[],
};
