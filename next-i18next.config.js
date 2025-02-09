/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'kk', 'en'],
    localeDetection: true
  },
  defaultNS: 'common',
  ns: ['common'],
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales'
}
