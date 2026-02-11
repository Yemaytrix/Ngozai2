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

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Last updated: February 2026"
      />

      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <Section title="Acceptance of Terms" delay={0}>
            <p>
              By accessing and using the Ngozai website and services, you accept and agree to be
              bound by these Terms of Service. If you do not agree to these terms, please do not use
              our website or services. We reserve the right to modify these terms at any time, and
              your continued use of our services following any changes constitutes acceptance of
              those changes.
            </p>
          </Section>

          <Section title="Description of Services" delay={50}>
            <p>
              Ngozai provides SharePoint optimization, Microsoft Copilot consulting, and AI
              readiness services. Our offerings include but are not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                AI Readiness Assessment: Comprehensive audits of your SharePoint environment to
                evaluate data quality, metadata consistency, and organizational structure.
              </li>
              <li>
                SharePoint Organization: Automated workflows and optimization solutions built on the
                Microsoft Power Platform to restructure and clean your SharePoint data.
              </li>
              <li>
                Copilot Consulting: Strategic advisory services to maximize the effectiveness of
                Microsoft Copilot within your organization.
              </li>
              <li>
                Training and Enablement: Executive briefings, power user workshops, and
                department-specific training sessions.
              </li>
              <li>
                Custom Agent Development: Design and deployment of custom Copilot Studio agents
                tailored to your business processes.
              </li>
            </ul>
            <p>
              The specific scope, deliverables, and timelines for each engagement are detailed in
              individual service agreements executed between Ngozai and the client.
            </p>
          </Section>

          <Section title="User Obligations" delay={100}>
            <p>By using our services, you agree to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Provide accurate and complete information when requested</li>
              <li>
                Grant necessary access to your Microsoft 365 environment as required for service
                delivery
              </li>
              <li>
                Use our services in compliance with all applicable laws and regulations
              </li>
              <li>
                Not attempt to reverse-engineer, copy, or redistribute our proprietary tools,
                workflows, or methodologies
              </li>
              <li>Maintain the confidentiality of any credentials or access tokens shared</li>
            </ul>
          </Section>

          <Section title="Intellectual Property" delay={150}>
            <p>
              All content, tools, workflows, methodologies, and materials provided by Ngozai are
              and remain the intellectual property of Ngozai. Our proprietary optimization
              frameworks, Power Automate flows, AI Builder models, and Copilot Studio configurations
              are protected by applicable intellectual property laws.
            </p>
            <p>
              Clients retain full ownership of their own data, content, and SharePoint
              environments. Any data processed through our services remains the property of the
              client. We do not claim any ownership rights over client data.
            </p>
          </Section>

          <Section title="Confidentiality" delay={200}>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or sensitive
              information shared during the course of an engagement. This includes but is not
              limited to business processes, technical architectures, financial information, and
              employee data. Confidentiality obligations survive the termination of any service
              agreement.
            </p>
          </Section>

          <Section title="Limitation of Liability" delay={250}>
            <p>
              To the maximum extent permitted by applicable law, Ngozai shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, including but not
              limited to loss of profits, data, or business opportunities, arising out of or related
              to your use of our services.
            </p>
            <p>
              Our total liability for any claims arising from or related to our services shall not
              exceed the total fees paid by you to Ngozai for the specific service giving rise to
              the claim during the twelve months preceding the claim.
            </p>
            <p>
              We provide our services on an &quot;as is&quot; basis. While we strive for measurable
              improvements in Copilot accuracy and SharePoint organization, specific outcomes may
              vary depending on the complexity and state of your environment.
            </p>
          </Section>

          <Section title="Termination" delay={300}>
            <p>
              Either party may terminate a service engagement in accordance with the terms specified
              in the applicable service agreement. Upon termination, each party shall return or
              destroy any confidential information belonging to the other party. Sections relating
              to intellectual property, confidentiality, and limitation of liability shall survive
              termination.
            </p>
          </Section>

          <Section title="Governing Law" delay={350}>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws
              of the jurisdiction in which Ngozai operates, without regard to conflict of law
              principles. Any disputes arising from these terms or our services shall be resolved
              through good-faith negotiation, and if necessary, through binding arbitration in
              accordance with applicable rules.
            </p>
          </Section>

          <Section title="Contact Information" delay={400}>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
