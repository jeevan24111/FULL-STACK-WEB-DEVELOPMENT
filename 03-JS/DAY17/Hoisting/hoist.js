// console.log(x);
// console.log(y);  ///delcare karidiya lekin data nahi diya (temporal dead zone)
console.log(z);
let x=10;

// let z=20;
let y=30;
/* 
    Hoisting in JavaScript is the behavior where variable and
    function declarations are moved to the top of their containing
    scope during the compilation phase, before the code has been
    executed.
    This means that JavaScript "hoists" or lifts the declarations (but
    not the assignments) to the top, so you can refer to them be9
    they are written in the code. However, only the declaratir
    hoisted, not the assignments or initializations.
*/


console.log(x1);
console.log(y1);
console.log(z1);

var x1=23;
let y1=23;
const z1=234;

//during compilation
var x1=undefined;
let y1;

console.log(x1);
console.log(y1);

x1=23;
 y1=23;
 z1=233;