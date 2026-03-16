import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="gradient-orb w-[600px] h-[600px] bg-secondary/20 top-[-150px] left-[-200px] animate-float" />
      <div className="gradient-orb w-[500px] h-[500px] bg-primary/20 bottom-[-150px] right-[-150px] animate-float mix-blend-screen" style={{ animationDelay: '-3s' }} />
      <div className="gradient-orb w-[400px] h-[400px] bg-secondary/15 top-1/4 right-1/4 animate-float" style={{ animationDelay: '-5s' }} />
      <div className="gradient-orb w-[300px] h-[300px] bg-primary/10 bottom-1/3 left-1/4 animate-float" style={{ animationDelay: '-7s' }} />
      
      {/* Hero Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-hero-glow pointer-events-none" />

      <div className="container relative z-10 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up border border-secondary/20 bg-background/50 backdrop-blur-md">
            <Zap className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-sm font-medium text-foreground/90">Automação Inteligente para Negócios</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up animate-delay-100">
            A arquitetura da eficiência.{" "}
            <br className="hidden md:block" />
            <span className="text-gradient-fluid drop-shadow-sm">
              A velocidade da execução
            </span>
            <span className="text-primary text-glow-cyan">.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animate-delay-200">
            Projetamos Agentes de IA customizados que eliminam gargalos operacionais 
            e transformam processos lentos em fluxos de trabalho autônomos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-300">
            <Button variant="cta" size="xl" className="group" asChild>
              <Link to="/diagnostico">
                Agendar Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="glass" size="xl">
              Ver Casos de Sucesso
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/30 animate-fade-up animate-delay-400">
            <p className="text-sm text-muted-foreground mb-6">
              Tecnologias que impulsionam nossos agentes
            </p>
            <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-50 hover:opacity-80 transition-opacity duration-500">
              {/* Tech Stack Logos (simplified icons) */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                </svg>
                <span className="text-sm font-medium">OpenAI</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-sm font-medium">Anthropic</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <span className="text-sm font-medium">Make</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-sm font-medium">n8n</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
