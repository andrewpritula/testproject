import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ThemeProvider from './pages/Home/components/ThemeProvider.js'
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_ru from "./accets/translations/ru/common.json";
import common_en from "./accets/translations/en/common.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
        resources: {
            en: {
                common: common_en               // 'common' is our custom namespace
            },
            ru: {
                common: common_ru
            },
        },
});
ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </I18nextProvider>,
    document.getElementById('root'));