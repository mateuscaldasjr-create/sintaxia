import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export const BLOG_POSTS = [
  {
    id: "o-que-sao-agentes-ia",
    title: "O que são Agentes de IA e por que sua empresa precisa deles em 2026",
    excerpt: "Descubra como os agentes autônomos de Inteligência Artificial estão revolucionando o mercado e substituindo automações engessadas.",
    category: "Automação com IA",
    date: "16 Mar 2026",
    readTime: "5 min",
    author: "Mateus Passos",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "chatbot-whatsapp-empresa-ia",
    title: "Chatbot de WhatsApp tradicional x Atendimento Cognitivo com IA",
    excerpt: "Pare de perder clientes com menus de 'digite 1 para vendas, 2 para suporte'. Veja a diferença de um atendimento que entende contexto.",
    category: "Atendimento",
    date: "10 Mar 2026",
    readTime: "4 min",
    author: "Mateus Passos",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sdr-inteligente-prospeccao",
    title: "Como escalar suas vendas com um SDR Inteligente",
    excerpt: "Aprenda a prospectar, qualificar e agendar reuniões 24/7 sem aumentar sua equipe comercial.",
    category: "Vendas",
    date: "05 Mar 2026",
    readTime: "6 min",
    author: "Mateus Passos",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <div className="noise-overlay" />
      <Navigation />
      
      <main className="flex-1 pt-32 pb-24 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Blog Sintax <span className="text-secondary text-glow-cyan">IA</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights, estratégias e guias práticos sobre como implementar Agentes de Inteligência Artificial para escalar sua operação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <article 
                key={post.id} 
                className="glass-card flex flex-col h-full overflow-hidden group hover:border-secondary/50 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Link to={`/blog/${post.id}`} className="block relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold bg-background/80 backdrop-blur-md rounded-full text-foreground border border-border/50">
                      {post.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                        <User className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-xs text-muted-foreground">{post.author}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-sm font-semibold text-secondary flex items-center gap-1 hover:text-secondary/80 transition-colors"
                    >
                      Ler artigo <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
