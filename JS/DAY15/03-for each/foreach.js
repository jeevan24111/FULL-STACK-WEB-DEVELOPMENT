let arr=[1,2,3,4,5];

//for each it can take array,index and element

arr.forEach(function (num){
    console.log(num);
})
arr.forEach((num)=>{
    console.log(num);
})
arr.forEach((num)=>console.log(num));
arr.forEach((num,index)=>console.log(num  ,index ));
arr.forEach((num,index,arr)=>{
    console.log(num  ,index );
     console.log(  arr[index]=arr*3); // modifies orignal array
  
})

function greet(num){
    console.log(num)
}

arr.forEach(greet);