import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from './BackToTop'
import CookieConsent from './CookieConsent'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <ScrollToTop />
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Navbar scrolled={scrolled} />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <CookieConsent />
    </>
  )
}
