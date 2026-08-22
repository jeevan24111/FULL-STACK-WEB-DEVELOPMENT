let fruits=["apple","grapes","banana"];

console.log(fruits);

console.log(fruits[1]);
console.log(fruits[0]);
console.log(fruits[2]);

fruits[3]=80;
console.log(fruits[3]);
fruits.push(20);
fruits.push(40);

console.log(fruits);

console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits);

console.log(fruits.unshift(20));
console.log(fruits.unshift(204546));
console.log(fruits.shift(204546));

console.log(fruits);
console.log(fruits.reverse());
console.log(fruits.sort());
console.log(fruits.slice(1,4));
console.log(fruits.splice(1,2));

let new1=fruits.splice(1,1);
console.log(new1);
console.log(fruits);
console.log(fruits.slice(1,3));

///map

let map1=[1,23,1,4,23];

let map2=map1.map((val)=>{
      return val*2;

      //it has to return else it will give undefined
});

console.log(map2);

//filter

let fil=[1,2,3,4];
let a2=fil.filter((val)=>{
    return val%2==0;   
      //it has to return else it will give empty
});

console.log(a2);

//reduce
// reduce array to a single value
let red=fil.reduce((acc,val)=>{
    return acc+val;
    //it has to return else it will give undefined
})
console.log(red);

fil.forEach((val)=>{
   console.log(val);
})

// nums.find(n => n > 2);       // First match
// nums.some(n => n > 5);       // At least one true
// nums.every(n => n > 0);      // All TRUE

fil.find(val=>{
    val>1
});
fil.some(val=>{
    val>2
});

fil.every(val=>{
    val>0
});

// ✂ Destructuring & Spread
let arr=["japan","nyc"];
let new12=[...arr,98];

console.log(new12);

// let {a}=["japan"];
// console.log(a);


//to sort arrays use this method
console.log(JSON.parse(JSON.stringify(arr)));


let [first,sec]=["apple","banana","cat"];
console.log(first);
console.log(sec);
