import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import { SITE } from '@/lib/areas';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: `Terms and conditions for using ${SITE.name} services and website. Estimates, deposits, scheduling, warranties, and payment terms for flooring installation in San Diego.`,
  alternates: { canonical: `${SITE.url}/terms-and-conditions` },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = 'May 6, 2026';

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        subtitle={`The terms that govern use of the ${SITE.name} website and our flooring services.`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms and Conditions' }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p style={{ color: 'var(--gray-500)', marginBottom: 32 }}>
            <strong>Effective date:</strong> {EFFECTIVE_DATE}
          </p>

          <p>
            These Terms and Conditions (the &quot;Terms&quot;) govern your use of {SITE.url} and the flooring sales and installation services provided by {SITE.name} (CSLB Lic #{SITE.license}). By using our website or hiring us for a project, you agree to these Terms.
          </p>

          <h2>Estimates and quotes</h2>
          <ul>
            <li>In-home estimates are free for projects within our San Diego County service area.</li>
            <li>Written estimates are valid for 30 days from the issue date. Material pricing may change after that period due to supplier increases.</li>
            <li>An estimate is not a binding contract. A signed written agreement is required to schedule installation.</li>
            <li>Estimates are based on conditions visible at the time of measurement. Hidden subfloor damage, asbestos, mold, or unforeseen conditions discovered during demolition may require a written change order before work continues.</li>
          </ul>

          <h2>Contracts, deposits, and payment</h2>
          <ul>
            <li>All projects require a signed contract per California contractor law (Business and Professions Code §7159).</li>
            <li>Deposits will not exceed the lesser of 10% of the contract price or $1,000, in compliance with CSLB rules.</li>
            <li>Progress payments are tied to project milestones outlined in the contract.</li>
            <li>Final payment is due upon substantial completion and your acceptance of the finished work.</li>
            <li>We accept cash, check, ACH, and major credit cards. Card payments may be subject to a processing surcharge disclosed before payment.</li>
            <li>Past-due balances accrue interest at the lesser of 1.5% per month or the maximum rate allowed by California law.</li>
          </ul>

          <h2>Scheduling, access, and changes</h2>
          <ul>
            <li>Install dates are confirmed in writing once materials are in stock and a deposit is received.</li>
            <li>You agree to provide reasonable site access, working power and water, and a clear work area on install days.</li>
            <li>Furniture moving, appliance disconnection, and disposal of existing flooring are included only if listed on the contract.</li>
            <li>Customer-requested rescheduling within 48 hours of the start date may incur a fee to cover crew wages and material restocking.</li>
            <li>Change orders must be in writing and signed by both parties before related work begins.</li>
          </ul>

          <h2>Materials</h2>
          <ul>
            <li>Special-order materials are non-returnable and non-refundable once the order is placed with the supplier.</li>
            <li>Slight variations in color, grain, shade, and texture are normal in natural and manufactured flooring products. Samples are representative, not exact.</li>
            <li>You are responsible for selecting materials suitable for your environment (moisture, sunlight, pet traffic, etc.). We will provide guidance, but the final choice is yours.</li>
            <li>If you supply your own materials, our workmanship warranty still applies but the manufacturer warranty depends on proper product selection and is your responsibility.</li>
          </ul>

          <h2>Subfloor and site conditions</h2>
          <p>
            Manufacturer specifications require a flat, dry, structurally sound subfloor. We will inspect the subfloor before installation. If conditions require remediation (leveling compound, moisture barrier, plywood replacement, asbestos abatement, mold remediation), we will issue a written change order before proceeding. Remediation by other trades may be required and is not included in our estimate unless specifically listed.
          </p>

          <h2>Warranty</h2>
          <ul>
            <li>{SITE.name} provides a workmanship warranty on installation labor as stated in your signed contract.</li>
            <li>Materials are covered by the manufacturer warranty. We will help you file a manufacturer claim if a product defect arises.</li>
            <li>Warranty coverage is void if installation specifications were modified at customer request, if materials were customer-supplied without our review, if the floor is damaged by abuse, water intrusion, settling, or improper maintenance, or if a third party performs subsequent repairs.</li>
            <li>Warranty service requires written notice within the coverage period and reasonable access for inspection.</li>
          </ul>

          <h2>Cancellation and right to rescind</h2>
          <p>
            California Home Solicitation Sales Act gives consumers the right to cancel a home solicitation contract within three (3) business days of signing without penalty. Cancellation must be in writing and delivered to {SITE.name}. After the rescission period, cancellation may forfeit the deposit and any non-refundable special-order materials.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, {SITE.name} is not liable for indirect, incidental, special, or consequential damages, including lost use of the property or income. Our total liability for any claim arising out of a project is limited to the contract price for that project. Nothing in these Terms limits liability for gross negligence, fraud, or any liability that cannot be limited under California law.
          </p>

          <h2>Website use</h2>
          <ul>
            <li>Content on this website (text, images, layout, code) is owned by {SITE.name} or our licensors and is provided for informational purposes.</li>
            <li>You may not copy, scrape, republish, or use website content for commercial purposes without written permission.</li>
            <li>Pricing, availability, lead times, and product information on this site are subject to change without notice. The contract you sign controls in case of conflict.</li>
            <li>Outbound links to third-party sites are provided as a convenience and do not constitute endorsement.</li>
          </ul>

          <h2>Privacy</h2>
          <p>
            Your use of this website is also governed by our <a href="/privacy-policy">Privacy Policy</a>.
          </p>

          <h2>Dispute resolution</h2>
          <p>
            Most issues can be resolved by talking with us first. Please contact us at <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a> or <a href={`mailto:${SITE.email}`}>{SITE.email}</a> before pursuing other remedies. Unresolved disputes will be governed by California law and venue will be in San Diego County, California. Customers retain all rights to file a complaint with the Contractors State License Board (CSLB) at any time.
          </p>

          <h2>Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. The effective date at the top reflects the most recent revision. Material changes will be posted on this page. The Terms in effect when you sign your contract govern that project.
          </p>

          <h2>Contact</h2>
          <ul>
            <li>Phone: <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></li>
            <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li>Address: {SITE.address}</li>
            <li>License: CSLB #{SITE.license}</li>
          </ul>
        </div>
      </section>

      <ContactCTA heading="Questions Before You Sign?" />
    </>
  );
}
