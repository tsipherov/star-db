import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootswatch/dist/darkly/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

fetch("https://swapi.dev/api/people/1/")
  .then((response) => response.json())
  .then((res) => console.log(res));
