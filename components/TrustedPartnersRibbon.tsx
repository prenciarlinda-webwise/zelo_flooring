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

// A marquee group has to be wider than the widest screen or the loop shows a gap, so a
// short PARTNERS list is repeated until each group holds at least this many chips.
const MIN_CHIPS_PER_GROUP = 12;
const SECONDS_PER_CHIP = 5;

function PartnerChip({ partner, hidden }: { partner: Partner; hidden: boolean }) {
  const inner = (
    <>
      {partner.logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={partner.logo} alt="" className="partners-chip-logo" loading="lazy" decoding="async" />
      )}
      <span className="partners-chip-text">
        {/* A logo already carries the name, so the name is only spelled out without one. */}
        {!partner.logo && <span className="partners-chip-name">{partner.name}</span>}
        <span className="partners-chip-trade">{partner.trade}</span>
      </span>
    </>
  );
  return partner.url ? (
    <a
      href={partner.url}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`${partner.name} - ${partner.trade}`}
      className="partners-chip"
      tabIndex={hidden ? -1 : undefined}
    >
      {inner}
    </a>
  ) : (
    <span className="partners-chip" aria-label={`${partner.name} - ${partner.trade}`}>
      {inner}
    </span>
  );
}

// Homepage strip surfacing the Professional Network relationships (see /professional-network),
// which otherwise only lives on that dedicated page. Rolls continuously (pure CSS, see
// .partners-marquee in globals.css); to add a partner, add it to PARTNERS above - a name and
// trade are enough, logo and url are optional.
export default function TrustedPartnersRibbon() {
  const repeats = Math.max(1, Math.ceil(MIN_CHIPS_PER_GROUP / PARTNERS.length));
  const chips = Array.from({ length: repeats }, () => PARTNERS).flat();

  return (
    <div className="partners-ribbon">
      <div className="container partners-ribbon-head">
        <h2 className="partners-ribbon-label">Trusted Partners</h2>
        <Link href="/professional-network" className="partners-ribbon-link">
          View Our Professional Network
        </Link>
      </div>
      <div className="partners-marquee">
        <div
          className="partners-marquee-track"
          style={{ animationDuration: `${chips.length * SECONDS_PER_CHIP}s` }}
        >
          {[0, 1].map((group) => (
            <ul key={group} className="partners-marquee-group" aria-hidden={group === 1 ? true : undefined}>
              {chips.map((p, i) => {
                // Only the first pass over PARTNERS is announced and focusable; every
                // repeat after it exists purely to fill the loop.
                const hidden = group === 1 || i >= PARTNERS.length;
                return (
                  <li key={`${p.name}-${i}`} className="partners-marquee-item" aria-hidden={hidden && group === 0 ? true : undefined}>
                    <PartnerChip partner={p} hidden={hidden} />
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
