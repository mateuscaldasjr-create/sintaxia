import { MessageSquare, Calendar, Brain, Database, Users } from "lucide-react";

const integrations = [
  { name: "WhatsApp", icon: MessageSquare },
  { name: "Salesforce", icon: Database },
  { name: "HubSpot", icon: Users },
  { name: "Google Calendar", icon: Calendar },
  { name: "OpenAI", icon: Brain },
];

const IntegrationsSection = () => {
  // Duplicate for seamless loop
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-lg font-heading font-medium text-muted-foreground tracking-widest uppercase">
          Conectividade Total
        </h3>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling marquee */}
        <div className="flex animate-marquee">
          {duplicatedIntegrations.map((integration, index) => (
            <div
              key={`${integration.name}-${index}`}
              className="flex items-center justify-center mx-12 min-w-[160px]"
            >
              <div className="flex items-center gap-3 px-6 py-4 glass-card rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300">
                <integration.icon className="w-8 h-8 text-muted-foreground" />
                <span className="text-muted-foreground font-body text-lg whitespace-nowrap">
                  {integration.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
