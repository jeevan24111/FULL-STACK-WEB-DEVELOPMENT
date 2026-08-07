const d=new Date();
console.log(d);

// console.log(d.getTime());
// console.log(d.getFullYear());
// console.log(d.getTime());
// console.log(d.getMonth());

console.log(d.toDateString());

console.log(d.toString());

const d1=new Date(2000);
//calculate from 1970 jan 1 00:00
console.log(d1.getDate());
console.log(d1.getDay());

console.log(d1.getTime());
console.log(d1.getFullYear());
console.log(d1.getTime());
console.log(d1.getMonth());
console.log(d1.getTime());
console.log(d1.toISOString());
console.log(d1.toLocaleDateString());
console.log(d1.toJSON());
console.log(d1.toUTCString());

// all date are calculated in the from of milliseconds
//because z it gives in depth information

//Strings->we can also pass strings into dates
console.log("hello world");
const f1=new Date("2026-2-23");
console.log(f1);

const f2=new Date("2026-2-23-10:10:10");
console.log(f2.toString());

const f3=new Date(2026,2,10,9,25,25);
console.log(f3.toISOString());

//setting date inputs

const g1=new Date();
g1.setDate(25);
g1.setMonth(3);
g1.setFullYear(2026);
g1.setTime(10,10,10);

console.log(g1.toString());
console.log(g1);
console.log(g1.toLocaleDateString());
console.log(typeof g1);

//timer

const d2=new Date();
const d3=new Date(2028,7,14);

const date3=d3-d2;

const days=Math.floor(date3/(1000*60*60*24));
const hours=Math.floor(date3/(1000*60*60)%24);
const min=Math.floor(date3/(1000*60)%60);
const sec=Math.floor(date3/(1000)%60);

console.log("OlympicsIN\n Days: ${days} Hours: ${hours} Min: ${min} second ${sec}" );

