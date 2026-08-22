"use strict";
//type inference
Object.defineProperty(exports, "__esModule", { value: true });
/*  if any type is not mentioned then assigned  values type is considered as its type */
let x = "Jeep";
// x=10;
//any type
let y = "hello"; //(any type assigned anytime   -> it is a danger situation)
y = 10;
//UNknown
let z;
z = 20;
z = "JEEP";
//so what is the difference b/w any and unknown
//we can do any type of operation of any type data type
//but in unknown we cannot perform any operation till its type if not specified
//better to use unknown
//-------------------------------------------------------------------------------------------------------------//
// now non primitives
//1.ARRAYS
let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let arr4 = [1, 2, "hello", 3, 5];
console.log(typeof arr4);
// o/p ((string | int)[])
let arr5 = [true, "name", 3];
arr5.push(10);
arr5.unshift("na");
//2.tuples->array with fixed size
let arr6 = [true, "JEEP"];
//Interpreter |compiler |JIT
//platform independent | dependent
//3.objects
let obj1 = {
    name: "JEEP",
    age: 50,
    gender: "male"
};
let person;
person = {
    name: "JEEP",
    age: 50
};
let employee = {
    name: "JOHN",
    age: 50,
    id: 20
};
;
let obj2 = {
    name: "alex",
    age: 20,
    id: 25
};
// what is problem is there
//if i do like this 
/*  interface admin{
        gender:string
}

now i have to include it in obj2 otherwise it iwll give errror
*/
/*
type customer={
   gender:string
};  it will give error directly i cant do any changes in customer now
*/ 
//# sourceMappingURL=app.js.map