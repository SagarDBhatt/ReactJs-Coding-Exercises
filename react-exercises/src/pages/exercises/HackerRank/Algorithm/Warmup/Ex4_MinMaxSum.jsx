import React, {useState} from "react";

const CountMinMaxSum  = () => {
    const [inp, setInp] = useState([]);
    const [minSum, setMinSum] = useState(0);
    const [maxSum, setMaxSum] = useState(0);

    const handleChangeInput = (event) => {
        setInp(event.target.value.split(",").map(Number));
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        let sumArray = 0; 

        inp.map( (value,index)  => {
            // console.log("Val = " + value + " ind = " + index);
            sumArray += value;
        }) 
        
        inp.sort(function(a,b){return a-b});

        console.log("Sum - " + sumArray);
        console.log("After sorting = " + inp);

        setMinSum(sumArray - inp[inp.length - 1]);
        setMaxSum(sumArray - inp[0]);
    }

    return(
        <div>
            <h1>Test Sum:</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter the values: </label>
                <input onChange={handleChangeInput}></input>
                <button type="submit">Calculate</button>
            </form>
            <h1>Result : {minSum} {maxSum}</h1>
        </div>
    )
}

export default CountMinMaxSum;