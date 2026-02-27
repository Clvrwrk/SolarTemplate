import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from 'react-router';

interface LocalSpotlightProps {
  city: string;
  neighborhood: string;
  imageUrl: string;
  imageAlt: string;
  yieldPercentage: number;
  panelCount: number;
  issueResolved: string;
  problemParagraph: string;
  solutionParagraph: string;
}

export function LocalSpotlight({
  city,
  neighborhood,
  imageUrl,
  imageAlt,
  yieldPercentage,
  panelCount,
  issueResolved,
  problemParagraph,
  solutionParagraph
}: LocalSpotlightProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [countedYield, setCountedYield] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Counting animation for yield percentage
  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = yieldPercentage;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCountedYield(end);
          clearInterval(timer);
        } else {
          setCountedYield(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, yieldPercentage]);

  return (
    <section 
      ref={ref}
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ 
        backgroundColor: 'var(--color-bg-white)',
        borderTop: '1px solid var(--color-border-color)',
        borderBottom: '1px solid var(--color-border-color)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Visual - 40% */}
          <div className="w-full lg:w-[40%] relative">
            <div 
              className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4 z-10 rounded-full px-4 py-2 shadow-lg"
              style={{
                backgroundColor: 'var(--color-primary-navy)',
                color: 'var(--color-bg-white)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'var(--weight-semibold)',
                fontSize: '14px'
              }}
            >
              📍 {city}
            </div>
            
            <div 
              className="rounded-xl overflow-hidden"
              style={{
                boxShadow: '0 10px 30px rgba(11, 43, 83, 0.1)'
              }}
            >
              <ImageWithFallback
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-auto"
                style={{ aspectRatio: '4/3', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right Content - 60% */}
          <div className="w-full lg:w-[60%]">
            <h3 
              className="text-2xl md:text-3xl mb-6"
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-bold)',
                lineHeight: 'var(--line-height-heading)'
              }}
            >
              Restoring Peak Efficiency in {neighborhood}
            </h3>

            {/* Mini Stat Bar */}
            <div 
              className="flex flex-wrap gap-6 md:gap-8 mb-6 pb-6"
              style={{ borderBottom: '1px solid var(--color-border-color)' }}
            >
              <div className="flex flex-col">
                <span 
                  className="text-2xl md:text-3xl mb-1"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: 'var(--color-action-orange)',
                    fontWeight: 'var(--weight-bold)',
                    lineHeight: '1'
                  }}
                >
                  +{countedYield}%
                </span>
                <span 
                  className="text-xs uppercase tracking-wider"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.5px'
                  }}
                >
                  Yield Recovered
                </span>
              </div>

              <div className="flex flex-col">
                <span 
                  className="text-2xl md:text-3xl mb-1"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: 'var(--color-action-orange)',
                    fontWeight: 'var(--weight-bold)',
                    lineHeight: '1'
                  }}
                >
                  {panelCount}
                </span>
                <span 
                  className="text-xs uppercase tracking-wider"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.5px'
                  }}
                >
                  Panel System
                </span>
              </div>

              <div className="flex flex-col">
                <span 
                  className="text-2xl md:text-3xl mb-1"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: 'var(--color-action-orange)',
                    fontWeight: 'var(--weight-bold)',
                    lineHeight: '1'
                  }}
                >
                  {issueResolved}
                </span>
                <span 
                  className="text-xs uppercase tracking-wider"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.5px'
                  }}
                >
                  Resolved
                </span>
              </div>
            </div>

            {/* The Story */}
            <p 
              className="text-base md:text-lg mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: 'var(--color-text-main)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              {problemParagraph}
            </p>

            <p 
              className="text-base md:text-lg mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: 'var(--color-text-main)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              {solutionParagraph}
            </p>

            {/* Routing CTA */}
            <Link 
              to="/dallas-solar-cleaning-case-studies"
              className="inline-flex items-center gap-2 group transition-all duration-300"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: 'var(--color-accent-sky)',
                fontWeight: 'var(--weight-semibold)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-primary-navy)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-accent-sky)';
              }}
            >
              <span>View our full clinical case studies</span>
              <span 
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                ➔
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
