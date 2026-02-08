import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('ngozai-cookies')) {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const respond = (choice) => {
    localStorage.setItem('ngozai-cookies', choice)
    setVisible(false)
  }

  return (
    <div
      className={`fixed bottom-0 inset-x-0 bg-[#111] text-white py-6 z-[950] shadow-[0_-4px_12px_rgba(0,0,0,0.15)] transition-transform duration-400 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/80 leading-snug flex-1">
          We use cookies to enhance your experience. By continuing, you agree to our{' '}
          <a href="#" className="text-brand underline">cookie policy</a>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button onClick={() => respond('accepted')} className="bg-brand text-black px-6 py-2.5 rounded text-sm font-semibold hover:bg-brand-dark transition-colors cursor-pointer">
            Accept
          </button>
          <button onClick={() => respond('declined')} className="border border-white/30 text-white/80 px-6 py-2.5 rounded text-sm font-semibold hover:text-white hover:border-white transition-colors cursor-pointer">
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
