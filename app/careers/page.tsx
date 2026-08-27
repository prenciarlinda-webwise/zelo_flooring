import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CredentialsRibbon from '@/components/CredentialsRibbon';
import InstallerApplicationForm from '@/components/InstallerApplicationForm';
import { SITE } from '@/lib/areas';

export const metadata: Metadata = {
  title: 'Careers - Join the Zelo Flooring Installer Network',
  description: `Apply to work with ${SITE.name} as an independent flooring installer or subcontractor crew serving San Diego County. CSLB C-15 licensed, bonded, and insured.`,
  alternates: { canonical: `${SITE.url}/careers` },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Installer & Subcontractor Application"
        subtitle="Join Zelo Flooring's network of experienced flooring professionals serving residential and commercial projects throughout San Diego County."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      />

      <CredentialsRibbon />

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Work With Zelo Flooring</span>
            <h2>We&apos;re Looking for Reliable, Skilled Installers</h2>
            <p>
              We are looking for reliable, skilled installers and crews who take pride in quality
              workmanship, communication, professionalism, and clean job sites. Solo installers and
              subcontractor crews use the same application below.
            </p>
          </div>
          <InstallerApplicationForm />
        </div>
      </section>
    </>
  );
}
