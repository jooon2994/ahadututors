// pages/index.js
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SubjectsSection from '../components/SubjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SubjectsSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
