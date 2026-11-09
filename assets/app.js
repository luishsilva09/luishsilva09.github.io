/* Monta a lista de projetos (home) e a página de cada projeto a partir de
 * window.PROJETOS (assets/projetos.js). Sem dependências e sem build. */
(function () {
  const raiz = document.documentElement.dataset.raiz || "";
  const P = window.PROJETOS || [];
  // Tema: claro por padrão; o escuro só entra quando a pessoa escolhe.
  const html = document.documentElement;
  const ouvintes = [];
  const escuro = {
    get matches() { return html.dataset.theme === "dark"; },
    addEventListener: (_e, f) => ouvintes.push(f),
  };
  const aplicarTema = (t) => {
    html.dataset.theme = t;
    try { localStorage.setItem("tema", t); } catch {}
    ouvintes.forEach((f) => f());
  };
  document.querySelectorAll(".tema").forEach((b) => {
    b.addEventListener("click", () => aplicarTema(escuro.matches ? "light" : "dark"));
  });

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const corDe = (p) => (escuro.matches ? p.corEscura || p.cor : p.cor);
  const srcPrint = (p, print) => `${raiz}assets/prints/${p.slug}/${print.arquivo}`;

  // Imagem que vira espaço reservado se o arquivo ainda não existir.
  function imagem(p, print) {
    return `<img src="${srcPrint(p, print)}" alt="${esc(print.legenda)}" loading="lazy"
      data-caminho="assets/prints/${p.slug}/${esc(print.arquivo)}" onerror="semPrint(this)">`;
  }
  // Celular sobreposto: se o print não existir, o aparelho some em vez de mostrar o aviso.
  function celular(p) {
    const m = p.prints.find((x) => x.formato === "mobile" && x.area !== "admin");
    if (!m) return "";
    return `<div class="cel" aria-hidden="true"><img src="${srcPrint(p, m)}" alt="" loading="lazy" onerror="this.parentNode.remove()"></div>`;
  }
  const seta = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
  const voltaSeta = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>`;

  window.semPrint = (img) => {
    const btn = img.closest("button");
    if (btn) btn.disabled = true;
    const d = document.createElement("div");
    d.className = "vazio";
    const b = document.createElement("b");
    b.textContent = "Print pendente";
    const t = document.createElement("span");
    t.textContent = img.alt;
    const c = document.createElement("span");
    c.textContent = img.dataset.caminho;
    d.append(b, t, c);
    img.replaceWith(d);
  };

  // barra do topo ganha borda ao rolar
  const topo = document.querySelector(".topo");
  if (topo) {
    const f = () => topo.classList.toggle("rolou", scrollY > 8);
    addEventListener("scroll", f, { passive: true });
    f();
  }

  /* ---------- home ---------- */
  const lista = document.getElementById("lista-projetos");
  if (lista) {
    const render = () => {
      lista.innerHTML = P.map((p) => {
        const capa = p.prints.find((x) => x.formato === "desktop") || p.prints[0];
        return `
        <a class="projeto-linha" href="${raiz}projetos/${p.slug}/" style="--p:${corDe(p)}">
          <div class="texto">
            <span class="tipo">${esc(p.tipo)}</span>
            <h3>${esc(p.nome)}</h3>
            <p class="resumo">${esc(p.resumo)}</p>
            <div class="meta">
              <span class="chip status">${esc(p.status)}</span>
              ${p.stack.slice(0, 3).map((s) => `<span class="chip">${esc(s)}</span>`).join("")}
            </div>
            <span class="ver">Ver o projeto ${seta}</span>
          </div>
          <div class="palco">
            <div class="tela">${capa ? imagem(p, capa) : ""}</div>
            ${celular(p)}
          </div>
        </a>`;
      }).join("");
    };
    render();
    escuro.addEventListener("change", render);
  }

  /* ---------- página de projeto ---------- */
  const alvo = document.getElementById("projeto");
  if (alvo) {
    const slug = document.documentElement.dataset.projeto;
    const i = P.findIndex((x) => x.slug === slug);
    const p = P[i];
    if (!p) { alvo.innerHTML = "<p class='wrap'>Projeto não encontrado.</p>"; return; }
    const prox = P[(i + 1) % P.length];
    document.title = `${p.nome}: ${p.tipo} | Luís Henrique Silva`;

    const temAdmin = p.prints.some((x) => x.area === "admin");
    const nomeAdmin = p.slug === "site-gs" ? "Painel admin" : "Operação";

    const figura = (x) => `
      <figure>
        <button class="moldura" type="button" data-src="${srcPrint(p, x)}" data-legenda="${esc(x.legenda)}">${imagem(p, x)}</button>
        <figcaption>${esc(x.legenda)}</figcaption>
      </figure>`;

    const capa = p.prints.find((x) => x.formato === "desktop");

    const montar = () => {
      document.body.style.setProperty("--p", corDe(p));
      alvo.innerHTML = `
      <div class="proj-banda">
      <header class="proj-topo wrap">
        <a class="voltar" href="${raiz}#projetos">${voltaSeta} Todos os projetos</a>
        <div class="tipo">${esc(p.tipo)}</div>
        <h1>${esc(p.nome)}</h1>
        <p class="resumo">${esc(p.resumo)}</p>
        <dl class="fichas">
          <div><dt>Status</dt><dd class="status">${esc(p.status)}</dd></div>
          <div><dt>Período</dt><dd>${esc(p.ano)}</dd></div>
          <div><dt>Meu papel</dt><dd>${esc(p.papel)}</dd></div>
        </dl>
        ${p.link ? `<div class="botoes"><a class="btn cor" href="${p.link.href}" target="_blank" rel="noopener">Abrir ${esc(p.link.rotulo)}</a></div>` : ""}
      </header>

      ${capa ? `<div class="wrap"><div class="capa-palco"><div class="capa">${imagem(p, capa)}</div>${celular(p)}</div></div>` : ""}
      </div>

      <section class="secao">
        <div class="wrap ps">
          <div class="problema"><h2><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>O problema</h2><p>${esc(p.problema)}</p></div>
          <div class="solucao"><h2><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>A solução</h2><p>${esc(p.solucao)}</p></div>
        </div>
      </section>

      <section class="secao faixa">
        <div class="wrap">
          <h2>Como ficou</h2>
          <p class="sub">${p.link ? "O site está no ar; abaixo, telas do site público e do painel interno." : "O código é privado, então as telas mostram o app rodando com dados de demonstração."}</p>
          ${temAdmin ? `<div class="abas" role="tablist">
            <button role="tab" aria-selected="true" data-area="app">${p.slug === "site-gs" ? "Site público" : "App"}</button>
            <button role="tab" aria-selected="false" data-area="admin">${nomeAdmin}</button>
          </div>` : ""}
          <div class="galeria" id="galeria"></div>
        </div>
      </section>

      <section class="secao">
        <div class="wrap">
          <h2>Funcionalidades</h2>
          <p class="sub">O que dá para fazer hoje.</p>
          <div class="funcs">${p.funcionalidades.map((f) => `<div><h3>${esc(f.titulo)}</h3><p>${esc(f.texto)}</p></div>`).join("")}</div>
        </div>
      </section>

      <section class="secao faixa">
        <div class="wrap">
          <h2>Decisões técnicas</h2>
          <p class="sub">As escolhas que mais pesaram, e por quê.</p>
          <ul class="decisoes">${p.decisoes.map((d) => `<li><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></li>`).join("")}</ul>
        </div>
      </section>

      <section class="secao">
        <div class="wrap">
          <h2 style="margin-bottom:24px">Stack</h2>
          <ul class="stack">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        </div>
      </section>

      <section class="secao">
        <div class="wrap">
          <a class="proximo" href="${raiz}projetos/${prox.slug}/" style="--p:${corDe(prox)}">
            <span><span class="small">Próximo projeto</span><b>${esc(prox.nome)}</b></span>
            <span class="seta">${seta}</span>
          </a>
        </div>
      </section>`;

      const gal = document.getElementById("galeria");
      const mostrar = (area) => {
        const da = p.prints.filter((x) => (x.area || "app") === area && x !== capa);
        const d = da.filter((x) => x.formato !== "mobile");
        const m = da.filter((x) => x.formato === "mobile");
        gal.innerHTML =
          (d.length ? `<div class="grade">${d.map(figura).join("")}</div>` : "") +
          (m.length ? `<div class="celulares">${m.map(figura).join("")}</div>` : "");
      };
      mostrar("app");
      alvo.querySelectorAll(".abas button").forEach((b) =>
        b.addEventListener("click", () => {
          alvo.querySelectorAll(".abas button").forEach((o) => o.setAttribute("aria-selected", o === b));
          mostrar(b.dataset.area);
        })
      );
    };
    montar();
    escuro.addEventListener("change", montar);

    // zoom nos prints
    const dlg = document.createElement("dialog");
    dlg.className = "zoom";
    dlg.innerHTML = `<button type="button">Fechar</button><img alt=""><p></p>`;
    document.body.append(dlg);
    dlg.querySelector("button").onclick = () => dlg.close();
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    alvo.addEventListener("click", (e) => {
      const b = e.target.closest(".moldura");
      if (!b || b.disabled) return;
      dlg.querySelector("img").src = b.dataset.src;
      dlg.querySelector("img").alt = b.dataset.legenda;
      dlg.querySelector("p").textContent = b.dataset.legenda;
      dlg.showModal();
    });
  }
})();
