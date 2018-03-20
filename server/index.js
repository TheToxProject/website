import React from "react";
import ReactDOMServer from "react-dom/server";
import StaticRouter from "react-router-dom/StaticRouter";
import { I18nextProvider } from "react-i18next";
import express from "express";
import path from "path";

import templateFn from "./template";
import Routes from "../src/routes";
import i18n from "../src/i18n/i18n";

import Backend from "i18next-node-fs-backend";
const i18nextMiddleware = require("i18next-express-middleware");
const app = express();

const MemoryFS = require("memory-fs");
const fs = new MemoryFS();

// Mock some browser relative stuff.
if (!process.env.BROWSER) {
  global.window = {
    addEventListener: () => null,
    removeEventListener: () => null,
    scrollTo: () => null,
    navigator: {
      userAgent: "NodeJS SSR"
    }
  };
}

export const start = () => {
  i18n
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init(
      {
        preload: ["en", "fr"]
      },
      () => {
        app
          .disable("x-powered-by")
          .use(i18nextMiddleware.handle(i18n))
          .use(express.static("/home/skyzohkey/Dev/React/Tox/website/build"))
          .get("*", handleRequests);

        app.listen(3000);
        console.log("Server listening on port http://127.0.0.1:3000 !");
        console.log(
          "Serving assets from: " +
            "/home/skyzohkey/Dev/React/Tox/website/build"
        );
      }
    );
};

export const handleRequests = (req, res) => {
  let context = {};

  i18n.use(i18nextMiddleware.LanguageDetector);

  const markup = ReactDOMServer.renderToString(
    <I18nextProvider i18n={req.i18n}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </I18nextProvider>
  );

  console.log(markup);

  if (context.status === 404) {
    res.status(404);
  } else if (context.code) {
    // Allows to set status code.
    res.status(context.code);
  }

  if (context.url) {
    // In case a wild <Redirect /> is rendered.
    res.redirect(context.url);
    return;
  }

  const initialI18nStore = {};
  req.i18n.languages.forEach(l => {
    initialI18nStore[l] = req.i18n.services.resourceStore.data;
  });

  const initialLanguage = req.i18n.language;

  const template = templateFn(markup, {}, initialI18nStore, initialLanguage);

  res.status(200).send(template);
};

////////////////////// ---[|]--- //////////////////////
