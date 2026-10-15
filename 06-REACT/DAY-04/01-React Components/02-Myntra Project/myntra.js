import React from "react";
import ReactDOM from "react-dom";


function Card(props){
        return<>
         <img src={props.image}></img>
         <div>
                <h1>{props.cloth}</h1>
                <h2>{props.offer}</h2>
                <h1>{props.avail}</h1>
         </div>
        </>
}

const arr=[{cloth:"Tshirt",offer:"50-60%",avail:"In Stock"},{cloth:"Tshirt",offer:"50-60%",avail:"In Stock"},{cloth:"Tshirt",offer:"50-60%",avail:"In Stock"},{cloth:"Tshirt",offer:"50-60%",avail:"In Stock"}]


function App(){
        return(
        <>
        {/* <Card cloth="t-shirt" offer="50-60%" avail=""IN stock/>
        <Card cloth="Pant" offer="50-60%" avail=""IN stock/>
        <Card cloth="Shirt" offer="50-60%" avail=""out of stock/>
        <Card cloth="pajama" offer="50-60%" avail=""IN stock/>
        <Card cloth="baggy pant" offer="50-60%" avail=""Out of stock/> */}
      

        {
                arr.map((value,index)=>{
                          <Card  key={index} cloth={value.cloth} offer={value.offer} avail={value.avail}/>
                })
        }
          </>
        )
}

const ele=ReactDOM.createRoot(document.getElementById('root'));
ele.render(<App/>);