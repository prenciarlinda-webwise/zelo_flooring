import Link from 'next/link';

type Partner = {
  name: string;
  trade: string;
  // External site, when known. Left undefined until Romeo Construction's URL is confirmed -
  // not fabricating one. Rendered rel="nofollow" once added: Zelo doesn't want to pass link
  // equity to third-party partner sites it doesn't control.
  url?: string;
};

const PARTNERS: Partner[] = [
  { name: 'Romeo Construction Inc.', trade: 'General Construction & Remodeling' },
  // TODO: add `url` here once Romeo Construction's website is provided.
];

// Homepage strip surfacing the Professional Network relationships (see /professional-network),
// which otherwise only lives on that dedicated page.
export default function TrustedPartnersRibbon() {
  return (
    <div className="partners-ribbon">
      <div className="container partners-ribbon-inner">
        <span className="partners-ribbon-label">Trusted Partners</span>
        <div className="partners-ribbon-list">
          {PARTNERS.map((p) => (
            <span key={p.name} className="partners-ribbon-item">
              {p.url ? (
                <a href={p.url} target="_blank" rel="nofollow noopener noreferrer">
                  {p.name}
                </a>
              ) : (
                p.name
              )}
              <span className="partners-ribbon-trade"> - {p.trade}</span>
            </span>
          ))}
        </div>
        <Link href="/professional-network" className="partners-ribbon-link">
          View Our Professional Network
        </Link>
      </div>
    </div>
  );
}
