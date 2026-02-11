export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(12,192,223,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_70%,rgba(255,222,89,0.08)_0%,transparent_60%)]" />
      <div className="relative z-[2] max-w-7xl mx-auto px-6 pt-40 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
