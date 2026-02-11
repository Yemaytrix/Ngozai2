import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import useInView from '../../hooks/useInView'

export default function BlogPage() {
  const [ref, isVisible] = useInView()

  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights on AI readiness, Microsoft Copilot, and SharePoint optimization"
      />

      <section className="py-24 bg-black">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto px-6 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#ffde59]/30 bg-[#ffde59]/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ffde59] mr-2 animate-pulse" />
            <span className="text-[#ffde59] text-sm font-medium">Coming Soon</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            We're working on something great.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-12">
            Our blog will feature industry insights, best practices for SharePoint
            optimization, Copilot tips, and success stories from organizations that
            have transformed their AI readiness.
          </p>

          {/* Email Signup Placeholder */}
          <div className="max-w-md mx-auto mb-12">
            <p className="text-white/50 text-sm mb-4">
              Get notified when we publish our first article.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#0cc0df]/50 transition-colors"
                readOnly
              />
              <button
                className="px-6 py-3 bg-[#0cc0df] text-black font-semibold rounded-full hover:bg-[#0cc0df]/80 transition-colors cursor-default"
                disabled
              >
                Notify Me
              </button>
            </div>
            <p className="text-white/30 text-xs mt-2">
              Email notifications coming soon.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center text-[#0cc0df] hover:text-[#0cc0df]/80 transition-colors font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
