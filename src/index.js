import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

let data = [
  {
    title: "hello",
    tagName: "cult",
    details: [{ color: "red" }],
    price: "1120",
    cutPrice: "1730",
    images: ["htp", "hj", "jbhj"],
  },
];
