/*
 * Configurações comuns aos dois idiomas.
 */
export default {
  dominio: "https://devlhs.com.br",
  // Troque para "contato@devlhs.com.br" quando o Email Routing da Cloudflare estiver ativo.
  email: "luishsilva09@gmail.com",
  github: "https://github.com/luishsilva09",
  linkedin: "https://www.linkedin.com/in/luishenriquesilva",
  curriculo: "/curriculo/Luis-Henrique-Silva-CV.pdf",
  // Token do Cloudflare Web Analytics (é público: aparece no HTML). Vazio = sem analytics.
  analyticsToken: "c4a5fb75180e44febe95b9634291b6d5",
  // Prints usados na vitrine do topo da home: [slug, arquivo].
  vitrine: {
    atras: ["site-gs", "home.jpg"],
    frente: ["coin", "home.jpg"],
    celular: ["coin", "home-mobile.jpg"],
  },
};
