import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    debug: true,
    saveMissing: true,
    // resources,
    backend: {
      // loadPath: '//api.daniel-mariia.wedding/translation/locales/wedding_page/{{lng}}/{{ns}}',
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      // addPath: '//api.daniel-mariia.wedding/translation/locales/wedding_page/{{lng}}/{{ns}}'
    },
    detection: {
      debug: true,
      // order and from where user language should be detected
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

      // keys or params to lookup language from
      lookupQuerystring: 'lang',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: [],
      excludeCacheFor: [], // languages to not persist (cookie, localStorage)

      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement
    },
    fallbackLng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;