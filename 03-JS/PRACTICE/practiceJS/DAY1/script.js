// // variables



// // function name(){
// //     var a=12;
// //     console.log(a);
// // }
// // name();
// console.log(a);
//  var a=12;

//  /*
//  a=undefined
//  console.log(a);
//  a=12;
//  */

//  function name(){
//     var a=12;
//     if(a>12){
//         let b=13;
//     }
//     b=10;
//     console.log(b);
//     console.log(a);
// }
// name();

// let c=10;
// c=12;
// console.log(c);


//  console.log(d);
// /*

//              TDZ(temporal dead zone)

// */
// //  let d=12;


// //  const dead=false;
// //  dead=true;
// //  const dead=true;

// // const dead;->givses error

// {
//   var x = 5;
//   let y = 10;
//   const z = 15;
// }
// console.log(x); // ✅ 5
// console.log(y); // ❌ ReferenceError
// console.log(z); // 


const name="jeevan"
const city="India";
let age=21;
console.log(name,age,city);

const obj={
    name:"japan",
    age:12
}
obj.id=12;

console.log(obj.id);

const arr=[1,2,"helo"];
arr.push(20);
console.log(arr[3]);

function checkage(age){
    if(age<18) return "defined";
        return "allowed";
    
}
checkage(18);

function checkAge(age) {
  if (age < 18) return "Denied";
  return "Allowed";
}
checkAge(12);

let marks=100;

if(marks>=90 && marks<=100){
    console.log("A+");
}
else if(marks>=85 && marks<90){
    console.log("A");
}
else if(marks>=75 && marks<85){
    console.log("B+");
}
else if(marks>=45 && marks<75){
    console.log("B");
}else{
    console.log("C");
}

let weather="rainy";

switch(weather){
    case "summer":console.log("short and shirt");break;
    case "rainy":console.log("raincoat and shirt");break;
    case "winter":console.log("sweater and shirt");break;
    case "spring":console.log("pant and shirt");break;
    default:console.log("invalid season");
}

let agee=-1;
if(agee<0 && agee>=150){
    console.log("You don't exits");
}else if(agee>0 &&agee<18){
 console.log("Child");
}else if(agee>=18 & agee<=65){
    console.log("Adult");
}else{
    console.log("SENIOR CITIZEN");
}

let i=0;
while(i<10){
    console.log(i);
    i+=2;
}
  console.log("----------------");
for(let i=10;i>=1;i--){
    console.log(i);

}
  console.log("----------------");
let j=10;
do{
    console.log("hell0");
    j--;
}while(j>=0);
  console.log("----------------");


// let num=0
// while(num<50){
//     // if(num%2===0){
//     //     continue;
//     // }
//     i++;
//          console.log(num);
// }
let  num=[10,20,30];
for(let char in num){
    console.log(char);
}
console.log("----------------");

// let  num=[10,20,30];
num.forEach(num => {
    console.log(num);
});

for(let i=1;i<5;i++){
    for(let j=1;j<i;j++){
        console.log("*");
    }
}

let ser=[1,2,3,4,5,6];
ser.forEach(element => {
    if(element%2===0){
        console.log(element);
    }
});
console.log("---------------");

for(let s=0;s<10;s++){
    if(s==2 || s==3 || s==5){
        continue;
    }
    else if(s==10){
        break;
    }else{
        console.log(s);
    }
}

let jeevan={name:"jeevan",age:21};

for(let obj in jeevan){
    console.log(obj,jeevan[obj]);
}