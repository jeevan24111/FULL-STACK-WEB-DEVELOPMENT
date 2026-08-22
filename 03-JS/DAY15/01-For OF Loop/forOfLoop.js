let arr=[2,3,4,45]

for(let value of arr){
    console.log(value);
}

let str="i am a boy";
for(let value of str){
    console.log(value);
}
//do not use for of loop for object

let obj={
    name:"abc",
    id:30
}
/*
for(let value of obj){
    console.log(value);

    TypeError: obj is not iterable
} */
//object dont specify when to go on to next property 

//forEach

arr.forEach(()=>{
    
})