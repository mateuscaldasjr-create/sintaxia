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
    answer: "Absolutamente não. Nossos agentes de IA são projetados para amplificar a capacidade humana, não substituí-la. Eliminamos tarefas repetitivas e de baixo valor para que sua equipe possa focar no que realmente importa: pensamento estratégico, relacionamento com clientes e tomadas de decisão complexas. O resultado? Profissionais mais satisfeitos e operações mais lucrativas.",
  },
  {
    id: "seguranca",
    icon: Shield,
    question: "Segurança de Dados?",
    answer: "A segurança é a espinha dorsal de cada solução que construímos. Implementamos protocolos rigorosos de conformidade com a LGPD, criptografia de ponta a ponta e infraestrutura isolada para cada cliente. Seus dados nunca são compartilhados ou utilizados para treinar modelos externos. Auditoria completa e rastreabilidade de cada ação executada pelos agentes.",
  },
  {
    id: "tempo",
    icon: Clock,
    question: "Tempo para Resultados?",
    answer: "Velocidade é parte do nosso DNA. A implementação média é de 15 dias úteis, do diagnóstico inicial até a operação em produção. Trabalhamos em sprints ágeis com entregas incrementais, permitindo que você veja valor desde a primeira semana. Projetos mais complexos podem levar até 30 dias, mas sempre com marcos claros de progresso.",
  },
  {
    id: "integracoes",
    icon: Plug,
    question: "Integrações Disponíveis?",
    answer: "Conectamos com praticamente qualquer sistema que sua empresa já utiliza. CRMs como Salesforce e HubSpot, ERPs, plataformas de comunicação como WhatsApp e Slack, ferramentas de produtividade Google Workspace e Microsoft 365, além de APIs customizadas. Se existe uma API, nós integramos.",
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
