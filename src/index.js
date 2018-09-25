import http from "http";
import app from "./server";

const PRODUCTION_DOMAIN = 'https://tox-rebrand.herokuapp.com'

const server = http.createServer(app);
let currentApp = app;

console.log(process.env)

server.listen(Number.parseInt(process.env.PORT, 10) || 3000, error => {
  if (error) {
    console.log(error);
  }

  console.log(`🚀 Server started. Listening on port ${process.env.PORT}.`);
  console.log(`Website is served at ${PRODUCTION_DOMAIN}.`)
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
