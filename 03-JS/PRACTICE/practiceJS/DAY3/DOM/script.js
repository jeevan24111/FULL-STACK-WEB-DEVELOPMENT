let h1=document.querySelector('h1');
// console.dir(h1);

// h1.textContent="hello jee kaise ho";
// h1.innerText="hell0";
// these 2 above are same

// h1.innerHTML="<i>hey</>"

//change bhi karega aur innerhtml bhi dalega;

h1.hidden=true;
//hides h1 html->dom ko manipulate

// attributes->name,lang,content,href etc
//manipulating them is attribute manipulation


let a=document.querySelector('a');
// console.dir(a);
//if href is not given website link is given to it
// a.href="https://www.google.com"
a.setAttribute('href',"https://www.google.com");
let img=document.querySelector('img');
img.setAttribute('src',"./Screenshot_2026-02-25-21-56-35-167_com.google.android.googlequicksearchbox.png")

//event and event listener

let inp=document.querySelector("input");
inp.addEventListener("input",function(evt){
    console.log(evt.data);
})

let mouse=document.querySelector('mouse');
mouse.addEventListener("mouseover",()=>{
    
})