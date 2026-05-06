import Link from 'next/link';
import { SERVICE_AREAS } from '@/lib/areas';
import { PinIcon } from './Icons';

type Props = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
};

// Phase 1 neighborhood combo URL pattern: /flooring-{slug}
function neighborhoodSlug(name: string) {
  return 'flooring-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function ServiceAreaLinks({ eyebrow, heading, subheading }: Props) {
  return (
    <section className="section service-area-links">
      <div className="container">
        <div className="section-header center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{heading || 'Flooring Across San Diego County'}</h2>
          {subheading && <p>{subheading}</p>}
        </div>

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
