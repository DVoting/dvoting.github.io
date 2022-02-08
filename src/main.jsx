import "bootswatch/dist/zephyr/bootstrap.min.css"; //can try [minty, flatly, cosmo, zephyr]
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
