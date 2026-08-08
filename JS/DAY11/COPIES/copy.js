let obj={
    a:2,
    b:3
}
let obj2=obj; //shallow copy
//changes original and itself

console.log(obj)
console.log(obj2 )

obj2.a=23;
console.log(obj)
console.log(obj2 )

let obj3=structuredClone(obj); //deepcopy

// dont chnags original value and changes itself only coz,both are diff now ,seperate copies
obj3.a=34;
console.log(obj)
console.log(obj3 )

