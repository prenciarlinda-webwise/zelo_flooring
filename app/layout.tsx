import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import TrustStrip from '@/components/TrustStrip';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnalyticsListener from '@/components/AnalyticsListener';
import { SITE, SERVICE_AREAS } from '@/lib/areas';
import { SERVICES } from '@/lib/services';

const GTM_ID = 'GTM-PCPP9MW5';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} - Flooring Installation in San Diego, CA`,
    template: `%s - ${SITE.name}`,
  },
  description: `${SITE.name} is a family-operated, C-15 licensed flooring installation company in San Diego with over a decade of journeyman experience. Carpet, LVP, hardwood, laminate, tile, cork, rubber, VCT. Bonded, insured, BBB Accredited A+. Free in-home estimates. Call ${SITE.phone}.`,
  openGraph: {
    title: `${SITE.name} - Flooring Installation in San Diego, CA`,
    description:
      'Family-operated flooring installation in San Diego. C-15 licensed, BBB Accredited A+, Thumbtack Top Pro 2023-2025. Free in-home estimates.',
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/zelo-flooring-logo.png',
        width: 576,
        height: 163,
        alt: `${SITE.name} logo`,
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C8541C',
};

const businessGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      image: `${SITE.url}/zelo-flooring-logo.png`,
      logo: `${SITE.url}/zelo-flooring-logo.png`,
      telephone: SITE.phone,
      email: SITE.email,
      url: SITE.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '8017 Peach Point Ave',
        addressLocality: SITE.city,
        addressRegion: SITE.region,
        postalCode: '92126',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 32.9133,
        longitude: -117.1486,
      },
      areaServed: SERVICE_AREAS.map((area) => ({
        '@type': 'City',
        name: area.name,
        '@id': area.wikipediaUrl,
      })),
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: SITE.hoursOpen,
          closes: SITE.hoursClose,
        },
      ],
      paymentAccepted: SITE.paymentMethods.join(', '),
      currenciesAccepted: 'USD',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: SITE.numberOfEmployees,
      },
      description: SITE.description,
      founder: {
        '@type': 'Person',
        '@id': `${SITE.url}/#owner`,
        name: SITE.owner.name,
        givenName: SITE.owner.givenName,
        familyName: SITE.owner.familyName,
        jobTitle: SITE.owner.jobTitle,
        worksFor: { '@id': `${SITE.url}/#business` },
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'license',
          name: `${SITE.licenseDetails.classification} ${SITE.licenseDetails.classificationName}`,
          identifier: SITE.licenseDetails.number,
          recognizedBy: {
            '@type': 'Organization',
            name: SITE.licenseDetails.issuer,
            url: SITE.licenseDetails.issuerUrl,
          },
          validThrough: SITE.licenseDetails.validThrough,
        },
      },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        '@id': `${SITE.url}/#cslb-license`,
        credentialCategory: 'license',
        name: `${SITE.licenseDetails.classification} ${SITE.licenseDetails.classificationName}`,
        identifier: SITE.licenseDetails.number,
        recognizedBy: {
          '@type': 'Organization',
          name: SITE.licenseDetails.issuer,
          url: SITE.licenseDetails.issuerUrl,
        },
        validThrough: SITE.licenseDetails.validThrough,
      },
      foundingDate: String(SITE.yearEstablished),
      ...(SITE.socials.length > 0 ? { sameAs: SITE.socials } : {}),
      ...(SITE.awards.length > 0 ? { award: SITE.awards } : {}),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: SITE.rating.value,
        reviewCount: SITE.rating.count,
        bestRating: 5,
        worstRating: 1,
      },
      knowsAbout: [
        'flooring installation',
        'flooring contractor',
        'carpet installation',
        'carpet flooring',
        'luxury vinyl plank',
        'lvp flooring',
        'vinyl plank flooring',
        'rigid core spc vinyl',
        'hardwood flooring',
        'engineered hardwood',
        'solid hardwood',
        'laminate flooring',
        'tile flooring',
        'porcelain tile',
        'ceramic tile',
        'natural stone tile',
        'cork flooring',
        'rubber flooring',
        'commercial gym flooring',
        'home gym flooring',
        'vinyl composition tile',
        'vct flooring',
        'vinyl wall base',
        'wood baseboard',
        'tile backsplash installation',
        'self-leveling concrete',
        'subfloor preparation',
        'moisture testing',
        'concrete slab installation',
        'floor refinishing',
        'commercial flooring',
        'residential flooring',
        'free in-home flooring estimate',
        'flooring sample consultation',
        'manufacturer-spec installation',
        'San Diego flooring',
        'San Diego flooring installation',
        'San Diego flooring contractor',
        'flooring San Diego County',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Flooring Services',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.name,
            description: s.description,
            url: `${SITE.url}/${s.slug}`,
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { '@id': `${SITE.url}/#business` },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessGraph) }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AnalyticsListener />
        <Header />
        <TrustStrip />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
