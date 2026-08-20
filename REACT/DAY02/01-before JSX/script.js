let ele=document.createElement('h1');
ele.innerText="ello REACT";
ele.style.backgroundColor="red";
ele.style.color="white";


let ele2=document.createElement('h3');
ele.innerText="ello ";
ele.style.backgroundColor="green";
ele.style.color="white";

let ele3=document.createElement('h2');
ele.innerText="hello ";
ele.style.backgroundColor="yellow";
ele.style.color="white";


let par=document.getElementById('header');
par.append(ele);
par.append(ele2);
par.append(ele3);

//here if i have create multiples elements i have to create it manually each time through js 


//so we make function for it which can create elements

//function is written in form of objects wand function takes tag,style and children

const REACT={
    createElement:function(tag,style,children){
        const ele=document.createElement(tag);
       
         
        //if array of children comes

        // [li1,li2,li3,li4]

        if(typeof children==='object'){
            // for(let i=0;i<children.length;i++){
            //     ele.append(children[i]);
            // }

            // ele.forEach(element => {
            //     ele.append(element);
            // });

            for(let val of children){
                ele.append(val);
            }
        }else{
             ele.innerText=children;
        }
        //how to add style->i have object how to iterate over ->usinf for in loop
        for(let key in style){
            ele.style[key]=style[key];

            //ele.style[key]=ele.style.fontSize
        }
        return ele;
    }
}

// now how to call

const h1=REACT.createElement('h2',{},'hello created REACT function');
const h2=REACT.createElement('p',{fontSize:"30px",backgroundColor:"blue"},'hello  i am paragraph ,created REACT function');
// par.append(h1,h2);

//how how we can easily render it->means dom
// par.append(h1,h2);


const ReactDOM={
    render:(ele,root)=>{
        root.append(ele);
    }
}

ReactDOM.render(h1,par);
ReactDOM.render(h2,par);


//here REATC AND REACTDOM ARE OBJECT ->

//REACT IS LIBRARY OF JS But at the end REACT IS ALSO OBJECTS

//unorder list
//html,css,react,js,ts

const li1=REACT.createElement('li',{},'HTML');
const li2=REACT.createElement('li',{},'CSS');
const li3=REACT.createElement('li',{},'JS');
const li4=REACT.createElement('li',{},'TS');

//how i can pass them->array
const ul=REACT.createElement('ui',{},[li1,li2,li3,li4]);