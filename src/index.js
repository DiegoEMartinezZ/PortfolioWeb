import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/styles.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
