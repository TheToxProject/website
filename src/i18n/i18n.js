import { reactI18nextModule } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import XHR from "i18next-xhr-backend";

// Language Folders
import languages from "./languages";

const options = {
  fallbackLng: "en",
  ns: ["commons", "menu", "footer", "indexPage", "downloadPage"],
  defaultNS: "commons",
  resources: { ...languages },
  caches: ["localStorage", "cookie"],
  backend: {
    loadPath: `/locales/{{lng}}/{{ns}}.json`,
    addPath: `/locales/{{lng}}/{{ns}}.missing.json`
  },
  interpolation: {
    escapeValue: false
  },
  react: {
    wait: false,
    bindI18n: "languageChanged loaded"
  }
};

i18n.use(reactI18nextModule);
i18n.use(XHR)

if (process && !process.release) {
  i18n.use(LanguageDetector);
}

if (!i18n.isInitialized) {
  i18n.init(options);
}

export default i18n;
