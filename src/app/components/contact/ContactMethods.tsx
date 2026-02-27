import { useState } from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';

export function ContactMethods() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const contactCards = [
    {
      icon: Phone,
      title: 'Direct Line',
      content: (
        <>
          <p 
            className="font-['Inter'] mb-4"
            style={{ 
              color: 'var(--color-text-main)',
              lineHeight: 'var(--line-height-body)'
            }}
          >
            Need immediate assistance or prefer talking to a human? Call or text our local dispatch directly.
          </p>
          <a
            href="tel:5551234567"
            className="font-['Poppins'] inline-block transition-colors duration-300"
            style={{
              color: 'var(--color-action-orange)',
              fontWeight: 'var(--weight-semibold)',
              fontSize: '20px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-action-orange-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-action-orange)';
            }}
          >
            (555) 123-4567
          </a>
        </>
      )
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      content: (
        <>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span 
                className="font-['Inter']"
                style={{ 
                  color: 'var(--color-text-main)',
                  fontWeight: 'var(--weight-medium)'
                }}
              >
                Monday - Friday:
              </span>
              <span 
                className="font-['Inter']"
                style={{ color: 'var(--color-text-main)' }}
              >
                8:00 AM - 6:00 PM
              </span>
            </div>
            <div className="flex justify-between">
              <span 
                className="font-['Inter']"
                style={{ 
                  color: 'var(--color-text-main)',
                  fontWeight: 'var(--weight-medium)'
                }}
              >
                Saturday:
              </span>
              <span 
                className="font-['Inter']"
                style={{ color: 'var(--color-text-main)' }}
              >
                9:00 AM - 2:00 PM
              </span>
            </div>
            <div className="flex justify-between">
              <span 
                className="font-['Inter']"
                style={{ 
                  color: 'var(--color-text-main)',
                  fontWeight: 'var(--weight-medium)'
                }}
              >
                Sunday:
              </span>
              <span 
                className="font-['Inter']"
                style={{ color: 'var(--color-text-main)' }}
              >
                Closed
              </span>
            </div>
          </div>
          <p 
            className="font-['Inter'] text-sm"
            style={{ 
              color: 'var(--color-accent-sky)',
              fontWeight: 'var(--weight-medium)'
            }}
          >
            24/7 online booking available
          </p>
        </>
      )
    },
    {
      icon: MapPin,
      title: 'Where We Work',
      content: (
        <p 
          className="font-['Inter']"
          style={{ 
            color: 'var(--color-text-main)',
            lineHeight: 'var(--line-height-body)'
          }}
        >
          Proudly serving over <strong>3,000 happy customers</strong> across the Greater DFW Metroplex, 
          including <strong>Allen, McKinney, Plano, Frisco, Prosper, and Celina</strong>.
        </p>
      )
    }
  ];

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className="font-['Poppins'] text-3xl md:text-4xl text-center mb-12"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontWeight: 'var(--weight-bold)',
            lineHeight: 'var(--line-height-heading)'
          }}
        >
          Ways to Connect
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 transition-all duration-300 cursor-pointer"
                style={{
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
                      : 'var(--color-accent-sky-light)'
                  }}
                >
                  <Icon 
                    className="w-8 h-8 transition-all duration-300" 
                    style={{
                      color: isHovered 
                        ? 'white' 
                        : 'var(--color-accent-sky)'
                    }}
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
                  {card.title}
                </h3>

                {/* Content */}
                <div>
                  {card.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
