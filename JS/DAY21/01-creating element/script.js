//  let par=document.getElementById('root');

//  //1.createElement

//  let ele=document.createElement('li');
//  ele.innerHTML="git";

//  par.appendChild(ele);

//  let root=document.getElementById('hi');
// //  root.textContent="hello i am DOM ";
// //  root.innerText="helllo";
// // root.innerHTML=<h1>hello</h1>;
// root.textContent="hello bro";


//  let root1=document.getElementsByClassName('when1');
//  root1.textContent="hello i am also dom";

// let p1=document.querySelector('#p1');
// p1.textContent="hello i am para";


// let li=document.querySelectorAll('.when1');
// li.textContent="hello";

let li=document.getElementById('hi');
let create=document.createElement('p');
let create1=document.createElement('li');
create.textContent="p ppppp";
create1.innerHTML="p ppppp";
li.appendChild(create);
li.append(create,create1);

//create textnode

let li2=document.querySelector('ul');

let text=document.createTextNode("helli o i am text nde");
li2.append(text)

//create attrbutes
let attr=document.createAttribute('id'); //which one u are creating
attr.value="unorder";

li2.setAttributeNode(attr);


//access to 2nd node in list

// console.log(li2.children[3])->gives child

let li2=document.querySelector('ul');
li2.children[0].setAttributeNode(attr)


console.log(li2.getAttribute('id'));  //get attribute
li2.setAttribute("style","value");
li2.setAttribute("id","value");


li2.removeAttribute("style");

let ai=document.querySelector('p');
let a1=document.createAttribute('class');
a1.value="ppp";
ai.setAttribute(a1);

ai.setAttribute('id','changed')

li2.children[2].setAttribute('id','sec');