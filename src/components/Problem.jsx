import useInView from '../hooks/useInView'

const cards = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#e6fafb" />
        <path d="M16 18H32M16 24H28M16 30H24" stroke="#0cc0df" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="30" y="26" width="6" height="8" rx="1" fill="#0cc0df" opacity="0.5" />
      </svg>
    ),
    title: 'Messy Data',
    text: 'Duplicate files, inconsistent naming, no metadata — your SharePoint is a maze. Copilot can\'t find or trust the data it needs.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#FFF4CE" />
        <path d="M24 14V24L30 28" stroke="#ffde59" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="12" stroke="#ffde59" strokeWidth="2.5" />
      </svg>
    ),
    title: 'Poor Results',
    text: 'Copilot returns irrelevant, incomplete, or incorrect answers. Users lose trust and stop using the tool entirely.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#fde8e8" />
        <path d="M24 14V28M24 32V33" stroke="#d13438" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="12" stroke="#d13438" strokeWidth="2.5" />
      </svg>
    ),
    title: 'Wasted Investment',
    text: 'At $30/user/month, poor Copilot performance means thousands wasted. Organizations see negative ROI from day one.',
  },
]

export default function Problem() {
  const [ref, isVisible] = useInView()

  return (
    <section id="problem" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Problem</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">Most organizations aren't seeing ROI from Microsoft Copilot — and messy data is the root cause</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <div key={c.title} className="bg-white border border-gray-200 rounded-lg p-9 hover:-translate-y-1 hover:shadow-lg hover:border-transparent transition-all duration-300" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="mb-6">{c.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
              <p className="text-muted leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
