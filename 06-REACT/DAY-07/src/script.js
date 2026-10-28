//* IN the DAY of  learning react JS ,we  will learn about useEffect hook and how to use it in react JS. AND ALSO memo




import React, { useState, useEffect ,memo} from "react"; 
import ReactDOM from "react-dom/client";
import Colorfull from "./components/ColorFull";

function App(){
    
    let [count,setCount]=useState(0);
    console.log("hello");
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <Colorfull name={count}/>

        {/* here colorful function is changin then it must be re-rendered  */}

             {/* <Colorfull name="Jhon/> */}
              
             {/* function should not re-rendered coz it is not chaning the component of colorfull */}

            
        </div>
    )
}

{/* react memo is used when you  call multiple components in a function to execute and u want the one is execute and other should not be executed multiple on the execution of parent function
            it should render only once on a call first
            then it should not be executed
             
            if the changes are applying to child function then only it must be re-render else it should not be re-rendered
            */}

const ele=ReactDOM.createRoot(document.getElementById("root"));
ele.render(<App/>);