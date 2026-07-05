import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { tagBySlug } from './lib/tags';

// Formato da cota (call number): XX·AAAA.NN — ex.: DV·2024.01
// O separador é o ponto médio · (U+00B7). A cota é escrita à mão (decisão
// editorial da autora); o build apenas valida formato e coerência.
const COTA_REGEX = /^[A-Z]{2}·\d{4}\.\d{2}$/;

// Um projeto = uma pasta com index.md (pt) + index.en.md (en) + imagens.
// O loader trata cada arquivo como uma entrada, com id "<slug>/<lang>".
const projetos = defineCollection({
  loader: glob({
    pattern: '**/index*.md',
    base: './src/content/projetos',
    generateId: ({ entry }) => {
      const slug = entry.split('/')[0];
      const lang = entry.endsWith('.en.md') ? 'en' : 'pt';
      return `${slug}/${lang}`;
    },
  }),
  schema: ({ image }) =>
    z
      .object({
        titulo: z.string(),
        subtitulo: z.string().optional(),
        ano: z.number().int(),
        instituicao: z.string(),
        papel: z.string(),
        ferramentas: z.array(z.string()),
        tags: z.array(z.string()).max(5, 'Máximo de 5 tags por projeto.'),
        'categoria-principal': z.string(),
        cota: z
          .string()
          .regex(COTA_REGEX, 'Cota inválida — use XX·AAAA.NN (ex.: DV·2024.01).'),
        // Opcional por ora: as imagens de capa ainda serão levantadas.
        // Quando existir ./capa.jpg, descomente a linha `capa` no front-matter.
        capa: image().optional(),
        destaque: z.boolean().default(false),
        status: z.enum(['publicado', 'rascunho']).default('publicado'),
      })
      // A categoria-principal precisa existir na taxonomia (tags.yaml).
      .refine((d) => tagBySlug[d['categoria-principal']] !== undefined, (d) => ({
        message: `categoria-principal "${d['categoria-principal']}" não está registrada em src/data/tags.yaml.`,
        path: ['categoria-principal'],
      }))
      // O prefixo da cota precisa bater com o código da categoria-principal.
      .refine(
        (d) => {
          const codigo = tagBySlug[d['categoria-principal']]?.codigo;
          return !codigo || d.cota.startsWith(codigo + '·');
        },
        (d) => ({
          message: `A cota "${d.cota}" deveria começar com "${tagBySlug[d['categoria-principal']]?.codigo}·" (código da categoria-principal "${d['categoria-principal']}").`,
          path: ['cota'],
        }),
      )
      // Toda tag usada precisa existir na taxonomia.
      .refine((d) => d.tags.every((t) => tagBySlug[t] !== undefined), (d) => ({
        message: `Tags não registradas em src/data/tags.yaml: ${d.tags
          .filter((t) => !tagBySlug[t])
          .join(', ')}.`,
        path: ['tags'],
      })),
});

export const collections = { projetos };
