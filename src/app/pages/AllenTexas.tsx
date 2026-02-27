import { AllenHero } from '../components/allen/AllenHero';
import { LocalProblem } from '../components/allen/LocalProblem';
import { LocalSpotlight } from '../components/shared/LocalSpotlight';
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
      <LocalSpotlight 
        city="Allen, TX"
        neighborhood="Watters Creek"
        imageUrl="https://images.unsplash.com/photo-1723046106153-8d3810267931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwc29sYXIlMjBwYW5lbHMlMjBob3VzZXxlbnwxfHx8fDE3NzIyMTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Residential solar panel cleaning in Watters Creek, Allen Texas"
        yieldPercentage={22}
        panelCount={32}
        issueResolved="Pollen"
        problemParagraph="This Allen homeowner in the Watters Creek community was facing a 22% drop in energy output during North Texas's brutal spring pollen season. The thick yellow coating on their 32-panel system wasn't just an aesthetic issue—it was costing them hundreds in lost solar production and increased utility bills. With mature oak trees surrounding the property, the pollen accumulation was relentless."
        solutionParagraph="Using our 100% deionized water system and low-pressure nylon agitation, our Level II technicians safely restored the glass to factory clarity without risking the manufacturer warranty. We deployed our multi-stage filtration process to ensure zero mineral deposits or streaking. The homeowner saw immediate results: 22% yield recovery, dramatically reduced utility bills, and peace of mind knowing their investment was protected."
      />
      <SolutionCards />
      <WhyHireUs />
      <CostInfoCTA />
      <AllenContactForm />
    </>
  );
}