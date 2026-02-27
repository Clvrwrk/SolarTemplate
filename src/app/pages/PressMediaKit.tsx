import { PressHero } from '../components/press/PressHero';
import { PerfectCitation } from '../components/press/PerfectCitation';
import { BrandAssets } from '../components/press/BrandAssets';
import { MediaGallery } from '../components/press/MediaGallery';
import { BacklinkGuide } from '../components/press/BacklinkGuide';
import { PressContact } from '../components/press/PressContact';

export default function PressMediaKit() {
  return (
    <>
      <PressHero />
      <PerfectCitation />
      <BrandAssets />
      <MediaGallery />
      <BacklinkGuide />
      <PressContact />
    </>
  );
}
