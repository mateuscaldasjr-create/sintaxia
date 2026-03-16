import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Olá! 👋 Sou o assistente virtual da **Sintax IA**. Posso te ajudar a entender como agentes de IA podem transformar sua operação.\n\nComo posso ajudar?\n\n• Quero saber sobre os serviços\n• Como funciona a automação?\n• Quanto posso economizar?\n• Quero falar com a equipe",
  timestamp: new Date(),
};

const SMART_RESPONSES: Record<string, string> = {
  serviço:
    "Temos 3 soluções principais:\n\n🤖 **Atendimento Cognitivo** — Suporte 24/7 via WhatsApp e Web com IA\n\n⚙️ **Orquestração de Workflows** — Automação entre ERP, CRM e suas ferramentas\n\n🎯 **SDR Inteligente** — Prospecção e qualificação de leads em escala\n\nQual dessas te interessa mais?",
  automação:
    "Nossa automação funciona em 4 etapas:\n\n1️⃣ **Auditoria** — Mapeamos seus gargalos\n2️⃣ **Arquitetura** — Desenhamos o agente ideal\n3️⃣ **Implementação** — Deploy em 15-21 dias\n4️⃣ **Evolução** — Monitoramento contínuo\n\nO melhor: implementação média em apenas **3 semanas** com ROI no primeiro mês!",
  economizar:
    "Nossos clientes economizam em média **70% dos custos** com tarefas manuais!\n\n📊 Use nossa **Calculadora de ROI** no site para ver sua economia potencial.\n\nPor exemplo: uma equipe de 10 pessoas com salário médio de R$5.000 pode economizar até **R$87.500/mês** em tarefas automatizáveis.\n\nQuer que eu te ajude com um diagnóstico personalizado?",
  equipe:
    "Perfeito! Vou te conectar com o Mateus Passos, nosso diretor de estratégia. 🎯\n\n📞 Clique aqui para falar no **WhatsApp**: [Agendar Diagnóstico](https://wa.me/5571982435004?text=Olá!+Vim+pelo+chat+do+site+e+gostaria+de+um+diagnóstico.)\n\nTempo médio de resposta: **menos de 30 minutos**!",
  preço:
    "Cada projeto é customizado para a realidade da sua empresa. Não trabalhamos com pacotes genéricos.\n\n💡 O melhor caminho é agendar um **diagnóstico gratuito** — sem compromisso:\n\n[Agendar Diagnóstico Gratuito](https://wa.me/5571982435004?text=Olá!+Gostaria+de+saber+sobre+preços+e+agendar+um+diagnóstico.)\n\nO diagnóstico inclui:\n• Mapeamento de processos\n• Identificação de gargalos\n• Estimativa de ROI\n• Proposta personalizada",
  caso:
    "Temos cases reais comprovados! 🏆\n\n🏭 **FIEB/SENAI/SESI** — 50+ unidades com 200+ processos automatizados\n\n🧊 **Gelo Dias D'ávila** — Atendimento 24/7 com tempo de resposta <30s\n\nRole a página para ver mais detalhes na seção **Cases de Sucesso**!",
  default:
    "Ótima pergunta! Para te dar a melhor resposta, recomendo conversar diretamente com nosso especialista.\n\n📞 [Falar com Especialista no WhatsApp](https://wa.me/5571982435004?text=Olá!+Vim+pelo+chat+do+site+e+tenho+uma+dúvida.)\n\nOu me pergunte sobre:\n• Nossos serviços\n• Como funciona a automação\n• Casos de sucesso\n• Preços e diagnóstico",
};

const getSmartResponse = (input: string): string => {
  const lower = input.toLowerCase();

  if (lower.includes("serviço") || lower.includes("solução") || lower.includes("oferecem") || lower.includes("fazem"))
    return SMART_RESPONSES["serviço"];
  if (lower.includes("automação") || lower.includes("funciona") || lower.includes("como") || lower.includes("processo") || lower.includes("etapa"))
    return SMART_RESPONSES["automação"];
  if (lower.includes("economi") || lower.includes("roi") || lower.includes("custo") || lower.includes("valor") || lower.includes("quanto"))
    return SMART_RESPONSES["economizar"];
  if (lower.includes("equipe") || lower.includes("falar") || lower.includes("contato") || lower.includes("agendar") || lower.includes("humano") || lower.includes("whatsapp"))
    return SMART_RESPONSES["equipe"];
  if (lower.includes("preço") || lower.includes("custa") || lower.includes("invest") || lower.includes("orçamento") || lower.includes("plano"))
    return SMART_RESPONSES["preço"];
  if (lower.includes("case") || lower.includes("sucesso") || lower.includes("resultado") || lower.includes("cliente") || lower.includes("exemplo"))
    return SMART_RESPONSES["caso"];

  return SMART_RESPONSES["default"];
};

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    const delay = 800 + Math.random() * 1200;
    setTimeout(() => {
      const response = getSmartResponse(userMessage.content);
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);

      // Track chat interaction
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "chat_interaction", {
          event_category: "engagement",
          event_label: "ai_chat_widget",
        });
      }
    }, delay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Render markdown-like links in messages
  const renderContent = (content: string) => {
    const parts = content.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        return (
          <a
            key={i}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary underline underline-offset-2 hover:text-secondary/80 transition-colors"
          >
            {linkMatch[1]}
          </a>
        );
      }
      // Bold text
      const boldParts = part.split(/(\*\*.*?\*\*)/g);
      return boldParts.map((bp, j) => {
        const boldMatch = bp.match(/\*\*(.*?)\*\*/);
        if (boldMatch) {
          return <strong key={`${i}-${j}`} className="font-semibold text-foreground">{boldMatch[1]}</strong>;
        }
        return <span key={`${i}-${j}`}>{bp}</span>;
      });
    });
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
          isOpen
            ? "bg-muted text-muted-foreground rotate-0"
            : "bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground hover:scale-110"
        }`}
        style={{
          boxShadow: isOpen
            ? undefined
            : "0 0 30px hsl(185 100% 50% / 0.4), 0 4px 20px rgba(0,0,0,0.3)",
        }}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat com IA"}
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}

        {/* Notification dot */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center animate-pulse">
            <span className="text-[10px] text-primary-foreground font-bold">1</span>
          </span>
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-8rem)] rounded-2xl overflow-hidden shadow-2xl animate-fade-up flex flex-col border border-border/50"
          style={{
            boxShadow: "0 0 60px hsl(185 100% 50% / 0.1), 0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-background via-obsidian-light to-background px-5 py-4 border-b border-border/50 flex items-center gap-3 flex-shrink-0">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-secondary" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
            </div>
            <div className="flex-1">
              <h4 className="font-heading font-bold text-sm text-foreground">
                Assistente Sintax IA
              </h4>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Online agora
              </p>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/10">
              <Sparkles className="w-3 h-3 text-secondary" />
              <span className="text-[10px] text-secondary font-medium">IA</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-background">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${
                    msg.role === "assistant"
                      ? "bg-secondary/10"
                      : "bg-primary/10"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <Bot className="w-4 h-4 text-secondary" />
                  ) : (
                    <User className="w-4 h-4 text-primary" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "assistant"
                      ? "bg-muted/50 text-foreground rounded-tl-sm"
                      : "bg-secondary/20 text-foreground rounded-tr-sm"
                  }`}
                >
                  {renderContent(msg.content)}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-secondary" />
                </div>
                <div className="bg-muted/50 px-4 py-3 rounded-2xl rounded-tl-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-secondary/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-secondary/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 bg-background border-t border-border/50 flex-shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/30 transition-all"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                size="icon"
                className="rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground disabled:opacity-30 h-10 w-10"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-[10px] text-muted-foreground/40 text-center mt-2">
              Powered by Sintax IA • Respostas automatizadas
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatWidget;
