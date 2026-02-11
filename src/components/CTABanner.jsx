import { Link } from 'react-router-dom'

export default function CTABanner({
  title = 'Ready to Get Started?',
  subtitle = 'Get a free assessment of your SharePoint environment and see how we can improve your Copilot accuracy.',
  buttonText = 'Start Your Assessment',
  buttonTo = '/contact',
}) {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-brand text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">{title}</h2>
        <p className="text-lg text-white/80 mb-9 leading-relaxed">{subtitle}</p>
        <Link
          to={buttonTo}
          className="inline-flex items-center px-8 py-4 bg-brand text-black font-semibold rounded-full hover:bg-brand-dark transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
