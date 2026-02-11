import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AIReadinessPage from './pages/solutions/AIReadinessPage'
import DataOrganizationPage from './pages/solutions/DataOrganizationPage'
import EnterprisePage from './pages/solutions/EnterprisePage'
import CopilotTrainingPage from './pages/solutions/CopilotTrainingPage'
import AboutPage from './pages/company/AboutPage'
import ProcessPage from './pages/company/ProcessPage'
import TestimonialsPage from './pages/company/TestimonialsPage'
import ContactPage from './pages/company/ContactPage'
import FAQPage from './pages/resources/FAQPage'
import SupportPage from './pages/resources/SupportPage'
import BlogPage from './pages/resources/BlogPage'
import DocsPage from './pages/resources/DocsPage'
import PrivacyPage from './pages/legal/PrivacyPage'
import TermsPage from './pages/legal/TermsPage'
import CookiePage from './pages/legal/CookiePage'
import AssessmentPage from './pages/AssessmentPage'
import PageHero from './components/PageHero'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <PageHero title="Page Not Found" subtitle="The page you're looking for doesn't exist." />
      <div className="py-20 text-center">
        <Link to="/" className="inline-flex items-center px-8 py-4 bg-brand text-black font-semibold rounded-full hover:bg-brand-dark transition-colors">
          Back to Home
        </Link>
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* Solutions */}
          <Route path="solutions/ai-readiness-assessment" element={<AIReadinessPage />} />
          <Route path="solutions/data-organization" element={<DataOrganizationPage />} />
          <Route path="solutions/enterprise-implementation" element={<EnterprisePage />} />
          <Route path="solutions/copilot-training" element={<CopilotTrainingPage />} />

          {/* Company */}
          <Route path="about" element={<AboutPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Resources */}
          <Route path="faq" element={<FAQPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="docs" element={<DocsPage />} />

          {/* Legal */}
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="cookies" element={<CookiePage />} />

          {/* Assessment */}
          <Route path="assessment" element={<AssessmentPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
