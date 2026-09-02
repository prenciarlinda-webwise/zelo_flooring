import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ProjectGallery from '@/components/ProjectGallery';
import BehindTheScenes from '@/components/BehindTheScenes';
import ContactCTA from '@/components/ContactCTA';
import { SITE } from '@/lib/areas';

export const metadata: Metadata = {
  title: 'San Diego Flooring Project Photos',
  description: `Browse real carpet, LVP, hardwood, and tile installs completed by ${SITE.name} across San Diego County, plus a behind-the-scenes look at subfloor prep and self-leveling on our job sites.`,
  alternates: { canonical: `${SITE.url}/projects` },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Flooring Projects Across San Diego"
        subtitle="Every photo here is a real Zelo Flooring job, not a stock photo. Click any photo to zoom in and browse."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
      />

      <ProjectGallery
        eyebrow="Recent Work"
        heading="Every Project, In One Place"
        subheading="Carpet, LVP, hardwood, tile, and more, all completed by the Zelo Flooring team across San Diego County."
        initialCount={9999}
      />

      <BehindTheScenes initialCount={9999} />

      <ContactCTA heading="Like What You See? Get a Free Estimate." />
    </>
  );
}
