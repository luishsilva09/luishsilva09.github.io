/* Interações do site. O conteúdo já vem pronto no HTML (gerado por
 * scripts/build.mjs); aqui ficam só tema, barra do topo, abas e zoom. */
(function () {
  const html = document.documentElement;

  /* tema: escuro por padrão, claro opcional; a escolha fica salva */
  document.querySelectorAll(".tema").forEach((b) => {
    const sincronizar = () => b.setAttribute("aria-pressed", String(html.dataset.theme === "light"));
    sincronizar();
    b.addEventListener("click", () => {
      const t = html.dataset.theme === "light" ? "dark" : "light";
      html.dataset.theme = t;
      try { localStorage.setItem("tema", t); } catch (e) {}
      sincronizar();
    });
  });

  /* barra do topo ganha borda ao rolar */
  const topo = document.querySelector(".topo");
  if (topo) {
    const f = () => topo.classList.toggle("rolou", scrollY > 8);
    addEventListener("scroll", f, { passive: true });
    f();
  }

  /* abas (padrão WAI-ARIA): setas, Home e End movem e ativam */
  document.querySelectorAll('[role="tablist"]').forEach((lista) => {
    const abas = [...lista.querySelectorAll('[role="tab"]')];
    const ativar = (aba, focar) => {
      abas.forEach((a) => {
        const sel = a === aba;
        a.setAttribute("aria-selected", String(sel));
        a.tabIndex = sel ? 0 : -1;
        const painel = document.getElementById(a.getAttribute("aria-controls"));
        if (painel) painel.hidden = !sel;
      });
      if (focar) aba.focus();
    };
    abas.forEach((aba, i) => {
      aba.addEventListener("click", () => ativar(aba, false));
      aba.addEventListener("keydown", (e) => {
        const alvo = { ArrowRight: abas[(i + 1) % abas.length], ArrowLeft: abas[(i - 1 + abas.length) % abas.length], Home: abas[0], End: abas.at(-1) }[e.key];
        if (alvo) { e.preventDefault(); ativar(alvo, true); }
      });
    });
  });

  /* zoom dos prints: <dialog> modal deixa o resto da página inerte e fecha
   * com Esc; o foco vai para "Fechar" e volta ao print que abriu */
  const dlg = document.querySelector("dialog.zoom");
  if (dlg) {
    const foto = dlg.querySelector("img"), legenda = dlg.querySelector("p"), fechar = dlg.querySelector(".fechar");
    let origem = null;
    fechar.addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("close", () => { if (origem) origem.focus(); });
    document.addEventListener("click", (e) => {
      const b = e.target.closest(".moldura");
      if (!b) return;
      origem = b;
      foto.src = b.dataset.src;
      foto.alt = b.dataset.legenda;
      legenda.textContent = b.dataset.legenda;
      dlg.showModal();
      fechar.focus();
    });
  }
})();
