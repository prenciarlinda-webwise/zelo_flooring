import Link from 'next/link';

type Partner = {
  name: string;
  trade: string;
  logo?: string;
  // External site, when known. Left undefined until Romeo Construction's URL is confirmed -
  // not fabricating one. Rendered rel="nofollow" once added: Zelo doesn't want to pass link
  // equity to third-party partner sites it doesn't control.
  url?: string;
};

const PARTNERS: Partner[] = [
  // URL and logo confirmed/provided by client 2026-09-02.
  {
    name: 'Romeo Construction Inc.',
    trade: 'General Construction & Remodeling',
    logo: '/img/romeo-construction-logo.png',
    url: 'https://www.romeoconstructionsd.com/',
  },
];

// Homepage strip surfacing the Professional Network relationships (see /professional-network),
// which otherwise only lives on that dedicated page.
export default function TrustedPartnersRibbon() {
  return (
    <div className="partners-ribbon">
      <div className="container partners-ribbon-inner">
        <span className="partners-ribbon-label">Trusted Partners</span>
        <div className="partners-ribbon-list">
          {PARTNERS.map((p) => {
            const mark = p.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.logo} alt={p.name} className="partners-ribbon-logo" />
            ) : (
              p.name
            );
            return (
              <span key={p.name} className="partners-ribbon-item">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="nofollow noopener noreferrer" aria-label={p.name}>
                    {mark}
                  </a>
                ) : (
                  mark
                )}
                <span className="partners-ribbon-trade"> - {p.trade}</span>
              </span>
            );
          })}
        </div>
        <Link href="/professional-network" className="partners-ribbon-link">
          View Our Professional Network
        </Link>
      </div>
    </div>
  );
}
