import { useState } from 'react'
import useInView from '../hooks/useInView'

const initialForm = { name: '', email: '', company: '', message: '', privacy: false }
const initialErrors = { name: '', email: '', company: '', message: '', privacy: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [ref, isVisible] = useInView()

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
      // Replace with your Formspree or backend endpoint
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, company: form.company, message: form.message }),
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
    <section id="contact" className="py-28 bg-gradient-to-br from-black to-brand text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-20 items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">Ready to Make Copilot Work?</h2>
            <p className="text-lg text-white/80 mb-9 leading-relaxed">Get a free assessment of your SharePoint environment and see exactly how we can improve your Copilot accuracy.</p>
            <div className="space-y-4 mb-10">
              {['Free SharePoint audit', '80% accuracy improvement', '2-4 week implementation', '100% Microsoft-native'].map((t) => (
                <div key={t} className="flex items-center gap-3 text-white/90">
                  <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0">
                    <circle cx="10" cy="10" r="10" fill="#0cc0df" />
                    <path d="M6 10L9 13L14 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
            <a href="mailto:hello@ngozai.com" className="inline-flex items-center gap-2.5 text-white font-medium hover:opacity-80 transition-opacity">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              hello@ngozai.com
            </a>
          </div>

          {/* Form */}
          <div className="bg-white text-black rounded-lg p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl font-semibold mb-7">Start Your Assessment</h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                { id: 'email', label: 'Work Email', type: 'email', placeholder: 'john@company.com' },
                { id: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp' },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block text-sm font-semibold mb-1.5">
                    {f.label} <span className="text-danger">*</span>
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.id]}
                    onChange={(e) => update(f.id, e.target.value)}
                    className={`w-full px-4 py-3 border rounded text-sm transition-all focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 ${errors[f.id] ? 'border-danger' : 'border-gray-300'}`}
                  />
                  {errors[f.id] && <p className="text-danger text-xs mt-1">{errors[f.id]}</p>}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-1.5">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us about your Copilot challenges..."
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className={`w-full px-4 py-3 border rounded text-sm resize-y transition-all focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 ${errors.message ? 'border-danger' : 'border-gray-300'}`}
                />
                {errors.message && <p className="text-danger text-xs mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={form.privacy}
                  onChange={(e) => update('privacy', e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-brand cursor-pointer"
                />
                <label htmlFor="privacy" className="text-xs text-muted cursor-pointer leading-snug">
                  I agree to the <a href="#" className="text-brand underline">privacy policy</a> and consent to being contacted about Ngozai services.
                </label>
              </div>
              {errors.privacy && <p className="text-danger text-xs -mt-2">{errors.privacy}</p>}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand text-black font-semibold py-3.5 rounded hover:bg-brand-dark transition-colors disabled:opacity-60 cursor-pointer"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded text-emerald-700 text-sm">
                  <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0"><circle cx="10" cy="10" r="10" fill="#107C10" /><path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" /></svg>
                  Thank you! We'll be in touch within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                  Something went wrong. Please email us directly at hello@ngozai.com.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
