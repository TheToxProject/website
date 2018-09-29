import { reactI18nextModule } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import XHR from "i18next-xhr-backend";

// Language Folders
import languages from "./languages";
const moment = require("moment");

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
    escapeValue: false,
    function(value, format, lng) {
      if (value instanceof Date) return moment(value).format(format);
      return value;
    }
  },
  react: {
    wait: true,
    bindI18n: "languageChanged loaded"
  }
};

i18n.use(reactI18nextModule);
i18n.use(XHR)

if (process && !process.release) {
  i18n.use(LanguageDetector);
  //moment.locale(LanguageDetector.);
}

if (!i18n.isInitialized) {
  i18n.init(options);
}

i18n.on("languageChanged", currentLang => {
  moment.locale(currentLang);
});

export default i18n;
