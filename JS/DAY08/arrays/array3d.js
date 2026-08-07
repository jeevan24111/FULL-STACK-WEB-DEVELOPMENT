let D3=[1,2,[3,[3,1]],4,5];

console.log(D3)
console.log(D3[2][0])
console.log(D3[2][1][0])


//cobert to normal

let a1=D3.flat(Infinity);  // go to array covert to 1d
console.log(a1)


let a2=[1,2,3,4]
console.log(Array.isArray(a2));

let ac=new Array(3);  // 3->gives array size 
console.log(ac.length)
console.log(ac)

//in Js array dont follow contiguos memory allocation