import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Droplet, Wind, Snowflake, Sun } from 'lucide-react';

export function BestPractices() {
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
      id="best-practices"
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
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
          Best Practices for Effective Panel Cleaning
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
          Understanding the unique challenges of North Texas weather will help you 
          maintain peak solar panel performance year-round.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem 
              value="spring-summer"
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
                    <Sun size={20} style={{ color: 'var(--color-accent-sky)' }} />
                  </div>
                  <span className="font-semibold">Spring & Summer Maintenance</span>
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
                  <p className="font-semibold" style={{ color: 'var(--color-primary-navy)' }}>
                    Peak Challenges in Allen & North Texas:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-sky)' }}></span>
                      <span><strong>Pollen Season:</strong> Oak, cedar, and grass pollen can create a stubborn film on panels. Schedule professional cleaning after peak pollen weeks (typically March-May).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-sky)' }}></span>
                      <span><strong>Dust Storms:</strong> Texas winds kick up fine dust that reduces panel efficiency. Clean after major weather events.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-sky)' }}></span>
                      <span><strong>Bird Activity:</strong> Nesting season means more droppings. Regular cleaning prevents acidic buildup.</span>
                    </li>
                  </ul>
                  <p className="pt-2">
                    <strong>Pro Tip:</strong> Use deionized or filtered water to prevent mineral deposits 
                    from our hard Texas water, especially during our dry summer months.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="fall-winter"
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
                    <Snowflake size={20} style={{ color: 'var(--color-accent-sky)' }} />
                  </div>
                  <span className="font-semibold">Fall & Winter Maintenance</span>
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
                  <p className="font-semibold" style={{ color: 'var(--color-primary-navy)' }}>
                    Cooler Season Considerations:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-sky)' }}></span>
                      <span><strong>Falling Leaves:</strong> While less common in North Texas than other regions, trees near panels can drop leaves and sap.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-sky)' }}></span>
                      <span><strong>Ice Events:</strong> Rare in Allen but possible. Never use hot water on cold panels—thermal shock can cause cracks. Let ice melt naturally or use lukewarm water.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-sky)' }}></span>
                      <span><strong>Lower Sun Angle:</strong> Fall and winter provide ideal cleaning conditions with cooler temperatures.</span>
                    </li>
                  </ul>
                  <p className="pt-2">
                    <strong>Safety First:</strong> Use soft brushes with extension poles. Never climb on icy 
                    or wet roofs. Professional services have the right equipment for safe winter cleaning.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

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
                    <Droplet size={20} style={{ color: 'var(--color-accent-sky)' }} />
                  </div>
                  <span className="font-semibold">Recommended Tools & Techniques</span>
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
                  <div>
                    <p className="font-semibold mb-2" style={{ color: 'var(--color-primary-navy)' }}>
                      Professional-Grade Equipment:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-sky)' }}></span>
                        <span><strong>Deionized Water System:</strong> Prevents mineral spots and streaking common with hard water.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-sky)' }}></span>
                        <span><strong>Biodegradable Soap:</strong> Eco-friendly solutions that won't harm plants or waterways.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-sky)' }}></span>
                        <span><strong>Soft-Bristle Brushes:</strong> Non-abrasive materials protect anti-reflective coatings.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-sky)' }}></span>
                        <span><strong>Extension Poles:</strong> Safe cleaning from ground level for single-story homes.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-accent-sky-light)' }}>
                    <p className="font-semibold mb-2" style={{ color: 'var(--color-primary-navy)' }}>
                      When to Call the Professionals
                    </p>
                    <p className="text-sm">
                      Two-story homes, steep roofs, or panels near power lines require professional 
                      equipment and insurance. Our team serves Allen, Plano, Frisco, McKinney, and 
                      the surrounding North Texas area with fully licensed and insured technicians.
                    </p>
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
