/*
 * Gera o site em _site/ a partir de conteudo/*.mjs e assets/.
 *   npm run build   gera
 *   npm run dev     gera e serve em http://localhost:8080
 *
 * O que ele faz:
 * - páginas em HTML completo (pt e en), com título, descrição, imagem de
 *   compartilhamento, canônica e hreflang próprios de cada página;
 * - versões WebP de cada print em vários tamanhos (o navegador escolhe pelo
 *   tamanho de tela) e uma imagem de compartilhamento 1200x630 por projeto;
 * - sitemap.xml, robots.txt e 404.html.
 * As imagens geradas ficam em cache em .cache/ e só são refeitas quando o
 * original muda.
 */
import { cp, mkdir, readFile, rm, stat, writeFile, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pt from "../conteudo/pt.mjs";
import en from "../conteudo/en.mjs";
import site from "../conteudo/site.mjs";
import { esc, home, layout, naoEncontrado, projeto, rotaHome, rotaProjeto, capaDe } from "./paginas.mjs";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const SAIDA = join(RAIZ, "_site");
const CACHE = join(RAIZ, ".cache", "img");
const LARGURAS = { desktop: [960, 1600, 2880], mobile: [390, 780] };

/* ---------- validação: os dois idiomas precisam bater ---------- */
function validar() {
  const erros = [];
  const chave = (c) => c.projetos.map((p) => `${p.slug}:${p.prints.map((x) => x.arquivo).join(",")}`).join("|");
  if (chave(pt) !== chave(en)) erros.push("conteudo/pt.mjs e conteudo/en.mjs precisam ter os mesmos projetos e prints, na mesma ordem.");
  for (const p of pt.projetos)
    for (const x of p.prints)
      if (!existsSync(join(RAIZ, "assets/prints", p.slug, x.arquivo))) erros.push(`print não encontrado: assets/prints/${p.slug}/${x.arquivo}`);
  for (const [s, a] of Object.values(site.vitrine))
    if (!existsSync(join(RAIZ, "assets/prints", s, a))) erros.push(`print da vitrine não encontrado: assets/prints/${s}/${a}`);
  if (erros.length) {
    console.error("Build interrompido:\n- " + erros.join("\n- "));
    process.exit(1);
  }
}

/* ---------- imagens ---------- */
const imagens = new Map(); // "slug/arquivo" -> { w, h, variantes: [{w, url}], original }

async function gerarSeMudou(origem, destino, fazer) {
  const cacheado = join(CACHE, destino);
  const o = await stat(origem);
  if (!existsSync(cacheado) || (await stat(cacheado)).mtimeMs < o.mtimeMs) {
    await mkdir(dirname(cacheado), { recursive: true });
    await fazer(cacheado);
  }
  await mkdir(dirname(join(SAIDA, destino)), { recursive: true });
  await copyFile(cacheado, join(SAIDA, destino));
}

async function prepararImagem(slug, arquivo, formato) {
  const k = `${slug}/${arquivo}`;
  if (imagens.has(k)) return imagens.get(k);
  const origem = join(RAIZ, "assets/prints", slug, arquivo);
  const { width, height } = await sharp(origem).metadata();
  const base = arquivo.replace(/\.(jpe?g|png)$/i, "");
  const larguras = (LARGURAS[formato] || LARGURAS.desktop).filter((w) => w <= width);
  if (!larguras.includes(width) && width < (LARGURAS[formato] || LARGURAS.desktop)[0]) larguras.push(width);
  const variantes = [];
  for (const w of larguras) {
    const rel = `assets/img/${slug}/${base}-${w}.webp`;
    await gerarSeMudou(origem, rel, (dest) => sharp(origem).resize({ width: w }).webp({ quality: 78 }).toFile(dest));
    variantes.push({ w, url: "/" + rel });
  }
  // JPG de reserva (navegadores sem WebP), com tamanho moderado
  const relJpg = `assets/img/${slug}/${base}-1200.jpg`;
  await gerarSeMudou(origem, relJpg, (dest) => sharp(origem).resize({ width: Math.min(1200, width) }).jpeg({ quality: 80, mozjpeg: true }).toFile(dest));
  const info = { w: width, h: height, variantes, reserva: "/" + relJpg };
  imagens.set(k, info);
  return info;
}

const formatoDe = (slug, arquivo) =>
  pt.projetos.find((p) => p.slug === slug)?.prints.find((x) => x.arquivo === arquivo)?.formato ||
  (/mobile/.test(arquivo) ? "mobile" : "desktop");

async function prepararTodas() {
  const lista = [];
  for (const p of pt.projetos) for (const x of p.prints) lista.push([p.slug, x.arquivo]);
  for (const v of Object.values(site.vitrine)) lista.push(v);
  for (const [s, a] of lista) await prepararImagem(s, a, formatoDe(s, a));
  // imagem de compartilhamento por projeto: a capa recortada em 1200x630
  for (const p of pt.projetos) {
    const capa = capaDe(p);
    await gerarSeMudou(join(RAIZ, "assets/prints", p.slug, capa.arquivo), `assets/og/${p.slug}.jpg`, (dest) =>
      sharp(join(RAIZ, "assets/prints", p.slug, capa.arquivo)).resize({ width: 1200, height: 630, fit: "cover", position: "top" }).jpeg({ quality: 82, mozjpeg: true }).toFile(dest));
  }
}

function img(slug, arquivo, { alt = "", sizes = "100vw", eager = false, prioridade = false } = {}) {
  const i = imagens.get(`${slug}/${arquivo}`);
  const srcset = i.variantes.map((v) => `${v.url} ${v.w}w`).join(", ");
  const carga = eager ? `${prioridade ? ' fetchpriority="high"' : ""}` : ' loading="lazy"';
  return `<picture><source type="image/webp" srcset="${srcset}" sizes="${sizes}"><img src="${i.reserva}" alt="${esc(alt)}" width="${i.w}" height="${i.h}" decoding="async"${carga}></picture>`;
}
const maior = (slug, arquivo) => imagens.get(`${slug}/${arquivo}`).variantes.at(-1).url;

/* ---------- dados estruturados ---------- */
const pessoa = (c) => ({
  "@type": "Person",
  "@id": `${site.dominio}/#luis`,
  name: c.perfil.nome,
  jobTitle: c.perfil.cargo,
  url: site.dominio + "/",
  image: `${site.dominio}/assets/og.png`,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: c.perfil.cidade, addressRegion: c.perfil.regiao, addressCountry: c.perfil.pais },
  worksFor: { "@type": "Organization", name: "Nube" },
  sameAs: [site.github, site.linkedin],
  knowsAbout: ["Python", "TypeScript", "Next.js", "React", "PostgreSQL", "Docker", "GitHub Actions", "Prometheus", "Grafana"],
});

/* ---------- escrita ---------- */
async function escrever(caminho, html) {
  const destino = join(SAIDA, caminho.endsWith("/") ? caminho + "index.html" : caminho);
  await mkdir(dirname(destino), { recursive: true });
  await writeFile(destino, html);
}

async function gerarIdioma(c, outro) {
  // home
  await escrever(rotaHome(c.lang), layout({
    c, site,
    titulo: c.meta.titulo,
    descricao: c.meta.descricao,
    caminho: rotaHome(c.lang),
    alternativo: rotaHome(outro.lang),
    ogImagem: "/assets/og.png",
    jsonld: { "@context": "https://schema.org", "@graph": [pessoa(c), { "@type": "WebSite", name: "devlhs", url: site.dominio + "/", inLanguage: c.lang, author: { "@id": `${site.dominio}/#luis` } }] },
    corpo: home({ c, site, img }),
  }));
  // projetos
  for (const [i, p] of c.projetos.entries()) {
    const prox = c.projetos[(i + 1) % c.projetos.length];
    const titulo = `${p.nome}: ${p.tipo} | ${c.perfil.nome}`;
    await escrever(rotaProjeto(c.lang, p.slug), layout({
      c, site, titulo,
      descricao: p.resumo,
      caminho: rotaProjeto(c.lang, p.slug),
      alternativo: rotaProjeto(outro.lang, p.slug),
      ogImagem: `/assets/og/${p.slug}.jpg`,
      classeBody: "proj",
      estiloBody: `--p-claro:${p.corClara};--p-escuro:${p.corEscura}`,
      jsonld: {
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "SoftwareApplication", name: p.nome, description: p.resumo, applicationCategory: p.tipo, operatingSystem: "Web", inLanguage: c.lang, url: site.dominio + rotaProjeto(c.lang, p.slug), image: `${site.dominio}/assets/og/${p.slug}.jpg`, author: { "@id": `${site.dominio}/#luis` }, ...(p.link ? { sameAs: p.link.href } : {}) },
          { "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: c.perfil.nome, item: site.dominio + rotaHome(c.lang) },
            { "@type": "ListItem", position: 2, name: p.nome, item: site.dominio + rotaProjeto(c.lang, p.slug) },
          ] },
          { ...pessoa(c), "@type": "Person" },
        ],
      },
      corpo: projeto({ c, p, prox, img, maior }),
    }));
  }
}

function sitemap() {
  const hoje = new Date().toISOString().slice(0, 10);
  const pares = [[rotaHome("pt"), rotaHome("en")], ...pt.projetos.map((p) => [rotaProjeto("pt", p.slug), rotaProjeto("en", p.slug)])];
  const url = (loc, a, b) => `  <url>
    <loc>${site.dominio}${loc}</loc>
    <lastmod>${hoje}</lastmod>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${site.dominio}${a}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${site.dominio}${b}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${site.dominio}${a}"/>
  </url>`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pares.flatMap(([a, b]) => [url(a, a, b), url(b, a, b)]).join("\n")}
</urlset>
`;
}

/* ---------- principal ---------- */
const inicio = Date.now();
validar();
await rm(SAIDA, { recursive: true, force: true });
await mkdir(SAIDA, { recursive: true });

// arquivos estáticos (sem os prints originais: o site usa as versões geradas)
await cp(join(RAIZ, "assets"), join(SAIDA, "assets"), { recursive: true, filter: (s) => !s.includes(join("assets", "prints")) });
await cp(join(RAIZ, "curriculo"), join(SAIDA, "curriculo"), { recursive: true });
for (const f of ["CNAME", ".nojekyll"]) if (existsSync(join(RAIZ, f))) await copyFile(join(RAIZ, f), join(SAIDA, f));

await prepararTodas();
await gerarIdioma(pt, en);
await gerarIdioma(en, pt);

await writeFile(join(SAIDA, "404.html"), layout({
  c: pt, site,
  titulo: `${pt.ui.naoEncontrado.titulo} | devlhs`,
  descricao: pt.ui.naoEncontrado.texto,
  caminho: "/404.html",
  alternativo: "/en/",
  ogImagem: "/assets/og.png",
  jsonld: { "@context": "https://schema.org", "@type": "WebPage", name: pt.ui.naoEncontrado.titulo },
  corpo: naoEncontrado({ pt, en }),
}).replace('<link rel="canonical"', '<meta name="robots" content="noindex">\n  <link rel="canonical"'));
await writeFile(join(SAIDA, "sitemap.xml"), sitemap());
await writeFile(join(SAIDA, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${site.dominio}/sitemap.xml\n`);

const paginas = 2 * (1 + pt.projetos.length);
console.log(`Site gerado em _site/: ${paginas} páginas, ${imagens.size} imagens, em ${((Date.now() - inicio) / 1000).toFixed(1)}s.`);
