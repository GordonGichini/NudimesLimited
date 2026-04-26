import Link from 'next/link';

const solutions = [
  { title: 'Unified Patient Records', slug: 'emr', description: 'Electronic Medical Records (EMR) that make patient history instantly accessible across your healthcare facility.', features: ['Complete patient history', 'Instant access to medical records', 'Secure cloud-based storage'], icon: '📋' },
  { title: 'Billing & Claims Management', slug: 'billing', description: 'Seamlessly generate invoices, submit claims (e.g., to NHIF), and track reimbursements.', features: ['Automated invoice generation', 'NHIF claims submission', 'Reimbursement tracking'], icon: '💰' },
  { title: 'Inventory & Pharmacy Module', slug: 'inventory', description: 'Track medicines and supplies in real-time, reducing stock-outs and wastage.', features: ['Real-time inventory tracking', 'Automated reorder alerts', 'Expiry date management'], icon: '💊' },
  { title: 'Lab & Radiology Integration', slug: 'lab-radiology', description: 'Requests and results flow directly into patient records for seamless care coordination.', features: ['Direct lab integration', 'Digital radiology results', 'Automated report delivery'], icon: '🔬' },
  { title: 'Analytics & Reporting', slug: 'analytics', description: 'Dashboards for administrators to see financial health, patient volumes, and resource usage.', features: ['Real-time dashboards', 'Financial analytics', 'Resource utilization reports'], icon: '📊' },
  { title: 'User-Friendly Interface', slug: 'interface', description: 'Built for clinical staff — intuitive workflows, mobile-friendly, and easy to adopt.', features: ['Intuitive design', 'Mobile-responsive', 'Minimal training required'], icon: '📱' },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">
          Complete Healthcare Technology Solutions
        </h2>
        <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
          End-to-end Medinous HIS implementation and support services for healthcare facilities across East Africa
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div key={solution.slug} className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{solution.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{solution.title}</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">{solution.description}</p>
              <ul className="space-y-1.5 mb-4">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-teal-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={`/solutions/${solution.slug}`} className="text-teal-600 text-sm font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}