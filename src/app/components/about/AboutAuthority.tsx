import { useState } from 'react';
import { Droplet, Shield, Wind } from 'lucide-react';

interface ServiceCard {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: Droplet,
    title: 'Advanced Filtration Technology',
    description: 'We never use harsh chemicals or tap water. We use the highest-grade equipment, including advanced reverse osmosis and deionizing filtration, ensuring spotless results that maximize your solar efficiency without risking your warranty.'
  },
  {
    icon: Shield,
    title: 'Solar Critter Guard Installation',
    description: 'Pests love the shade under your panels. We install premium critter guards to protect your system from costly, dangerous wire damage caused by birds and squirrels, ensuring your system stays protected and efficient.'
  },
  {
    icon: Wind,
    title: 'Solar Attic Ventilation',
    description: 'A cool roof means a cool house. Our solar attic ventilation services ensure proper airflow, reducing heat buildup in the brutal Texas summers, extending the life of your roof, and dramatically improving home comfort.'
  }
];

export function AboutAuthority() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-white)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="font-['Poppins'] text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{ 
              color: 'var(--color-primary-navy)',
              fontWeight: 'var(--weight-bold)',
              lineHeight: 'var(--line-height-heading)'
            }}
          >
            Why 3,000+ Texas Homeowners Trust Us
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative rounded-xl p-8 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: 'var(--color-bg-white)',
                  border: '2px solid var(--color-border-color)',
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: isHovered 
                    ? '0 12px 24px rgba(11, 43, 83, 0.15)' 
                    : '0 4px 12px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ 
                    backgroundColor: isHovered 
                      ? 'var(--color-action-orange)' 
                      : 'var(--color-primary-navy)'
                  }}
                >
                  <Icon 
                    className="w-8 h-8 text-white transition-all duration-300" 
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 
                  className="font-['Poppins'] text-xl md:text-2xl mb-4"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-bold)',
                    lineHeight: 'var(--line-height-heading)'
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="font-['Inter']"
                  style={{ 
                    color: 'var(--color-text-main)',
                    lineHeight: 'var(--line-height-body)'
                  }}
                >
                  {service.description}
                </p>

                {/* Accent Bar */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: isHovered 
                      ? 'var(--color-action-orange)' 
                      : 'transparent'
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
