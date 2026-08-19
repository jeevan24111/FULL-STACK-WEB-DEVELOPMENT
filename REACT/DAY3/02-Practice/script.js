import React from "react";
import ReactDOM from "react-dom/client";


let ele=React.createElement('h1',{},"coder in react ");
let ele2=React.createElement('h1',{},"coder in c++ ");

let par=ReactDOM.createRoot(document.getElementById('first'));

par.render(ele);