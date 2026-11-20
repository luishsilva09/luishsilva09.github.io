/*
 * Conteúdo do site em português. Junto com conteudo/en.mjs, é o que você edita
 * para mudar texto, prints ou projetos. Depois rode `npm run build` (ou só faça
 * push: a GitHub Action gera e publica).
 *
 * Prints: o arquivo original fica em assets/prints/<slug>/<arquivo> (JPG ou PNG).
 * O build gera as versões WebP em vários tamanhos. Se um arquivo listado não
 * existir, o build falha e diz qual é.
 *   area: "app" (o produto) ou "admin" (painel interno / operação)
 *   formato: "desktop" ou "mobile"
 */
export default {
  lang: "pt-BR",
  base: "/",
  meta: {
    titulo: "Luís Henrique Silva | Desenvolvedor Full Stack",
    descricao: "Portfólio de Luís Henrique Silva, desenvolvedor full stack: projetos do problema até produção, com Next.js, Python, PostgreSQL, Docker e CI/CD.",
  },
  ui: {
    pular: "Pular para o conteúdo",
    temaAria: "Alternar tema claro e escuro",
    idioma: { rotulo: "EN", aria: "Read in English" },
    marcaAria: "devlhs, página inicial",
    nav: { projetos: "Projetos", servicos: "Serviços", infra: "Infra", experiencia: "Experiência", contato: "Contato" },
    ids: { projetos: "projetos", infra: "infra", experiencia: "experiencia", contato: "contato" },
    verProjetos: "Ver projetos",
    precisoDe: "Preciso de um site ou sistema",
    whats: "WhatsApp",
    mensagemWhats: "Olá, Luís! Vi seu site e quero conversar.",
    chamada: {
      titulo: "Precisa de algo parecido?",
      texto: "Faço sites e sistemas sob medida para empresas, ONGs e profissionais. Conta o que você precisa e eu digo como dá para resolver.",
      whats: "Chamar no WhatsApp",
      servicos: "Ver serviços",
      mensagem: "Olá, Luís! Vi o projeto {projeto} no seu site e preciso de algo parecido.",
    },
    baixarCV: "Baixar currículo (PDF)",
    cvCurto: "Currículo (PDF)",
    verProjeto: "Ver o projeto",
    todosProjetos: "Todos os projetos",
    fichas: { status: "Status", periodo: "Período", papel: "Meu papel" },
    abrir: "Abrir",
    problema: "O problema",
    solucao: "A solução",
    comoFicou: "Como ficou",
    comoFicouLink: "O site está no ar; abaixo, telas do site público e do painel interno.",
    comoFicouSite: "O site está no ar; abaixo, as telas principais.",
    comoFicouPrivado: "O código é privado, então as telas mostram o app rodando com dados de demonstração.",
    abas: { app: "App", appSite: "Site público", admin: "Operação", adminSite: "Painel admin", aria: "Telas do projeto" },
    funcionalidades: "Funcionalidades",
    funcionalidadesSub: "O que dá para fazer hoje.",
    decisoes: "Decisões técnicas",
    decisoesSub: "As escolhas que mais pesaram, e por quê.",
    stack: "Stack",
    proximo: "Próximo projeto",
    ampliar: "Ampliar",
    fechar: "Fechar",
    rodape: "Feito à mão, publicado no GitHub Pages.",
    naoEncontrado: {
      titulo: "Página não encontrada",
      texto: "O endereço pode ter mudado ou estar com um erro de digitação.",
      voltar: "Ir para a página inicial",
    },
  },
  perfil: {
    nome: "Luís Henrique Silva",
    cargo: "Desenvolvedor Full Stack",
    cidade: "São José dos Campos",
    regiao: "SP",
    pais: "BR",
  },
  home: {
    quem: "Luís Henrique Silva, desenvolvedor full stack em São José dos Campos",
    titulo: "Desenvolvedor full stack: construo sistemas do zero à produção e os mantenho no ar.",
    intro: "Trabalho com Python e PostgreSQL na Nube. Fora dela, construo e mantenho sozinho os sistemas abaixo: um no ar para uma ONG, uma ferramenta de estudo aberta a todos e os outros no meu homelab, em uso diário ou em desenvolvimento.",
    esteiraAria: "Etapas que cubro em cada projeto",
    esteira: [
      ["Requisito", "com quem vai usar"],
      ["Modelo de dados", "PostgreSQL, Prisma, Drizzle"],
      ["Código", "Next.js, TypeScript, Python"],
      ["Testes", "Vitest, integração no CI"],
      ["Imagem", "Docker, GHCR"],
      ["Deploy", "backup, migration, rollback"],
      ["Monitoramento", "Prometheus, Grafana"],
    ],
    projetosTitulo: "Projetos",
    projetosSub: "Quase todos os repositórios são privados. Cada página conta o problema, como resolvi, as telas e as decisões técnicas que mais pesaram.",
    servicosTitulo: "O que você pode contratar",
    servicosSub: "Se você precisa de algo parecido para o seu negócio, eu faço do começo ao fim.",
    servicosBotao: "Ver serviços e pedir orçamento",
    infraTitulo: "Por trás dos projetos",
    infraSub: "A parte que não aparece nas telas, mas é o que mantém tudo no ar.",
    infra: [
      { icone: "deploy", titulo: "Plataforma de deploy", texto: "Workflow reutilizável no GitHub Actions que publica imagens no GHCR e um script de deploy comum com pull, backup, migration, healthcheck e rollback automático. Os apps só declaram um <code>deploy.conf</code>." },
      { icone: "grafico", titulo: "Observabilidade", texto: "Prometheus e Grafana no homelab, com métricas próprias dos apps e alertas para o que falha em silêncio, como fila parada ou sincronização atrasada." },
      { icone: "servidor", titulo: "Homelab", texto: "Proxmox com containers LXC, acesso remoto por VPN e Portainer para gerenciar os containers." },
      { icone: "documento", titulo: "Gerador de documentos", texto: "Microsserviço em Python com FastAPI que gera PDF e Word a partir de templates, usado pelo painel do Grupo Suçuarana." },
    ],
    experienciaTitulo: "Experiência",
    experiencia: [
      { atual: true, quando: "jun 2025 — atual", cargo: "Desenvolvedor Full Stack Júnior", onde: "Nube", itens: [
        "Desenvolvo e mantenho módulos web em Python e Zope de uso intensivo por usuários internos.",
        "Escrevo e otimizo queries em PostgreSQL, reduzindo o tempo de resposta de consultas críticas.",
        "Refatoro sistemas legados e regras de negócio em time Scrum.",
      ] },
      { atual: true, quando: "mai 2025 — atual", cargo: "Responsável de TI (voluntário)", onde: "Grupo Suçuarana de Operações Socioambientais", itens: [
        "Desenvolvi sozinho o site institucional e o painel administrativo, a partir de requisitos levantados com a diretoria.",
        "Mantenho a infraestrutura: Docker em VPS, Nginx com TLS e CSP, Cloudflare, deploy contínuo e monitoramento.",
      ] },
      { quando: "jan 2024 — jun 2025", cargo: "Estagiário de Desenvolvimento Full Stack", onde: "Nube", itens: [
        "Implementei funcionalidades da análise de requisitos à modelagem em PostgreSQL. Efetivado como júnior.",
      ] },
      { quando: "jan 2019 — jan 2024", cargo: "Operador de Produção Especializado", onde: "Johnson & Johnson", itens: [
        "De aprendiz a operador especializado em ambiente industrial regulado, com procedimentos padronizados.",
      ] },
    ],
    formacaoTitulo: "Formação",
    formacao: [
      ["Tecnólogo em Análise e Desenvolvimento de Sistemas", "Anhanguera, 2023 — 2025"],
      ["Bootcamp de Desenvolvimento Full Stack", "Driven Education, 2022"],
      ["Técnico em Eletrônica", "CEPHAS, 2018 — 2019"],
    ],
    habilidadesTitulo: "Habilidades",
    habilidades: [
      ["Linguagens", "Python, TypeScript, JavaScript, SQL, Bash"],
      ["Backend e frontend", "FastAPI, Zope, Node.js, Next.js, React, Tailwind"],
      ["Dados", "PostgreSQL, Redis, Prisma, Drizzle"],
      ["Infra", "Docker, GitHub Actions, Linux, Nginx, Cloudflare, Prometheus, Grafana"],
    ],
    contatoTitulo: "Quer conversar sobre um projeto ou uma vaga?",
    contatoTexto: "Respondo por WhatsApp, e-mail ou LinkedIn. O currículo completo está em PDF.",
  },
  /*
   * Página /servicos/. Texto para quem quer contratar, sem jargão técnico.
   * "exemplo.slug" (opcional) liga o serviço à página de um projeto.
   */
  servicos: {
    meta: {
      titulo: "Criação de sites e sistemas sob medida em São José dos Campos | devlhs",
      descricao: "Sites, sistemas sob medida, automações e servidores para empresas, ONGs e profissionais em São José dos Campos e no Vale do Paraíba, ou a distância. Orçamento pelo WhatsApp.",
    },
    migalha: "Serviços",
    quem: "Para empresas, ONGs e profissionais, em São José dos Campos ou a distância",
    titulo: "Sites e sistemas sob medida, da primeira conversa ao que fica no ar.",
    intro: "Você conta o que precisa; eu construo, publico e continuo cuidando. Sem agência no meio: quem conversa com você é quem faz.",
    whats: "Chamar no WhatsApp",
    email: "Enviar e-mail",
    mensagem: "Olá, Luís! Vi seu site e quero conversar sobre um projeto.",
    mensagemServico: "Olá, Luís! Vi seu site e quero um orçamento de: {servico}.",
    listaTitulo: "Criação de sites, sistemas e automações",
    listaSub: "Cada serviço tem um exemplo real, que você pode abrir e ver funcionando.",
    pedir: "Pedir orçamento",
    exemplo: "Exemplo",
    lista: [
      {
        icone: "site",
        titulo: "Site para empresa, ONG ou profissional",
        texto: "Um site que explica o que você faz, aparece no Google e faz a pessoa entrar em contato.",
        itens: [
          "Rápido e feito para o celular",
          "Formulários de contato que não enchem de spam",
          "Domínio, HTTPS e estatísticas de visita configurados",
          "Preparado para o Google e para prévia no WhatsApp",
        ],
        exemplo: { texto: "site do Grupo Suçuarana", slug: "site-gs" },
      },
      {
        icone: "sistema",
        titulo: "Sistema sob medida",
        texto: "Para quando a planilha e o grupo de mensagens já não dão conta da operação.",
        itens: [
          "Cadastros, financeiro, mensalidades e relatórios",
          "Cada pessoa vê só o que a função dela permite",
          "Funciona no computador e no celular",
          "Entregue em etapas, para usar antes de tudo ficar pronto",
        ],
        exemplo: { texto: "painel administrativo do Grupo Suçuarana", slug: "site-gs" },
      },
      {
        icone: "automacao",
        titulo: "Automação e integração",
        texto: "Tarefas repetitivas que um programa pode fazer sozinho, e sistemas que precisam conversar entre si.",
        itens: [
          "Contratos, atas e relatórios em PDF ou Word a partir de um modelo",
          "Documentos enviados para assinatura eletrônica",
          "Importação de planilhas e dados de outros sistemas",
          "Rotinas agendadas, com aviso quando algo falha",
        ],
        exemplo: { texto: "atas do Grupo Suçuarana, geradas e enviadas para assinatura", slug: "site-gs" },
      },
      {
        icone: "servidor",
        titulo: "Domínio, servidor e configuração",
        texto: "A parte que ninguém vê e que decide se o site fica no ar.",
        itens: [
          "Registro e configuração de domínio, DNS e Cloudflare",
          "Servidor próprio (VPS) com HTTPS e proteção básica",
          "Backup automático e testado",
          "Monitoramento que avisa se o site cair",
        ],
        exemplo: { texto: "a infraestrutura que mantém o site do Grupo Suçuarana no ar", slug: "site-gs" },
      },
      {
        icone: "manutencao",
        titulo: "Manutenção do que já existe",
        texto: "Você já tem um site ou sistema e ele está lento, com erro ou parado no tempo.",
        itens: [
          "Correção de erros e pequenos ajustes",
          "Telas e relatórios lentos por causa do banco de dados",
          "Atualizações de segurança",
          "Acompanhamento mensal, se fizer sentido",
        ],
        exemplo: { texto: "é o que faço todo dia no trabalho, em sistemas com anos de uso" },
      },
    ],
    comoTitulo: "Como funciona",
    comoSub: "O mesmo caminho para um site pequeno ou um sistema maior.",
    como: [
      ["Conversa", "Você conta o problema e eu faço perguntas. Sem custo e sem compromisso."],
      ["Proposta", "O que será feito, prazo e valor, por escrito, antes de começar."],
      ["Construção", "Você acompanha num endereço de teste e opina enquanto ainda dá tempo de mudar."],
      ["Publicação", "Coloco no ar com domínio, HTTPS e backup configurados."],
      ["Suporte", "Fico disponível para ajustes e, se quiser, cuido da manutenção."],
    ],
    faqTitulo: "Perguntas frequentes",
    faq: [
      ["Quanto custa?", "Depende do tamanho do que você precisa. Depois de uma conversa rápida, envio uma proposta com valor fechado."],
      ["Quanto tempo leva?", "Um site institucional costuma sair em poucas semanas. Um sistema leva mais e é entregue em etapas, para você usar a primeira parte antes de o resto ficar pronto. O prazo vai escrito na proposta."],
      ["De quem são o domínio, o código e os dados?", "Seus. O domínio é registrado no seu nome, e o código e os dados ficam com você, com documentação para outra pessoa conseguir assumir se for preciso."],
      ["Já tenho um site ou sistema. Você mexe no que existe?", "Sim. Primeiro olho o que existe e digo se vale mais consertar ou refazer."],
      ["Você atende fora de São José dos Campos?", "Sim. O trabalho é feito a distância, com reuniões por vídeo. Em São José dos Campos e região, dá para conversar pessoalmente."],
    ],
    contatoTitulo: "Conta o que você precisa.",
    contatoTexto: "Uma mensagem explicando o problema já basta para começar.",
  },
  projetos: [
    {
      slug: "site-gs",
      nome: "Grupo Suçuarana",
      tipo: "Site institucional e painel administrativo",
      corClara: "#1F5B4B",
      corEscura: "#7FC4AE",
      ano: "2025 — atual",
      papel: "Responsável de TI voluntário. Desenvolvimento e infraestrutura feitos sozinho.",
      status: "Em produção",
      link: {
        href: "https://www.sussuarana.org.br",
        rotulo: "sussuarana.org.br"
      },
      resumo: "Site da ONG e o painel onde diretoria e financeiro cuidam de voluntários, documentos assinados, LGPD e mensalidades.",
      problema: "A ONG não tinha site próprio e tudo andava em planilha e mensagem: inscrição de voluntário, pedido de parceria, ata para assinar, mensalidade de associado. Não havia um lugar público para mostrar o trabalho, nem um lugar interno com acesso controlado para quem cuida da operação.",
      solucao: "Um site público indexável, com formulários protegidos contra spam, e um painel autenticado em que cada pessoa vê só o que a função dela permite. As atas são enviadas para assinatura eletrônica e o status volta sozinho para o painel.",
      funcionalidades: [
        {
          titulo: "Site público",
          texto: "Home, quem somos, unidades com mapa, galeria servida por CDN, doação via PIX e páginas de transparência."
        },
        {
          titulo: "Formulários sem spam",
          texto: "Voluntário, contato, parceria e LGPD com honeypot, limite por IP e envio de e-mail que falha alto."
        },
        {
          titulo: "Painel por função",
          texto: "Três papéis (TI, Diretoria, Financeiro), checados no middleware e em cada rota do admin."
        },
        {
          titulo: "Atas com assinatura",
          texto: "Documentos enviados ao Autentique; o webhook atualiza o status da assinatura no painel."
        },
        {
          titulo: "LGPD",
          texto: "O titular pede acesso ou exclusão pelo site e a solicitação entra numa fila no painel."
        },
        {
          titulo: "Financeiro",
          texto: "Mensalidades dos associados e um resumo financeiro, visível só para quem é do financeiro."
        }
      ],
      decisoes: [
        {
          titulo: "Segurança na borda",
          texto: "Nginx com TLS, CSP e cabeçalhos de segurança; Postgres sem porta pública."
        },
        {
          titulo: "Imagens fora do servidor",
          texto: "Galeria e mídias no Cloudflare R2, servidas por CDN própria, sem pesar na VPS."
        },
        {
          titulo: "Deploy contínuo",
          texto: "GitHub Actions publica a imagem e atualiza a VPS. Uptime Kuma avisa se o site cair."
        },
        {
          titulo: "Pensado para sucessão",
          texto: "Runbooks, ADRs e guia de sucessão em MkDocs, para a próxima pessoa de TI assumir sem depender de mim."
        }
      ],
      stack: [
        "Next.js 15",
        "React",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "NextAuth",
        "Tailwind 4",
        "Docker",
        "Nginx",
        "Cloudflare R2",
        "GitHub Actions"
      ],
      prints: [
        {
          arquivo: "home.jpg",
          legenda: "Página inicial",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "quem-somos.jpg",
          legenda: "Quem somos",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "unidades.jpg",
          legenda: "Unidades com mapa",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "galeria.jpg",
          legenda: "Galeria servida pela CDN",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "seja-voluntario.jpg",
          legenda: "Inscrição de voluntário",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "home-mobile.jpg",
          legenda: "Página inicial no celular",
          area: "app",
          formato: "mobile"
        },
        {
          arquivo: "admin-dashboard.jpg",
          legenda: "Dashboard: usuários, voluntários, saldo e mensalidades",
          area: "admin",
          formato: "desktop"
        },
        {
          arquivo: "admin-kanban.jpg",
          legenda: "Kanban de recrutamento de voluntários, com responsável por card",
          area: "admin",
          formato: "desktop"
        },
        {
          arquivo: "admin-documentos.jpg",
          legenda: "Atas enviadas para assinatura eletrônica e o status de cada uma",
          area: "admin",
          formato: "desktop"
        },
        {
          arquivo: "admin-financeiro.jpg",
          legenda: "Financeiro: saldo, lançamentos e mensalidades da competência",
          area: "admin",
          formato: "desktop"
        },
        {
          arquivo: "admin-voluntarios.jpg",
          legenda: "Cadastro de voluntários por unidade",
          area: "admin",
          formato: "desktop"
        },
        {
          arquivo: "admin-lgpd.jpg",
          legenda: "Pedidos LGPD com prazo de resposta",
          area: "admin",
          formato: "desktop"
        },
        {
          arquivo: "admin-papeis.jpg",
          legenda: "Papéis e permissões de acesso ao painel",
          area: "admin",
          formato: "desktop"
        }
      ]
    },
    {
      slug: "coin",
      nome: "coin",
      tipo: "Finanças pessoais",
      corClara: "#0E8A5F",
      corEscura: "#3FD39C",
      ano: "2025 — atual",
      papel: "Projeto pessoal, do modelo de dados ao deploy no homelab.",
      status: "Em uso diário",
      link: null,
      resumo: "Saldo do mês, cartão de crédito, gastos fixos, dívidas e meta de patrimônio num app só, feito para o celular.",
      problema: "Controlar dinheiro em planilha funciona até o cartão de crédito entrar na conta. A fatura não fecha no mesmo dia todo mês, compras antigas são editadas e o total cobrado muda, e não dá para ver de uma vez quanto sobra no mês, quanto já está comprometido e se a meta de patrimônio está no caminho.",
      solucao: "Um app web instalável no celular que separa o realizado do previsto, trata a fatura do cartão como algo que você fecha (e que depois disso não muda mais) e mostra, na tela inicial, como o mês está indo em relação ao anterior.",
      funcionalidades: [
        {
          titulo: "Visão do mês",
          texto: "Saldo, receita e gasto comparados ao mês anterior, com insights, fatura aberta e gasto por categoria."
        },
        {
          titulo: "Cartão de crédito",
          texto: "Faturas fechadas, a aberta e as previstas, com comparativo em barras e as compras de cada uma."
        },
        {
          titulo: "Lançamentos",
          texto: "Filtros por tipo, categoria, forma de pagamento e período; realizados e futuros lado a lado."
        },
        {
          titulo: "Fixos e anuais",
          texto: "Aluguel, assinaturas, IPVA e IPTU cadastrados uma vez, com histórico de pagamentos."
        },
        {
          titulo: "Dívidas",
          texto: "O saldo devedor é acompanhado e a dívida é dada como quitada sozinha quando chega a zero."
        },
        {
          titulo: "Planejamento",
          texto: "Meta de patrimônio com sub-objetivos, gráfico de trajetória, teto de gasto e orçamento por categoria."
        },
        {
          titulo: "Histórico",
          texto: "Os últimos 12 meses de receita, gasto e saldo, em resumo e tabela."
        },
        {
          titulo: "Backup",
          texto: "Exportação em CSV e backup completo em ZIP quando quiser."
        }
      ],
      decisoes: [
        {
          titulo: "Dinheiro em centavos inteiros",
          texto: "Todo valor é integer de centavos no banco; a conversão para reais acontece só na tela. Sem erro de ponto flutuante."
        },
        {
          titulo: "Fatura fechada é imutável",
          texto: "Fechar a fatura carimba as compras e congela o total. Editar uma compra antiga não muda o que já foi cobrado."
        },
        {
          titulo: "Testes contra Postgres de verdade",
          texto: "Vitest com PGlite (Postgres em WASM) rodando as migrations reais, sem mock de banco."
        },
        {
          titulo: "Isolamento por usuário",
          texto: "Uma única camada monta queries e toda query filtra pelo usuário da sessão."
        },
        {
          titulo: "Migração sem susto",
          texto: "Saiu de SQLite para Postgres com script de conferência (contagens e somas) como portão, e rollback pronto."
        }
      ],
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "PostgreSQL 17",
        "Drizzle ORM",
        "Tailwind 4",
        "Vitest",
        "PGlite",
        "Recharts",
        "Docker",
        "Prometheus"
      ],
      prints: [
        {
          arquivo: "home.jpg",
          legenda: "Visão do mês",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "cartao.jpg",
          legenda: "Faturas do cartão: fechadas, aberta e previstas",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "planejamento.jpg",
          legenda: "Meta de patrimônio, sub-objetivos e trajetória",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "historico.jpg",
          legenda: "Panorama dos últimos 12 meses",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "lancamentos.jpg",
          legenda: "Lançamentos com filtros",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "dividas.jpg",
          legenda: "Dívidas, com quitação automática",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "sobre.jpg",
          legenda: "Página pública de apresentação",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "home-mobile.jpg",
          legenda: "Início no celular",
          area: "app",
          formato: "mobile"
        },
        {
          arquivo: "lancamentos-mobile.jpg",
          legenda: "Lançamentos no celular",
          area: "app",
          formato: "mobile"
        },
        {
          arquivo: "cartao-mobile.jpg",
          legenda: "Cartão no celular",
          area: "app",
          formato: "mobile"
        }
      ]
    },
    {
      slug: "nutritrack",
      nome: "NutriTrack",
      tipo: "Acompanhamento nutricional e físico",
      corClara: "#2F7A50",
      corEscura: "#6CCB94",
      ano: "2026 — atual",
      papel: "Projeto pessoal, com arquitetura documentada e entregue em fases.",
      status: "Fase 5 de desenvolvimento",
      link: null,
      resumo: "Diário alimentar com a tabela TACO, receitas, planejamento da semana, marmitas, lista de compras, treinos, sono e evolução do peso.",
      problema: "Os apps de dieta mais conhecidos usam bases de alimentos estrangeiras, escondem funções atrás de assinatura e tratam dado faltante como zero, o que deixa o total do dia menor do que é. Planejar a semana, as marmitas e a lista de compras ficava em outros lugares.",
      solucao: "Uma plataforma pessoal com a tabela TACO (alimentos brasileiros) importada, produtos por código de barras via Open Food Facts e tudo o que vem depois do registro: receitas, semana planejada, marmitas, compras, atividades e a evolução ao longo do tempo.",
      funcionalidades: [
        {
          titulo: "Diário alimentar",
          texto: "Registro por refeição, totais calculados no servidor, porções caseiras e cópia de refeição de outro dia."
        },
        {
          titulo: "Banco de alimentos",
          texto: "TACO, Open Food Facts e alimentos próprios, com busca sem acento e tolerante a erro de digitação."
        },
        {
          titulo: "Receitas",
          texto: "Calculadas pelos ingredientes e pelo peso final preparado, por porção e por 100 g."
        },
        {
          titulo: "Planejamento",
          texto: "Semana planejada × registrada, marmitas e lista de compras por seção do mercado."
        },
        {
          titulo: "Evolução",
          texto: "Peso, medidas e consumo com média móvel de 7 dias e projeção com faixa de incerteza."
        },
        {
          titulo: "Metas com estimativa",
          texto: "Sugestão de calorias pela fórmula e, com dados suficientes, pelo gasto observado nos registros."
        },
        {
          titulo: "Atividades e hábitos",
          texto: "Treinos, sono e água, com metas semanais e resumo de consistência."
        }
      ],
      decisoes: [
        {
          titulo: "Sem dado não é zero",
          texto: "Nutriente que a fonte não informa fica vazio, e o total com item incompleto aparece marcado."
        },
        {
          titulo: "Decimal, não float",
          texto: "Nutrientes em Decimal no Postgres e cálculo com decimal.js; arredonda só na exibição."
        },
        {
          titulo: "Histórico não se reescreve",
          texto: "Cada item do diário guarda os valores da época e cada dia é comparado com a meta vigente naquele dia."
        },
        {
          titulo: "Isolamento testado",
          texto: "Testes de integração no CI tentam ler dados de outra conta; repositórios só recebem o usuário da sessão."
        },
        {
          titulo: "Container mínimo",
          texto: "Imagem standalone, usuário sem privilégios, sistema de arquivos só leitura e capabilities removidas."
        }
      ],
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "PostgreSQL 18",
        "Prisma 7",
        "Better Auth",
        "Zod 4",
        "shadcn/ui",
        "Recharts",
        "Vitest",
        "Docker",
        "GitHub Actions"
      ],
      prints: [
        {
          arquivo: "dashboard.jpg",
          legenda: "Início: calorias que restam, macros, peso e água do dia",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "diario.jpg",
          legenda: "Diário por refeição, com alimentos da TACO",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "evolucao.jpg",
          legenda: "Evolução do peso com média móvel, meta e projeção",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "planejamento.jpg",
          legenda: "Semana planejada com receitas, comparada à meta",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "compras.jpg",
          legenda: "Lista de compras da semana, separada por seção do mercado",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "receitas.jpg",
          legenda: "Receita: valores por porção, por 100 g e total, calculados pelos ingredientes",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "alimentos.jpg",
          legenda: "Banco de alimentos: TACO, Open Food Facts e próprios",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "sobre.jpg",
          legenda: "Página pública de apresentação",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "dashboard-mobile.jpg",
          legenda: "Início no celular",
          area: "app",
          formato: "mobile"
        },
        {
          arquivo: "diario-mobile.jpg",
          legenda: "Diário no celular",
          area: "app",
          formato: "mobile"
        },
        {
          arquivo: "evolucao-mobile.jpg",
          legenda: "Evolução no celular",
          area: "app",
          formato: "mobile"
        }
      ]
    },
    {
      slug: "maratona",
      nome: "Maratona",
      tipo: "Rastreador de séries",
      corClara: "#B45309",
      corEscura: "#F5A524",
      ano: "2026 — atual",
      papel: "Projeto pessoal, primeiro app a usar a plataforma de deploy comum.",
      status: "Em produção no homelab",
      link: null,
      resumo: "Mostra o que falta assistir e o que estreia nas séries que você acompanha, episódio por episódio, sem feed nem recomendação.",
      problema: "Acompanhar várias séries ao mesmo tempo vira confusão: em que episódio parei, quando volta a próxima temporada, o que já terminou e dá para maratonar. Os apps existentes viraram rede social, e marcar manualmente \"assistindo\" ou \"quero ver\" sempre divergia do que eu tinha visto de fato.",
      solucao: "Um app que copia o catálogo da TVMaze para o próprio banco, registra cada episódio visto e deriva todo o resto (continuar, em dia, concluída). Um worker sincroniza o que mudou uma vez por dia, respeitando o limite da API.",
      funcionalidades: [
        {
          titulo: "Minha lista",
          texto: "Primeiro o que dá para assistir agora; um toque em \"Assisti T2E07\" e o progresso anda."
        },
        {
          titulo: "Estreias",
          texto: "Agenda dos próximos episódios só do que você acompanha, com estreias e finais de temporada."
        },
        {
          titulo: "Buscar",
          texto: "Catálogo da TVMaze com séries e animes; adicionar importa todos os episódios de uma vez."
        },
        {
          titulo: "Meu ano",
          texto: "Episódios vistos, horas de tela e séries encerradas que dá para maratonar até o fim."
        }
      ],
      decisoes: [
        {
          titulo: "Catálogo espelhado, não proxy",
          texto: "A lista precisa do progresso de todos os títulos a cada abertura; com catálogo local, é uma consulta só."
        },
        {
          titulo: "Sync incremental em fila",
          texto: "BullMQ consulta só o que mudou na TVMaze e o worker escoa no ritmo que a API aguenta."
        },
        {
          titulo: "Rate limit compartilhado",
          texto: "Token bucket no Redis (15 req/10s), porque o limite é por IP e app e worker saem do mesmo host."
        },
        {
          titulo: "Estado derivado",
          texto: "Nada de campo \"assistindo\": o status sai do progresso por episódio e nunca diverge."
        },
        {
          titulo: "Observável desde o começo",
          texto: "Métricas Prometheus próprias e 13 regras de alerta para o que falha em silêncio, como fila parada."
        }
      ],
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "PostgreSQL 17",
        "Drizzle ORM",
        "Redis 8",
        "BullMQ",
        "Zod",
        "Docker",
        "Prometheus",
        "Grafana",
        "GitHub Actions"
      ],
      prints: [
        {
          arquivo: "lista.jpg",
          legenda: "Minha lista: o que dá para assistir agora, com o próximo episódio a um toque",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "serie.jpg",
          legenda: "Detalhe da série: progresso, o que falta e episódios por temporada",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "estreias.jpg",
          legenda: "Estreias: próximos episódios do que você acompanha, por dia",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "meu-ano.jpg",
          legenda: "Meu ano: episódios vistos, horas de tela e séries para maratonar",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "buscar.jpg",
          legenda: "Busca no catálogo da TVMaze",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "sobre.jpg",
          legenda: "Página pública com as decisões técnicas",
          area: "app",
          formato: "desktop"
        },
        {
          arquivo: "lista-mobile.jpg",
          legenda: "Minha lista no celular",
          area: "app",
          formato: "mobile"
        },
        {
          arquivo: "serie-mobile.jpg",
          legenda: "Episódios da série no celular",
          area: "app",
          formato: "mobile"
        },
        {
          arquivo: "estreias-mobile.jpg",
          legenda: "Estreias no celular",
          area: "app",
          formato: "mobile"
        },
        {
          arquivo: "meu-ano-mobile.jpg",
          legenda: "Meu ano no celular",
          area: "app",
          formato: "mobile"
        }
      ]
    },
    {
      slug: "eletrica",
      nome: "Estudo de Eletricidade",
      tipo: "Calculadoras e simulador de circuitos",
      corClara: "#A16207",
      corEscura: "#FFC20E",
      ano: "2026",
      papel: "Projeto pessoal, uma página só, sem dependências.",
      status: "No ar",
      link: { href: "https://eletrica.devlhs.com.br", rotulo: "eletrica.devlhs.com.br" },
      resumo: "Lei de Ohm, resistividade, queda de tensão e resistência equivalente com fórmula, exemplo e exercícios, e um editor que simplifica circuitos passo a passo.",
      problema: "Calculadora pronta dá o número, mas não mostra o caminho. Para estudar eletricidade básica é preciso ver a fórmula, entender cada símbolo, conferir um exemplo resolvido e, em circuitos com vários resistores, enxergar em que ordem eles se juntam até sobrar um só.",
      solucao: "Uma página com sete abas. Cada uma traz fórmula, legenda dos símbolos, explicação, exemplo resolvido e exercícios com resposta antes da calculadora. Na aba Circuito, você desenha os resistores numa grade e uma animação mostra a redução, com uma lousa ao lado escrevendo as contas.",
      funcionalidades: [
        { titulo: "Lei de Ohm e potência", texto: "Preencha dois campos quaisquer e a página acha os outros dois." },
        { titulo: "Resistividade", texto: "R = ρ · L / A com correção por temperatura e tabela de materiais." },
        { titulo: "Queda de tensão", texto: "Queda no cabo e a menor seção que respeita o limite escolhido." },
        { titulo: "Equivalente", texto: "Série e paralelo com desenho do circuito e fórmulas de atalho." },
        { titulo: "Circuito", texto: "Grade com diagonais e fios, desfazer e refazer, atalhos de teclado e tela cheia. A redução é animada, com lousa." },
        { titulo: "Notação e matemática", texto: "Notação científica, prefixos, frações com simplificação, regra de três e porcentagem." },
      ],
      decisoes: [
        { titulo: "Sem dependências", texto: "HTML, CSS e JavaScript num arquivo só. Abre direto no navegador e é publicado no GitHub Pages." },
        { titulo: "Pontes por análise nodal", texto: "Quando série e paralelo não reduzem mais (ponte de Wheatstone), o equivalente sai de um sistema linear resolvido por eliminação de Gauss." },
        { titulo: "Fios viram um nó só", texto: "Pontos ligados por fio são unidos com union-find antes da redução, então o desenho pode ter quantos fios quiser." },
        { titulo: "Prefixos nos campos", texto: "4k7, 250m, 10µ e 2M são aceitos; m minúsculo é mili e M maiúsculo é mega." },
        { titulo: "Estado no endereço e no navegador", texto: "Cada aba tem âncora na URL e navegação por setas; o circuito desenhado fica salvo no navegador." },
      ],
      stack: ["HTML", "CSS", "JavaScript", "SVG", "GitHub Pages"],
      prints: [
        { arquivo: "circuito-lousa.jpg", legenda: "Redução do circuito passo a passo, com a lousa escrevendo as contas", area: "app", formato: "desktop" },
        { arquivo: "circuito.jpg", legenda: "Editor de circuito: resistores e fios numa grade entre A e B", area: "app", formato: "desktop" },
        { arquivo: "queda.jpg", legenda: "Queda de tensão e seção mínima do cabo", area: "app", formato: "desktop" },
        { arquivo: "equivalente.jpg", legenda: "Resistência equivalente em série e em paralelo", area: "app", formato: "desktop" },
        { arquivo: "matematica.jpg", legenda: "Frações com resultado simplificado e passo a passo", area: "app", formato: "desktop" },
        { arquivo: "ohm.jpg", legenda: "1ª Lei de Ohm: fórmula e legenda dos símbolos", area: "app", formato: "desktop" },
        { arquivo: "circuito-lousa-mobile.jpg", legenda: "Redução com lousa no celular", area: "app", formato: "mobile" },
        { arquivo: "circuito-mobile.jpg", legenda: "Editor de circuito no celular", area: "app", formato: "mobile" },
        { arquivo: "ohm-mobile.jpg", legenda: "Início no celular", area: "app", formato: "mobile" },
      ],
    },
    {
      slug: "trippin",
      nome: "Trippin’",
      tipo: "Calendário de viagens em grupo",
      corClara: "#7D561C",
      corEscura: "#D9A55A",
      ano: "2026 — atual",
      papel: "Projeto pessoal, do design system à infraestrutura como código no homelab.",
      status: "Em desenvolvimento",
      link: { href: "https://trippin.devlhs.com.br", rotulo: "trippin.devlhs.com.br" },
      resumo: "Calendário de viagens pessoal e compartilhável: o ano inteiro num só lugar, com roteiro, gastos planejados e reais, checklist e agendas em grupo.",
      problema: "Planejar viagens fica espalhado entre planilha de gastos, notas com o roteiro, lista de lugares salvos no mapa e um grupo de mensagens com a família ou os amigos. Ninguém enxerga o ano de uma vez, nem quanto já foi gasto por pessoa.",
      solucao: "Um app pensado para o celular, com calendário do ano, trips com roteiro, gastos (planejado contra real, por pessoa), checklist, lista de lugares que quero visitar e agendas compartilhadas com papéis de dono, editor e leitor. Está em desenvolvimento: a página pública, o design system e as telas de acesso já estão no ar; autenticação, trips e agendas compartilhadas são as próximas etapas.",
      funcionalidades: [
        { titulo: "Página pública e acesso", texto: "Apresentação do produto, termos, privacidade e as telas de entrar, cadastro e recuperação de senha, já no ar." },
        { titulo: "Calendário do ano (em breve)", texto: "Os doze meses numa tela, com as trips de cada mês e os dias que faltam para a próxima." },
        { titulo: "Trips (em breve)", texto: "Datas, roteiro, checklist e gastos num lugar só, planejado contra real e dividido por pessoa." },
        { titulo: "Quero visitar (em breve)", texto: "Lista de lugares salvos, com link e observação, para virar trip depois." },
        { titulo: "Agendas em grupo (em breve)", texto: "Compartilhe com família e amigos, com papel de dono, editor ou leitor." },
        { titulo: "Claro e escuro", texto: "Tema pelo sistema, com troca manual, e contraste AA conferido nos dois." },
      ],
      decisoes: [
        { titulo: "Monolito Next.js", texto: "Páginas, autenticação e backend num app só (App Router e Server Actions), sem API separada nem microsserviços." },
        { titulo: "Privacidade desde o início", texto: "Planejado: senha com Argon2id e dados pessoais cifrados com AES-256-GCM, com HMAC do e-mail para busca e unicidade." },
        { titulo: "Migrations compatíveis com a versão anterior", texto: "Só adicionam coluna ou tabela, então o rollback de imagem nunca precisa desfazer o banco." },
        { titulo: "Sem porta aberta no roteador", texto: "O app roda numa LXC dedicada e sem privilégios, com Docker, num Proxmox. O acesso público vem por Cloudflare Tunnel, e o cloudflared fica em outra LXC." },
        { titulo: "Firewall no Proxmox", texto: "O Docker contorna o ufw, então a regra fica no host: a porta do app só aceita o IP do cloudflared, o SSH só a rede local, e a saída para a LAN é bloqueada." },
        { titulo: "CI/CD com varredura", texto: "Lint, typecheck, migrations duas vezes num Postgres de serviço e build. Depois, gitleaks para segredos e Trivy na imagem, que barra CVE crítica. Actions fixadas por SHA e Dependabot." },
        { titulo: "Deploy por SHA, de dentro para fora", texto: "A imagem vai para o GHCR e um runner dentro da LXC faz o deploy, sem SSH de fora. O script trava, faz pg_dump, roda as migrations numa transação, espera o healthcheck e volta sozinho para a imagem anterior se falhar." },
        { titulo: "Infraestrutura como código", texto: "Ansible cria a LXC, as regras de firewall, o Docker, o runner e o SSH endurecido, com segredos no Ansible Vault e nunca no GitHub. Validado recriando uma LXC descartável do zero." },
        { titulo: "Backup testado e alertas", texto: "pg_dump diário verificado, vzdump toda noite para o NAS por NFS e restauração automática testada todo mês. Avisos no Telegram para backup, deploy e disco." },
        { titulo: "Auditoria de segurança", texto: "Script somente leitura que lista PASS, WARN e FAIL e já apontou configurações erradas de verdade." },
      ],
      stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL 17", "Drizzle ORM", "CSS Modules", "Docker", "Cloudflare Tunnel", "Proxmox", "Ansible", "GitHub Actions", "Trivy"],
      prints: [
        { arquivo: "home.jpg", legenda: "Página pública: o ano de viagens num calendário e como funciona", area: "app", formato: "desktop" },
        { arquivo: "home-escuro.jpg", legenda: "A mesma página no tema escuro", area: "app", formato: "desktop" },
        { arquivo: "entrar.jpg", legenda: "Tela de entrada", area: "app", formato: "desktop" },
        { arquivo: "home-mobile.jpg", legenda: "Página pública no celular", area: "app", formato: "mobile" },
        { arquivo: "cadastro-mobile.jpg", legenda: "Cadastro no celular, com requisitos de senha ao vivo", area: "app", formato: "mobile" },
      ],
    },
  ],
};
