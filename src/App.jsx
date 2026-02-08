import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Problem from './components/Problem'
import Solutions from './components/Solutions'
import WhyNgozai from './components/WhyNgozai'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CookieConsent from './components/CookieConsent'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Navbar scrolled={scrolled} />
      <main id="main-content">
        <Hero />
        <Features />
        <Showcase />
        <Problem />
        <Solutions />
        <WhyNgozai />
        <Testimonials />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CookieConsent />
    </>
  )
}
