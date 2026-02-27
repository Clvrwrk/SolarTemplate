import { Droplets, Shield } from 'lucide-react';

const processItems = [
  {
    icon: Droplets,
    title: 'Gentle Water Rinse',
    description: 'We use a gentle water rinse to maintain efficiency and specialized cleaners for bird droppings.',
    color: 'var(--color-accent-sky)'
  },
  {
    icon: Shield,
    title: 'Deionized Water Systems',
    description: 'Utilizing deionized water systems prevents mineral deposits from forming, which could otherwise void warranties.',
    color: 'var(--color-action-orange)'
  }
];

export function ValueProcess() {
  return (
    <section 
      className="py-16 md:py-20"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="container mx-auto px-4">
        <h2 
          className="font-['Poppins'] text-3xl md:text-4xl text-center mb-12"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontWeight: 'var(--weight-bold)'
          }}
        >
          The Value of Our Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {processItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                style={{
                  boxShadow: '0 2px 12px rgba(11, 43, 83, 0.06)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${item.color}15`,
                  }}
                >
                  <Icon 
                    className="w-8 h-8" 
                    style={{ color: item.color }}
                  />
                </div>
                
                <h3 
                  className="font-['Poppins'] text-xl mb-4"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  {item.title}
                </h3>
                
                <p 
                  className="font-['Inter'] text-base leading-relaxed"
                  style={{ color: 'var(--color-text-main)' }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
