import Link from 'next/link';
import { PinIcon } from './Icons';
import { SERVICE_AREAS } from '@/lib/areas';

// Phase 1 neighborhood combo URL pattern: /flooring-{slug}
function neighborhoodSlug(name: string) {
  return 'flooring-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function ServiceAreaGrid() {
  return (
    <div className="areas-grid">
      {SERVICE_AREAS.map((area) => (
        <Link key={area.name} href={`/${neighborhoodSlug(area.name)}`}>
          <PinIcon size={14} /> {area.name}
        </Link>
      ))}
    </div>
  );
}
