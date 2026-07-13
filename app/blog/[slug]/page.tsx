import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import BlogLayout from '@/components/BlogLayout';
import ContactCTA from '@/components/ContactCTA';
import { RelatedLocations } from '@/components/RelatedCards';
import { PUBLISHED_BLOG_POSTS, getBlogPost, isBlogPostLive } from '@/lib/blog-posts';
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
import LaminateOverExistingFloorsContent from '@/lib/content/blog/laminate-over-existing-floors';
import LaminateFlooringThicknessContent from '@/lib/content/blog/laminate-flooring-thickness';
import HowLongDoesHardwoodRefinishingTakeContent from '@/lib/content/blog/how-long-does-hardwood-refinishing-take';
import BestFlooringForSanDiegoHomesContent from '@/lib/content/blog/best-flooring-for-san-diego-homes';
import VinylVsLaminateFlooringContent from '@/lib/content/blog/vinyl-vs-laminate-flooring';
import HowToInstallVinylPlankFlooringContent from '@/lib/content/blog/how-to-install-vinyl-plank-flooring';
import LvpVsEngineeredHardwoodContent from '@/lib/content/blog/lvp-vs-engineered-hardwood';
import TypesOfHardwoodFlooringContent from '@/lib/content/blog/types-of-hardwood-flooring';
import LowPileVsHighPileCarpetContent from '@/lib/content/blog/low-pile-vs-high-pile-carpet';
import HowToCleanLuxuryVinylPlankFlooringContent from '@/lib/content/blog/how-to-clean-luxury-vinyl-plank-flooring';
import TileVsVinylFlooringContent from '@/lib/content/blog/tile-vs-vinyl-flooring';
import FlooringServicesGuideContent from '@/lib/content/blog/flooring-services-guide';
import HowToChooseAFlooringCompanyContent from '@/lib/content/blog/how-to-choose-a-flooring-company';
import IsFreeFlooringInstallationRealContent from '@/lib/content/blog/is-free-flooring-installation-real';
import WallToWallCarpetContent from '@/lib/content/blog/wall-to-wall-carpet';
import FlooringDesignIdeasByRoomContent from '@/lib/content/blog/flooring-design-ideas-by-room';
import WoodLookTileVsHardwoodContent from '@/lib/content/blog/wood-look-tile-vs-hardwood';
import BathroomFlooringInstallationContent from '@/lib/content/blog/bathroom-flooring-installation';
import BestFlooringForNewConstructionContent from '@/lib/content/blog/best-flooring-for-new-construction';
import BestFlooringForSchoolsContent from '@/lib/content/blog/best-flooring-for-schools';
import BestFlooringForCraftRoomContent from '@/lib/content/blog/best-flooring-for-craft-room';
import BathroomFloorTileIdeasContent from '@/lib/content/blog/bathroom-floor-tile-ideas';
import BestTileForOutdoorPatiosAndPoolsContent from '@/lib/content/blog/best-tile-for-outdoor-patios-and-pools';
import CanLaminateFlooringBeRepairedContent from '@/lib/content/blog/can-laminate-flooring-be-repaired';
import CarpetPaddingGuideContent from '@/lib/content/blog/carpet-padding-guide';
import CorkFlooringMaintenanceAndCleaningContent from '@/lib/content/blog/cork-flooring-maintenance-and-cleaning';
import FlooringForRentalPropertiesContent from '@/lib/content/blog/flooring-for-rental-properties';
import HardwoodFloorWaterDamageContent from '@/lib/content/blog/hardwood-floor-water-damage';
import HowMuchDoesHardwoodFlooringCostContent from '@/lib/content/blog/how-much-does-hardwood-flooring-cost';
import HowMuchDoesLaminateFlooringCostContent from '@/lib/content/blog/how-much-does-laminate-flooring-cost';
import HowMuchDoesTileFlooringCostContent from '@/lib/content/blog/how-much-does-tile-flooring-cost';
import HowToCleanAndResealGroutLinesContent from '@/lib/content/blog/how-to-clean-and-reseal-grout-lines';
import HowToCleanHardwoodFloorsContent from '@/lib/content/blog/how-to-clean-hardwood-floors';
import HowToCleanLaminateWoodFloorsContent from '@/lib/content/blog/how-to-clean-laminate-wood-floors';
import HowToFixASaggingOrSqueakyHardwoodFloorContent from '@/lib/content/blog/how-to-fix-a-sagging-or-squeaky-hardwood-floor';
import HowToFixScratchesAndDentsInVinylPlankContent from '@/lib/content/blog/how-to-fix-scratches-and-dents-in-vinyl-plank';
import HowToRemoveCarpetStainsContent from '@/lib/content/blog/how-to-remove-carpet-stains';
import IsCorkFlooringGoodForKitchensContent from '@/lib/content/blog/is-cork-flooring-good-for-kitchens';
import IsLaminateFlooringWaterproofContent from '@/lib/content/blog/is-laminate-flooring-waterproof';
import IsVinylPlankFlooringGoodForBasementsContent from '@/lib/content/blog/is-vinyl-plank-flooring-good-for-basements';
import JankaHardnessChartForHardwoodFlooringContent from '@/lib/content/blog/janka-hardness-chart-for-hardwood-flooring';
import LvpVsLvtFlooringContent from '@/lib/content/blog/lvp-vs-lvt-flooring';
import PorcelainVsCeramicTileContent from '@/lib/content/blog/porcelain-vs-ceramic-tile';
import PrefinishedVsSiteFinishedHardwoodContent from '@/lib/content/blog/prefinished-vs-site-finished-hardwood';
import RigidCoreVsWpcVinylPlankContent from '@/lib/content/blog/rigid-core-vs-wpc-vinyl-plank';
import RubberFlooringForAHomeGymContent from '@/lib/content/blog/rubber-flooring-for-a-home-gym';
import RubberFlooringForGaragesContent from '@/lib/content/blog/rubber-flooring-for-garages';
import VctMaintenanceStrippingAndWaxingContent from '@/lib/content/blog/vct-maintenance-stripping-and-waxing';
import VctVsLvtFlooringContent from '@/lib/content/blog/vct-vs-lvt-flooring';
import WhatIsCorkFlooringContent from '@/lib/content/blog/what-is-cork-flooring';
import WhatIsVctFlooringContent from '@/lib/content/blog/what-is-vct-flooring';

const CONTENT_MAP: Record<string, React.FC> = {
  'lvp-vs-engineered-hardwood': LvpVsEngineeredHardwoodContent,
  'types-of-hardwood-flooring': TypesOfHardwoodFlooringContent,
  'low-pile-vs-high-pile-carpet': LowPileVsHighPileCarpetContent,
  'how-to-clean-luxury-vinyl-plank-flooring': HowToCleanLuxuryVinylPlankFlooringContent,
  'tile-vs-vinyl-flooring': TileVsVinylFlooringContent,
  'vinyl-vs-laminate-flooring': VinylVsLaminateFlooringContent,
  'how-to-install-vinyl-plank-flooring': HowToInstallVinylPlankFlooringContent,
  'best-flooring-for-san-diego-homes': BestFlooringForSanDiegoHomesContent,
  'how-long-does-hardwood-refinishing-take': HowLongDoesHardwoodRefinishingTakeContent,
  'laminate-flooring-thickness': LaminateFlooringThicknessContent,
  'laminate-over-existing-floors': LaminateOverExistingFloorsContent,
  'cost-to-install-carpet': CostToInstallCarpetContent,
  'best-carpet-for-living-room': BestCarpetForLivingRoomContent,
  'lvp-vs-hardwood': LvpVsHardwoodContent,
  'best-flooring-for-pets': BestFlooringForPetsContent,
  'polyester-vs-nylon-carpet': PolyesterVsNylonCarpetContent,
  'engineered-vs-solid-hardwood': EngineeredVsSolidHardwoodContent,
  'vinyl-plank-flooring-cost': VinylPlankFlooringCostContent,
  'flooring-services-guide': FlooringServicesGuideContent,
  'how-to-choose-a-flooring-company': HowToChooseAFlooringCompanyContent,
  'is-free-flooring-installation-real': IsFreeFlooringInstallationRealContent,
  'wall-to-wall-carpet': WallToWallCarpetContent,
  'flooring-design-ideas-by-room': FlooringDesignIdeasByRoomContent,
  'wood-look-tile-vs-hardwood': WoodLookTileVsHardwoodContent,
  'bathroom-flooring-installation': BathroomFlooringInstallationContent,
  'best-flooring-for-new-construction': BestFlooringForNewConstructionContent,
  'best-flooring-for-schools': BestFlooringForSchoolsContent,
  'best-flooring-for-craft-room': BestFlooringForCraftRoomContent,
  'bathroom-floor-tile-ideas': BathroomFloorTileIdeasContent,
  'best-tile-for-outdoor-patios-and-pools': BestTileForOutdoorPatiosAndPoolsContent,
  'can-laminate-flooring-be-repaired': CanLaminateFlooringBeRepairedContent,
  'carpet-padding-guide': CarpetPaddingGuideContent,
  'cork-flooring-maintenance-and-cleaning': CorkFlooringMaintenanceAndCleaningContent,
  'flooring-for-rental-properties': FlooringForRentalPropertiesContent,
  'hardwood-floor-water-damage': HardwoodFloorWaterDamageContent,
  'how-much-does-hardwood-flooring-cost': HowMuchDoesHardwoodFlooringCostContent,
  'how-much-does-laminate-flooring-cost': HowMuchDoesLaminateFlooringCostContent,
  'how-much-does-tile-flooring-cost': HowMuchDoesTileFlooringCostContent,
  'how-to-clean-and-reseal-grout-lines': HowToCleanAndResealGroutLinesContent,
  'how-to-clean-hardwood-floors': HowToCleanHardwoodFloorsContent,
  'how-to-clean-laminate-wood-floors': HowToCleanLaminateWoodFloorsContent,
  'how-to-fix-a-sagging-or-squeaky-hardwood-floor': HowToFixASaggingOrSqueakyHardwoodFloorContent,
  'how-to-fix-scratches-and-dents-in-vinyl-plank': HowToFixScratchesAndDentsInVinylPlankContent,
  'how-to-remove-carpet-stains': HowToRemoveCarpetStainsContent,
  'is-cork-flooring-good-for-kitchens': IsCorkFlooringGoodForKitchensContent,
  'is-laminate-flooring-waterproof': IsLaminateFlooringWaterproofContent,
  'is-vinyl-plank-flooring-good-for-basements': IsVinylPlankFlooringGoodForBasementsContent,
  'janka-hardness-chart-for-hardwood-flooring': JankaHardnessChartForHardwoodFlooringContent,
  'lvp-vs-lvt-flooring': LvpVsLvtFlooringContent,
  'porcelain-vs-ceramic-tile': PorcelainVsCeramicTileContent,
  'prefinished-vs-site-finished-hardwood': PrefinishedVsSiteFinishedHardwoodContent,
  'rigid-core-vs-wpc-vinyl-plank': RigidCoreVsWpcVinylPlankContent,
  'rubber-flooring-for-a-home-gym': RubberFlooringForAHomeGymContent,
  'rubber-flooring-for-garages': RubberFlooringForGaragesContent,
  'vct-maintenance-stripping-and-waxing': VctMaintenanceStrippingAndWaxingContent,
  'vct-vs-lvt-flooring': VctVsLvtFlooringContent,
  'what-is-cork-flooring': WhatIsCorkFlooringContent,
  'what-is-vct-flooring': WhatIsVctFlooringContent,
};

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PUBLISHED_BLOG_POSTS.filter((p) => CONTENT_MAP[p.slug]).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post || !isBlogPostLive(post)) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.datePublishedISO,
      modifiedTime: post.dateModifiedISO,
      images: [post.image.startsWith('http') ? post.image : `${SITE.url}${post.image}`],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post || !isBlogPostLive(post)) notFound();

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
    datePublished: post.datePublishedISO,
    dateModified: post.dateModifiedISO,
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
        image={post.image}
        imageAlt={post.title}
      >
        <Content />
      </BlogLayout>

      <RelatedLocations />

      <ContactCTA heading="Need Help With Your Flooring Project?" />
    </>
  );
}
