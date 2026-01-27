import { Building2, Truck, ArrowUpRight } from "lucide-react";

const cases = [
  {
    id: 1,
    sector: "Setor Industrial & Educacional",
    title: "Sistemas de automação integrados para ecossistemas FIEB, SENAI e SESI",
    description: "Implementação de agentes inteligentes para gestão de processos administrativos, agendamentos e triagem de demandas em múltiplas unidades.",
    icon: Building2,
    stats: [
      { label: "Unidades", value: "50+" },
      { label: "Processos automatizados", value: "200+" },
    ],
  },
  {
    id: 2,
    sector: "Logística & Distribuição",
    title: "Agente de orquestração de pedidos e suporte 24/7 para Gelo Dias D'ávila",
    description: "Sistema autônomo de atendimento, processamento de pedidos e coordenação logística operando ininterruptamente.",
    icon: Truck,
    stats: [
      { label: "Atendimento", value: "24/7" },
      { label: "Tempo de resposta", value: "<30s" },
    ],
  },
];

const SuccessStoriesSection = () => {
  return (
    <section id="cases" className="py-24 relative">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20 mb-4">
            Cases de Sucesso
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Resultados <span className="text-secondary text-glow-cyan">Comprovados</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformaram a operação de nossos parceiros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className="group glass-card p-8 rounded-3xl border border-border/50 hover:border-secondary/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Case number */}
              <div className="absolute top-6 right-6 text-6xl font-heading font-black text-muted/20 group-hover:text-secondary/10 transition-colors duration-500">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <caseItem.icon className="w-7 h-7 text-secondary" />
              </div>

              {/* Sector tag */}
              <span className="inline-block text-xs uppercase tracking-wider text-muted-foreground mb-3">
                {caseItem.sector}
              </span>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4 leading-tight group-hover:text-secondary transition-colors duration-300">
                {caseItem.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                {caseItem.description}
              </p>

              {/* Stats */}
              <div className="flex gap-6 pt-6 border-t border-border/30">
                {caseItem.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-heading font-bold text-2xl text-secondary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-secondary/0 group-hover:bg-secondary/10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                <ArrowUpRight className="w-5 h-5 text-secondary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
