import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#metodo", label: "Método" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* SI Monogram Logo */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg
                viewBox="0 0 40 40"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Circuit-style geometric monogram */}
                <rect
                  x="2"
                  y="2"
                  width="36"
                  height="36"
                  rx="4"
                  className="stroke-secondary transition-all duration-300 group-hover:stroke-primary"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* S shape */}
                <path
                  d="M12 14 H20 A4 4 0 0 1 24 18 V18 A4 4 0 0 1 20 22 H16 A4 4 0 0 0 12 26 V26 A4 4 0 0 0 16 30 H24"
                  className="stroke-secondary transition-all duration-300 group-hover:stroke-primary"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* I shape */}
                <line
                  x1="28"
                  y1="14"
                  x2="28"
                  y2="30"
                  className="stroke-secondary transition-all duration-300 group-hover:stroke-primary"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Circuit dots */}
                <circle cx="12" cy="14" r="1.5" className="fill-secondary/60" />
                <circle cx="28" cy="14" r="1.5" className="fill-secondary/60" />
                <circle cx="24" cy="30" r="1.5" className="fill-secondary/60" />
              </svg>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              Sintax <span className="text-secondary">IA</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button variant="cta" size="default">
              Agendar Diagnóstico
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="cta" size="lg" className="mt-4">
                Agendar Diagnóstico
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
