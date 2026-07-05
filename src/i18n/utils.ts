import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Retorna uma função de tradução `t('chave')` para o idioma dado. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** O outro idioma (para o seletor de edição e hreflang alternativo). */
export function otherLang(lang: Lang): Lang {
  return lang === 'pt' ? 'en' : 'pt';
}

/**
 * Monta uma URL interna já com o `base` do site e o prefixo de idioma.
 * Ex.: localizedUrl('pt', 'projetos/painel-linha-7') → /portfolio/pt/projetos/painel-linha-7
 * Passe path vazio para a raiz do idioma (o catálogo).
 */
export function localizedUrl(lang: Lang, path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean ? `${base}/${lang}/${clean}` : `${base}/${lang}`;
}
