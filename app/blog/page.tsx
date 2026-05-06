import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import { ArrowIcon } from '@/components/Icons';
import { SITE } from '@/lib/areas';
import { PUBLISHED_BLOG_POSTS } from '@/lib/blog-posts';

const publishedPosts = PUBLISHED_BLOG_POSTS;

export const metadata: Metadata = {
  title: 'Flooring Tips and Guides',
  description: `Flooring tips, cost guides, and project advice from ${SITE.name} in San Diego. Learn about carpet, vinyl, hardwood, laminate and more.`,
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Flooring Tips & Guides"
        subtitle="Practical advice on choosing, installing, and maintaining your floors. Written by licensed San Diego flooring contractors."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {publishedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="service-card service-card-link-wrap">
                <div className="service-card-body">
                  <span className="eyebrow" style={{ fontSize: '0.72rem', marginBottom: 8 }}>
                    {post.publishedDate}
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="service-card-link">
                    Read Article <ArrowIcon size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA heading="Have a Flooring Question? We Are Happy to Help." />
    </>
  );
}
