// Posts a form to Formspree using their documented AJAX pattern (FormData body
// + Accept: application/json). On failure it parses Formspree's JSON error body
// so the thrown message says WHY (e.g. reCAPTCHA verification failed, field
// required) instead of a bare status code.

// This form ID predates the 2026-07-31 SendAJob switch, when it (and a since-rotated
// sibling ID) received the hero/contact/final-CTA quote forms before those moved to
// SendAJob's hosted embed (see SendAJobEmbed.tsx). It's been dormant since, with no
// submissions in that window. Reused here (2026-08-26) for the Careers and Professional
// Network forms so those submissions land in their own inbox, separate from the
// coupon-claim form (mbdbaqqy) CouponsBlock still posts to. CONFIRM in the Formspree
// dashboard that this form is still active on the account, and that its plan supports
// file attachments (the Careers form uploads photos/license docs), before relying on it
// - test with one real submission of each form after deploy.
export const APPLICATIONS_FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqenljvr';

export async function postToFormspree(endpoint: string, formData: FormData): Promise<void> {
  const res = await fetch(endpoint, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  });

  if (res.ok) return;

  let message = `Formspree responded ${res.status}`;
  try {
    const data = await res.json();
    if (Array.isArray(data?.errors) && data.errors.length) {
      const parts = data.errors
        .map((e: { message?: string; field?: string }) => (e.field ? `${e.field}: ${e.message}` : e.message))
        .filter(Boolean);
      if (parts.length) message = parts.join('; ');
    } else if (typeof data?.error === 'string') {
      message = data.error;
    }
  } catch {
    // Error body was not JSON; keep the status-code message.
  }

  throw new Error(message);
}
