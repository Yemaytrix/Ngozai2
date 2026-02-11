import { useState } from 'react'
import PageHero from '../../components/PageHero'
import CTABanner from '../../components/CTABanner'
import useInView from '../../hooks/useInView'

const initialForm = { name: '', email: '', company: '', message: '', privacy: false }
const initialErrors = { name: '', email: '', company: '', message: '', privacy: '' }

const benefits = [
  'Free SharePoint audit',
  '80% accuracy improvement',
  '2-4 week implementation',
  '100% Microsoft-native',
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

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = { ...initialErrors }
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.company.trim()) e.company = 'Company is required'
    if (!form.message.trim()) e.message = 'Message is required'
    if (!form.privacy) e.privacy = 'You must agree to the privacy policy'
    setErrors(e)
    return !Object.values(e).some(Boolean)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }))
  }

  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Ready to make Copilot work? Let's talk."
      />

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left — Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-muted leading-relaxed text-lg mb-8">
                  Get a free assessment of your SharePoint environment and see exactly how we can improve your Copilot
                  accuracy.
                </p>

                {/* Email */}
                <a
                  href="mailto:hello@ngozai.com"
                  className="inline-flex items-center gap-3 text-lg font-medium text-brand hover:opacity-80 transition-opacity mb-10"
                >
                  <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <rect x="2" y="4" width="20" height="16" rx="3" stroke="#0cc0df" strokeWidth="1.5" />
                      <path d="M2 7L12 13L22 7" stroke="#0cc0df" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                  hello@ngozai.com
                </a>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Free Assessment Includes</h3>
                  <div className="space-y-3">
                    {benefits.map((b) => (
                      <div key={b} className="flex items-center gap-3 text-muted">
                        <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0">
                          <circle cx="10" cy="10" r="10" fill="#0cc0df" />
                          <path
                            d="M6 10L9 13L14 7"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="bg-surface rounded-xl border border-gray-200 p-8 md:p-10 shadow-sm">
                <h3 className="text-2xl font-semibold mb-7">Send Us a Message</h3>
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                    { id: 'email', label: 'Work Email', type: 'email', placeholder: 'john@company.com' },
                    { id: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp' },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={`contact-${f.id}`} className="block text-sm font-semibold mb-1.5">
                        {f.label} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id={`contact-${f.id}`}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.id]}
                        onChange={(e) => update(f.id, e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg text-sm bg-white transition-all focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 ${
                          errors[f.id] ? 'border-red-400' : 'border-gray-300'
                        }`}
                      />
                      {errors[f.id] && <p className="text-red-500 text-xs mt-1">{errors[f.id]}</p>}
                    </div>
                  ))}

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows="4"
                      placeholder="Tell us about your Copilot challenges..."
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg text-sm bg-white resize-y transition-all focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 ${
                        errors.message ? 'border-red-400' : 'border-gray-300'
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="contact-privacy"
                      checked={form.privacy}
                      onChange={(e) => update('privacy', e.target.checked)}
                      className="w-4 h-4 mt-0.5 accent-brand cursor-pointer"
                    />
                    <label htmlFor="contact-privacy" className="text-xs text-muted cursor-pointer leading-snug">
                      I agree to the{' '}
                      <a href="#" className="text-brand underline">
                        privacy policy
                      </a>{' '}
                      and consent to being contacted about Ngozai services.
                    </label>
                  </div>
                  {errors.privacy && <p className="text-red-500 text-xs -mt-2">{errors.privacy}</p>}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-brand text-black font-semibold py-3.5 rounded-lg hover:bg-brand-dark transition-colors disabled:opacity-60 cursor-pointer"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-sm">
                      <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0">
                        <circle cx="10" cy="10" r="10" fill="#107C10" />
                        <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" />
                      </svg>
                      Thank you! We&apos;ll be in touch within 24 hours.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      Something went wrong. Please email us directly at{' '}
                      <a href="mailto:hello@ngozai.com" className="underline font-medium">
                        hello@ngozai.com
                      </a>
                      .
                    </div>
                  )}
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="Prefer to Start with an Assessment?"
        buttonText="Take the Free Assessment"
        buttonTo="/assessment"
      />
    </>
  )
}
