 let par=document.getElementById('root');

 //1.createElement

 let ele=document.createElement('li');
 ele.innerHTML="git";

 par.appendChild(ele);

 let root=document.getElementById('hi');
//  root.textContent="hello i am DOM ";
//  root.innerText="helllo";
// root.innerHTML=<h1>hello</h1>;
root.textContent="hello bro";


 let root1=document.getElementsByClassName('when1');
 root1.textContent="hello i am also dom";

let p1=document.querySelector('#p1');
p1.textContent="hello i am para";


let li=document.querySelectorAll('.when1');
li.textContent="hello";


