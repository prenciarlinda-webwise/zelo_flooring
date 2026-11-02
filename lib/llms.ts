import { SITE } from '@/lib/areas';
import { SERVICES } from '@/lib/services';
import { LOCATIONS } from '@/lib/locations';
import { PUBLISHED_BLOG_POSTS } from '@/lib/blog-posts';

// Single source of truth for /llms.txt and /llms-full.txt. Generated from the same
// data that drives the site and sitemap, so new pages, cities and posts appear on
// their own and removed or redirected ones disappear.

const url = (path: string) => `${SITE.url}${path}`;
const phone = SITE.phone.replace('+1 ', '');

const facts = () => [
  `- Phone: ${phone} (open daily 7:00am to 7:00pm)`,
  `- Book: free in-home estimate, request at ${url('/contact')} or call ${phone}`,
  `- Owner: ${SITE.owner.name}, owner and lead installer, ${SITE.ownerExperienceYears} years of journeyman experience, in the trade since ${SITE.owner.inUSSince}`,
  `- License: CSLB #${SITE.license} (C-15 Flooring and Floor Covering Contractor), bonded and insured`,
  `- Reviews: ${SITE.rating.value.toFixed(1)} stars from ${SITE.rating.count} reviews on Thumbtack; Thumbtack Top Pro 2023, 2024, 2025; BBB A+ accredited since 2022`,
  `- Service area: San Diego County. Mobile contractor, no public showroom`,
  `- Profiles: [Google Business Profile](${SITE.gbpUrl}), [Thumbtack](${SITE.thumbtackUrl}), [Yelp](${SITE.yelpUrl}), [BBB](${SITE.bbbUrl}), [Facebook](${SITE.facebookUrl}), [Instagram](${SITE.instagramUrl})`,
];

export function buildLlmsTxt(): string {
  const out: string[] = [];
  out.push(`# ${SITE.name}`, '');
  out.push(
    `> Licensed San Diego flooring contractor (CSLB #${SITE.license}). We install carpet, luxury vinyl plank, hardwood, laminate, tile, cork, rubber (home gyms, commercial gyms, garages, daycares) and VCT for homes and businesses across San Diego County. Free in-home estimates. Call ${phone}.`,
    '',
  );
  out.push('## Book a Free Estimate', '', ...facts(), '');
  out.push('## Services', '');
  for (const s of SERVICES) {
    out.push(`- [${s.metaTitle}](${url('/' + s.slug)}): ${s.description}`);
  }
  out.push('');
  out.push('## Service Areas', '');
  for (const l of LOCATIONS) {
    out.push(`- [Flooring ${l.city}](${url('/' + l.slug)}): ${l.metaDescription}`);
  }
  out.push('');
  out.push('## Company', '');
  out.push(
    `- [About Zelo Flooring](${url('/about-us')}): Owner, team, license and credentials`,
    `- [Project Photos](${url('/projects')}): Real San Diego installs, including work in progress`,
    `- [Flooring FAQs](${url('/san-diego-flooring-faqs')}): Common questions about estimates, timelines and licensing`,
    `- [Contact](${url('/contact')}): Request a free estimate`,
    '',
  );
  out.push('## Optional', '', 'Guides written by our installers. Useful background, not required to book.', '');
  for (const p of PUBLISHED_BLOG_POSTS) {
    out.push(`- [${p.title}](${url('/blog/' + p.slug)}): ${p.excerpt}`);
  }
  out.push('', `Full text of the service pages: ${url('/llms-full.txt')}`, '');
  return out.join('\n');
}

export function buildLlmsFullTxt(): string {
  const out: string[] = [];
  out.push(`# ${SITE.name} (full text)`, '', `> ${SITE.description}`, '');
  out.push('## Facts', '', ...facts(), '');
  for (const s of SERVICES) {
    out.push(`## ${s.metaTitle}`, '', `URL: ${url('/' + s.slug)}`, '', s.description, '');
    for (const p of s.longDescription) out.push(p, '');
    if (s.benefits?.length) out.push('What you get:', ...s.benefits.map((b) => `- ${b}`), '');
    if (s.bestFor?.length) out.push(`Best for: ${s.bestFor.join(', ')}`, '');
    if (s.faqs?.length) {
      out.push('Questions and answers:', '');
      for (const f of s.faqs) out.push(`Q: ${f.q}`, `A: ${f.a}`, '');
    }
  }
  out.push('## Service Areas', '');
  for (const l of LOCATIONS) {
    out.push(`- ${l.city}, ${l.state} (${url('/' + l.slug)}): ${l.metaDescription}`);
  }
  out.push('');
  return out.join('\n');
}
