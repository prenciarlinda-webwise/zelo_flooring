// FAQ Q/A pairs per blog post, used to emit FAQPage schema that mirrors the
// visible FAQ section in each blog content file. If you change a question or
// answer in lib/content/blog/<slug>.tsx, update the matching entry here too.

export type BlogFaq = { q: string; a: string };

export const BLOG_FAQS: Record<string, BlogFaq[]> = {
  'laminate-over-existing-floors': [
    {
      q: 'Can you put laminate over laminate?',
      a: 'No. Laminate is a floating floor, and floating a new laminate floor over an existing one creates an unstable, compressible stack that clicks and separates at the joints. Old laminate is fast to remove because it is not glued down, so the right move is always to pull it up and install the new floor on fresh underlayment.',
    },
    {
      q: 'Can laminate flooring be installed over existing floors?',
      a: 'Yes, in most cases. Laminate can be installed over tile, vinyl, linoleum, hardwood, and concrete as long as the surface is flat within 3/16 inch over 10 feet, solid and well-bonded, and dry. It cannot go over carpet or over another floating floor, and it should not go over any water-damaged or uneven surface.',
    },
    {
      q: 'Do you need underlayment when installing laminate over tile or vinyl?',
      a: 'Yes. Laminate needs an underlayment for cushioning, sound, and a smooth glide unless the plank has it pre-attached. Over concrete you also need a vapor barrier underlayment. Do not double up underlayment if the plank already has a pad attached, since too much cushion causes joint failure.',
    },
    {
      q: 'How flat does the floor need to be for laminate?',
      a: 'Most laminate manufacturers require the substrate to be flat within 3/16 inch over a 10-foot span (some specify 1/8 inch over 6 feet). Anything outside that needs grinding on high spots or self-leveling compound in low spots before the laminate goes down, or the floor will feel hollow and the joints will separate.',
    },
    {
      q: 'Will installing laminate over an existing floor void the warranty?',
      a: 'Not by itself, but most warranties require the substrate to meet the manufacturer flatness and moisture specs and require the correct underlayment. Installing over a soft, uneven, or damp surface, or skipping the vapor barrier over concrete, is what voids coverage. A manufacturer-spec install keeps the warranty intact.',
    },
  ],
  'cost-to-install-carpet': [
    {
      q: 'How much does it cost to install carpet in a 12x12 room?',
      a: 'The cost to install carpet in a 12x12 room (144 square feet) is $430 to $1,150 depending on carpet quality. With mid-range nylon carpet, expect $650 to $750 including pad, labor, removal, and disposal.',
    },
    {
      q: 'How much does it cost to install 1,000 square feet of carpet?',
      a: 'The cost to install 1,000 square feet of carpet is $4,000 to $8,000 with mid-range materials and professional installation. Budget carpet brings the low end to $3,000. Premium wool carpet can push the total above $10,000.',
    },
    {
      q: 'What is the labor cost to install carpet per square foot?',
      a: 'Labor cost to install carpet ranges from $1.00 to $3.00 per square foot. Basic open-room installation runs $1.00 to $1.50. Standard bedrooms with closets cost $1.50 to $2.00. Complex jobs with stairs, pattern matching, or difficult access cost $2.00 to $3.00 per square foot.',
    },
    {
      q: 'How much does Home Depot charge to install carpet?',
      a: 'Home Depot and other big-box retailers typically charge $3.50 to $7.00 per square foot installed. Their base installation fee is often quoted as a flat rate or "free installation" promotion, but the carpet and pad pricing tends to be higher to compensate. Always compare the total installed cost, not just the advertised installation fee.',
    },
    {
      q: 'How much does it cost to install carpet on stairs?',
      a: 'Carpet installation on stairs costs $15 to $30 per step for standard straight stairs. Winding stairs, pie steps, or open-stringer stairs cost $25 to $45 per step. A full 12 to 15 step staircase typically runs $250 to $600 total. Stairs are priced higher per square foot because each step requires individual cutting, padding, stretching, and tucking.',
    },
    {
      q: 'Is it cheaper to install carpet or vinyl plank?',
      a: 'Carpet is generally cheaper to install than luxury vinyl plank (LVP). Carpet costs $3 to $8 per square foot installed while LVP costs $4 to $9 per square foot. However, LVP lasts 15 to 25 years compared to carpet\'s 5 to 15 years, so the long-term cost per year can be similar. Carpet is the better short-term budget choice. LVP is the better long-term investment, especially in moisture-prone areas.',
    },
    {
      q: 'How long does carpet installation take?',
      a: 'Professional carpet installation takes 1 to 2 hours per room for standard bedrooms. A full home (1,500 square feet) typically takes one full day. Stairs add 30 to 60 minutes. Old flooring removal adds an additional 1 to 3 hours depending on the material being removed.',
    },
    {
      q: 'Does new carpet increase home value?',
      a: 'New carpet does not significantly increase home value on its own, but it improves buyer perception and can help a home sell faster. Stained, worn, or outdated carpet is one of the top buyer turn-offs. Replacing old carpet before listing typically returns 50 to 80 percent of the cost through faster sale and fewer buyer concessions.',
    },
    {
      q: 'How often should carpet be replaced?',
      a: 'Carpet should be replaced every 5 to 15 years depending on fiber type, pad quality, traffic level, and maintenance. Polyester in high-traffic areas may need replacement in 5 to 7 years. Quality nylon in a bedroom can last 12 to 15 years. Wool carpet in a low-traffic room can last 20 years or more with proper care.',
    },
    {
      q: 'What is the best time of year to install carpet?',
      a: 'The best time to install carpet is late fall through winter (October to February). Flooring installers are less busy during these months, which often means better pricing, faster scheduling, and more flexibility. Spring and summer are peak seasons when lead times are longer and prices tend to be higher.',
    },
    {
      q: 'How much does it cost to carpet a 10x12 room?',
      a: 'A 10x12 room (120 square feet) costs roughly $360 to $960 fully installed depending on carpet quality. With mid-range nylon and an 8 lb pad, expect $540 to $720 including labor, removal, and disposal. Add $50 to $200 if you want furniture moved.',
    },
    {
      q: 'How do I calculate my carpet installation cost?',
      a: 'Multiply your room square footage by the installed cost per square foot for the carpet you want. Add 5 to 10 percent for waste (carpet rolls are 12 or 15 feet wide, so non-square rooms generate offcuts). For stairs, count the steps and multiply by the per-step rate ($15 to $30 for standard straight, $25 to $45 for winding). Add $50 to $200 for furniture moving if needed.',
    },
    {
      q: 'What should I ask a carpet installer before signing?',
      a: 'Ask whether the quote includes pad, removal, disposal, transitions, and basic subfloor prep. Ask the pad density (8 lb minimum for warranty). Ask whether they power stretch or only knee-kick (knee-kick voids most warranties). Ask about CSLB licensing and insurance. Ask whether the carpet brand and pad meet warranty requirements. Ask about the typical install timeline.',
    },
    {
      q: 'Is professional carpet installation worth it over big-box "free install"?',
      a: 'Big-box "free install" promotions usually fold the labor cost into higher carpet and pad pricing. The total installed cost is often the same or slightly higher than a local installer charging line-item labor. The advantages of a local installer are typically better pad upgrades, transparent line items, faster scheduling, and accountability if something goes wrong on the job. Compare total installed cost, not the headline labor rate.',
    },
  ],

  'best-carpet-for-living-room': [
    {
      q: 'What is the most durable carpet for a living room?',
      a: 'Nylon carpet with a face weight of 40 oz or higher and a twist level above 5.0 is the most durable option for living rooms. Brands like Shaw Anso nylon and Mohawk Continuum nylon are specifically engineered for high-traffic residential use and carry 15 to 25 year wear warranties.',
    },
    {
      q: 'Is carpet a good choice for a living room?',
      a: 'Yes. Carpet is still one of the best flooring options for living rooms because it absorbs sound, feels warm underfoot, and provides cushion for sitting and playing on the floor. The key is choosing the right fiber and pile type for your household\'s traffic level. A quality nylon or triexta carpet in a living room lasts 10 to 15 years.',
    },
    {
      q: 'What is the best carpet for bedrooms?',
      a: 'The best carpet for bedrooms is typically a soft plush or frieze in polyester or triexta. Bedrooms get lighter traffic than living rooms, so the extra durability of nylon is not always necessary. A 30 to 40 oz polyester plush gives you a luxuriously soft feel for a lower cost. Triexta is worth the upgrade if you want stain resistance for kids\' bedrooms.',
    },
    {
      q: 'What carpet type is best for high traffic areas?',
      a: 'For carpet types for high traffic areas, choose nylon fiber in a frieze or textured cut pile. The tight twist of frieze carpet hides wear patterns, and nylon\'s natural resilience means it bounces back after being compressed. Face weight should be 40 oz or higher, and always pair it with an 8 lb density pad.',
    },
    {
      q: 'How much does living room carpet cost?',
      a: 'Living room carpet costs $1,400 to $2,300 for a typical 16x20 room (320 square feet) with mid-range nylon, professional installation, 8 lb pad, removal, and disposal included. Budget polyester brings the total down to $960 to $1,440. Premium triexta or wool pushes it to $2,500 to $3,500 or more.',
    },
    {
      q: 'Should I get light or dark carpet for my living room?',
      a: 'Neither extreme works well for living rooms. Light carpet shows every stain and dirty footprint. Dark carpet shows lint, dust, and pet hair. Medium tones like warm gray, taupe, and greige are the most forgiving and look clean the longest between vacuuming.',
    },
    {
      q: 'How long does living room carpet last?',
      a: 'Quality nylon or triexta carpet in a living room lasts 10 to 15 years with regular vacuuming and professional cleaning every 12 to 18 months. Polyester lasts 5 to 7 years in a living room before it starts matting and looking worn. Wool carpet in a low-traffic formal living room can last 15 to 25 years.',
    },
    {
      q: 'Can I put berber carpet in my living room?',
      a: 'You can, but it is not the best choice if you have pets. Loop pile carpet (berber) is durable and hides dirt well, but pet claws can snag and pull the loops, causing runs that are impossible to repair without replacing the carpet. If you want a similar look without the snag risk, choose a tight textured cut pile instead.',
    },
    {
      q: 'What is the best carpet brand for a living room?',
      a: 'Mohawk SmartStrand and Stainmaster PetProtect are the two most-installed living room brands, both for stain resistance and warranty depth. Karastan SmartStrand Reserve and wool blends are the premium step up. Shaw Anso nylon is a strong nylon option with a 25-year wear warranty. There is no single "best" brand for everyone; pick the brand whose specific living-room line matches the face weight, density, and color palette you actually want.',
    },
    {
      q: 'How do I choose a carpet color for my living room?',
      a: 'Pick a medium-tone warm neutral (beige, taupe, mushroom, soft brown) for the longest-lasting look. Avoid very light carpet (shows dirt) and very dark carpet (shows lint and pet hair). Subtle fleck or multicolor variation hides everyday wear better than solid colors. Bring full-size samples home and view them under your real lighting (morning, afternoon, and evening) before committing.',
    },
    {
      q: 'What is the best carpet for a high-traffic family room?',
      a: 'Nylon or triexta with 40 oz+ face weight, a density rating of 2,000+, and a frieze or patterned cut-loop pile. Pair it with an 8 lb minimum pad. The Shaw Anso Caress and Mohawk SmartStrand Forever Clean are two specific lines designed for this scenario. Avoid plush in family rooms; it shows every footprint.',
    },
    {
      q: 'Should I install wall-to-wall carpet or use an area rug?',
      a: 'Wall-to-wall is warmer, quieter, and visually unified. Area rugs let you mix carpet with hardwood or LVP and update the look more easily. If you go with an area rug, size it so the front legs of every seating piece sit on the rug. Most homeowners with kids and pets in the living room are happier with wall-to-wall because spills and pet messes do not run off onto the hard floor underneath.',
    },
  ],

  'lvp-vs-hardwood': [
    {
      q: 'Is LVP as good as hardwood?',
      a: 'LVP is better than hardwood for water resistance and maintenance ease. Hardwood is better for appearance, resale value, and longevity. Neither is universally "better", it depends on where you are installing it and what matters most to you.',
    },
    {
      q: 'Does LVP decrease home value?',
      a: 'LVP does not decrease home value, but it does not increase it the way hardwood does. Real estate agents consistently report that homes with hardwood floors sell faster and for higher prices than homes with vinyl plank. LVP is seen as a neutral or slightly positive feature. Hardwood is a selling point.',
    },
    {
      q: 'Can you tell the difference between LVP and hardwood?',
      a: 'In photos, no. In person, usually yes. LVP has a uniform feel and a slightly plastic look when viewed at an angle. Hardwood has natural grain variation, a warmer feel underfoot, and a depth that synthetic products cannot fully replicate. The gap is closing, but it still exists.',
    },
    {
      q: 'How long does LVP last compared to hardwood?',
      a: 'Quality LVP lasts 15 to 25 years before it needs replacement. Engineered hardwood lasts 25 to 50 years and can be refinished to extend its life further. Solid hardwood can last 50 to 100 years with proper care and multiple refinishings.',
    },
    {
      q: 'Is LVP good for dogs and pets?',
      a: 'Yes. LVP is one of the best flooring choices for homes with pets. The wear layer resists scratches from claws better than hardwood, it is waterproof against accidents, and it is easy to clean. Hardwood shows pet scratches more readily and can be damaged by urine if not cleaned up quickly.',
    },
    {
      q: 'Can you put LVP over hardwood floors?',
      a: 'Technically yes, you can float LVP over existing hardwood if the hardwood is flat, stable, and in reasonable condition. However, we generally do not recommend it. You are covering a valuable floor with a less valuable one. If your hardwood is damaged, refinishing it is usually a better investment than covering it with vinyl.',
    },
    {
      q: 'Which is easier to install, LVP or hardwood?',
      a: 'LVP is significantly easier to install. Click-lock LVP floats over the subfloor with no glue or nails, and most rooms can be completed in a few hours. Hardwood installation requires more skill, more tools, and more time, whether it is being floated, glued, or nailed down.',
    },
    {
      q: 'Should I put LVP in my whole house?',
      a: 'You can, and many homeowners do. LVP throughout is a practical, budget-friendly choice that looks cohesive and requires minimal maintenance. But if your budget allows, putting hardwood in the main living areas and LVP in wet areas gives you the best combination of appearance, practicality, and value.',
    },
    {
      q: 'What is the rule of 3 in flooring?',
      a: 'The "rule of 3" is the design guideline that limits a home to no more than three different flooring types across the main living spaces (carpet, hardwood, tile, LVP, etc.). Mixing more than three reads chaotic. The hardwood-plus-LVP-plus-tile combination is the most common 3-floor scheme; carpet for bedrooms is often the fourth, kept separate from public areas.',
    },
    {
      q: 'What flooring is trending for 2026?',
      a: 'Three trends define 2026: warm-toned wide-plank engineered hardwood (white oak in particular), wood-look porcelain plank tile in bathrooms and entryways, and rigid-core SPC vinyl plank with thicker (20+ mil) wear layers for pet households. Gray hardwood is fading. Cool-toned LVP is being replaced by warmer browns and oats.',
    },
  ],

  'best-flooring-for-pets': [
    {
      q: 'What is the most scratch resistant flooring for dogs?',
      a: 'Porcelain tile is the most scratch resistant flooring available. No dog nail can scratch it. LVP with a 20 mil or thicker wear layer is the next best option and is more comfortable for dogs to walk and lie on.',
    },
    {
      q: 'Is LVP or laminate better for dogs?',
      a: 'LVP is better for dogs than laminate. LVP is fully waterproof and handles pet accidents without damage. Laminate can swell at the seams if moisture sits on it. LVP also has a slightly softer surface that is more comfortable for pets.',
    },
    {
      q: 'Does pet urine ruin hardwood floors?',
      a: 'Yes. Pet urine penetrates hardwood finishes and causes dark staining in the wood grain. Once urine reaches the wood itself, the stain is permanent and can only be removed by sanding deeply or replacing the affected boards. This is why we recommend LVP or tile over hardwood for pet homes.',
    },
    {
      q: 'What carpet is best for homes with cats?',
      a: 'Triexta (SmartStrand) carpet in a low, dense cut-pile style is the best carpet for cat owners. It resists staining from hairballs and accidents, does not snag easily from claws, and vacuums easily to remove cat hair. Avoid loop carpet, which cats love to pull and snag.',
    },
    {
      q: 'How do I protect my floors from dog nails?',
      a: 'Keep nails trimmed every 2 to 3 weeks, use nail caps for large dogs, place rugs in high-traffic areas, and choose flooring with high scratch resistance. LVP with a 20 mil wear layer and porcelain tile are the most forgiving surfaces for dog nails.',
    },
    {
      q: 'Is waterproof flooring really necessary with pets?',
      a: 'If you have puppies, senior pets, or any animal that has occasional accidents, waterproof flooring will save you from costly damage. Even well-trained adult pets can have unexpected accidents due to illness. Waterproof flooring like LVP or tile gives you peace of mind that a single accident will not cause permanent damage.',
    },
  ],

  'polyester-vs-nylon-carpet': [
    {
      q: 'Is nylon or polyester carpet better for pets?',
      a: 'Neither is ideal on its own. Nylon is more durable but needs topical stain treatment that wears off. Polyester resists water-based stains but crushes under traffic. For pets, triexta (SmartStrand) is the best choice because it combines permanent stain resistance with good durability. If you must choose between nylon and polyester only, nylon is the better pick because its durability and cleanability outweigh polyester\'s stain resistance advantage.',
    },
    {
      q: 'Why is nylon carpet more expensive than polyester?',
      a: 'Nylon costs more to manufacture because the raw polymer is more complex to produce and the fiber engineering for resilience requires tighter quality control. Type 6,6 nylon is especially expensive because of the dual polymer process. The price difference is typically $1.50 to $2.50 per square foot at retail, which adds up to $300 to $500 per average room.',
    },
    {
      q: 'How long does polyester carpet last?',
      a: 'Polyester carpet lasts 5 to 10 years depending on traffic. In low-traffic bedrooms, a quality polyester can look good for 8 to 10 years. In living rooms, hallways, and stairs, expect 3 to 5 years before noticeable crushing and matting appear. Once polyester fibers crush, there is no way to restore them.',
    },
    {
      q: 'Can you tell the difference between nylon and polyester carpet by touch?',
      a: 'Yes, usually. Polyester feels noticeably silkier and softer than nylon of the same pile style. Nylon feels slightly coarser but also springier when you press into it. An experienced carpet installer or salesperson can identify the fiber by touch alone. If you are shopping for carpet, feel both fibers side by side and the difference is obvious.',
    },
    {
      q: 'Is solution-dyed nylon better than regular nylon?',
      a: 'Solution-dyed nylon has the color added during fiber production rather than after. This makes it extremely fade resistant and also resistant to bleach and harsh chemicals, which is useful if you need to clean pet stains with strong cleaners. It costs 10 to 20 percent more than standard dyed nylon but is worth it for pet households and sun-exposed rooms.',
    },
    {
      q: 'Should I get polyester carpet for my whole house?',
      a: 'Only if you are on a strict budget and understand the trade-offs. Polyester is fine for bedrooms, guest rooms, and low-traffic spaces. But in living rooms, hallways, and stairs, it will show wear much sooner than nylon. A smarter approach is to use nylon in high-traffic areas and polyester in bedrooms to balance cost and durability across the whole home.',
    },
  ],

  'engineered-vs-solid-hardwood': [
    {
      q: 'Is engineered hardwood real wood?',
      a: 'Yes. Engineered hardwood has a real wood surface that you see and walk on. The top layer is the same species of wood you would get with solid hardwood. The difference is underneath, where engineered hardwood has a plywood core instead of being one solid piece of wood throughout.',
    },
    {
      q: 'Does engineered hardwood scratch easily?',
      a: 'Engineered hardwood scratches at the same rate as solid hardwood because the surface is the same species of wood with the same finish. Scratch resistance depends on the wood species (hickory resists scratches better than walnut) and the finish (aluminum oxide finishes are harder than polyurethane). The engineered construction underneath does not affect scratch resistance.',
    },
    {
      q: 'Can you refinish engineered hardwood?',
      a: 'Yes, as long as the wear layer (top veneer) is thick enough. Engineered hardwood with a 2mm veneer can be lightly screened and recoated 1 to 2 times. Products with a 3mm to 4mm veneer can be fully sanded and refinished 2 to 3 times. Budget products with a 0.6mm to 1mm veneer cannot be refinished at all.',
    },
    {
      q: 'How long does engineered hardwood last?',
      a: 'Quality engineered hardwood with a 3mm or thicker veneer lasts 25 to 50 years with proper care. Budget products with thin veneers may only last 10 to 15 years because they cannot be refinished when the finish wears through. The core quality also matters since cheap HDF cores can swell if exposed to moisture.',
    },
    {
      q: 'Can you install engineered hardwood over concrete?',
      a: 'Yes. This is one of engineered hardwood\'s biggest advantages. It can be glued directly to concrete or floated over concrete with an underlayment. A moisture test should be performed on the concrete first, and a moisture barrier is recommended for all concrete installations. Solid hardwood cannot be installed directly over concrete.',
    },
    {
      q: 'Is engineered hardwood waterproof?',
      a: 'No. Engineered hardwood is more moisture-resistant than solid hardwood, but it is not waterproof. Standing water will damage engineered hardwood over time. It handles humidity changes and minor spills well, but it should not be installed in full bathrooms or areas with frequent standing water.',
    },
    {
      q: 'Which adds more value to a home, engineered or solid hardwood?',
      a: 'Buyers generally cannot tell the difference between engineered and solid hardwood. Both add significant value compared to carpet, laminate, or vinyl. The species, color, and condition of the wood matter more for resale value than whether it is engineered or solid. A well-maintained engineered oak floor adds just as much appeal as a solid oak floor.',
    },
  ],

  'vinyl-plank-flooring-cost': [
    {
      q: 'How much does it cost to install vinyl plank flooring per square foot?',
      a: 'The cost to install vinyl plank flooring runs $4 to $9 per square foot fully installed, including materials and labor. Budget SPC starts around $4. Premium WPC with thick wear layers runs $7 to $9.50. Labor alone is $1.50 to $3.50 per square foot.',
    },
    {
      q: 'How much does it cost to install 1,000 square feet of vinyl plank?',
      a: 'Installing 1,000 square feet of vinyl plank costs $4,000 to $9,000 depending on product quality and job complexity. A mid-range SPC project at this size typically runs $5,500 to $7,000 fully installed.',
    },
    {
      q: 'Is vinyl plank flooring cheaper than hardwood?',
      a: 'Yes. Vinyl plank costs $4 to $9 per square foot installed while hardwood runs $8 to $15. LVP also requires less subfloor prep and installs faster, which further reduces labor cost. The visual difference between premium LVP and real hardwood has narrowed significantly in recent years.',
    },
    {
      q: 'How long does vinyl plank flooring last?',
      a: 'Quality vinyl plank flooring lasts 15 to 25 years with normal residential use. The wear layer thickness is the biggest factor. A 12 mil wear layer handles light traffic for 10 to 15 years. A 20 mil wear layer handles heavy residential traffic for 15 to 20 years. Commercial-grade 28 mil lasts 20 to 25 years.',
    },
    {
      q: 'Does vinyl plank flooring increase home value?',
      a: 'Vinyl plank flooring improves buyer perception and typically returns 60 to 80 percent of its cost at resale. It does not carry the same premium as real hardwood, but it is far more appealing to buyers than worn carpet, outdated linoleum, or damaged laminate.',
    },
    {
      q: 'Can vinyl plank be installed over existing flooring?',
      a: 'In many cases, yes. Vinyl plank can go over existing vinyl, tile, hardwood, and even low-pile carpet in some situations, as long as the existing floor is flat, stable, and clean. Installing over existing flooring saves $0.50 to $2.00 per square foot in removal costs.',
    },
    {
      q: 'How long does vinyl plank installation take?',
      a: 'Professional installation takes 1 to 3 hours per 100 square feet depending on room complexity. A 200-square-foot bedroom takes half a day. A whole-home project of 1,500 square feet takes 2 to 3 days including removal and prep.',
    },
    {
      q: 'What is the best vinyl plank flooring for the money?',
      a: 'The best value in vinyl plank is a mid-range SPC product with a 20 mil wear layer, attached underlayment, and a thickness of 5.5mm to 6.5mm. This hits the sweet spot of durability, comfort, and cost. Products in this range run $2.50 to $3.50 per square foot for material.',
    },
  ],
};
