# Asterismo ⁂ — portfólio de Meyrele Torres

Catálogo de trabalhos de Meyrele Torres, designer de informação. Site estático
e bilíngue (pt-BR / en), construído em [Astro](https://astro.build) e publicado
no GitHub Pages. Atualiza-se apenas com arquivos markdown.

**No ar:** https://meyrele.github.io/portfolio/

Documentos de referência (a direção é vinculante): [BRIEFING.md](BRIEFING.md),
[DESIGN.md](DESIGN.md), [CONTENT-TEMPLATE.md](CONTENT-TEMPLATE.md),
[INVENTARIO.md](INVENTARIO.md).

---

## Requisitos

- **Node 20 LTS ou superior** (há um `.nvmrc` com `20`; com nvm: `nvm use`).

## Rodar localmente

```bash
npm install      # só na primeira vez
npm run dev      # servidor de desenvolvimento com atualização automática
```

Abra **http://localhost:4321/portfolio/** (a raiz redireciona para `/pt`).

Outros comandos:

```bash
npm run build    # gera o site em dist/ (mesma build do deploy)
npm run preview  # serve o dist/ localmente, como em produção
```

---

## Adicionar um projeto

Um projeto = uma pasta em `src/content/projetos/<slug>/` com os dois idiomas:

```
src/content/projetos/nome-do-projeto/
  index.md        # edição original (pt-BR)
  index.en.md     # translated edition
  capa.jpg        # opcional (mín. 1600px); descomente `capa` no front-matter
  img-01.png      # demais imagens do miolo, numeradas
```

Front-matter obrigatório nos dois arquivos (validado no build):

```yaml
---
titulo: "Nome do Projeto"
subtitulo: "Uma linha de contexto"
ano: 2026
instituicao: "Instituição · Vínculo"
papel: "O que você fez"
ferramentas: ["Figma", "Python"]
tags: ["dataviz", "web"]        # máx. 5; devem existir em src/data/tags.yaml
categoria-principal: "dataviz"  # define o prefixo da cota
cota: "DV·2026.01"              # XX·AAAA.NN — XX = código da categoria-principal
# capa: "./capa.jpg"           # descomente quando a imagem existir
destaque: true                  # sobe no catálogo
status: "publicado"             # publicado | rascunho
---
```

Corpo do markdown — sempre estas três seções, com os títulos exatos (o layout
depende deles). Em `index.en.md`: `About the project` / `Problem` / `Solution`.

```markdown
## Sobre o projeto
...

## Problema
...

## Solução
...
```

O colofão é montado sozinho a partir do front-matter — não escreva no corpo.
Se faltar a tradução (`index.en.md`), a versão en mostra um aviso e linka a
edição original automaticamente.

### Sobre a cota (call number)

Escrita à mão. O build valida o formato `XX·AAAA.NN` e confere que o prefixo
`XX` bate com o código da `categoria-principal` (ver `src/data/tags.yaml`).
A sequência (`.01`, `.02`…) é sua decisão editorial.

## Adicionar uma tag

Registre em [`src/data/tags.yaml`](src/data/tags.yaml) e use o slug no
front-matter de algum projeto. O filtro aparece sozinho na próxima publicação.

```yaml
- slug: encadernacao
  pt: "Encadernação"
  en: "Bookbinding"
  codigo: "EN"     # 2 letras; vira o prefixo da cota quando for categoria-principal
```

---

## Publicar

```bash
git add .
git commit -m "Adiciona projeto X"
git push
```

O push na branch `main` dispara a GitHub Action
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)), que builda e
publica em ~1–2 min. Acompanhe na aba **Actions** do repositório.

> Configuração única já feita no GitHub: **Settings → Pages → Source: GitHub Actions**.

---

## Estrutura

```
src/
  content/projetos/   projetos (um diretório por projeto, pt + en)
  data/tags.yaml      taxonomia de tags (fonte única de verdade)
  i18n/               dicionário de UI e utilidades de idioma
  lib/                acesso a projetos e tags
  layouts/Base.astro  <head> (SEO, OG, hreflang) + cabeçalho e rodapé
  components/         Marca, Header, Footer, Ficha, Filtros, Colofao
  pages/              rotas (/pt, /en, projetos, sobre, 404, redirect da raiz)
  styles/global.css   tokens de cor e tipografia, base (DESIGN.md)
public/               favicon.svg, og.png
```

Stack: Astro (content collections + i18n por rotas), TypeScript, JavaScript
vanilla no cliente (filtro), fontes self-hosted (Fraunces, Literata, IBM Plex
Mono). Sem framework de UI.
