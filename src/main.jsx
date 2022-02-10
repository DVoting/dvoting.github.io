import "bootswatch/dist/zephyr/bootstrap.min.css"; //can try [minty, flatly, cosmo, zephyr]
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalProvider } from "./context/GlobalContext";
import "./index.css";

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById("root")
);
