// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "jotai";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <HashRouter>
    <Provider>
      <App />
    </Provider>
  </HashRouter>
  // </StrictMode>
);
