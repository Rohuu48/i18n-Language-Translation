import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationBE from './locales/be/translation.json';
import translationHI from './locales/hi/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
     en: {
       translation: translationEN
     },
     be:{
        translation:translationBE
     },
     hi: {
       translation: translationHI
     }
   };

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // backend: {
    //   projectId: '53564b88-a9f1-433a-9d0f-ab3f19eb6c97',
    //   apiKey: "0ad06120-4c0d-49b5-8ab8-041c87b6e38a",
    //   referenceLng: 'en'
    // }
  });


export default i18n;