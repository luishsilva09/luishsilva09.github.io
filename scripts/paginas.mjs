/*
 * Modelos das páginas. Recebem o conteúdo (conteudo/*.mjs) e devolvem HTML
 * completo: o site funciona e é lido por buscadores e prévias de link sem JS.
 */

import { createHash } from "node:crypto";

export const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/* ---------- rotas ---------- */
export const rotaHome = (lang) => (lang === "en" ? "/en/" : "/");
export const rotaServicos = (lang) => (lang === "en" ? "/en/services/" : "/servicos/");
export const linkWhats = (site, texto) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;
export const rotaProjeto = (lang, slug) => (lang === "en" ? `/en/projects/${slug}/` : `/projetos/${slug}/`);

/* ---------- ícones ---------- */
const svg = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICONES = {
  deploy: svg('<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 19h16"/>'),
  grafico: svg('<path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/>'),
  servidor: svg('<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/>'),
  documento: svg('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>'),
  site: svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
  sistema: svg('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>'),
  automacao: svg('<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>'),
  manutencao: svg('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
  seta: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  conversa: svg('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5.1A8 8 0 1 1 21 12z"/>'),
  voltar: svg('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
  problema: svg('<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>'),
  solucao: svg('<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>'),
  sol: '<svg class="sol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  lua: '<svg class="lua" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
};

const wordmark = '<span class="wordmark"><span class="dev">dev</span><span class="lhs">lhs</span></span>';
const corProjeto = (p) => `--p-claro:${p.corClara};--p-escuro:${p.corEscura}`;

/* ---------- política de segurança de conteúdo ----------
 * O GitHub Pages não deixa configurar cabeçalhos HTTP, então a CSP vai em
 * <meta>. Só carrega o que é do próprio site, as fontes do Google e o
 * analytics da Cloudflare. O único script embutido (o que aplica o tema antes
 * de pintar a página) é liberado pelo hash, calculado aqui a cada build.
 * Ao incluir um recurso de outro domínio, libere-o aqui também.
 */
const SCRIPT_TEMA = 'try{document.documentElement.dataset.theme=localStorage.getItem("tema")==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}';
const CSP = [
  "default-src 'self'",
  `script-src 'self' 'sha256-${createHash("sha256").update(SCRIPT_TEMA).digest("base64")}' https://static.cloudflareinsights.com`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src https://cloudflareinsights.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

/* ---------- layout ---------- */
export function layout({ c, site, titulo, descricao, caminho, alternativo, ogImagem, jsonld, corpo, classeBody = "", estiloBody = "", indexar = true }) {
  const url = site.dominio + caminho;
  const urlPt = site.dominio + (c.lang === "en" ? alternativo : caminho);
  const urlEn = site.dominio + (c.lang === "en" ? caminho : alternativo);
  const analytics = site.analyticsToken
    ? `\n  <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "${esc(site.analyticsToken)}"}'></script>`
    : "";
  return `<!doctype html>
<html lang="${c.lang}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Security-Policy" content="${CSP}">
  <script>${SCRIPT_TEMA}</script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(titulo)}</title>
  <meta name="description" content="${esc(descricao)}">
  <meta name="author" content="${esc(c.perfil.nome)}">
  <meta name="robots" content="${indexar ? "index, follow, max-image-preview:large, max-snippet:-1" : "noindex"}">
  <link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="pt-BR" href="${urlPt}">
  <link rel="alternate" hreflang="en" href="${urlEn}">
  <link rel="alternate" hreflang="x-default" href="${urlPt}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="devlhs">
  <meta property="og:title" content="${esc(titulo)}">
  <meta property="og:description" content="${esc(descricao)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${site.dominio}${ogImagem}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(titulo)}">
  <meta property="og:locale" content="${c.lang === "en" ? "en_US" : "pt_BR"}">
  <meta property="og:locale:alternate" content="${c.lang === "en" ? "pt_BR" : "en_US"}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(titulo)}">
  <meta name="twitter:description" content="${esc(descricao)}">
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <meta name="theme-color" content="#080A0E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500&family=Schibsted+Grotesk:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/style.css">
  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>${analytics}
</head>
<body${classeBody ? ` class="${classeBody}"` : ""}${estiloBody ? ` style="${estiloBody}"` : ""}>
  <a class="pular" href="#conteudo">${esc(c.ui.pular)}</a>
${cabecalho(c, site, alternativo)}
  <main id="conteudo" tabindex="-1">
${corpo}
  </main>
  <footer class="rodape wrap"><a class="assinatura" href="${rotaHome(c.lang)}" aria-label="${esc(c.ui.marcaAria)}"><img src="/assets/logo-mark.svg" alt="" width="32" height="32">${wordmark}</a><span>${esc(c.ui.rodape)}${site.cnpj ? ` · CNPJ ${esc(site.cnpj)}` : ""}</span></footer>
  <script src="/assets/app.js" defer></script>
</body>
</html>
`;
}

function cabecalho(c, site, alternativo) {
  const casa = rotaHome(c.lang);
  const n = c.ui.nav, id = c.ui.ids;
  return `  <header class="topo">
    <div class="wrap">
      <a class="marca" href="${casa}" aria-label="${esc(c.ui.marcaAria)}"><img src="/assets/logo-mark.svg" alt="" width="36" height="36">${wordmark}</a>
      <div class="direita">
        <nav aria-label="${c.lang === "en" ? "Main" : "Principal"}">
          <a class="opcional" href="${casa}#${id.projetos}">${esc(n.projetos)}</a>
          <a href="${rotaServicos(c.lang)}">${esc(n.servicos)}</a>
          <a class="opcional" href="${casa}#${id.infra}">${esc(n.infra)}</a>
          <a class="opcional" href="${casa}#${id.experiencia}">${esc(n.experiencia)}</a>
          <a class="opcional" href="${casa}#${id.contato}">${esc(n.contato)}</a>
        </nav>
        <a class="falar" href="${esc(linkWhats(site, c.ui.mensagemWhats))}" target="_blank" rel="noopener">${ICONES.conversa}<span>${esc(n.falar)}</span></a>
        <a class="idioma" href="${alternativo}" hreflang="${c.lang === "en" ? "pt-BR" : "en"}" lang="${c.lang === "en" ? "pt-BR" : "en"}" aria-label="${esc(c.ui.idioma.aria)}">${esc(c.ui.idioma.rotulo)}</a>
        <button class="tema" type="button" aria-label="${esc(c.ui.temaAria)}">${ICONES.sol}${ICONES.lua}</button>
      </div>
    </div>
  </header>`;
}

/* ---------- home ---------- */
export function home({ c, site, img }) {
  const h = c.home, id = c.ui.ids, v = site.vitrine;
  const contatoBotoes = `
            <a class="btn principal" href="mailto:${site.email}">${esc(site.email)}</a>
            <a class="btn" href="${esc(linkWhats(site, c.ui.mensagemWhats))}" target="_blank" rel="noopener">${esc(c.ui.whats)}</a>
            <a class="btn" href="${site.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
            <a class="btn" href="${site.github}" target="_blank" rel="noopener">GitHub</a>
            <a class="btn" href="${site.curriculo}" download>${esc(c.ui.cvCurto)}</a>`;
  const projetos = c.projetos.map((p) => {
    const capa = capaDe(p), cel = celularDe(p);
    return `
          <a class="projeto-linha" href="${rotaProjeto(c.lang, p.slug)}" style="${corProjeto(p)}">
            <div class="texto">
              <span class="tipo">${esc(p.tipo)}</span>
              <h3>${esc(p.nome)}</h3>
              <p class="resumo">${esc(p.resumo)}</p>
              ${p.caso ? `<dl class="caso">
                <div><dt>${esc(c.ui.caso.problema)}</dt><dd>${esc(p.caso.problema)}</dd></div>
                <div><dt>${esc(c.ui.caso.resultado)}</dt><dd>${esc(p.caso.resultado)}</dd></div>
              </dl>` : ""}
              <div class="meta">
                <span class="chip status">${esc(p.status)}</span>
                ${p.stack.slice(0, 3).map((s) => `<span class="chip">${esc(s)}</span>`).join("")}
              </div>
              <span class="ver">${esc(c.ui.verProjeto)} ${ICONES.seta}</span>
            </div>
            <div class="palco">
              <div class="tela">${img(p.slug, capa.arquivo, { alt: capa.legenda, sizes: "(max-width: 860px) 92vw, 640px" })}</div>
              ${cel ? `<div class="cel" aria-hidden="true">${img(p.slug, cel.arquivo, { alt: "", sizes: "160px" })}</div>` : ""}
            </div>
          </a>`;
  }).join("");

  return `    <section class="hero">
      <div class="wrap">
        <div>
          <p class="quem">${esc(h.quem)}</p>
          <h1>${esc(h.titulo)}</h1>
          <p class="intro">${esc(h.intro)}</p>
          <div class="caminhos">
            <div>
              <p>${esc(h.caminhos.empresas.rotulo)}</p>
              <div class="botoes">
                <a class="btn principal" href="${rotaServicos(c.lang)}">${esc(h.caminhos.empresas.orcamento)}</a>
                <a class="btn" href="${esc(linkWhats(site, c.ui.mensagemWhats))}" target="_blank" rel="noopener">${esc(h.caminhos.empresas.whats)}</a>
              </div>
            </div>
            <div>
              <p>${esc(h.caminhos.recrutadores.rotulo)}</p>
              <div class="botoes">
                <a class="btn" href="${site.curriculo}" download>${esc(h.caminhos.recrutadores.cv)}</a>
                <a class="btn" href="#${id.experiencia}">${esc(h.caminhos.recrutadores.experiencia)}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="vitrine" aria-hidden="true">
          <figure class="atras">${img(v.atras[0], v.atras[1], { alt: "", sizes: "480px", eager: true })}</figure>
          <figure class="frente">${img(v.frente[0], v.frente[1], { alt: "", sizes: "(max-width: 900px) 84vw, 520px", eager: true, prioridade: true })}</figure>
          <figure class="cel">${img(v.celular[0], v.celular[1], { alt: "", sizes: "160px", eager: true })}</figure>
        </div>
      </div>
    </section>

    <div class="wrap esteira-wrap">
      <div class="esteira" role="group" aria-label="${esc(h.esteiraAria)}">
        <ol>
          ${h.esteira.map(([t, s]) => `<li><b>${esc(t)}</b><span>${esc(s)}</span></li>`).join("\n          ")}
        </ol>
      </div>
    </div>

    <section class="secao" id="${id.projetos}" aria-labelledby="t-projetos">
      <div class="wrap">
        <div class="cabeca">
          <h2 id="t-projetos">${esc(h.projetosTitulo)}</h2>
          <p class="sub">${esc(h.projetosSub)}</p>
        </div>
        <div class="projetos">${projetos}
        </div>
      </div>
    </section>

    <section class="secao" aria-labelledby="t-servicos-home">
      <div class="wrap">
        <div class="cabeca">
          <h2 id="t-servicos-home">${esc(h.servicosTitulo)}</h2>
          <p class="sub">${esc(h.servicosSub)}</p>
        </div>
        <div class="servicos-home">
          ${c.servicos.lista.map((x) => `<div>
            <span class="ico">${ICONES[x.icone]}</span>
            <h3>${esc(x.titulo)}</h3>
            <p>${esc(x.texto)}</p>
          </div>`).join("\n          ")}
        </div>
        <div class="servicos-home-cta">
          <p>${esc(h.servicosBeneficio)}</p>
          <div class="botoes">
            <a class="btn principal" href="${rotaServicos(c.lang)}">${esc(h.servicosBotao)}</a>
            <a class="btn" href="${esc(linkWhats(site, c.ui.mensagemWhats))}" target="_blank" rel="noopener">${esc(c.ui.chamada.whats)}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="secao faixa" id="${id.infra}" aria-labelledby="t-infra">
      <div class="wrap">
        <div class="cabeca">
          <h2 id="t-infra">${esc(h.infraTitulo)}</h2>
          <p class="sub">${esc(h.infraSub)}</p>
        </div>
        <div class="infra">
          ${h.infra.map((i) => `<div>
            <span class="ico">${ICONES[i.icone]}</span>
            <h3>${esc(i.titulo)}</h3>
            <p>${i.texto}</p>
          </div>`).join("\n          ")}
        </div>
      </div>
    </section>

    <section class="secao" id="${id.experiencia}" aria-labelledby="t-exp">
      <div class="wrap">
        <h2 id="t-exp" style="margin-bottom:48px">${esc(h.experienciaTitulo)}</h2>
        <ol class="linha-tempo">
          ${h.experiencia.map((e) => `<li${e.atual ? ' class="atual"' : ""}>
            <span class="quando">${esc(e.quando)}</span>
            <div>
              <h3>${esc(e.cargo)}</h3>
              <p class="onde">${esc(e.onde)}</p>
              <ul>
                ${e.itens.map((t) => `<li>${esc(t)}</li>`).join("\n                ")}
              </ul>
            </div>
          </li>`).join("\n          ")}
        </ol>

        <div class="colunas">
          <div>
            <h3>${esc(h.formacaoTitulo)}</h3>
            <dl>
              ${h.formacao.map(([t, d]) => `<div><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join("\n              ")}
            </dl>
          </div>
          <div>
            <h3>${esc(h.habilidadesTitulo)}</h3>
            <dl>
              ${h.habilidades.map(([t, d]) => `<div><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join("\n              ")}
            </dl>
          </div>
        </div>
      </div>
    </section>

    <section class="secao" id="${id.contato}" aria-labelledby="t-contato">
      <div class="wrap">
        <div class="contato-bloco">
          <span class="assinatura"><img src="/assets/logo-mark.svg" alt="" width="32" height="32">${wordmark}</span>
          <h2 id="t-contato">${esc(h.contatoTitulo)}</h2>
          <p>${esc(h.contatoTexto)}</p>
          <div class="botoes">${contatoBotoes}
          </div>
        </div>
      </div>
    </section>`;
}

/* ---------- projeto ---------- */
export const capaDe = (p) => p.prints.find((x) => x.formato === "desktop" && x.area === "app") || p.prints[0];
export const celularDe = (p) => p.prints.find((x) => x.formato === "mobile" && x.area === "app");

export function projeto({ c, site: cfg, p, prox, img, maior }) {
  const u = c.ui, capa = capaDe(p), cel = celularDe(p);
  const temAdmin = p.prints.some((x) => x.area === "admin");
  const site = Boolean(p.link);

  const figura = (x) => `
              <figure>
                <button class="moldura" type="button" data-src="${maior(p.slug, x.arquivo)}" data-legenda="${esc(x.legenda)}" aria-label="${esc(u.ampliar)}: ${esc(x.legenda)}">${img(p.slug, x.arquivo, { alt: x.legenda, sizes: x.formato === "mobile" ? "220px" : "(max-width: 680px) 92vw, 560px" })}</button>
                <figcaption>${esc(x.legenda)}</figcaption>
              </figure>`;
  const painel = (area) => {
    const lista = p.prints.filter((x) => x.area === area && x !== capa);
    const d = lista.filter((x) => x.formato !== "mobile"), m = lista.filter((x) => x.formato === "mobile");
    return (d.length ? `<div class="grade">${d.map(figura).join("")}\n            </div>` : "") +
           (m.length ? `<div class="celulares">${m.map(figura).join("")}\n            </div>` : "");
  };

  const rotulo = { app: site ? u.abas.appSite : u.abas.app, admin: site ? u.abas.adminSite : u.abas.admin };
  const galeria = temAdmin
    ? `<div class="abas" role="tablist" aria-label="${esc(u.abas.aria)}">
            <button role="tab" id="aba-app" aria-controls="painel-app" aria-selected="true" tabindex="0">${esc(rotulo.app)}</button>
            <button role="tab" id="aba-admin" aria-controls="painel-admin" aria-selected="false" tabindex="-1">${esc(rotulo.admin)}</button>
          </div>
          <div class="galeria" role="tabpanel" id="painel-app" aria-labelledby="aba-app" tabindex="0">${painel("app")}</div>
          <div class="galeria" role="tabpanel" id="painel-admin" aria-labelledby="aba-admin" tabindex="0" hidden>${painel("admin")}</div>`
    : `<div class="galeria">${painel("app")}</div>`;

  return `    <div class="proj-banda">
      <header class="proj-topo wrap">
        <a class="voltar" href="${rotaHome(c.lang)}#${u.ids.projetos}">${ICONES.voltar} ${esc(u.todosProjetos)}</a>
        <div class="tipo">${esc(p.tipo)}</div>
        <h1>${esc(p.nome)}</h1>
        <p class="resumo">${esc(p.resumo)}</p>
        <dl class="fichas">
          <div><dt>${esc(u.fichas.status)}</dt><dd class="status">${esc(p.status)}</dd></div>
          <div><dt>${esc(u.fichas.periodo)}</dt><dd>${esc(p.ano)}</dd></div>
          <div><dt>${esc(u.fichas.papel)}</dt><dd>${esc(p.papel)}</dd></div>
        </dl>
        ${p.link ? `<div class="botoes"><a class="btn cor" href="${p.link.href}" target="_blank" rel="noopener">${esc(u.abrir)} ${esc(p.link.rotulo)}</a></div>` : ""}
      </header>
      <div class="wrap"><div class="capa-palco"><div class="capa">${img(p.slug, capa.arquivo, { alt: capa.legenda, sizes: "(max-width: 1180px) 94vw, 1100px", eager: true, prioridade: true })}</div>${cel ? `<div class="cel" aria-hidden="true">${img(p.slug, cel.arquivo, { alt: "", sizes: "190px", eager: true })}</div>` : ""}</div></div>
    </div>

    <section class="secao">
      <div class="wrap ps">
        <div class="problema"><h2>${ICONES.problema}${esc(u.problema)}</h2><p>${esc(p.problema)}</p></div>
        <div class="solucao"><h2>${ICONES.solucao}${esc(u.solucao)}</h2><p>${esc(p.solucao)}</p></div>
      </div>
    </section>

    <section class="secao faixa" aria-labelledby="t-telas">
      <div class="wrap">
        <h2 id="t-telas">${esc(u.comoFicou)}</h2>
        <p class="sub">${esc(!site ? u.comoFicouPrivado : temAdmin ? u.comoFicouLink : u.comoFicouSite)}</p>
        ${galeria}
      </div>
    </section>

    <section class="secao" aria-labelledby="t-funcs">
      <div class="wrap">
        <h2 id="t-funcs">${esc(u.funcionalidades)}</h2>
        <p class="sub">${esc(u.funcionalidadesSub)}</p>
        <div class="funcs">${p.funcionalidades.map((f) => `<div><h3>${esc(f.titulo)}</h3><p>${esc(f.texto)}</p></div>`).join("")}</div>
      </div>
    </section>

    <section class="secao faixa" aria-labelledby="t-dec">
      <div class="wrap">
        <h2 id="t-dec">${esc(u.decisoes)}</h2>
        <p class="sub">${esc(u.decisoesSub)}</p>
        <ul class="decisoes">${p.decisoes.map((d) => `<li><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></li>`).join("")}</ul>
      </div>
    </section>

    <section class="secao" aria-labelledby="t-stack">
      <div class="wrap">
        <h2 id="t-stack" style="margin-bottom:24px">${esc(u.stack)}</h2>
        <ul class="stack">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      </div>
    </section>

    <section class="secao">
      <div class="wrap">
        <div class="chamada">
          <div>
            <h2>${esc(u.chamada.titulo)}</h2>
            <p>${esc(u.chamada.texto)}</p>
          </div>
          <div class="botoes">
            <a class="btn principal" href="${esc(linkWhats(cfg, u.chamada.mensagem.replace("{projeto}", p.nome)))}" target="_blank" rel="noopener">${esc(u.chamada.whats)}</a>
            <a class="btn" href="${rotaServicos(c.lang)}">${esc(u.chamada.servicos)}</a>
          </div>
        </div>
        <a class="proximo" href="${rotaProjeto(c.lang, prox.slug)}" style="${corProjeto(prox)}">
          <span><span class="small">${esc(u.proximo)}</span><b>${esc(prox.nome)}</b></span>
          <span class="seta">${ICONES.seta}</span>
        </a>
      </div>
    </section>

    <dialog class="zoom" aria-label="${esc(u.ampliar)}">
      <button type="button" class="fechar">${esc(u.fechar)}</button>
      <img alt="">
      <p></p>
    </dialog>`;
}

/* ---------- serviços ---------- */
export function servicos({ c, site }) {
  const s = c.servicos;
  const whats = (msg) => esc(linkWhats(site, msg));
  const botoes = `
            <a class="btn principal" href="${whats(s.mensagem)}" target="_blank" rel="noopener">${esc(s.whats)}</a>
            <a class="btn" href="mailto:${site.email}">${esc(s.email)}</a>`;
  const cartao = (x) => `
          <article id="${x.icone}">
            <span class="ico">${ICONES[x.icone]}</span>
            <h3>${esc(x.titulo)}</h3>
            <p>${esc(x.texto)}</p>
            <ul>
              ${x.itens.map((t) => `<li>${esc(t)}</li>`).join("\n              ")}
            </ul>
            <p class="exemplo">${esc(s.exemplo)}: ${x.exemplo.slug ? `<a href="${rotaProjeto(c.lang, x.exemplo.slug)}">${esc(x.exemplo.texto)}</a>` : esc(x.exemplo.texto)}.</p>
            <a class="pedir" href="${whats(s.mensagemServico.replace("{servico}", x.titulo))}" target="_blank" rel="noopener">${esc(s.pedir)} ${ICONES.seta}</a>
          </article>`;

  return `    <section class="serv-topo">
      <div class="wrap">
        <p class="quem">${esc(s.quem)}</p>
        <h1>${esc(s.titulo)}</h1>
        <p class="intro">${esc(s.intro)}</p>
        <div class="botoes">${botoes}
        </div>
      </div>
    </section>

    <section class="secao" aria-labelledby="t-servicos">
      <div class="wrap">
        <h2 id="t-servicos">${esc(s.listaTitulo)}</h2>
        <p class="sub">${esc(s.listaSub)}</p>
        <div class="servicos">${s.lista.map(cartao).join("")}
        </div>
      </div>
    </section>

    <section class="secao faixa" aria-labelledby="t-como">
      <div class="wrap">
        <h2 id="t-como">${esc(s.comoTitulo)}</h2>
        <p class="sub">${esc(s.comoSub)}</p>
        <ol class="passos">
          ${s.como.map(([t, d]) => `<li><b>${esc(t)}</b><span>${esc(d)}</span></li>`).join("\n          ")}
        </ol>
      </div>
    </section>

    <section class="secao" aria-labelledby="t-faq">
      <div class="wrap">
        <h2 id="t-faq" style="margin-bottom:28px">${esc(s.faqTitulo)}</h2>
        <div class="faq">
          ${s.faq.map(([q, r]) => `<details><summary>${esc(q)}</summary><p>${esc(r)}</p></details>`).join("\n          ")}
        </div>
      </div>
    </section>

    <section class="secao" style="padding-top:0" aria-labelledby="t-contato">
      <div class="wrap">
        <div class="contato-bloco">
          <span class="assinatura"><img src="/assets/logo-mark.svg" alt="" width="32" height="32">${wordmark}</span>
          <h2 id="t-contato">${esc(s.contatoTitulo)}</h2>
          <p>${esc(s.contatoTexto)}</p>
          <div class="botoes">${botoes}
          </div>
        </div>
      </div>
    </section>`;
}

/* ---------- 404 ---------- */
export function naoEncontrado({ pt, en }) {
  return `    <section class="secao nao-encontrado">
      <div class="wrap">
        <p class="codigo" aria-hidden="true">404</p>
        <h1>${esc(pt.ui.naoEncontrado.titulo)}</h1>
        <p class="sub">${esc(pt.ui.naoEncontrado.texto)}</p>
        <div class="botoes"><a class="btn principal" href="/">${esc(pt.ui.naoEncontrado.voltar)}</a></div>
        <div lang="en" class="outro-idioma">
          <h2>${esc(en.ui.naoEncontrado.titulo)}</h2>
          <p class="sub">${esc(en.ui.naoEncontrado.texto)}</p>
          <a class="btn" href="/en/">${esc(en.ui.naoEncontrado.voltar)}</a>
        </div>
      </div>
    </section>`;
}
