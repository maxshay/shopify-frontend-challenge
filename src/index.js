import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

// https://internships.shopify.com/

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider>
      <Router>
        <App />
      </Router>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
