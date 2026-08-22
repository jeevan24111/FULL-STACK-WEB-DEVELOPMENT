// const person={
//     name:"raj",
//     age:20,
//     gender:"male",
//     marks:80
// }

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.marks);
// console.log(person.gender);

// let info={
//     country:"India",
//     state:"karnataka",
//     district:"Hassan",
//     Taluk:"Sakleshapura",
//     village:"Ballupete",
//     pincode:573214
// }

// // let a=function(){
// //     console.log("hello world");
// // }

// // a.function();

// console.log(info);

// console.log(info.district);
// console.log(info.state);
// console.log(info.Taluk);
// console.log(info.village);

// const instagram={
//     id:"jeevan62",
//     password:"@jeevan12.12"
// }

// console.log(instagram);


// //access each value of objects by (dot(.)) eg->obj.name
// console.log(info.country);

// // obj["name"]->because keys are stored in string format 
// console.log(instagram["id"]);

// //how key and values are stored in objects
// let obj={
//     "name":"xyz",
//     "age":20
// }

// console.log(obj);
// console.log(obj.name);

// //numbers also treated as strings in keys 

// let num={
//     0:10,
//     1:50,
//     2:100,

//     null:"mohan",
//     undefined:20
// }

// console.log(num[undefined]);
// console.log(num[null]);
// console.log(num);
// console.log(num['0']);
// console.log(num['1']);
// console.log(num['2']);
// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);

// /* why arrays typeOf is objects 
//  because the arrays are stored in the form of key are values
// */

// let arr=[5,2,7,10,23];
// console.log(arr);
// console.log(typeof arr);

// console.log(arr[0]);
// console.log(arr[0],num[0]);

// /*
//     arr{
//     0:5,
//     1:2,       in the form of objects the arrays are stored
//     2:7,
//     3:10,
//     4:23
//     }
// */

// //creating objects using new keyword
// let ob1=new Object();
// //adding values to ob1
// ob1.name="a1";
// ob1.age=20;
// ob1.gender="female";

// console.log(ob1);

// // deleting values
// delete ob1.name;
// console.log(ob1);

// //update values
// ob1.age=30;
// ob1.gender="male";
// console.log(ob1);


// //objects using class

// class personal{
//     constructor(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
// }

// let a1=new personal("a1",10,"male");
// let a2=new personal("a2",11,"female");

// console.log(a1);
// console.log(a2);
// console.log(a2,a1);

// //to get only keys of objects
// const arr2=Object.keys(a1);
// console.log(arr2);

// //to get all entries in the form of an array
// const arr3=Object.entries(a2);
// console.log(arr3);

// // assign multiple objects into one

// //1
// let as=Object.assign(ob1,arr2,);
// console.log(as);

// //2
// let as1=Object.assign({ob1,obj,arr});
// console.log(as1);

// //3->multiple objects into one object

// let as2={...a1,...arr,...info,...instagram,...num};
// console.log(as2);
// 

//practice

let obj={
    name:"string",
    age:23,
    0:"hello",
    1:50,
    2:232,

    //array is also stored as this ->key value

    //[1,2,3,4,5]->values
    //[0,1,2,3,4]->key

    //arr[0]->1 ans

    //undefined
    undefined:30,
    null:300

}
console.log(obj);

// access
console.log(obj.name);
console.log(obj.age);
// console.log(obj.0);->gives error
console.log(obj["0"]);
console.log(obj["2"]);
console.log(obj["1"]);
console.log(obj[0]);
console.log(obj[2]);
console.log(obj[1]);

//in sqaure u have to give " " and key name to access
console.log(obj["age"]);
console.log(obj["name"]);
//key is stored as string "name":"String"

let arr=[2,3,4,5];

//internal implemnetation array
/*
        let arr={
        0:2,
        1:3,
        2:4,
        3:5
stores as objects only

thats why array typeof is object
}


*/
console.log(arr[3])
console.log(arr[0])
console.log(arr[2],obj[1]);
console.log(arr.length,obj.name);

console.log(obj["undefined"]);
console.log(obj[undefined]);
console.log(obj["null"]);
console.log(obj[null]);

const person12=new Object();
//add property
person12.name="person";
person12.age=23;
person12.year=200;

console.log(person12);

//deleete

delete person12.year;

console.log(person12);

//modify
person12.age=45;
console.log(person12);

//object is ref and ypu can change values of const and you are not changing reference 
//you are just changing values and not address



//third method
//OOOP's


//class
class school{
  constructor(name,age,gender){
  this.name=name;
  this.age=age;
  this.gender=gender;
  }
}

//object

let s1=new school("abc",123,"male");
let s2=new school("xyzc",124,"male");
let s3=new school("cbx",125,"male");
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s1,s2,s3);