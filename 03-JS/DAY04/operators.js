//comparison opertor

//1.num to num
//  { ==, > ,< ,>=,<= }
let a=10,b=20,c=20;
console.log(a==b);
console.log(b==c);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
// console.log(a!b);

//2.String to string
let name="ajay",age="20";
console.log(name==age);
console.log(b==age);
console.log(a==age);

//covert string to num automatically from string to number


// === operator

//type check and then compare values

console.log(a===age);
console.log(b===name);
console.log(b===c);

console.log(a===b);
console.log(name===age);

//null==undefined->true->always
//null===undefined ->false always

console.log(null==undefined);

///null can be only equal to undfined and for other it is false
console.log(null===undefined);
console.log(null==NaN);  
console.log(null==0);
console.log(null>0);
console.log(null<0);

console.log(undefined===undefined);
console.log(undefined==0);
console.log(undefined==NaN);  
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);


console.log(NaN==NaN);

///Nan is not Nan always

console.log(12==Number("12")==12);

//false


console.log(null!=undefined);


// logical operators

let ag=12;
let id=23;
console.group(age ==12 && id==23);
//both should be true

console.group(age ==12 || id==23);
console.log(ag!=id);

//any one should be true


//bitwise opertors

console.log(2&3)
console.log(2|3)
console.log(!2);
console.log(2>>3);
// 2 divide  by 2^ 3
console.log(2<<3);
// 2 multiply  by 2^ 3
console.log(2^3);
//xor -> o o or 1 1 =0 else 1

