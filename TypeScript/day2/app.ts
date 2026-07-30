//type inference

/*  if any type is not mentioned then assigned  values type is considered as its type */

let x="Jeep"

// x=10;

//any type

let y:any="hello";   //(any type assigned anytime   -> it is a danger situation)
y=10;


//UNknown

let z:unknown;
z=20;
z="JEEP";


//so what is the difference b/w any and unknown

//we can do any type of operation of any type data type

//but in unknown we cannot perform any operation till its type if not specified

//better to use unknown


//-------------------------------------------------------------------------------------------------------------//

// now non primitives

//1.ARRAYS

let arr:number[]=[1,2,3,4,5]

let arr2=[1,2,3,4,5];

let arr4=[1,2,"hello",3,5];
console.log(typeof arr4);
// o/p ((string | int)[])

let arr5:(number| string|boolean)[]=[true,"name",3];

arr5.push(10);
arr5.unshift("na");


//2.tuples->array with fixed size


let arr6:(string|boolean)[]=[true,"JEEP"];



//Interpreter |compiler |JIT
//platform independent | dependent


//3.objects


let obj1:{name:string,age:number,gender:string}={
    name:"JEEP",
    age:50,
    gender:"male"
};

let person:{name:string,age:number};

person={
    name:"JEEP",
    age:50
};


//Alise

type customer={
    name:string,
    id:number,
    age:number
};

let employee:customer={
    name:"JOHN",
    age:50,
    id:20
};

interface admin{
    name:string,
    age:number,
    id:Number
};

let obj2:admin={
    name:"alex",
    age:20,
    id:25
}

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