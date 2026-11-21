/*
 * Configurações comuns aos dois idiomas.
 */
export default {
  dominio: "https://devlhs.com.br",
  // Encaminhado pelo Email Routing da Cloudflare.
  email: "contato@devlhs.com.br",
  // WhatsApp com país e DDD, só números (vira https://wa.me/<número>).
  whatsapp: "5512982047560",
  github: "https://github.com/luishsilva09",
  linkedin: "https://www.linkedin.com/in/luishenriquesilva",
  curriculo: "/curriculo/Luis-Henrique-Silva-CV.pdf",
  // CNPJ mostrado no rodapé de todas as páginas. Vazio = não aparece.
  cnpj: "62.498.873/0001-23",
  // Token do Cloudflare Web Analytics (é público: aparece no HTML). Vazio = sem analytics.
  analyticsToken: "c4a5fb75180e44febe95b9634291b6d5",
  // Prints usados na vitrine do topo da home: [slug, arquivo].
  vitrine: {
    atras: ["site-gs", "home.jpg"],
    frente: ["coin", "home.jpg"],
    celular: ["coin", "home-mobile.jpg"],
  },
};
