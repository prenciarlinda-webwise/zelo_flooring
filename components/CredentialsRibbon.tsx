import { ShieldIcon } from './Icons';
import { SITE } from '@/lib/areas';

// Slim strip: "Licensed · Bonded · Insured · CSLB #... · Serving San Diego County".
// Used on the Careers and Professional Network pages, where establishing legitimacy to an
// applicant/partner audience matters most. Distinct from the existing (currently unmounted)
// TrustRibbon.tsx, which is a row of BBB/Thumbtack/Yelp review badges - a different kind of
// trust signal. Not mounted sitewide, since the top bar (Header) and footer already carry the
// same license/NAP facts for the general visitor.
export default function CredentialsRibbon() {
  return (
    <div className="credentials-ribbon">
      <div className="container credentials-ribbon-inner">
        <ShieldIcon size={18} />
        <span>
          Licensed &middot; Bonded &middot; Insured &middot; CSLB #{SITE.license} &middot; Serving San Diego County
        </span>
      </div>
    </div>
  );
}
