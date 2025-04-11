import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import { MainContextProvider } from "./context/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </StrictMode>
);
