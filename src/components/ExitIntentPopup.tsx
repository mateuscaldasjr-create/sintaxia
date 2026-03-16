import { useState, useEffect } from "react";
import { X, Zap } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if already dismissed in this session
    const dismissed = sessionStorage.getItem("sintaxia_popup_dismissed");
    if (dismissed) return;

    // Check if already submitted
    const submitted = localStorage.getItem("sintaxia_lead_submitted");
    if (submitted) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    // Also trigger after 45 seconds of inactivity
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    }, 45000);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasTriggered]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("sintaxia_popup_dismissed", "true");
  };

  const handleSuccess = () => {
    localStorage.setItem("sintaxia_lead_submitted", "true");
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg animate-fade-up z-10">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 z-20 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Urgency Bar */}
        <div className="glass-card rounded-t-2xl rounded-b-none border-b-0 px-4 py-3 flex items-center justify-center gap-2 bg-secondary/10 border border-secondary/20">
          <Zap className="w-4 h-4 text-secondary animate-pulse" />
          <span className="text-sm text-secondary font-medium">
            Espere! Diagnóstico Gratuito por Tempo Limitado
          </span>
        </div>

        <LeadCaptureForm
          variant="modal"
          title="Não perca essa oportunidade"
          subtitle="Descubra quanto sua empresa pode economizar com automação de IA. Análise gratuita e sem compromisso."
          ctaText="Solicitar Diagnóstico Grátis"
          source="exit_intent_popup"
          onSuccess={handleSuccess}
        />
      </div>
    </div>
  );
};

export default ExitIntentPopup;
