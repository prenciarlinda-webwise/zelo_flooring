import Link from 'next/link';
import { SITE, SERVICE_AREAS } from '@/lib/areas';
import { PinIcon } from './Icons';

type Props = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  /** Optional "Local Element" paragraphs + embedded map, same pattern as the "Find Us"
   * section on every location page (see LocationPage.tsx / Location.findUs), just
   * county-wide instead of one city — since the homepage can't reasonably carry all 13
   * cities' worth of hyper-local landmark detail. */
  intro?: string[];
};

// Phase 1 neighborhood combo URL pattern: /flooring-{slug}
function neighborhoodSlug(name: string) {
  return 'flooring-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function ServiceAreaLinks({ eyebrow, heading, subheading, intro }: Props) {
  return (
    <section className="section service-area-links">
      <div className="container">
        <div className="section-header center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{heading || 'Flooring Across San Diego County'}</h2>
          {subheading && <p>{subheading}</p>}
        </div>

        {intro && intro.length > 0 && (
          <div className="trust-local-block" style={{ marginBottom: 40 }}>
            <div className="trust-local-text">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>
                Phone: <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
              </p>
              <p className="trust-local-address">{SITE.address}</p>
            </div>
            <div className="trust-local-map">
              <iframe
                title="Zelo Flooring office location serving San Diego County"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429158.4382376207!2d-117.43896549701864!3d32.82405591700714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4579afeb4521caf3%3A0x8ce37c4ae7b6778f!2sZelo%20Flooring!5e0!3m2!1sen!2s!4v1783763905235!5m2!1sen!2s"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div className="area-links-grid">
          {SERVICE_AREAS.map((area) => (
            <Link key={area.name} href={`/${neighborhoodSlug(area.name)}`} className="area-link-card">
              <PinIcon size={16} />
              <span>{area.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
