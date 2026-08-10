//map in js  
/*
In JavaScript, a Map is a collection of key-value pairs where both the keys
and the values can be any data type (primitive or object). Unlike regular
JavaScript objects, a Map maintains the order of its elements based on
insertion and allows keys of any type (even objects, functions, and primitive
types), whereas objects only allow strings or symbols as keys.
•
1
set(key, value)
get(key)
has(key)
delete(key)
clear()
Size
for (let [key, value) of map) { console.log(key, value); }
map.forEach((value, key) => { console.log(key, value);

*/

let map=new Map();
map1.set(3,9);
map1.set(3,"abc");
map1.set(3.23,"abc");
map1.set(true,"abc");

console.log(map1)