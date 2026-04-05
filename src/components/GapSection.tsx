import { X, Check, Clock, Zap, Users, Bot, TrendingUp, AlertCircle } from "lucide-react";

const GapSection = () => {
  const traditionalDescription = "Dependência de esforço humano, erros constantes e escala limitada.";
  
  const traditionalItems = [
    { icon: Clock, text: "Processos lentos e manuais" },
    { icon: Users, text: "Dependência de equipe para tarefas repetitivas" },
    { icon: AlertCircle, text: "Erros humanos frequentes" },
    { icon: TrendingUp, text: "Crescimento limitado pela capacidade" },
  ];

  const sintaxDescription = "Agentes 24/7, precisão baseada em dados e escala infinita sem novas contratações.";

  const sintaxItems = [
    { icon: Zap, text: "Automação em tempo real 24/7" },
    { icon: Bot, text: "Agentes de IA trabalhando continuamente" },
    { icon: Check, text: "Precisão sintética sem erros" },
    { icon: TrendingUp, text: "Escalabilidade ilimitada" },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            A <span className="text-primary">Diferença</span> que Transforma
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja como a automação com IA supera os métodos tradicionais
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Traditional Operation Card */}
          <div className="glass-card p-8 lg:p-10 group relative">
            {/* Red glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-heading font-bold text-xl text-muted-foreground">
                  Operação Manual
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {traditionalDescription}
              </p>

              <ul className="space-y-5">
                {traditionalItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sintax IA Operation Card */}
          <div className="glass-card p-8 lg:p-10 group relative glow-hover">
            {/* Cyan glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl border border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-xl">
                  Operação <span className="text-secondary">Vortex AI Labs</span>
                </h3>
              </div>
              <p className="text-foreground/80 text-sm mb-6 leading-relaxed">
                {sintaxDescription}
              </p>

              <ul className="space-y-5">
                {sintaxItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GapSection;
