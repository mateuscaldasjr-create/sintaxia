import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Users, Clock } from "lucide-react";

const faqs = [
  {
    id: "seguranca",
    icon: Shield,
    question: "Segurança de Dados?",
    answer: "Implementamos protocolos LGPD e criptografia de elite. Seus dados são tratados com os mais altos padrões de segurança do mercado.",
  },
  {
    id: "humanos",
    icon: Users,
    question: "Substitui humanos?",
    answer: "Não, potencializa humanos eliminando o trabalho braçal. Nossos agentes liberam sua equipe para focar no que realmente importa: estratégia e relacionamento.",
  },
  {
    id: "tempo",
    icon: Clock,
    question: "Tempo de entrega?",
    answer: "Implementação média em 15 dias. Do diagnóstico à produção, trabalhamos com sprints ágeis para entregar valor rapidamente.",
  },
];

const FAQSection = () => {
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
                    <span className="font-heading font-semibold text-lg text-foreground text-left">
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
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
