//methods in js

let obj={
    name:"abc",
    age:23,
    id:101,
    salary:12312
};

// only keys
const arr=Object.keys(obj);  //this returns an array
console.log(arr);

//only values

const arr1=Object.values(obj);
console.log(arr1);

//both key and values 
const arr2=Object.entries(obj);
console.log(arr2);


//assigin use case

let obj1={id:10,agd:20};
let obj2={name:"abc"};
const obj3=Object.assign({},obj1,obj2);  //does not original objects
// const obj3=Object.assign(obj1,obj2); //combines both into one obj and chnages obj1 and obj2 is same
console.log(obj3)
console.log(obj1)  //changes done to obj1 and obj2 is same 
console.log(obj2)

obj3.id=25;
console.log(obj1)
console.log(obj3) //deep copy->does not change orignal vlaues of obj1 


const obj5={...obj1,...obj2,...obj};
//... ->spread opertor ->meaning all 

//combines all objects into obj5
console.log(obj5);