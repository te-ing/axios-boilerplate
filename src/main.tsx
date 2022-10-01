import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const isServer = typeof window === "undefined";
if (isServer) {
  (async () => {
    const { server } = await import("./mocks/server");
    server.listen();
  })();
} else {
  (async () => {
    const { worker } = await import("./mocks/browser");
    worker.start();
  })();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
