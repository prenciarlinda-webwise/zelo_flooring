// Google reCAPTCHA v2 ("I'm not a robot" checkbox) loader.
// The site key is provided by Formspree for the form's reCAPTCHA setting;
// Formspree verifies the token server-side, so no secret key lives here.

export const RECAPTCHA_SITE_KEY = '6LegjfssAAAAAOvge8ffKM1Yyajv0ghsXV_lQS3t';

declare global {
  interface Window {
    grecaptcha?: {
      render: (el: HTMLElement, opts: { sitekey: string }) => number;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
    };
  }
}

let loadPromise: Promise<void> | null = null;

// Injects the reCAPTCHA api.js once and resolves when grecaptcha.render is ready.
// Multiple widgets on one page are supported via explicit render (grecaptcha.render).
export function loadRecaptcha(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.grecaptcha && typeof window.grecaptcha.render === 'function') return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise<void>((resolve) => {
    if (!document.querySelector('script[data-recaptcha]')) {
      const s = document.createElement('script');
      s.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      s.async = true;
      s.defer = true;
      s.setAttribute('data-recaptcha', 'true');
      document.head.appendChild(s);
    }
    const check = () => {
      if (window.grecaptcha && typeof window.grecaptcha.render === 'function') resolve();
      else setTimeout(check, 100);
    };
    check();
  });

  return loadPromise;
}
