import Link from 'next/link';
import { PhoneIcon, ArrowIcon } from './Icons';
import { SITE, SERVICE_AREAS } from '@/lib/areas';
import { SERVICES } from '@/lib/services';

export default function StickySidebar({ currentSlug }: { currentSlug?: string }) {
  return (
    <aside className="sticky-sidebar">
      {/* CTA BOX */}
      <div className="sidebar-box sidebar-cta">
        <h4>Get a Free Estimate</h4>
        <p>We bring samples to your door. No pressure, no obligation.</p>
        <a href={`tel:${SITE.phoneRaw}`} className="btn btn-primary btn-block">
          <PhoneIcon size={16} /> Call {SITE.phone}
        </a>
        <Link href="/free-estimate" className="btn btn-outline-orange btn-block" style={{ marginTop: 8 }}>
          Request Online
        </Link>
      </div>

      {/* SERVICES LIST */}
      <div className="sidebar-box">
        <h4>Our Services</h4>
        <ul className="sidebar-links">
          {SERVICES.map((s) => (
            <li key={s.slug} className={s.slug === currentSlug ? 'active' : ''}>
              <Link href={`/${s.slug}`}>
                {s.shortName} Flooring <ArrowIcon size={12} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* LOCATIONS */}
      <div className="sidebar-box">
        <h4>Service Areas</h4>
        <div className="sidebar-areas">
          {SERVICE_AREAS.map((area) => (
            <Link key={area.name} href="/service-areas">{area.name}</Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
