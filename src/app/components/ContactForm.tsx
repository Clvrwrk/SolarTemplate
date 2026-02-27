import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { LeadWizard } from './forms/LeadWizard';

export function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary-navy) 0%, #0a1f3d 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
            style={{
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Get Your Free Quote Today
          </h2>
          <p
            className="text-center text-lg mb-12 max-w-2xl mx-auto"
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Join 3,000+ satisfied Texas homeowners who trust us to keep their solar panels performing at peak efficiency.
          </p>

          <div
            className="rounded-2xl shadow-lg p-6 sm:p-8"
            style={{ backgroundColor: 'var(--color-bg-white)' }}
          >
            <LeadWizard context="hero" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}