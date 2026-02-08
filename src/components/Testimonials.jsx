import useInView from '../hooks/useInView'

const stars = (
  <svg viewBox="0 0 100 20" className="h-4 w-auto">
    {[10, 30, 50, 70, 90].map((cx) => (
      <path key={cx} d={`M${cx} 2L${cx+2} 8H${cx+8}L${cx+3} 12L${cx+5} 18L${cx} 14L${cx-5} 18L${cx-3} 12L${cx-8} 8H${cx-2}L${cx} 2Z`} fill="#ffde59" />
    ))}
  </svg>
)

const reviews = [
  { quote: "Ngozai transformed our SharePoint in just 3 weeks. Copilot went from useless to indispensable overnight.", initials: 'JR', name: 'James R.', role: 'CIO, Fortune 500 Financial Services' },
  { quote: "We were ready to cancel our Copilot licenses. After Ngozai's optimization, our accuracy jumped from 20% to 89%.", initials: 'SK', name: 'Sarah K.', role: 'VP IT, Healthcare Organization' },
  { quote: "The Microsoft-native approach means zero new tools to learn. Our IT team adopted it immediately.", initials: 'MH', name: 'Michael H.', role: 'IT Director, Manufacturing Enterprise' },
]

export default function Testimonials() {
  const [ref, isVisible] = useInView()

  return (
    <section className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">Real results from organizations that made Copilot work</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-transparent transition-all duration-300">
              <div className="mb-5">{stars}</div>
              <blockquote className="text-muted leading-relaxed mb-6 flex-grow">"{r.quote}"</blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand to-accent flex items-center justify-center text-sm font-semibold text-black flex-shrink-0">
                  {r.initials}
                </div>
                <div>
                  <strong className="text-sm font-semibold">{r.name}</strong>
                  <span className="block text-xs text-muted">{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
