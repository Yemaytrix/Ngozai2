import PageHero from '../../components/PageHero'
import CTABanner from '../../components/CTABanner'
import useInView from '../../hooks/useInView'

const weeks = [
  {
    week: '1',
    title: 'Discovery & Assessment',
    desc: 'Deep audit of SharePoint environment, Copilot usage patterns, data quality across all sites.',
    deliverables: ['Data quality scorecard', 'Current state analysis', 'Stakeholder interviews'],
    color: 'from-brand to-brand/80',
  },
  {
    week: '2',
    title: 'Automated Cleanup',
    desc: 'Deploy Power Automate workflows to fix naming, remove duplicates, enrich metadata, restructure content.',
    deliverables: ['Power Automate', 'AI Builder', 'Microsoft Graph API'],
    label: 'Tools',
    color: 'from-brand/80 to-accent/80',
  },
  {
    week: '3',
    title: 'Copilot Optimization',
    desc: 'Configure Copilot settings, build custom agents in Copilot Studio, fine-tune AI Builder.',
    deliverables: ['Accuracy benchmarking', 'User acceptance testing'],
    label: 'Testing',
    color: 'from-accent/80 to-accent',
  },
  {
    week: '4',
    title: 'Training & Launch',
    desc: 'Hands-on team training, change management support, go-live with monitoring.',
    deliverables: ['Training materials', 'Adoption playbook', '30-day support'],
    label: 'Includes',
    color: 'from-accent to-accent/80',
  },
]

function AnimatedSection({ children, className = '' }) {
  const [ref, isVisible] = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  )
}

function TimelineCard({ step, index }) {
  const [ref, isVisible] = useInView()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Desktop layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
        {/* Left column */}
        <div className={isEven ? '' : 'order-3'}>
          {isEven && <CardContent step={step} />}
        </div>

        {/* Center marker */}
        <div className="flex flex-col items-center order-2">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-black text-2xl font-bold shadow-lg border-4 border-white`}>
            {step.week}
          </div>
        </div>

        {/* Right column */}
        <div className={isEven ? 'order-3' : ''}>
          {!isEven && <CardContent step={step} />}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden pl-20 relative">
        <div className={`absolute left-0 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-black text-2xl font-bold shadow-md border-4 border-white`}>
          {step.week}
        </div>
        <CardContent step={step} />
      </div>
    </div>
  )
}

function CardContent({ step }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">Week {step.week}</div>
      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
      <p className="text-muted leading-relaxed mb-5">{step.desc}</p>
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-black/50 mb-2 block">
          {step.label || 'Deliverables'}
        </span>
        <ul className="space-y-1.5">
          {step.deliverables.map((d) => (
            <li key={d} className="flex items-center gap-2 text-sm text-muted">
              <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0">
                <circle cx="10" cy="10" r="10" fill="#0cc0df" />
                <path d="M6 10L9 13L14 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="Our Process"
        subtitle="From assessment to launch in just 4 weeks"
      />

      {/* Timeline */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The 4-Week Journey</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Each week builds on the last, delivering measurable progress at every stage.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Desktop center line */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-px top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand to-accent" />
            {/* Mobile left line */}
            <div className="lg:hidden absolute left-[27px] top-7 bottom-7 w-0.5 bg-gradient-to-b from-brand to-accent" />

            <div className="space-y-12 lg:space-y-16">
              {weeks.map((step, i) => (
                <TimelineCard key={step.week} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why 4 Weeks */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-black to-brand/90 rounded-xl p-10 md:p-14 text-white">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why 4 Weeks?</h2>
              <p className="text-white/85 leading-relaxed text-lg mb-8">
                Traditional SharePoint cleanup takes 3-6 months of manual work. Our automated approach achieves better
                results in 4 weeks because we use Power Platform tools to do in days what IT teams do in months.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { stat: '3-6 mo', label: 'Traditional Timeline' },
                  { stat: '4 wks', label: 'Ngozai Timeline' },
                  { stat: '80%', label: 'Better Accuracy' },
                ].map((item) => (
                  <div key={item.label} className="text-center bg-white/10 rounded-lg p-5 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-accent mb-1">{item.stat}</div>
                    <div className="text-sm text-white/70">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
