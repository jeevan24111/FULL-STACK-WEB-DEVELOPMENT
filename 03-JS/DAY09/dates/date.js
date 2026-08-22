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

//practice

const time=new Date();
console.log(time)
console.log(time.toString())
console.log(time.toISOString())
console.log(time.toDateString())
console.log( typeof time)

//originally all are in miliseconds and that is converted into time

/*  calculated from 1970 JAN 1*/
const b1=new Date(2000);
console.log(b1)

//1970-01-01T00:00:02.000Z

console.log(time.getDate());
console.log(time.getDay());
console.log(time.getMonth());

//month and day are in o based 

console.log(time.getMinutes());
console.log(time.getTime());

const n2=Date.now();
console.log(n2);


const d=new Date("2002-03-26");
const d1=new Date("2002-03-22T10:10:12");  //T->Time is starting from heree
console.log(d);
console.log(d1);

const d3=new Date(2022,23,4);
const d4=new Date(2022,4,23,10,12,12,231);

//year/,month,date,hour,min,sec,milisecond
console.log(d3);
console.log(d4);


const d5=new Date();
d5 .setDate(23);
d5 .setFullYear(2027)
d5 .setHours(5);

console.log(d5 )

console.log(d5>d4);
console.log(d5-d4);
console.log(d5+d4);
console.log(d5<d4);


//COunt donw timer

const day=new Date();
const day2=new Date(2028,6,23,12,0,0);
const newday=day2-day;
console.log(newday)
// gives milisec->i want ot covert iinto proper time

const dyas=Math.floor(newday/(1000*60*60*24));
const hours=Math.floor(newday/(1000*60*60)%24);
const min=Math.floor(newday/(1000*60)%60);
const sec=Math.floor(newday/(1000)%60);


console.log(`olympic countdonw : DAYS :${dyas}  : Hours: ${hours} : Min:${min} :sec :${sec}`);