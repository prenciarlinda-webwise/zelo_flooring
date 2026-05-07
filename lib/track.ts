// Lightweight dataLayer push helper. Safe on the server (no-op).
// All custom events on the site flow through this so the GTM event catalog
// stays consistent.

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(event: string, props: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    page_path: window.location.pathname,
    ...props,
  });
}
