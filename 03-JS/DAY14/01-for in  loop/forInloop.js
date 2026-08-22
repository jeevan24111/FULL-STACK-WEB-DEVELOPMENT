//for in loop

let obj={
    name:"g1",
    age:20,
    role:"admin",
    id:101
}
//how to iterate over it

for(let key in obj){
    console.log(key,obj[key]);
}

console.log(Object.keys(obj));

let obj2=Object.create(obj);
obj2.money="100";
obj2.gender="male";
console.log(Object.keys(obj2));  //gives its values

for(let key in obj2){
    console.log(key,obj2[key]);

    //it also give inherited class key on iterat ing over obj2
}



