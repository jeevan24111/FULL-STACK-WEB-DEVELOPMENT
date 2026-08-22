let subtotal=150;
let isMember=true;
let couponCode="SAVE20";
let isHoliday=true;

let discount=()=>{
    if(subtotal>100 && isMember && couponCode==="SAVE20" && isHoliday){
        let am= (subtotal*0.3);
        return subtotal-am;
    }
    else if(subtotal>100 && isMember){
            let am=(subtotal*0.25);
            return subtotal-am;
    }else if (subtotal>100 && couponCode==="SAVE20"){
            let am=(subtotal*0.15);
            return subtotal-am;
    }else if(subtotal>100 && isHoliday){
        let ax=(subtotal*0.10);
        return subtotal-ax;
    }else{
        return subtotal;
    }
}
let amount=discount();
console.log(`Your Final bill is ${amount}`);