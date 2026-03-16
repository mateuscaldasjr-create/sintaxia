import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const casesData = [
  {
    id: "fieb-senai",
    title: "Orquestração de Atendimento em Larga Escala",
    client: "FIEB / SENAI",
    description: "Automação completa do atendimento ao aluno e triagem de leads educacionais com IA Generativa integrada aos sistemas acadêmicos.",
    metrics: [
      { label: "Tempo de Resposta", value: "-85%", icon: Clock },
      { label: "Tickets Retidos", value: "73%", icon: BarChart3 },
      { label: "Aumento em Matrículas", value: "+22%", icon: TrendingUp },
    ],
    tags: ["WhatsApp AI", "Integração CRM", "Atendimento"],
  },
  {
    id: "gelo-dias-davila",
    title: "SDR Autônomo para Indústria B2B",
    client: "Gelo Dias D'ávila",
    description: "Implementação de um Agente Especialista em prospecção e qualificação de distribuidores 24x7, com agendamento direto no calendário comercial.",
    metrics: [
      { label: "Novos Distribuidores", value: "+45%", icon: TrendingUp },
      { label: "Qualificação Automática", value: "100%", icon: BarChart3 },
      { label: "Custo por Lead (CPL)", value: "-60%", icon: Clock },
    ],
    tags: ["SDR", "Prospecção", "B2B"],
  },
  {
    id: "clinica-viva",
    title: "Agendamento e Triagem Médica Cognitiva",
    client: "Clínica Viva",
    description: "Um agente conversacional treinado nos protocolos da clínica para realizar pré-triagem de sintomas, fornecer preparos de exames e confirmar consultas na agenda dos médicos.",
    metrics: [
      { label: "No-show (Faltas)", value: "-40%", icon: TrendingUp },
      { label: "Triagem Humana", value: "-90%", icon: Clock },
      { label: "Satisfação do Paciente", value: "98%", icon: BarChart3 },
    ],
    tags: ["Saúde", "Agendamento", "Triagem"],
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 20 },
  },
};

const Cases = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <CustomCursor />
      <Navigation />
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-200px] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <main className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Resultados Reais</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6">
              O impacto da <br/>
              <span className="text-gradient-fluid">Automação Cognitiva</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Descubra como empresas estão eliminando gargalos, escalando vendas e reduzindo custos operacionais com arquiteturas da Sintax IA.
            </p>
          </motion.div>

          {/* Grid de Cases */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {casesData.map((project) => (
              <motion.div 
                key={project.id} 
                variants={itemVariants}
                className="glass-card p-8 md:p-10 rounded-3xl group glow-hover relative overflow-hidden flex flex-col h-full border border-border/50"
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-secondary font-medium tracking-wide uppercase text-sm mb-2">
                        {project.client}
                      </h4>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Mini-Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-border/40">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-secondary">
                          <metric.icon className="w-4 h-4 opacity-70" />
                          <span className="font-bold text-lg">{metric.value}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/cases/${project.id}`}
                      className="inline-flex items-center gap-2 text-foreground font-medium group-hover:text-secondary transition-colors"
                    >
                      Ver Detalhes
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
