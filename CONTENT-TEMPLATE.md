# CONTENT-TEMPLATE.md — Como adicionar projetos e tags

## Estrutura de um projeto

```
src/content/projetos/nome-do-projeto/
  index.md        # edição original (pt-BR)
  index.en.md     # translated edition
  capa.jpg        # imagem principal (mín. 1600px de largura)
  img-01.png      # demais imagens, numeradas
```

## Front-matter (obrigatório nos dois idiomas)

```yaml
---
titulo: "Painel Linha 7"
subtitulo: "Universidades e movimentos por uma economia solidária feminista ecológica"
ano: 2024
instituicao: "SoU_Ciência · Unifesp"
papel: "Design de informação, dataviz, implementação"
ferramentas: ["Leaflet", "Python", "Figma", "HTML/CSS/JS"]
tags: ["dataviz", "web", "design-de-informacao", "mapa"]
categoria-principal: "dataviz"   # define o prefixo da cota
cota: "DV·2024.01"               # gerada: código da categoria + ano + sequência
capa: "./capa.jpg"
destaque: true                   # fichas em destaque sobem no catálogo
status: "publicado"              # publicado | rascunho
---
```

## Corpo do markdown

Sempre três seções com estes títulos exatos (o layout depende deles):

```markdown
## Sobre o projeto
Texto corrido. 2–4 parágrafos.

![Legenda da imagem](./img-01.png)

## Problema
O que estava quebrado, faltando ou era o desafio. 1–3 parágrafos.

## Solução
O que foi feito, como e com que resultado. 2–5 parágrafos, imagens intercaladas.
```

Na versão `index.en.md`, os títulos são `## About the project`, `## Problem`, `## Solution`.

O colofão é montado automaticamente pelo template a partir do front-matter — não escrever no corpo.

## Adicionar uma tag nova

1. Usar o slug da tag no front-matter de pelo menos um projeto.
2. Registrar em `src/data/tags.yaml`:

```yaml
- slug: encadernacao
  pt: "Encadernação"
  en: "Bookbinding"
  codigo: "EN"     # usado na cota quando for categoria principal
```

Nada mais. O filtro aparece sozinho na próxima publicação.

## Publicar

```
git add .
git commit -m "Adiciona projeto X"
git push
```

A GitHub Action constrói e publica em 1–2 minutos.

## Boas práticas de conteúdo

- Sobre o projeto: contexto e escala (números concretos: "130+ eventos", "5 módulos").
- Problema: nomear a dificuldade real, sem inflar. Limitações declaradas geram credibilidade.
- Solução: decisões e seus porquês, não lista de entregas. Um exemplo profundo vale mais que dez superficiais.
- Imagens: exportar em 1600–2400px de largura, JPG qualidade 80 para fotos, PNG para interfaces. Nomear em sequência.
