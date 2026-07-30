const quotes=["i am best","ok","yes","lets do this","never give up","thats it"
];

const button=document.querySelector('button');
const quote=document.querySelector('h1');

button.addEventListener('click',()=>{
   const index=Math.floor(Math.random()*quotes.length);
   quote.innerText=quotes[index];
});