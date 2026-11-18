import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Substitua com os dados reais do seu painel do Supabase (Project Settings > API)
const SUPABASE_URL = 'SUA_URL_DO_SUPABASE_AQUI'
const SUPABASE_ANON_KEY = 'SUA_CHAVE_ANON_AQUI'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
