import { reactI18nextModule } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

// Language Folders
import languages from "./languages";

const defaultLanguage = navigator.language.substr(0, 2);
const moment = require("moment");

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
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
  });

i18n.on("languageChanged", currentLang => {
  moment.locale(currentLang);
});

moment.locale(defaultLanguage);

export default i18n;
