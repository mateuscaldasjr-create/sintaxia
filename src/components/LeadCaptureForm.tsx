import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface LeadData {
  name: string;
  email: string;
  company: string;
  whatsapp: string;
}

interface LeadCaptureFormProps {
  variant?: "inline" | "modal";
  title?: string;
  subtitle?: string;
  ctaText?: string;
  source?: string;
  onSuccess?: (data: LeadData) => void;
}

const LeadCaptureForm = ({
  variant = "inline",
  title = "Receba seu Diagnóstico Gratuito",
  subtitle = "Descubra como agentes de IA podem transformar sua operação em até 21 dias.",
  ctaText = "Quero meu Diagnóstico",
  source = "landing_page",
  onSuccess,
}: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState<LeadData>({
    name: "",
    email: "",
    company: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const formatWhatsApp = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 11)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData((prev) => ({ ...prev, whatsapp: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.whatsapp) {
      setError("Preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send Lead to Supabase Database
      const { error: supabaseError } = await supabase
        .from('sintaxia_leads')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            company: formData.company || null, 
            whatsapp: formData.whatsapp,
            source: source
          }
        ]);
        
      if (supabaseError) {
        console.error("Supabase Error:", supabaseError);
        // Fallback or just log it, we'll continue to local storage as backup
      }

      // Save lead to localStorage as backup
      const leads = JSON.parse(localStorage.getItem("sintaxia_leads") || "[]");
      const newLead = {
        ...formData,
        source,
        timestamp: new Date().toISOString(),
        id: crypto.randomUUID(),
      };
      leads.push(newLead);
      localStorage.setItem("sintaxia_leads", JSON.stringify(leads));

      // Track event
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "lead_captured", {
          event_category: "conversion",
          event_label: source,
          value: 1,
        });
      }

      setIsSubmitted(true);
      onSuccess?.(formData);

      // Redirect to WhatsApp after short delay
      setTimeout(() => {
        const whatsappMsg = `Olá! Sou ${formData.name} da ${formData.company || "minha empresa"}. Acabei de solicitar um diagnóstico pelo site da Sintax IA.`;
        window.open(
          `https://wa.me/5571982435004?text=${encodeURIComponent(whatsappMsg)}`,
          "_blank"
        );
      }, 2000);
    } catch {
      setError("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`glass-card p-8 ${variant === "modal" ? "" : "max-w-2xl mx-auto"} border border-secondary/30 text-center`}>
        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 animate-fade-up">
          <CheckCircle className="w-8 h-8 text-secondary" />
        </div>
        <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">
          Diagnóstico Solicitado! 🚀
        </h3>
        <p className="text-muted-foreground mb-4">
          Em instantes você será redirecionado para o WhatsApp para iniciarmos seu diagnóstico personalizado.
        </p>
        <div className="flex items-center justify-center gap-2 text-secondary text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Tempo médio de resposta: menos de 30 minutos</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-card p-8 ${variant === "modal" ? "" : "max-w-2xl mx-auto"} border border-secondary/20 relative overflow-hidden`}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs text-secondary font-medium">100% Gratuito</span>
          </div>
          <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2 text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-name" className="block text-sm font-medium text-foreground mb-1.5">
                Nome *
              </label>
              <input
                id="lead-name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/30 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="lead-email" className="block text-sm font-medium text-foreground mb-1.5">
                E-mail *
              </label>
              <input
                id="lead-email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/30 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-company" className="block text-sm font-medium text-foreground mb-1.5">
                Empresa
              </label>
              <input
                id="lead-company"
                type="text"
                placeholder="Nome da empresa"
                value={formData.company}
                onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/30 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="lead-whatsapp" className="block text-sm font-medium text-foreground mb-1.5">
                WhatsApp *
              </label>
              <input
                id="lead-whatsapp"
                type="tel"
                placeholder="(71) 99999-9999"
                value={formData.whatsapp}
                onChange={handleWhatsAppChange}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/30 transition-all duration-300"
                required
              />
            </div>
          </div>

          {error && (
            <p className="text-destructive text-sm text-center">{error}</p>
          )}

          <Button
            type="submit"
            variant="cta"
            size="xl"
            className="w-full group"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Enviando...
              </span>
            ) : (
              <>
                {ctaText}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground/60 text-center">
            🔒 Seus dados estão seguros. Não enviamos spam. Política de Privacidade.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadCaptureForm;
