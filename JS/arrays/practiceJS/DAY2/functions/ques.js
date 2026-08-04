//BMI calculator

function BMI(w,h){
    return (w*h/2);
}
let bmi=BMI(69,1.2);
console.log(bmi);

//2.default constructor
let ac=(temp=0,room=null)=>{
    return "Your room temperature is "+temp+" you are in "+room;
}
console.log(ac(23,"japan"));
// console.log(ac(23));

//3.sum of all numbers

function sum(...vals){
    return vals.reduce((acc,val)=>{
        acc+val;
    },0);
}
let total=sum(1,2,3,4,5,6);
console.log(total);

//iife
(function(){
    console.log("hello world");
})();