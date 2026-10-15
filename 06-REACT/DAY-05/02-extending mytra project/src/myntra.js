import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import arr from "./utils/dummy";

import { greet as go,Meet as me } from "./utils/dummy";  //to import multiple components

//Import is used to import the components they are seperated coz for the clean and neat code
//all imported components are called as modules





function App(){
        return(
        <>
        
                {/* <img src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" width={100} height={100}></img> */}
        <Header/>  

        <div style={{ margin: "20px", display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center",gap:"20px",marginTop:"20px"}}>
                 {
                arr.map((value,index)=>{
                          return <Card  key={index} image={value.src} cloth={value.cloth} offer={value.offer} avail={value.avail}/>
                })
        }
        </div>
       

        <Footer/>
        
          </>
        )
}
const ele=ReactDOM.createRoot(document.getElementById("root"));
ele.render(<App/>);