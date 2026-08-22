//Reduce

let arr=[1,2,3,4,5,6]


const result=arr.reduce((acc,cur)=>{
    return acc+cur;
},0);

const result1=arr.reduce((acc,cur)=>acc+cur,0);

console.log(result)
console.log(result1)


//imagine this arr from backend
let arr1=["orange","orange","banana","grapes","banana"];


//organr:2
//banana:3
//grapges:1



//acc={}

//i want this to be printed  returned as object
const result3=arr1.reduce((acc,cur)=>{

    if(acc.hasOwnProperty(cur)){
        //chekcs acc has cur value if yes then it increase or goes to next step and add to acc and value is 1 and store in acc 
        acc[cur]++;
    }else{
        acc[cur]=1;
    }

    // acc.hasOwnProperty(cur)?acc[cur]++:acc[cur]=1;

    return acc;
},{})
console.log(result3);

