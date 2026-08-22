const form=document.querySelector('form');


form.addEventListener('submit',(e)=>{
    e.preventDefault(); // prevents from default submit 
    const boy=document.getElementById('boy');
    const girl=document.getElementById('girl');

    //i want there value if i want id i do boy.id now i need values so do boy.values

        const t1=boy.value.length;
        const t2=girl.value.length;

        const result=Math.pow(t1+t2,3)%101;

        document.querySelector('h2').textContent=`Result :${result} %`;
        form.reset();
})

//now problem is jaise hi submit kiya data nahi dikh raha hai
// so add e.preventdefault();

// if submit manually i have to reset form ..now i need automatic reset after result--form.reset();