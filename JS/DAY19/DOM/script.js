console.log("hello coder army");

//how i can manipulate the html by js is dom
let obj=document.getElementById('first').innerText="hello";
console.log(obj);

obj.innerText="hello";

console.log(obj.id);
// document if this not works
console.dir(document);


//acessing elements in js

// 1.by id
// 2/by class name

let obj=document.getElementsByClassName("header2");
obj[2].style.backgroundColor="pink"