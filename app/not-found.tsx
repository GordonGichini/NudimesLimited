// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '6rem', fontWeight: 700, color: '#0d9488', marginBottom: '0' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
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
          Go Home
        </Link>
      </div>
    </div>
  );
}