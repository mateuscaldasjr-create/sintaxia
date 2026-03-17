import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Download, Target, TerminalSquare, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

// Mockup of Resources
const resourcesData = [
  {
    id: "guia-sdr-inteligente",
    title: "Playbook SDR 4.0",
    description: "Aprenda a construir uma máquina de vendas outbound conduzida 100% por IA, sem depender de listas frias e SPAM.",
    tag: "E-book Exclusivo",
    icon: Target,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400"
  },
  {
    id: "prompts-atendimento",
    title: "15 Prompts de Atendimento B2B",
    description: "Copie e cole os exatos comandos que usamos para treinar os robôs de suporte Nível 1 dos nossos clientes.",
    tag: "Templates",
    icon: TerminalSquare,
    color: "from-secondary/20 to-purple-500/20",
    iconColor: "text-secondary"
  },
  {
    id: "checkist-rotten-processes",
    title: "Auditoria de Processos Ocultos",
    description: "Um checklist prático de 20 perguntas para descobrir onde sua empresa está perdendo dinheiro com trabalho manual.",
    tag: "Ação Prática",
    icon: AlertCircle,
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400"
  }
];

const Resources = () => {
  const { toast } = useToast();
  const [selectedResource, setSelectedResource] = useState<typeof resourcesData[0] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to save Lead
    setTimeout(() => {
      setIsSubmitting(false);
      setSelectedResource(null);
      setFormData({ name: "", email: "", company: "" });
      
      toast({
        title: "Material Liberado! 🚀",
        description: "Enviamos o PDF diretamente para o seu e-mail.",
        className: "bg-secondary/10 border-secondary text-foreground",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <CustomCursor />
      <Navigation />
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <main className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border border-secondary/20">
              <span className="text-sm text-secondary font-medium tracking-wide">Conteúdo Gratuito</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Biblioteca de <span className="text-gradient-fluid">Inteligência</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              De planilhas a agentes cognitivos: o conhecimento tático que usamos internamente para automatizar operações milionárias.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourcesData.map((resource, idx) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card flex flex-col h-full border border-border/40 hover:border-secondary/40 transition-colors group relative overflow-hidden"
              >
                {/* Visual Cover Cover */}
                <div className={`h-48 relative border-b border-border/50 bg-gradient-to-br ${resource.color} flex items-center justify-center p-6 overflow-hidden`}>
                   <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
                   <div className="relative z-10 w-20 h-20 rounded-2xl bg-background/80 flex items-center justify-center shadow-xl border border-white/5 group-hover:scale-110 transition-transform duration-500">
                      <resource.icon className={`w-10 h-10 ${resource.iconColor}`} />
                   </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-muted-foreground mb-4 w-fit">
                    {resource.tag}
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-foreground mb-3 leading-tight">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                    {resource.description}
                  </p>
                  
                  <Button 
                    className="w-full gap-2 group/btn border-secondary/20 hover:border-secondary" 
                    variant="outline"
                    onClick={() => setSelectedResource(resource)}
                  >
                    <Download className="w-4 h-4 text-secondary group-hover/btn:translate-y-0.5 transition-transform" />
                    Baixar Material
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      {/* Lead Capture Dialog */}
      <AnimatePresence>
        {selectedResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedResource(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card border border-secondary/20 w-full max-w-lg relative z-10 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
              
              <button 
                onClick={() => setSelectedResource(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                
                <h3 className="text-2xl font-bold font-heading mb-2">
                  Destravar Acesso
                </h3>
                <p className="text-muted-foreground mb-8 text-sm">
                  Deixe seu e-mail funcional para receber o material <strong className="text-foreground">{selectedResource.title}</strong> instantaneamente na sua caixa de entrada.
                </p>

                <form onSubmit={handleDownload} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider ml-1">Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Bruno Mendes"
                      className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider ml-1">E-mail Profissional</label>
                    <input 
                      required
                      type="email" 
                      placeholder="bruno@empresa.com.br"
                      className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider ml-1">Segmento da Empresa</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Saúde, Varejo, Software..."
                      className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors mb-4"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="cta" disabled={isSubmitting}>
                    {isSubmitting ? "Processando Envio..." : "Receber Material por E-mail"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Resources;
