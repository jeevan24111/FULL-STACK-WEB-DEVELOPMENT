let i=6;
//while loop
while(i>0){
    console.log(i);
    i--;
}

//do while loop

a=0;
do{
    console.log("hello");
    a++;
}while(a>5);

let arr=[2,3,4,5];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//objects

let obj={
    name:"g1",
    age:30,
    id:101
}

let keys=Object.keys(obj);
console.log(keys)

//from for loop

for(let i=0;i<keys.length;i++){
    console.log(obj[keys[i]]);
}