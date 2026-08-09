//map in js
let arr=[1,2,3,5];

const res=arr.map((num)=>{
    return num*num;
    //modify and create new array
})
const res2=arr.map((num,index)=>{
    return num*num;
    //modify and create new array
})
const res1=arr.map((num,index,arr)=>{
    /* callbackfn(value: number, index: number, array: number[]): number */
    return num*num;
    //modify and create new array
})

console.log(res)
console.log(arr)


let se=arr.filter((num)=>num%2==0).map((num)=>num*num);
console.log(se);