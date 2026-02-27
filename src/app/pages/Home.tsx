import { Hero } from '../components/Hero';
import { WhyClean } from '../components/WhyClean';
import { KeyHighlights } from '../components/KeyHighlights';
import { Services } from '../components/Services';
import { BestPractices } from '../components/BestPractices';
import { ContactForm } from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyClean />
      <KeyHighlights />
      <Services />
      <BestPractices />
      <ContactForm />
    </>
  );
}
