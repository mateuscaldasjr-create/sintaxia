import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Users, Clock, Plug, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    id: "humanos",
    icon: Users,
    question: "Substitui humanos?",
    answer: "Não. Nossa tecnologia foca em Potencialização Humana. Os agentes assumem as tarefas repetitivas e braçais — como agendamentos e triagem — para que sua equipe foque no que realmente gera lucro: o atendimento consultivo e o fechamento de vendas. É escala sem aumento de folha de pagamento.",
  },
  {
    id: "seguranca",
    icon: Shield,
    question: "Segurança de Dados?",
    answer: "Segurança é nosso pilar central. Utilizamos protocolos de criptografia de ponta a ponta e operamos em total conformidade com a LGPD. Os dados da sua operação permanecem isolados e protegidos, garantindo sigilo absoluto e ética no processamento das informações.",
  },
  {
    id: "tempo",
    icon: Clock,
    question: "Tempo para Resultados?",
    answer: "Diferente de consultorias de TI tradicionais, a Sintax IA foca em agilidade. O ciclo médio de auditoria, treinamento da IA e implementação é de 15 a 21 dias. Uma vez ativo, o agente começa a processar leads e organizar sua agenda imediatamente, com ROI visível já no primeiro mês.",
  },
  {
    id: "integracoes",
    icon: Plug,
    question: "Integrações Disponíveis?",
    answer: "Nossos agentes são projetados para conectividade total. Integramos nativamente com WhatsApp, Google Calendar, HubSpot, RD Station, Salesforce e os principais ERPs do mercado. Construímos a ponte inteligente para que você não precise trocar as ferramentas que já utiliza.",
  },
];

const FAQSection = () => {
  const whatsappLink = "https://wa.me/5571982435004?text=Olá!+Vim+pelo+site+da+Sintax+IA+e+gostaria+de+um+diagnóstico+para+minha+operação.";

  return (
    <section id="faq" className="py-24 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Dúvidas <span className="text-secondary text-glow-cyan">Frequentes</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Respostas diretas para as perguntas mais comuns sobre nossa operação.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="glass-card border border-border/50 rounded-2xl px-6 overflow-hidden data-[state=open]:border-secondary/30 transition-colors duration-300"
              >
                <AccordionTrigger className="hover:no-underline py-6 group">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <faq.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-heading font-semibold text-lg text-secondary text-left">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-0">
                  <p className="text-muted-foreground font-body leading-relaxed pl-14">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA at the end */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-body mb-4">
              Ainda tem dúvidas técnicas?
            </p>
            <Button variant="ghost" className="text-secondary hover:text-secondary hover:bg-secondary/10 group" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Agende uma conversa rápida
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
