import { SITE } from '@/lib/areas';

export default function TrustStrip() {
  const years = new Date().getFullYear() - SITE.yearEstablished;
  return (
    <div className="trust-strip">
      🛠️ Family Business · Proudly Serving San Diego for {years}+ Years · Licensed · Bonded · Insured
    </div>
  );
}
