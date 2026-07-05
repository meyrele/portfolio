// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deploy: GitHub Pages (project page) → https://meyrele.github.io/portfolio/
// `site` + `base` definem a URL canônica e o prefixo de todos os links internos.
// i18n é resolvido manualmente via rotas [lang] (ver src/i18n/), então NÃO
// habilitamos o roteamento i18n nativo do Astro para evitar colisão de rotas.
export default defineConfig({
  site: 'https://meyrele.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-BR', en: 'en' },
      },
    }),
  ],
});
