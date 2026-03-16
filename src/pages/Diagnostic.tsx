import { useState } from "react";
import { ArrowLeft, ArrowRight, Building, CheckCircle, Lightbulb, TrendingDown, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  companyName: string;
  teamSize: string;
  biggestBottleneck: string;
  currentTools: string;
};

const STEPS = [
  { id: "personal", title: "Seus Dados" },
  { id: "company", title: "Sua Empresa" },
  { id: "challenges", title: "O Desafio" },
  { id: "result", title: "Resultado" }
];

const DiagnosticPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    whatsapp: "",
    companyName: "",
    teamSize: "",
    biggestBottleneck: "",
    currentTools: ""
  });

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(curr => curr + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 2) {
      handleNext();
      return;
    }

    setIsSubmitting(true);

    // Save lead
    const leads = JSON.parse(localStorage.getItem("sintaxia_leads") || "[]");
    const newLead = {
      ...formData,
      source: "diagnostico_multi_step",
      timestamp: new Date().toISOString(),
      id: crypto.randomUUID(),
      status: "novo",
      qualificationScore: calculateScore(formData)
    };
    leads.push(newLead);
    localStorage.setItem("sintaxia_leads", JSON.stringify(leads));

    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(3); // Result step
    }, 1500);
  };

  const calculateScore = (data: FormState) => {
    let score = 50;
    if (data.teamSize === "11-50") score += 20;
    if (data.teamSize === "51+") score += 40;
    if (data.biggestBottleneck.includes("Atendimento") || data.biggestBottleneck.includes("Vendas")) score += 10;
    return Math.min(score, 100);
  };

  const openWhatsApp = () => {
    const msg = `Olá! Sou ${formData.name} da ${formData.companyName}. Acabei de finalizar o diagnóstico no site e o meu maior gargalo hoje é: ${formData.biggestBottleneck}. Gostaria de entender como a Sintax IA pode resolver isso.`;
    window.open(`https://wa.me/5571982435004?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4 animate-fade-in">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Nome Completo *</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-secondary/50 focus:ring-1 focus:ring-secondary/30 transition-all"
                placeholder="Ex: João Silva"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">E-mail Corporativo *</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-secondary/50 focus:ring-1 focus:ring-secondary/30 transition-all"
                placeholder="joao@empresa.com.br"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">WhatsApp *</label>
              <input
                required
                type="tel"
                value={formData.whatsapp}
                onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-secondary/50 focus:ring-1 focus:ring-secondary/30 transition-all"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4 animate-fade-in">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Nome da Empresa</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 w-5 h-5 text-muted-foreground/50" />
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-secondary/50 transition-all"
                  placeholder="Sua Empresa LTDA"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Tamanho da Equipe</label>
              <div className="grid grid-cols-2 gap-3">
                {["1-10", "11-50", "51-200", "200+"].map(size => (
                  <label key={size} className={`flex items-center justify-center p-3 rounded-xl border cursor-pointer transition-all ${formData.teamSize === size ? "border-secondary bg-secondary/10 text-secondary" : "border-border/50 hover:bg-muted"}`}>
                    <input
                      type="radio"
                      name="teamSize"
                      value={size}
                      checked={formData.teamSize === size}
                      onChange={e => setFormData({ ...formData, teamSize: e.target.value })}
                      className="hidden"
                    />
                    <span className="font-medium">{size} colaboradores</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-fade-in">
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Qual o seu maior gargalo hoje?</label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { id: "atendimento", label: "Atendimento lento / Perda de leads", icon: Users },
                  { id: "operacional", label: "Processos manuais e repetitivos", icon: TrendingDown },
                  { id: "vendas", label: "Dificuldade em prospectar e qualificar", icon: Zap },
                  { id: "integrações", label: "Sistemas que não se comunicam", icon: Lightbulb }
                ].map(item => (
                  <label key={item.id} className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${formData.biggestBottleneck === item.label ? "border-secondary bg-secondary/10" : "border-border/50 hover:bg-muted"}`}>
                    <input
                      type="radio"
                      name="bottleneck"
                      value={item.label}
                      checked={formData.biggestBottleneck === item.label}
                      onChange={e => setFormData({ ...formData, biggestBottleneck: e.target.value })}
                      className="hidden"
                    />
                    <item.icon className={`w-5 h-5 mr-3 ${formData.biggestBottleneck === item.label ? "text-secondary" : "text-muted-foreground"}`} />
                    <span className={`font-medium ${formData.biggestBottleneck === item.label ? "text-foreground" : "text-muted-foreground"}`}>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-center space-y-6 animate-fade-in py-8">
            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="font-heading font-bold text-3xl text-foreground">Diagnóstico Concluído!</h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Nossa IA pré-analisou seu caso. Com uma equipe de <strong className="text-foreground">{formData.teamSize || "alguns"} colaboradores</strong> e o desafio de <strong className="text-foreground">{formData.biggestBottleneck.toLowerCase()}</strong>, uma automação bem estruturada pode reduzir seus custos operacionais em até <strong>70%</strong>.
            </p>
            <div className="pt-6">
              <Button onClick={openWhatsApp} variant="cta" size="xl" className="w-full sm:w-auto">
                Falar com Especialista Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background relative flex flex-col items-center justify-center py-12 px-4">
      <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="gradient-orb w-[600px] h-[600px] bg-secondary/10 top-[-200px] right-[-200px] pointer-events-none" />
      
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
        <Link to="/" className="font-heading font-bold text-xl text-foreground flex items-center gap-2 hover:opacity-80 transition-opacity">
          Sintax <span className="text-secondary">IA</span>
        </Link>
        <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Voltar ao site
        </Link>
      </div>

      <div className="w-full max-w-xl relative z-10 mt-16">
        {/* Progress Bar */}
        {currentStep < 3 && (
          <div className="mb-12">
            <div className="flex justify-between mb-4">
              {STEPS.slice(0, 3).map((step, index) => (
                <div key={step.id} className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    index < currentStep ? "bg-secondary text-background" : 
                    index === currentStep ? "border-2 border-secondary text-secondary" : 
                    "bg-muted text-muted-foreground"
                  }`}>
                    {index < currentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
                  </div>
                  <span className={`text-xs font-medium hidden sm:block ${index <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-secondary transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / 2) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Card */}
        <div className="glass-card p-8 md:p-10 border border-border/50 shadow-2xl relative overflow-hidden">
          {currentStep < 3 && (
            <div className="mb-8">
              <h1 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
                Descubra seu potencial de economia
              </h1>
              <p className="text-muted-foreground">
                Responda a estas perguntas rápidas (leva menos de 1 minuto).
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {renderStepContent()}

            {currentStep < 3 && (
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/50">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handlePrev}
                  className={currentStep === 0 ? "invisible" : ""}
                >
                  Voltar
                </Button>
                
                <Button 
                  type="submit" 
                  variant="cta" 
                  disabled={isSubmitting || (currentStep === 0 && (!formData.name || !formData.email || !formData.whatsapp))}
                  className="min-w-[140px]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                    </span>
                  ) : currentStep === 2 ? (
                    "Finalizar Análise"
                  ) : (
                    <>Próximo <ArrowRight className="w-4 h-4 ml-2" /></>
                  )}
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticPage;
