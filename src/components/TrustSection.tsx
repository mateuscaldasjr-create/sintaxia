const clients = [
  { name: "SENAI", abbrev: "SENAI" },
  { name: "FIEB", abbrev: "FIEB" },
  { name: "SESI", abbrev: "SESI" },
  { name: "SESC", abbrev: "SESC" },
  { name: "Gelo Dias D'ávila", abbrev: "GDD" },
];

const TrustSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground font-body text-sm uppercase tracking-widest mb-10">
          Transformando a operação de grandes instituições e indústrias
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative flex items-center justify-center"
            >
              {/* Logo placeholder - text-based for now */}
              <div className="relative px-6 py-3 rounded-lg transition-all duration-500 cursor-default">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-secondary/0 group-hover:bg-secondary/5 transition-all duration-500 blur-xl" />
                
                <span className="relative font-heading font-bold text-xl md:text-2xl text-muted-foreground/40 group-hover:text-secondary transition-all duration-500 group-hover:drop-shadow-[0_0_20px_hsl(185_100%_50%/0.6)]">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
