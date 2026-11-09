# devlhs — portfólio de Luís Henrique Silva

Site estático em https://devlhs.com.br, em português e inglês, gerado por um script Node e publicado no GitHub Pages por uma GitHub Action.

## Rodar local

```bash
npm install
npm run dev        # gera em _site/ e serve em http://localhost:8080
```

## Onde mexer

| O quê | Arquivo |
|---|---|
| Textos, projetos e legendas dos prints (português) | `conteudo/pt.mjs` |
| O mesmo em inglês (mesmos projetos e prints, na mesma ordem) | `conteudo/en.mjs` |
| E-mail, redes, currículo, token do analytics, prints da vitrine | `conteudo/site.mjs` |
| Prints originais (JPG/PNG) | `assets/prints/<slug>/` |
| Visual | `assets/style.css` |
| Interações (tema, abas, zoom) | `assets/app.js` |
| Modelos das páginas e gerador | `scripts/paginas.mjs`, `scripts/build.mjs` |

O build falha, e nada é publicado, se um print listado não existir ou se `pt.mjs` e `en.mjs` divergirem.

## O que o build gera (`_site/`, fora do git)

- HTML completo de cada página nos dois idiomas, com título, descrição, imagem de compartilhamento, canônica, `hreflang` e dados estruturados (schema.org). Prévias do LinkedIn/WhatsApp e buscadores leem tudo sem precisar de JavaScript.
- Prints em WebP em vários tamanhos (`srcset`), com um JPG de reserva, e uma imagem 1200×630 por projeto para compartilhamento. Ficam em cache em `.cache/` e só são refeitas quando o original muda.
- `sitemap.xml`, `robots.txt` e `404.html`.

## Publicação

Push na `main` → a Action `Publicar site` roda `npm ci` e `npm run build` e publica `_site/` no Pages. O domínio vem do arquivo `CNAME` e das configurações do Pages; o DNS fica na Cloudflare em "DNS only" (nuvem cinza), senão a renovação do certificado HTTPS falha.

### Prints de app privado

Use dados de demonstração, nunca dados reais. Desktop em 1440×900 e celular em 390×844 (escala 2×) mantêm o padrão atual.
