///primitive vs non primitive

let a=20;
let b=a;
console.log(a)
console.log(b)

b=12;
console.log(a)
console.log(b)

// do not changes original values

//primitive->immutable
//non -primitive->mutable


let obj={
    id:20,
    name:"abc"
}
let obj2=obj;
console.log(obj);
console.log(obj2);

obj.id=23;
console.log(obj);
console.log(obj2);  //changes original values


//primitives data types are stroed in STACK
//call by value

//non primitive data types are stored in heap

//call by reference
