import { Search, PenTool, Rocket, LineChart } from "lucide-react";

const MethodologySection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Auditoria",
      description: "Análise profunda dos seus processos atuais para identificar oportunidades de automação com maior impacto.",
    },
    {
      number: "02",
      icon: PenTool,
      title: "Arquitetura",
      description: "Design personalizado dos agentes de IA, mapeando integrações e fluxos de trabalho otimizados.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implementação",
      description: "Deploy gradual e controlado, com treinamento dos agentes e validação em ambiente real.",
    },
    {
      number: "04",
      icon: LineChart,
      title: "Otimização",
      description: "Monitoramento contínuo e refinamento para maximizar resultados e ROI.",
    },
  ];

  return (
    <section id="metodo" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-obsidian-light/50 to-background" />
      
      <div className="container relative z-10 px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Nossa Metodologia</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Do Diagnóstico à <span className="text-primary">Transformação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um processo estruturado para garantir resultados consistentes
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-24 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5">
              <div className="w-full h-full bg-gradient-to-r from-secondary via-secondary/50 to-primary" />
            </div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Card */}
                  <div className="glass-card p-6 h-full glow-hover">
                    {/* Step Number */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center group-hover:from-secondary/30 group-hover:to-primary/30 transition-all duration-500">
                          <step.icon className="w-6 h-6 text-secondary" />
                        </div>
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-2xl border border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <span className="font-heading font-black text-3xl text-muted-foreground/30 group-hover:text-secondary/50 transition-colors duration-500">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-heading font-bold text-xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-secondary/50 to-primary/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
