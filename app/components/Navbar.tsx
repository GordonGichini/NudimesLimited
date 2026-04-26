'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          NUDIMES
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm hover:text-teal-400 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-sm">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}