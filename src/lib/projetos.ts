import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type ProjetoEntry = CollectionEntry<'projetos'>;
export type ProjetoData = ProjetoEntry['data'];

/** Extrai slug + idioma do id "<slug>/<lang>". */
export function parseId(id: string): { slug: string; lang: Lang } {
  const [slug, lang] = id.split('/');
  return { slug, lang: lang === 'en' ? 'en' : 'pt' };
}

/** Todos os slugs de projeto (derivados das entradas em pt, a edição original). */
export async function getSlugs(): Promise<string[]> {
  const originais = await getCollection('projetos', ({ id }) => id.endsWith('/pt'));
  return originais.map((e) => parseId(e.id).slug);
}

/**
 * Entrada de um projeto no idioma pedido, com fallback para a edição pt.
 * `fallback` indica que a tradução não existe e caímos no original.
 */
export async function getProjeto(slug: string, lang: Lang) {
  if (lang !== 'pt') {
    const traduzido = await getEntry('projetos', `${slug}/${lang}`);
    if (traduzido) return { entry: traduzido, fallback: false as const };
  }
  const original = await getEntry('projetos', `${slug}/pt`);
  return original ? { entry: original, fallback: lang !== 'pt' } : null;
}

export interface CardCatalogo {
  slug: string;
  fallback: boolean;
  data: ProjetoData;
}

/**
 * Cards do catálogo para um idioma: só status "publicado", com fallback pt,
 * ordenados por destaque → ano (desc) → cota.
 */
export async function getCatalogo(lang: Lang): Promise<CardCatalogo[]> {
  const slugs = await getSlugs();
  const cards: CardCatalogo[] = [];

  for (const slug of slugs) {
    const r = await getProjeto(slug, lang);
    if (!r || r.entry.data.status !== 'publicado') continue;
    cards.push({ slug, fallback: r.fallback, data: r.entry.data });
  }

  cards.sort((a, b) => {
    if (a.data.destaque !== b.data.destaque) return a.data.destaque ? -1 : 1;
    if (a.data.ano !== b.data.ano) return b.data.ano - a.data.ano;
    return a.data.cota.localeCompare(b.data.cota);
  });

  return cards;
}

/** Contagem de projetos por tag no catálogo dado (para a barra de filtros). */
export function contarTags(cards: CardCatalogo[]): Map<string, number> {
  const contagem = new Map<string, number>();
  for (const card of cards) {
    for (const tag of card.data.tags) {
      contagem.set(tag, (contagem.get(tag) ?? 0) + 1);
    }
  }
  return contagem;
}
