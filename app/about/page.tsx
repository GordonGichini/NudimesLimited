// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Nudimes Limited - the authorized Medinous HIS distributor transforming healthcare across East Africa for over a decade.',
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '6rem 1rem 4rem', background: '#0f172a', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>
            About Nudimes Limited
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94a3b8', lineHeight: 1.7 }}>
            Your trusted partner in digital healthcare transformation across East Africa
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>
            Trusted Healthcare Technology Partner
          </h2>
          <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '1rem' }}>
            As the authorized distributor of Medinous Hospital Information Systems in East Africa, we bring world-class digital healthcare solutions to medical facilities across the region.
          </p>
          <p style={{ color: '#64748b', lineHeight: 1.7 }}>
            With over a decade of experience, we understand the unique challenges facing healthcare providers in East Africa and deliver tailored solutions that improve patient care, streamline operations, and ensure regulatory compliance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
            <h3 style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Proven Expertise</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Over a decade implementing healthcare technology solutions across East Africa.</p>
          </div>
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
            <h3 style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Comprehensive Support</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>End-to-end implementation, training, and 24/7 technical support.</p>
          </div>
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌍</div>
            <h3 style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Local Understanding</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Deep knowledge of East African healthcare landscape and regional needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}