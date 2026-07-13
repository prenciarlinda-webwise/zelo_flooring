import Link from 'next/link';
import { RelatedServices, RelatedBlogPosts } from '@/components/RelatedCards';
import EstimateModalLink from '@/components/EstimateModalLink';

export default function HowMuchDoesHardwoodFlooringCostContent() {
  return (
    <>
      <p>
        <strong>Hardwood flooring costs $8 to $20 per square foot installed in 2026</strong>, covering both material and labor. Engineered hardwood runs $6 to $18 per square foot depending on wear layer and species, while solid hardwood runs $8 to $20, with the top of that range reserved for wide-plank white oak, hickory, or exotic species like Brazilian cherry. A 1,500 square foot whole-home project typically lands between $12,750 and $27,000 fully installed.
      </p>
      <p>
        These numbers come from actual jobs we have priced and installed across San Diego County during 2025 and 2026. Below we break down solid vs engineered cost per square foot, labor vs material pricing, cost by wood species, cost by room, and when refinishing an existing floor beats a full replacement. For product options and how we quote a project, see our <Link href="/hardwood-flooring-san-diego">hardwood flooring San Diego</Link> service page.
      </p>

      <div className="callout-box info">
        <strong>Quick answer:</strong> Hardwood flooring costs $8 to $20 per square foot installed in 2026. Engineered hardwood runs $8 to $15 per square foot; solid hardwood runs $9 to $20. A 1,500 square foot whole-home project typically costs $12,750 to $27,000. Refinishing existing solid hardwood costs $3 to $5 per square foot, often a fraction of full replacement.
        <p style={{ marginTop: 8, marginBottom: 0 }}>
          Want an exact number for your home? <EstimateModalLink>Request a free in-home estimate</EstimateModalLink> or call <a href="tel:+16197774334">+1 (619) 777-4334</a>.
        </p>
      </div>

      {/* TOC */}
      <nav className="article-toc">
        <h2>In This Guide</h2>
        <ol>
          <li><a href="#average-cost">Average Cost to Install Hardwood Flooring</a></li>
          <li><a href="#solid-vs-engineered">Solid vs Engineered Hardwood Cost Per Square Foot</a></li>
          <li><a href="#by-species">Hardwood Flooring Cost by Wood Species</a></li>
          <li><a href="#labor-vs-materials">Labor Cost vs Material Cost</a></li>
          <li><a href="#by-room">Hardwood Flooring Cost by Room</a></li>
          <li><a href="#refinishing-vs-replacing">Is Refinishing Cheaper Than Replacing Hardwood Floors?</a></li>
          <li><a href="#what-affects">What Affects Your Hardwood Flooring Cost</a></li>
          <li><a href="#faq">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      {/* AVERAGE COST */}
      <h2 id="average-cost">Average Cost to Install Hardwood Flooring</h2>
      <p>
        Like most flooring, hardwood gets cheaper per square foot as the project gets bigger, since the installer's setup and trip costs spread across more material. We install solid and engineered hardwood across San Diego County, from higher-end projects in <Link href="/flooring-la-jolla">La Jolla</Link> and <Link href="/flooring-rancho-santa-fe">Rancho Santa Fe</Link> to standard whole-home installs everywhere in between. Here is what homeowners typically pay by project size:
      </p>
      <table className="cost-table">
        <thead>
          <tr><th>Project Size</th><th>Low End</th><th>Mid Range</th><th>High End</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Single room (200 sq ft)</strong></td><td>$1,700</td><td>$2,800</td><td>$4,000</td></tr>
          <tr><td><strong>Two rooms (400 sq ft)</strong></td><td>$3,400</td><td>$5,600</td><td>$8,000</td></tr>
          <tr><td><strong>Downstairs (800 sq ft)</strong></td><td>$6,800</td><td>$11,200</td><td>$16,000</td></tr>
          <tr><td><strong>Whole home (1,500 sq ft)</strong></td><td>$12,750</td><td>$19,500</td><td>$27,000</td></tr>
          <tr><td><strong>Large home (2,500 sq ft)</strong></td><td>$21,250</td><td>$32,500</td><td>$45,000</td></tr>
        </tbody>
      </table>
      <p>
        These figures include the wood itself, underlayment or moisture barrier where needed, installation labor, and basic old-floor removal. They do not include major subfloor repair, stair treads, or custom stain matching, all of which get quoted as separate line items.
      </p>

      {/* SOLID VS ENGINEERED */}
      <h2 id="solid-vs-engineered">Solid vs Engineered Hardwood Cost Per Square Foot</h2>
      <p>
        The construction type moves price more than almost any other single factor. Engineered hardwood has a real wood veneer bonded to a plywood or HDF core, while solid hardwood is one piece of wood all the way through. Here is how they compare on cost:
      </p>
      <table className="cost-table">
        <thead>
          <tr><th>Type</th><th>Material Cost/sqft</th><th>Installed Cost/sqft</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Engineered hardwood (2-4mm wear layer)</strong></td><td>$2.50 - $9.00</td><td>$6.00 - $15.00</td></tr>
          <tr><td><strong>Engineered hardwood (premium, 5-6mm wear layer, wide plank)</strong></td><td>$8.00 - $11.00</td><td>$14.00 - $18.00</td></tr>
          <tr><td><strong>Solid hardwood, prefinished (nail-down)</strong></td><td>$4.00 - $9.00</td><td>$8.00 - $14.00</td></tr>
          <tr><td><strong>Solid hardwood, site-finished (sand, stain, and finish on site)</strong></td><td>$3.50 - $7.00</td><td>$10.00 - $20.00</td></tr>
        </tbody>
      </table>
      <p>
        Site-finished solid hardwood costs more per square foot than prefinished because the sanding, staining, and 2 to 3 coats of finish are all separate labor steps done in your home, adding $2 to $6 per square foot on top of the base install. The payoff is a perfectly flat, seamless surface and the ability to match an existing floor exactly. For a full breakdown of which construction type fits your subfloor and climate, see our <Link href="/blog/engineered-vs-solid-hardwood">engineered vs solid hardwood guide</Link>.
      </p>

      <div className="callout-box warning">
        <strong>Watch the wear layer on cheap engineered hardwood.</strong> Engineered products with a 1mm or thinner wear layer can cost $1 to $2 less per square foot, but they cannot be sanded and refinished later. Once the finish wears through, the floor is done and has to be replaced, not restored. We recommend at least a 3mm wear layer for anything you plan to keep more than 10 years.
      </div>

      {/* BY SPECIES */}
      <h2 id="by-species">Hardwood Flooring Cost by Wood Species</h2>
      <p>
        Species affects cost through hardness, grain character, and how much of the wood is imported versus domestically milled. Janka hardness (a standard test of how much force it takes to dent a wood surface) is a useful proxy for durability, though finish and traffic matter just as much day to day. Installed costs below include labor:
      </p>
      <table className="cost-table">
        <thead>
          <tr><th>Species</th><th>Janka Hardness</th><th>Engineered Installed/sqft</th><th>Solid Installed/sqft</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Red Oak</strong></td><td>1,290</td><td>$8.00 - $12.00</td><td>$9.00 - $13.00</td></tr>
          <tr><td><strong>White Oak</strong></td><td>1,360</td><td>$9.00 - $14.00</td><td>$10.00 - $15.00</td></tr>
          <tr><td><strong>Maple</strong></td><td>1,450</td><td>$9.00 - $13.00</td><td>$10.00 - $14.00</td></tr>
          <tr><td><strong>Hickory</strong></td><td>1,820</td><td>$10.00 - $15.00</td><td>$11.00 - $16.00</td></tr>
          <tr><td><strong>Walnut</strong></td><td>1,010</td><td>$12.00 - $17.00</td><td>$13.00 - $19.00</td></tr>
          <tr><td><strong>Brazilian Cherry (exotic)</strong></td><td>2,350</td><td>$13.00 - $19.00</td><td>$15.00 - $22.00</td></tr>
        </tbody>
      </table>
      <p>
        White oak is currently the most requested species for San Diego installs because of its versatile grain and better natural water resistance than red oak. Walnut is softer than the other domestic species (a Janka rating of 1,010 versus oak's 1,290 to 1,360), which is why we usually steer it toward dining rooms and bedrooms rather than high-traffic hallways.
      </p>

      {/* LABOR VS MATERIALS */}
      <h2 id="labor-vs-materials">Labor Cost vs Material Cost</h2>
      <p>
        On a typical hardwood job, labor makes up 35 to 50 percent of the total bill, more than most other flooring types because of acclimation, subfloor prep, and (for site-finished solid) the sanding and finishing steps. Here is how labor breaks down per square foot:
      </p>
      <table className="cost-table">
        <thead>
          <tr><th>Labor Component</th><th>Cost Per Square Foot</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Engineered, click-lock floating</strong></td><td>$2.50 - $4.00</td></tr>
          <tr><td><strong>Engineered, glue-down over concrete</strong></td><td>$3.00 - $5.00</td></tr>
          <tr><td><strong>Solid hardwood, nail-down on plywood</strong></td><td>$3.50 - $5.50</td></tr>
          <tr><td><strong>Site-finish add-on (sand, stain, 2-3 coats)</strong></td><td>$3.00 - $6.00</td></tr>
          <tr><td><strong>Old flooring removal and disposal</strong></td><td>$1.00 - $2.50</td></tr>
          <tr><td><strong>Plywood underlayment for slab installs</strong></td><td>$2.00 - $4.00</td></tr>
          <tr><td><strong>Moisture barrier / vapor retarder</strong></td><td>$0.50 - $1.00</td></tr>
          <tr><td><strong>Transitions and trim</strong></td><td>$4 - $10 per linear foot</td></tr>
        </tbody>
      </table>
      <p>
        When comparing quotes, confirm whether the price includes removal, subfloor leveling, and transitions, or bills them separately. Two quotes that look $2 per square foot apart on the surface can end up nearly identical once every line item is accounted for.
      </p>

      <div className="callout-box tip">
        <strong>Ask about acclimation before you sign.</strong> The National Wood Flooring Association (<a href="https://www.nwfa.org" target="_blank" rel="noopener noreferrer">NWFA</a>) recommends 5 to 7 days of acclimation for solid hardwood before installation, letting the wood adjust to your home's humidity. Skipping this step to finish faster is one of the most common causes of gapping and cupping down the line, and it does not save you money, just time you will pay for later in callbacks.
      </div>

      {/* BY ROOM */}
      <h2 id="by-room">Hardwood Flooring Cost by Room</h2>
      <p>
        Here is what homeowners typically pay by room, using a mid-range mix of engineered and prefinished solid oak:
      </p>
      <table className="cost-table">
        <thead>
          <tr><th>Room</th><th>Typical Size</th><th>Estimated Installed Cost</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Entryway</strong></td><td>6x8 (48 sq ft)</td><td>$430 - $770</td></tr>
          <tr><td><strong>Home office</strong></td><td>10x12 (120 sq ft)</td><td>$1,080 - $1,920</td></tr>
          <tr><td><strong>Dining room</strong></td><td>12x14 (168 sq ft)</td><td>$1,500 - $2,700</td></tr>
          <tr><td><strong>Bedroom</strong></td><td>14x16 (224 sq ft)</td><td>$2,000 - $3,600</td></tr>
          <tr><td><strong>Living room</strong></td><td>16x20 (320 sq ft)</td><td>$2,900 - $5,100</td></tr>
          <tr><td><strong>Whole downstairs</strong></td><td>800 sq ft</td><td>$7,200 - $12,800</td></tr>
          <tr><td><strong>Stairs (12 steps, treads and risers)</strong></td><td>12 steps</td><td>$1,200 - $2,400</td></tr>
        </tbody>
      </table>
      <p>
        Stairs run higher per step than open-room flooring because each tread and riser is measured, cut, and finished individually. If your project includes a staircase connecting to hardwood on both floors, expect that to be quoted as its own line item rather than folded into a blanket per-square-foot rate.
      </p>

      {/* REFINISHING VS REPLACING */}
      <h2 id="refinishing-vs-replacing">Is Refinishing Cheaper Than Replacing Hardwood Floors?</h2>
      <p>
        Yes, in most cases. Refinishing an existing solid hardwood floor costs $3 to $5 per square foot, roughly 60 to 80 percent less than a full replacement at $9 to $20 per square foot. The catch is that refinishing only works if the floor is structurally sound and has enough usable wood or wear layer left to sand.
      </p>
      <table className="cost-table">
        <thead>
          <tr><th>Factor</th><th>Refinish Existing Solid</th><th>Full Replacement</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Cost per sqft</strong></td><td>$3.00 - $5.00</td><td>$9.00 - $20.00</td></tr>
          <tr><td><strong>Timeline</strong></td><td>3-5 days plus cure time</td><td>1-2 weeks including acclimation</td></tr>
          <tr><td><strong>Best when</strong></td><td>Floor is structurally sound, worn but not damaged</td><td>Water damage, deep cupping, gaps beyond repair</td></tr>
        </tbody>
      </table>
      <p>
        Solid hardwood can typically be sanded and refinished 3 to 4 times over its life, so a floor that is simply scratched or faded from sun exposure is usually a strong refinishing candidate. Engineered hardwood is more limited: a 2mm wear layer allows 1 to 2 light refinishes, a 3 to 4mm wear layer allows 2 to 3, and anything at 1mm or thinner cannot be refinished at all and has to be replaced once the finish wears through. See our <Link href="/blog/how-long-does-hardwood-refinishing-take">hardwood refinishing timeline guide</Link> for a day-by-day schedule, or our <Link href="/blog/engineered-vs-solid-hardwood">engineered vs solid hardwood comparison</Link> for how many refinishes to expect from what you already have.
      </p>

      {/* WHAT AFFECTS COST */}
      <h2 id="what-affects">What Affects Your Hardwood Flooring Cost</h2>
      <p>
        Two homes with the same square footage can end up thousands of dollars apart on their final bill. Here are the factors that move the number the most.
      </p>

      <h3>1. Wood Species and Grade</h3>
      <p>
        Domestic species like red oak start around $8 per square foot installed, while exotic species like Brazilian cherry can run $15 to $22. Grade matters too. Select grade (uniform color, minimal knots) costs more than rustic or character grade, which includes natural color variation and mineral streaks.
      </p>

      <h3>2. Plank Width</h3>
      <p>
        Standard 2 1/4 to 3 inch strip flooring is the least expensive width. Wide plank (5 to 8 inches) costs 15 to 30 percent more per square foot because it requires flatter subfloors, more careful acclimation, and a more exacting installation to avoid cupping at the wider boards.
      </p>

      <h3>3. Prefinished vs Site-Finished</h3>
      <p>
        Prefinished hardwood arrives sanded, stained, and sealed from the factory, so it installs faster with no dust or odor in the home. Site-finished hardwood is sanded, stained, and coated after installation, adding $2 to $6 per square foot in labor but giving you a seamless surface and full control over stain color.
      </p>

      <h3>4. Subfloor Condition</h3>
      <p>
        Solid hardwood needs a plywood subfloor and cannot be nailed directly to concrete. If your home sits on a slab (common in San Diego homes built after 1960), building out a plywood subfloor first adds $2 to $4 per square foot, which is why engineered hardwood is usually the more cost-effective choice on slab construction.
      </p>

      <h3>5. Old Flooring Removal</h3>
      <p>
        Pulling up carpet is quick and inexpensive. Removing old tile, glued-down hardwood, or multiple layers of flooring can add $1 to $2.50 per square foot, more if adhesive residue needs grinding before the new floor goes down.
      </p>

      <h3>6. Room Complexity and Stairs</h3>
      <p>
        Open rectangular rooms install efficiently. Rooms with multiple doorways, closets, and angled walls take longer and generate more waste from cuts. Stairs are the most labor-intensive part of most projects, priced per step rather than per square foot for exactly that reason.
      </p>

      <h3>How to Save Money on Hardwood Flooring</h3>
      <ul>
        <li><strong>Choose engineered over solid on a slab.</strong> Skipping the plywood subfloor build-out alone saves $2 to $4 per square foot.</li>
        <li><strong>Pick a domestic species.</strong> Red oak or maple costs several dollars less per square foot than walnut or exotic imports with nearly identical durability.</li>
        <li><strong>Refinish instead of replace when the floor allows it.</strong> $3 to $5 per square foot versus $9 to $20 is the single biggest potential savings on this list.</li>
        <li><strong>Choose prefinished over site-finished.</strong> You skip the $2 to $6 per square foot site-finishing labor and the days of dust and odor that come with it.</li>
        <li><strong>Do the whole project at once.</strong> Per-square-foot pricing drops as project size grows, so phasing room by room over several years usually costs more in total.</li>
        <li><strong>Consider a wood-look alternative in secondary rooms.</strong> Our <Link href="/laminate-flooring-san-diego">laminate flooring</Link> costs $2 to $6 per square foot and our <Link href="/vinyl-flooring-san-diego">luxury vinyl plank</Link> costs $4 to $9 per square foot, both reasonable substitutes for hardwood's look in bedrooms, offices, or rental units where budget matters more than the real thing.</li>
        <li><strong>Get at least three written quotes.</strong> Compare total installed cost line by line, not just the headline number. <EstimateModalLink>Get a free estimate from Zelo Flooring</EstimateModalLink> to start.</li>
      </ul>

      {/* FAQ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>How much does it cost to install hardwood flooring per square foot?</h3>
      <p>
        Hardwood flooring costs $8 to $20 per square foot installed in 2026, including material and labor. Engineered hardwood runs $8 to $15 per square foot for most species and grades. Solid hardwood runs $9 to $20, with site-finished installs and premium species landing at the top of that range.
      </p>

      <h3>Is engineered or solid hardwood cheaper to install?</h3>
      <p>
        Engineered hardwood is usually cheaper to install, especially on a concrete slab, because it skips the plywood subfloor build-out that solid hardwood requires. For mid-grade material on an existing plywood subfloor, engineered and solid often land within a dollar or two of each other per square foot.
      </p>

      <h3>How much does it cost to install 1,500 square feet of hardwood flooring?</h3>
      <p>
        Installing 1,500 square feet of hardwood flooring typically costs $12,750 to $27,000 depending on species, construction type, and subfloor condition. A mid-range engineered oak project at this size usually runs $17,000 to $20,000 fully installed.
      </p>

      <h3>Is refinishing cheaper than replacing hardwood floors?</h3>
      <p>
        Yes, refinishing an existing solid hardwood floor costs $3 to $5 per square foot, compared to $9 to $20 per square foot for full replacement. Refinishing only works if the floor is structurally sound with enough usable wood left to sand, which rules it out for floors with water damage or deep gouges.
      </p>

      <h3>What is the cheapest hardwood flooring option?</h3>
      <p>
        Budget engineered hardwood with a red oak veneer and a thin wear layer is the least expensive true hardwood option, starting around $6 to $8 per square foot installed. If your budget is tighter than that, laminate or LVP with a wood-look finish costs less and mimics the appearance without being real wood.
      </p>

      <h3>Does hardwood flooring increase home value?</h3>
      <p>
        Yes. Hardwood flooring is consistently one of the top-ranked interior renovations for cost recovery and buyer appeal, and it holds resale value better than carpet, laminate, or vinyl. A well-maintained hardwood floor, whether solid or engineered, reads as a premium finish to most buyers.
      </p>

      <h3>How much does labor cost to install hardwood flooring?</h3>
      <p>
        Labor for hardwood flooring runs $2.50 to $5.50 per square foot depending on construction type, with an additional $3 to $6 per square foot if the floor is site-finished. Labor typically makes up 35 to 50 percent of a hardwood project's total cost, more than most other flooring types.
      </p>

      <h3>What is the most expensive part of a hardwood flooring installation?</h3>
      <p>
        For solid hardwood on a concrete slab, building out the required plywood subfloor is usually the single biggest added cost, at $2 to $4 per square foot. For site-finished floors, the sanding, staining, and multiple finish coats are the largest labor line item, often adding $2 to $6 per square foot on top of the base install.
      </p>

      {/* RELATED */}
      <RelatedServices limit={4} />

      <RelatedBlogPosts
        posts={[
          { slug: 'engineered-vs-solid-hardwood', title: 'Engineered vs Solid Hardwood', excerpt: 'Which type fits your subfloor, climate, and refinishing plans.' },
          { slug: 'how-long-does-hardwood-refinishing-take', title: 'How Long Does Hardwood Floor Refinishing Take?', excerpt: 'A day-by-day timeline for sanding, staining, and cure time.' },
          { slug: 'janka-hardness-chart-for-hardwood-flooring', title: 'Janka Hardness Chart for Hardwood Flooring', excerpt: 'Which wood species holds up best against dents and daily traffic.' },
        ]}
      />

      <div className="callout-box info">
        <strong>Ready for an exact number instead of a range?</strong>
        We measure your space, bring real wood samples, and test your subfloor before you commit to anything. <EstimateModalLink>Request a free in-home estimate</EstimateModalLink> or call us at <a href="tel:+16197774334">+1 (619) 777-4334</a>.
      </div>
    </>
  );
}
