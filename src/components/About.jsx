import useInView from '../hooks/useInView'

export default function About() {
  const [ref, isVisible] = useInView()

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`grid lg:grid-cols-[1fr_2fr] gap-20 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Image placeholder */}
          <div className="w-full aspect-square bg-surface rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src="/assets/images/Ngozai logo.png"
              alt="Ngozai"
              className="w-3/5 h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Ngozai</h2>
            <p className="text-xl font-semibold text-brand mb-6 leading-snug">
              Microsoft technology pioneers making Copilot work for enterprise organizations.
            </p>
            <p className="text-muted leading-relaxed mb-5">
              The Ngozai team co-created the first Microsoft templates that are still in use across the ecosystem today. With deep expertise in Power Platform, Power Automate, AI Builder, and Copilot Studio, they identified the root cause of poor Copilot performance: messy, unorganized SharePoint data.
            </p>
            <p className="text-muted leading-relaxed mb-5">
              Ngozai was built to solve this problem at scale. Our automated workflows clean, organize, and enrich your SharePoint data using 100% Microsoft-native tools — no third-party software, no complex integrations.
            </p>
            <p className="text-muted leading-relaxed">
              Beyond SharePoint optimization, Ngozai is pioneering AI-driven solutions in healthcare, including clinical trial agent technology that streamlines research workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
