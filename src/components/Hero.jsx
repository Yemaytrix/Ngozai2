export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(12,192,223,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,222,89,0.1)_0%,transparent_50%)]" />
      </div>
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center_40%,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.5)_100%)]" />

      {/* Content */}
      <div className="relative z-[2] text-center max-w-3xl px-6 py-32">
        <img
          src="/assets/images/Ngozai symbol white.png"
          alt="Ngozai"
          className="w-36 h-36 object-contain mx-auto mb-10"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Make Microsoft Copilot Actually Work
        </h1>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl mx-auto">
          Transform messy SharePoint into AI-ready data. Get 80% improvement in Copilot accuracy with automated, Microsoft-native data organization.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-10 py-4 rounded-full text-base font-semibold bg-brand text-black border-2 border-brand hover:bg-accent hover:border-accent hover:shadow-[0_8px_32px_rgba(12,192,223,0.3)] transition-all duration-200 hover:-translate-y-0.5"
        >
          Start Your Free Assessment
        </a>

        <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
          <span className="text-sm text-white/60 font-medium">Microsoft Partner</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="text-sm text-white/60 font-medium">Copilot Certified</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="text-sm text-white/60 font-medium">100% Microsoft-Native</span>
        </div>
      </div>
    </section>
  )
}
