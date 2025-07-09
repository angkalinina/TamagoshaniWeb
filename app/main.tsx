import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Убедись, что App.tsx лежит в этой же папке

import "./app.css"; // если используешь стили

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
