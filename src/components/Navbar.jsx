import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/solutions/ai-readiness-assessment', label: 'Solutions' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // On non-home pages the navbar is always "scrolled" style (white bg)
  const isScrolled = !isHome || scrolled

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-1.5 no-underline group">
          <img
            src="/assets/images/Ngozai symbol white.png"
            alt=""
            className={`w-8 h-8 object-contain transition-opacity duration-300 ${isScrolled ? 'hidden' : 'block'}`}
          />
          <img
            src="/assets/images/Ngozai symbol black.png"
            alt=""
            className={`w-8 h-8 object-contain transition-opacity duration-300 ${isScrolled ? 'block' : 'hidden'}`}
          />
          <span
            className={`font-brand text-xl tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            Ngozai
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-black hover:text-brand hover:bg-brand/5'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            isScrolled
              ? 'bg-brand text-black hover:bg-brand-dark'
              : 'bg-white text-black hover:shadow-lg hover:-translate-y-0.5'
          }`}
        >
          Get Started
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-0.5 transition-all duration-200 ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${
                menuOpen && i === 0
                  ? 'rotate-45 translate-y-2'
                  : menuOpen && i === 1
                  ? 'opacity-0'
                  : menuOpen && i === 2
                  ? '-rotate-45 -translate-y-2'
                  : ''
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block px-8 py-3.5 text-black font-medium border-b border-gray-100 hover:bg-gray-50"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
