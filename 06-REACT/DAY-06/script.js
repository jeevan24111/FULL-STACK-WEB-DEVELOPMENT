import  React from 'react' ;
import ReactDOM from 'react-dom/client' ;

/* useState
why we use useState in react js
useState is a hook that allows you to add state management to functional components in React. It enables you to declare state variables and update them, which helps in managing the dynamic data of your application.


first we have to import react and react-dom in our script.js file
then we have to create a function component and inside that we have to use useState hook to create a state variable and then we have to create two functions to increment and decrement the state variable and then we have to return the jsx code to render the component in the dom.

once we have created the component we have to use ReactDOM.createRoot to create a root element and then we have to use the render method to render the component in the dom.

once increment and decrement button is clicked the state variable will be updated and the component will be re-rendered with the updated state variable.

setCount is a function that is used to update the state variable count. It takes the new value of count as an argument and updates the state variable with the new value. When setCount is called, React will re-render the component with the updated state variable.

render method is used to render the component in the dom. It takes the component as an argument and renders it in the dom. When the state variable is updated, React will re-render the component with the updated state variable.

function calling is used to call a function when an event occurs. In this case, we are using the onClick event to call the increment and decrement functions when the buttons are clicked. When the button is clicked, the corresponding function will be called and the state variable will be updated.
*/




function Counter() {
    let [count,setCount] = React.useState(0);


    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }
    
    return (
        <div className='counter'>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );

}

const ele=ReactDOM.createRoot(document.getElementById('root'));
ele.render(<Counter />);