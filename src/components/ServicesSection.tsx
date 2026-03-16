import { MessageSquare, Cog, Target, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const services = [
    {
      icon: MessageSquare,
      title: "Atendimento Cognitivo",
      description: "Suporte Instantâneo",
      details: "Suporte que resolve problemas via WhatsApp/Web em segundos, com compreensão contextual e respostas personalizadas 24/7.",
      features: ["WhatsApp & Web Chat", "Respostas em segundos", "Escalação inteligente"],
      slug: "atendimento-cognitivo"
    },
    {
      icon: Cog,
      title: "Orquestração de Workflows",
      description: "Automação Total",
      details: "Automação total entre ERP, CRM e Planilhas. Seus sistemas conversam entre si sem intervenção humana.",
      features: ["Integração ERP/CRM", "Sync de planilhas", "Zero intervenção manual"],
      slug: "orquestracao-workflows"
    },
    {
      icon: Target,
      title: "SDR Inteligente",
      description: "Prospecção em Escala",
      details: "Prospecção humana em massa para seu time de vendas. Qualificação e nutrição de leads em piloto automático.",
      features: ["Prospecção automatizada", "Follow-up inteligente", "Qualificação em massa"],
      slug: "sdr-inteligente"
    },
  ];

  return (
    <section id="servicos" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="gradient-orb w-[400px] h-[400px] bg-secondary/10 top-1/2 left-[-100px] animate-float" />
      
      <div className="container relative z-10 px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border border-secondary/20">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-muted-foreground">Nossas Soluções</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Agentes de IA para cada <span className="text-gradient-fluid drop-shadow-sm">Desafio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções personalizadas que transformam a forma como sua empresa opera
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass-card p-8 group glow-hover relative overflow-hidden flex flex-col h-full"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>

                {/* Title & Description */}
                <h3 className="font-heading font-bold text-xl mb-2 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                <p className="text-secondary text-sm font-medium mb-4">
                  {service.description}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {service.details}
                </p>

                {/* Features */}
                <ul className="space-y-2 mt-auto mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Call to Action View Detail */}
                <div className="mt-auto">
                    <Link 
                      to={`/servicos/${service.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 py-3 px-4 rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground font-medium transition-all duration-300 border border-secondary/20 hover:border-secondary"
                    >
                      Descobrir Mais
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
