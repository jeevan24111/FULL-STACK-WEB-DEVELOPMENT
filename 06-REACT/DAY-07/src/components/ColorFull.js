
import React, { useState, useEffect } from "react";
import memo from "react";

 function Colorfull(props){

    let [color,setColor]=useState("orange");
    console.log({props})

    console.log("hiii");

     //*without useEffect hook the console.log will be printed 4 times when we click on the button because the component is re-rendered 4 times when we click on the button and the console.log will be printed 4 times but with useEffect hook we can control the re-rendering of the component and we can control the console.log to be printed only once when the component is mounted and not when the component is re-rendered.


     useEffect(()=>{
        document.body.style.backgroundColor=color;
     },[color]);

     //*1.the second argument is the dependency array which means that the useEffect hook will be called only when the color state is changed and not when the component is re-rendered.   

    //*2.if array is empty then the useEffect hook will be called only once when the component is mounted and not when the component is re-rendered.

    //*3.if dependency array is not provided then the useEffect hook will be called every time the component is re-rendered.

    //*useEffect hook is used to perform side effects in functional components. It is called after the component is rendered and it can be used to perform tasks like fetching data, updating the DOM, setting up subscriptions, etc.

    //*if there any changes then the useEffect hook will be called and it will perform the side effects.
    //*at last the useEffect hook will be called when the component is unmounted and it can be used to clean up the side effects like removing event listeners, canceling network requests, etc.

    //*for primitive data types like string, number, boolean, null, undefined the useEffect hook will be called only when the value of the state is changed but for reference data types like array, object the useEffect hook will be called every time the component is re-rendered because the reference of the state is changed even if the value is not changed.
   //*for example if we have an array and we push a new value to the array then the reference of the array is changed and the useEffect hook will be called even if the value of the array is not changed.




    return (
       <div>
       <h1>Background Color changer</h1>
       <button onClick={()=>setColor("red")}>Red</button>
       <button onClick={()=>setColor("green")}>Green</button>   
       <button onClick={()=>setColor("blue")}>Blue</button>
       <button onClick={(()=>setColor("yellow"))}>Yellow</button>
       </div>
    );
}

export default React.memo(Colorfull);