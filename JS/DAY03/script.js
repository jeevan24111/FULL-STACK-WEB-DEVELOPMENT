//Non-primitive data types
 

// 1.Array,Objects,Function

let arr=[1,2,3,4];
let arr1=[1,"hello ",3.5];
console.log(arr);
console.log(arr1);
console.log(typeof arr);

//2.OBjects

let obj={
    name:"abc",
    //key:values pairs
    age:12
}
console.log(obj);
console.log( typeof obj);
console.log(obj.age);
console.log(obj.name);

console.log(obj.age+ "hello"+obj.name);


//ehy we need objects
/*  coz in array data will be sepreated but in objects data is in key value pair and it is easy to understand whose key belong to which value */
//objects bring data from backend once 
//if array is used multiple calls needed to get data from backend


//Functions

//function to variable
let a=function(){
    console.log("i am fxn");

    //type
    console.log(typeof a);
}
a();

//return in fnx
function return1(){
    return "hello";
}
console.log(return1());

//type conversions
let acc_balance="100";
// i want this to converted to number
let num=Number(acc_balance);
console.log(num);
console.log( typeof num);
console.log(typeof acc_balance);

//boolean to num
let isCOllege=false;
let clg=Number(isCOllege);
console.log(clg);
console.log( typeof clg); 
console.log( typeof isCOllege); 

//NaN
let accn="23xs";
let num2=Number(accn);
console.log(accn);
console.log(num2);

//cannot convert this type of data into number
// console.log( typeof num2);

//NUll
let n1=null;
let employee=null;
let salary=null;

console.log(n1);
console.log(employee);
console.log(salary);
console.log(Number(n1));

//undefined
let x2;
console.log(x2);

let ab=23;
console.log(String(ab));

let ax=false;
console.log(String(ax));
console.log(typeof ax);


let abc=""; // no space ->false
let abc1=" ";  //space ->true
console.log(Boolean("ax"));
console.log(Boolean(abc));
console.log(Boolean(abc1));

//operators in JS

