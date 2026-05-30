import Link from 'next/link';
import { ServiceIcon, ArrowIcon, PinIcon } from './Icons';
import { SERVICES, type Service } from '@/lib/services';
import { LOCATIONS } from '@/lib/locations';

type BlogCard = { title: string; slug: string; excerpt: string };

export function RelatedServices({ exclude, limit = 4 }: { exclude?: string; limit?: number }) {
  const items = SERVICES.filter((s) => s.slug !== exclude).slice(0, limit);
  return (
    <div className="related-section">
      <h2>Maybe You Are Interested In</h2>
      <div className="related-grid">
        {items.map((s) => (
          <Link key={s.slug} href={`/${s.slug}`} className="related-card">
            <div className="related-card-icon">
              <ServiceIcon name={s.iconKey} size={22} />
            </div>
            <div>
              <strong>{s.shortName} Flooring</strong>
              <span>{s.tagline}</span>
            </div>
            <ArrowIcon size={14} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function RelatedLocations() {
  return (
    <section className="section section-cream">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Service Areas</span>
          <h2>Flooring Services Near You</h2>
          <p>Zelo Flooring installs across San Diego County. Find flooring services in your city.</p>
        </div>
        <div className="area-links-grid">
          {LOCATIONS.map((l) => (
            <Link key={l.slug} href={`/${l.slug}`} className="area-link-card">
              <PinIcon size={16} />
              <span>Flooring in {l.city}</span>
            </Link>
          ))}
          <Link href="/service-areas" className="area-link-card">
            <PinIcon size={16} />
            <span>All Service Areas</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function RelatedBlogPosts({ posts }: { posts: BlogCard[] }) {
  if (!posts.length) return null;
  return (
    <div className="related-section">
      <h2>You Might Also Want to Read</h2>
      <div className="related-grid">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="related-card">
            <div>
              <strong>{p.title}</strong>
              <span>{p.excerpt}</span>
            </div>
            <ArrowIcon size={14} />
          </Link>
        ))}
      </div>
    </div>
  );
}
