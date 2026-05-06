# Zelo Flooring - Project Progress

**Updated:** April 2026 | **DR:** ~4 | **Location:** San Diego, CA

---

## Content Rules

- No em dashes anywhere
- No prices on service pages (link to blog pricing guide instead)
- No template/repeated sections across service pages (each page fully unique)
- No `|` in title tags. Use `-` instead
- Service pages: full-width alternating sections, own FAQs, own testimonials
- Blog posts: Illyrian Plumber editorial structure (byline, direct answer, TOC, deep content, related cards)
- Blog posts carry pricing data, service pages link to them
- Stone carpet flooring excluded (different product entirely)

## Keyword Strategy

Service pages target San Diego geo-modified keywords as primary. At DR 4, national head terms are not winnable against Home Depot, Floor & Decor, and Forbes. Competitors lamesaflooring.com (DR 4.7), metroflooring.com (DR 3.3), and sandiegoflooringpros.com (DR 0.2) rank for local terms using basic pages. Zelo can beat all three.

| Asset Type | Keyword Type | Example |
|---|---|---|
| Service Pages | San Diego geo-modified (Primary) | vinyl plank flooring san diego (KD 0) |
| Blog Posts | National informational / comparison (Primary) | laminate vs vinyl flooring (KD 3, SV 7K) |
| Service Pages | National terms woven into body as Secondary | waterproof vinyl plank flooring (KD 4) |

## Architecture Notes

- Service page content: `lib/content/[slug].tsx` - add to `CONTENT_MAP` in `app/[slug]/page.tsx`
- Blog post content: `lib/content/blog/[slug].tsx` - add to `CONTENT_MAP` in `app/blog/[slug]/page.tsx`
- Blog post metadata: `lib/blog-posts.ts`
- Service metadata: `lib/services.ts`
- Service areas: `lib/areas.ts`
- Title template in layout: `%s - Zelo Flooring` (fixed, uses `-`)
- Services without rich content get a basic fallback layout

## Menu Structure

Home - About Us - Carpet - Vinyl - Wood - Laminate - Other (dropdown) - Service Areas - Contact Us - [Free Estimate button]

Other dropdown: Tile Flooring, Cork Flooring, Rubber Flooring, Vinyl Composition Tile

---

## Service Pages

Primary keyword = San Diego geo-modified. Secondary keywords = general terms woven into body copy, H2s, and FAQs. KD and SV are national figures from Ahrefs.

### 1. Carpet Installation [Done]

- **URL:** `/carpet-flooring`
- **Title Tag:** `Carpet Installation San Diego - Zelo Flooring`
- **H1:** `Carpet Installation in San Diego`
- **Primary KW:** carpet installation san diego | KD 6 | SV 150
- **SK San Diego:** carpet contractors san diego (KD 0, SV 100), carpet installer near me (KD 8, SV 900)
- **SK General:** carpet flooring installation (KD 7), carpet installation cost per square foot (KD 1), carpet installer (KD 0)
- **Rich Content:** Done
- **Mobile Optimization:** Done
- **SEO Optimization:** Done (geo H1, keyword-rich H2s, internal links, no heading gaps)
- **AI Elements:** Direct answer callout in cost section, structured tables, FAQ with schema
- **Schemas:** Service, FAQPage
- **Internal Links:**
  - L1 - (Get Your Free Estimate) [`/free-estimate`]
  - L2 - (Read Our Full Pricing Guide) [`/blog/cost-to-install-carpet`]
  - L3 - (vinyl) [`/vinyl-flooring`]
  - L4 - (tile) [`/tile-flooring`]
  - L5 - (hardwood) [`/hardwood-flooring`]
  - L6 - (laminate) [`/laminate-flooring`]
  - L7 - (Service Areas) [`/service-areas`]
  - L8 - (Get Replacement Estimate) [`/free-estimate`]
- **Blog Posts:** cost-to-install-carpet (Done), best-carpet-for-living-room, polyester-vs-nylon-carpet, carpet-vs-hardwood-flooring, carpet-pile-types, best-flooring-for-pets

### 2. Luxury Vinyl Plank (LVP) [TODO]

- **URL:** `/vinyl-flooring`
- **Title Tag:** `Vinyl Plank Flooring San Diego - Zelo Flooring`
- **H1:** `Luxury Vinyl Plank (LVP) Flooring in San Diego`
- **Primary KW:** vinyl plank flooring san diego | KD 0 | SV 60
- **SK San Diego:** vinyl flooring san diego (KD 0, SV 50), vinyl flooring installation san diego (KD 0, SV 50), luxury vinyl plank flooring san diego (KD 0, SV 40)
- **SK General:** waterproof vinyl plank flooring (KD 4, SV 5.3K), glue down vinyl plank flooring (KD 0, SV 3.9K), vinyl flooring installation (KD 5, SV 2.3K), rigid core vinyl plank flooring (KD 9, SV 2.2K)
- **Blog Posts:** vinyl-plank-flooring-cost, laminate-vs-vinyl-flooring, how-to-install-vinyl-plank-flooring, glue-down-vinyl-plank-flooring, spc-vs-wpc-flooring, vinyl-plank-flooring-mistakes, lvp-vs-hardwood
- **Notes:** KD 0 for multiple SD variants = immediate ranking opportunity. Do not use LVP page to target national terms as primary.

### 3. Hardwood Flooring [TODO]

- **URL:** `/hardwood-flooring`
- **Title Tag:** `Hardwood Flooring San Diego - Zelo Flooring`
- **H1:** `Hardwood Flooring in San Diego`
- **Primary KW:** wood flooring san diego | KD 9 | SV 150
- **SK San Diego:** san diego hardwood flooring (KD 12, SV 20)
- **SK General:** hardwood floor installation (KD 2, SV 8.5K), engineered hardwood flooring (KD 6, SV 16K), engineered wood flooring (KD 6, SV 9K), wood floor refinishing (KD 3, SV 5.2K), solid hardwood flooring (KD 7, SV 1.1K)
- **Blog Posts:** hardwood-floor-installation-cost, engineered-vs-solid-hardwood, lvp-vs-hardwood
- **Notes:** Avoided hardwood floor installation san diego (KD 19) as PK - too high for DR 4. wood flooring san diego (KD 9) is the realistic entry point.

### 4. Laminate Flooring [TODO]

- **URL:** `/laminate-flooring`
- **Title Tag:** `Laminate Flooring San Diego - Zelo Flooring`
- **H1:** `Laminate Flooring in San Diego`
- **Primary KW:** laminate flooring san diego | KD 3 | SV 80
- **SK San Diego:** laminate flooring installation san diego (KD 4, SV 90)
- **SK General:** waterproof laminate flooring (KD 2, SV 9.6K), laminate flooring installation (KD 2, SV 2.7K), best laminate flooring (KD 1, SV 3.7K), water resistant laminate flooring (KD 3, SV 1.6K), laminate flooring underlayment (KD 2, SV 2K)
- **Blog Posts:** laminate-vs-vinyl-flooring, laminate-flooring-cost (future)

### 5. Tile Flooring [TODO]

- **URL:** `/tile-flooring`
- **Title Tag:** `Tile Flooring San Diego - Zelo Flooring`
- **H1:** `Tile Flooring in San Diego`
- **Primary KW:** tile flooring san diego | KD ~2 | SV ~30
- **SK San Diego:** floor installation san diego (KD 14, SV 40)
- **SK General:** tile flooring installation (KD 2, SV 1.9K), bathroom floor tile (KD 8, SV 14K), kitchen floor tile (KD 3, SV 4K), wood look tile flooring (KD 5, SV 2.4K), kitchen tile flooring (KD 7, SV 2.4K)
- **Blog Posts:** bathroom-floor-tile-ideas (KD 0, SV 5.8K), kitchen-floor-tile-ideas (KD 0, SV 1.4K)
- **Notes:** tile flooring san diego not in Ahrefs data - very low SV locally. Page traffic will come primarily from blog posts linking in. tile flooring san diego estimated KD ~2 based on niche.

### 6. Cork Flooring [TODO]

- **URL:** `/cork-flooring`
- **Title Tag:** `Cork Flooring San Diego - Zelo Flooring`
- **H1:** `Cork Flooring in San Diego`
- **Primary KW:** cork flooring san diego | KD 0 | SV 10
- **SK General:** waterproof cork flooring (KD 4, SV 400), cork flooring kitchen (KD 2, SV 350), cork flooring for basement (KD 2, SV 250), floating cork flooring (KD 1, SV 250), cork flooring near me (KD 11, SV 300)
- **Blog Posts:** cork-flooring-pros-and-cons (KD 0, SV 500)
- **Notes:** KD 0 locally but SV 10. Cork is a niche service. Low investment page - shorter content is fine (1,400 words). Blog post drives discovery, page converts.

### 7. Rubber Flooring [TODO]

- **URL:** `/rubber-flooring`
- **Title Tag:** `Rubber Flooring San Diego - Zelo Flooring`
- **H1:** `Rubber Flooring in San Diego`
- **Primary KW:** rubber flooring san diego | KD ~0 | SV ~20
- **SK General:** rubber flooring (KD 3, SV 8.2K), rubber gym flooring (KD 7, SV 3.7K), rubber flooring for home gym (KD 7, SV 1.2K), rubber flooring rolls (KD 1, SV 1.5K), rubber mat flooring (KD 3, SV 1.3K)
- **Blog Posts:** rubber-flooring-for-home-gym (KD 7, SV 1.2K)
- **Notes:** rubber flooring san diego not in Ahrefs data. Commercial rubber flooring (KD 38) - do not target. Focus on gym/residential angle where KD is 3-7.

### 8. VCT Flooring [TODO]

- **URL:** `/vinyl-composition-tile-flooring`
- **Title Tag:** `VCT Flooring San Diego - Zelo Flooring`
- **H1:** `VCT Flooring in San Diego`
- **Primary KW:** vct flooring san diego | KD ~0 | SV ~10
- **SK General:** vct flooring (KD 3, SV 7.1K), vinyl composition tile (KD 4, SV 1.3K), what is vct flooring (KD 2, SV 1K), vct tile flooring (KD 3, SV 1.4K), vct tile installation (KD 0, SV 100)
- **Blog Posts:** what-is-vct-flooring (KD 2, SV 1K), vct-vs-lvt-flooring (KD 0, SV 150)
- **Notes:** Very niche service locally. National term vct flooring (KD 3, SV 7.1K) is achievable for secondary. Blog posts will drive discovery. Page is mainly a conversion asset.

---

## Blog Posts

All blog posts target general (non-geo) keywords. They handle the high-volume national terms that service pages cannot rank for at DR 4. Each blog post links back to its relevant service page.

| Status | Title | URL | Primary KW | KD | SV | Service Link |
|--------|-------|-----|------------|----|----|-------------|
| Done | Cost to Install Carpet | `/blog/cost-to-install-carpet` | cost to install carpet | 4 | 16K+ | carpet-flooring |
| Draft | Best Carpet for Living Room | `/blog/best-carpet-for-living-room` | best carpet for living room | 5 | 600 | carpet-flooring |
| Draft | LVP vs Hardwood | `/blog/lvp-vs-hardwood` | engineered hardwood flooring vs lvp | 1 | 700 | vinyl-flooring, hardwood-flooring |
| Draft | Best Flooring for Pets | `/blog/best-flooring-for-pets` | best flooring for pets | ~2 | ~800 | vinyl-flooring, carpet-flooring |
| TODO | Laminate vs Vinyl Flooring | `/blog/laminate-vs-vinyl-flooring` | laminate vs vinyl flooring | 3 | 7K | laminate-flooring, vinyl-flooring |
| TODO | SPC vs WPC Flooring | `/blog/spc-vs-wpc-flooring` | spc vs wpc | 0 | 450 | vinyl-flooring |
| TODO | Vinyl Plank Flooring Cost | `/blog/vinyl-plank-flooring-cost` | cost to install vinyl plank flooring | 1 | 2.5K | vinyl-flooring |
| TODO | How to Install Vinyl Plank Flooring | `/blog/how-to-install-vinyl-plank-flooring` | how to lay vinyl plank flooring | 1 | 2.1K | vinyl-flooring |
| TODO | Carpet Pile Types Guide | `/blog/carpet-pile-types` | what is low pile carpet | 1 | 600 | carpet-flooring |
| TODO | Glue Down Vinyl Plank Guide | `/blog/glue-down-vinyl-plank-flooring` | glue down vinyl flooring | 0 | 1.1K | vinyl-flooring |
| TODO | Common LVP Installation Mistakes | `/blog/vinyl-plank-flooring-mistakes` | common mistakes when installing vinyl plank flooring | 0 | 450 | vinyl-flooring |
| TODO | Polyester vs Nylon Carpet | `/blog/polyester-vs-nylon-carpet` | polyester vs nylon carpet | 0 | 350 | carpet-flooring |
| TODO | Engineered vs Solid Hardwood | `/blog/engineered-vs-solid-hardwood` | engineered hardwood vs hardwood | 3 | 1.4K | hardwood-flooring |
| TODO | Carpet vs Hardwood Flooring | `/blog/carpet-vs-hardwood-flooring` | carpet vs hardwood | 1 | 400 | carpet-flooring, hardwood-flooring |
| TODO | Hardwood Floor Installation Cost | `/blog/hardwood-floor-installation-cost` | hardwood floor installation cost | 3 | 5K | hardwood-flooring |
| TODO | Bathroom Floor Tile Ideas | `/blog/bathroom-floor-tile-ideas` | bathroom floor tile ideas | 0 | 5.8K | tile-flooring |
| TODO | Kitchen Floor Tile Ideas | `/blog/kitchen-floor-tile-ideas` | kitchen floor tile ideas | 0 | 1.4K | tile-flooring |
| TODO | Cork Flooring Pros and Cons | `/blog/cork-flooring-pros-and-cons` | cork flooring pros and cons | 0 | 500 | cork-flooring |
| TODO | Rubber Flooring for Home Gym | `/blog/rubber-flooring-for-home-gym` | rubber flooring for home gym | 7 | 1.2K | rubber-flooring |
| TODO | What Is VCT Flooring | `/blog/what-is-vct-flooring` | what is vct flooring | 2 | 1K | vinyl-composition-tile-flooring |

---

## Static Pages

| Page | URL | Title Tag | Status |
|------|-----|-----------|--------|
| Home | `/` | Zelo Flooring - San Diego Flooring Installation - Carpet, Vinyl, Wood, Laminate | Done |
| About Us | `/about` | About Zelo Flooring - San Diego Flooring Contractors - Zelo Flooring | Done |
| Contact | `/contact` | Contact Us - San Diego Flooring Installation - Zelo Flooring | Done |
| Free Estimate | `/free-estimate` | Free Flooring Estimate in San Diego - Zelo Flooring | Done |
| Service Areas | `/service-areas` | Flooring Service Areas in San Diego County - Zelo Flooring | Done |
| FAQ | `/faq` | Flooring FAQ - Common Questions Answered - Zelo Flooring | Done |
| Blog Index | `/blog` | Flooring Tips and Guides - Zelo Flooring | Done |

---

## Technical SEO Checklist

| Item | Status |
|------|--------|
| LocalBusiness schema (root layout) | Done |
| Service schema (per service page) | Done |
| FAQPage schema (carpet service + blog) | Done |
| Article schema (blog posts) | Done |
| sitemap.xml (auto-generated) | Done |
| robots.txt (auto-generated) | Done |
| Canonical URLs (all pages) | Done |
| Open Graph tags (all pages) | Done |
| Title template (uses `-`, no pipe) | Done |
| Meta keywords removed | Done |
| H1 geo modifier on all service pages | Done (carpet), TODO (7 pages) |
| Clean heading hierarchy (H1>H2>H3) | Done |
| Footer headings replaced with styled labels | Done |
| FAQPage schema on all service pages | TODO (7 pages) |

## Design / Layout Checklist

| Item | Status |
|------|--------|
| Logo (public/logo.png) | Done |
| Mobile-first responsive CSS | Done |
| Header + mobile drawer nav | Done |
| Top bar (phone, location, hours, license) | Done |
| Trust strip (gold bar) | Done |
| Footer (4-col, area links, WebWise credit) | Done |
| Service page layout (full-width sections) | Done |
| Blog layout (byline, TOC, sticky sidebar) | Done |
| Sidebar for service pages | Removed (user will design later) |

---

## Competitors

| Competitor | URL | DR | Keywords | Top 3 | Traffic | Value |
|---|---|---|---|---|---|---|
| La Mesa Flooring | lamesaflooring.com | 4.7 | 117 | 6 | 173 | $316 |
| Metro Flooring | metroflooring.com | 3.3 | 61 | 10 | 326 | $1.2K |
| SD Flooring Pros | sandiegoflooringpros.com | 0.2 | 28 | 5 | 177 | $801 |
