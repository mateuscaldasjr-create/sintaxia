import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GapSection from "@/components/GapSection";
import ServicesSection from "@/components/ServicesSection";
import ROICalculator from "@/components/ROICalculator";
import MethodologySection from "@/components/MethodologySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <div className="section-divider" />
      <GapSection />
      <div className="section-divider" />
      <ServicesSection />
      <ROICalculator />
      <MethodologySection />
      <Footer />
    </div>
  );
};

export default Index;
