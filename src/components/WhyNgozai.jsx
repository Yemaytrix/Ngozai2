import useInView from '../hooks/useInView'
import { useState, useEffect, useRef } from 'react'

const points = [
  { title: 'Microsoft Pioneers', desc: 'Co-created the first templates still in use across the Microsoft ecosystem today.' },
  { title: '100% Microsoft-Native', desc: 'Power Platform, Power Automate, AI Builder, Copilot Studio — no third-party tools.' },
  { title: '80% Accuracy Improvement', desc: 'Proven results transforming Copilot from frustrating to indispensable.' },
  { title: '2-4 Week Implementation', desc: 'Fast deployment with minimal disruption to your daily operations.' },
]

const stats = [
  { value: 80, suffix: '%', label: 'Improvement in Copilot accuracy' },
  { value: 4, suffix: ' weeks', label: 'Average implementation time' },
  { value: 100, suffix: '%', label: 'Microsoft-native solutions' },
]

function AnimatedStat({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = () => {
          start += Math.ceil(value / 40)
          if (start >= value) { setCount(value); return }
          setCount(start)
          requestAnimationFrame(step)
        }
        step()
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center p-7 bg-surface rounded-lg">
      <div className="text-5xl font-bold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent mb-3 leading-none">
        {count}{suffix}
      </div>
      <p className="text-sm text-muted">{label}</p>
    </div>
  )
}

export default function WhyNgozai() {
  const [ref, isVisible] = useInView()

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">Why Ngozai</h2>
            <div className="space-y-5">
              {points.map((p) => (
                <div key={p.title} className="flex gap-5 p-6 bg-surface rounded-lg border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0 mt-0.5 text-brand">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{p.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`bg-white p-10 rounded-lg shadow-xl border border-gray-200 space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((s) => (
              <AnimatedStat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
