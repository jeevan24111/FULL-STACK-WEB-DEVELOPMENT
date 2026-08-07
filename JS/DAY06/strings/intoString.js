//String in JS

let s1="i am hero";
let s2="i am superman";

//new method
let s3=`i am modern way of string`;

let price=30;

console.log(s1)
console.log(s2)

console.log(s3)

console.log(`price of tomato is ${price}`); //better
console.log("price of tomato is",price,"in my area");

// ` ` is used for implementing js expression


//string concatenation
console.log(s1+s2)

console.log(s1.length);// gives lenght of string

console.log('"hello"');
console.log(" ' hello' ");

console.log("i am a good boy\nia m going ot himalaya");
console.log("i am escaping \\n i am here")
// if u want print escape characer or speical character

let number="twenty";
console.log(number.charCodeAt[0]);
console.log(number.toLowerCase());
console.log(number.toUpperCase());
console.log(number.charAt[2]);

//seraching 
let hero=" arm y coder";
console.log(hero.indexOf("coder"));

console.log(hero.lastIndexOf("coder"));
console.log(hero.lastIndexOf("hero"));
console.log(hero.includes("hero"));

//extracting
let new12="helloDOn";
console.log(new12.slice(1,3));
//values from->2,3 ,1 is not mentioned
console.log(new12.slice(1,-1));

console.log(new12.substring(1,5));
//gives a substring portion of that

let str123="hello ,ji kaise ,ho";

console.log(str123.replace("e","money"));
console.log(str123.replace("h","money"));

console.log(str123.split(","));
// [ 'hello ', 'ji kaise ', 'ho' ]
//based array based on , where it is mentioned

let str12="hello ji i am ";
console.log(str12.length);

let trimd=str12.trim();
console.log(str12.length);
console.log(trimd.length);

let newString=new String("Hello coder i am g1");
console.log(newString);
console.log( typeof newString);
//max^m times->non primtives m/y allocation is in  heap


