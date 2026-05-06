import StickySidebar from './StickySidebar';
import { SITE } from '@/lib/areas';

type Props = {
  title: string;
  publishedDate: string;
  updatedDate: string;
  children: React.ReactNode;
};

export default function BlogLayout({ title, publishedDate, updatedDate, children }: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className="article-layout">
          <article className="article-main blog-article">
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
