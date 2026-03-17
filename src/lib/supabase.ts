import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Evita crashar a aplicação caso as chaves não estejam configuradas,
// permitindo que o front-end funcione parcialmente, mas alertando no console.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase URL ou Anon Key ausentes no arquivo .env. Certifique-se de configurar as variáveis para salvar leads.');
}
