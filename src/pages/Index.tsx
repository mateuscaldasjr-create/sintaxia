import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import GapSection from "@/components/GapSection";
import ServicesSection from "@/components/ServicesSection";
import ROICalculator from "@/components/ROICalculator";
import MethodologySection from "@/components/MethodologySection";
import FAQSection from "@/components/FAQSection";
import AboutFounder from "@/components/AboutFounder";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <IntegrationsSection />
      <div className="section-divider" />
      <GapSection />
      <div className="section-divider" />
      <ServicesSection />
      <ROICalculator />
      <MethodologySection />
      <div className="section-divider" />
      <FAQSection />
      <div className="section-divider" />
      <AboutFounder />
      <Footer />
    </div>
  );
};

export default Index;
