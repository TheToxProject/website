import React from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { hydrate, render } from "react-dom";
import { I18nextProvider } from "react-i18next";

import Routes from "./routes";
import i18n from "./i18n/i18n";
import SystemDetectorProvider from "./components/SystemDetector/Provider";

const main = document.getElementById("root");
const renderOrHydrate = main.innerHTML.trim().length ? hydrate : render;

renderOrHydrate(
  <SystemDetectorProvider ua={window.navigator.userAgent}>
    <I18nextProvider
      i18n={i18n}
      initialI18nStore={
        typeof window !== "undefined" && window.initialI18nStore
      }
      initialLanguage={typeof window !== "undefined" && window.initialLanguage}
    >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </I18nextProvider>
  </SystemDetectorProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
