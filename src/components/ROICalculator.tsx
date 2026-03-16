import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, ArrowRight, TrendingUp, CheckCircle, Sparkles } from "lucide-react";

const ROICalculator = () => {
  const [employees, setEmployees] = useState(10);
  const [salary, setSalary] = useState(5000);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadData, setLeadData] = useState({ name: "", email: "", whatsapp: "" });
  const [submitting, setSubmitting] = useState(false);

  // Calculate Monthly Loss: (Employees * (Salary/160) * Hours/Week * 4)
  const hourlyRate = salary / 160;
  const monthlyLoss = employees * hourlyRate * hoursPerWeek * 4;
  const potentialSavings = monthlyLoss * 0.7;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="gradient-orb w-[400px] h-[400px] bg-secondary/10 top-1/4 right-[-100px] animate-float" />

      <div className="container relative z-10 px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Calculator className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Calculadora de ROI</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Quanto você está <span className="text-secondary text-glow-cyan">perdendo</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra o impacto financeiro dos processos manuais na sua operação
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 lg:p-10 border border-secondary/30 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
            
            <div className="relative z-10 space-y-10">
              {/* Sliders */}
              <div className="space-y-8">
                {/* Employees Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-heading font-semibold text-foreground">
                      Número de Colaboradores
                    </label>
                    <span className="text-secondary font-bold text-xl tabular-nums">
                      {employees}
                    </span>
                  </div>
                  <Slider
                    value={[employees]}
                    onValueChange={(value) => setEmployees(value[0])}
                    min={1}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Salary Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-heading font-semibold text-foreground">
                      Média Salarial (R$)
                    </label>
                    <span className="text-secondary font-bold text-xl tabular-nums">
                      {formatCurrency(salary)}
                    </span>
                  </div>
                  <Slider
                    value={[salary]}
                    onValueChange={(value) => setSalary(value[0])}
                    min={1500}
                    max={20000}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>R$ 1.500</span>
                    <span>R$ 20.000</span>
                  </div>
                </div>

                {/* Hours Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-heading font-semibold text-foreground">
                      Horas Manuais/Semana
                    </label>
                    <span className="text-secondary font-bold text-xl tabular-nums">
                      {hoursPerWeek}h
                    </span>
                  </div>
                  <Slider
                    value={[hoursPerWeek]}
                    onValueChange={(value) => setHoursPerWeek(value[0])}
                    min={5}
                    max={40}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>5h</span>
                    <span>40h</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

              {/* Results */}
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">
                    Custo mensal em tarefas manuais
                  </p>
                  <p className="text-destructive font-heading font-bold text-2xl">
                    {formatCurrency(monthlyLoss)}
                  </p>
                </div>

                <div className="glass-card p-6 bg-secondary/5 border border-secondary/20">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                    <p className="text-muted-foreground text-sm">
                      Sua economia potencial com Sintax IA
                    </p>
                  </div>
                  <p className="text-secondary text-glow-cyan font-heading font-black text-4xl md:text-5xl">
                    {formatCurrency(potentialSavings)}
                  </p>
                  <p className="text-muted-foreground text-xs mt-2">por mês</p>
                </div>

                <Button variant="cta" size="xl" className="group mt-4" onClick={() => setShowLeadForm(true)}>
                  {!showLeadForm && (
                    <>
                      Solicitar este ROI agora
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>

                {/* Lead Capture Mini-Form */}
                {showLeadForm && !leadSubmitted && (
                  <div className="mt-6 p-6 glass-card border border-secondary/20 text-left animate-fade-up">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-secondary" />
                      <p className="text-sm font-medium text-foreground">Receba seu relatório de ROI personalizado</p>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Seu nome"
                        value={leadData.name}
                        onChange={(e) => setLeadData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary/50 transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Seu e-mail"
                        value={leadData.email}
                        onChange={(e) => setLeadData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary/50 transition-all"
                      />
                      <input
                        type="tel"
                        placeholder="WhatsApp (71) 99999-9999"
                        value={leadData.whatsapp}
                        onChange={(e) => setLeadData(prev => ({ ...prev, whatsapp: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary/50 transition-all"
                      />
                      <Button
                        variant="cta"
                        size="lg"
                        className="w-full group"
                        disabled={submitting || !leadData.name || !leadData.email}
                        onClick={() => {
                          setSubmitting(true);
                          const leads = JSON.parse(localStorage.getItem("sintaxia_leads") || "[]");
                          leads.push({
                            ...leadData,
                            source: "roi_calculator",
                            roi_data: { employees, salary, hoursPerWeek, monthlyLoss, potentialSavings },
                            timestamp: new Date().toISOString(),
                            id: crypto.randomUUID(),
                          });
                          localStorage.setItem("sintaxia_leads", JSON.stringify(leads));
                          setLeadSubmitted(true);
                          setSubmitting(false);
                          setTimeout(() => {
                            const msg = `Olá! Sou ${leadData.name}. Calculei uma economia potencial de ${formatCurrency(potentialSavings)}/mês na calculadora e quero implementar esses agentes na minha empresa.`;
                            window.open(`https://wa.me/5571982435004?text=${encodeURIComponent(msg)}`, "_blank");
                          }, 2000);
                        }}
                      >
                        Receber meu ROI personalizado
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Success state */}
                {leadSubmitted && (
                  <div className="mt-6 p-6 glass-card border border-secondary/30 text-center animate-fade-up">
                    <CheckCircle className="w-10 h-10 text-secondary mx-auto mb-3" />
                    <p className="font-heading font-bold text-lg text-foreground mb-1">Relatório enviado! 🚀</p>
                    <p className="text-sm text-muted-foreground">Redirecionando para WhatsApp...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
