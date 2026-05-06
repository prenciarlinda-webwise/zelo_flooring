import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page Not Found"
        subtitle="Sorry - the page you're looking for doesn't exist or has moved."
        crumbs={[{ label: 'Home', href: '/' }, { label: '404' }]}
      />
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <Link href="/" className="btn btn-primary btn-lg">Back to Home</Link>
        </div>
      </section>
    </>
  );
}
