import { AllenHero } from '../components/allen/AllenHero';
import { LocalProblem } from '../components/allen/LocalProblem';
import { SolutionCards } from '../components/allen/SolutionCards';
import { WhyHireUs } from '../components/allen/WhyHireUs';
import { CostInfoCTA } from '../components/allen/CostInfoCTA';
import { AllenContactForm } from '../components/allen/AllenContactForm';
import { LocationBreadcrumb } from '../components/shared/LocationBreadcrumb';

export default function AllenTexas() {
  return (
    <>
      <LocationBreadcrumb 
        items={[
          { label: 'Service Areas', path: '/service-areas' },
          { label: 'Allen, TX' },
        ]}
      />
      <AllenHero />
      <LocalProblem />
      <SolutionCards />
      <WhyHireUs />
      <CostInfoCTA />
      <AllenContactForm />
    </>
  );
}