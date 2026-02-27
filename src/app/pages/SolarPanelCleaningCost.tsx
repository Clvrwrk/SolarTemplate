import { CostHero } from '../components/costs/CostHero';
import { ROIQuickHits } from '../components/costs/ROIQuickHits';
import { ProVsDIY } from '../components/costs/ProVsDIY';
import { ValueProcess } from '../components/costs/ValueProcess';
import { RegionalFactors } from '../components/costs/RegionalFactors';
import { CostQuoteForm } from '../components/costs/CostQuoteForm';
import { LocationBreadcrumb } from '../components/shared/LocationBreadcrumb';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function SolarPanelCleaningCost() {
  return (
    <>
      <LocationBreadcrumb 
        items={[
          { label: 'Service Areas', path: '/service-areas' },
          { label: 'Allen, TX', path: '/Solar-Panel-Cleaning-Allen-Texas' },
          { label: 'Cleaning Costs' },
        ]}
      />
      <CostHero />
      <ROIQuickHits />
      <ProVsDIY />
      <ValueProcess />
      <RegionalFactors />
      <CostQuoteForm />
      
      {/* Back to Allen Link */}
      <section className="py-8" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4 text-center">
          <Link
            to="/Solar-Panel-Cleaning-Allen-Texas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-['Poppins'] transition-all duration-300 hover:-translate-x-1 group"
            style={{
              color: 'var(--color-accent-sky)',
              fontWeight: 'var(--weight-medium)'
            }}
          >
            <ArrowLeft 
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" 
            />
            Back to Allen, TX Services
          </Link>
        </div>
      </section>
    </>
  );
}