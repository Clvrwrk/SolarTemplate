import { Shield, Droplet, Award } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function McKinneyHero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1647783327914-e7f0db63e263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwc29sYXIlMjBwYW5lbHMlMjBob3VzZSUyMHN1bm55JTIwZGF5fGVufDF8fHx8MTc3MjE2NjUzMHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Solar panels on McKinney, Texas residential rooftop"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navy Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(11, 43, 83, 0.85), rgba(11, 43, 83, 0.65))'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center md:text-left">
        <h1 
          className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
          style={{ 
            fontWeight: 'var(--weight-bold)',
            lineHeight: 'var(--line-height-heading)'
          }}
        >
          Best Solar Panel Cleaning McKinney TX
        </h1>

        <p 
          className="font-['Inter'] text-lg md:text-xl mb-8 max-w-3xl leading-relaxed"
          style={{ color: 'var(--color-accent-sky)' }}
        >
          Our precision-driven approach optimizes energy yield by removing debris and dirt, 
          safeguarding your investment. Ideal for tech-savvy homeowners who demand data-backed 
          solutions to curb appeal issues and energy efficiency in North Texas.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="px-8 py-4 rounded-lg font-['Poppins'] text-lg mb-12 transition-all duration-300 inline-block"
          style={{
            backgroundColor: 'var(--color-action-orange)',
            color: 'white',
            fontWeight: 'var(--weight-semibold)',
            boxShadow: '0 4px 12px rgba(242, 140, 40, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(11, 43, 83, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(242, 140, 40, 0.3)';
          }}
        >
          Book McKinney Cleaning
        </button>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-sm font-['Inter']">
              HOA Compliant
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-sm font-['Inter']">
              Warranty-Safe Methods
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-sm font-['Inter']">
              Deionized Water Systems
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
