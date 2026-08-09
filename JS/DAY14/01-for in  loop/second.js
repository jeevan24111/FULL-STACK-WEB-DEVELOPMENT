//for in loop is not used for array

//why

let arr=[1,2,3,4]
arr.name="abc";

arr.age=20;

for(let key in arr){
    console.log(key,arr[key]);

    //o/p
    /*  0 1
        1 2
        2 3
        3 4
        name abc
        age 20

        giving key names as index which is not valid for array
        but we want only index not string 

        interview ques
        use basic loop for array not for in loop
        */
}
//array is on object



