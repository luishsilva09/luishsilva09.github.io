# Portfólio — Luís Henrique Silva

Site estático (HTML, CSS e JS puro, sem build) publicado no GitHub Pages.

## Rodar local

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Onde mexer

| O quê | Arquivo |
|---|---|
| Texto, funcionalidades, decisões e lista de prints de cada projeto | `assets/projetos.js` |
| Prints | `assets/prints/<slug>/` (o nome precisa bater com `arquivo` em `projetos.js`) |
| Home: hero, infra, experiência, contato | `index.html` |
| Visual | `assets/style.css` |
| Currículo | `curriculo/Luis-Henrique-Silva-CV.pdf` |

Print listado que ainda não existe aparece como "Print pendente" com o caminho esperado.

### Prints de app privado

Use dados de demonstração, nunca dados reais (finanças, peso, e-mails de voluntários).
Desktop em 1440×900 e celular em 390×844 ficam no mesmo padrão dos atuais.
JPG com qualidade ~80 deixa o site leve:

```bash
sips -s format jpeg -s formatOptions 82 print.png --out print.jpg
```

### Novo projeto

1. Adicione um objeto em `window.PROJETOS` (`assets/projetos.js`).
2. Copie `projetos/coin/index.html` para `projetos/<slug>/index.html` e troque `data-projeto`.
