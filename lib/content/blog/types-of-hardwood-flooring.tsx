import Link from 'next/link';
import { RelatedServices, RelatedBlogPosts } from '@/components/RelatedCards';

export default function TypesOfHardwoodFlooringContent() {
  return (
    <>
      <p>
        <strong>There are two main types of hardwood flooring, solid and engineered, and within them you choose a wood species (oak, maple, hickory, walnut), a finish, a plank width, and a grade.</strong> Solid hardwood is one piece of wood that can be refinished many times. Engineered hardwood is a real-wood veneer over a plywood core that stays stable on concrete slab and in humidity, which makes it the more practical choice for most San Diego homes. See our <Link href="/hardwood-flooring-san-diego">hardwood flooring installation in San Diego</Link> page for the species and brands we install.
      </p>

      <div className="callout-box info">
        <strong>The hardwood choices at a glance</strong>
        <ul style={{ marginTop: 8, marginBottom: 0 }}>
          <li>Construction: Solid or engineered</li>
          <li>Most popular species: White oak, red oak, hickory, maple, walnut</li>
          <li>Finish: Prefinished (factory) or site-finished</li>
          <li>Width: Strip, plank, and wide-plank</li>
          <li>Best for San Diego slab: Engineered hardwood</li>
          <li>Hardest common species: Hickory, then oak; walnut is softer</li>
        </ul>
      </div>

      {/* TOC */}
      <nav className="article-toc">
        <h2>In This Guide</h2>
        <ol>
          <li><a href="#construction">Solid vs Engineered Construction</a></li>
          <li><a href="#species">Hardwood Species Compared</a></li>
          <li><a href="#finish">Prefinished vs Site-Finished</a></li>
          <li><a href="#width">Plank Width and Grade</a></li>
          <li><a href="#best-sd">Best Type for San Diego Homes</a></li>
          <li><a href="#faq">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      <h2 id="construction">Solid vs Engineered Construction</h2>
      <p>
        This is the first and biggest decision. <strong>Solid hardwood</strong> is a single piece of wood, 3/4 inch thick, that can be sanded and refinished 3 to 5 times. It is best over plywood subfloors in older homes. <strong>Engineered hardwood</strong> is a real-wood veneer bonded to a cross-ply plywood core, which resists the cupping and gapping that humidity and slab moisture cause. It installs over concrete and is the default for most modern San Diego homes. Our <Link href="/blog/engineered-vs-solid-hardwood">engineered vs solid hardwood guide</Link> covers this choice in depth.
      </p>

      <h2 id="species">Hardwood Species Compared</h2>
      <p>
        Species sets the look, the hardness (measured on the Janka scale), and the price. Here are the most common choices:
      </p>
      <table className="cost-table">
        <thead>
          <tr><th>Species</th><th>Hardness (Janka)</th><th>Look</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>White oak</strong></td><td>1,360</td><td>Neutral, slightly gray-brown</td><td>The most popular choice today, takes stain evenly</td></tr>
          <tr><td><strong>Red oak</strong></td><td>1,290</td><td>Warm, pronounced grain</td><td>Classic, affordable, hides wear well</td></tr>
          <tr><td><strong>Hickory</strong></td><td>1,820</td><td>Rustic, high contrast</td><td>The hardest common species, great with pets and kids</td></tr>
          <tr><td><strong>Maple</strong></td><td>1,450</td><td>Smooth, subtle grain</td><td>Light and modern, can be tricky to stain</td></tr>
          <tr><td><strong>Walnut</strong></td><td>1,010</td><td>Rich, dark brown</td><td>Luxurious look but softer, dents easier</td></tr>
        </tbody>
      </table>
      <p>
        For busy homes and pets, harder species like hickory and oak hold up best. Softer woods like walnut look stunning but show dents sooner, much like the durability trade-offs we cover in our <Link href="/blog/best-flooring-for-pets">best flooring for pets guide</Link>.
      </p>

      <h2 id="finish">Prefinished vs Site-Finished</h2>
      <p>
        <strong>Prefinished</strong> hardwood arrives sanded, stained, and sealed from the factory, so installation is faster and there is no dust or odor in the home. <strong>Site-finished</strong> hardwood is installed raw, then sanded, stained, and sealed in place, which gives a perfectly smooth, seamless surface and any custom color, at the cost of a longer, dustier project. Most homeowners choose prefinished for convenience; site-finished shines for custom looks and matching existing floors.
      </p>

      <h2 id="width">Plank Width and Grade</h2>
      <p>
        Width changes the whole feel of a room. Narrow strips (under 3 inches) read traditional, standard planks (3 to 5 inches) are the everyday choice, and wide planks (5 inches and up) feel modern and high-end but demand a very flat subfloor. Grade describes how much natural variation, knots, and color streaking the boards show, from clear (uniform) to character or rustic (lots of variation). Wider planks and rustic grades are on trend right now.
      </p>

      <h2 id="best-sd">Best Type for San Diego Homes</h2>
      <p>
        Because most San Diego homes sit on concrete slab and many are near the humid coast, <strong>engineered white oak</strong> is the most common recommendation: it is stable, neutral, refinishable with a thick veneer, and widely available. Inland homes in drier areas like <Link href="/flooring-poway">Poway</Link> have more freedom to choose solid hardwood. For a full breakdown of the best flooring across the county, see our <Link href="/blog/best-flooring-for-san-diego-homes">best flooring for San Diego homes guide</Link>, and to weigh wood against vinyl, our <Link href="/blog/lvp-vs-engineered-hardwood">LVP vs engineered hardwood comparison</Link>.
      </p>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>What are the main types of hardwood flooring?</h3>
      <p>
        The two main types are solid hardwood, a single piece of wood that can be refinished many times, and engineered hardwood, a real-wood veneer over a plywood core that stays stable on slab and in humidity. Within each, you choose a species, finish, plank width, and grade.
      </p>

      <h3>What is the most durable hardwood floor?</h3>
      <p>
        Hickory is the most durable common hardwood species, with a Janka hardness around 1,820, followed by oak and maple. A harder species combined with a quality factory finish gives the best resistance to dents and scratches, which matters most in busy homes and with pets.
      </p>

      <h3>What hardwood species is best?</h3>
      <p>
        White oak is the most popular and versatile species today because it is hard, neutral in color, takes stain evenly, and is widely available. Hickory is best for maximum durability, while walnut offers the richest dark look at the cost of being softer.
      </p>

      <h3>Should I choose solid or engineered hardwood?</h3>
      <p>
        Choose engineered hardwood for concrete slab foundations, humid coastal areas, and most modern homes, since it resists cupping and gapping. Choose solid hardwood for older homes with plywood subfloors in drier climates where you want a floor that can be refinished many times.
      </p>

      <h3>What is the most popular hardwood floor right now?</h3>
      <p>
        Engineered white oak in a wide plank with a matte, natural finish is the most popular hardwood floor today. It suits both modern and traditional homes, handles slab and humidity well, and is the most requested look in current installations.
      </p>

      <RelatedServices exclude="hardwood-flooring-san-diego" limit={3} />

      <RelatedBlogPosts
        posts={[
          { slug: 'engineered-vs-solid-hardwood', title: 'Engineered vs Solid Hardwood', excerpt: 'Which construction fits your subfloor and home.' },
          { slug: 'lvp-vs-engineered-hardwood', title: 'LVP vs Engineered Hardwood', excerpt: 'Real wood versus waterproof vinyl, compared.' },
          { slug: 'best-flooring-for-san-diego-homes', title: 'Best Flooring for San Diego Homes', excerpt: 'Top picks for slab and coastal humidity.' },
        ]}
      />

      <div className="callout-box info">
        <strong>Want help choosing a hardwood?</strong>
        We bring species and finish samples to your home and recommend what fits your subfloor and climate. <Link href="/free-estimate">Request a free in-home estimate</Link> or call <a href="tel:+16197774334">+1 (619) 777-4334</a>.
      </div>
    </>
  );
}
