import { useEffect, useRef, useState } from 'react';
import { Wind, Sun, CloudRain } from 'lucide-react';

export function EnvironmentalChallenges() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const challenges = [
    {
      icon: Wind,
      title: 'Dust & Pollen',
      description: "McKinney's environment presents a host of challenges for solar panel systems. From spring's relentless pollen to the constant construction dust wafting from the booming Collin County developments, the potential for dirt buildup is significant.",
      delay: 0
    },
    {
      icon: Sun,
      title: 'Texas Heat & Wildlife',
      description: "Bird droppings can further exacerbate these issues, especially in the Texas heat where temperatures can exceed 100°F.",
      delay: 100
    },
    {
      icon: CloudRain,
      title: 'The Rain Myth',
      description: "Relying solely on natural rainfall isn't enough, as it often lacks the pressure to remove stubborn grime and can even contribute to new spots.",
      delay: 200
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="font-['Poppins'] text-3xl md:text-4xl text-center mb-12"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontWeight: 'var(--weight-bold)',
            lineHeight: 'var(--line-height-heading)'
          }}
        >
          Environmental Challenges Affecting McKinney Solar Panels
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all duration-500"
              style={{
                backgroundColor: 'var(--color-accent-sky-light)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${challenge.delay}ms`
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'var(--color-accent-sky)' }}
              >
                <challenge.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 
                className="font-['Poppins'] text-xl mb-3"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-semibold)'
                }}
              >
                {challenge.title}
              </h3>

              <p 
                className="font-['Inter'] leading-relaxed"
                style={{ 
                  color: 'var(--color-text-main)',
                  lineHeight: 'var(--line-height-body)'
                }}
              >
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
