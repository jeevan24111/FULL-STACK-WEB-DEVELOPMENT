const arr=[1,3,5,"hello","JS"];

console.log(arr[4]);
console.log(arr.at(3));
console.log(arr.at(-4));
console.log(arr.length);

// assigning to new array
const newarr=arr;
console.log(newarr);
console.log(newarr==arr);

//push and pop
arr.push(20);
arr.push(40);
arr.push("java");

console.log(arr);

arr.pop();
console.log(arr);

arr.unshift("c++");
console.log(arr);

arr.unshift("python");
console.log(arr);

arr.shift();
console.log(arr);

delete arr[3];
console.log(arr);

// index

console.log(arr.indexOf("hello"));
console.log(arr.includes("hello"));
console.log(arr.slice(0,4));
console.log(arr.splice(2,4));

console.log(arr.join(""));
console.log(arr.join("*"));
console.log(arr.toString());
//concatenation
let arr1=[1,2,34];
let arr2=[1,2,34];

console.log(arr1.concat(arr2));