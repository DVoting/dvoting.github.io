import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist/zephyr/bootstrap.min.css"; //can try [minty, flatly, cosmo, zephyr]
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
