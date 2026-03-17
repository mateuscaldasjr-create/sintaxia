import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  BarChart, 
  Users, 
  Settings, 
  LogOut, 
  Search, 
  TrendingUp, 
  CheckCircle,
  Clock,
  Trash2,
  ExternalLink
} from "lucide-react";
import { supabase } from "@/lib/supabase";

type Lead = {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  company?: string;
  companyName?: string;
  teamSize?: string;
  biggestBottleneck?: string;
  source: string;
  timestamp: string;
  status?: "novo" | "em_contato" | "ganho" | "perdido";
  qualificationScore?: number;
  roi_data?: {
    employees: number;
    salary: number;
    hoursPerWeek: number;
    monthlyLoss: number;
    potentialSavings: number;
  };
};

const AdminDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("leads");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        // Fetch from Supabase
        const { data: leadsData } = await supabase.from('sintaxia_leads').select('*');
        const { data: diagnosticsData } = await supabase.from('sintaxia_diagnostics').select('*');
        
        let combinedLeads: Lead[] = [];
        
        if (leadsData && leadsData.length > 0) {
          leadsData.forEach(lead => {
             combinedLeads.push({
               id: lead.id?.toString() || crypto.randomUUID(),
               name: lead.name,
               email: lead.email,
               whatsapp: lead.whatsapp,
               company: lead.company,
               source: lead.source,
               timestamp: lead.created_at || new Date().toISOString(),
               status: lead.status || "novo"
             });
          });
        }
        
        if (diagnosticsData && diagnosticsData.length > 0) {
          diagnosticsData.forEach(diag => {
            combinedLeads.push({
               id: diag.id?.toString() || crypto.randomUUID(),
               name: diag.name,
               email: diag.email,
               whatsapp: diag.whatsapp,
               companyName: diag.company_name,
               teamSize: diag.team_size,
               biggestBottleneck: diag.biggest_bottleneck,
               qualificationScore: diag.score,
               source: "diagnostico_multi_step",
               timestamp: diag.created_at || new Date().toISOString(),
               status: diag.status || "novo"
            });
          });
        }
        
        if (combinedLeads.length > 0) {
          combinedLeads.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
          setLeads(combinedLeads);
        } else {
          // Fallback to local storage if DB is empty or fails / keys not provided yet
          const rawLeads = localStorage.getItem("sintaxia_leads");
          if (rawLeads) {
            const parsed = JSON.parse(rawLeads);
            parsed.sort((a: Lead, b: Lead) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
            setLeads(parsed);
          }
        }
      } catch (e) {
        console.error("Erro ao carregar leads da nuvem", e);
        // Pure fallback on catch
        const rawLeads = localStorage.getItem("sintaxia_leads");
        if (rawLeads) {
          setLeads(JSON.parse(rawLeads).sort((a: Lead, b: Lead) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
        }
      }
    };

    fetchLeads();
  }, []);

  const updateLeadStatus = (id: string, newStatus: string) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus as any } : l);
    setLeads(updated);
    localStorage.setItem("sintaxia_leads", JSON.stringify(updated));
  };

  const deleteLead = (id: string) => {
    if (window.confirm("Certeza que deseja deletar este lead?")) {
      const updated = leads.filter(l => l.id !== id);
      setLeads(updated);
      localStorage.setItem("sintaxia_leads", JSON.stringify(updated));
    }
  };

  const filteredLeads = leads.filter(l => 
    l.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    l.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSourceBadge = (source: string) => {
    switch(source) {
      case "diagnostico_multi_step": return <span className="bg-primary/20 text-primary px-2 py-1 rounded-md text-xs font-semibold">Diagnóstico</span>;
      case "roi_calculator": return <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-md text-xs font-semibold">Calculadora ROI</span>;
      case "exit_intent_popup": return <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded-md text-xs font-semibold">Exit Popup</span>;
      default: return <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-semibold">{source}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-background flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/50 bg-background/50 backdrop-blur-xl hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-border/50">
          <Link to="/" className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
            Sintax <span className="text-secondary">Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "dashboard" ? "bg-secondary/10 text-secondary font-medium" : "text-muted-foreground hover:bg-muted"}`}
          >
            <BarChart className="w-5 h-5" /> Visão Geral
          </button>
          <button 
            onClick={() => setActiveTab("leads")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "leads" ? "bg-secondary/10 text-secondary font-medium" : "text-muted-foreground hover:bg-muted"}`}
          >
            <Users className="w-5 h-5" /> Leads <span className="ml-auto bg-secondary/20 text-secondary text-xs py-0.5 px-2 rounded-full">{leads.length}</span>
          </button>
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-all"
          >
            <Settings className="w-5 h-5" /> Configurações
          </button>
        </nav>
        
        <div className="p-4 border-t border-border/50">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all">
            <LogOut className="w-5 h-5" /> Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-8 border-b border-border/50 bg-background/50 backdrop-blur-xl">
          <h1 className="font-heading font-semibold text-xl text-foreground capitalize">
            {activeTab === "dashboard" ? "Visão Geral" : "Gestão de Leads"}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Buscar leads..." 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg bg-muted/50 border border-border/50 focus:border-secondary/50 focus:outline-none text-sm w-64 transition-all"
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
              <span className="font-bold text-secondary text-sm">MP</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === "dashboard" ? (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 border border-border/50 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-muted-foreground text-sm">Total de Leads</p>
                      <h3 className="font-heading font-bold text-3xl text-foreground mt-1">{leads.length}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                  <p className="text-sm text-green-400 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" /> +12% esta semana
                  </p>
                </div>
                
                <div className="glass-card p-6 border border-border/50 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-muted-foreground text-sm">Taxa de Conversão</p>
                      <h3 className="font-heading font-bold text-3xl text-foreground mt-1">4.2%</h3>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Baseado em cliques no WhatsApp</p>
                </div>
                
                <div className="glass-card p-6 border border-border/50 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-muted-foreground text-sm">Aguardando Contato</p>
                      <h3 className="font-heading font-bold text-3xl text-foreground mt-1">
                        {leads.filter(l => !l.status || l.status === "novo").length}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-orange-400" />
                    </div>
                  </div>
                  <p className="text-sm text-orange-400">Requer atenção imediata</p>
                </div>
              </div>
              
              <div className="glass-card p-8 border border-border/50 rounded-2xl text-center py-20">
                <BarChart className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground">Analytics em Construção</h3>
                <p className="text-muted-foreground">Os gráficos detalhados serão implementados via Supabase.</p>
              </div>
            </div>
          ) : (
            <div className="glass-card border border-border/50 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/30 border-b border-border/50 text-xs uppercase text-muted-foreground">
                      <th className="px-6 py-4 font-medium">Nome / Empresa</th>
                      <th className="px-6 py-4 font-medium">Contato</th>
                      <th className="px-6 py-4 font-medium">Origem / Score</th>
                      <th className="px-6 py-4 font-medium">Data</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground">
                          Nenhum lead encontrado.
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-muted/20 transition-colors group">
                          <td className="px-6 py-4">
                            <p className="font-medium text-foreground">{lead.name}</p>
                            <p className="text-xs text-muted-foreground mt-1">{lead.companyName || lead.company || "Sem empresa"}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-foreground">{lead.email}</p>
                            <a 
                              href={`https://wa.me/55${lead.whatsapp.replace(/\D/g, '')}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-secondary hover:underline flex items-center gap-1 mt-1"
                            >
                              {lead.whatsapp} <ExternalLink className="w-3 h-3" />
                            </a>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col gap-2 items-start">
                              {getSourceBadge(lead.source)}
                              {lead.qualificationScore && (
                                <span className="text-xs font-semibold text-foreground/80 flex items-center gap-1">
                                  Score: <span className={lead.qualificationScore >= 70 ? "text-green-400" : "text-orange-400"}>{lead.qualificationScore}/100</span>
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">
                            {new Date(lead.timestamp).toLocaleDateString("pt-BR", { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                          </td>
                          <td className="px-6 py-4">
                            <select 
                              value={lead.status || "novo"} 
                              onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                              className="bg-background border border-border/50 rounded-md px-2 py-1 text-xs text-foreground focus:outline-none focus:border-secondary/50"
                            >
                              <option value="novo">Novo</option>
                              <option value="em_contato">Em Contato</option>
                              <option value="ganho">Convertido</option>
                              <option value="perdido">Perdido</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button 
                              onClick={() => deleteLead(lead.id)}
                              className="w-8 h-8 rounded-md inline-flex items-center justify-center text-muted-foreground opacity-0 group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive transition-all"
                              title="Excluir lead"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
