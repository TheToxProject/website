import path from "path";
import { Server } from "http";
import express from "express";

import React from "react";
import { renderToString } from "react-dom/server";
import StaticRouter from "react-router-dom/StaticRouter";

import Routes from "./routes";
import { IndexPage } from "./pages/IndexPage";

const indexView = require(path.join(__dirname, "..", "public", "index.html"));
const assetsManifest = require(path.join(
  __dirname,
  "..",
  "build",
  "asset-manifest.json"
));

// initialize the server and configure support for ejs templates
const app = new express();
const server = new Server(app);

///app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// define the folder that will be used for static assets
app.use(express.static(path.join(__dirname, "..", "build")));

const handleRequest = (req, res) => {
  let context = {};
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Routes />
    </StaticRouter>
  );

  if (context.status === 404) {
    res.status(404);
  }

  return res
    .status(200)
    .type("html")
    .send(
      indexView
        .replace("<!-- ssr:content -->", content)
        .replace(
          "<!-- ssr:script -->",
          `<script src="${assetsManifest["main.js"]}"></script>`
        )
    );
};

app.get("*", handleRequest);

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "production";
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
