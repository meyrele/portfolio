# DESIGN.md — Direção visual do Catálogo

Este documento é vinculante. Onde houver conflito com escolhas de implementação, este documento vence.

## 1. Atmosfera

Um catálogo de biblioteca que não deveria existir. Papel de livro brasileiro (pólen), tinta de impressão, e a rubrica vermelha dos manuscritos e carimbos de biblioteca. Rigor bibliográfico com um grau controlado de estranhamento. Nada de "site bonito de designer" genérico: o objeto é um impresso impossível renderizado em tela.

## 2. Paleta

| Token | Hex | Uso |
|---|---|---|
| `--polen` | `#EFE6D5` | Fundo principal (papel pólen, mais amarelado que creme genérico) |
| `--polen-sombra` | `#E3D7C0` | Fundos secundários, fichas, zebra de tabelas |
| `--tinta` | `#22201C` | Texto principal (preto de tinta, quente, nunca #000) |
| `--grafite` | `#6B6558` | Metadados, legendas, texto secundário |
| `--rubrica` | `#B3271E` | Único acento. Links, tags ativas, carimbos, cota, foco |
| `--selo-azul` | `#2B3A67` | Acento raro: carimbo de "edição", detalhes do colofão |

Regras: a rubrica é usada como um bibliotecário usa o carimbo — pontualmente e com autoridade. Jamais gradientes. Jamais terracota/laranja quente como acento (leitura de template). O vermelho é de rubrica de manuscrito, não de marca de startup.

Modo escuro (fase 2, opcional): inverter para "leitura noturna" — fundo `#1C1A17`, texto pólen, rubrica clareada para `#E05548`.

## 3. Tipografia

Três vozes, todas open source (Google Fonts):

- **Fraunces** — display. Títulos de projetos, numerais grandes, a marca. Usar os eixos ópticos e o SOFT/WONK com parcimônia: títulos em optical size alto, peso 300–600. É a voz "livro antigo com defeito de fabricação".
- **Literata** — corpo de texto. Desenhada para leitura longa em telas (Google Books) — conceitualmente perfeita: o livro que virou software. Corpo 17–19px, entrelinha 1.6, medida máxima 68ch.
- **IBM Plex Mono** — metadados, fichas catalográficas, cotas, tags, folios, colofão. Sempre em caixa alta com tracking aberto para rótulos (`font-size` menor, `letter-spacing: 0.08em`).

Hierarquia por contraste de voz, não só de tamanho: um título Fraunces grande sobre uma linha de metadados em Plex Mono pequena já constrói a página.

## 4. Assinatura do site

**A ficha catalográfica.** Cada projeto na listagem é uma ficha: retângulo de proporção 5×3 (como fichas reais), com furo sugerido na base (meio círculo vazado), cota no canto superior em Plex Mono, título em Fraunces, linha de metadados, tags como carimbos. A capa do projeto aparece como "foto grampeada" à ficha (leve rotação de 0.5–1°, no máximo).

Interação de assinatura: ao pousar sobre uma ficha, o título se "compõe" — caracteres resolvem de glifos aleatórios para o texto final em ~300ms (efeito de tipos móveis sendo montados). Respeitar `prefers-reduced-motion`: com motion reduzido, apenas sublinhado em rubrica.

Toda a ousadia do site vive na ficha e nesse efeito. O resto é disciplinado.

## 5. Layout

- Grid de base 8px. Largura máxima de conteúdo: 1120px; texto corrido: 68ch.
- **Home/Catálogo:** uma linha de apresentação + barra de classificação (filtros) fixa lateral no desktop, colapsável no mobile + grade de fichas (2–3 colunas desktop, 1 no mobile).
- **Página de projeto:** capa em largura contida (não full-bleed gratuito), depois miolo em coluna única de leitura com margens generosas; imagens podem escapar da medida do texto ("sangria" moderada); marginálias em Plex Mono na lateral no desktop (viram legendas no mobile). Folio no rodapé de cada seção (`Sobre · fl. 1`, `Problema · fl. 2`, `Solução · fl. 3`). Colofão centralizado ao final, separado pelo asterismo ⁂ — que é a marca reduzida do site e o único ornamento permitido em todo o projeto.
- Divisores: filetes de 1px em `--grafite` com 40% de opacidade, nunca sombras difusas.
- Cantos retos em tudo, exceto o furo da ficha.

## 6. Movimento

- Página de projeto: reveal sutil por seção no scroll (fade + 8px de deslocamento, uma vez só).
- Troca de filtro: fichas reordenam com transição de 200ms (FLIP ou `view-transition` se suportado).
- Nada de parallax, nada de scroll-jacking, nada de cursor customizado.
- `prefers-reduced-motion: reduce` desliga tudo exceto mudanças de cor.

## 7. Componentes de linguagem

- Tags renderizadas como carimbos: borda de 1px, Plex Mono caixa alta, tinta grafite; ativa = rubrica (borda e texto), com leve textura de carimbo se for barato de implementar (senão, cor sólida).
- O seletor de idioma escrito como edição: `ED. ORIGINAL · PT` / `TRANSLATED ED. · EN`.
- **Marca:** `Meyrele Torres` em Fraunces (peso 400–500) sobre `ASTERISMO ⁂ CATÁLOGO DE TRABALHOS` em Plex Mono caixa alta, tracking aberto. O ⁂ em rubrica; o resto em tinta. Favicon: ⁂ em tinta sobre pólen.
- Estados vazios com voz bibliográfica: filtro sem resultados → "Nenhum volume corresponde a esta classificação. Limpar consulta."
- 404: um ⁂ grande centralizado + "Obra não catalogada." + link para o catálogo. (No uso tipográfico real, o asterismo marca uma quebra ou lacuna no texto — a 404 é a lacuna do site, o que fecha o conceito.)

## 8. Checklist de qualidade

- Contraste AA em todos os pares (verificar rubrica sobre pólen em textos pequenos; se falhar, escurecer para `#9C2018`).
- Foco visível: outline de 2px em rubrica, offset 2px.
- Testar em 360px de largura.
- OG image por projeto: a própria ficha catalográfica renderizada (fase 2; na fase 1, uma OG genérica do catálogo).
