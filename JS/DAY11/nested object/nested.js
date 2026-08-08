let obj={
    name:"g1",
    age:20,
    id:101,
    address:{
        city:"MIT",
        country:"earth"
    }
}

console.log(obj)
console.log(obj.name)
console.log(obj.address.city)
console.log(obj.address.country)

//assgin in nested
let obj2=Object.assign({},obj);
console.log(obj2)
obj2.name="hello";
console.log(obj2)
console.log(obj)

obj2.address.city="london";
console.log(obj2)
console.log(obj)

//in nested when we use assign 
// for nested it cgives shallow copy and  for other it gives deep copy
//if u use spread opertor to copy also it show similiar as assign

//use structredclone for nested clone always ->it ctreates deepc copy

