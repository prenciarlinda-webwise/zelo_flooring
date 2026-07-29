import { PhoneIcon, PinIcon, ClockIcon } from './Icons';
import SendAJobEmbed from './SendAJobEmbed';
import { SITE } from '@/lib/areas';

export default function ContactCTA({ heading }: { heading?: string }) {
  return (
    <section className="contact-cta-section">
      <div className="container contact-cta-inner">
        <div className="contact-cta-text">
          <span className="eyebrow" style={{ color: '#E8B547' }}>Get Started Today</span>
          <h2>{heading || 'Ready for New Floors? Get a Free In-Home Estimate.'}</h2>
          <p>
            Tell us about your project and we&apos;ll bring samples, take measurements, and put together a clear quote - all at no cost and with zero pressure.
          </p>

          <div className="contact-cta-info">
            <div><PhoneIcon size={18} /> Call us at <strong><a href={`tel:${SITE.phoneRaw}`} style={{ color: 'white' }}>{SITE.phone}</a></strong></div>
            <div><PinIcon size={18} /> {SITE.address}</div>
            <div><ClockIcon size={18} /> {SITE.hoursDisplay}</div>
          </div>
        </div>

        <div className="contact-form">
          <SendAJobEmbed title="Request Free Estimate" subtitle="We respond to every request within 1 business day." />
        </div>
      </div>
    </section>
  );
}
