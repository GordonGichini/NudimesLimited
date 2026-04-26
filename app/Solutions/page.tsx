import Link from 'next/link';
import { modules } from '../lib/data';

export const metadata = {
  title: 'Solutions | Nudimes Limited',
  description: 'Complete Medinous HIS solutions for healthcare facilities across East Africa.',
};

export default function SolutionsPage() {

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 px-4 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Solutions</h1>
          <p className="text-lg text-slate-400">
            Comprehensive healthcare technology solutions powered by Medinous HIS
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <Link
              key={mod.slug}
              href={`/solutions/${mod.slug}`}
              className="block bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-slate-900 mb-2">{mod.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{mod.seoDescription}</p>
              <span className="text-teal-600 font-medium text-sm">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}