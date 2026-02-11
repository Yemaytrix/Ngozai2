import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import useInView from '../../hooks/useInView'

function Section({ title, children, delay = 0 }) {
  const [ref, isVisible] = useInView()
  return (
    <div
      ref={ref}
      className={`mb-10 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="text-white/70 leading-relaxed space-y-4">{children}</div>
    </div>
  )
}

export default function CookiePage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="Last updated: February 2026"
      />

      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <Section title="What Are Cookies?" delay={0}>
            <p>
              Cookies are small text files that are placed on your device when you visit a website.
              They are widely used to make websites work more efficiently, provide a better user
              experience, and supply information to site owners. Cookies can be &quot;persistent&quot;
              (remaining on your device for a set period) or &quot;session&quot; cookies (deleted when
              you close your browser).
            </p>
          </Section>

          <Section title="Cookies We Use" delay={50}>
            <p>
              We use a limited number of cookies on the Ngozai website. These fall into two
              categories:
            </p>

            <div className="mt-4 p-5 rounded-xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core
                features such as page navigation, secure access, and remembering your cookie
                consent preferences. Essential cookies cannot be disabled as the website cannot
                operate without them.
              </p>
            </div>

            <div className="mt-4 p-5 rounded-xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
              <p>
                We use analytics cookies to understand how visitors interact with our website. These
                cookies collect anonymized information about which pages are visited, how long
                visitors spend on each page, and how they navigate through the site. This data helps
                us improve the website experience. Analytics cookies do not identify you personally.
              </p>
            </div>

            <p className="mt-4">
              We do <strong className="text-white/90">not</strong> use advertising cookies, tracking
              cookies, or social media cookies. We do not share cookie data with third-party
              advertisers.
            </p>
          </Section>

          <Section title="How to Manage Cookies" delay={100}>
            <p>
              You have the right to decide whether to accept or reject cookies. You can manage your
              cookie preferences in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-white/90">Cookie Consent Banner:</strong> When you first
                visit our website, a cookie consent banner allows you to accept or decline
                non-essential cookies.
              </li>
              <li>
                <strong className="text-white/90">Browser Settings:</strong> Most web browsers allow
                you to control cookies through their settings. You can set your browser to refuse
                cookies, delete existing cookies, or alert you when a cookie is being set. Consult
                your browser&apos;s help documentation for specific instructions.
              </li>
            </ul>
            <p>
              Please note that disabling certain cookies may affect the functionality of our website.
              Essential cookies cannot be disabled as they are required for the website to operate.
            </p>
          </Section>

          <Section title="Updates to This Policy" delay={150}>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices
              or for other operational, legal, or regulatory reasons. Any updates will be posted on
              this page with a revised &quot;Last updated&quot; date. We encourage you to review this
              page periodically.
            </p>
          </Section>

          <Section title="Related Policies" delay={200}>
            <p>
              For more information about how we handle your data, please review our{' '}
              <Link to="/privacy" className="text-[#0cc0df] hover:underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link to="/terms" className="text-[#0cc0df] hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </Section>

          <Section title="Contact Us" delay={250}>
            <p>
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:hello@ngozai.com"
                className="text-[#0cc0df] hover:underline"
              >
                hello@ngozai.com
              </a>
            </p>
          </Section>
        </div>
      </section>
    </>
  )
}
