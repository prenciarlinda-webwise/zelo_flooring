import { PhoneIcon, PinIcon, ClockIcon } from './Icons';
import SendAJobEmbed from './SendAJobEmbed';
import { SITE } from '@/lib/areas';

type Props = {
  heading?: string;
  subheading?: string;
  defaultProjectType?: string;
  headingAs?: 'h2' | 'h3';
};

export default function FinalCTA({ heading, subheading, headingAs = 'h2' }: Props) {
  const HeadingTag = headingAs;

  return (
    <section className="final-cta-section">
      <div className="container final-cta-grid">
        <div className="final-cta-text">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>Get Started Today</span>
          <HeadingTag className="final-cta-heading">{heading || 'Get A Free In-Home Estimate'}</HeadingTag>
          <p>
            {subheading || 'Tell us about your project and we will bring samples, take measurements, and put together a clear written quote at no cost.'}
          </p>

          <div className="final-cta-info">
            <div><PhoneIcon size={18} /> <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></div>
            <div><PinIcon size={18} /> {SITE.address}</div>
            <div><ClockIcon size={18} /> {SITE.hoursDisplay}</div>
          </div>
        </div>

        <div className="final-cta-form">
          <SendAJobEmbed title="Request Free Estimate" subtitle="We respond within 1 business day." />
        </div>
      </div>
    </section>
  );
}
