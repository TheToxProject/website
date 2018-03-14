import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes";
import i18n from "./i18n/i18n";
import "./index.css";

export const App = () => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </I18nextProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
