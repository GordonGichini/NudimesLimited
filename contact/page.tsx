// app/contact/page.tsx
import ContactForm from '@/app/components/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Nudimes Limited. Request a demo of Medinous HIS or speak with our healthcare technology experts.',
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ padding: '6rem 1rem 4rem', background: '#0f172a', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94a3b8' }}>
            Ready to transform your healthcare facility? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0f172a', marginBottom: '1.5rem' }}>
              Contact Information
            </h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.25rem' }}>Email Us</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Send us a message anytime</p>
              <a href="mailto:info@nudimeslimited.com" style={{ color: '#0d9488', textDecoration: 'none' }}>
                info@nudimeslimited.com
              </a>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.25rem' }}>Call Us</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Mon-Fri, 8AM-6PM EAT</p>
              <a href="tel:+254XXXXXXXXX" style={{ color: '#0d9488', textDecoration: 'none' }}>
                +254 XXX XXX XXX
              </a>
            </div>

            <div>
              <h3 style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.25rem' }}>Visit Us</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                Nairobi, Kenya<br />
                East Africa
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}