import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function LocalProblem() {
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
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-white)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1681049400158-0ff6249ac315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwY2xlYW5pbmclMjByZXNpZGVudGlhbCUyMHNvbGFyJTIwcGFuZWxzJTIwcm9vZnxlbnwxfHx8fDE3NzIxNTcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Technician cleaning residential solar panels in Allen TX"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '4/3' }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 'var(--line-height-heading)',
              }}
            >
              Why Allen Homeowners Need Regular Panel Maintenance
            </h2>
            
            <p 
              className="text-lg mb-6"
              style={{ 
                color: 'var(--color-text-main)',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 'var(--line-height-body)',
              }}
            >
              Between the relentless North Texas dust and heavy spring tree pollen, your 
              home's solar panels take a beating. Over time, dirt, pollen, and even bird 
              droppings can accumulate on solar panels, obstructing sunlight and reducing 
              overall efficiency.
            </p>

            <div 
              className="p-6 rounded-xl mb-6"
              style={{ backgroundColor: 'var(--color-bg-light-blue)' }}
            >
              <p 
                className="text-lg"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 'var(--line-height-body)',
                }}
              >
                In fact, clean panels can boost your system's energy production by up to{' '}
                <strong style={{ color: 'var(--color-action-orange)' }}>20% or more</strong>.
              </p>
            </div>

            <p 
              className="text-lg"
              style={{ 
                color: 'var(--color-text-main)',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 'var(--line-height-body)',
              }}
            >
              By scheduling periodic cleanings with our professional services, residential 
              solar system owners in Allen can ensure they are always receiving the maximum 
              energy output and subsequently, maximum savings on their utility bills.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}