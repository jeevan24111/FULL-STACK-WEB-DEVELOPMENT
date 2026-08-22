console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");


function greet(){
    console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");

}

greet();

//parameters

function sum(n1,n2){
    console.log(n1+n2);
}
sum(4,5)

//return 

function greeting(name){
    return "hello "+name;
}

console.log(greeting("abc"));

// function in variables

const fun=function(){
    console.log("i am fxntion");
}

fun();

//arrow fnction

const diff=()=>{
    console.log("helllo");
}
const diff2=()=>"helo";
console.log(diff2());

const sum1=(n1,n2)=>n1+n2;
console.log(sum1(2,3))

// ...rest 

{

}
function add(...n1){
    console.log(n1);
}

add(2,3)


add(2,3,4,5)
add(2,3.3,5)
add(2,3,5,6,6,7,8)
//object


let obj={
    name:"abc",
    age:20
}
function fun1(obj){
    console.log(obj.name,obj.age)
    obj.name="hello";
}


fun1(obj);
console.log(obj) 

//destructure
function fun1(name,age){
    console.log(name,age)
}

fun1(obj);