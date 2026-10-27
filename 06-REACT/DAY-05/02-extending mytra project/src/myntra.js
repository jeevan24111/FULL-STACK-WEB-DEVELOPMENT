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

        let [A,setA]=React.useState(arr);  //useState is a hook that allows you to add state management to functional components in React. It enables you to declare state variables and update them, which helps in managing the dynamic data of your application.
        
                {/* <img src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" width={100} height={100}></img> */}
        <Header/> 

        <button onClick={()=>{
                let newArr=A.filter((value)=>{
                        return value.price>1000;
                })
                setA(newArr);
        }}>Filter</button>

        <button onClick={()=>{
                setA(arr);
        }}>Reset</button>

        <button onClick={()=>{
                let newArr=A.sort((a,b)=>{
                        return a.price-b.price;
                })
                setA([...newArr]);
        }}>Sort</button>

        <button onClick={()=>{
                let newArr=A.sort((a,b)=>{
                        return b.price-a.price;
                })
                setA([...newArr]);
        }}>Sort Desc</button>

        <button onClick={()=>{
                let newArr=A.filter((value)=>{
                        return value.cloth=="Tshirt";
                })
                setA(newArr);
        }}>Tshirt</button>

        <button onClick={()=>{
                let newArr=A.filter((value)=>{
                        return value.cloth=="SHirt";
                })
                setA(newArr);
        }}>Shirt</button>

        <button onClick={()=>{
                let newArr=A.filter((value)=>{
                        return value.cloth=="Lehenga";
                })
                setA(newArr);
        }}>Lehenga</button>

        <button onClick={()=>{
                let newArr=A.filter((value)=>{
                        return value.cloth=="Shoe";
                })
                setA(newArr);
        }}>Shoe</button>                 

        <div style={{ margin: "20px", display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center",gap:"20px",marginTop:"20px"}}>
                 {
                A.map((value,index)=>{
                          return <Card  key={index} image={value.src} cloth={value.cloth} offer={value.offer} avail={value.avail} price={value.price}/>
                })
        }
        </div>
       

        <Footer/>
        
          </>
        )
}
const ele=ReactDOM.createRoot(document.getElementById("root"));
ele.render(<App/>);