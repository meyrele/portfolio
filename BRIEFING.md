# BRIEFING — Asterismo ⁂ Portfólio de Meyrele Torres

Portfólio pessoal de Meyrele Torres, designer de informação. Site estático, bilíngue (pt-BR e en), hospedado no GitHub Pages, construído para ser atualizado apenas com arquivos markdown.

## 0. Nome e marca

- **Nome do catálogo:** Asterismo (edição en: *Asterism*). Asterismo é o ornamento tipográfico ⁂ que separa seções de um livro e, ao mesmo tempo, um padrão de estrelas no céu — a síntese dos dois polos da autora: tipografia e ficção científica.
- **Estrutura de marca (autora e obra):** o site se apresenta como um livro — autora + título. No cabeçalho: `Meyrele Torres` em Fraunces; abaixo, em Plex Mono miúdo: `Asterismo ⁂ catálogo de trabalhos` (en: `Asterism ⁂ a catalogue of works`).
- O glifo ⁂ é a marca reduzida do site: favicon, marcador de seções, ornamento do colofão e presença na 404. Sempre o caractere tipográfico real (U+2042) ou um desenho fiel a ele — nunca reinterpretado como estrelinhas decorativas.
- O nome "Meyrele Torres" garante a encontrabilidade em buscas de recrutadores; o título "Asterismo" nunca aparece sem o nome da autora no `<title>`, nas meta tags e na OG image.

## 1. Conceito

O portfólio é tratado como o catálogo de uma biblioteca particular. A metáfora resolve o problema central: a autora é interdisciplinar (dataviz, editorial, UI/UX, ilustração, motion, automação, ciência de dados), e uma biblioteca não precisa justificar a diversidade do seu acervo — ela é a própria natureza do acervo.

Traduções da metáfora em interface:

- **Cada projeto é um volume.** Na listagem, os trabalhos aparecem como fichas catalográficas (visão padrão) e como lombadas numa estante (visão alternativa).
- **As tags são o sistema de classificação.** Filtrar é consultar o catálogo. Cada projeto recebe uma "cota" (call number) gerada a partir da categoria principal e do ano, ex.: `DV·2024.03`.
- **Cada página de projeto é um livro:** capa (imagem principal), miolo (Sobre o projeto → Problema → Solução, com imagens intercaladas) e **colofão** ao final (ficha técnica: papel da autora, ferramentas, instituição, ano, tipografias do próprio site — como um colofão real).
- **Bilíngue como edições:** pt-BR é a edição original; en é a "translated edition". O seletor de idioma troca a "edição".
- **Camada sci-fi na interação, não na decoração:** micro-resolução de caracteres (efeito de tipos sendo compostos), folios (numeração de página), índice remissivo como navegação alternativa. Referência conceitual: a Biblioteca de Babel, de Borges — nunca literal, nunca clichê espacial.

Tom geral: objeto impresso impossível. Rigoroso como uma ficha catalográfica, estranho como um livro que não deveria existir.

## 2. Requisitos funcionais

1. **Listagem de projetos** com filtro por tags (client-side, sem reload). Tags são lidas dinamicamente do front-matter dos arquivos — adicionar uma tag nova em um projeto cria o filtro automaticamente, sem editar código.
2. **Filtros combináveis** (união OU por padrão; mostrar contagem de resultados por tag).
3. **Página de projeto** com estrutura fixa: capa, Sobre o projeto, Problema, Solução, galeria de imagens, colofão.
4. **Bilíngue** com rotas `/pt/...` e `/en/...`, seletor no cabeçalho, `hreflang` correto. Se um projeto ainda não tem tradução, a versão en exibe aviso discreto "available in Portuguese only" e linka a edição original.
5. **Atualização por markdown:** um projeto = uma pasta com `index.md` (pt), `index.en.md` (en) e imagens. Push na main publica via GitHub Actions.
6. **Duas visões da listagem:** fichas (padrão) e estante/lombadas (alternativa). A visão estante pode entrar numa fase 2 se comprometer o prazo.
7. **Página "Sobre"** (a bibliotecária): bio curta, áreas de atuação, contato, link para CV e LinkedIn.
8. **Índice remissivo** (fase 2): página que lista todas as tags, instituições e anos com links cruzados.
9. Responsivo (mobile first), acessível (navegação por teclado, foco visível, contraste AA, `prefers-reduced-motion` respeitado), SEO básico (meta, OG image, sitemap).
10. Performance: site estático, imagens otimizadas (formato moderno + lazy loading), zero framework pesado no client.

## 3. Stack

- **Astro** (content collections + i18n por rotas), publicado no **GitHub Pages** via GitHub Actions.
- Filtro de tags com JavaScript vanilla (ou Alpine.js se necessário) — sem React.
- Conteúdo em `src/content/projetos/`, um diretório por projeto:

```
src/content/projetos/
  painel-linha-7/
    index.md        # pt-BR
    index.en.md     # en
    capa.jpg
    img-01.png
src/data/tags.yaml  # rótulos bilíngues e categoria de cada tag
```

- `tags.yaml` mapeia slug → rótulo pt / rótulo en / código de cota (ex.: `dataviz → Visualização de dados / Data visualization / DV`).

## 4. Modelo de conteúdo

Ver `CONTENT-TEMPLATE.md`. Front-matter mínimo: `titulo, ano, instituicao, papel, ferramentas[], tags[], destaque(bool), cota, capa`.

## 5. Navegação

- Cabeçalho: marca (Meyrele Torres · Asterismo ⁂, conforme item 0) · Catálogo · Sobre · seletor pt/en.
- Rodapé: colofão do próprio site (tipografias usadas, stack, licença, contato).
- Home = a própria listagem do catálogo. Sem hero decorativo: a estante É a abertura. Uma linha de apresentação curta acima das fichas.

## 6. Referências visuais (tensão, não imitação)

- krisztinaszucs.com — dados com personalidade autoral
- paulacruz.com.br — editorial brasileiro, tipografia forte
- matthaeusjandl.com — tipografia como estrutura
- christina-lu.com — estranhamento controlado
- Fichas catalográficas de bibliotecas brasileiras, colofões de livros, specimens tipográficos, papel pólen

## 7. O que evitar

- Estética de template de portfólio (grid de cards com sombra e hover de zoom).
- Clichê sci-fi: neon, glitch pesado, fundos estrelados, cursor customizado gratuito.
- Linguagem festiva ou infantil. O humor do site é seco e bibliográfico.
- Animações que atrapalhem leitura ou ignorem `prefers-reduced-motion`.

## 8. Critérios de aceite

- Adicionar um projeto novo exige apenas: criar pasta, escrever markdown, adicionar imagens, push.
- Adicionar uma tag nova exige apenas: usá-la num front-matter e registrá-la em `tags.yaml`.
- Lighthouse ≥ 90 em performance e acessibilidade.
- Todo o conteúdo visível existe nas duas línguas (UI 100%; projetos podem ter fallback com aviso).
