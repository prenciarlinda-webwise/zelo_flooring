export type FaqItem = { q: string; a: string };

export default function FaqList({ items, includeSchema = true }: { items: FaqItem[]; includeSchema?: boolean }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };

  return (
    <>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="faq-list">
        {items.map((item, idx) => (
          <details key={item.q} open={idx === 0}>
            <summary>
              <h3 className="faq-q">{item.q}</h3>
            </summary>
            <div className="faq-body">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
