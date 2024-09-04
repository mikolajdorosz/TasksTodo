import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import langEN from "./locales/en/en.json";
import langPL from "./locales/pl/pl.json";

const resources = {
    en: { translation: langEN },
    pl: { translation: langPL },
};

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    lng: "pl",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
