const stats = [
  { value: '50K+', label: 'Patients Served Daily' },
  { value: '1000+', label: 'Healthcare Professionals' },
  { value: '10+', label: 'Years of Experience' },
  { value: '24/7', label: 'Technical Support' },
];

export default function StatsSection() {
  return (
    <section className="py-12 px-4 bg-teal-600 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}