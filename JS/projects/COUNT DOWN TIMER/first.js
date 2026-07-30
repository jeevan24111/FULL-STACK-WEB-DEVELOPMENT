


setInterval(()=>{
    const result=document.getElementById('result');

const current=Date.now();
const  olympicTime=new Date(2028,6,14).getTime();
let timer=olympicTime-current;
//timer is in milliseconds
    const days=Math.floor((timer)/(1000*60*60*24));
timer%=(1000*60*60*24);

const hours=Math.floor((timer)/1000*60*60);
timer%=1000*60*60;

const min=Math.floor((timer)/1000*60);
timer%=1000*60;

const sec=Math.floor((timer)/1000);
timer%=1000;


result.textContent=`${days} :DAYS    ${hours} :HOURS  ${min}: MINUTE  ${sec} :SECS`;
},1000);



// console.log(current);