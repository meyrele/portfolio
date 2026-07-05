// Dicionário de strings de UI. Toda a interface existe 100% nos dois idiomas
// (critério de aceite do BRIEFING). Conteúdo de projeto pode ter fallback.
export const langs = ['pt', 'en'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'pt';

export function isLang(value: string | undefined): value is Lang {
  return value === 'pt' || value === 'en';
}

export const ui = {
  pt: {
    'site.autora': 'Meyrele Torres',
    'site.titulo': 'Asterismo',
    'site.subtitulo': 'catálogo de trabalhos',
    'site.descricao':
      'Portfólio de Meyrele Torres, designer de informação — um catálogo de trabalhos em dataviz, editorial, UI/UX, ilustração e automação.',
    'lang.nome': 'Português',
    'lang.edicao': 'ED. ORIGINAL · PT',

    'nav.catalogo': 'Catálogo',
    'nav.sobre': 'Sobre',
    'nav.pular': 'Pular para o conteúdo',

    'catalogo.intro':
      'Um acervo particular de trabalhos em design de informação — consulte pelo sistema de classificação.',
    'catalogo.classificacao': 'Classificação',
    'catalogo.limpar': 'Limpar consulta',
    'catalogo.todos': 'Todos os volumes',
    'catalogo.contagem': 'volume(s) em exibição',
    'catalogo.vazio':
      'Nenhum volume corresponde a esta classificação. Limpar consulta.',

    'ficha.cota': 'Cota',
    'ficha.destaque': 'Destaque',
    'ficha.ver': 'Consultar volume',

    'projeto.sobre': 'Sobre o projeto',
    'projeto.problema': 'Problema',
    'projeto.solucao': 'Solução',
    'projeto.folio': 'fl.',
    'projeto.voltar': 'Voltar ao catálogo',
    'projeto.somentePt': 'Este volume está disponível apenas em português.',
    'projeto.lerOriginal': 'Ler a edição original',

    'colofao.titulo': 'Colofão',
    'colofao.papel': 'Papel da autora',
    'colofao.ferramentas': 'Ferramentas',
    'colofao.instituicao': 'Instituição',
    'colofao.ano': 'Ano',
    'colofao.cota': 'Cota',

    'sobre.titulo': 'A bibliotecária',
    'sobre.areas': 'Áreas de atuação',
    'sobre.contato': 'Contato',
    'sobre.cv': 'Currículo',

    'rodape.stack': 'Feito com Astro. Tipografia: Fraunces, Literata e IBM Plex Mono.',
    'rodape.licenca': 'Conteúdo © Meyrele Torres.',

    '404.titulo': 'Obra não catalogada.',
    '404.voltar': 'Voltar ao catálogo',
  },
  en: {
    'site.autora': 'Meyrele Torres',
    'site.titulo': 'Asterism',
    'site.subtitulo': 'a catalogue of works',
    'site.descricao':
      'Portfolio of Meyrele Torres, information designer — a catalogue of works in dataviz, editorial, UI/UX, illustration and automation.',
    'lang.nome': 'English',
    'lang.edicao': 'TRANSLATED ED. · EN',

    'nav.catalogo': 'Catalogue',
    'nav.sobre': 'About',
    'nav.pular': 'Skip to content',

    'catalogo.intro':
      'A private collection of information-design work — browse it through the classification system.',
    'catalogo.classificacao': 'Classification',
    'catalogo.limpar': 'Clear query',
    'catalogo.todos': 'All volumes',
    'catalogo.contagem': 'volume(s) on display',
    'catalogo.vazio': 'No volume matches this classification. Clear query.',

    'ficha.cota': 'Call no.',
    'ficha.destaque': 'Featured',
    'ficha.ver': 'Consult volume',

    'projeto.sobre': 'About the project',
    'projeto.problema': 'Problem',
    'projeto.solucao': 'Solution',
    'projeto.folio': 'fol.',
    'projeto.voltar': 'Back to the catalogue',
    'projeto.somentePt': 'This volume is available in Portuguese only.',
    'projeto.lerOriginal': 'Read the original edition',

    'colofao.titulo': 'Colophon',
    'colofao.papel': "Author's role",
    'colofao.ferramentas': 'Tools',
    'colofao.instituicao': 'Institution',
    'colofao.ano': 'Year',
    'colofao.cota': 'Call no.',

    'sobre.titulo': 'The librarian',
    'sobre.areas': 'Areas of practice',
    'sobre.contato': 'Contact',
    'sobre.cv': 'Résumé',

    'rodape.stack': 'Built with Astro. Type: Fraunces, Literata and IBM Plex Mono.',
    'rodape.licenca': 'Content © Meyrele Torres.',

    '404.titulo': 'Uncatalogued work.',
    '404.voltar': 'Back to the catalogue',
  },
} as const;

export type UIKey = keyof (typeof ui)['pt'];
