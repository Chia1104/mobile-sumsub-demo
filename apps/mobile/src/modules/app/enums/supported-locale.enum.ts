export const SupportedLocale = {
  En: "en",
  Tw: "zh",
} as const;

export type SupportedLocale =
  (typeof SupportedLocale)[keyof typeof SupportedLocale];

export const isSupportedLocale = (
  locale: unknown
): locale is SupportedLocale => {
  try {
    return Object.values(SupportedLocale).includes(locale as SupportedLocale);
  } catch {
    return false;
  }
};
