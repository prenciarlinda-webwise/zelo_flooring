'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
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
const Recaptcha = forwardRef<RecaptchaHandle, Props>(function Recaptcha({ className }, ref) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
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
  }, []);

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
