import http from "http";
import app from "./server";

const PRODUCTION_DOMAIN = "https://tox-rebrand.herokuapp.com";

// Avoid cunning webpack replacemnt of process.env.
let env = {};
for (var a of ["env"]) {
  env = process[a];
}

app.set("port", Number.parseInt(env.PORT, 10) || 3000);
const server = http.createServer(app);
let currentApp = app;

server.listen(Number.parseInt(env.PORT, 10) || 3000, error => {
  if (error) {
    console.log(error);
  }

  console.log(`🚀 Server started. Listening on port ${env.PORT}.`);
  console.log(`Website is served at ${PRODUCTION_DOMAIN}.`);
});

if (module.hot) {
  console.log("✅ Server-side HMR Enabled!");

  module.hot.accept("./server", () => {
    console.log("🔁 HMR Reloading `./server`...");
    server.removeListener("request", currentApp);
    const newApp = require("./server").default;
    server.on("request", newApp);
    currentApp = newApp;
  });
}
