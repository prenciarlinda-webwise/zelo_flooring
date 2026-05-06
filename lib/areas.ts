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
  phone: '+1 (619) 777-4334',
  phoneRaw: '+16197774334',
  email: 'zeloflooring@gmail.com',
  city: 'San Diego',
  region: 'CA',
  license: '1083572',
  yearEstablished: 2021,
  address: '8017 Peach Point Ave, San Diego, CA 92126',
  tagline: 'Family Business',
  url: 'https://zeloflooring.com',
  // Drives sitemap lastmod for static routes. Bump when chrome (header/footer/global schema) changes.
  lastUpdated: '2026-05-04',
  // Add real social profile URLs to enable sameAs entity linking (helps GEO/AEO)
  socials: [] as string[],
};
