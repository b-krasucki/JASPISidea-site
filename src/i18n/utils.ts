import pl from './pl.json';
import da from './da.json';

export const languages = { pl: 'Polski', da: 'Dansk' } as const;
export const defaultLang = 'pl';
export type Lang = keyof typeof languages;

// pl.json jest źródłem prawdy dla zbioru kluczy; da to (na razie) podzbiór.
const dictionaries = { pl, da } as const;
type Dict = typeof pl;

// Ścieżki kropkowe do wartości stringów, np. "nav.contact"
type DotPaths<T, P extends string = ''> = {
  [K in keyof T & string]: T[K] extends object
    ? DotPaths<T[K], `${P}${K}.`>
    : `${P}${K}`;
}[keyof T & string];

export type TranslationKey = DotPaths<Dict>;

function lookup(obj: unknown, path: string): string | undefined {
  const value = path
    .split('.')
    .reduce<unknown>((acc, key) => (acc != null && typeof acc === 'object'
      ? (acc as Record<string, unknown>)[key]
      : undefined), obj);
  return typeof value === 'string' ? value : undefined;
}

/**
 * Zwraca funkcję t() dla danego języka.
 * Fallback: wybrany język → pl → sam klucz (łatwo wychwycić brak).
 */
export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: TranslationKey): string {
    return (
      lookup(dictionaries[lang], key) ??
      lookup(dictionaries[defaultLang], key) ??
      key
    );
  };
}

/** Wykrywa język z URL (np. /da/...). MVP renderuje pl bez prefiksu. */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}
