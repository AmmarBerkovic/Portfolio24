import React from "react";
import ReactDOM from "react-dom/client";
import "./globals/styles.scss";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";

const basename = process.env.PUBLIC_URL;

const router = [
  { path: "/", element: <Home /> }
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename={basename}>
      <RouterProvider router={router} />
    </Router>
  </React.StrictMode>
);

reportWebVitals();