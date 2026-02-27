export function CaseStudiesHero() {
  return (
    <section 
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--color-primary-navy)' }}
    >
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-accent-sky) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-accent-sky) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 
          className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
          style={{ 
            fontWeight: 'var(--weight-bold)',
            lineHeight: 'var(--line-height-heading)'
          }}
        >
          Proven Results: Solar Panel Cleaning Case Studies
        </h1>

        <p 
          className="font-['Inter'] text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ color: 'var(--color-accent-sky)' }}
        >
          Explore the data behind our methods. See exactly how Powerup Solar Cleaning Services 
          restores up to 20% energy efficiency for homes and businesses across the Greater Dallas Metroplex.
        </p>
      </div>
    </section>
  );
}
