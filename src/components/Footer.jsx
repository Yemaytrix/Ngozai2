const links = {
  Solutions: ['AI Readiness Assessment', 'Data Organization', 'Enterprise Implementation', 'Copilot Training'],
  Company: ['About', 'Process', 'Testimonials', 'Contact'],
  Resources: ['Blog', 'Documentation', 'FAQ', 'Support'],
}

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-18 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              <img src="/assets/images/Ngozai symbol white.png" alt="" className="w-8 h-8 object-contain" />
              <span className="font-brand text-xl text-white tracking-wide">Ngozai</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Making Microsoft Copilot actually work through AI-ready SharePoint transformation.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} Ngozai. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t) => (
              <a key={t} href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
