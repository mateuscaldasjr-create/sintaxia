import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles, TrendingUp, Clock, Users } from "lucide-react";

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon: React.ElementType;
}

const Counter = ({ value, label, suffix = "", prefix = "", icon: Icon }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(currentValue) {
          setDisplayValue(Math.round(currentValue).toLocaleString('pt-BR'));
        },
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return (
    <div ref={containerRef} className="glass-card p-6 md:p-8 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      
      <div className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground flex items-baseline justify-center">
        {prefix && <span className="text-2xl md:text-3xl text-muted-foreground mr-1">{prefix}</span>}
        <span ref={ref}>{displayValue}</span>
        {suffix && <span className="text-2xl md:text-3xl text-secondary ml-1">{suffix}</span>}
      </div>
      
      <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider relative z-10">
        {label}
      </p>
    </div>
  );
};

const AnimatedCounters = () => {
  const stats = [
    { value: 150, label: "Fluxos Automatizados", suffix: "+", icon: TrendingUp },
    { value: 50, label: "Horas Poupadas por Mês", suffix: "k+", icon: Clock },
    { value: 98, label: "Precisão nos Agentes", suffix: "%", icon: Sparkles },
    { value: 24, label: "Operação Contínua", suffix: "/7", icon: Users },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <Counter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounters;
