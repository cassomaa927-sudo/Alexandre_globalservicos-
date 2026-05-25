import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Inicializa o cliente com as variáveis que você configurou
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use a 'Secret key' aqui
);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { nome, email, telefone, mensagem } = data;

    // Tenta inserir os dados na tabela 'leads'
    const { error } = await supabase
      .from('leads')
      .insert([{ nome, email, telefone, mensagem }]);

    if (error) {
      console.error("Erro ao inserir no Supabase:", error);
      throw error;
    }

    return NextResponse.json({ message: "Solicitação VIP enviada com sucesso!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao processar a solicitação." }, { status: 500 });
  }
}
