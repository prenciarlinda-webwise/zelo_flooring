'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { PhoneIcon, ArrowIcon } from './Icons';
import { SITE, SERVICE_AREAS } from '@/lib/areas';

type Props = {
  h1: string;
  valueProp: string;
  trustBullets: string[];
  image: string; // hero photo url
  imageAlt: string;
  defaultProjectType?: string;
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

export default function LeadFormHero({ h1, valueProp, trustBullets, image, imageAlt, defaultProjectType }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      await fetch('https://formspree.io/f/mykopznr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
    } catch {
      // swallow, show success either way so the visitor isn't blocked
    } finally {
      setSubmitted(true);
      form.reset();
      setSending(false);
      setTimeout(() => setSubmitted(false), 8000);
    }
  };

  return (
    <section className="lead-hero">
      <div
        className="lead-hero-photo"
        style={{ backgroundImage: `url('${image}')` }}
        role="img"
        aria-label={imageAlt}
      />
      <div className="lead-hero-overlay" aria-hidden="true" />

      <div className="container lead-hero-grid">
        <div className="lead-hero-text">
          <p className="lead-hero-eyebrow">San Diego, CA · Licensed CSLB #{SITE.license}</p>
          <h1 className="lead-hero-h1">{h1}</h1>
          <p className="lead-hero-value">{valueProp}</p>

          <div className="lead-hero-cta">
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-primary btn-lg">
              <PhoneIcon size={18} /> Call {SITE.phone}
            </a>
            <Link href="#quote-form" className="btn btn-ghost-light btn-lg">
              Get Free Quote <ArrowIcon size={16} />
            </Link>
          </div>

          <ul className="lead-hero-trust">
            {trustBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="lead-hero-form-wrap" id="quote-form">
          <form className="lead-hero-form" onSubmit={handleSubmit}>
            <p className="lead-hero-form-title">Get a Free Quote</p>
            <p className="lead-hero-form-sub">Free in-home estimate. We respond within 1 business day.</p>

            <input type="hidden" name="_subject" value="New Free Quote Request - Zelo Flooring" />
            <input type="hidden" name="_template" value="table" />

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
              {submitted ? '✓ Thanks, we will be in touch soon.' : sending ? 'Sending...' : 'Get My Free Quote'}
            </button>
            <p className="lead-hero-form-trust">🔒 Your info is private and never shared.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
