import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return (
    <span ref={counterRef} className="trust-number">
      {prefix}{count}{suffix}
    </span>
  );
}

export function AboutHero() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 43, 83, 0.75), rgba(11, 43, 83, 0.75)), 
                           url('https://images.unsplash.com/photo-1715605569717-494ac7c5656a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5pY2lhbiUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzcyMTgwNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 
            className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
            style={{ 
              fontWeight: 'var(--weight-bold)',
              lineHeight: 'var(--line-height-heading)'
            }}
          >
            Texas-Based. Family-Owned.<br />Engineering-Grade Solar Care.
          </h1>

          <p 
            className="font-['Inter'] text-lg md:text-xl max-w-3xl mx-auto"
            style={{ 
              color: 'var(--color-accent-sky)',
              lineHeight: 'var(--line-height-body)'
            }}
          >
            We started Power Up Solar Cleaning with one mission: to help our North Texas neighbors 
            protect their renewable energy investments with trust, professionalism, and care.
          </p>
        </div>
      </section>

      {/* Glass-Morphism Trust Banner */}
      <div 
        className="relative px-4 sm:px-6 lg:px-8"
        style={{ 
          marginTop: '-80px',
          zIndex: 20
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-8 md:p-10 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 10px 30px rgba(11, 43, 83, 0.1)'
            }}
          >
            {/* Stat 1 */}
            <div 
              className="text-center pb-6 md:pb-0 md:pr-6 border-b md:border-b-0 md:border-r"
              style={{ borderColor: 'var(--color-border-color)' }}
            >
              <div
                className="font-['Poppins'] text-4xl mb-2"
                style={{
                  fontWeight: 'var(--weight-bold)',
                  color: 'var(--color-action-orange)',
                  lineHeight: '1.2'
                }}
              >
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <span 
                className="block font-['Inter'] text-sm uppercase tracking-wider"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-semibold)',
                  letterSpacing: '0.5px'
                }}
              >
                Years of Professional Experience
              </span>
            </div>

            {/* Stat 2 */}
            <div 
              className="text-center pb-6 md:pb-0 md:px-6 border-b md:border-b-0 md:border-r"
              style={{ borderColor: 'var(--color-border-color)' }}
            >
              <div
                className="font-['Poppins'] text-4xl mb-2"
                style={{
                  fontWeight: 'var(--weight-bold)',
                  color: 'var(--color-action-orange)',
                  lineHeight: '1.2'
                }}
              >
                <AnimatedCounter end={3000} suffix="+" />
              </div>
              <span 
                className="block font-['Inter'] text-sm uppercase tracking-wider"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-semibold)',
                  letterSpacing: '0.5px'
                }}
              >
                Happy Texas Customers
              </span>
            </div>

            {/* Stat 3 */}
            <div className="text-center md:pl-6">
              <div
                className="font-['Poppins'] text-4xl mb-2"
                style={{
                  fontWeight: 'var(--weight-bold)',
                  color: 'var(--color-action-orange)',
                  lineHeight: '1.2'
                }}
              >
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <span 
                className="block font-['Inter'] text-sm uppercase tracking-wider"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-semibold)',
                  letterSpacing: '0.5px'
                }}
              >
                Fully Insured & Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}