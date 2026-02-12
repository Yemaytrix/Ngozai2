import { useState } from 'react';

/* ════════════════════════════════════════════════════════════════════════
   PILLAR DATA — 6 pillars × 3 questions, each scored 0-3 (max raw = 9)
   ════════════════════════════════════════════════════════════════════════ */
const PILLARS = [
  {
    id: 'dataFoundation',
    label: 'Data Foundation',
    weight: 0.25,
    description: 'How well your SharePoint data is structured for AI discovery',
    questions: [
      {
        id: 'df1',
        text: 'What percentage of your SharePoint document libraries use managed metadata (content types, term sets, or custom columns) rather than relying solely on folder structures?',
        options: [
          { score: 3, label: '75-100% — Most libraries have structured metadata schemas' },
          { score: 2, label: '40-74% — Some libraries are well-structured, others are not' },
          { score: 1, label: '10-39% — A few libraries have metadata; most use folders only' },
          { score: 0, label: 'Under 10% — We rely almost entirely on folder hierarchies' },
        ],
      },
      {
        id: 'df2',
        text: 'How standardised are file naming conventions across your SharePoint environment?',
        options: [
          { score: 3, label: 'Enforced org-wide via policies or automated rules' },
          { score: 2, label: 'Documented standards exist; most teams follow them voluntarily' },
          { score: 1, label: 'Some departments have conventions; no org-wide standard' },
          { score: 0, label: 'No naming conventions — files are named ad-hoc by individuals' },
        ],
      },
      {
        id: 'df3',
        text: 'How would you describe your SharePoint site architecture (hub sites, site collections, information architecture)?',
        options: [
          { score: 3, label: 'Planned hierarchy with hub sites, consistent navigation, and clear site ownership' },
          { score: 2, label: 'Partially organised — some hub sites exist but structure is inconsistent' },
          { score: 1, label: 'Organic growth — sites were created as needed with no central plan' },
          { score: 0, label: 'We are unsure how our sites are structured or who owns them' },
        ],
      },
    ],
  },
  {
    id: 'security',
    label: 'Security & Permissions',
    weight: 0.2,
    description: 'Whether Copilot will only surface data users are authorised to see',
    questions: [
      {
        id: 'sp1',
        text: 'How does your organisation manage SharePoint site and document permissions?',
        options: [
          { score: 3, label: 'Least-privilege model enforced — permissions reviewed regularly, no "Everyone" groups in use' },
          { score: 2, label: 'Permissions are generally role-based but not regularly audited' },
          { score: 1, label: 'Mixed — some sites have tight controls, others have broad access' },
          { score: 0, label: 'Permissions are largely unknown — many sites are open to the entire organisation' },
        ],
      },
      {
        id: 'sp2',
        text: 'Are Microsoft Purview sensitivity labels applied to classify and protect sensitive content?',
        options: [
          { score: 3, label: 'Yes — deployed and actively used across the organisation' },
          { score: 2, label: 'Partially — labels exist but adoption is limited' },
          { score: 1, label: 'Planned — we intend to deploy but have not started' },
          { score: 0, label: 'No — we do not use sensitivity labels' },
        ],
      },
      {
        id: 'sp3',
        text: 'What is your default external sharing setting for SharePoint sites?',
        options: [
          { score: 3, label: 'Restricted — disabled or limited to approved domains' },
          { score: 2, label: 'Controlled — requires approval or authenticated guests only' },
          { score: 1, label: 'Open by default — users can share externally with some controls' },
          { score: 0, label: 'We are unsure of our current external sharing settings' },
        ],
      },
    ],
  },
  {
    id: 'governance',
    label: 'Information Governance',
    weight: 0.2,
    description: 'Policies and processes that keep your data trustworthy over time',
    questions: [
      {
        id: 'ig1',
        text: 'Does your organisation have retention policies or labels applied to SharePoint content?',
        options: [
          { score: 3, label: 'Yes — automated retention policies in Microsoft Purview, actively enforced' },
          { score: 2, label: 'Partially — retention labels for some content types' },
          { score: 1, label: 'Manual — informal periodic cleanup' },
          { score: 0, label: 'No retention strategy in place' },
        ],
      },
      {
        id: 'ig2',
        text: 'Is there a defined process for archiving or disposing of outdated content?',
        options: [
          { score: 3, label: 'Automated lifecycle management on schedule' },
          { score: 2, label: 'Manual but consistent, at least quarterly' },
          { score: 1, label: 'Informal — some teams clean up occasionally' },
          { score: 0, label: 'Content is never archived or deleted' },
        ],
      },
      {
        id: 'ig3',
        text: 'Does your organisation have a documented data governance policy covering SharePoint?',
        options: [
          { score: 3, label: 'Published policy with data stewards and enforcement' },
          { score: 2, label: 'Guidelines exist but not consistently enforced' },
          { score: 1, label: 'Informal unwritten practices' },
          { score: 0, label: 'No governance policy' },
        ],
      },
    ],
  },
  {
    id: 'contentQuality',
    label: 'Content Quality',
    weight: 0.15,
    description: 'How much ROT (Redundant, Obsolete, Trivial) content exists',
    questions: [
      {
        id: 'cq1',
        text: 'What is your best estimate of duplicate or near-duplicate files across SharePoint?',
        options: [
          { score: 3, label: 'Under 5% — we actively detect and remove duplicates' },
          { score: 2, label: '5-15% — some duplication, manageable' },
          { score: 1, label: '15-30% — duplicates are a known issue' },
          { score: 0, label: 'Over 30% — or no visibility into duplication' },
        ],
      },
      {
        id: 'cq2',
        text: 'How much content is stale (not accessed/modified in 12+ months)?',
        options: [
          { score: 3, label: 'Under 20% — we regularly archive inactive content' },
          { score: 2, label: '20-40% — some stale, active content identifiable' },
          { score: 1, label: '40-60% — significant portion likely outdated' },
          { score: 0, label: 'Over 60% — or no way to assess freshness' },
        ],
      },
      {
        id: 'cq3',
        text: 'How is version control handled in document libraries?',
        options: [
          { score: 3, label: 'Version limits configured, check-in/check-out used' },
          { score: 2, label: 'Versioning enabled by default but not managed' },
          { score: 1, label: 'Versioning in some libraries only' },
          { score: 0, label: 'Unsure whether versioning is enabled' },
        ],
      },
    ],
  },
  {
    id: 'licensing',
    label: 'Licensing & Infrastructure',
    weight: 0.1,
    description: 'Whether your M365 environment supports Copilot governance features',
    questions: [
      {
        id: 'li1',
        text: 'What is your primary Microsoft 365 license tier?',
        options: [
          { score: 3, label: 'Microsoft 365 E5 (or E5 Security/Compliance add-ons)' },
          { score: 2, label: 'Microsoft 365 E3' },
          { score: 1, label: 'Business Premium or Business Standard' },
          { score: 0, label: 'Unsure, or different/older plan' },
        ],
      },
      {
        id: 'li2',
        text: 'Current Microsoft Copilot license status?',
        options: [
          { score: 3, label: 'Licenses purchased and assigned to users' },
          { score: 2, label: 'Purchased but not yet deployed' },
          { score: 1, label: 'Evaluating or budgeting' },
          { score: 0, label: 'No Copilot licenses purchased' },
        ],
      },
      {
        id: 'li3',
        text: 'Is your SharePoint fully Online or hybrid/on-premises?',
        options: [
          { score: 3, label: '100% SharePoint Online' },
          { score: 2, label: 'Primarily Online with minor on-prem' },
          { score: 1, label: 'Hybrid — significant on-prem content' },
          { score: 0, label: 'Primarily on-premises (SharePoint Server)' },
        ],
      },
    ],
  },
  {
    id: 'orgReadiness',
    label: 'Organisational Readiness',
    weight: 0.1,
    description: 'People, process, and change management preparedness',
    questions: [
      {
        id: 'or1',
        text: 'Is there executive sponsorship for your AI readiness initiative?',
        options: [
          { score: 3, label: 'Active sponsor with budget + cross-functional steering committee' },
          { score: 2, label: 'Sponsor identified but no committee yet' },
          { score: 1, label: 'IT leadership driving without formal sponsorship' },
          { score: 0, label: 'No formal sponsorship' },
        ],
      },
      {
        id: 'or2',
        text: 'Do you have a Copilot training and change management plan?',
        options: [
          { score: 3, label: 'Structured programme with dept-specific sessions and metrics' },
          { score: 2, label: 'General plan exists, not yet department-specific' },
          { score: 1, label: 'Plan to provide basic docs or self-service resources' },
          { score: 0, label: 'No training plan' },
        ],
      },
      {
        id: 'or3',
        text: 'Is there a designated project owner for SharePoint readiness?',
        options: [
          { score: 3, label: 'Dedicated team/individual with allocated resources' },
          { score: 2, label: 'Assigned but secondary to other projects' },
          { score: 1, label: 'Informal — someone looking into it' },
          { score: 0, label: 'No one assigned' },
        ],
      },
    ],
  },
];

/* ════════════════════════════════════════════════════════════════════════
   FINDINGS MAP — scores 0 & 1 generate finding + recommendation
   ════════════════════════════════════════════════════════════════════════ */
const FINDINGS = {
  df1: {
    0: {
      finding: 'Under 10% use metadata. Copilot relies on metadata for content retrieval.',
      recommendation: 'Implement managed metadata schemas across all document libraries.',
    },
    1: {
      finding: 'Only 10-39% have metadata. Copilot will perform inconsistently.',
      recommendation: 'Expand metadata adoption to remaining libraries with a structured rollout plan.',
    },
  },
  df2: {
    0: {
      finding: 'No naming conventions. Degrades search relevance.',
      recommendation: 'Define and enforce org-wide file naming conventions.',
    },
    1: {
      finding: 'Dept-only conventions, no org standard.',
      recommendation: 'Establish an org-wide naming standard based on existing department conventions.',
    },
  },
  df3: {
    0: {
      finding: 'Unknown site structure. Copilot cannot scope searches.',
      recommendation: 'Conduct a site architecture audit and plan a hub site hierarchy.',
    },
    1: {
      finding: 'Organic growth, fragmented search scope.',
      recommendation: 'Create a site restructuring plan with hub sites and clear ownership.',
    },
  },
  sp1: {
    0: {
      finding: 'CRITICAL: Unknown permissions, many sites open to all. Oversharing risk.',
      recommendation: 'Conduct an urgent permissions audit and implement a least-privilege model.',
    },
    1: {
      finding: 'Mixed controls, inconsistent permissions.',
      recommendation: 'Standardise permissions across sites and schedule regular access reviews.',
    },
  },
  sp2: {
    0: {
      finding: 'No sensitivity labels. No mechanism to prevent Copilot surfacing confidential content.',
      recommendation: 'Deploy Microsoft Purview sensitivity labels as a priority.',
    },
    1: {
      finding: 'Labels planned but not started.',
      recommendation: 'Accelerate sensitivity label deployment timeline.',
    },
  },
  sp3: {
    0: {
      finding: 'Unknown external sharing settings. Unquantified exposure.',
      recommendation: 'Audit and document external sharing settings immediately.',
    },
    1: {
      finding: 'External sharing open by default.',
      recommendation: 'Restrict external sharing to authenticated guests or approved domains.',
    },
  },
  ig1: {
    0: {
      finding: 'No retention strategy. Outdated content accumulates.',
      recommendation: 'Implement automated retention policies in Microsoft Purview.',
    },
    1: {
      finding: 'Manual informal retention.',
      recommendation: 'Formalise and automate existing retention processes.',
    },
  },
  ig2: {
    0: {
      finding: 'Content never archived. Copilot references stale info.',
      recommendation: 'Create an automated content lifecycle management schedule.',
    },
    1: {
      finding: 'Informal inconsistent cleanup.',
      recommendation: 'Establish a regular quarterly archival and disposal process.',
    },
  },
  ig3: {
    0: {
      finding: 'No governance policy. Data quality will degrade.',
      recommendation: 'Develop and publish a data governance policy with assigned stewards.',
    },
    1: {
      finding: 'Informal practices without enforcement.',
      recommendation: 'Formalise existing practices into an enforceable written policy.',
    },
  },
  cq1: {
    0: {
      finding: 'Over 30% duplication or no visibility. Redundant results.',
      recommendation: 'Deploy duplicate detection and removal tools.',
    },
    1: {
      finding: '15-30% duplication, known issue.',
      recommendation: 'Prioritise duplicate cleanup with automated detection.',
    },
  },
  cq2: {
    0: {
      finding: 'Over 60% stale content. Copilot references outdated info.',
      recommendation: 'Implement content freshness reviews and archive stale content.',
    },
    1: {
      finding: '40-60% stale.',
      recommendation: 'Schedule content freshness reviews for stale libraries.',
    },
  },
  cq3: {
    0: {
      finding: 'Unknown version control. Unmanaged versioning bloats storage.',
      recommendation: 'Enable and configure versioning across all document libraries.',
    },
    1: {
      finding: 'Inconsistent versioning.',
      recommendation: 'Standardise versioning settings across all libraries.',
    },
  },
  li1: {
    0: {
      finding: 'Unknown license tier. Determines governance features.',
      recommendation: 'Identify your current license tier and evaluate an E3/E5 upgrade.',
    },
    1: {
      finding: 'Business tier. Missing advanced governance.',
      recommendation: 'Evaluate E3/E5 upgrade for advanced governance and compliance features.',
    },
  },
  li2: {
    0: {
      finding: 'No Copilot licenses yet.',
      recommendation: 'Begin Copilot license planning and budgeting.',
    },
    1: {
      finding: 'Evaluating/budgeting.',
      recommendation: 'Finalise Copilot licensing evaluation timeline.',
    },
  },
  li3: {
    0: {
      finding: 'CRITICAL: Primarily on-prem. Copilot only works with Online.',
      recommendation: 'Plan migration from on-premises to SharePoint Online.',
    },
    1: {
      finding: 'Hybrid with significant on-prem.',
      recommendation: 'Accelerate migration of on-premises content to SharePoint Online.',
    },
  },
  or1: {
    0: {
      finding: 'No executive sponsorship. Initiatives stall.',
      recommendation: 'Secure executive sponsor and establish a steering committee.',
    },
    1: {
      finding: 'IT only, no exec sponsor.',
      recommendation: 'Formalise executive sponsorship for the AI readiness initiative.',
    },
  },
  or2: {
    0: {
      finding: 'No training plan. Adoption typically below 30%.',
      recommendation: 'Develop a structured Copilot training and change management programme.',
    },
    1: {
      finding: 'Basic self-service only.',
      recommendation: 'Expand training plan with department-specific sessions and success metrics.',
    },
  },
  or3: {
    0: {
      finding: "No one assigned. Work won't get done.",
      recommendation: 'Assign a dedicated project owner with allocated time and resources.',
    },
    1: {
      finding: 'Informal, will be deprioritised.',
      recommendation: 'Formalise project ownership with dedicated time allocation.',
    },
  },
};

/* ════════════════════════════════════════════════════════════════════════
   SCOPE ESTIMATION
   ════════════════════════════════════════════════════════════════════════ */
const SIZE_MULTIPLIERS = {
  '1-100': 0.6,
  '101-500': 0.8,
  '501-1500': 1.0,
  '1501-5000': 1.3,
  '5001+': 1.6,
};

function estimateScope(pillarScores, employeeCount) {
  const atRisk = pillarScores.filter((p) => p.pct < 40).length;
  const needsWork = pillarScores.filter((p) => p.pct < 75).length;
  const mult = SIZE_MULTIPLIERS[employeeCount] || 1.0;

  let tier, baseLow, baseHigh, weeksLow, weeksHigh;
  if (atRisk >= 3) {
    tier = 'Large';
    baseLow = 40000;
    baseHigh = 75000;
    weeksLow = 4;
    weeksHigh = 8;
  } else if (atRisk >= 1 || needsWork >= 4) {
    tier = 'Medium';
    baseLow = 15000;
    baseHigh = 40000;
    weeksLow = 2;
    weeksHigh = 4;
  } else {
    tier = 'Small';
    baseLow = 5000;
    baseHigh = 15000;
    weeksLow = 1;
    weeksHigh = 2;
  }

  const costLow = Math.round((baseLow * mult) / 1000) * 1000;
  const costHigh = Math.round((baseHigh * mult) / 1000) * 1000;
  const wLow = Math.max(1, Math.round(weeksLow * mult));
  const wHigh = Math.max(1, Math.round(weeksHigh * mult));

  return {
    tier,
    cost: `$${(costLow / 1000).toFixed(0)}K – $${(costHigh / 1000).toFixed(0)}K`,
    timeline: wLow === wHigh ? `${wLow} weeks` : `${wLow}–${wHigh} weeks`,
  };
}

/* ════════════════════════════════════════════════════════════════════════
   STATUS HELPER
   ════════════════════════════════════════════════════════════════════════ */
function getStatus(pct) {
  if (pct >= 75) return { label: 'Ready', color: '#107C10' };
  if (pct >= 40) return { label: 'Needs Work', color: '#FFB900' };
  return { label: 'At Risk', color: '#D13438' };
}

/* ════════════════════════════════════════════════════════════════════════
   RADAR CHART — inline SVG, 6 vertices
   ════════════════════════════════════════════════════════════════════════ */
const RADAR_LABELS = ['Data', 'Security', 'Governance', 'Content', 'Licensing', 'Readiness'];

function RadarChart({ pillarScores }) {
  const cx = 150;
  const cy = 150;
  const R = 110;
  const n = 6;
  const angleStep = (2 * Math.PI) / n;

  const pt = (i, r) => {
    const a = angleStep * i - Math.PI / 2;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };

  const hexPoints = (r) =>
    Array.from({ length: n }, (_, i) => pt(i, r).join(',')).join(' ');

  const gridLevels = [0.25, 0.5, 0.75, 1.0];
  const values = pillarScores.map((p) => p.pct / 100);
  const dataPoints = values.map((v, i) => pt(i, R * Math.max(v, 0.03)));
  const dataPoly = dataPoints.map((p) => p.join(',')).join(' ');

  const anchor = (i) => {
    if (i === 0 || i === 3) return 'middle';
    if (i === 1 || i === 2) return 'start';
    return 'end';
  };
  const labelDy = (i) => {
    if (i === 0) return -8;
    if (i === 3) return 14;
    return 4;
  };

  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-[300px] overflow-visible">
      {/* Grid hexagons */}
      {gridLevels.map((l, i) => (
        <polygon
          key={i}
          points={hexPoints(R * l)}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
      ))}
      {/* Axis spokes */}
      {Array.from({ length: n }, (_, i) => {
        const [x, y] = pt(i, R);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        );
      })}
      {/* Percentage labels on axis */}
      {gridLevels.map((l, i) => (
        <text
          key={i}
          x={cx + 4}
          y={cy - R * l + 1}
          fontSize="8"
          fill="#aaa"
          dominantBaseline="middle"
        >
          {Math.round(l * 100)}%
        </text>
      ))}
      {/* Data polygon */}
      <polygon
        points={dataPoly}
        fill="rgba(12,192,223,0.15)"
        stroke="#0cc0df"
        strokeWidth="2"
      />
      {/* Vertex dots */}
      {dataPoints.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#0cc0df" />
      ))}
      {/* Labels */}
      {RADAR_LABELS.map((label, i) => {
        const [x, y] = pt(i, R + 20);
        return (
          <text
            key={i}
            x={x}
            y={y + labelDy(i)}
            textAnchor={anchor(i)}
            fontSize="10"
            fill="#555"
            fontWeight="600"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   COMPUTE RESULTS
   ════════════════════════════════════════════════════════════════════════ */
function computeResults(answers, employeeCount) {
  const pillarScores = PILLARS.map((pillar) => {
    const raw = pillar.questions.reduce(
      (sum, q) => sum + (answers[q.id] ?? 0),
      0,
    );
    const pct = Math.round((raw / 9) * 100);
    const status = getStatus(pct);

    const findings = [];
    pillar.questions.forEach((q) => {
      const score = answers[q.id];
      if (score !== undefined && score <= 1 && FINDINGS[q.id]?.[score]) {
        findings.push(FINDINGS[q.id][score]);
      }
    });

    return {
      id: pillar.id,
      label: pillar.label,
      description: pillar.description,
      weight: pillar.weight,
      raw,
      pct,
      status,
      findings,
    };
  });

  const overall = Math.round(
    pillarScores.reduce((sum, p) => sum + p.pct * p.weight, 0),
  );

  const scope = estimateScope(pillarScores, employeeCount);
  const blockers = pillarScores.filter((p) => p.pct < 25);

  return { overall, pillarScores, scope, blockers };
}

/* ════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   Steps: 1 = Contact · 2-7 = Pillars · 8 = Loading · 9 = Results
   ════════════════════════════════════════════════════════════════════════ */
export default function AssessmentPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    employeeCount: '',
  });
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  /* ── helpers ─────────────────────────────────────────────────────── */
  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(''), 5000);
  };

  const validateContact = () => {
    if (
      !form.fullName ||
      !form.email ||
      !form.company ||
      !form.jobTitle ||
      !form.employeeCount
    ) {
      showError('Please fill in all required fields.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      showError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const validatePillar = (pillarIdx) =>
    PILLARS[pillarIdx].questions.every((q) => answers[q.id] !== undefined);

  const progress = step >= 8 ? 100 : (step / 8) * 100;

  const next = () => {
    if (step === 1) {
      if (!validateContact()) return;
      setStep(2);
    } else if (step >= 2 && step <= 7) {
      if (!validatePillar(step - 2)) {
        showError('Please answer all questions before continuing.');
        return;
      }
      if (step === 7) {
        setStep(8);
        const results = computeResults(answers, form.employeeCount);
        setTimeout(() => {
          setResult(results);
          setStep(9);
        }, 2000);
      } else {
        setStep(step + 1);
      }
    }
  };

  const prev = () => {
    if (step > 1 && step <= 7) setStep(step - 1);
  };

  /* ── render ──────────────────────────────────────────────────────── */
  return (
    <section className="min-h-screen bg-gradient-to-br from-brand via-brand-dark to-[#086a7a] py-12 px-5 pt-32">
      <div className="max-w-[820px] mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* ── Header ── */}
        <div className="bg-gradient-to-r from-brand to-accent text-black px-10 py-10 text-center">
          <h1 className="text-3xl font-bold mb-2">Copilot Readiness Assessment</h1>
          <p className="text-lg opacity-90">
            6-Pillar SharePoint &amp; Microsoft 365 Readiness Score
          </p>
        </div>

        <div className="p-8 md:p-10">
          {/* ── Error banner ── */}
          {error && (
            <div className="bg-red-50 text-red-700 border border-red-200 px-4 py-3 rounded mb-6 text-sm">
              {error}
            </div>
          )}

          {/* ── Progress bar ── */}
          {step < 9 && (
            <div className="h-1.5 bg-gray-200 rounded-full mb-8 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand to-accent rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* ═══════════════════ STEP 1 — CONTACT ═══════════════════ */}
          {step === 1 && (
            <div className="animate-[fadeUp_0.5s_ease]">
              <h2 className="text-2xl font-bold mb-2">Let&apos;s Get Started</h2>
              <p className="text-muted mb-6">
                Tell us about yourself and your organisation:
              </p>

              {[
                {
                  id: 'fullName',
                  label: 'Full Name',
                  type: 'text',
                  placeholder: 'John Smith',
                },
                {
                  id: 'email',
                  label: 'Work Email',
                  type: 'email',
                  placeholder: 'john@company.com',
                },
                {
                  id: 'company',
                  label: 'Company Name',
                  type: 'text',
                  placeholder: 'Acme Corporation',
                },
                {
                  id: 'jobTitle',
                  label: 'Job Title',
                  type: 'text',
                  placeholder: 'IT Director',
                },
              ].map((f) => (
                <div key={f.id} className="mb-5">
                  <label className="block text-sm font-semibold mb-1.5">
                    {f.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.id]}
                    onChange={(e) =>
                      setForm({ ...form, [f.id]: e.target.value })
                    }
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
                  onChange={(e) =>
                    setForm({ ...form, employeeCount: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded text-sm focus:outline-none focus:border-brand transition-colors"
                >
                  <option value="">Select range...</option>
                  <option value="1-100">1 – 100</option>
                  <option value="101-500">101 – 500</option>
                  <option value="501-1500">501 – 1,500</option>
                  <option value="1501-5000">1,501 – 5,000</option>
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

          {/* ═══════════════════ STEPS 2-7 — PILLARS ═══════════════════ */}
          {step >= 2 &&
            step <= 7 &&
            (() => {
              const pillar = PILLARS[step - 2];
              return (
                <div key={step} className="animate-[fadeUp_0.5s_ease]">
                  <p className="text-xs font-semibold text-brand mb-1 uppercase tracking-wide">
                    Pillar {step - 1} of 6
                  </p>
                  <h2 className="text-2xl font-bold mb-1">{pillar.label}</h2>
                  <p className="text-muted mb-6 text-sm">{pillar.description}</p>

                  {pillar.questions.map((q) => (
                    <div key={q.id} className="mb-8 bg-surface p-6 rounded-lg">
                      <h3 className="text-base font-semibold text-brand mb-4 leading-snug">
                        {q.text}
                      </h3>
                      <div className="space-y-3">
                        {q.options.map((opt, i) => (
                          <label
                            key={i}
                            className={`flex items-start gap-3 p-3 bg-white border-2 rounded cursor-pointer transition-all ${
                              answers[q.id] === opt.score &&
                              answers[`${q.id}_idx`] === i
                                ? 'border-brand bg-brand/5'
                                : 'border-gray-200 hover:border-brand/40'
                            }`}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              className="w-5 h-5 mt-0.5 accent-brand shrink-0"
                              checked={
                                answers[q.id] === opt.score &&
                                answers[`${q.id}_idx`] === i
                              }
                              onChange={() =>
                                setAnswers({
                                  ...answers,
                                  [q.id]: opt.score,
                                  [`${q.id}_idx`]: i,
                                })
                              }
                            />
                            <span className="text-sm leading-snug">
                              {opt.label}
                            </span>
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
                      {step === 7 ? 'Get My Results' : 'Continue'}
                    </button>
                  </div>
                </div>
              );
            })()}

          {/* ═══════════════════ STEP 8 — LOADING ═══════════════════ */}
          {step === 8 && (
            <div className="text-center py-16 animate-[fadeUp_0.5s_ease]">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-brand rounded-full animate-spin mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-2">
                Analysing Your Responses…
              </h3>
              <p className="text-muted">
                Calculating your 6-pillar readiness score.
              </p>
            </div>
          )}

          {/* ═══════════════════ STEP 9 — RESULTS ═══════════════════ */}
          {step === 9 && result && (
            <div className="animate-[fadeUp_0.5s_ease]">
              {/* ── Overall Score + Radar ── */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-44 h-44 rounded-full flex flex-col items-center justify-center text-white shadow-lg"
                    style={{ backgroundColor: getStatus(result.overall).color }}
                  >
                    <span className="text-5xl font-bold">
                      {result.overall}%
                    </span>
                    <span className="text-sm mt-1 opacity-90">
                      {getStatus(result.overall).label}
                    </span>
                  </div>
                  <p className="text-muted text-sm mt-3 font-medium">
                    Overall Readiness
                  </p>
                </div>

                <div className="flex-1 flex justify-center">
                  <RadarChart pillarScores={result.pillarScores} />
                </div>
              </div>

              {/* ── Critical Blockers ── */}
              {result.blockers.length > 0 && (
                <div className="bg-red-50 border-2 border-[#D13438] rounded-lg p-5 mb-8">
                  <h3 className="text-lg font-bold text-[#D13438] mb-2">
                    ⚠ Critical Blockers ({result.blockers.length})
                  </h3>
                  <p className="text-sm text-[#D13438]/80 mb-3">
                    These areas must be addressed before Copilot deployment:
                  </p>
                  <ul className="space-y-1">
                    {result.blockers.map((b) => (
                      <li
                        key={b.id}
                        className="text-sm font-medium text-[#D13438]"
                      >
                        • {b.label} — {b.pct}%
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ── Pillar-by-Pillar Cards ── */}
              <h3 className="text-xl font-bold mb-4">
                Pillar-by-Pillar Breakdown
              </h3>
              <div className="space-y-4 mb-10">
                {result.pillarScores.map((p) => (
                  <div key={p.id} className="bg-surface rounded-lg p-5">
                    {/* Title row */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-base">{p.label}</h4>
                        <p className="text-xs text-muted">{p.description}</p>
                      </div>
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full text-white shrink-0 ml-3"
                        style={{ backgroundColor: p.status.color }}
                      >
                        {p.status.label}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden mb-1">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${p.pct}%`,
                          backgroundColor: p.status.color,
                        }}
                      />
                    </div>
                    <p
                      className="text-right text-xs font-semibold mb-3"
                      style={{ color: p.status.color }}
                    >
                      {p.pct}%
                    </p>

                    {/* Findings + Recommendations */}
                    {p.findings.length > 0 && (
                      <div className="space-y-2 mt-2">
                        {p.findings.map((f, i) => (
                          <div
                            key={i}
                            className="text-sm border-l-[3px] border-[#D13438]/40 pl-3 py-1"
                          >
                            <p className="text-[#D13438] font-medium">
                              {f.finding}
                            </p>
                            <p className="text-muted mt-0.5">
                              → {f.recommendation}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* ── Scope Estimate ── */}
              <div className="bg-surface rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Estimated Remediation Scope
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      label: 'Project Tier',
                      value: result.scope.tier,
                      icon: '📋',
                    },
                    {
                      label: 'Timeline',
                      value: result.scope.timeline,
                      icon: '⏱',
                    },
                    {
                      label: 'Investment',
                      value: result.scope.cost,
                      icon: '💰',
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white p-4 rounded-lg text-center"
                    >
                      <p className="text-2xl mb-1">{s.icon}</p>
                      <p className="text-xs text-muted font-semibold mb-1">
                        {s.label}
                      </p>
                      <p className="text-base font-bold text-brand">
                        {s.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── CTA ── */}
              <div className="bg-gradient-to-r from-brand to-accent rounded-lg p-8 text-center text-black">
                <h3 className="text-xl font-bold mb-3">
                  Ready to Make Copilot Work?
                </h3>
                <p className="text-sm mb-5 opacity-90">
                  Get a customised remediation roadmap from our SharePoint &amp;
                  Copilot specialists.
                </p>
                <a
                  href={`mailto:hello@ngozai.com?subject=${encodeURIComponent(
                    `Copilot Readiness Assessment — ${form.company}`,
                  )}&body=${encodeURIComponent(
                    `Hi Ngozai,\n\nI completed the Copilot Readiness Assessment.\n\nName: ${form.fullName}\nCompany: ${form.company}\nOverall Score: ${result.overall}%\n\nI'd like to schedule a free consultation to discuss our results.\n\nThank you.`,
                  )}`}
                  className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-colors"
                >
                  Schedule Free Consultation
                </a>
              </div>

              <p className="text-sm text-muted mt-6 text-center">
                Questions?{' '}
                <a
                  href="mailto:hello@ngozai.com"
                  className="text-brand underline"
                >
                  hello@ngozai.com
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
