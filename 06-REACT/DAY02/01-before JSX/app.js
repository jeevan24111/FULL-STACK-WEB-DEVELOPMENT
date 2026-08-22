//nnow i know how to create Elements using normal js and basic react function

// let see how we can create it by using REACT pakcages

let ele=React.createElement('h1',{id:"first",className:"rahul",style:{
    backgroundColor:"blue",fontSize:"30px"
}},"hello i am reatc bro ");


// ReactDOM.render(ele,par);
/*
  render is discarded in java coz,if i open any website 
  it allows all cards to loads,until all cards are not loaded not allowed to click on any other options bcz js is single threaded

  so below method came,which allows user to click on any option any time withour worrying all cards are loaded or not


  now full control os given to react not js

  now it can respond to user request and handle by it own 

*/
let root=ReactDOM.createRoot(document.getElementById('header'));


//what is CDn

/*  CDN->content delivery network  */


/*main imfo like ->likes,view and commnets are stored in Server and they are sent from CDN

// and CDN HAVE photo and videos static info is stored in */

const ele5=React.createElement("h3",{id:"sec",className:"sec"},"hello");
root.render(ele5);
root.render(ele);

//prev info ele5 is deleted and ele is prsent 