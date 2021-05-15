import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import common_ru from "../accets/translations/ru/common.json";
import common_en from "../accets/translations/en/common.json";

i18next.use(LanguageDetector).init({
    interpolation: { escapeValue: false },
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        ru: {
            common: common_ru
        },
    },
});

export default i18next;