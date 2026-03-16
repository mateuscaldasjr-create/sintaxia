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
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import AIChatWidget from "@/components/AIChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Grainy noise overlay */}
      <div className="noise-overlay" />
      
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup />
      
      {/* AI Chat Widget */}
      <AIChatWidget />
      
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
      
      {/* Lead Capture Section */}
      <ScrollReveal>
        <section id="diagnostico" className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20" />
          <div className="gradient-orb w-[400px] h-[400px] bg-primary/10 bottom-[-100px] left-[-100px] animate-float" />
          
          <div className="container relative z-10 px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                Solicite seu <span className="text-secondary text-glow-cyan">Diagnóstico</span> Gratuito
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Preencha o formulário e receba uma análise personalizada de como a IA pode transformar sua operação
              </p>
            </div>
            
            <LeadCaptureForm source="diagnostico_section" />
          </div>
        </section>
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
