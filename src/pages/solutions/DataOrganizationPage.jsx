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
  'Everything in the AI Readiness Assessment',
  'Power Automate workflows for ongoing cleanup',
  'Metadata enrichment across sites and libraries',
  'Duplicate detection & cleanup',
  'Naming convention enforcement',
  'Permission optimization',
]

const technologies = [
  { name: 'Power Automate', desc: 'Automated workflows that keep your data clean 24/7' },
  { name: 'AI Builder', desc: 'Intelligent classification and tagging of documents' },
  { name: 'SharePoint Online', desc: 'Deep integration with your existing environment' },
  { name: 'Microsoft Graph API', desc: 'Programmatic access to optimize every corner of your tenant' },
]

const results = [
  { stat: '80%', label: 'Improvement in Copilot accuracy', color: 'text-[#0cc0df]' },
  { stat: '60%', label: 'Reduction in duplicate files', color: 'text-[#ffde59]' },
  { stat: '90%', label: 'Metadata coverage achieved', color: 'text-[#0cc0df]' },
]

export default function DataOrganizationPage() {
  return (
    <>
      <PageHero
        title="Automated Data Organization"
        subtitle="End-to-end automated cleanup and optimization of your SharePoint data"
      />

      {/* Most Popular Badge Banner */}
      <section className="bg-black pt-10 pb-0">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffde59]/10 border border-[#ffde59]/40 text-[#ffde59] font-semibold text-sm tracking-wide">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
              Most Popular Solution
            </span>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">What's Included</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              A full-service data transformation — assessment, cleanup, and automation in one package.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Technologies Used */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Technologies Used</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              We leverage the full Microsoft ecosystem to deliver lasting results.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech) => (
              <AnimatedSection key={tech.name}>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#0cc0df]/40 hover:bg-white/[0.05] transition-all duration-300 group">
                  <h3 className="text-lg font-semibold text-[#0cc0df] mb-2 group-hover:text-[#0cc0df] transition-colors">{tech.name}</h3>
                  <p className="text-white/60 leading-relaxed">{tech.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Proven Results</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              Real numbers from real client engagements.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((r) => (
              <AnimatedSection key={r.label}>
                <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#0cc0df]/40 hover:bg-white/[0.05] transition-all duration-300">
                  <p className={`text-5xl font-bold mb-3 ${r.color}`}>{r.stat}</p>
                  <p className="text-white/70 leading-relaxed">{r.label}</p>
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
            <div className="max-w-xl mx-auto text-center p-10 rounded-2xl border border-[#ffde59]/30 bg-[#ffde59]/[0.04] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#ffde59] text-black text-xs font-bold px-4 py-1 rounded-bl-lg">
                MOST POPULAR
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Investment</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-4">
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Starting at</p>
                  <p className="text-4xl font-bold text-[#0cc0df]">$25,000</p>
                </div>
                <div className="hidden sm:block w-px h-14 bg-white/10" />
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Timeline</p>
                  <p className="text-4xl font-bold text-[#ffde59]">2–3 weeks</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="Ready to Organize Your Data?"
        subtitle="Transform your SharePoint environment and unlock the full potential of Microsoft Copilot."
        buttonText="Get Started"
        buttonTo="/contact"
      />
    </>
  )
}
