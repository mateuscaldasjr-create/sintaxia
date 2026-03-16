import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Factory, Bot, LineChart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { casesData } from "./Cases";

const CaseDetail = () => {
  const { id } = useParams();
  const project = casesData.find(c => c.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Case não encontrado</h1>
        <Button asChild>
          <Link to="/cases">Voltar para Cases</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <CustomCursor />
      <Navigation />
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-300px] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <main className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          
          <Link 
            to="/cases"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Cases
          </Link>

          {/* Hero Section of Case */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
              {project.client}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
              {project.title}
            </h1>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border/30">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="glass-card p-6 flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-2">
                    <metric.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-3xl font-bold text-foreground">{metric.value}</span>
                  <span className="text-sm text-muted-foreground font-medium">{metric.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Deep Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-16"
          >
            {/* O Desafio */}
            <section className="glass-card p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full" />
              <div className="flex items-center gap-3 mb-6">
                <Factory className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-heading font-bold">O Desafio</h3>
              </div>
              <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                <p>
                  Antes da intervenção da Sintax IA, o cliente enfrentava gargalos sistêmicos no seu processo. Tratava-se de um modelo excessivamente manual que dependia de humanos fazendo trabalho de robóticos — copiando planilhas, triando mensagens repetitivas no WhatsApp e perdendo inteligência de vendas devido ao tempo de resposta alto.
                </p>
                <p>
                  <strong>Principais Dores:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-base">
                  <li>Alto custo operacional e horas extras do time.</li>
                  <li>Leads frios devido a demora de mais de horas para responder.</li>
                  <li>Inconsistência na qualificação técnica dos leads.</li>
                </ul>
              </div>
            </section>

            {/* A Solução */}
            <section className="glass-card p-8 md:p-12 relative overflow-hidden border-secondary/20">
              <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/10 blur-[50px] rounded-full" />
              <div className="flex items-center gap-3 mb-6">
                <Bot className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-heading font-bold">Arquitetura Implementada</h3>
              </div>
              <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                <p>
                  Desenhamos e implantamos uma série de Agentes baseados em LLMs avançados integrados aos canais de entrada do cliente via n8n e Make. A inteligência artificial foi contextualizada com toda a base de conhecimento institucional da empresa.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-background/50 p-6 rounded-2xl border border-border/50">
                    <CheckCircle2 className="w-6 h-6 text-green-400 mb-3" />
                    <h4 className="font-bold text-foreground mb-2">Treinamento Contextual</h4>
                    <p className="text-sm">Agentes nutridos com manuais de vendas e processos exatos da empresa.</p>
                  </div>
                  <div className="bg-background/50 p-6 rounded-2xl border border-border/50">
                    <CheckCircle2 className="w-6 h-6 text-green-400 mb-3" />
                    <h4 className="font-bold text-foreground mb-2">Orquestração de CRM</h4>
                    <p className="text-sm">Todo dado extraído do diálogo é injetado diretamente em funil no HubSpot/PipeDrive.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* O Resultado */}
            <section className="glass-card p-8 md:p-12 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-500/5 blur-[50px] rounded-full" />
              <div className="flex items-center gap-3 mb-6">
                <LineChart className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-heading font-bold">O Impacto (ROI)</h3>
              </div>
              <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                <p>
                  No primeiro mês útil após o Deployment Total, a operação se transformou. O cenário caótico onde humanos lutavam contra o volume de demanda cedeu a uma esteira invisível perfeita de dados, liberando o time para fechamento de alto ticket (estratégia humana) enquanto os agentes Sintax absorveram 100% da linha de frente.
                </p>
              </div>
            </section>

          </motion.div>

          {/* Bottom Call to Action */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-secondary/10 to-primary/5 border border-secondary/20 text-center relative overflow-hidden"
          >
            <Zap className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4">
              Sua empresa está perdendo dinheiro agora?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada hora que seu time passa copiando dados, ou esquentando leads frios, poderia ser automatizada com Agentes IA.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="xl" variant="cta" asChild>
                <Link to="/diagnostico">Fazer Diagnóstico Gratuito</Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseDetail;
