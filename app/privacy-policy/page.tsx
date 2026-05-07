import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import { SITE } from '@/lib/areas';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${SITE.name}. How we collect, use, store, and protect customer information submitted through our website, phone, and in-home estimates.`,
  alternates: { canonical: `${SITE.url}/privacy-policy` },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = 'May 6, 2026';

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle={`How ${SITE.name} collects, uses, and protects your information.`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p style={{ color: 'var(--gray-500)', marginBottom: 32 }}>
            <strong>Effective date:</strong> {EFFECTIVE_DATE}
          </p>

          <p>
            {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates {SITE.url} and provides flooring sales and installation services in {SITE.city}, {SITE.region}. This Privacy Policy explains what information we collect from visitors and customers, how we use it, who we share it with, and the choices you have.
          </p>

          <h2>Information we collect</h2>
          <p>We collect the following categories of information:</p>
          <ul>
            <li><strong>Contact information you give us:</strong> name, phone number, email address, project address or service neighborhood, and any details you include in a quote request, contact form, or call.</li>
            <li><strong>Project information:</strong> square footage, room types, existing flooring, preferred materials, target install date, and photos you choose to share.</li>
            <li><strong>Payment information:</strong> for booked jobs, we collect billing details needed to process deposits and final payment. Card data is handled by our payment processor; we do not store full card numbers on our servers.</li>
            <li><strong>Website usage data:</strong> pages viewed, referring source, device and browser type, approximate location (city/region from IP), and interactions with forms or call buttons. Collected through cookies and analytics tools such as Google Tag Manager and Google Analytics.</li>
            <li><strong>Communications:</strong> emails, text messages, and call records related to your inquiry or active project.</li>
          </ul>

          <h2>How we use your information</h2>
          <ul>
            <li>Respond to quote requests and schedule in-home estimates.</li>
            <li>Prepare written estimates, contracts, and project schedules.</li>
            <li>Order materials sized to your project and coordinate installation crews.</li>
            <li>Send appointment reminders, install-day updates, and post-install care instructions.</li>
            <li>Process payments and issue receipts or invoices.</li>
            <li>Improve our website, services, and marketing based on aggregated usage trends.</li>
            <li>Comply with California contractor licensing rules, tax law, and warranty obligations.</li>
          </ul>

          <h2>How we share your information</h2>
          <p>We do not sell your personal information. We share it only with parties who need it to deliver the service you requested:</p>
          <ul>
            <li><strong>Installation crews and subcontractors</strong> we assign to your job receive your name, address, contact info, and project scope.</li>
            <li><strong>Suppliers and manufacturers</strong> receive product orders tied to your job. They do not receive your contact information unless required for warranty registration.</li>
            <li><strong>Service providers</strong> who help us operate the business (payment processor, hosting, email, analytics, scheduling, accounting) receive only the data they need.</li>
            <li><strong>Legal and regulatory bodies</strong> when required by California law, the CSLB, a court order, or to protect the safety and rights of customers, crew, or the public.</li>
          </ul>

          <h2>Cookies and tracking</h2>
          <p>
            Our website uses cookies and similar technologies to remember your preferences, measure traffic, and run marketing campaigns. You can disable cookies in your browser settings. Some site features (such as form submissions) may not work properly if cookies are blocked.
          </p>

          <h2>Text messages and calls</h2>
          <p>
            If you provide a phone number, you agree we may contact you about your inquiry, estimate, or active project by phone call or SMS. Standard message and data rates may apply. You can opt out of marketing texts at any time by replying STOP. Transactional messages (appointment confirmations, install-day updates) will continue while your project is active.
          </p>

          <h2>Data retention</h2>
          <p>
            We keep customer records for as long as needed to honor warranties, resolve disputes, and meet tax and licensing recordkeeping requirements (typically four to seven years after job completion). Quote requests that do not become projects are retained for up to two years.
          </p>

          <h2>Your choices and rights</h2>
          <ul>
            <li>Request a copy of the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your information, subject to recordkeeping obligations.</li>
            <li>Opt out of marketing emails using the unsubscribe link in any email we send.</li>
            <li>California residents have additional rights under the CCPA/CPRA, including the right to know what we collect and the right to opt out of any sale or sharing of personal information (we do not sell or share for cross-context behavioral advertising).</li>
          </ul>
          <p>
            To make a request, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>. We may need to verify your identity before responding.
          </p>

          <h2>Children</h2>
          <p>
            Our website and services are not directed to children under 13. We do not knowingly collect personal information from children.
          </p>

          <h2>Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards to protect your information. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The effective date at the top of this page reflects the most recent revision. Material changes will be posted on this page.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about this policy or your information? Reach out to {SITE.name}.
          </p>
          <ul>
            <li>Phone: <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></li>
            <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li>Address: {SITE.address}</li>
          </ul>
        </div>
      </section>

      <ContactCTA heading="Have a Question About Your Information?" />
    </>
  );
}
