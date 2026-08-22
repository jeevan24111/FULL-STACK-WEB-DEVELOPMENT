let par=document.getElementById('root');


let child=document.createElement('li');
child.textContent="i am new heree";

// par.appendChild(ele)//add ele at last
// par.append(ele)//add ele at last

// par.prepend(ele)  ///at first

//before 1st child
let ele2=par.children[0];
// par.insertBefore(newnode,refernece node);
// par.insertBefore(child,ele2);

//replace child

let e3=par.children[2];
par.replaceChild(child,e3);


// par.innerHTML="Ts"   only gives ts

par.innerHTML+="TS";


let divele=document.createElement('div');
divele.innerHTML="hello coder jeevan";

// par.insertAdjacentElement("beforebegin",divele);
// par.insertAdjacentElement("beforeend",divele);
// par.insertAdjacentElement("afterend",divele);
par.insertAdjacentElement("afterbegin",divele);



//remove child

//get ele acess

// divele.remove();


par.removeChild(divele)
