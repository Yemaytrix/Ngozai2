import useInView from '../hooks/useInView'

const steps = [
  { week: '1', title: 'Discovery & Assessment', desc: 'Deep audit of your SharePoint environment, Copilot usage patterns, and data quality across all sites and libraries.' },
  { week: '2', title: 'Automated Cleanup', desc: 'Deploy Power Automate workflows to fix naming, remove duplicates, enrich metadata, and restructure content.' },
  { week: '3', title: 'Copilot Optimization', desc: 'Configure Copilot settings, build custom agents in Copilot Studio, and fine-tune AI Builder for accurate responses.' },
  { week: '4', title: 'Training & Launch', desc: 'Hands-on training for your team, change management support, and go-live with ongoing optimization monitoring.' },
]

function TimelineItem({ step, index }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      className={`relative pl-24 mb-14 last:mb-0 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Marker */}
      <div className="absolute left-0 w-14 h-14 bg-brand rounded-full flex items-center justify-center text-black text-2xl font-bold shadow-md border-4 border-white">
        {step.week}
      </div>

      {/* Content */}
      <div className="bg-white p-7 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-brand mb-3">{step.title}</h3>
        <p className="text-muted leading-relaxed">{step.desc}</p>
      </div>
    </div>
  )
}

export default function Process() {
  const [ref, isVisible] = useInView()

  return (
    <section id="process" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Process</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">From assessment to launch in just 4 weeks</p>
        </div>
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[27px] top-7 bottom-7 w-0.5 bg-gradient-to-b from-brand to-accent" />

          {steps.map((s, i) => (
            <TimelineItem key={s.week} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
