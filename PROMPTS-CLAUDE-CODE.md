# PROMPTS-CLAUDE-CODE.md — Roteiro de construção por etapas

Antes de começar: siga o **GUIA-SETUP.md** (conta no GitHub, repositório `seuusuario.github.io`, upload dos documentos, instalação do Claude Code e conexão com o repositório). Este roteiro assume que o Claude Code já está aberto no repositório com os documentos dentro.

Trabalhe uma etapa por vez. Só avance quando a anterior estiver funcionando. Commits pequenos e frequentes.

---

## Etapa 0 — Contexto

> Leia BRIEFING.md, DESIGN.md, CONTENT-TEMPLATE.md e INVENTARIO.md na raiz deste repositório. Este é meu portfólio pessoal. Antes de escrever qualquer código, me diga em poucas linhas como você pretende estruturar o projeto Astro (pastas, coleções de conteúdo, i18n e deploy) e aponte qualquer conflito ou ambiguidade que encontrar nos documentos.

## Etapa 1 — Scaffold e deploy

> Crie o projeto Astro conforme combinado, com TypeScript, sem framework de UI. Configure o build para GitHub Pages (base path correto) e crie a GitHub Action de deploy na branch main. Adicione uma home provisória com o texto "catálogo em construção". Quero conseguir ver o site publicado no GitHub Pages antes de qualquer outra coisa. Me diga o que preciso ativar nas configurações do repositório.

Valide: o site abre na URL do GitHub Pages.

## Etapa 2 — Modelo de conteúdo e listagem

> Implemente as content collections conforme CONTENT-TEMPLATE.md, com schema validando o front-matter. Crie `src/data/tags.yaml` com a taxonomia do INVENTARIO.md. Mova os três projetos de `conteudo-semente/` para a estrutura final (crie placeholders para as imagens ainda ausentes). Construa a página do catálogo (home) listando os projetos como fichas catalográficas simples — sem estilo refinado ainda, apenas estrutura semântica correta com cota, título, subtítulo, metadados e tags.

## Etapa 3 — Filtros

> Implemente o filtro por tags na home: client-side, JavaScript vanilla, tags lidas dinamicamente das coleções, filtros combináveis com lógica OU, contagem de resultados por tag, estado refletido na URL (querystring) para que um filtro possa ser compartilhado por link. Estado vazio conforme DESIGN.md seção 7.

## Etapa 4 — Página de projeto

> Construa o template da página de projeto: capa, corpo renderizando as seções Sobre o projeto / Problema / Solução com as imagens do markdown, folios por seção e colofão gerado automaticamente do front-matter, conforme BRIEFING.md e DESIGN.md seção 5.

## Etapa 5 — Bilíngue

> Implemente o i18n com rotas /pt e /en conforme BRIEFING.md item 4: UI 100% traduzida via dicionário, projetos usando index.md e index.en.md, fallback com aviso quando faltar tradução, seletor de idioma no cabeçalho tratado como "edição", tags hreflang e redirecionamento da raiz para /pt.

## Etapa 6 — Design

> Agora aplique a direção visual completa do DESIGN.md: tokens de cor, as três tipografias via Google Fonts (com font-display: swap), a ficha catalográfica como assinatura (incluindo o efeito de composição de caracteres no hover, respeitando prefers-reduced-motion), carimbos de tags, filetes, folios e o colofão do site no rodapé. Depois me mostre screenshots de home e página de projeto em desktop e mobile para eu revisar.

Itere aqui quantas rodadas forem necessárias. Peça mudanças pontuais, uma por vez.

## Etapa 7 — Páginas restantes e QA

> Crie a página Sobre e a 404 conforme BRIEFING.md e DESIGN.md. Depois rode uma revisão de qualidade: Lighthouse de performance e acessibilidade (meta ≥ 90), navegação por teclado, contraste, teste em 360px, sitemap, meta tags e OG image genérica. Corrija o que falhar e me entregue um relatório curto do que foi verificado.

## Etapa 8 — Conteúdo real

De volta ao chat do Claude (não ao Claude Code): redigir os 12 projetos restantes em pt e en usando o CONTENT-TEMPLATE.md. Adicionar imagens reais. Publicar por git push.

---

## Dicas de trabalho no Claude Code

- Se o Claude Code propuser algo que contrarie o DESIGN.md, responda: "o DESIGN.md é vinculante, siga a seção X".
- Peça screenshots sempre que houver mudança visual.
- Se algo quebrar, cole a mensagem de erro inteira em vez de descrever.
- Ao final de cada etapa: "faça commit com mensagem descritiva".
