import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "home page",
      description: "initial welcome",
    },
  },
  fr: {
    translation: {
      welcome: "(fr)Hello from home",
      description: "(fr)initial welcome",
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
