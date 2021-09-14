import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./utils/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
