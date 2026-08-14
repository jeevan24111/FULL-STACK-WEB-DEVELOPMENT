let time=document.getElementById('timer');
   let timings=new Date();


setInterval(() => {
// time.innerHTML=timings.toISOString(); 
// time.innerHTML=timings.getTime() gives miliseciond
time.innerHTML=timings.toUTCString();
// time.innerHTML=timings.toLocaleTimeString();
}, 1000);
