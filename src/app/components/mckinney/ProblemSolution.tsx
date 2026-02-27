import { AlertTriangle, TrendingUp } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* The Threat */}
          <div 
            className="p-8 rounded-xl"
            style={{ 
              backgroundColor: 'var(--color-bg-gray)',
              border: '2px solid var(--color-border-color)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-action-orange)' }}
              >
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="font-['Poppins'] text-2xl"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-bold)'
                }}
              >
                The Threat
              </h3>
            </div>
            <p 
              className="font-['Inter'] leading-relaxed"
              style={{ 
                color: 'var(--color-text-main)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              In McKinney, Texas, maintaining your solar panels is crucial for optimizing energy 
              efficiency and protecting your investment. Routine cleaning helps combat the region's 
              persistent pollen, dust, and environmental debris that can diminish panel performance 
              by up to 20%.
            </p>
          </div>

          {/* The ROI */}
          <div 
            className="p-8 rounded-xl"
            style={{ 
              backgroundColor: 'var(--color-accent-sky-light)',
              border: '2px solid var(--color-accent-sky)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-accent-sky)' }}
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="font-['Poppins'] text-2xl"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-bold)'
                }}
              >
                The ROI
              </h3>
            </div>
            <p 
              className="font-['Inter'] leading-relaxed"
              style={{ 
                color: 'var(--color-text-main)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              Professional services enhance efficiency by up to 25%, preventing warranty voids. 
              Powerup specializes in tailored, compliance-focused maintenance to restore energy 
              capacity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
