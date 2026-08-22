import React from "react";
import ReactDOM from "react-dom/client";



const props={
    name:"g1",
    age:23
}
function Greet(props){

    return (
        <h1>hello world {props.name} and your age is {props.age}</h1>

        //as i know here JSX expression is written in { curly braces}

        //imp->JSX can understand only js array ,number and string only if you pass obj it will not understand 
        // so whenever we pass objects specify the values which will be in array,number or string
    )
}

let ele=<Greet/> //calling function in JSX

//how to pass arguments in JSX FUNCTION

// {/* <h1 id="first" className="sec">helloworld </h1> */}  as this we have to send it ->JSX follows HTML format 

let ele2=<Greet name="g1"age="23"/>


//props are used to catch these arguments passed and it catches it as objects
/*
            const props={
                name:"g1",
                age:23
            }
     */
let root=ReactDOM.createRoot(document.getElementById('root'));

// root.render(ele);
root.render(<Greet/>);