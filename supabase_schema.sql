-- Tabela Geral de Leads (MQLs e Curiosos)
CREATE TABLE IF NOT EXISTS public.sintaxia_leads (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL,
    whatsapp text,
    company text,
    source text,
    status text DEFAULT 'novo',
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Tabela de Fundador/Qualificados (Diagnóstico Multi-step e SQLs)
CREATE TABLE IF NOT EXISTS public.sintaxia_diagnostics (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL,
    whatsapp text,
    company_name text,
    team_size text,
    biggest_bottleneck text,
    score numeric DEFAULT 0,
    status text DEFAULT 'novo',
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Políticas Básicas de Segurança (Row Level Security) - Leitura e Escrita
ALTER TABLE public.sintaxia_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sintaxia_diagnostics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir Insert Público em Leads" 
ON public.sintaxia_leads FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Permitir Read Público em Leads (Apenas para o Admin no frontend MVP)" 
ON public.sintaxia_leads FOR SELECT 
USING (true);

CREATE POLICY "Permitir Insert Público em Diagnósticos" 
ON public.sintaxia_diagnostics FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Permitir Read Público em Diagnósticos" 
ON public.sintaxia_diagnostics FOR SELECT 
USING (true);
