---
titulo: "Painel Linha 7"
subtitulo: "Universidades e movimentos sociais por uma economia solidária feminista ecológica"
ano: 2024
instituicao: "SoU_Ciência · Unifesp"
papel: "Design de informação, visualização de dados, tratamento de dados e implementação"
ferramentas: ["Leaflet", "Python", "Figma", "HTML/CSS/JS"]
tags: ["dataviz", "mapa", "design-de-informacao", "web"]
categoria-principal: "dataviz"
cota: "DV·2024.01"
capa: "./capa.jpg"
destaque: true
status: "publicado"
---

## Sobre o projeto

O Painel Linha 7 é um sistema interativo de visualização e comunicação científica do SoU_Ciência, think tank vinculado à Unifesp. Ele documenta a relação entre universidades brasileiras e movimentos sociais no campo da economia solidária feminista ecológica, de 1993 até o presente.

O sistema articula três dimensões: uma linha do tempo com mais de 130 eventos organizados em cinco ciclos históricos; um mapa interativo com centenas de iniciativas distribuídas pelo território nacional; e estudos temáticos com vídeo-animações sobre trabalho reprodutivo, soberania alimentar e habitação.

O painel foi concebido para públicos com intenções muito diferentes entre si: cooperativas buscando apoio técnico, gestores públicos mapeando capacidades instaladas, pesquisadores exportando dados, estudantes conhecendo o campo.

## Problema

O campo da economia solidária universitária acumulou três décadas de história, mas essa memória estava dispersa em relatórios, teses e registros institucionais sem conexão entre si. Não existia um lugar que permitisse enxergar o fenômeno inteiro — seus ciclos de expansão, suas rupturas políticas, sua distribuição geográfica.

Havia ainda um risco de projeto: tratar o acervo como banco de dados. Uma lista filtrável não comunica que o campo avançou, foi desmontado e se reinventou ao longo de cinco ciclos marcados por eventos como a criação da SENAES, o impeachment de 2016 e a pandemia. A ordem de acesso à informação importava tanto quanto a informação.

## Solução

Defini uma arquitetura guiada pelo princípio de narrativa antes de listagem: o usuário encontra primeiro a visão panorâmica — os ciclos históricos e a densidade territorial — e só depois mergulha em eventos e iniciativas específicas. Marcos políticos estruturantes aparecem na própria linha do tempo, não como notas de rodapé.

No mapa, construído em Leaflet com dados tratados em Python, cada decisão priorizou legibilidade sobre densidade: rótulos deram lugar a tooltips, ícones foram simplificados, filtros se revelam progressivamente. O mapa foi desenhado como ferramenta acionável — uma cooperativa consegue localizar apoio técnico próximo e um pesquisador consegue exportar os dados para a própria análise.

A navegação assume que não existe um fluxo único correto: há entradas diferenciadas por perfil de uso, validadas com a equipe de pesquisa ao longo de ciclos de reunião e iteração.
