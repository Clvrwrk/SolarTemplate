import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { useEffect, useRef, useState } from 'react';

const factors = [
  {
    id: 'spring-pollen',
    title: 'Spring Pollen & Dust',
    content: 'During the spring months, for instance, the sky-high pollen count, combined with persistent dust from construction activities, can significantly affect the cleanliness of solar panels. Allen\'s suburban development and proximity to agricultural areas contribute to higher particulate matter in the air, necessitating more frequent professional cleaning to maintain optimal panel performance.'
  },
  {
    id: 'texas-heat',
    title: 'Texas Heat & Hard Water',
    content: 'The persistent Texas heat and consequent air quality can increase the adversity faced by solar panels. Furthermore, these companies utilize advanced technologies, such as deionized water systems, to prevent mineral buildup, which is particularly crucial given the hard water prevalent in this region. Hard water deposits can create a residue that not only reduces efficiency but can also cause long-term damage to panel surfaces if not properly addressed.'
  },
  {
    id: 'roof-complexity',
    title: 'Roof Complexity & Accessibility',
    content: 'The size and accessibility of the system, intrinsic to the architectural designs common in Allen, necessitate tailored solutions that are factored into the overall cleaning pricing. Two-story homes, steep roof pitches, and complex roof designs require specialized equipment and additional safety measures, which influence the final cost. Properties with difficult access points or obstacles may require additional labor time and equipment, impacting the overall service investment.'
  }
];

export function RegionalFactors() {
  const accordionRef = useRef<HTMLDivElement>(null);
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

    if (accordionRef.current) {
      observer.observe(accordionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="font-['Poppins'] text-3xl md:text-4xl mb-6"
            style={{ 
              color: 'var(--color-primary-navy)',
              fontWeight: 'var(--weight-bold)'
            }}
          >
            Factors Influencing the Cleaning Cost of Solar Panels
          </h2>

          <p 
            className="font-['Inter'] text-lg leading-relaxed mb-10"
            style={{ color: 'var(--color-text-main)' }}
          >
            In Allen, Texas, the cleaning cost of solar panels can fluctuate due to distinct regional variations and seasonal considerations. The geographical positioning of Allen subjects solar panels to a unique set of environmental challenges.
          </p>

          <div
            ref={accordionRef}
            className={`transition-all duration-600 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
          >
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-4"
              defaultValue="spring-pollen"
            >
              {factors.map((factor, index) => (
                <AccordionItem 
                  key={factor.id}
                  value={factor.id}
                  className="bg-white rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    border: '1px solid var(--color-border-color)',
                    boxShadow: '0 2px 8px rgba(11, 43, 83, 0.04)'
                  }}
                >
                  <AccordionTrigger 
                    className="px-6 py-5 font-['Poppins'] text-lg hover:no-underline"
                    style={{ 
                      color: 'var(--color-primary-navy)',
                      fontWeight: 'var(--weight-semibold)'
                    }}
                  >
                    {factor.title}
                  </AccordionTrigger>
                  <AccordionContent 
                    className="px-6 pb-5 font-['Inter'] text-base leading-relaxed"
                    style={{ color: 'var(--color-text-main)' }}
                  >
                    {factor.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
