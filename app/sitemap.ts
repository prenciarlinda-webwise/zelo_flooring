import type { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/services';
import { LOCATIONS } from '@/lib/locations';
import { PUBLISHED_BLOG_POSTS } from '@/lib/blog-posts';
import { SITE } from '@/lib/areas';

const parseDate = (s: string) => {
  const d = new Date(s);
  return isNaN(d.getTime()) ? new Date(SITE.lastUpdated) : d;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date(SITE.lastUpdated);

  const staticRoutes = [
    '',
    '/about-us',
    '/services',
    '/service-areas',
    '/contact',
    '/free-estimate',
    '/san-diego-flooring-faqs',
    '/blog',
    '/privacy-policy',
    '/terms-and-conditions',
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: siteLastModified,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${SITE.url}/${s.slug}`,
    lastModified: new Date(s.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const locationRoutes = LOCATIONS.map((l) => ({
    url: `${SITE.url}/${l.slug}`,
    lastModified: siteLastModified,
    changeFrequency: 'monthly' as const,
    priority: l.type === 'main' ? 0.95 : 0.85,
  }));

  const blogRoutes = PUBLISHED_BLOG_POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: parseDate(p.dateModifiedISO || p.datePublishedISO),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
