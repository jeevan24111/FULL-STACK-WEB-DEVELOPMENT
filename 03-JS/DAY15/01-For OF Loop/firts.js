let user={
    name:"rohit",
    age:30
}

console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user,'name',{
    writable:false,
    enumerable:false,
    configurable:false
})
user.name="hello";
console.log(Object.getOwnPropertyDescriptor(user,"name"));

console.log(user)