//destructiing means taking out individual values

let obj={
    a:20,
    b:30,
    c:34,
    d:560,
    e:45
}

const {a,b}=obj;
console.log(a,b);

const {e,f,...c}=obj;
console.log(a,b) 
console.log(c) 


//alternate names 

const {a:first,b:sec,...obj2}=obj;
//...rest operator
console.log(first,sec)
console.log(obj2)

let arr=[3,4,5,56,67];
// const [a1,b1, , c1]=arr;
const [a1,b1,...c1]=arr;
console.log(a1)
console.log(b1)
console.log(c1)

//how to dstructre nested object
let bo={
    name:23,

    //u can also add array in object
    arr:[1,2,3,4],
    b:34,
    d:{
         e:45,
         f1:67,
         g1:23
    },
//fxns in object
    greet1:function(){
            console.log("hello");
    }
   
};

const {name}=bo;
console.log(name)

const {d:{f1,g1}}=bo;
console.log(f1,g1);

const {arr:[first1]}=bo;
console.log(first1);


bo.greet1();

