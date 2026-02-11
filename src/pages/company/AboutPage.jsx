import PageHero from '../../components/PageHero'
import CTABanner from '../../components/CTABanner'
import useInView from '../../hooks/useInView'

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#0cc0df" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="#0cc0df" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="#0cc0df" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Innovation',
    desc: 'Pushing boundaries of what\'s possible with Microsoft AI.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#0cc0df" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#0cc0df" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Integrity',
    desc: '100% Microsoft-native, no third-party dependencies.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#0cc0df" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Impact',
    desc: 'Measurable results with 80% accuracy improvement.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#0cc0df" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="#0cc0df" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#0cc0df" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Partnership',
    desc: 'Your success is our success.',
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Ngozai"
        subtitle="Microsoft technology pioneers making Copilot work for enterprise organizations"
      />

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
            <div className="w-full aspect-square bg-surface rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="/assets/images/Ngozai logo.png"
                alt="Ngozai"
                className="w-3/5 h-auto object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Mission</h2>
              <p className="text-xl font-semibold text-brand mb-6 leading-snug">
                We believe every organization deserves AI that actually works.
              </p>
              <p className="text-muted leading-relaxed text-lg">
                Ngozai transforms messy SharePoint environments into intelligent data foundations — so your Microsoft Copilot investment finally delivers on its promise. We don't add complexity; we unlock the potential already inside your Microsoft ecosystem.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Story</h2>
            <p className="text-muted leading-relaxed text-lg mb-6">
              Ngozai was founded by <span className="font-semibold text-black">Michelle Martin</span> and{' '}
              <span className="font-semibold text-black">Danielle Thibeadeaux</span>, Microsoft technology pioneers who
              co-created the first Power Automate and Power Virtual Agent templates still in use across the Microsoft
              ecosystem today.
            </p>
            <p className="text-muted leading-relaxed text-lg">
              With deep expertise in Power Platform, AI Builder, and Copilot Studio, they identified the root cause of poor
              Copilot performance: messy, unorganized SharePoint data. Ngozai was built to solve this problem at scale —
              using 100% Microsoft-native tools with zero third-party dependencies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Values</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Innovation */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-10 md:p-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#0cc0df" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Healthcare Innovation</h2>
              </div>
              <p className="text-muted leading-relaxed text-lg mb-6">
                Beyond SharePoint optimization, Ngozai is pioneering AI-driven solutions in healthcare, including clinical
                trial agent technology that streamlines research workflows and addresses the enrollment crisis affecting
                cancer research.
              </p>
              <p className="text-muted leading-relaxed text-lg">
                Our healthcare technology leverages the same Microsoft-native approach — integrating with existing hospital
                systems to accelerate research without adding vendor complexity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

function ValueCard({ value, index }) {
  const [ref, isVisible] = useInView()
  return (
    <div
      ref={ref}
      className={`bg-surface rounded-xl p-8 text-center border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-transparent transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-brand/10 flex items-center justify-center">
        {value.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
      <p className="text-muted leading-relaxed">{value.desc}</p>
    </div>
  )
}
