import React from "react";
import ReactDOM from "react-dom/client";


/* in react functions are called as  Components
   1.In function we call it by normal and also we pass arguments while calling it as simple

   2.in react function name first can be Capital to create a diff b/w user and built in methods

   greet()-> <Greet/>  self closing tag

   when we have passed arguments to a function we should write them in a curly braces and we can write only js expression in that not js statement like 
   let x=5 it is not allowed
   but we write js expression object.name, name, arr;

   we cannot an object direct in curly braces it can't recognize what it is
   we can pass arr[] directly coz it knows how ot gives value one by one but  object  don't know
   
*/
function greet(name){
    return  <h1>hello {name}</h1>
}


function arr1(ar){
    return <h1>{ar} hello</h1>
    // it knows how to print them 
    // but object don't know
}

function ob(obj){
    return <h2> hello {obj.name}</h2>
}


let obj={
    name:"g1",
    age:23
}
const ar1=[10,20,"hello"];

let e1=arr1(ar1);
//while calling array also it should only have integer and number not object in it

const e2=ob(obj);

function App(obj){
    return<>
    <h1>hello world </h1>
    <div>i am here catch me
        <h2>hello yar kaha the etne dino se {obj.name}</h2>
    </div>

    </>
}

function Saybro(props){
    return <>
       <h1>hello bro {props.name}</h1>
       <h2>your age is {props.age}</h2>
    </>
}

const e3=<Saybro name="boxer" age="20"/>

const ele1=ReactDOM.createRoot(document.getElementById('root'));
ele1.render(greet("Genes"));
ele1.render(e1);
ele1.render(e2);

ele1.render(<App {...obj}/>);
ele1.render(e3);