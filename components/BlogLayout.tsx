import StickySidebar from './StickySidebar';
import { SITE } from '@/lib/areas';

type Props = {
  title: string;
  publishedDate: string;
  updatedDate: string;
  image?: string;
  imageAlt?: string;
  children: React.ReactNode;
};

export default function BlogLayout({ title, publishedDate, updatedDate, image, imageAlt, children }: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className="article-layout">
          <article className="article-main blog-article">
            {image && (
              <figure className="blog-hero-figure" style={{ margin: '0 0 24px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={imageAlt || title}
                  style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }}
                />
              </figure>
            )}

            {/* BYLINE */}
            <div className="article-byline">
              <strong>Written by {SITE.name}</strong>
              <span>Licensed Flooring Contractors | CSLB Lic #{SITE.license} | {SITE.city}, {SITE.region}</span>
              <span>Published: {publishedDate} | Last Updated: {updatedDate}</span>
            </div>

            {/* ARTICLE BODY */}
            {children}
          </article>

          <StickySidebar />
        </div>
      </div>
    </section>
  );
}
