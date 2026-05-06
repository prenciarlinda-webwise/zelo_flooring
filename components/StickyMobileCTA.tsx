import Link from 'next/link';
import { PhoneIcon } from './Icons';
import { SITE } from '@/lib/areas';

export default function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta" aria-label="Quick contact">
      <a href={`tel:${SITE.phoneRaw}`} className="sticky-mobile-cta-btn sticky-mobile-cta-call">
        <PhoneIcon size={18} />
        <span>Call {SITE.phone}</span>
      </a>
      <Link href="/free-estimate" className="sticky-mobile-cta-btn sticky-mobile-cta-book">
        <span>Book Estimate</span>
      </Link>
    </div>
  );
}
