import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HistoryProvider from "./context/history.context";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HistoryProvider>
      <App />
    </HistoryProvider>
  </React.StrictMode>,
);
