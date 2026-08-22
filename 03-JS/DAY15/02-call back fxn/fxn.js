//call back fxn

//in a function ,passsing aonther fxn as argument

function greet(){
    console.log("hello");
    fun();
}

function fun(){
    console.log("hell i am func")
}

greet(fun());

greet(function fun(){
    console.log("hell i am func")
})

const greet1=function fun(){
    console.log("hell i am func")
}

greet(greet1);

greet(function (){
    console.log("hell i am func")
})

greet(()=>{
    console.log("hell i am func")
})

/// main you just have to pass a function as argunment in a function

function fetchdata(){
    //bhot sara data from backend

    console.log("i am fetching data");
}

setInterval(fetchdata,5000);

//setINterval takes fetchdata function as argument and excute it this function after 5 sec everytime