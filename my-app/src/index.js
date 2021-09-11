import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";


import { BrowserRouter as Router } from "react-router-dom";

import { NewsProvider } from "./utils/context";

ReactDOM.render(
  <React.StrictMode>
    <NewsProvider>
      <Router>
        <App />
      </Router>
    </NewsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

