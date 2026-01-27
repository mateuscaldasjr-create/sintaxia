import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import GapSection from "@/components/GapSection";
import ServicesSection from "@/components/ServicesSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import ROICalculator from "@/components/ROICalculator";
import MethodologySection from "@/components/MethodologySection";
import FAQSection from "@/components/FAQSection";
import AboutFounder from "@/components/AboutFounder";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Grainy noise overlay */}
      <div className="noise-overlay" />
      
      {/* Custom cursor */}
      <CustomCursor />
      
      <Navigation />
      
      <HeroSection />
      
      <ScrollReveal>
        <TrustSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <IntegrationsSection />
      </ScrollReveal>
      
      <div className="section-divider" />
      
      <ScrollReveal>
        <GapSection />
      </ScrollReveal>
      
      <div className="section-divider" />
      
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <SuccessStoriesSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <ROICalculator />
      </ScrollReveal>
      
      <ScrollReveal>
        <MethodologySection />
      </ScrollReveal>
      
      <div className="section-divider" />
      
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      
      <div className="section-divider" />
      
      <ScrollReveal>
        <AboutFounder />
      </ScrollReveal>
      
      <Footer />
    </div>
  );
};

export default Index;
