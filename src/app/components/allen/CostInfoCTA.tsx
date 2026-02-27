import { Link } from 'react-router';
import { DollarSign, ArrowRight } from 'lucide-react';

export function CostInfoCTA() {
  return (
    <section 
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div 
          className="bg-white rounded-xl p-8 md:p-10 shadow-lg transition-all duration-300 hover:shadow-xl"
          style={{
            border: '2px solid var(--color-accent-sky)',
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon Section */}
            <div 
              className="w-20 h-20 flex-shrink-0 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-action-orange)' }}
            >
              <DollarSign className="w-10 h-10 text-white" />
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <h3 
                className="font-['Poppins'] text-2xl md:text-3xl mb-3"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-bold)'
                }}
              >
                Curious About the Cost?
              </h3>
              <p 
                className="font-['Inter'] text-lg leading-relaxed mb-4"
                style={{ color: 'var(--color-text-main)' }}
              >
                Get transparent pricing details, understand what influences costs in Allen, TX, 
                and discover the ROI of professional solar panel cleaning.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              to="/solar-panel-cleaning-cost-allen-tx"
              className="flex-shrink-0 px-8 py-4 rounded-lg font-['Poppins'] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center gap-2 group"
              style={{
                backgroundColor: 'var(--color-action-orange)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              View Cost Details
              <ArrowRight 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
