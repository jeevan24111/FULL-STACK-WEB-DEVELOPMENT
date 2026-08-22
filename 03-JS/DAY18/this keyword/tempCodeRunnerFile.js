
let obj = {
    name:"g1",
    age:11,
    greet: function(){
        
        let ab = ()=>{
            console.log(this);
        };

        ab();

   }
}



obj.greet();