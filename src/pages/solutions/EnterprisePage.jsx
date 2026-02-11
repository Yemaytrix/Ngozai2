import PageHero from '../../components/PageHero'
import CTABanner from '../../components/CTABanner'
import useInView from '../../hooks/useInView'

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#0cc0df] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="w-5 h-5 text-[#ffde59] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
  'Everything in Automated Data Organization',
  'Custom Copilot Studio agents tailored to your workflows',
  'AI Builder configuration for document intelligence',
  'Team training & adoption programs',
  'Ongoing optimization support',
  'Dedicated success manager',
]

const forOrganizations = [
  'Have 1,500+ employees',
  'Are deploying Copilot organization-wide',
  'Need custom AI agents for specific workflows',
  'Want guaranteed results with ongoing support',
]

export default function EnterprisePage() {
  return (
    <>
      <PageHero
        title="Enterprise Implementation"
        subtitle="Complete transformation with custom Copilot agents and ongoing optimization"
      />

      {/* What's Included */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">What's Included</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              The most comprehensive solution — from data cleanup to custom AI agents and long-term success.
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

      {/* For Organizations That */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Built For Organizations That</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              This tier is designed for large-scale, high-impact Copilot deployments.
            </p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
            {forOrganizations.map((item) => (
              <AnimatedSection key={item}>
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-[#ffde59]/20 bg-[#ffde59]/[0.03] hover:border-[#ffde59]/40 hover:bg-[#ffde59]/[0.06] transition-all duration-300">
                  <ArrowIcon />
                  <span className="text-white/90 leading-relaxed">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get — Highlights */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Enterprise Highlights</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              Purpose-built capabilities that set the Enterprise tier apart.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Copilot Agents',
                desc: 'Purpose-built agents in Copilot Studio designed for your unique business processes and workflows.',
                icon: (
                  <svg className="w-7 h-7 text-[#0cc0df]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                ),
              },
              {
                title: 'Dedicated Success Manager',
                desc: 'A single point of contact who ensures your goals are met and continuously optimizes your setup.',
                icon: (
                  <svg className="w-7 h-7 text-[#ffde59]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
              },
              {
                title: 'Ongoing Optimization',
                desc: 'Continuous monitoring and improvements so your Copilot ROI grows month over month.',
                icon: (
                  <svg className="w-7 h-7 text-[#0cc0df]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                ),
              },
            ].map((card) => (
              <AnimatedSection key={card.title}>
                <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#0cc0df]/40 hover:bg-white/[0.05] transition-all duration-300 text-center group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5 group-hover:border-[#0cc0df]/30 transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-white/60 leading-relaxed">{card.desc}</p>
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
                  <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Pricing</p>
                  <p className="text-2xl font-bold text-[#0cc0df]">Custom based on scope</p>
                </div>
                <div className="hidden sm:block w-px h-14 bg-white/10" />
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Timeline</p>
                  <p className="text-2xl font-bold text-[#ffde59]">3–4 weeks + ongoing</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="Let's Build Your Enterprise Solution"
        subtitle="Talk to our team about a custom implementation plan tailored to your organization's needs."
        buttonText="Contact Us"
        buttonTo="/contact"
      />
    </>
  )
}
