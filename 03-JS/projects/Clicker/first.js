const body=document.querySelector('body');

body.addEventListener('click',(e)=>{
    console.log(e.clientX,e.clientY);
    const msg=["hiii","helllo", "HOLA","NAMASKAR"]
    const ele=document.createElement('div');
    ele.classList.add('circle');
   ele.textContent=msg[Math.floor(Math.random()*msg.length)];
    const color=["red","pink","purple","green","yellow","blue"];
   ele.style.backgroundColor=color[Math.floor(Math.random()*color.length)];

   ele.style.top=`${e.clientY-25}px`;
   ele.style.left=`${e.clientX-25}px`;


   body.append(ele);

   setTimeout(()=>{
        ele.remove();
   },5000)

   //they are still present there becoz opacity is 0 it is not vsible if it is set 1 all are present there we havw to remove them all
})