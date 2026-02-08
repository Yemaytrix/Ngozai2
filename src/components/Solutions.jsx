import useInView from '../hooks/useInView'

const tiers = [
  {
    num: '01',
    title: 'AI Readiness Assessment',
    desc: 'Comprehensive audit of your SharePoint environment with actionable recommendations.',
    features: ['Full SharePoint environment audit', 'Data quality scoring', 'Copilot readiness report', 'Prioritized action plan'],
    price: '$5,000',
    featured: false,
  },
  {
    num: '02',
    title: 'Automated Data Organization',
    desc: 'End-to-end automated cleanup and optimization of your SharePoint data.',
    features: ['Everything in Assessment', 'Power Automate workflows', 'Metadata enrichment', 'Duplicate detection & cleanup', 'Naming convention enforcement'],
    price: '$25,000',
    featured: true,
  },
  {
    num: '03',
    title: 'Full Enterprise Implementation',
    desc: 'Complete transformation with custom Copilot agents and ongoing optimization.',
    features: ['Everything in Organization', 'Custom Copilot Studio agents', 'AI Builder configuration', 'Team training & adoption', 'Ongoing optimization support'],
    price: 'Custom',
    featured: false,
  },
]

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0">
      <circle cx="10" cy="10" r="10" fill="#0cc0df" />
      <path d="M6 10L9 13L14 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Solutions() {
  const [ref, isVisible] = useInView()

  return (
    <section id="solutions" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Solutions</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">Choose the package that fits your organization's needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <div key={t.num} className={`relative bg-white rounded-lg p-9 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${t.featured ? 'border-2 border-brand bg-gradient-to-br from-brand/[0.03] to-accent/[0.02]' : 'border border-gray-200'}`}>
              {t.featured && (
                <span className="absolute -top-3.5 right-8 bg-brand text-black text-xs font-semibold px-4 py-1.5 rounded-full">Most Popular</span>
              )}
              <span className="text-4xl font-bold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent mb-2 leading-none">{t.num}</span>
              <h3 className="text-xl font-semibold mb-4">{t.title}</h3>
              <p className="text-muted mb-7 leading-relaxed flex-grow">{t.desc}</p>
              <ul className="space-y-3 mb-7">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-7 border-t border-gray-100">
                <span className="text-xl font-bold text-brand">{t.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
