import { LocationsHero } from '../components/locations/LocationsHero';
import { ServiceAreasGrid } from '../components/locations/ServiceAreasGrid';
import { TrustSection } from '../components/locations/TrustSection';
import { CustomQuoteForm } from '../components/locations/CustomQuoteForm';
import { StickyMobileSearch } from '../components/locations/StickyMobileSearch';

export default function Locations() {
  return (
    <>
      <StickyMobileSearch />
      <LocationsHero />
      <ServiceAreasGrid />
      <TrustSection />
      <CustomQuoteForm />
    </>
  );
}