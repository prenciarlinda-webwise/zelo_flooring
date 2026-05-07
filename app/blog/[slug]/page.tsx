import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import BlogLayout from '@/components/BlogLayout';
import ContactCTA from '@/components/ContactCTA';
import { PUBLISHED_BLOG_POSTS, getBlogPost } from '@/lib/blog-posts';
import { BLOG_FAQS } from '@/lib/content/blog/faqs';
import { SITE } from '@/lib/areas';

// Blog content imports (one per post)
import CostToInstallCarpetContent from '@/lib/content/blog/cost-to-install-carpet';
import BestCarpetForLivingRoomContent from '@/lib/content/blog/best-carpet-for-living-room';
import LvpVsHardwoodContent from '@/lib/content/blog/lvp-vs-hardwood';
import BestFlooringForPetsContent from '@/lib/content/blog/best-flooring-for-pets';
import PolyesterVsNylonCarpetContent from '@/lib/content/blog/polyester-vs-nylon-carpet';
import EngineeredVsSolidHardwoodContent from '@/lib/content/blog/engineered-vs-solid-hardwood';
import VinylPlankFlooringCostContent from '@/lib/content/blog/vinyl-plank-flooring-cost';

const CONTENT_MAP: Record<string, React.FC> = {
  'cost-to-install-carpet': CostToInstallCarpetContent,
  'best-carpet-for-living-room': BestCarpetForLivingRoomContent,
  'lvp-vs-hardwood': LvpVsHardwoodContent,
  'best-flooring-for-pets': BestFlooringForPetsContent,
  'polyester-vs-nylon-carpet': PolyesterVsNylonCarpetContent,
  'engineered-vs-solid-hardwood': EngineeredVsSolidHardwoodContent,
  'vinyl-plank-flooring-cost': VinylPlankFlooringCostContent,
};

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PUBLISHED_BLOG_POSTS.filter((p) => CONTENT_MAP[p.slug]).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const Content = CONTENT_MAP[slug];
  if (!Content) notFound();

  const articleImage = post.image
    ? (post.image.startsWith('http') ? post.image : `${SITE.url}${post.image}`)
    : `${SITE.url}/zelo-flooring-logo.png`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: [articleImage],
    author: { '@id': `${SITE.url}/#business` },
    publisher: { '@id': `${SITE.url}/#business` },
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/blog/${post.slug}` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
    ],
  };

  const postFaqs = BLOG_FAQS[slug];
  const faqSchema = postFaqs && postFaqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: postFaqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <PageHero
        title={post.title}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title },
        ]}
        includeBreadcrumbSchema={false}
      />

      <BlogLayout
        title={post.title}
        publishedDate={post.publishedDate}
        updatedDate={post.updatedDate}
      >
        <Content />
      </BlogLayout>

      <ContactCTA heading="Need Help With Your Flooring Project?" />
    </>
  );
}
