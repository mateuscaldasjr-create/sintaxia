import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contato" className="relative py-20 overflow-hidden border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="gradient-orb w-[300px] h-[300px] bg-secondary/10 bottom-[-100px] right-[-100px] animate-float" />

      <div className="container relative z-10 px-4 lg:px-8">
        {/* CTA Section */}
        <div className="glass-card p-8 md:p-12 lg:p-16 text-center mb-16 glow-hover">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
            Pronto para <span className="text-secondary text-glow-cyan">Automatizar</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Agende uma conversa gratuita e descubra como podemos acelerar sua operação.
          </p>
          <Button variant="cta" size="xl" className="group" asChild>
            <Link to="/diagnostico">
              Agendar Diagnóstico Gratuito
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <a href="#" className="flex items-center gap-3 group">
              {/* SI Monogram Logo */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="36"
                    height="36"
                    rx="4"
                    className="stroke-secondary transition-all duration-300 group-hover:stroke-primary"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M12 14 H20 A4 4 0 0 1 24 18 V18 A4 4 0 0 1 20 22 H16 A4 4 0 0 0 12 26 V26 A4 4 0 0 0 16 30 H24"
                    className="stroke-secondary transition-all duration-300 group-hover:stroke-primary"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <line
                    x1="28"
                    y1="14"
                    x2="28"
                    y2="30"
                    className="stroke-secondary transition-all duration-300 group-hover:stroke-primary"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-heading font-bold text-lg text-foreground">
                Sintax <span className="text-secondary">IA</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sintax IA. Todos os direitos reservados.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="#metodo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Método
            </a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/sintaxia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/sintaxia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/30 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato@sintaxia.app"
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs text-muted-foreground/50">
            <span>Powered by</span>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z"/>
                </svg>
                OpenAI
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Anthropic
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                Make
              </span>
            </div>
          </div>
        </div>

        {/* Compliance Text */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/40 max-w-2xl mx-auto leading-relaxed">
            Sintax IA - Consultoria Estratégica de Inteligência Artificial. Projetos desenvolvidos sob rigorosos padrões de segurança e performance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
