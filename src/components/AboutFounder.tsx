import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import founderImage from "@/assets/founder-mateus-passos.jpeg";

const AboutFounder = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Professional Portrait Placeholder */}
          <div className="relative">
            <div className="glass-card rounded-3xl overflow-hidden border border-border/50 aspect-[3/4] relative group max-w-md mx-auto lg:mx-0">
              {/* Founder Photo */}
              <img 
                src={founderImage} 
                alt="Mateus Passos - Founder & Director of Strategy" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-secondary/30 transition-colors duration-500" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <p className="text-secondary font-body font-medium tracking-widest uppercase mb-4">
                Sobre o Fundador
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                A Mentalidade{" "}
                <span className="text-secondary text-glow-cyan">Sintax</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
                <p>
                  Na Sintax IA, construímos a ponte entre a complexidade tecnológica e a simplicidade operacional. 
                  Cada agente que desenvolvemos nasce de uma obsessão: eliminar a fricção entre o que sua empresa 
                  precisa fazer e a velocidade com que consegue executar.
                </p>
                <p>
                  Nossa filosofia é clara — tecnologia de elite não deve ser privilégio de corporações com 
                  orçamentos milionários. Democratizamos o acesso a automações inteligentes, construindo 
                  soluções que entendem o contexto único do seu negócio e evoluem junto com suas operações.
                </p>
                <p>
                  Não vendemos promessas. Entregamos arquiteturas que funcionam, métricas que comprovam 
                  e resultados que falam por si.
                </p>
              </div>
            </div>

            {/* Founder Signature */}
            <div className="pt-4 border-t border-border/30">
              <p className="text-secondary text-glow-cyan font-heading font-bold text-xl mb-1">
                Mateus Passos
              </p>
              <p className="text-muted-foreground font-body text-sm tracking-wide">
                Founder & Director of Strategy
              </p>
            </div>

            <Button variant="cta" size="xl" className="group">
              Agendar Diagnóstico
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
