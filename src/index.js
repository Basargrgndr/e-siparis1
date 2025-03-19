import React from "react";
import ReactDOM from "react-dom/client"; // ✅ React 18 için güncellendi
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ createRoot kullanıldı
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
