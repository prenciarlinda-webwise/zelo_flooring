import Link from 'next/link';
import { ServiceIcon, ArrowIcon } from './Icons';
import { SERVICES, type Service } from '@/lib/services';

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
