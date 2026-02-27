import { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Wrench, Shield } from 'lucide-react';

export function ReliableServices() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const services = [
    {
      icon: Users,
      title: 'Experienced Technicians',
      description: 'Ensures proper cleaning techniques to maximize panel efficiency and lifespan.'
    },
    {
      icon: Wrench,
      title: 'Appropriate Tools',
      description: 'Avoids damage to panels and maintains the effectiveness of the solar system.'
    },
    {
      icon: Shield,
      title: 'Safety Protocols',
      description: 'Prevents accidents and liabilities, protecting both property and personnel.'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="font-['Poppins'] text-3xl md:text-4xl text-center mb-12"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontWeight: 'var(--weight-bold)',
            lineHeight: 'var(--line-height-heading)'
          }}
        >
          Choosing Reliable Solar Cleaning Services in McKinney TX
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary-navy)' }}>
                <th 
                  className="p-4 text-left font-['Poppins']"
                  style={{ 
                    color: 'white',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Service Feature
                </th>
                <th 
                  className="p-4 text-left font-['Poppins']"
                  style={{ 
                    color: 'white',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Benefit
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr 
                  key={index}
                  className="border-b"
                  style={{ 
                    backgroundColor: index % 2 === 0 ? 'white' : 'var(--color-bg-gray)',
                    borderColor: 'var(--color-border-color)'
                  }}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-accent-sky)' }}
                      >
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <span 
                        className="font-['Poppins']"
                        style={{ 
                          color: 'var(--color-primary-navy)',
                          fontWeight: 'var(--weight-semibold)'
                        }}
                      >
                        {service.title}
                      </span>
                    </div>
                  </td>
                  <td 
                    className="p-4 font-['Inter']"
                    style={{ color: 'var(--color-text-main)' }}
                  >
                    {service.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden"
              style={{ border: '1px solid var(--color-border-color)' }}
            >
              <button
                onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-accent-sky)' }}
                  >
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <span 
                    className="font-['Poppins'] text-left"
                    style={{ 
                      color: 'var(--color-primary-navy)',
                      fontWeight: 'var(--weight-semibold)'
                    }}
                  >
                    {service.title}
                  </span>
                </div>
                {expandedItem === index ? (
                  <ChevronUp 
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: 'var(--color-accent-sky)' }}
                  />
                ) : (
                  <ChevronDown 
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: 'var(--color-text-muted)' }}
                  />
                )}
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedItem === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div 
                  className="p-4 font-['Inter']"
                  style={{ 
                    backgroundColor: 'var(--color-bg-gray)',
                    color: 'var(--color-text-main)',
                    lineHeight: 'var(--line-height-body)'
                  }}
                >
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
