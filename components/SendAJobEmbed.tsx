'use client';

import { useEffect, useState } from 'react';
import { SITE } from '@/lib/areas';

type Props = {
  title?: string;
  subtitle?: string;
};

const SENDAJOB_EMBED_SRC =
  'https://st.sendajob.com/MY/servicerequest/22f23e0f2434c35922fc6755b6bab6ea00b37747_f.html';

// SendAJob's hosted service-request form, iframed in. This replaced the site's own
// Formspree-backed quote forms (hero, popup modal, contact page, final CTA) so leads
// flow into SendAJob instead. The coupon-claim modal (CouponsBlock) still uses the old
// Formspree form on purpose, it needs a hidden "which offer" field SendAJob's generic
// request form has no place for.
//
// The iframe is cross-origin, so we can't read SendAJob's own submit success/error
// state (no postMessage bridge on their end as of 2026-07-31). SendAJob's embed does
// show its own in-box confirmation on submit, but their hosted HTML currently throws a
// console error (a stale Cloudflare bot-challenge script 403ing on their st.sendajob.com
// host) that may keep that confirmation from firing reliably. Until SendAJob support
// fixes that, this fallback line is the only "did it send" signal we can guarantee.
//
// The iframe's src is NOT set on mount. PageSpeed (2026-08-28) traced ~2s of main-thread
// time and ~1MB of "unused JS" on the homepage to a reCAPTCHA widget loading inside this
// embed, on every page load, even though this component renders above the fold on every
// page (hero, popup, final CTA) - it's SendAJob's own reCAPTCHA, not ours (our own
// Recaptcha.tsx already defers until first interaction; this is the one embed we don't
// control the internals of). Deferring the src until the browser is idle (capped at 1.2s
// so it never waits indefinitely on a busy main thread) moves that cost out of the
// critical load window without changing what a real visitor sees, they still get the form
// well before they'd realistically have read the hero copy and reached for it. The
// reserved height keeps this from causing any layout shift while it loads.
export default function SendAJobEmbed({ title, subtitle }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 1200 });
      return () => {
        (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id);
      };
    }
    const t = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {title && <p className="lead-hero-form-title">{title}</p>}
      {subtitle && <p className="lead-hero-form-sub">{subtitle}</p>}
      {ready ? (
        <iframe
          src={SENDAJOB_EMBED_SRC}
          title="Request a free flooring estimate"
          width="100%"
          height={751}
          scrolling="no"
          style={{ border: 'none', display: 'block', maxWidth: '100%' }}
        />
      ) : (
        <div style={{ height: 751 }} aria-hidden="true" />
      )}
      <p className="sendajob-fallback-note">
        Didn&apos;t see a confirmation after submitting? Call us at{' '}
        <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a> and we&apos;ll get your estimate started right away.
      </p>
    </>
  );
}
