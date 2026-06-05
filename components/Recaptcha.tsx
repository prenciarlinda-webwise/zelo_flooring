'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { RECAPTCHA_SITE_KEY, loadRecaptcha } from '@/lib/recaptcha';

export type RecaptchaHandle = {
  // Returns the current token, or '' if the user has not solved the challenge.
  getResponse: () => string;
  // Clears the widget (tokens are single-use, so reset after each submit attempt).
  reset: () => void;
};

type Props = { className?: string };

// Renders a single reCAPTCHA v2 checkbox. Safe to mount more than one per page
// (explicit render assigns each its own widget id, tracked in widgetIdRef).
//
// The reCAPTCHA script is ~1MB of render-blocking third-party JS, so we DO NOT
// load it on mount. Instead we wait for the first real user interaction
// (pointer/key/touch/scroll). A visitor always interacts before submitting a
// form, so the widget is ready in time, while bots and bounce/Lighthouse loads
// never pay the cost. This keeps it off the initial critical path on mobile.
const Recaptcha = forwardRef<RecaptchaHandle, Props>(function Recaptcha({ className }, ref) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const [armed, setArmed] = useState(false);

  // Arm on the first user gesture, then stop listening.
  useEffect(() => {
    if (armed) return;
    const arm = () => setArmed(true);
    const events = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const;
    events.forEach((e) => window.addEventListener(e, arm, { once: true, passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, arm));
  }, [armed]);

  // Once armed, load the script and render the widget.
  useEffect(() => {
    if (!armed) return;
    let cancelled = false;
    loadRecaptcha().then(() => {
      if (cancelled || !containerRef.current || widgetIdRef.current !== null || !window.grecaptcha) return;
      try {
        widgetIdRef.current = window.grecaptcha.render(containerRef.current, { sitekey: RECAPTCHA_SITE_KEY });
      } catch {
        // Already rendered (e.g. fast remount) — ignore.
      }
    });
    return () => {
      cancelled = true;
    };
  }, [armed]);

  useImperativeHandle(ref, () => ({
    getResponse: () =>
      widgetIdRef.current !== null && window.grecaptcha ? window.grecaptcha.getResponse(widgetIdRef.current) : '',
    reset: () => {
      if (widgetIdRef.current !== null && window.grecaptcha) window.grecaptcha.reset(widgetIdRef.current);
    },
  }));

  return <div className={className} ref={containerRef} />;
});

export default Recaptcha;
