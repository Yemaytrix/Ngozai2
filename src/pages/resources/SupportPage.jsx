import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import CTABanner from '../../components/CTABanner'
import useInView from '../../hooks/useInView'

function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const steps = [
  {
    number: '01',
    title: 'Schedule Your Assessment',
    description:
      'Contact us to book a free initial consultation. We will discuss your current SharePoint environment and Copilot goals.',
  },
  {
    number: '02',
    title: 'Environment Review',
    description:
      'Our team runs an automated audit of your SharePoint data, identifying gaps in metadata, naming, and structure.',
  },
  {
    number: '03',
    title: 'Receive Your Report',
    description:
      'You will get a detailed AI-readiness scorecard with prioritized recommendations and a clear action plan.',
  },
  {
    number: '04',
    title: 'Implementation & Optimization',
    description:
      'We deploy automated workflows to organize your data, then monitor and refine until Copilot accuracy is maximized.',
  },
]

const supportChannels = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: 'Email Support',
    detail: 'hello@ngozai.com',
    sub: 'Response within 24 hours',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Response Time',
    detail: 'Within 24 hours',
    sub: 'Priority support for Enterprise clients',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Dedicated Success Manager',
    detail: 'Enterprise Clients',
    sub: 'Your single point of contact for all needs',
  },
]

const commonIssues = [
  {
    title: 'Copilot not finding documents',
    description:
      'This is usually caused by missing or inconsistent metadata. Our optimization workflows automatically tag and categorize your files so Copilot can locate them.',
  },
  {
    title: 'Slow search results',
    description:
      'Large volumes of unstructured data can slow down search indexing. We streamline your SharePoint architecture and remove redundancies to improve performance.',
  },
  {
    title: 'Permission-related errors',
    description:
      'Overly restrictive or misconfigured permissions prevent Copilot from accessing the data it needs. We audit and rationalize your permission model for optimal access.',
  },
  {
    title: 'Metadata not syncing',
    description:
      'Automation flows may encounter sync delays due to throttling or misconfigured connections. We troubleshoot and optimize your Power Automate flows for reliable execution.',
  },
]

const resources = [
  { label: 'Frequently Asked Questions', to: '/faq' },
  { label: 'Our Process', to: '/process' },
  { label: 'AI Readiness Assessment', to: '/solutions/ai-readiness-assessment' },
]

export default function SupportPage() {
  return (
    <>
      <PageHero
        title="Support"
        subtitle="We're here to help you succeed with Copilot"
      />

      {/* Getting Started */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Getting Started
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#0cc0df]/30 transition-colors">
                  <span className="text-4xl font-bold text-[#0cc0df]/20 absolute top-4 right-6">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Support Channels
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#0cc0df]/10 flex items-center justify-center text-[#0cc0df]">
                    {channel.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {channel.title}
                  </h3>
                  <p className="text-[#0cc0df] font-medium mb-1">{channel.detail}</p>
                  <p className="text-white/50 text-sm">{channel.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Common Issues
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Here are some frequently encountered issues and how we address them.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {commonIssues.map((issue, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <h3 className="text-lg font-semibold text-[#ffde59] mb-2">
                    {issue.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {issue.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-8">
              Helpful Resources
            </h2>
          </AnimatedSection>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {resources.map((res, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <Link
                  to={res.to}
                  className="inline-flex items-center px-6 py-3 rounded-full border border-white/10 text-white hover:border-[#0cc0df]/50 hover:text-[#0cc0df] transition-colors"
                >
                  {res.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
