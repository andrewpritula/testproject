import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonRu from '../accets/translations/ru/common.json';
import commonEn from '../accets/translations/en/common.json';

i18next.use(LanguageDetector).init({
  interpolation: { escapeValue: false },
  resources: {
    en: {
      common: commonEn // 'common' is our custom namespace
    },
    ru: {
      common: commonRu
    },
  },
});

export default i18next;
