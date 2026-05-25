// Posts a form to Formspree using their documented AJAX pattern (FormData body
// + Accept: application/json). On failure it parses Formspree's JSON error body
// so the thrown message says WHY (e.g. reCAPTCHA verification failed, field
// required) instead of a bare status code.

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
