//if else 

let age=20;

if(age>=18){
    console.log("eligible for voting")
}else{
    console.log("not visible for voting")
}

// if-else-if

if(age<18){
    console.log("u are minor");
}else if(age>18 && age <60){
 console.log("u are good to work");
}else{
    console.log("you are old person");
}

//switch 
let day=0;
switch(day){
    case 0:
    console.log("sunday");
    break;
    case 1:
    console.log("modany");
    break;
    case 2:console.log("tuesday");
    break;

    case 3:console.log("w");break;
    case 4:console.log("thurs");break;
    case 5:console.log("fri");break;
    case 6:console.log("sat");break;
    default:
        console.log("invalid day");
        break;
    
}