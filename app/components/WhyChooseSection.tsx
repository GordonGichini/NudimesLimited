const reasons = [
  {
    title: 'Proven Expertise',
    description: 'Over a decade of experience implementing healthcare technology solutions across East Africa.',
    icon: '🏆',
  },
  {
    title: 'Comprehensive Support',
    description: 'End-to-end implementation, training, and 24/7 technical support to ensure seamless operations.',
    icon: '🤝',
  },
  {
    title: 'Local Understanding',
    description: 'Deep knowledge of East African healthcare landscape with solutions tailored to regional needs.',
    icon: '🌍',
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-16 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Why Choose Nudimes?</h2>
        <p className="text-center text-slate-400 mb-12">
          Trusted partner in digital healthcare transformation
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-white/5 p-8 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}