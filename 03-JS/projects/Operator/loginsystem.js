let hasEmail=false;
let hasPhone=true;
let isVerified=true;
let isBanned=false;

let canLogin = ()=>{
    if((hasEmail || hasPhone) && isVerified && !isBanned){
            console.log("You are welcome");
    }
    else{
        console.log("Unauthorized Access");
    }
}

let recovery=()=>{
    if(hasEmail){
        console.log("Email recovery possible");
    }
    else if(hasPhone){
        console.log("SMS recovery Possible");
    }
    else{
        console.log("NO recovery Possible");
    }

}

let hasAccess=(name)=>{
    if((isVerified && !isBanned) &&(hasEmail|| hasPhone)){
        console.log("Welcome "+ name);
    }
    else{
        console.log("Unauthorized Access");
    }
}

// canLogin();

// recovery();

hasAccess("jeevan");