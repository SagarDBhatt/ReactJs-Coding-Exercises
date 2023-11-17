import React, {useState} from "react";

const CounterApp = () => {

    let [counter, setCounter] = useState(0);

    let increament = () => {
        console.log("Increament func");
        setCounter(counter + 1);
    }

    let decreament = () => {
        console.log("decreament");
        setCounter(counter - 1);
    }

    return(
        <div id="counterAppParentTag">
            <h1>Counter - {counter} </h1> 
            <button id="increament" onClick={increament}>Increament</button>
            <button id="decreament" onClick={decreament}>Decreament</button>
        </div>
    )

}

export default CounterApp;