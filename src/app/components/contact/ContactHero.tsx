import { Phone, MessageCircle } from 'lucide-react';
import { LeadWizard } from '../forms/LeadWizard';

export function ContactHero() {
  return (
    <section 
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-white)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Warm Welcome */}
          <div>
            <h1 
              className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl mb-6"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-bold)',
                lineHeight: 'var(--line-height-heading)'
              }}
            >
              Let's Protect Your Solar Investment.
            </h1>

            <p 
              className="font-['Inter'] text-lg mb-10"
              style={{ 
                color: 'var(--color-text-main)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              Whether you need a seasonal clean, a critter guard installation, or just have a 
              question about your system's efficiency, our Texas-based family is here to help.
            </p>

            {/* Direct Action Buttons */}
            <div className="space-y-4">
              {/* Call Now Button */}
              <a
                href="tel:5551234567"
                className="flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-['Poppins'] transition-all duration-300 w-full"
                style={{
                  backgroundColor: 'var(--color-action-orange)',
                  color: 'white',
                  fontWeight: 'var(--weight-semibold)',
                  fontSize: '18px',
                  boxShadow: '0 4px 12px rgba(242, 140, 40, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(242, 140, 40, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(242, 140, 40, 0.3)';
                }}
              >
                <Phone className="w-6 h-6" />
                Call Now: (555) 123-4567
              </a>

              {/* Text Us Button */}
              <a
                href="sms:5551234567"
                className="flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-['Poppins'] transition-all duration-300 w-full"
                style={{
                  backgroundColor: 'var(--color-accent-sky)',
                  color: 'white',
                  fontWeight: 'var(--weight-semibold)',
                  fontSize: '18px',
                  boxShadow: '0 4px 12px rgba(52, 152, 219, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(52, 152, 219, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(52, 152, 219, 0.3)';
                }}
              >
                <MessageCircle className="w-6 h-6" />
                Text Us
              </a>
            </div>

            {/* Trust Reinforcement */}
            <div className="mt-8 pt-8 border-t" style={{ borderColor: 'var(--color-border-color)' }}>
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent-sky)' }}
                />
                <span 
                  className="font-['Inter'] text-sm"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  100% Fully Insured & Certified
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent-sky)' }}
                />
                <span 
                  className="font-['Inter'] text-sm"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Family-Owned Texas Business
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent-sky)' }}
                />
                <span 
                  className="font-['Inter'] text-sm"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  3,000+ Happy Texas Customers
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Lead Wizard */}
          <div
            className="p-8 md:p-10 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(11, 43, 83, 0.1)',
              boxShadow: '0 20px 40px rgba(11, 43, 83, 0.1)'
            }}
          >
            <LeadWizard context="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}