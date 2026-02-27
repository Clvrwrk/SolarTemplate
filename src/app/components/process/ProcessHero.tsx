export function ProcessHero() {
  return (
    <section 
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--color-primary-navy)' }}
    >
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(var(--color-accent-sky) 1px, transparent 1px), 
                           linear-gradient(90deg, var(--color-accent-sky) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 
          className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
          style={{ 
            fontWeight: 'var(--weight-bold)',
            lineHeight: 'var(--line-height-heading)'
          }}
        >
          The Anatomy of a Certified Clean
        </h1>

        <p 
          className="font-['Inter'] text-xl md:text-2xl mb-12"
          style={{ color: 'var(--color-accent-sky)' }}
        >
          Our 6-Step Standard Operating Procedure
        </p>

        {/* Authority Block */}
        <div 
          className="bg-white rounded-xl p-8 md:p-10 shadow-2xl max-w-4xl mx-auto"
        >
          <p 
            className="font-['Inter'] text-lg mb-6 text-left"
            style={{ 
              color: 'var(--color-text-main)',
              lineHeight: 'var(--line-height-body)'
            }}
          >
            When you hire us to maintain your solar array, you aren't just paying for a wash—you 
            are investing in <strong>engineering-grade asset protection</strong>. Solar modules 
            are live electrical power plants mounted to your roof. A careless "splash-and-dash" 
            with a garden hose and tap water can void your manufacturer warranty, induce 
            micro-cracking, and create severe electrical hazards.
          </p>

          <div 
            className="p-6 rounded-lg"
            style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
          >
            <p 
              className="font-['Poppins'] text-xl mb-2"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-bold)'
              }}
            >
              We operate differently.
            </p>
            <p 
              className="font-['Inter']"
              style={{ 
                color: 'var(--color-text-main)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              From the moment we schedule your service to the final handover of your compliance 
              report, every step is dictated by strict Original Equipment Manufacturer (OEM) 
              guidelines and federal OSHA safety standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
