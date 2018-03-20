import { reactI18nextModule } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

// Language Folders
import languages from "./languages";
const moment = require("moment");

const options = {
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",
  resources: { ...languages },
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
