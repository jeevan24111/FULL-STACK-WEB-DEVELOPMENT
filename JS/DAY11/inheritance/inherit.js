let user1={
    name:"anc",
    ahe:20
}

let user2={
    amount:20,
    money:50
}


//here user 1 and user 2 are diff and if  i say user2 to sccess user1 details gives error
//if he wants access user1 i have to __proto__
console.log(user1)
console.log(user2)

console.log(user1.amount)
console.log(user2.name);
user2.__proto__=user1;
console.log(user1)
console.log(user2.name)
console.log(user2.ahe)

// user2.__proto__.__proto__=user1;
// console.log(user.__proto__.__proto__);

let arr2=[89,90,89,99];
console.log(arr2.__proto__==Array.prototype)
console.log(arr2.__proto__.__proto__==Object.prototype)
console.log(arr2.__proto__.__proto__.__proto__==null);