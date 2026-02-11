import PageHero from '../../components/PageHero'
import CTABanner from '../../components/CTABanner'
import useInView from '../../hooks/useInView'

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#0cc0df] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

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

const included = [
  'Full SharePoint environment audit',
  'Data quality scoring across all sites and libraries',
  'Copilot readiness report with specific metrics',
  'Prioritized action plan with quick wins',
]

const steps = [
  { num: '1', title: 'Discovery Call', desc: 'Discovery call to understand your environment' },
  { num: '2', title: 'Deep Audit', desc: 'Automated + manual audit of SharePoint data' },
  { num: '3', title: 'Detailed Report', desc: 'Detailed report with prioritized recommendations' },
]

const deliverables = [
  'Executive summary',
  'Data quality scorecard',
  'Copilot readiness score',
  'Prioritized roadmap',
  'ROI projections',
]

export default function AIReadinessPage() {
  return (
    <>
      <PageHero
        title="AI Readiness Assessment"
        subtitle="Comprehensive audit of your SharePoint environment with actionable recommendations"
      />

      {/* What's Included */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">What's Included</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              Everything you need to understand your current state and chart a clear path forward.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {included.map((item) => (
              <AnimatedSection key={item}>
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#0cc0df]/40 hover:bg-white/[0.05] transition-all duration-300">
                  <CheckIcon />
                  <span className="text-white/90 leading-relaxed">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">How It Works</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              A straightforward three-step process that delivers clarity fast.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <AnimatedSection key={step.num}>
                <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#0cc0df]/40 hover:bg-white/[0.05] transition-all duration-300 text-center group">
                  <div className="w-12 h-12 rounded-full bg-[#0cc0df]/10 border border-[#0cc0df]/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#0cc0df]/20 transition-colors">
                    <span className="text-[#0cc0df] font-bold text-lg">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Deliverables</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              You'll walk away with a comprehensive package of actionable insights.
            </p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto space-y-4">
            {deliverables.map((item) => (
              <AnimatedSection key={item}>
                <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#0cc0df]/40 hover:bg-white/[0.05] transition-all duration-300">
                  <CheckIcon />
                  <span className="text-white/90">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-xl mx-auto text-center p-10 rounded-2xl border border-[#0cc0df]/30 bg-[#0cc0df]/[0.04]">
              <h2 className="text-3xl font-bold text-white mb-6">Investment</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-4">
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Starting at</p>
                  <p className="text-4xl font-bold text-[#0cc0df]">$5,000</p>
                </div>
                <div className="hidden sm:block w-px h-14 bg-white/10" />
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Timeline</p>
                  <p className="text-4xl font-bold text-[#ffde59]">1–2 weeks</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="Ready to Assess Your AI Readiness?"
        subtitle="Get a comprehensive audit of your SharePoint environment and a clear roadmap to Copilot success."
        buttonText="Book Your Assessment"
        buttonTo="/contact"
      />
    </>
  )
}
