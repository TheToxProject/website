import React from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { hydrate } from "react-dom";
import { I18nextProvider } from "react-i18next";

import Routes from "./routes";
import i18n from "./i18n/i18n";

hydrate(
  <I18nextProvider
    i18n={i18n}
    initialI18nStore={typeof window !== 'undefined' && window.initialI18nStore}
    initialLanguage={typeof window !== 'undefined' && window.initialLanguage}
  >
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </I18nextProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
