import useInView from '../hooks/useInView'

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#e6fafb" />
        <path d="M16 18H32M16 24H28M16 30H24" stroke="#0cc0df" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="30" y="26" width="6" height="8" rx="1" fill="#0cc0df" opacity="0.5" />
      </svg>
    ),
    title: 'Data Structure Analysis',
    desc: 'Deep audit of your SharePoint environment to map file organization, naming conventions, and content quality across every site and library.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#FFF4CE" />
        <path d="M24 14V24L30 28" stroke="#ffde59" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="12" stroke="#ffde59" strokeWidth="2.5" />
      </svg>
    ),
    title: 'Automated Cleanup',
    desc: 'Power Automate workflows detect duplicates, fix naming, enrich metadata, and reorganize content — all without disrupting daily operations.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#E8F5E9" />
        <path d="M18 24L22 28L30 20" stroke="#107C10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="12" stroke="#107C10" strokeWidth="2.5" />
      </svg>
    ),
    title: 'Copilot Optimization',
    desc: 'Fine-tune Copilot settings, build custom agents in Copilot Studio, and configure AI Builder to deliver accurate, relevant answers every time.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#e6fafb" />
        <path d="M20 16L28 24L20 32" stroke="#0cc0df" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 24H28" stroke="#0cc0df" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="30" y="18" width="4" height="12" rx="2" fill="#0cc0df" opacity="0.4" />
      </svg>
    ),
    title: 'Training & Adoption',
    desc: 'Hands-on training programs and change management support to drive organization-wide adoption and ensure lasting productivity gains.',
  },
]

export default function Features() {
  const [ref, isVisible] = useInView()

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            A smarter way to unlock Copilot
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Everything you need to transform SharePoint into an AI-ready data ecosystem
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group bg-white border border-gray-200 rounded-xl p-8 pb-7 flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:border-transparent transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-3 tracking-tight">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">{f.desc}</p>
              <a href="#solutions" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-3 transition-all duration-200">
                Learn more
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
