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

const programs = [
  {
    title: 'Executive Briefings',
    desc: 'Strategic overview of Copilot capabilities and ROI for leadership teams.',
    icon: (
      <svg className="w-7 h-7 text-[#0cc0df]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
  {
    title: 'Power User Workshops',
    desc: 'Deep-dive sessions for your most engaged users to become internal Copilot champions.',
    icon: (
      <svg className="w-7 h-7 text-[#ffde59]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Department-Specific Sessions',
    desc: 'Tailored training for HR, Finance, Marketing, Legal, and other departments.',
    icon: (
      <svg className="w-7 h-7 text-[#0cc0df]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Change Management Support',
    desc: 'Strategies and materials to drive adoption and overcome resistance to new AI tools.',
    icon: (
      <svg className="w-7 h-7 text-[#ffde59]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
]

const learnings = [
  'Best practices for prompting Copilot',
  'How to use Copilot in Word, Excel, PowerPoint, and Teams',
  'Building custom agents in Copilot Studio',
  'Measuring and improving Copilot ROI',
]

const formats = [
  {
    title: 'Virtual Instructor-Led',
    desc: 'Live sessions via Teams with interactive exercises and Q&A.',
    icon: '🖥️',
  },
  {
    title: 'On-Site Workshops',
    desc: 'In-person training at your office for hands-on, immersive learning.',
    icon: '🏢',
  },
  {
    title: 'Self-Paced Materials',
    desc: 'Comprehensive learning materials your team can access anytime.',
    icon: '📚',
  },
  {
    title: 'Ongoing Office Hours',
    desc: 'Regular drop-in sessions for questions, tips, and continued learning.',
    icon: '🕐',
  },
]

export default function CopilotTrainingPage() {
  return (
    <>
      <PageHero
        title="Copilot Training & Adoption"
        subtitle="Hands-on training programs to drive organization-wide Copilot adoption"
      />

      {/* Training Programs */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Training Programs</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              Programs designed for every level of your organization — from leadership to end users.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((prog) => (
              <AnimatedSection key={prog.title}>
                <div className="flex items-start gap-5 p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#0cc0df]/40 hover:bg-white/[0.05] transition-all duration-300 group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#0cc0df]/30 transition-colors">
                    {prog.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{prog.title}</h3>
                    <p className="text-white/60 leading-relaxed">{prog.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">What You'll Learn</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              Practical skills your team can put to use on day one.
            </p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto space-y-4">
            {learnings.map((item) => (
              <AnimatedSection key={item}>
                <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#0cc0df]/40 hover:bg-white/[0.05] transition-all duration-300">
                  <CheckIcon />
                  <span className="text-white/90 leading-relaxed">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Training Formats</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              Flexible delivery options to fit your team's schedule and preferences.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((fmt) => (
              <AnimatedSection key={fmt.title}>
                <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#0cc0df]/40 hover:bg-white/[0.05] transition-all duration-300 text-center h-full">
                  <div className="text-4xl mb-4">{fmt.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{fmt.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{fmt.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Empower Your Team With Copilot"
        subtitle="Get your organization trained and ready to get the most out of Microsoft Copilot."
        buttonText="Schedule Training"
        buttonTo="/contact"
      />
    </>
  )
}
