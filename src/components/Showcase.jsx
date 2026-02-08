import { useState } from 'react'
import useInView from '../hooks/useInView'

/* ─── Before / After data for the SharePoint mockup ─── */
const messy = {
  accuracy: 23,
  badge: { text: 'Poor Copilot Accuracy: 23%', color: 'bg-red-100 text-red-700 border-red-200' },
  files: [
    { name: 'Copy of Final_v2_EDIT.docx', tag: 'No metadata', tagColor: 'bg-red-50 text-red-500' },
    { name: 'Q3 report FINAL FINAL (1).xlsx', tag: 'Duplicate', tagColor: 'bg-orange-50 text-orange-500' },
    { name: 'Document(3).pptx', tag: 'Unnamed', tagColor: 'bg-red-50 text-red-500' },
    { name: 'IMG_20240312_scan.pdf', tag: 'Untagged', tagColor: 'bg-orange-50 text-orange-500' },
  ],
  sidebar: ['Misc', 'Untitled', 'Old Files', 'Temp'],
}

const clean = {
  accuracy: 94,
  badge: { text: 'AI-Ready — Copilot Accuracy: 94%', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  files: [
    { name: 'Q3-Revenue-Report-2025.docx', tag: 'Finance', tagColor: 'bg-brand/10 text-brand' },
    { name: 'Annual-Strategy-Deck-FY25.xlsx', tag: 'Strategy', tagColor: 'bg-emerald-50 text-emerald-600' },
    { name: 'Product-Roadmap-H2-2025.pptx', tag: 'Product', tagColor: 'bg-brand/10 text-brand' },
    { name: 'Compliance-Audit-March-2025.pdf', tag: 'Legal', tagColor: 'bg-accent/20 text-amber-700' },
  ],
  sidebar: ['Finance', 'Strategy', 'Product', 'Legal'],
}

/* ─── Ngozai symbol for the toggle knob ─── */
function NgozaiIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="11.88" cy="12.65" rx="4.36" ry="3.83" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <circle cx="11.71" cy="12.65" r=".7" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M3.68,4.98S8.02-.73,15.3,10.32" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M7.64,13.62s4.25,11.38,13.1,6.07" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <polyline points="4.73 15.6 4.73 9.05 7.95 10.84" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <polyline points="16.08 14.2 18.68 15.99 18.68 8.99" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
    </svg>
  )
}

/* ─── Animated counter ─── */
function AnimatedNumber({ value, active }) {
  return <span className="tabular-nums">{active ? value : messy.accuracy}</span>
}

/* ─── Main component ─── */
export default function Showcase() {
  const [active, setActive] = useState(false)
  const [ref, isVisible] = useInView()
  const data = active ? clean : messy

  return (
    <section className="relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(12,192,223,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_70%,rgba(255,222,89,0.08)_0%,transparent_60%)]" />
      </div>

      <div ref={ref} className="relative z-[2] max-w-7xl mx-auto px-6 pt-28 pb-0 text-center">
        {/* Heading */}
        <div className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            Say Hello to{' '}
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              AI-Ready SharePoint
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto mb-10">
            Ngozai turns your messy SharePoint into an intelligent data foundation. Just activate our
            automated workflows and watch Copilot go from frustrating to indispensable.
          </p>
        </div>

        {/* Toggle */}
        <div className={`flex flex-col items-center gap-5 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={() => setActive(!active)}
            className={`inline-flex items-center gap-4 px-7 py-3 rounded-full border backdrop-blur-xl transition-all duration-300 cursor-pointer select-none group ${
              active
                ? 'bg-brand/10 border-brand/40 shadow-[0_0_24px_rgba(12,192,223,0.2)]'
                : 'bg-white/[0.06] border-white/15 hover:bg-white/10 hover:border-white/25'
            }`}
          >
            <span className="text-base font-semibold text-white">Activate AI Readiness</span>
            <div
              className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                active
                  ? 'bg-gradient-to-r from-brand to-accent'
                  : 'bg-white/15 group-hover:bg-white/20'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
                  active ? 'left-7' : 'left-1'
                }`}
              >
                <NgozaiIcon className={`w-3.5 h-3.5 transition-colors duration-300 ${active ? 'text-brand' : 'text-gray-400'}`} />
              </div>
            </div>
          </button>

          <a href="#contact" className="text-sm text-white/50 hover:text-white/80 border border-white/20 rounded px-6 py-2.5 font-medium transition-colors duration-200">
            Learn more
          </a>
        </div>

        {/* ─── Live SharePoint Mockup ─── */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-t-xl overflow-hidden shadow-[0_-8px_60px_rgba(12,192,223,0.1)]">
            {/* Browser chrome */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1.5 border border-gray-200 text-xs text-muted flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-muted/60">
                  <rect x="2" y="6" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 6V4.5a3 3 0 016 0V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                ngozai.sharepoint.com
              </div>
            </div>

            {/* SharePoint body */}
            <div className="flex min-h-[340px]">
              {/* Sidebar */}
              <div className="hidden sm:flex w-14 bg-gray-50 border-r border-gray-100 flex-col items-center gap-3 py-5">
                {data.sidebar.map((s, i) => (
                  <div
                    key={s}
                    className={`w-8 h-8 rounded-md flex items-center justify-center text-[9px] font-bold transition-all duration-500 ${
                      i === 0
                        ? active
                          ? 'bg-brand text-white'
                          : 'bg-gray-300 text-gray-500'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                    title={s}
                  >
                    {s[0]}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-5 md:p-7 flex flex-col gap-4">
                {/* Status badge */}
                <div className={`self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-500 ${data.badge.color}`}>
                  {active ? (
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                      <circle cx="8" cy="8" r="6" fill="currentColor" opacity="0.2" />
                      <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                      <circle cx="8" cy="8" r="6" fill="currentColor" opacity="0.2" />
                      <path d="M8 5V9M8 11V11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                  {data.badge.text}
                </div>

                {/* File list */}
                <div className="space-y-2.5">
                  {data.files.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100 transition-all duration-500"
                      style={{ transitionDelay: `${i * 80}ms` }}
                    >
                      <div
                        className={`w-8 h-8 rounded-md flex-shrink-0 transition-all duration-500 ${
                          active
                            ? 'bg-gradient-to-br from-brand to-brand/60'
                            : 'bg-gradient-to-br from-gray-300 to-gray-200'
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate transition-all duration-500 ${active ? 'text-black' : 'text-gray-500'}`}>
                          {f.name}
                        </p>
                      </div>
                      <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap transition-all duration-500 ${f.tagColor}`}>
                        {f.tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Accuracy bar */}
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-xs text-muted font-medium">Copilot Accuracy</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${active ? 'bg-gradient-to-r from-brand to-accent' : 'bg-red-400'}`}
                      style={{ width: `${data.accuracy}%` }}
                    />
                  </div>
                  <span className={`text-sm font-bold tabular-nums transition-colors duration-500 ${active ? 'text-brand' : 'text-red-500'}`}>
                    <AnimatedNumber value={data.accuracy} active={active} />%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
