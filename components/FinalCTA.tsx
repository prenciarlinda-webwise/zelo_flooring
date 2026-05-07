'use client';

import { FormEvent, useState } from 'react';
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from './Icons';
import { SITE, SERVICE_AREAS } from '@/lib/areas';
import { track } from '@/lib/track';


type Props = {
  heading?: string;
  subheading?: string;
  defaultProjectType?: string;
  headingAs?: 'h2' | 'h3';
};

const PROJECT_TYPES = [
  'Carpet',
  'Luxury Vinyl Plank',
  'Hardwood',
  'Laminate',
  'Tile',
  'Cork',
  'Rubber',
  'VCT (Commercial)',
  'Refinishing',
  'Not sure yet',
];

export default function FinalCTA({ heading, subheading, defaultProjectType, headingAs = 'h2' }: Props) {
  const HeadingTag = headingAs;
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errored, setErrored] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setErrored(false);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xqenljvr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      track('lead_form_submit', {
        form_id: 'final_cta',
        project_type: formData.get('projectType'),
        neighborhood: formData.get('neighborhood'),
      });
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error('Form submission failed:', err);
      track('lead_form_error', {
        form_id: 'final_cta',
        error_message: err instanceof Error ? err.message : String(err),
      });
      setErrored(true);
    } finally {
      setSending(false);
    }
  };

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
            <div><MailIcon size={18} /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
            <div><PinIcon size={18} /> {SITE.address}</div>
            <div><ClockIcon size={18} /> {SITE.hoursDisplay}</div>
          </div>
        </div>

        <form
          className="final-cta-form"
          method="post"
          action="https://formspree.io/f/xqenljvr"
          onSubmit={handleSubmit}
        >
          <p className="final-cta-form-title">Request Free Estimate</p>
          <p className="final-cta-form-sub">We respond within 1 business day.</p>

          <input type="hidden" name="_subject" value="New Free Estimate Request - Zelo Flooring" />

          <input type="text" name="name" placeholder="Your Name *" required autoComplete="name" />
          <input type="tel" name="phone" placeholder="Phone *" required autoComplete="tel" />
          <input type="email" name="email" placeholder="Email *" required autoComplete="email" />

          <select name="neighborhood" required defaultValue="">
            <option value="" disabled>Neighborhood / City *</option>
            {SERVICE_AREAS.map((a) => (
              <option key={a.name} value={a.name}>{a.name}</option>
            ))}
            <option value="other">Other San Diego County</option>
          </select>

          <select name="projectType" required defaultValue={defaultProjectType || ''}>
            <option value="" disabled>Project Type / Sq Ft *</option>
            {PROJECT_TYPES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={sending}>
            {submitted ? '✓ Thanks, we will be in touch soon.' : sending ? 'Sending...' : 'Get My Free Estimate'}
          </button>
          {errored && (
            <p className="final-cta-form-error" role="alert">
              Something went wrong sending your request. Please call {SITE.phone} or try again.
            </p>
          )}
          <p className="final-cta-form-trust">Your info is private and never shared.</p>
        </form>
      </div>
    </section>
  );
}
