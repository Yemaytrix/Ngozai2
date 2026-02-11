import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import CTABanner from '../../components/CTABanner'
import useInView from '../../hooks/useInView'

const faqs = [
  {
    question: 'What is AI readiness for SharePoint?',
    answer:
      'AI readiness refers to the state of your SharePoint environment in terms of data organization, metadata quality, naming conventions, folder structures, and permission models. When your data is well-organized with consistent metadata and clear taxonomy, Microsoft Copilot can search, understand, and surface accurate information. Without this foundation, Copilot struggles to deliver reliable results.',
  },
  {
    question: 'Why does Copilot need clean SharePoint data?',
    answer:
      'Microsoft Copilot searches your SharePoint environment to answer employee questions, generate summaries, and assist with daily tasks. If your data is messy—duplicated files, inconsistent naming, missing metadata, broken permissions—Copilot returns inaccurate or irrelevant answers. Clean, structured data is the single biggest factor in Copilot performance.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Most implementations take between 2 and 4 weeks depending on the size and complexity of your SharePoint environment. A smaller environment with a few hundred sites can be assessed and optimized in about two weeks, while larger enterprise environments with thousands of sites and complex permission structures may require the full four weeks or slightly more.',
  },
  {
    question: 'What does it cost?',
    answer:
      'We offer three tiers to match your needs. Our AI Readiness Assessment starts at $5,000 and provides a comprehensive audit of your current environment. The SharePoint Organization package at $25,000 includes full implementation of our automated optimization workflows. For large enterprises with complex requirements, we offer custom Enterprise pricing tailored to your specific environment.',
  },
  {
    question: 'Is it 100% Microsoft-native?',
    answer:
      'Yes, absolutely. Our entire solution stack is built on Microsoft technologies—Power Platform, Power Automate, AI Builder, and Copilot Studio. We do not introduce any third-party tools, external APIs, or non-Microsoft dependencies. This means zero additional licensing costs, full compliance with your existing Microsoft security policies, and seamless integration with your tenant.',
  },
  {
    question: 'Do we need to install any third-party software?',
    answer:
      'No. Everything runs on your existing Microsoft 365 infrastructure. Our solution leverages Power Automate flows, AI Builder models, and Copilot Studio agents that deploy directly within your tenant. There is nothing to install, no servers to manage, and no additional software licenses required.',
  },
  {
    question: 'What improvement can we expect?',
    answer:
      'On average, our clients see an 80% improvement in Copilot response accuracy after implementation. This translates to employees finding the right documents faster, getting more relevant answers from Copilot, and spending significantly less time searching for information. The exact improvement depends on your starting point, but every client we have worked with has seen a measurable, meaningful difference.',
  },
  {
    question: 'Will this disrupt our daily operations?',
    answer:
      'Minimal disruption. Our automated workflows run in the background, processing and organizing data without interrupting employee productivity. We schedule intensive operations during off-peak hours and implement changes incrementally. Most employees will not notice anything except that Copilot suddenly works much better.',
  },
  {
    question: 'What size organizations do you work with?',
    answer:
      'We primarily work with mid-market to enterprise organizations, typically those with 500 or more employees. These organizations tend to have the SharePoint complexity and Copilot investment that benefits most from our optimization. However, we are happy to discuss your needs regardless of size—if you have Copilot and SharePoint, we can likely help.',
  },
  {
    question: 'Do you offer training?',
    answer:
      'Yes. We provide executive briefings to help leadership understand Copilot ROI and adoption strategies, power user workshops for IT teams and champions, and department-specific training sessions tailored to how each team uses SharePoint and Copilot. Training ensures your team can maintain and build on the improvements long after our engagement ends.',
  },
  {
    question: 'What happens after the initial implementation?',
    answer:
      'We offer ongoing optimization support to ensure your SharePoint environment stays AI-ready as your organization grows and changes. This includes monitoring data quality metrics, adjusting automation workflows, developing custom Copilot agents for specific business processes, and providing periodic health checks of your environment.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We serve a wide range of industries including financial services, healthcare, legal, energy, manufacturing, and professional services. Each industry has unique compliance requirements and data structures, and our approach is tailored to address those specific needs while maximizing Copilot effectiveness.',
  },
]

function FAQItem({ question, answer, isOpen, onToggle, index }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      className={`border-b border-white/10 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-2 text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-[#0cc0df] transition-colors pr-4">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#0cc0df] transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-white/70 leading-relaxed px-2">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Ngozai and AI-ready SharePoint"
      />

      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="divide-y divide-white/0">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/60 mb-4">Still have questions?</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#0cc0df] text-black font-semibold rounded-full hover:bg-[#0cc0df]/80 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
