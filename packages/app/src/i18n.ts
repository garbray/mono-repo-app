import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Home hello",
      description: "Welcome to React and react-i18next",
    },
  },
  fr: {
    translation: {
      welcome: "OHHHH",
      description: "Bienvenue à React et react-i18next",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    whitelist: ["en", "fr"],
    interpolation: {
      escapeValue: false,
    },
    resources,
  })
  .catch((error) => {
    throw new Error(error);
  });

export default i18n;
