import React from "react";
import ReactDOM from "react-dom/client";

const ele1=React.createElement("h1",{id:"first",className:"rahul"},"hello world");

const ele2=<h1>hello coder army</h1>
const root=ReactDOM.createRoot(document.getElementById('hello'));
root.render(ele2);


const ele23=
<div>
    <h1>hello world</h1>
    <h2>hello my world</h2>
</div>

const name="rahul"

const obj={
    name:"jeevan",
    salary:"600000"
}

// const  obj2={
//     color:"white",
//     font-size:"50px"
// }

//react element
const newele=(
<>
    <h1 id="first" className="sec">qw {name},{obj.name}</h1>
    <h2>qw {obj.name}</h2>
    <h3 style={obj2}>my god</h3>
</>
)

//JXS EXPRESSIon


//why 2 culry braces
//<h2
//JXS:JAVAScript XML:HTML JAISA CODE DIRECT REacT mein
// <h2 style={{color:white,font-size:30px}}>
/*
  1 for->js ka kuch dalne vala hu
  2 for ->js ka object
*/

//say tata bye bye to createElement
//JXS-?
// babel


//react component

/*
class based component->not used now
function based component

*/

funtion greet(){
    return <h1>Aur kaisa hai bhai</h1>
}
const funcComponent=greet();

const meet=()=>{
    return <h2>hellow orld</h2>
}

root.render(funcComponent);

{/* react componet is just function to create element */}

root.render(meet());

root.render(
//     <>greet() meet() </>)

    //code will not print
    //its a js expresion

    
//------------------------------------------
    //new123
    // --runs perfectly
    );

/*
const new123=<>{meet} {funcComponent}</>
const new12=<> {meet()} {greet()} </>