import { useTranslations, defaultLang, type Lang } from '@/i18n/utils';

/*
 * Mapowanie kategorii -> token tintu (placeholdery DESIGN-SPEC §4) + etykieta i18n.
 * Kategorie sztuki: malarstwo, meble, dekoracje, sciany, rysunki.
 * Kategorie wnętrz (mieszkanie/dom/komercyjne/inne) współdzielą tint "wnetrza".
 */

export type ArtCategory = 'malarstwo' | 'meble' | 'dekoracje' | 'sciany' | 'rysunki' | 'mozaiki';
export type InteriorCategory = 'mieszkanie' | 'dom' | 'komercyjne' | 'inne';

/** Klucz tintu w tokens.css (np. --tint-malarstwo-1). */
export type TintKey = ArtCategory | 'wnetrza';

export const ART_CATEGORIES: ArtCategory[] = [
  'malarstwo',
  'meble',
  'dekoracje',
  'sciany',
  'rysunki',
  'mozaiki',
];

/** Zwraca pary CSS custom properties dla placeholdera danego tintu. */
export function tintStyle(key: TintKey): string {
  return `--tint-1: var(--tint-${key}-1); --tint-2: var(--tint-${key}-2);`;
}

/** i18n etykieta kategorii sztuki, np. "Malarstwo". */
export function artCategoryLabel(cat: ArtCategory, lang: Lang = defaultLang): string {
  const t = useTranslations(lang);
  return t(`categories.${cat}` as Parameters<typeof t>[0]);
}

/** i18n etykieta kategorii wnętrza, np. "Mieszkanie". */
export function interiorCategoryLabel(cat: InteriorCategory, lang: Lang = defaultLang): string {
  const t = useTranslations(lang);
  return t(`interiorCategories.${cat}` as Parameters<typeof t>[0]);
}
