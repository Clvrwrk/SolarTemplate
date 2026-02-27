import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useEffect, useRef, useState } from 'react';

export function CostHero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleGetQuote = () => {
    const formSection = document.getElementById('cost-quote-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle Sunburst Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 70% 30%, var(--color-accent-sky-light) 0%, transparent 60%)`
        }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 
              className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-bold)',
                lineHeight: 'var(--line-height-heading)'
              }}
            >
              How Much Does Solar Panel Cleaning Cost in Allen, TX?
            </h1>

            {/* The "Bottom Line" Callout Box */}
            <div 
              className="bg-white rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                boxShadow: '0 4px 20px rgba(11, 43, 83, 0.08)',
                border: '1px solid var(--color-border-color)'
              }}
            >
              <div className="mb-3">
                <p 
                  className="font-['Inter'] text-sm uppercase tracking-wider"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Average Investment
                </p>
              </div>
              <div 
                className="font-['Poppins'] text-5xl md:text-6xl mb-4"
                style={{ 
                  color: 'var(--color-action-orange)',
                  fontWeight: 'var(--weight-bold)'
                }}
              >
                $100 – $300
              </div>
              <p 
                className="font-['Inter'] text-base leading-relaxed"
                style={{ color: 'var(--color-text-main)' }}
              >
                Budget-wise, cleaning costs between $100 and $300, reflecting the safeguarding process of panel efficiency and warranties.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleGetQuote}
              className="w-full md:w-auto px-8 py-4 rounded-lg font-['Poppins'] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: 'var(--color-action-orange)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              Get My Exact Quote
            </button>
          </div>

          {/* Right Column - Image */}
          <div 
            ref={imageRef}
            className={`transition-all duration-600 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1771479755134-9c1e3143c110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2xhciUyMHBhbmVsJTIwY2xlYW5pbmclMjByb29mdG9wfGVufDF8fHx8MTc3MjE2NDQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional solar panel cleaning on eco-friendly rooftop in Allen, TX"
              className="rounded-xl w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
