import { PhoneIcon } from './Icons';
import { SITE } from '@/lib/areas';

// Shown in place of a lead form after a successful submission. Confirms receipt,
// sets a 1-business-day callback expectation, and offers a click-to-call fallback.
export default function FormSuccess({ area, className }: { area?: string; className?: string }) {
  const place = area && area !== 'other' ? area : 'San Diego';
  return (
    <div className={`form-success${className ? ` ${className}` : ''}`} role="status">
      <p className="form-success-title">Thanks, we got it.</p>
      <p className="form-success-text">
        A Zelo Flooring estimator will reach out within 1 business day about your {place} flooring project.
      </p>
      <p className="form-success-or">Prefer to talk now?</p>
      <a href={`tel:${SITE.phoneRaw}`} className="btn btn-primary btn-block btn-lg">
        <PhoneIcon size={18} /> Call {SITE.phone}
      </a>
    </div>
  );
}
