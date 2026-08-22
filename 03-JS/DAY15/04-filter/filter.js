let arr=[12,3,4,5,2,6,8,9,10];

let newarr=arr.filter((num)=>{
//   
 return num%2==0;
})

console.log(newarr);



const student=[
    {name:"a",marks:60,age:20},
    {name:"b",marks:50,age:21},
    {name:"c",marks:63,age:19},
    {name:"d",marks:23,age:29},
]
let stu=student.filter((obj)=>obj.marks>70);

console.log(stu)
// let stu1=student.filter(({obj})=>marks>50);
// console.log(stu1)


