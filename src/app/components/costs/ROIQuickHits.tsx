import { TrendingDown, Shield, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const cards = [
  {
    icon: TrendingDown,
    title: 'The Problem',
    description: 'Without proper solar panel cleaning, particles can form a film over the panels, causing a drop in the system\'s output by 15-20%.',
    color: 'var(--color-destructive)'
  },
  {
    icon: Shield,
    title: 'The Solution',
    description: 'Professional cleaning maintains solar efficiency, mitigating a 15-20% energy drop due to Texas\'s environmental factors.',
    color: 'var(--color-accent-sky)'
  },
  {
    icon: TrendingUp,
    title: 'The Protection',
    description: 'Engaging experts protects solar panels from damage and preserves warranties, ensuring long-term ROI.',
    color: 'var(--color-action-orange)'
  }
];

export function ROIQuickHits() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setVisibleCards(prev => [...prev, cardIndex]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardElements = cardsRef.current?.querySelectorAll('.roi-card');
    cardElements?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="py-16 md:py-20"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="container mx-auto px-4">
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`roi-card bg-white rounded-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
                style={{
                  boxShadow: '0 2px 12px rgba(11, 43, 83, 0.06)',
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: `${card.color}15`,
                  }}
                >
                  <Icon 
                    className="w-8 h-8" 
                    style={{ color: card.color }}
                  />
                </div>
                
                <h3 
                  className="font-['Poppins'] text-xl mb-4"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  {card.title}
                </h3>
                
                <p 
                  className="font-['Inter'] text-base leading-relaxed"
                  style={{ color: 'var(--color-text-main)' }}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
