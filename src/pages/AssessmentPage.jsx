import { useState } from 'react'

const questions = [
  {
    step: 2,
    group: 'SharePoint Usage',
    items: [
      {
        name: 'q1',
        text: '1. Does your organization currently use SharePoint?',
        options: [
          { value: 20, label: 'Yes, extensively (primary document storage)' },
          { value: 15, label: 'Yes, moderately (one of several systems)' },
          { value: 5, label: 'Yes, minimally (limited usage)' },
          { value: 0, label: "No, we don't use SharePoint" },
        ],
      },
      {
        name: 'q2',
        text: '2. Approximately how many files/documents are stored in your SharePoint?',
        options: [
          { value: 5, label: 'Less than 1,000' },
          { value: 10, label: '1,000 - 10,000' },
          { value: 15, label: '10,000 - 50,000' },
          { value: 20, label: '50,000+' },
        ],
      },
    ],
  },
  {
    step: 3,
    group: 'Data Organization',
    items: [
      {
        name: 'q3',
        text: '3. How would you describe your current file naming conventions?',
        options: [
          { value: 20, label: 'Highly standardized across the organization' },
          { value: 12, label: 'Somewhat standardized (varies by department)' },
          { value: 5, label: 'Minimal standards (mostly ad-hoc)' },
          { value: 0, label: 'No naming conventions' },
        ],
      },
      {
        name: 'q4',
        text: '4. What percentage of your files have meaningful metadata?',
        options: [
          { value: 20, label: '75-100%' },
          { value: 12, label: '50-74%' },
          { value: 5, label: '25-49%' },
          { value: 0, label: 'Less than 25%' },
        ],
      },
    ],
  },
  {
    step: 4,
    group: 'Data Quality',
    items: [
      {
        name: 'q5',
        text: '5. How prevalent are duplicate files in your SharePoint?',
        options: [
          { value: 20, label: 'Rare (less than 5% duplicates)' },
          { value: 12, label: 'Occasional (5-15% duplicates)' },
          { value: 5, label: 'Common (15-30% duplicates)' },
          { value: 0, label: 'Very common (30%+ duplicates)' },
        ],
      },
      {
        name: 'q6',
        text: '6. Do you have a process for archiving or deleting outdated content?',
        options: [
          { value: 20, label: 'Yes, automated and enforced' },
          { value: 12, label: 'Yes, manual but consistent' },
          { value: 5, label: 'Somewhat, inconsistently applied' },
          { value: 0, label: 'No formal process' },
        ],
      },
    ],
  },
  {
    step: 5,
    group: 'Microsoft Copilot Status',
    items: [
      {
        name: 'q7',
        text: "7. What is your organization's current status with Microsoft Copilot?",
        options: [
          { value: 0, label: 'Not considering it yet' },
          { value: 5, label: 'Researching/considering' },
          { value: 10, label: 'Planning to deploy in next 6 months' },
          { value: 15, label: 'Currently piloting' },
          { value: 20, label: 'Deployed to some/all users' },
        ],
      },
      {
        name: 'q8',
        text: "8. If you've deployed Copilot, how satisfied are users?",
        options: [
          { value: 0, label: "Haven't deployed yet / Not applicable" },
          { value: 0, label: 'Very dissatisfied (considering canceling)' },
          { value: 5, label: 'Somewhat dissatisfied (lots of complaints)' },
          { value: 10, label: 'Neutral (mixed feedback)' },
          { value: 15, label: 'Satisfied (mostly positive)' },
          { value: 20, label: 'Very satisfied (employees love it)' },
        ],
      },
    ],
  },
]

function generateInsights(score) {
  if (score >= 120)
    return {
      level: 'Excellent',
      color: 'high',
      issues: [
        'SharePoint is well-organized and Copilot-ready',
        'Strong data governance in place',
        'Standardized metadata and naming',
      ],
      recommendations: [
        'Quick optimization audit for peak performance',
        'Implement monitoring for quality maintenance',
        'Explore custom Copilot agents for workflows',
      ],
      estimatedCost: '$5,000 - $15,000',
      estimatedTime: '1-2 weeks',
      roi: '85%+ adoption, $2.5M+ annual productivity gains',
    }
  if (score >= 80)
    return {
      level: 'Good',
      color: 'medium',
      issues: [
        'Decent foundation but needs optimization',
        'Some data quality issues affecting accuracy',
        'Inconsistent metadata or naming',
      ],
      recommendations: [
        'Automated cleanup for duplicates',
        'Metadata enrichment',
        'Standardized naming conventions',
        'Permission optimization',
      ],
      estimatedCost: '$15,000 - $35,000',
      estimatedTime: '2-3 weeks',
      roi: '70-80% adoption, $2M+ annual productivity gains',
    }
  return {
    level: 'Needs Improvement',
    color: 'low',
    issues: [
      'Significant data quality issues limiting Copilot',
      'High duplicate files and poor organization',
      'Minimal metadata for AI understanding',
      'Investment will severely underperform',
    ],
    recommendations: [
      'CRITICAL: Comprehensive cleanup before Copilot',
      'Automated duplicate removal',
      'Complete metadata framework',
      'Folder reorganization',
      'Governance policies',
    ],
    estimatedCost: '$25,000 - $75,000',
    estimatedTime: '3-4 weeks',
    roi: 'Avoid $500K+ wasted licenses, achieve $3M+ annual gains',
  }
}

/* ── Score colours ── */
const scoreColors = {
  high: 'from-emerald-500 to-emerald-700',
  medium: 'from-amber-400 to-orange-500',
  low: 'from-red-500 to-red-600',
}

export default function AssessmentPage() {
  const [step, setStep] = useState(1) // 1=contact, 2-5=questions, 6=loading, 7=results
  const [form, setForm] = useState({ fullName: '', email: '', company: '', jobTitle: '', employeeCount: '' })
  const [answers, setAnswers] = useState({})
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)

  const showError = (msg) => {
    setError(msg)
    setTimeout(() => setError(''), 5000)
  }

  /* step 1 validation */
  const validateContact = () => {
    if (!form.fullName || !form.email || !form.company || !form.jobTitle || !form.employeeCount) {
      showError('Please fill in all required fields.')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      showError('Please enter a valid email address.')
      return false
    }
    return true
  }

  /* question step validation */
  const validateQuestions = (qGroup) => {
    return qGroup.items.every((q) => answers[q.name] !== undefined)
  }

  const next = () => {
    if (step === 1) {
      if (!validateContact()) return
      setStep(2)
    } else if (step >= 2 && step <= 4) {
      const group = questions[step - 2]
      if (!validateQuestions(group)) {
        showError('Please answer all questions before continuing.')
        return
      }
      setStep(step + 1)
    } else if (step === 5) {
      const group = questions[3]
      if (!validateQuestions(group)) {
        showError('Please answer all questions before continuing.')
        return
      }
      // calculate
      setStep(6)
      let total = 0
      Object.values(answers).forEach((v) => (total += v))
      const insights = generateInsights(total)
      setTimeout(() => {
        setResult({ score: total, insights })
        setStep(7)
      }, 2000)
    }
  }

  const prev = () => step > 1 && setStep(step - 1)
  const progress = Math.min(((step > 5 ? 5 : step) / 5) * 100, 100)

  return (
    <section className="min-h-screen bg-gradient-to-br from-brand via-brand-dark to-[#086a7a] py-12 px-5 pt-32">
      <div className="max-w-[800px] mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* header */}
        <div className="bg-gradient-to-r from-brand to-accent text-black px-10 py-10 text-center">
          <h1 className="text-3xl font-bold mb-2">Copilot Readiness Score</h1>
          <p className="text-lg opacity-90">Is your SharePoint ready for Microsoft Copilot?</p>
        </div>

        <div className="p-8 md:p-10">
          {/* error */}
          {error && (
            <div className="bg-red-50 text-red-700 border border-red-200 px-4 py-3 rounded mb-6 text-sm">{error}</div>
          )}

          {/* progress */}
          <div className="h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand to-accent rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* ── Step 1: Contact ── */}
          {step === 1 && (
            <div className="animate-[fadeUp_0.5s_ease]">
              <h2 className="text-2xl font-bold mb-2">Let's Get Started</h2>
              <p className="text-muted mb-6">First, tell us about yourself and your organization:</p>
              {[
                { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                { id: 'email', label: 'Work Email', type: 'email', placeholder: 'john@company.com' },
                { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Corporation' },
                { id: 'jobTitle', label: 'Job Title', type: 'text', placeholder: 'IT Director' },
              ].map((f) => (
                <div key={f.id} className="mb-5">
                  <label className="block text-sm font-semibold mb-1.5">
                    {f.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.id]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded text-sm focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              ))}
              <div className="mb-5">
                <label className="block text-sm font-semibold mb-1.5">
                  Number of Employees <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.employeeCount}
                  onChange={(e) => setForm({ ...form, employeeCount: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded text-sm focus:outline-none focus:border-brand transition-colors"
                >
                  <option value="">Select range...</option>
                  <option value="1-100">1-100</option>
                  <option value="101-500">101-500</option>
                  <option value="501-1500">501-1,500</option>
                  <option value="1501-5000">1,501-5,000</option>
                  <option value="5001+">5,001+</option>
                </select>
              </div>
              <button
                onClick={next}
                className="w-full bg-gradient-to-r from-brand to-accent text-black font-semibold py-3.5 rounded hover:opacity-90 transition-opacity cursor-pointer"
              >
                Start Assessment
              </button>
            </div>
          )}

          {/* ── Steps 2-5: Questions ── */}
          {step >= 2 && step <= 5 && (
            <div key={step} className="animate-[fadeUp_0.5s_ease]">
              <h2 className="text-2xl font-bold mb-6">{questions[step - 2].group}</h2>
              {questions[step - 2].items.map((q) => (
                <div key={q.name} className="mb-8 bg-surface p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-brand mb-4">{q.text}</h3>
                  <div className="space-y-3">
                    {q.options.map((opt, i) => (
                      <label
                        key={i}
                        className={`flex items-center gap-3 p-3 bg-white border-2 rounded cursor-pointer transition-all ${
                          answers[q.name] === opt.value && answers[`${q.name}_idx`] === i
                            ? 'border-brand bg-brand/5'
                            : 'border-gray-200 hover:border-brand/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name={q.name}
                          className="w-5 h-5 accent-brand"
                          checked={answers[q.name] === opt.value && answers[`${q.name}_idx`] === i}
                          onChange={() => setAnswers({ ...answers, [q.name]: opt.value, [`${q.name}_idx`]: i, [`${q.name}_text`]: opt.label })}
                        />
                        <span className="text-sm">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  className="px-6 py-3 bg-gray-100 rounded font-semibold text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={next}
                  className="flex-1 bg-gradient-to-r from-brand to-accent text-black font-semibold py-3 rounded hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {step === 5 ? 'Get My Score' : 'Continue'}
                </button>
              </div>
            </div>
          )}

          {/* ── Loading ── */}
          {step === 6 && (
            <div className="text-center py-16 animate-[fadeUp_0.5s_ease]">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-brand rounded-full animate-spin mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-2">Calculating Your Score...</h3>
              <p className="text-muted">Analyzing your responses and generating insights.</p>
            </div>
          )}

          {/* ── Results ── */}
          {step === 7 && result && (
            <div className="text-center animate-[fadeUp_0.5s_ease]">
              <h2 className="text-2xl font-bold mb-6">Your Copilot Readiness Score</h2>

              <div
                className={`w-48 h-48 mx-auto rounded-full bg-gradient-to-br ${scoreColors[result.insights.color]} flex flex-col items-center justify-center text-white mb-6`}
              >
                <span className="text-6xl font-bold">{result.score}</span>
                <span className="text-sm mt-1">out of 160</span>
              </div>

              <h3 className="text-xl font-semibold text-brand mb-1">{result.insights.level} Readiness</h3>
              <p className="text-muted mb-8">
                Your SharePoint is {Math.round((result.score / 160) * 100)}% ready for Copilot
              </p>

              {/* Findings */}
              <div className="text-left space-y-3 mb-8">
                <h4 className="font-bold text-lg">Key Findings</h4>
                {result.insights.issues.map((issue, i) => (
                  <div key={i} className="bg-surface border-l-4 border-brand p-4 rounded-r">
                    <p className="text-sm">{issue}</p>
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              <div className="text-left space-y-3 mb-8">
                <h4 className="font-bold text-lg">Recommendations</h4>
                {result.insights.recommendations.map((rec, i) => (
                  <div key={i} className="bg-surface border-l-4 border-accent p-4 rounded-r">
                    <p className="text-sm">{rec}</p>
                  </div>
                ))}
              </div>

              {/* Investment */}
              <div className="text-left grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Estimated Cost', value: result.insights.estimatedCost },
                  { label: 'Timeline', value: result.insights.estimatedTime },
                  { label: 'Expected ROI', value: result.insights.roi },
                ].map((s) => (
                  <div key={s.label} className="bg-surface p-5 rounded-lg">
                    <p className="text-xs text-muted font-semibold mb-1">{s.label}</p>
                    <p className="text-sm font-bold text-brand">{s.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-brand to-accent rounded-lg p-8 text-black">
                <h3 className="text-xl font-bold mb-3">Ready to Make Copilot Work?</h3>
                <p className="text-sm mb-5 opacity-90">
                  Our team will reach out within 24 hours with a customized action plan for your organization.
                </p>
                <a
                  href={`mailto:hello@ngozai.com?subject=Copilot Assessment - ${form.company}`}
                  className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-colors"
                >
                  Schedule Free Consultation
                </a>
              </div>

              <p className="text-sm text-muted mt-6">
                Questions?{' '}
                <a href="mailto:hello@ngozai.com" className="text-brand underline">
                  hello@ngozai.com
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
