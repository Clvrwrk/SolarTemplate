import { useState } from 'react';
import { X, Check, AlertTriangle } from 'lucide-react';
import { useIsMobile } from '../ui/use-mobile';

const comparisonData = {
  diy: {
    title: 'DIY Cleaning',
    items: [
      'DIY cleaning may seem cost-effective initially, but it carries risks, such as potential damage or voiding warranties.',
      'A manual attempt could inadvertently strain your system, leading to expensive repairs and a decrease in ROI.',
      'No specialized equipment or deionized water systems',
      'Risk of falls and injuries on rooftop',
      'No insurance coverage for damages'
    ]
  },
  professional: {
    title: 'Professional Cleaning',
    items: [
      'Engaging a company like Powerup Solar Cleaning Services ensures professional, risk-free maintenance using deionized water and soft brushes, preserving your asset\'s value.',
      'Professional cleaners preserve your panels\' operational integrity, supporting their ability to deliver at full capacity over an extended period.',
      'State-of-the-art equipment prevents mineral deposits',
      'Fully insured and safety-certified technicians',
      'Warranty protection and documentation'
    ]
  }
};

export function ProVsDIY() {
  const [activeTab, setActiveTab] = useState<'professional' | 'diy'>('professional');
  const isMobile = useIsMobile();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 
          className="font-['Poppins'] text-3xl md:text-4xl text-center mb-12"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontWeight: 'var(--weight-bold)'
          }}
        >
          Professional Cleaning vs. DIY: Understanding the Cost Implications
        </h2>

        {/* Mobile: Sticky Tab Interface */}
        {isMobile ? (
          <div className="space-y-6">
            {/* Sticky Tabs */}
            <div 
              className="sticky top-0 z-20 bg-white pb-4"
              style={{ 
                boxShadow: '0 2px 8px rgba(11, 43, 83, 0.05)'
              }}
            >
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('professional')}
                  className="flex-1 py-3 px-4 rounded-lg font-['Poppins'] transition-all duration-300"
                  style={{
                    backgroundColor: activeTab === 'professional' 
                      ? 'var(--color-accent-sky)' 
                      : 'var(--color-bg-gray)',
                    color: activeTab === 'professional' 
                      ? 'white' 
                      : 'var(--color-text-main)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Professional
                </button>
                <button
                  onClick={() => setActiveTab('diy')}
                  className="flex-1 py-3 px-4 rounded-lg font-['Poppins'] transition-all duration-300"
                  style={{
                    backgroundColor: activeTab === 'diy' 
                      ? 'var(--color-destructive)' 
                      : 'var(--color-bg-gray)',
                    color: activeTab === 'diy' 
                      ? 'white' 
                      : 'var(--color-text-main)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  DIY
                </button>
              </div>
            </div>

            {/* Mobile Content */}
            <div 
              className="bg-white rounded-xl p-6"
              style={{
                border: `2px solid ${activeTab === 'professional' ? 'var(--color-accent-sky)' : 'var(--color-destructive)'}`
              }}
            >
              <h3 
                className="font-['Poppins'] text-xl mb-6"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-semibold)'
                }}
              >
                {activeTab === 'professional' ? comparisonData.professional.title : comparisonData.diy.title}
              </h3>

              <ul className="space-y-4">
                {(activeTab === 'professional' ? comparisonData.professional.items : comparisonData.diy.items).map((item, index) => {
                  const Icon = activeTab === 'professional' ? Check : X;
                  const iconColor = activeTab === 'professional' 
                    ? 'var(--color-accent-sky)' 
                    : 'var(--color-destructive)';

                  return (
                    <li key={index} className="flex gap-3">
                      <Icon 
                        className="w-6 h-6 flex-shrink-0 mt-0.5" 
                        style={{ color: iconColor }}
                      />
                      <span 
                        className="font-['Inter'] text-base leading-relaxed"
                        style={{ color: 'var(--color-text-main)' }}
                      >
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          /* Desktop: Side-by-Side Comparison */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DIY Column */}
            <div 
              className="bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-xl"
              style={{
                border: '2px solid var(--color-destructive)',
                boxShadow: '0 2px 12px rgba(212, 24, 61, 0.08)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(212, 24, 61, 0.1)' }}
                >
                  <AlertTriangle 
                    className="w-6 h-6" 
                    style={{ color: 'var(--color-destructive)' }}
                  />
                </div>
                <h3 
                  className="font-['Poppins'] text-2xl"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  {comparisonData.diy.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {comparisonData.diy.items.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <X 
                      className="w-6 h-6 flex-shrink-0 mt-0.5" 
                      style={{ color: 'var(--color-destructive)' }}
                    />
                    <span 
                      className="font-['Inter'] text-base leading-relaxed"
                      style={{ color: 'var(--color-text-main)' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Column */}
            <div 
              className="bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-xl"
              style={{
                border: '2px solid var(--color-accent-sky)',
                boxShadow: '0 2px 12px rgba(52, 152, 219, 0.08)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
                >
                  <Check 
                    className="w-6 h-6" 
                    style={{ color: 'var(--color-accent-sky)' }}
                  />
                </div>
                <h3 
                  className="font-['Poppins'] text-2xl"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  {comparisonData.professional.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {comparisonData.professional.items.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <Check 
                      className="w-6 h-6 flex-shrink-0 mt-0.5" 
                      style={{ color: 'var(--color-accent-sky)' }}
                    />
                    <span 
                      className="font-['Inter'] text-base leading-relaxed"
                      style={{ color: 'var(--color-text-main)' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}