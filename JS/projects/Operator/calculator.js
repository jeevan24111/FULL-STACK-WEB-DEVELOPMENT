  
  function calculator(num1,num2,operator){
        if(operator==="+"){
            return num1+num2;
        }else if(operator==="-"){
            return num1 -num2;
        }else if(operator==="*"){
            return num1*num2;
        }else if(operator==='/'){
            if(num2===0){
                console.log("division is not possible");
            }else{
                return num1/num2;
            }
        }
        
    }

console.log(calculator(2,3,"+"));
console.log(calculator(6,3,"-"));
console.log(calculator(2,3,"*"));
console.log(calculator(2,4,"/"));
console.log(calculator(20,3,"-"));