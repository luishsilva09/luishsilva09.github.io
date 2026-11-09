/*
 * Conteúdo dos projetos. É o único arquivo que você precisa editar para
 * mudar texto, adicionar prints ou um projeto novo.
 *
 * Prints: coloque o arquivo em assets/prints/<slug>/ e liste em `prints`.
 * Enquanto o arquivo não existir, o site mostra um espaço reservado com a
 * legenda, para você saber qual tela falta capturar.
 *   area: "app" (o produto) ou "admin" (painel interno / operação)
 *   formato: "desktop" (16:10) ou "mobile" (retrato)
 */
window.PROJETOS = [
  {
    slug: "site-gs",
    nome: "Grupo Suçuarana",
    tipo: "Site institucional e painel administrativo",
    cor: "#1F5B4B",
    corEscura: "#7FC4AE",
    ano: "2025 — atual",
    papel: "Responsável de TI voluntário. Desenvolvimento e infraestrutura feitos sozinho.",
    status: "Em produção",
    link: { href: "https://www.sussuarana.org.br", rotulo: "sussuarana.org.br" },
    resumo:
      "Site da ONG e o painel onde diretoria e financeiro cuidam de voluntários, documentos assinados, LGPD e mensalidades.",
    problema:
      "A ONG não tinha site próprio e tudo andava em planilha e mensagem: inscrição de voluntário, pedido de parceria, ata para assinar, mensalidade de associado. Não havia um lugar público para mostrar o trabalho, nem um lugar interno com acesso controlado para quem cuida da operação.",
    solucao:
      "Um site público indexável, com formulários protegidos contra spam, e um painel autenticado em que cada pessoa vê só o que a função dela permite. As atas são enviadas para assinatura eletrônica e o status volta sozinho para o painel.",
    funcionalidades: [
      { titulo: "Site público", texto: "Home, quem somos, unidades com mapa, galeria servida por CDN, doação via PIX e páginas de transparência." },
      { titulo: "Formulários sem spam", texto: "Voluntário, contato, parceria e LGPD com honeypot, limite por IP e envio de e-mail que falha alto." },
      { titulo: "Painel por função", texto: "Três papéis (TI, Diretoria, Financeiro), checados no middleware e em cada rota do admin." },
      { titulo: "Atas com assinatura", texto: "Documentos enviados ao Autentique; o webhook atualiza o status da assinatura no painel." },
      { titulo: "LGPD", texto: "O titular pede acesso ou exclusão pelo site e a solicitação entra numa fila no painel." },
      { titulo: "Financeiro", texto: "Mensalidades dos associados e um resumo financeiro, visível só para quem é do financeiro." },
    ],
    decisoes: [
      { titulo: "Segurança na borda", texto: "Nginx com TLS, CSP e cabeçalhos de segurança; Postgres sem porta pública." },
      { titulo: "Imagens fora do servidor", texto: "Galeria e mídias no Cloudflare R2, servidas por CDN própria, sem pesar na VPS." },
      { titulo: "Deploy contínuo", texto: "GitHub Actions publica a imagem e atualiza a VPS. Uptime Kuma avisa se o site cair." },
      { titulo: "Pensado para sucessão", texto: "Runbooks, ADRs e guia de sucessão em MkDocs, para a próxima pessoa de TI assumir sem depender de mim." },
    ],
    stack: ["Next.js 15", "React", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Tailwind 4", "Docker", "Nginx", "Cloudflare R2", "GitHub Actions"],
    prints: [
      { arquivo: "home.jpg", legenda: "Página inicial", area: "app", formato: "desktop" },
      { arquivo: "quem-somos.jpg", legenda: "Quem somos", area: "app", formato: "desktop" },
      { arquivo: "unidades.jpg", legenda: "Unidades com mapa", area: "app", formato: "desktop" },
      { arquivo: "galeria.jpg", legenda: "Galeria servida pela CDN", area: "app", formato: "desktop" },
      { arquivo: "seja-voluntario.jpg", legenda: "Inscrição de voluntário", area: "app", formato: "desktop" },
      { arquivo: "home-mobile.jpg", legenda: "Página inicial no celular", area: "app", formato: "mobile" },
      { arquivo: "admin-dashboard.jpg", legenda: "Dashboard: usuários, voluntários, saldo e mensalidades", area: "admin", formato: "desktop" },
      { arquivo: "admin-kanban.jpg", legenda: "Kanban de recrutamento de voluntários, com responsável por card", area: "admin", formato: "desktop" },
      { arquivo: "admin-documentos.jpg", legenda: "Atas enviadas para assinatura eletrônica e o status de cada uma", area: "admin", formato: "desktop" },
      { arquivo: "admin-financeiro.jpg", legenda: "Financeiro: saldo, lançamentos e mensalidades da competência", area: "admin", formato: "desktop" },
      { arquivo: "admin-voluntarios.jpg", legenda: "Cadastro de voluntários por unidade", area: "admin", formato: "desktop" },
      { arquivo: "admin-lgpd.jpg", legenda: "Pedidos LGPD com prazo de resposta", area: "admin", formato: "desktop" },
      { arquivo: "admin-papeis.jpg", legenda: "Papéis e permissões de acesso ao painel", area: "admin", formato: "desktop" },
    ],
  },
  {
    slug: "coin",
    nome: "coin",
    tipo: "Finanças pessoais",
    cor: "#0E8A5F",
    corEscura: "#3FD39C",
    ano: "2025 — atual",
    papel: "Projeto pessoal, do modelo de dados ao deploy no homelab.",
    status: "Em uso diário",
    link: null,
    resumo:
      "Saldo do mês, cartão de crédito, gastos fixos, dívidas e meta de patrimônio num app só, feito para o celular.",
    problema:
      "Controlar dinheiro em planilha funciona até o cartão de crédito entrar na conta. A fatura não fecha no mesmo dia todo mês, compras antigas são editadas e o total cobrado muda, e não dá para ver de uma vez quanto sobra no mês, quanto já está comprometido e se a meta de patrimônio está no caminho.",
    solucao:
      "Um app web instalável no celular que separa o realizado do previsto, trata a fatura do cartão como algo que você fecha (e que depois disso não muda mais) e mostra, na tela inicial, como o mês está indo em relação ao anterior.",
    funcionalidades: [
      { titulo: "Visão do mês", texto: "Saldo, receita e gasto comparados ao mês anterior, com insights, fatura aberta e gasto por categoria." },
      { titulo: "Cartão de crédito", texto: "Faturas fechadas, a aberta e as previstas, com comparativo em barras e as compras de cada uma." },
      { titulo: "Lançamentos", texto: "Filtros por tipo, categoria, forma de pagamento e período; realizados e futuros lado a lado." },
      { titulo: "Fixos e anuais", texto: "Aluguel, assinaturas, IPVA e IPTU cadastrados uma vez, com histórico de pagamentos." },
      { titulo: "Dívidas", texto: "O saldo devedor é acompanhado e a dívida é dada como quitada sozinha quando chega a zero." },
      { titulo: "Planejamento", texto: "Meta de patrimônio com sub-objetivos, gráfico de trajetória, teto de gasto e orçamento por categoria." },
      { titulo: "Histórico", texto: "Os últimos 12 meses de receita, gasto e saldo, em resumo e tabela." },
      { titulo: "Backup", texto: "Exportação em CSV e backup completo em ZIP quando quiser." },
    ],
    decisoes: [
      { titulo: "Dinheiro em centavos inteiros", texto: "Todo valor é integer de centavos no banco; a conversão para reais acontece só na tela. Sem erro de ponto flutuante." },
      { titulo: "Fatura fechada é imutável", texto: "Fechar a fatura carimba as compras e congela o total. Editar uma compra antiga não muda o que já foi cobrado." },
      { titulo: "Testes contra Postgres de verdade", texto: "Vitest com PGlite (Postgres em WASM) rodando as migrations reais, sem mock de banco." },
      { titulo: "Isolamento por usuário", texto: "Uma única camada monta queries e toda query filtra pelo usuário da sessão." },
      { titulo: "Migração sem susto", texto: "Saiu de SQLite para Postgres com script de conferência (contagens e somas) como portão, e rollback pronto." },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL 17", "Drizzle ORM", "Tailwind 4", "Vitest", "PGlite", "Recharts", "Docker", "Prometheus"],
    prints: [
      { arquivo: "home.jpg", legenda: "Visão do mês", area: "app", formato: "desktop" },
      { arquivo: "cartao.jpg", legenda: "Faturas do cartão: fechadas, aberta e previstas", area: "app", formato: "desktop" },
      { arquivo: "planejamento.jpg", legenda: "Meta de patrimônio, sub-objetivos e trajetória", area: "app", formato: "desktop" },
      { arquivo: "historico.jpg", legenda: "Panorama dos últimos 12 meses", area: "app", formato: "desktop" },
      { arquivo: "lancamentos.jpg", legenda: "Lançamentos com filtros", area: "app", formato: "desktop" },
      { arquivo: "dividas.jpg", legenda: "Dívidas, com quitação automática", area: "app", formato: "desktop" },
      { arquivo: "sobre.jpg", legenda: "Página pública de apresentação", area: "app", formato: "desktop" },
      { arquivo: "home-mobile.jpg", legenda: "Início no celular", area: "app", formato: "mobile" },
      { arquivo: "lancamentos-mobile.jpg", legenda: "Lançamentos no celular", area: "app", formato: "mobile" },
      { arquivo: "cartao-mobile.jpg", legenda: "Cartão no celular", area: "app", formato: "mobile" },
    ],
  },
  {
    slug: "nutritrack",
    nome: "NutriTrack",
    tipo: "Acompanhamento nutricional e físico",
    cor: "#2F7A50",
    corEscura: "#6CCB94",
    ano: "2026 — atual",
    papel: "Projeto pessoal, com arquitetura documentada e entregue em fases.",
    status: "Fase 5 de desenvolvimento",
    link: null,
    resumo:
      "Diário alimentar com a tabela TACO, receitas, planejamento da semana, marmitas, lista de compras, treinos, sono e evolução do peso.",
    problema:
      "Os apps de dieta mais conhecidos usam bases de alimentos estrangeiras, escondem funções atrás de assinatura e tratam dado faltante como zero, o que deixa o total do dia menor do que é. Planejar a semana, as marmitas e a lista de compras ficava em outros lugares.",
    solucao:
      "Uma plataforma pessoal com a tabela TACO (alimentos brasileiros) importada, produtos por código de barras via Open Food Facts e tudo o que vem depois do registro: receitas, semana planejada, marmitas, compras, atividades e a evolução ao longo do tempo.",
    funcionalidades: [
      { titulo: "Diário alimentar", texto: "Registro por refeição, totais calculados no servidor, porções caseiras e cópia de refeição de outro dia." },
      { titulo: "Banco de alimentos", texto: "TACO, Open Food Facts e alimentos próprios, com busca sem acento e tolerante a erro de digitação." },
      { titulo: "Receitas", texto: "Calculadas pelos ingredientes e pelo peso final preparado, por porção e por 100 g." },
      { titulo: "Planejamento", texto: "Semana planejada × registrada, marmitas e lista de compras por seção do mercado." },
      { titulo: "Evolução", texto: "Peso, medidas e consumo com média móvel de 7 dias e projeção com faixa de incerteza." },
      { titulo: "Metas com estimativa", texto: "Sugestão de calorias pela fórmula e, com dados suficientes, pelo gasto observado nos registros." },
      { titulo: "Atividades e hábitos", texto: "Treinos, sono e água, com metas semanais e resumo de consistência." },
    ],
    decisoes: [
      { titulo: "Sem dado não é zero", texto: "Nutriente que a fonte não informa fica vazio, e o total com item incompleto aparece marcado." },
      { titulo: "Decimal, não float", texto: "Nutrientes em Decimal no Postgres e cálculo com decimal.js; arredonda só na exibição." },
      { titulo: "Histórico não se reescreve", texto: "Cada item do diário guarda os valores da época e cada dia é comparado com a meta vigente naquele dia." },
      { titulo: "Isolamento testado", texto: "Testes de integração no CI tentam ler dados de outra conta; repositórios só recebem o usuário da sessão." },
      { titulo: "Container mínimo", texto: "Imagem standalone, usuário sem privilégios, sistema de arquivos só leitura e capabilities removidas." },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL 18", "Prisma 7", "Better Auth", "Zod 4", "shadcn/ui", "Recharts", "Vitest", "Docker", "GitHub Actions"],
    prints: [
      { arquivo: "dashboard.jpg", legenda: "Início: calorias que restam, macros, peso e água do dia", area: "app", formato: "desktop" },
      { arquivo: "diario.jpg", legenda: "Diário por refeição, com alimentos da TACO", area: "app", formato: "desktop" },
      { arquivo: "evolucao.jpg", legenda: "Evolução do peso com média móvel, meta e projeção", area: "app", formato: "desktop" },
      { arquivo: "planejamento.jpg", legenda: "Semana planejada com receitas, comparada à meta", area: "app", formato: "desktop" },
      { arquivo: "compras.jpg", legenda: "Lista de compras da semana, separada por seção do mercado", area: "app", formato: "desktop" },
      { arquivo: "receitas.jpg", legenda: "Receita: valores por porção, por 100 g e total, calculados pelos ingredientes", area: "app", formato: "desktop" },
      { arquivo: "alimentos.jpg", legenda: "Banco de alimentos: TACO, Open Food Facts e próprios", area: "app", formato: "desktop" },
      { arquivo: "sobre.jpg", legenda: "Página pública de apresentação", area: "app", formato: "desktop" },
      { arquivo: "dashboard-mobile.jpg", legenda: "Início no celular", area: "app", formato: "mobile" },
      { arquivo: "diario-mobile.jpg", legenda: "Diário no celular", area: "app", formato: "mobile" },
      { arquivo: "evolucao-mobile.jpg", legenda: "Evolução no celular", area: "app", formato: "mobile" },
    ],
  },
  {
    slug: "maratona",
    nome: "Maratona",
    tipo: "Rastreador de séries",
    cor: "#B45309",
    corEscura: "#F5A524",
    ano: "2026 — atual",
    papel: "Projeto pessoal, primeiro app a usar a plataforma de deploy comum.",
    status: "Em produção no homelab",
    link: null,
    resumo:
      "Mostra o que falta assistir e o que estreia nas séries que você acompanha, episódio por episódio, sem feed nem recomendação.",
    problema:
      "Acompanhar várias séries ao mesmo tempo vira confusão: em que episódio parei, quando volta a próxima temporada, o que já terminou e dá para maratonar. Os apps existentes viraram rede social, e marcar manualmente \"assistindo\" ou \"quero ver\" sempre divergia do que eu tinha visto de fato.",
    solucao:
      "Um app que copia o catálogo da TVMaze para o próprio banco, registra cada episódio visto e deriva todo o resto (continuar, em dia, concluída). Um worker sincroniza o que mudou uma vez por dia, respeitando o limite da API.",
    funcionalidades: [
      { titulo: "Minha lista", texto: "Primeiro o que dá para assistir agora; um toque em \"Assisti T2E07\" e o progresso anda." },
      { titulo: "Estreias", texto: "Agenda dos próximos episódios só do que você acompanha, com estreias e finais de temporada." },
      { titulo: "Buscar", texto: "Catálogo da TVMaze com séries e animes; adicionar importa todos os episódios de uma vez." },
      { titulo: "Meu ano", texto: "Episódios vistos, horas de tela e séries encerradas que dá para maratonar até o fim." },
    ],
    decisoes: [
      { titulo: "Catálogo espelhado, não proxy", texto: "A lista precisa do progresso de todos os títulos a cada abertura; com catálogo local, é uma consulta só." },
      { titulo: "Sync incremental em fila", texto: "BullMQ consulta só o que mudou na TVMaze e o worker escoa no ritmo que a API aguenta." },
      { titulo: "Rate limit compartilhado", texto: "Token bucket no Redis (15 req/10s), porque o limite é por IP e app e worker saem do mesmo host." },
      { titulo: "Estado derivado", texto: "Nada de campo \"assistindo\": o status sai do progresso por episódio e nunca diverge." },
      { titulo: "Observável desde o começo", texto: "Métricas Prometheus próprias e 13 regras de alerta para o que falha em silêncio, como fila parada." },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL 17", "Drizzle ORM", "Redis 8", "BullMQ", "Zod", "Docker", "Prometheus", "Grafana", "GitHub Actions"],
    prints: [
      { arquivo: "lista.jpg", legenda: "Minha lista: o que dá para assistir agora, com o próximo episódio a um toque", area: "app", formato: "desktop" },
      { arquivo: "serie.jpg", legenda: "Detalhe da série: progresso, o que falta e episódios por temporada", area: "app", formato: "desktop" },
      { arquivo: "estreias.jpg", legenda: "Estreias: próximos episódios do que você acompanha, por dia", area: "app", formato: "desktop" },
      { arquivo: "meu-ano.jpg", legenda: "Meu ano: episódios vistos, horas de tela e séries para maratonar", area: "app", formato: "desktop" },
      { arquivo: "buscar.jpg", legenda: "Busca no catálogo da TVMaze", area: "app", formato: "desktop" },
      { arquivo: "sobre.jpg", legenda: "Página pública com as decisões técnicas", area: "app", formato: "desktop" },
      { arquivo: "lista-mobile.jpg", legenda: "Minha lista no celular", area: "app", formato: "mobile" },
      { arquivo: "serie-mobile.jpg", legenda: "Episódios da série no celular", area: "app", formato: "mobile" },
      { arquivo: "estreias-mobile.jpg", legenda: "Estreias no celular", area: "app", formato: "mobile" },
      { arquivo: "meu-ano-mobile.jpg", legenda: "Meu ano no celular", area: "app", formato: "mobile" },
    ],
  },
];

window.PERFIL = {
  nome: "Luís Henrique Silva",
  cargo: "Desenvolvedor Full Stack",
  cidade: "São José dos Campos, SP",
  email: "luishsilva09@gmail.com",
  github: "https://github.com/luishsilva09",
  linkedin: "https://www.linkedin.com/in/luishenriquesilva",
  curriculo: "curriculo/Luis-Henrique-Silva-CV.pdf",
};
