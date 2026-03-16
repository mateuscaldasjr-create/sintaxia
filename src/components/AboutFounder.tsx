import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImage from "@/assets/founder-mateus-passos.png";

const AboutFounder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

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
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="sobre" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Professional Portrait Placeholder */}
          <motion.div variants={itemVariants} className="relative">
            <div className="glass-card rounded-3xl overflow-hidden border border-border/50 aspect-[3/4] relative group max-w-md mx-auto lg:mx-0">
              {/* Founder Photo */}
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={founderImage} 
                alt="Mateus Passos - Founder & Director of Strategy" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-secondary/30 transition-colors duration-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <p className="text-secondary font-body font-medium tracking-widest uppercase mb-4">
                Sobre o Fundador
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                A Mentalidade{" "}
                <span className="text-gradient-fluid drop-shadow-sm">Sintax</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
                <p>
                  Na Sintax IA, construímos a ponte entre a complexidade tecnológica e a simplicidade operacional. 
                  Cada agente que desenvolvemos nasce de uma obsessão: eliminar a fricção entre o que sua empresa 
                  precisa fazer e a velocidade com que consegue executar.
                </p>
                <p>
                  Nossa filosofia é clara — tecnologia de elite não deve ser privilégio de corporações com 
                  orçamentos milionários. Democratizamos o acesso a automações inteligentes, construindo 
                  soluções que entendem o contexto único do seu negócio e evoluem junto com suas operações.
                </p>
                <p>
                  Não vendemos promessas. Entregamos arquiteturas que funcionam, métricas que comprovam 
                  e resultados que falam por si.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="cta" size="xl" className="group w-full sm:w-auto" asChild>
                  <Link to="/diagnostico">
                    Consultoria Estratégica
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="glass" size="xl" className="w-full sm:w-auto">
                  Conectar no LinkedIn
                </Button>
              </div>

              {/* Signature/Name */}
              <div className="mt-12 pt-8 border-t border-border/30">
                <p className="font-heading font-bold text-xl text-foreground">
                  Mateus Passos
                </p>
                <p className="text-secondary text-sm font-medium tracking-wide">
                  FUNDADOR & DIRETOR DE IA
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutFounder;
