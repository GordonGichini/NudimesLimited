import HeroSection from './components/HeroSection';
import StatsSection from './components/StatSection';
import WhyChooseSection from './components/WhyChooseSection';
import SolutionsSection from './components/SolutionSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseSection />
      <SolutionsSection />
      <ContactSection />
    </>
  );
}