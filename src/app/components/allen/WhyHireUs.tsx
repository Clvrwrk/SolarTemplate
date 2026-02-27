import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Wrench, Ban, Calendar } from 'lucide-react';

export function WhyHireUs() {
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
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontFamily: 'Poppins, sans-serif',
            lineHeight: 'var(--line-height-heading)',
          }}
        >
          The Power Up Process: Safe, Spotless, and Professional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg mb-12 max-w-2xl mx-auto"
          style={{ 
            color: 'var(--color-text-muted)',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 'var(--line-height-body)',
          }}
        >
          Why hire professionals when you could DIY? Here's what sets us apart and 
          keeps your Allen home's solar investment safe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Accordion type="single" collapsible defaultValue="tools" className="space-y-4">
            <AccordionItem 
              value="tools"
              className="rounded-xl px-6 shadow-sm"
              style={{ 
                backgroundColor: 'var(--color-bg-white)',
                border: '1px solid var(--color-border-color)',
              }}
            >
              <AccordionTrigger 
                className="py-4"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  color: 'var(--color-primary-navy)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
                  >
                    <Wrench size={20} style={{ color: 'var(--color-accent-sky)' }} />
                  </div>
                  <span className="font-semibold">The Right Tools for the Job</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div 
                  className="space-y-3"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: 'var(--color-text-main)',
                    lineHeight: 'var(--line-height-body)',
                  }}
                >
                  <p>
                    We use specialized equipment including <strong>non-abrasive brushes</strong> and{' '}
                    <strong>deionized water</strong> to ensure thorough cleaning without leaving 
                    mineral deposits or residue on your panels.
                  </p>
                  <div 
                    className="p-4 rounded-lg mt-3"
                    style={{ backgroundColor: 'var(--color-bg-light-blue)' }}
                  >
                    <p className="text-sm">
                      <strong>Why it matters:</strong> Allen's hard water can leave stubborn spots 
                      that reduce efficiency. Our deionized water system leaves panels crystal clear.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="no-pressure"
              className="rounded-xl px-6 shadow-sm"
              style={{ 
                backgroundColor: 'var(--color-bg-white)',
                border: '1px solid var(--color-border-color)',
              }}
            >
              <AccordionTrigger 
                className="py-4"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  color: 'var(--color-primary-navy)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
                  >
                    <Ban size={20} style={{ color: 'var(--color-accent-sky)' }} />
                  </div>
                  <span className="font-semibold">No Damaging Pressure Washers</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div 
                  className="space-y-3"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: 'var(--color-text-main)',
                    lineHeight: 'var(--line-height-body)',
                  }}
                >
                  <p>
                    We <strong>avoid using pressure washers or high-pressure hoses</strong>, as 
                    they can damage the panels and their mounting systems. We rely on gentle, 
                    effective techniques that protect your investment.
                  </p>
                  <ul className="space-y-2 ml-4 mt-3">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-action-orange)' }}></span>
                      <span>Prevents micro-cracks in panel surfaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-action-orange)' }}></span>
                      <span>Protects electrical connections and seals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-action-orange)' }}></span>
                      <span>Maintains manufacturer warranties</span>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="seasonal"
              className="rounded-xl px-6 shadow-sm"
              style={{ 
                backgroundColor: 'var(--color-bg-white)',
                border: '1px solid var(--color-border-color)',
              }}
            >
              <AccordionTrigger 
                className="py-4"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  color: 'var(--color-primary-navy)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
                  >
                    <Calendar size={20} style={{ color: 'var(--color-accent-sky)' }} />
                  </div>
                  <span className="font-semibold">Seasonal Texas Maintenance</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div 
                  className="space-y-4"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: 'var(--color-text-main)',
                    lineHeight: 'var(--line-height-body)',
                  }}
                >
                  <p>
                    From clearing autumn leaves to washing away thick spring pollen, our seasonal 
                    maintenance ensures your system runs smoothly year-round.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div 
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: 'var(--color-bg-light-blue)' }}
                    >
                      <p className="font-semibold mb-2" style={{ color: 'var(--color-primary-navy)' }}>
                        Spring & Summer
                      </p>
                      <p className="text-sm">
                        Peak pollen season (March-May) and dust storms require frequent attention 
                        to maintain optimal efficiency during high-demand months.
                      </p>
                    </div>
                    <div 
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: 'var(--color-bg-light-blue)' }}
                    >
                      <p className="font-semibold mb-2" style={{ color: 'var(--color-primary-navy)' }}>
                        Fall & Winter
                      </p>
                      <p className="text-sm">
                        Cooler temperatures provide ideal cleaning conditions. We prepare your 
                        system for rare ice events and clear any accumulated debris.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
