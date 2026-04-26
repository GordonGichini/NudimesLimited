import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url(/hero-bg.jpg)] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/90" />

      <div className="relative z-10 max-w-3xl text-center px-6 py-16">
        <div className="inline-block px-4 py-1.5 bg-teal-500/20 border border-teal-500/40 rounded-full text-sm text-teal-300 mb-6">
          Authorized Medinous Partner
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Transforming Healthcare Across East Africa
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
          Trusted partner in digital healthcare transformation, delivering world-class Medinous Hospital Information Systems to healthcare providers across the region.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="px-8 py-3.5 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">
            Request a Demo
          </Link>
          <Link href="/solutions" className="px-8 py-3.5 bg-transparent text-white rounded-lg font-semibold border border-white/30 hover:bg-white/10 transition-colors">
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}