# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Portfólio estático de devlhs.com.br, em pt-BR e en, gerado por um script Node próprio (sem framework). Código, comentários e mensagens de commit estão em português; mantenha assim.

## Comandos

```bash
npm install
npm run build   # gera _site/ (valida conteúdo, gera páginas e imagens)
npm run dev     # build + serve _site/ em http://127.0.0.1:8080
```

Não há testes nem lint. A verificação é o próprio `npm run build`: ele aborta (exit 1) se `pt.mjs` e `en.mjs` divergirem, se um print listado não existir ou se um serviço apontar para um slug inexistente. Não há watch: rode o build de novo após cada mudança.

## Arquitetura

- **Conteúdo é dado, não HTML.** `conteudo/pt.mjs` e `conteudo/en.mjs` exportam objetos com a mesma forma (`meta`, `ui`, `perfil`, `home`, `servicos`, `projetos`). `conteudo/site.mjs` guarda o que é comum aos dois idiomas (domínio, contatos, token do analytics, prints da vitrine da home).
- **Paridade pt/en é obrigatória.** `projetos` (slug + lista de `prints[].arquivo`) e `servicos.lista` (`icone` + `exemplo.slug`) precisam ter os mesmos itens na mesma ordem nos dois arquivos — ver `validar()` em `scripts/build.mjs`. Ao mexer em um idioma, mexa no outro.
- **`scripts/paginas.mjs`** tem os templates como funções que retornam strings (`layout`, `home`, `projeto`, `servicos`, `naoEncontrado`), as rotas (`rotaHome`, `rotaServicos`, `rotaProjeto`: pt na raiz, en em `/en/…` com `projects`/`services`) e `capaDe` (capa = primeiro print `desktop` + `app`). Use `esc()` para qualquer texto interpolado em HTML.
- **`scripts/build.mjs`** orquestra: valida → limpa `_site/` → copia `assets/` (exceto `assets/prints/`), `curriculo/`, `CNAME`, `.nojekyll` → gera imagens → gera páginas dos dois idiomas com JSON-LD (schema.org) → `404.html` (noindex), `sitemap.xml` com hreflang, `robots.txt`.
- **Imagens:** originais em `assets/prints/<slug>/` nunca são publicados. O build gera WebP em várias larguras (`LARGURAS`: desktop vs mobile; `formato` vem do print ou do nome conter `mobile`), um JPG 1200 de reserva e uma OG 1200×630 por projeto. Ficam em cache em `.cache/img/` por mtime; apague `.cache/` para forçar regeração.
- **CSP vai em `<meta>`** (GitHub Pages não permite cabeçalhos), definida em `scripts/paginas.mjs`. O único script inline (tema) é liberado por hash calculado no build: se alterar `SCRIPT_TEMA`, o hash se ajusta sozinho, mas qualquer outro script inline ou recurso de outro domínio precisa ser liberado na CSP.
- **`assets/app.js`** só cuida de interação (tema claro/escuro salvo em localStorage, barra do topo, abas, zoom). Todo o conteúdo já sai pronto no HTML, sem depender de JS.

## Publicação

Push na `main` dispara `.github/workflows/pages.yml` (`npm ci` + `npm run build` em Node 22, publica `_site/` no GitHub Pages). `_site/`, `.cache/` e `node_modules/` ficam fora do git. O DNS está na Cloudflare em "DNS only" (nuvem cinza); com proxy ligado a renovação do certificado HTTPS do Pages falha.

## Prints de apps privados

Use só dados de demonstração. Desktop em 1440×900 e celular em 390×844 com escala 2×.
