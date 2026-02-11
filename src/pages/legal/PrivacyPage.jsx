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

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Last updated: February 2026"
      />

      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <Section title="Introduction" delay={0}>
            <p>
              Ngozai (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and use our services. Please
              read this policy carefully to understand our practices regarding your personal data.
            </p>
          </Section>

          <Section title="Information We Collect" delay={50}>
            <p>We collect information that you voluntarily provide to us, including:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong className="text-white/90">Contact Information:</strong> Name, email address,
                and company name when you fill out our contact form or request an assessment.
              </li>
              <li>
                <strong className="text-white/90">Assessment Data:</strong> Information about your
                SharePoint environment that you provide through our AI Readiness Assessment tool.
              </li>
              <li>
                <strong className="text-white/90">Communication Data:</strong> Any information you
                include in correspondence with us.
              </li>
            </ul>
            <p>
              We also automatically collect certain technical data when you visit our website,
              including IP address, browser type, pages visited, and time spent on pages through
              analytics cookies.
            </p>
          </Section>

          <Section title="How We Use Your Information" delay={100}>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver our SharePoint optimization and Copilot consulting services</li>
              <li>Send you relevant information about our services when you have opted in</li>
              <li>Improve our website, tools, and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="Data Sharing" delay={150}>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              your data in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong className="text-white/90">Microsoft Services:</strong> As needed for
                implementations within your Microsoft 365 environment, in accordance with your
                service agreement.
              </li>
              <li>
                <strong className="text-white/90">Legal Requirements:</strong> When required by law,
                regulation, or legal process.
              </li>
              <li>
                <strong className="text-white/90">Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets, with appropriate notice to you.
              </li>
            </ul>
          </Section>

          <Section title="Data Security" delay={200}>
            <p>
              We take the security of your data seriously. Our services run on Microsoft 365
              infrastructure, benefiting from enterprise-grade security including encryption in
              transit and at rest, multi-factor authentication, and compliance with industry
              standards such as SOC 2 and ISO 27001. We implement appropriate technical and
              organizational measures to protect your personal data against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </Section>

          <Section title="Cookies" delay={250}>
            <p>
              Our website uses analytics cookies to help us understand how visitors interact with our
              site. These cookies collect anonymized data about page views and navigation patterns.
              We do not use advertising or tracking cookies. For more details, please review
              our{' '}
              <Link to="/cookies" className="text-[#0cc0df] hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </Section>

          <Section title="Your Rights" delay={300}>
            <p>
              Depending on your location, you may have the following rights regarding your personal
              data:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong className="text-white/90">Access:</strong> Request a copy of the personal
                data we hold about you.
              </li>
              <li>
                <strong className="text-white/90">Correction:</strong> Request that we correct any
                inaccurate or incomplete data.
              </li>
              <li>
                <strong className="text-white/90">Deletion:</strong> Request that we delete your
                personal data, subject to legal retention requirements.
              </li>
              <li>
                <strong className="text-white/90">Opt-Out:</strong> Unsubscribe from marketing
                communications at any time.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information below.
            </p>
          </Section>

          <Section title="Changes to This Policy" delay={350}>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or applicable laws. We will post the updated policy on this page with a
              revised &quot;Last updated&quot; date. We encourage you to review this page
              periodically.
            </p>
          </Section>

          <Section title="Contact Us" delay={400}>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please
              contact us at:
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
