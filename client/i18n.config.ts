export const i18n = {
  defaultLocale: 'ua',
  locales: ['ru', 'ua']
} as const

export type Locale = (typeof i18n)['locales'][number]
