import { SITE } from '@/lib/areas';

// Many AEO/FAQ answers are stored as plain strings (lib/locations.ts,
// lib/service-local-data.ts, lib/services.ts) and rendered via {text}, so a
// phone number written inside them is inert text, not a real link. That
// means it can never fire the site-wide phone_click tracking in
// components/AnalyticsListener.tsx, which only listens for real
// <a href="tel:..."> clicks. This wraps the phone number substring in an
// actual tel: link so those clicks get tracked like every other phone
// mention on the site. Returns the text unchanged if no phone number is found.
const PHONE_DIGITS = '(619) 777-4334';

export default function LinkifyPhone({ text }: { text: string }) {
  const idx = text.indexOf(PHONE_DIGITS);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <a href={`tel:${SITE.phoneRaw}`}>{PHONE_DIGITS}</a>
      {text.slice(idx + PHONE_DIGITS.length)}
    </>
  );
}
