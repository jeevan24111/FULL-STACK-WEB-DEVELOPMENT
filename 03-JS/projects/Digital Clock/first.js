const div=document.querySelector('div');


setInterval(()=>{
let time=new Date();
  div.textContent=time.toLocaleString();

},1000);

// let time=new Date();
//   div.textContent=time.toLocaleString();

  //but problem is time is not changing so we have to refresh it is a problem