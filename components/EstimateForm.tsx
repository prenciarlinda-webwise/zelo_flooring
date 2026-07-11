'use client';

import { FormEvent, useRef, useState } from 'react';
import Recaptcha, { RecaptchaHandle } from './Recaptcha';
import FormSuccess from './FormSuccess';
import { SITE, SERVICE_AREAS } from '@/lib/areas';
import { postToFormspree } from '@/lib/formspree';
import { track } from '@/lib/track';

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

type Props = {
  // Distinguishes which surface submitted the lead in GA4 (lead_form_hero, estimate_modal, etc.)
  formId?: string;
  defaultProjectType?: string;
  title?: string;
  subtitle?: string;
  // When rendered inside a container that already provides the card look (e.g. the modal),
  // skip the form's own background/shadow/border so it doesn't double-box.
  plain?: boolean;
};

// The actual quote-request form: fields, reCAPTCHA, Formspree submit, success/error states.
// Shared by LeadFormHero (the /free-estimate page) and EstimateModal (the popup triggered from
// "Request a free in-home estimate" links everywhere else) so the submission logic lives once.
export default function EstimateForm({ formId = 'lead_form_hero', defaultProjectType, title, subtitle, plain }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errored, setErrored] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [submittedArea, setSubmittedArea] = useState('');
  const captchaRef = useRef<RecaptchaHandle>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrored(false);
    setCaptchaError(false);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const captchaToken = captchaRef.current?.getResponse() || '';
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    // Set the canonical field name explicitly: with multiple widgets on a page,
    // reCAPTCHA may name the auto-injected field g-recaptcha-response-1, etc.
    formData.set('g-recaptcha-response', captchaToken);

    setSending(true);
    try {
      await postToFormspree('https://formspree.io/f/mbdbaqqy', formData);
      track('lead_form_submit', {
        form_id: formId,
        project_type: formData.get('projectType'),
        neighborhood: formData.get('neighborhood'),
      });
      setSubmittedArea(String(formData.get('neighborhood') || ''));
      setSubmitted(true);
      form.reset();
      captchaRef.current?.reset();
    } catch (err) {
      console.error('Form submission failed:', err);
      track('lead_form_error', {
        form_id: formId,
        error_message: err instanceof Error ? err.message : String(err),
      });
      setErrored(true);
      captchaRef.current?.reset();
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return <FormSuccess area={submittedArea} />;
  }

  return (
    <form className={plain ? 'estimate-form-plain' : 'lead-hero-form'} method="post" action="https://formspree.io/f/mbdbaqqy" onSubmit={handleSubmit}>
      {title !== '' && <p className="lead-hero-form-title">{title || 'Get a Free Quote'}</p>}
      {subtitle !== '' && <p className="lead-hero-form-sub">{subtitle || 'Free in-home estimate. We respond within 1 business day.'}</p>}

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

      <Recaptcha ref={captchaRef} className="form-recaptcha" />
      {captchaError && (
        <p className="lead-hero-form-error" role="alert">
          Please confirm you are not a robot before submitting.
        </p>
      )}

      <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={sending}>
        {sending ? 'Sending...' : 'Get My Free Quote'}
      </button>
      {errored && (
        <p className="lead-hero-form-error" role="alert">
          Something went wrong sending your request. Please call {SITE.phone} or try again.
        </p>
      )}
      <p className="lead-hero-form-trust">Your info is private and never shared.</p>
    </form>
  );
}
