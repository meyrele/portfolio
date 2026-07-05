import { readFileSync } from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import type { Lang } from '../i18n/ui';

export interface Tag {
  slug: string;
  pt: string;
  en: string;
  codigo: string;
}

// Lê a taxonomia diretamente do YAML — fonte única de verdade compartilhada
// entre a validação do content collection e a renderização dos filtros/cotas.
// Ancorado na raiz do projeto (process.cwd()) porque este módulo é empacotado
// para dist/ no build: um caminho relativo a import.meta.url quebraria.
const tagsPath = path.join(process.cwd(), 'src', 'data', 'tags.yaml');
export const tags = yaml.load(readFileSync(tagsPath, 'utf-8')) as Tag[];

export const tagBySlug: Record<string, Tag> = Object.fromEntries(
  tags.map((t) => [t.slug, t]),
);

/** Rótulo bilíngue de uma tag; cai no próprio slug se não registrada. */
export function tagLabel(slug: string, lang: Lang): string {
  return tagBySlug[slug]?.[lang] ?? slug;
}

/** Código de 2 letras de uma tag (prefixo de cota). */
export function tagCodigo(slug: string): string | undefined {
  return tagBySlug[slug]?.codigo;
}
