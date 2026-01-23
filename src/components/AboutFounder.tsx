import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Target } from "lucide-react";

const AboutFounder = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image placeholder */}
          <div className="relative">
            <div className="glass-card rounded-3xl overflow-hidden border border-border/50 aspect-[4/5] relative group">
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-muted to-primary/10" />
              
              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 tech-grid opacity-30" />
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors duration-500">
                    <Cpu className="w-12 h-12 text-secondary" />
                  </div>
                  <p className="text-muted-foreground font-body text-sm">
                    Imagem do Fundador
                  </p>
                </div>
              </div>

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-secondary/30 transition-colors duration-500" />
            </div>

            {/* Floating accent cards */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 border border-secondary/20 hidden md:block">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-foreground font-heading font-semibold text-sm">+50 Automações</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <p className="text-secondary font-body font-medium tracking-widest uppercase mb-4">
                Sobre Nós
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                A Mentalidade{" "}
                <span className="text-secondary text-glow-cyan">Sintax</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
                <p>
                  Na Sintax IA, acreditamos que a tecnologia de ponta não deve ser privilégio de poucos. 
                  Nossa missão é construir a ponte entre operações humanas e inteligência artificial, 
                  democratizando o acesso a automações que antes eram exclusivas de grandes corporações.
                </p>
                <p>
                  Combinamos expertise técnica com visão estratégica para criar agentes de IA que 
                  não apenas executam tarefas, mas entendem o contexto do seu negócio e evoluem 
                  junto com suas operações.
                </p>
              </div>
            </div>

            {/* Value props */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Target className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Precisão Cirúrgica</h4>
                  <p className="text-muted-foreground font-body text-sm">Soluções sob medida para cada operação</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Velocidade Real</h4>
                  <p className="text-muted-foreground font-body text-sm">Da ideia à produção em semanas</p>
                </div>
              </div>
            </div>

            <Button variant="cta" size="xl" className="group">
              Conhecer Nossa Equipe
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
