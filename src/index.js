import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
// import "bootswatch/dist/darkly/bootstrap.min.css";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));



// const ss = new SwapiService();
// ss.getAllStarships().then((people)=>{
//   people.forEach(p => {
    
//     console.log(p.name)
//   });
// })
