import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, CheckCircle2, Bot, MessageSquare, 
  Workflow, Target, Zap, ServerCog, Database, Phone,
  Clock, LineChart, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

// Mockup Database for Services (In a real app, from CMS or Supabase)
const servicesData = {
  "atendimento-cognitivo": {
    name: "Atendimento Cognitivo",
    icon: MessageSquare,
    tagline: "Sua empresa não dorme mais.",
    description: "Agentes Baseados em LLMs treinados com sua base de conhecimento para atendimento 24/7. Suporte técnico nivelado, tira dúvidas de vendas e guiam o lead até a ponta da conversão sem toque humano.",
    features: [
      { title: "NLG Nativo (Natural Language Generation)", desc: "Conversas idênticas à humanas, sem fluxogramas robóticos." },
      { title: "Omnichannel", desc: "WhatsApp, Instagram DM, WebChat e Telegram centralizados." },
      { title: "Escalação Humana Zero-Friction", desc: "Transferência automática para um humano em casos de alta complexidade." },
      { title: "Deep Context", desc: "Lembra o histórico impecavelmente do cliente, gerando rapport." }
    ],
    integrations: ["WhatsApp Business API", "Zendesk", "Intercom", "Take Blip", "WATI"],
    benefits: [
      { num: "0s", label: "Tempo de Resposta", icon: Clock },
      { num: "-70%", label: "Custo com Suporte L1", icon: LineChart },
      { num: "98%", label: "Resolução Automática", icon: ShieldCheck }
    ]
  },
  "orquestracao-workflows": {
    name: "Orquestração de Workflows",
    icon: Workflow,
    tagline: "O sistema nervoso central da sua empresa.",
    description: "Silos de dados não se comunicam. Nós construímos artérias digitais (APIs & Webhooks) ligando seu CRM, seu ERP, seu financeiro e suas planilhas em um único fluxo respirante e sem fricção.",
    features: [
      { title: "ETL de Alta Carga", desc: "Extração de milhares de linhas e migração seguras entre sistemas legados." },
      { title: "Shadow IT Eradication", desc: "Fim do copiar-colar no fim do expediente. O dado trafega onde precisa." },
      { title: "Robotic Process Automation (RPA)", desc: "Bots que clicam e navegam em portais governamentais que não possuem API." },
      { title: "Triggers Multi-condition", desc: "De 'se pagar a fatura X, libere o módulo Y no curso Z'." }
    ],
    integrations: ["Make/Integromat", "n8n", "Zapier", "Salesforce", "Asana"],
    benefits: [
      { num: "100%", label: "Confiabilidade do Dado", icon: ShieldCheck },
      { num: "-6h", label: "Horas ganhas/dia por Dev", icon: Clock },
      { num: "+50", label: "Processos Auditáveis", icon: LineChart }
    ]
  },
  "sdr-inteligente": {
    name: "SDR Inteligente (Prospecção)",
    icon: Target,
    tagline: "Volume infinito de Outbound.",
    description: "Esqueça listas frias jogadas em um software de disparo em massa. Implementamos instâncias de SDRs baseados em IA que abordam leads por e-mail e LinkedIn de maneira hiper-personalizada 1-to-1 em escala.",
    features: [
      { title: "Icebreakers Enriquecidos", desc: "Ao invés de spam, o bot extrai dados do LinkedIn do lead e soa nativo." },
      { title: "Follow-Up Dinâmico", desc: "O agente envia 6 emails com contexto em semanas alternadas. Se o lead disser sim, ele pausa a sequência." },
      { title: "Pre-Qualification", desc: "Responde as primeiras objeções e agenda reuniões direto na agenda dos closers." },
      { title: "Voice Agents", desc: "Ligação humana fria usando modelos de Speech-to-Text de latência sub-milisegundo (Beta)." }
    ],
    integrations: ["Instantly", "Smartlead", "Apollo.io", "HubSpot", "Calendly"],
    benefits: [
      { num: "10x", label: "Volume de Contatos", icon: LineChart },
      { num: "45%", label: "Open Rate Médio", icon: Target },
      { num: "24/7", label: "Prospecção Ativa", icon: Clock }
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Serviço não catalogado</h1>
        <Button asChild>
          <Link to="/">Voltar para a Home</Link>
        </Button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <CustomCursor />
      <Navigation />
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-300px] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <main className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          
          <Link 
            to="/#servicos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Visão Geral
          </Link>

          {/* Hero of Service */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="w-20 h-20 rounded-3xl bg-secondary/10 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-secondary/5">
              <Icon className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 tracking-tight">
              {service.name}
            </h1>
            <p className="text-xl md:text-2xl text-foreground font-medium mb-6">
              {service.tagline}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>

          {/* Metrics Tape */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
          >
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="glass-card p-6 flex items-center justify-between border-secondary/20 hover:border-secondary/40 transition-colors">
                <div>
                  <h4 className="text-3xl font-bold font-heading text-secondary mb-1">{benefit.num}</h4>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{benefit.label}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-foreground" />
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 mb-24">
            {/* Features (Bento Logic) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <ServerCog className="w-6 h-6 text-foreground" />
                <h3 className="text-2xl font-heading font-bold">Capacidades Técnicas</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {service.features.map((feature, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    key={idx} 
                    className="glass-card p-6 border-border/40 hover:bg-white/[0.02] transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-secondary mb-4" />
                    <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Integrations Stack */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <Database className="w-6 h-6 text-foreground" />
                <h3 className="text-2xl font-heading font-bold">Comunicação Nativa</h3>
              </div>
              
              <div className="glass-card p-8 border-border/40">
                <ul className="space-y-4">
                  {service.integrations.map((int, idx) => (
                    <li key={idx} className="flex items-center gap-3 border-b border-border/30 pb-4 last:border-0 last:pb-0">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="font-medium text-foreground">{int}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-3 pt-4 mt-4 border-t border-border/30">
                     <span className="text-sm text-muted-foreground italic">+200 via API/Webhooks Rest</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-secondary/10 border border-secondary/20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent animate-glow pointer-events-none" />
            <Bot className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
              Implemente o {service.name} em Semanas
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nossa equipe de engenharia constrói, testa e implanta a arquitetura sem que você precise mexer em uma linha de código.
            </p>
            <Button size="xl" variant="cta" asChild>
              <Link to="/diagnostico">Solicitar Escopo Grátis</Link>
            </Button>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
