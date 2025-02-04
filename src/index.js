import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./globals/styles.scss";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Home />
    </HashRouter>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();