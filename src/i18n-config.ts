export const i18n = {
  defaultLocale: 'en',
  locales: ['id', 'en', 'zh', 'ja'],
  longLocales: [
    'indonesia',
    'english',
    'chinese',
    'japanese'
  ]
} as const

export type Locale = (typeof i18n)['locales'][number]