//function declarations

function greet(){
    console.log("hello JavaScript");
}

greet();


//function expressions

let at=function(){
    console.log("markdown attend");
}
at();


//Parameter and arguments and default arguments

// parameters
function greet(name){
    return ("hello "+name);
}
console.log(greet("jee"));
//-->parameter->name
//-->jee->argument


console.log("---------SQUARES--------")
function square(val){
    return val*val
}
console.log(square(5));
console.log(square(12));
console.log(square(9));

console.log("-----------");

function sum(a,b){
    return a+b;
}
let total=sum(10,2);
console.log(sum(12,234));
console.log(sum(23,23.3));
console.log(sum(90.23,23));
console.log(sum(12,12.2));

//fat arrow functions
let name=()=>{
    console.log("hello,This is fat arrow function");
}
name();
let greet1=()=>{
    return 12*12;
}
console.log(greet1());

let ac=(temp=0,room=null)=>{
    console.log("Your room temperature is "+temp+" you are in "+room);
}
console.log(ac(23,"japan"));
console.log(ac(23));

//default

let runs=(runs=0)=>{
    console.log("ENGLAND SCORE IS "+runs);
}
console.log(runs(211));
console.log(runs());

//spread and rest(...)
/* if is used in array ,Then it is as spread
if it is used in function ,then it is a rest operator*/

// function total(...val){
//    return val.reduce((acc,sum)=>{
//      acc+val;
//    },0);
// }
// console.log(total(1,2,3,4,5));

// function sum(...nums) {
//   return nums.reduce((acc, val) => acc + val, 0);
// }
// console.log(sum(1,2,23,4,353,423232));

// a = 1  → default parameter
// ...num  → rest parameter
// ...num (in call) → spread operator

//first class fxn

function shout(nam){
    console.log("hello "+ nam);
}

function process(fn){
     (fn("nam"));
}

process(shout);


function outer(){
    let count=0;
    return function(){
        count++;
        console.log(count);
  };
}
let counter = outer();
counter(); // 1
counter(); // 2

//IIFE
(function () {
  console.log("Runs immediately");
})();


(()=>{
    console.log("created by G1");
})();

// hoisting

/*
    hoisting is not allowed for function expressions
    it is allowed for function declarations;
*/

// console.log(plays());
// let plays=()=>{
//     console.log("g1 plays cricket");
// }

console.log(mute());

function mute(){
    console.log("Phone is on mute");
}
