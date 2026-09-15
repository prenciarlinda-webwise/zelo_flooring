import Link from 'next/link';
import LeadFormHero from './LeadFormHero';
import TrustindexWidget from './TrustindexWidget';
import CouponsBlock from './CouponsBlock';
import FaqList from './FaqList';
import FinalCTA from './FinalCTA';
import LinkifyPhone from './LinkifyPhone';
import { ArrowIcon, PinIcon, CheckIcon } from './Icons';
import { SITE } from '@/lib/areas';
import type { Location } from '@/lib/locations';
import { LOCATIONS, getLocation } from '@/lib/locations';
import { SERVICES } from '@/lib/services';

type Props = { location: Location };

const MIRA_MESA_WIKIPEDIA_URL = 'https://en.wikipedia.org/wiki/Mira_Mesa,_San_Diego';

// Renders the main San Diego findUs paragraph with "Mira Mesa" linked out to Wikipedia
// (1-2 outbound authoritative links per page, per the GEO/AEO rule). Splits on the exact
// substring once; falls back to plain text if the copy in lib/locations.ts ever drops it.
function findUsParagraphWithMiraMesaLink(paragraph: string) {
  const marker = 'Mira Mesa';
  const idx = paragraph.indexOf(marker);
  if (idx === -1) return paragraph;
  return (
    <>
      {paragraph.slice(0, idx)}
      <a href={MIRA_MESA_WIKIPEDIA_URL} target="_blank" rel="noopener noreferrer">
        {marker}
      </a>
      {paragraph.slice(idx + marker.length)}
    </>
  );
}

export default function LocationPage({ location }: Props) {
  const isMain = location.type === 'main';

  // Service list for this location: informational only, no link out. There is no per-city
  // service page (only one shared /{service}-san-diego page per service), so rather than link
  // to a page that isn't about this city, each card gets a short, location-specific note instead.

  // Each section below is a named JSX variable so isMain can reorder them (see the return
  // statement) without duplicating markup. San Diego's order was requested to lead with the
  // services grid and the local Find Us section, right after the hero; every other location
  // keeps the original top-to-bottom order.

  const aeoQuickAnswerSection = (
    <section className="section section-cream" key="aeo-quick-answer">
      <div className="container">
        <div className="aeo-block">
          <p className="aeo-answer-text"><LinkifyPhone text={location.aeoCostAnswer} /></p>

          <ul className="aeo-keyfacts">
            <li><CheckIcon size={14} /><span>Serving {location.city} ({location.zips.join(', ')})</span></li>
            <li><CheckIcon size={14} /><span>CSLB licensed, #{SITE.license}</span></li>
            <li><CheckIcon size={14} /><span>Free in-home estimates, samples brought to you</span></li>
            {!isMain && location.driveTimeFromHQ && (
              <li><CheckIcon size={14} /><span>About {location.driveTimeFromHQ} from our San Diego office</span></li>
            )}
            <li><CheckIcon size={14} /><span>{location.county}</span></li>
          </ul>
        </div>
      </div>
    </section>
  );

  const cityIntroSection = (
    <section className="section" key="city-intro">
      <div className="container">
        <div className="section-header">
          <h2>{location.city} Flooring Services</h2>
        </div>
        <div className="city-intro">
          {location.cityIntro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="local-nuances">
          <h3>Local Conditions in {location.city}</h3>
          <ul>
            {location.localNuances.map((n) => (
              <li key={n}>
                <CheckIcon size={16} />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );

  const whyChooseUsSection = (
    <section className="section section-cream" key="why-choose-us">
      <div className="container">
        <div className="section-header center">
          <h2>Why Customers Choose Zelo Flooring in {location.city}</h2>
          <p>Same install standards across San Diego County, adjusted for {location.city} conditions.</p>
        </div>

        <div className="why-local-grid">
          {location.whyChooseUsLocal.map((w) => (
            <div key={w.title} className="why-local-item">
              <CheckIcon size={16} />
              <div className="why-local-text">
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  {/* SERVICES WE OFFER (informational, no link out) - there is no per-city service page (only one
      shared /{service}-san-diego page per service), so rather than link to a page that isn't about
      this city, each card gets a short, location-specific note instead. */}
  const servicesSection = (
    <section className="section" key="services">
      <div className="container">
        <div className="section-header center">
          <h2>{`Flooring Services in ${location.city}, ${location.state}`}</h2>
          <p>All 8 flooring types we install, with what matters most for {location.city} homes.</p>
        </div>
        <div className="location-service-grid">
          {SERVICES.map((s) => (
            <div key={s.slug} className="location-service-card">
              <h3 className="location-service-title">{s.name}</h3>
              <p className="location-service-note">{location.serviceNotes[s.slug]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const bestOfSection = location.bestOf && (
        <section className="section" key="best-of">
          <div className="container">
            <div className="aeo-block">
              <h2>{location.bestOf.q}</h2>
              <p className="aeo-answer-text">{location.bestOf.a}</p>
              <ul className="aeo-keyfacts">
                {location.bestOf.picks.map((p) => (
                  <li key={p.category}>
                    <strong>{p.category}:</strong>{' '}
                    <Link href={p.href}>{p.pick}</Link>
                  </li>
                ))}
              </ul>
              <p>
                <Link href={location.bestOf.guideHref}>{location.bestOf.guideLabel}</Link>
              </p>
            </div>
          </div>
        </section>
      );

  {/* FIND A RELIABLE INSTALLER ANSWER BLOCK (AEO/GEO) */}
  const findInstallerSection = location.findInstaller && (
    <section className="section" key="find-installer">
          <div className="container">
            <div className="installer-trust-block">
              <h2>{location.findInstaller.q}</h2>
              <p className="aeo-answer-text"><LinkifyPhone text={location.findInstaller.a} /></p>
              <ul className="installer-checklist">
                {location.findInstaller.criteria.map((c) => (
                  <li key={c.label}>
                    <CheckIcon size={16} />
                    <span><strong>{c.label}:</strong> {c.detail}</span>
                  </li>
                ))}
              </ul>
              {isMain ? (
                <>
                  <p>
                    Zelo Flooring is a licensed, full-service San Diego flooring and carpet company,
                    installing <Link href="/carpet-flooring-san-diego">carpet</Link> throughout San Diego
                    and nearby <Link href="/flooring-la-jolla">La Jolla</Link>.
                  </p>
                  <p>
                    We also install{' '}
                    <Link href="/hardwood-flooring-san-diego">hardwood flooring</Link>,{' '}
                    <Link href="/vinyl-flooring-san-diego">luxury vinyl plank</Link>, and{' '}
                    <Link href="/laminate-flooring-san-diego">laminate flooring</Link> across the county,
                    including <Link href="/flooring-carlsbad">Carlsbad</Link> and{' '}
                    <Link href="/flooring-coronado">Coronado</Link>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Zelo Flooring is a licensed, full-service San Diego flooring company serving{' '}
                    {location.city} from our San Diego office, installing{' '}
                    <Link href="/carpet-flooring-san-diego">carpet</Link>,{' '}
                    <Link href="/hardwood-flooring-san-diego">hardwood flooring</Link>,{' '}
                    <Link href="/vinyl-flooring-san-diego">luxury vinyl plank</Link>, and{' '}
                    <Link href="/laminate-flooring-san-diego">laminate flooring</Link> throughout{' '}
                    {location.city}.
                  </p>
                  {location.relatedLocations.length > 0 && (
                    <p>
                      We also serve nearby{' '}
                      {location.relatedLocations.slice(0, 3).map((slug, i, arr) => {
                        const related = getLocation(slug);
                        if (!related) return null;
                        const isLast = i === arr.length - 1;
                        const isSecondLast = i === arr.length - 2;
                        return (
                          <span key={slug}>
                            <Link href={`/${slug}`}>{related.city}</Link>
                            {!isLast && (isSecondLast ? (arr.length > 2 ? ', and ' : ' and ') : ', ')}
                          </span>
                        );
                      })}
                      .
                    </p>
                  )}
                </>
              )}
              <p>
                Verify any contractor free on the{' '}
                <a href={SITE.licenseDetails.issuerUrl} target="_blank" rel="noopener noreferrer">
                  California Contractors State License Board
                </a>
                , or see all of our profiles on{' '}
                <a href={SITE.thumbtackUrl} target="_blank" rel="noopener noreferrer">Thumbtack</a>{' '}
                and the{' '}
                <a href={SITE.bbbUrl} target="_blank" rel="noopener noreferrer">BBB</a>.
              </p>
            </div>
          </div>
        </section>
      );

  const aeoSecondaryQuestionSection = (
    <section className="section section-cream" key="aeo-secondary">
      <div className="container">
        <div className="aeo-block">
          <h2>{location.aeoSecondaryQuestion.q}</h2>
          <p className="aeo-answer-text"><LinkifyPhone text={location.aeoSecondaryQuestion.a} /></p>
        </div>
      </div>
    </section>
  );

  const neighborhoodsSection = (
    <section className="section" key="neighborhoods">
      <div className="container">
        <div className="section-header center">
          <h2>{location.city} Neighborhoods We Serve</h2>
          <p>Free in-home estimates across every {location.city} neighborhood.</p>
        </div>

        <div className="neighborhood-grid">
          {location.neighborhoods.map((n) => (
            <div key={n} className="neighborhood-card">
              <PinIcon size={14} />
              <span>{n}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );

  {/* FIND US (narrative local-reach section + embedded map, unique per location) */}
  const findUsSection = (
    <section className="section section-cream" key="find-us">
      <div className="container">
        <div className="section-header center">
          <h2>{location.findUs.heading}</h2>
        </div>
        <div className="trust-local-block">
          <div className="trust-local-text">
            {location.findUs.paragraphs.map((p, i) => (
              <p key={i}>{isMain ? findUsParagraphWithMiraMesaLink(p) : p}</p>
            ))}
            <p>
              Phone: <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
            </p>
            <p className="trust-local-address">{SITE.address}</p>
          </div>
          <div className="trust-local-map">
            <iframe
              title={`Zelo Flooring office location serving ${location.city}, ${location.state}`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429158.4382376207!2d-117.43896549701864!3d32.82405591700714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4579afeb4521caf3%3A0x8ce37c4ae7b6778f!2sZelo%20Flooring!5e0!3m2!1sen!2s!4v1783763905235!5m2!1sen!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
        <div className="landmarks">
          <p>
            <strong>Local landmarks:</strong>{' '}
            {location.landmarks.join(', ')}.
          </p>
          <p>
            <strong>ZIP codes served:</strong> {location.zips.join(', ')}.
          </p>
          <p>
            <a href={location.wikipediaUrl} target="_blank" rel="noopener noreferrer">
              Wikipedia {location.city}
            </a>
          </p>
        </div>
      </div>
    </section>
  );

  const reviewsSection = (
    <section className="section" key="reviews">
      <div className="container">
        <div className="section-header center">
          <h2>{`5-Star Reviews from ${location.city} Customers`}</h2>
        </div>
        <TrustindexWidget src="https://cdn.trustindex.io/loader.js?4a1219e76b2c4743ce66d5610b3" />
      </div>
    </section>
  );

  const couponsSection = (
    <CouponsBlock
      key="coupons"
      eyebrow="Current Offers"
      heading="Zelo Flooring Specials"
      subheading="Tap any offer to claim it. We follow up within 1 business day."
    />
  );

  const faqSection = (
    <section className="section" key="faq">
      <div className="container">
        <div className="section-header center">
          <h2>{location.city} Flooring FAQs</h2>
          <p>The most common questions we hear from {location.city} residents.</p>
        </div>
        <FaqList items={location.faqs} includeSchema={false} />
      </div>
    </section>
  );

  {/* RELATED LOCATIONS */}
  const relatedLocationsSection = location.relatedLocations.length > 0 && (
    <section className="section section-cream" key="related-locations">
      <div className="container">
        <div className="section-header center">
          <h2>Nearby Service Areas in San Diego County</h2>
        </div>

        <div className="related-locations-grid">
          {location.relatedLocations.map((slug) => {
            const related = getLocation(slug);
            if (!related) return null;
            return (
              <Link key={slug} href={`/${slug}`} className="related-location-card">
                <span className="related-location-city">{related.city}</span>
                <span className="related-location-meta">
                  {related.neighborhoods.length} neighborhoods · {related.zips.length} ZIP{related.zips.length > 1 ? 's' : ''}
                </span>
                <ArrowIcon size={14} />
              </Link>
            );
          })}
          {/* Always include the locations hub */}
          <Link href="/service-areas" className="related-location-card">
            <span className="related-location-city">All Service Areas</span>
            <span className="related-location-meta">{LOCATIONS.length}+ communities</span>
            <ArrowIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );

  const finalCtaSection = (
    <FinalCTA
      key="final-cta"
      heading={`Get a Free Flooring Estimate in ${location.city}, ${location.state}`}
      subheading={`Tell us about your ${location.city} project. We bring samples, take measurements, and put together a clear written quote at no cost.`}
    />
  );

  // 2026-09-13: services grid + Find Us now lead, right after the hero, on every location page
  // (piloted on San Diego main first, then rolled out here to all 12 secondary locations per
  // client request). Everything else keeps its prior relative order after that.
  const middleSections = [
    servicesSection,
    findUsSection,
    aeoQuickAnswerSection,
    cityIntroSection,
    whyChooseUsSection,
    bestOfSection,
    findInstallerSection,
    aeoSecondaryQuestionSection,
    neighborhoodsSection,
  ];

  const tailSections = [
    reviewsSection,
    couponsSection,
    faqSection,
    relatedLocationsSection,
    finalCtaSection,
  ];

  return (
    <>
      <LeadFormHero
        h1={isMain ? 'Professional Flooring Services San Diego' : `Flooring in ${location.city}, ${location.state}`}
        valueProp={location.heroValueProp}
        trustBullets={[
          `${SITE.licenseDetails.classification} Licensed (CSLB #${SITE.license})`,
          isMain
            ? `${SITE.ownerExperienceYears}+ years of journeyman experience`
            : `Serving ${location.city} from our San Diego office`,
          `${SITE.rating.value.toFixed(1)}★ on Thumbtack (${SITE.rating.count} reviews)`,
        ]}
        image={location.heroImage}
        imageAlt={location.heroImageAlt}
        defaultProjectType="Not sure yet"
      />
      {middleSections}
      {tailSections}
    </>
  );
}
