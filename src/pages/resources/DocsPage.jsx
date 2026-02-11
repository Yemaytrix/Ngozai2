import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import useInView from '../../hooks/useInView'

export default function DocsPage() {
  const [ref, isVisible] = useInView()

  return (
    <>
      <PageHero
        title="Documentation"
        subtitle="Technical guides and reference materials"
      />

      <section className="py-24 bg-black">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto px-6 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Under Construction Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#ffde59]/30 bg-[#ffde59]/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ffde59] mr-2 animate-pulse" />
            <span className="text-[#ffde59] text-sm font-medium">Under Construction</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our documentation portal is under construction.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-12">
            In the meantime, check out our FAQ for answers to common questions or
            reach out to our support team for personalized assistance.
          </p>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/faq"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0cc0df] text-black font-semibold rounded-full hover:bg-[#0cc0df]/80 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Browse FAQ
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-white rounded-full hover:border-[#0cc0df]/50 hover:text-[#0cc0df] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Contact Support
            </Link>
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
