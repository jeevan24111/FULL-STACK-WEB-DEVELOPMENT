//how to run vite project

/*
go to package json and there scirpt adn there dev will be prsent 
just run

npm run dev

dev name can be changed to start

now npm run start

u can also give alternative name
cool:"webpack qwqchbdcvjhwevc"

 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
  }


  to get optimized code

  npm rul bild->dist folder


  want onlyy dev dependices

  npm install -D parcel
*/

import React from "react";
import ReactDOM from "react-dom/client"


props={
    age:"23",
    name:"rahul"
}

const ele=<h1>hello day2</h1>

let arr=["10,20,30"];

function Greet(props){
    consolr.log(props);
    return <h1>hello bro {props.name}</h1>
}
function Meet(name){
    return <h1> {name}</h1>
};

const call1=Meet("raju")

const ele2=<Greet name="rahul" age="23"/>

const ele3=<h1 id="first" className="second"></h1>


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(ele);
root.render(ele2);
// root.render(call1());


let obj={
    name:"mohan",
    salary:"0"
}
/*
JXS :js expression(o/p laake de:result produce)
*/

/*
fxn for JXS rules in first letter should be capital
call it <Greet/>->it  is self closing

how to pass argunments to its
<Greet name="rahul" age="23"/>

using props->these are objects

props={
name:"rohit",
age:"23"
}

*/
