

//how you can set or get properties of //writable enumerable: configurable]

let obj={};

obj.name="rohit";
console.log(Object.getOwnPropertyDescriptors(obj,'name'));

/*{
  name: {
    value: 'rohit',
    writable: true,
    enumerable: true,
    configurable: true
  }
*/
// writable: true,  i can change my value


let obj2={
    name:'rit'
};

Object.defineProperty(obj2,'name',{
    value:"rit",
     writable: false,

})

obj2.name="hello";

// does not allow to change
// configurable: false->u cannnot change wirtable or enumerable
console.log(obj2.name);
//eg in bank accn name doesnt change,acn number donot chnage so writabel false;
//configurable false->both enumerable and 


//3.enumerable


// let obj2={
//     name:'rit'
// };

//jis jis ka enuerbale true hoga unke key ko print karadega and inherit object enuerable jo jo true hai unko bhi print kara dega


let obj3=Object.create(obj);
obj3.id=102;
obj3.roll="admin";

Object.defineProperty(obj2,'name',{
    enumerable:false

}) 
for(let key in obj3){
    console.log(key,obj3[key])

    //gives
    // id,roll ,name will not come
}
console.log(Object.getOwnPropertyDescriptors(obj3,'name'));

