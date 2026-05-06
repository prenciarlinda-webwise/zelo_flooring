import Link from 'next/link';
import { PinIcon } from './Icons';
import { SERVICE_AREAS } from '@/lib/areas';

export default function ServiceAreaGrid() {
  return (
    <div className="areas-grid">
      {SERVICE_AREAS.map((area) => (
        <Link key={area.name} href="/service-areas">
          <PinIcon size={14} /> {area.name}
        </Link>
      ))}
    </div>
  );
}
