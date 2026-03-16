import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { BLOG_POSTS } from "./Blog";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <NotFound />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <div className="noise-overlay" />
      <Navigation />
      
      <main className="flex-1 pt-32 pb-24 relative z-10">
        <article className="container max-w-4xl px-4 md:px-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para o Blog
          </Link>

          {/* Post Header */}
          <header className="mb-12 animate-fade-up">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between py-6 border-y border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{post.author}</p>
                  <p className="text-xs text-muted-foreground">Diretor de Estratégia, Sintax IA</p>
                </div>
              </div>
              
              <Button variant="outline" size="sm" onClick={handleShare} className="gap-2 bg-transparent text-foreground hover:bg-secondary/10 hover:text-secondary border-border/50">
                <Share2 className="w-4 h-4" />
                Compartilhar
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 border border-border/50 animate-fade-up shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content (Placeholder for demo) */}
          <div className="prose prose-invert prose-lg max-w-none mb-16 animate-fade-up">
            <p>
              A Inteligência Artificial deixou de ser um conceito futurista e passou a ser a 
              vantagem competitiva mais importante das empresas modernas. Neste cenário, os 
              <strong> Agentes Autônomos de IA</strong> representam a última evolução tecnológica 
              quando falamos em eficiência operacional.
            </p>
            
            <h2>O problema das automações tradicionais</h2>
            <p>
              Até muito recentemente, quando uma empresa queria automatizar o WhatsApp, ela 
              recorria a fluxos engessados baseados em árvores de decisão. O famoso: 
              <em>"Digite 1 para falar com vendas, digite 2 para suporte"</em>.
            </p>
            <p>
              O problema desse modelo é claro: <strong>os clientes odeiam</strong>. A experiência 
              é frustrante e muitas vezes leva o cliente a desistir da compra ou abandonar 
              o atendimento.
            </p>

            <h2>A Era do Atendimento Cognitivo</h2>
            <p>
              Ao invés de programar fluxos, nós treinamos um Agente de IA com todo o conhecimento 
              do seu negócio — catálogos, preços, políticas, FAQs, tom de voz da marca.
            </p>
            <ul>
              <li><strong>Contexto:</strong> O agente entende áudios, textos com erros ortográficos e gírias.</li>
              <li><strong>Persuasão:</strong> Ele é treinado com técnicas de vendas.</li>
              <li><strong>Disponibilidade:</strong> Atende 1 ou 10.000 clientes simultaneamente, às 3 da manhã de um domingo.</li>
            </ul>

            <blockquote>
              "Implementar um Agente de IA não é substituir pessoas, é elevar seu time 
              humano a focar naquilo que realmente importa: estratégia e relacionamento."
            </blockquote>
          </div>

          {/* Lead Capture Inside Article */}
          <div className="my-16 animate-fade-up border-t border-b border-border/50 py-12">
            <div className="text-center mb-8">
              <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">
                Gostou deste artigo?
              </h3>
              <p className="text-muted-foreground">
                Descubra como aplicar essas estratégias diretamente na sua empresa.
              </p>
            </div>
            <LeadCaptureForm 
              variant="modal" 
              title="Solicite um Diagnóstico Gratuito" 
              subtitle="Nós analisamos sua operação e desenhamos a arquitetura do seu primeiro Agente de IA."
              source={`blog_post_${post.id}`}
            />
          </div>

        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
