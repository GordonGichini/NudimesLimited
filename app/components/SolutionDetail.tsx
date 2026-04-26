// app/components/SolutionDetail.tsx
import Link from 'next/link';

interface SolutionDetailProps {
  module: {
    slug: string;
    title: string;
    seoDescription: string;
    ogImage: string;
  };
}

export default function SolutionDetail({ module }: SolutionDetailProps) {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ padding: '6rem 1rem 4rem', background: '#0f172a', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>
            {module.title}
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94a3b8', lineHeight: 1.7 }}>
            {module.seoDescription}
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>
            Overview
          </h2>
          <p style={{ color: '#64748b', lineHeight: 1.7 }}>
            {module.seoDescription} Our team ensures seamless implementation and 24/7 support.
          </p>
        </div>

        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            padding: '0.875rem 2rem',
            background: '#0d9488',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 600,
          }}
        >
          Request a Demo →
        </Link>
      </section>
    </div>
  );
}