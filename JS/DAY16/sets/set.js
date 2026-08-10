//sets in js 


//used when you u need unique values
let set=new Set([10,20,3040]);
console.log(set)
console.log( typeof set)

set.add(6)
set.add(7)
set.add(6)
set.add(8)
set.add("g1")
console.log(set)
set.has("g1");
console.log(set.has("g1"))


set.delete(6);
console.log(set)
console.log(set.__proto__)

//arr into set

let arr3=[1,2,3,45]
const set1=new Set(arr3);
console.log(set1);

//set into array
arr4=[...set1];
console.log(arr4)

//union

let se3=new Set([...set,...set1]);
console.log(se3)

// intersection

//filter:array

let rest4=[...set1].filter((num)=>se3.has(num));

console.log(rest4)

//iertete

for(let value of rest4){
    console.log(value);
}

set1.forEach((num)=>{
    console.log(num);
})


//MAP in Set

