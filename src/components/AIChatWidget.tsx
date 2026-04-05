import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase";

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
    "Olá! 👋 Sou o assistente virtual da **Vortex AI Labs**, movido por Inteligência Artificial real.\n\nPosso te ajudar a entender como **agentes de IA** podem transformar sua operação.\n\nPergunte-me qualquer coisa sobre nossos serviços, cases de sucesso, ou como podemos automatizar sua empresa!",
  timestamp: new Date(),
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

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input.trim();
    setInput("");
    setIsTyping(true);

    try {
      // Build history for the AI (exclude the welcome message)
      const history = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({ role: m.role, content: m.content }));

      const { data, error } = await supabase.functions.invoke("sintaxia-chat", {
        body: {
          message: currentInput,
          history,
        },
      });

      const responseText =
        error || !data?.reply
          ? "Desculpe, estou com uma instabilidade temporária. 😅 Para falar diretamente com nosso especialista, acesse o WhatsApp: [Falar com Especialista](https://wa.me/5571982435004)"
          : data.reply;

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: responseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const fallbackMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Ops! Não consegui processar sua mensagem agora. Fale diretamente com nosso especialista no WhatsApp: [Agendar Diagnóstico](https://wa.me/5571982435004)",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);

      // Track chat interaction
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "chat_interaction", {
          event_category: "engagement",
          event_label: "ai_chat_widget",
        });
      }
    }
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
                Assistente Vortex AI Labs
              </h4>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Powered by IA • Online
              </p>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/10">
              <Sparkles className="w-3 h-3 text-secondary" />
              <span className="text-[10px] text-secondary font-medium">IA Real</span>
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
              Powered by Vortex AI Labs • Inteligência Artificial Real
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatWidget;
