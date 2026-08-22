//scope in js

let a=20;
let b=30;
let c=50;

//global scopes->it can be used anywhere


// functional scope

function greet(){
    let d=10;
    var e=30;
    console.log(d)
    console.log(e)
}
// console.log(d,e); not accessible outside function scope ,they can only be used in function only 
console.log(a)
console.log(b)
console.log(c)


//block scope ->limited to curly braces

if(true){
    let a=10;
    var amount=100;
    console.log(amount);
    console.log(a);

}
console.log(amount);
//here i can access var even if it is declared inside a block scope
//and
var amount=300;
console.log(amount)
//also allowing name(duplciation)
//var is not blocked scoped and can be used multiple times

//blocked scope eg
let abc=30;
if(true){
    let abc=40;
    console.log(abc);
}
console.log(abc)

console.log(as)  //gives undefined
// console.log(ab)
// console.log(ac)->cannot access
let ab=30;
const bc=40;
var as=40;