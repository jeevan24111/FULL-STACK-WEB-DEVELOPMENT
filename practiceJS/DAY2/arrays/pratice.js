let name=["a","b","c","d"];
// for(let i of names){
//     console.log(i);
// }

name.forEach(element => {
    console.log(element);
});

let marks=[10,50.60,70];
let res=marks.some((val)=>{
    return val<30;
});
console.log(res);

console.log(marks.reverse());
let [a,b,c]=[10,20,30];
console.log(a);
console.log(b);