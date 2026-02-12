import { Link } from 'react-router-dom'

const links = {
  Solutions: [
    { label: 'AI Readiness Assessment', to: '/solutions/ai-readiness-assessment' },
    { label: 'Data Organization', to: '/solutions/data-organization' },
    { label: 'Enterprise Implementation', to: '/solutions/enterprise-implementation' },
    { label: 'Copilot Training', to: '/solutions/copilot-training' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Process', to: '/process' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Contact', to: '/contact' },
  ],
  Resources: [
    { label: 'Blog', to: '/blog' },
    { label: 'Documentation', to: '/docs' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Support', to: '/support' },
  ],
}

const legal = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Cookie Policy', to: '/cookies' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-18 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              <img src="/assets/images/Ngozai_Rainbow.png" alt="" className="w-8 h-8 object-contain" />
              <span className="font-brand text-xl text-white tracking-wide">Ngozai</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Powered by AI. Built by Creators. Inspired by You.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-sm text-white/70 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} Ngozai. All rights reserved.</p>
          <div className="flex gap-6">
            {legal.map((t) => (
              <Link key={t.to} to={t.to} className="text-sm text-white/50 hover:text-white transition-colors">
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
