// const arr=[1,3,5,"hello","JS"];

// console.log(arr[4]);
// console.log(arr.at(3));
// console.log(arr.at(-4));
// console.log(arr.length);

// // assigning to new array
// const newarr=arr;
// console.log(newarr);
// console.log(newarr==arr);

// //push and pop
// arr.push(20);
// arr.push(40);
// arr.push("java");

// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift("c++");
// console.log(arr);

// arr.unshift("python");
// console.log(arr);

// arr.shift();
// console.log(arr);

// delete arr[3];
// console.log(arr);

// // index

// console.log(arr.indexOf("hello"));
// console.log(arr.includes("hello"));
// console.log(arr.slice(0,4));
// console.log(arr.splice(2,4));

// console.log(arr.join(""));
// console.log(arr.join("*"));
// console.log(arr.toString());
// //concatenation
// let arr1=[1,2,34];
// let arr2=[1,2,34];

// console.log(arr1.concat(arr2));


//practice

let a1=[12,3,4];
console.log(a1);


let a2=["hello",1,3.3,null,undefined,2322134243434n];
console.log(a2);

console.log(a2.push(23));  //add ele at last
console.log(a2.push(23));  //add ele at last
console.log(a2.length) //gives length
console.log(a2.pop) //del last ele
console.log(a2) 
console.log(a2[3]) 
console.log(a2[0]) 
console.log(a2[2]) 
console.log(a2.at(2));
console.log(a2.at(- 2));
//latets and takes -ve index 

const newa1=a2;
console.log(newa1==a2); // points to same in heap


//i want both to be seperated
//want a copy but diff

let newa2=structuredClone(a2);
console.log(a2)
console.log(newa2)
console.log(newa2==a2) //false
console.log(a2.shift(233))
console.log(a2.shift(233))
console.log(a2.shift());

delete a2[1];
console.log(a2)  //reserve space of deleted element
 console.log(a2.indexOf(233));
//  console.log(a2.LastindexOf(233));
console.log(a2.includes('hello'))

//slice

console.log(a2.slice(2,5));
//[ 2322134243434n, 23, 23 ]
a2.push(23)
a2.push(231)
a2.push(232)
a2.push(234)
//spice

console.log(a2.splice(2,5));
// [ null, <1 empty item>, 232, 234 ]
//chnages oriingal array ->rmeoves them
console.log(a2)


//splice(starting_index,totl_ele_dlete,add_value)

console.log(a2.splice(1,0,"added money",89,90,9990));
console.log(a2)
let a3=a2.toString;
console.log(typeof a3);
console.log(a3);

console.log(a2.join('-'));
//joiins also giev string and we can specify what we want to add b/w them

//concate

let b1=[12,3,3,4,5];
let b2=[3,4,2,3,13];
let b4=[2,3,2,3];
let b3=b1.concat(b2,b4);
console.log(b3);
console.log(b3[0]);
console.log(b3[5]);

b1.push(b2)//this coverts to 1d array to 2d array
console.log(b1)   

console.log(b2[1][2])