import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Aqui você captura os dados que vêm do formulário
    const { nome, email, telefone, mensagem } = data;

    // Por agora, vamos registar no log do servidor.
    // Assim que conectar ao seu banco de dados (Supabase/Firebase), 
    // será aqui que o código de inserção entrará.
    console.log("Novo Lead Recebido:", {
      nome,
      email,
      telefone,
      mensagem,
      data: new Date().toISOString()
    });

    // Retorna uma resposta de sucesso para o frontend
    return NextResponse.json(
      { message: "Solicitação VIP enviada com sucesso!" }, 
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao processar a solicitação." }, 
      { status: 500 }
    );
  }
}
