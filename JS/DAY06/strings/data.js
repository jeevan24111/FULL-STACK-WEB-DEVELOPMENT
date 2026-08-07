let a=10;
let b="name";

console.log(a)
console.log(b)

const a1=23;
console.log(a1);
a1=20;
// console.log(a1);  //gives error]

const obj={
    id:20,
    age:20
}
console.log(obj)
console.log(a1)
obj.name="j1";
obj.age=23;
console.log(obj);

//allowing changes in obj after setting const 
//coz adress is const and values are changing

let obj2=obj;
obj.age=23;
console.log(obj2);

let obj={
    id:23
}
// obj=obj2; gives error coz changing address here

console.log(obj);