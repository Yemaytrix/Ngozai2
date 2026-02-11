import PageHero from '../../components/PageHero'
import CTABanner from '../../components/CTABanner'
import useInView from '../../hooks/useInView'

const stars = (
  <svg viewBox="0 0 100 20" className="h-4 w-auto">
    {[10, 30, 50, 70, 90].map((cx) => (
      <path
        key={cx}
        d={`M${cx} 2L${cx + 2} 8H${cx + 8}L${cx + 3} 12L${cx + 5} 18L${cx} 14L${cx - 5} 18L${cx - 3} 12L${cx - 8} 8H${cx - 2}L${cx} 2Z`}
        fill="#ffde59"
      />
    ))}
  </svg>
)

const reviews = [
  {
    quote: "Ngozai transformed our SharePoint in just 3 weeks. Copilot went from useless to indispensable overnight.",
    initials: 'JR',
    name: 'James R.',
    role: 'CIO, Fortune 500 Financial Services',
  },
  {
    quote: "We were ready to cancel our Copilot licenses. After Ngozai's optimization, our accuracy jumped from 20% to 89%.",
    initials: 'SK',
    name: 'Sarah K.',
    role: 'VP IT, Healthcare Organization',
  },
  {
    quote: "The Microsoft-native approach means zero new tools to learn. Our IT team adopted it immediately.",
    initials: 'MH',
    name: 'Michael H.',
    role: 'IT Director, Manufacturing Enterprise',
  },
  {
    quote: "Our attorneys can now find precedent documents in seconds instead of hours. Copilot finally understands our filing system.",
    initials: 'LT',
    name: 'Lisa T.',
    role: 'Director of Operations, Legal Firm',
  },
  {
    quote: "ROI within the first month. Our Copilot investment went from a budget line item to a productivity multiplier.",
    initials: 'DC',
    name: 'David C.',
    role: 'CTO, Energy Company',
  },
  {
    quote: "The training program was exceptional. Our team went from skeptical to evangelists in two weeks.",
    initials: 'JM',
    name: 'Jennifer M.',
    role: 'VP Digital Transformation, Professional Services',
  },
]

const stats = [
  { value: '80%', label: 'Average accuracy improvement' },
  { value: '4 wks', label: 'Average implementation' },
  { value: '3x', label: 'Faster document retrieval' },
  { value: '92%', label: 'User satisfaction after optimization' },
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

function TestimonialCard({ review, index }) {
  const [ref, isVisible] = useInView()
  return (
    <div
      ref={ref}
      className={`bg-white border border-gray-200 rounded-xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-transparent transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-5">{stars}</div>
      <blockquote className="text-muted leading-relaxed mb-6 flex-grow text-lg">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-brand to-accent flex items-center justify-center text-sm font-semibold text-black flex-shrink-0">
          {review.initials}
        </div>
        <div>
          <strong className="text-sm font-semibold">{review.name}</strong>
          <span className="block text-xs text-muted">{review.role}</span>
        </div>
      </div>
    </div>
  )
}

function StatCard({ stat, index }) {
  const [ref, isVisible] = useInView()
  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold text-brand mb-2">{stat.value}</div>
      <div className="text-muted text-sm">{stat.label}</div>
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="What Our Clients Say"
        subtitle="Real results from organizations that made Copilot work"
      />

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Client Success Stories</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Hear from organizations across industries who transformed their Copilot experience with Ngozai.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <TestimonialCard key={r.name} review={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Results by the Numbers */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Results by the Numbers</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Measurable outcomes that speak for themselves
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
