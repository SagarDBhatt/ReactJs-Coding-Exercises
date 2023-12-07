/**
 * Given the array, identify the ratio of +ves, -ves and 0 numbers with the 6 digits presicision. 
 */

import React, {useState, useEffect, useRef} from 'react';

const ArrayRatio = () => {

    const [taRatioResult, setTaRationResult] = useState([]);
    const [inpArr, setInpArr] = useState([]);
    const inputArrayDOM = useRef(null);

    useEffect( () => {
        console.log("New value added" + inpArr);
    }, [inpArr]);

    const handleClick = (e) => {
        e.preventDefault(); 

        let posCount = 0, negCount = 0, zeroCount = 0;
        for(var i = 0; i < inpArr.length; i++){
            if(inpArr[i] > 0)posCount++;
            else if(inpArr[i] < 0)negCount++;
            else zeroCount++;
        }
        setTaRationResult(current => [...current, (posCount/inpArr.length).toFixed(6)]);
        setTaRationResult(current => [...current, (negCount/inpArr.length).toFixed(6)]);
        setTaRationResult(current => [...current, (zeroCount/inpArr.length).toFixed(6)]);
    }

    const handleAddArrayElenments = (e) => {
        let newVal = document.getElementById("inputNumbers").value;
        // let newVal = inputArrayDOM.current;
        // console.log("NV = " + newVal);

        e.preventDefault();
        setInpArr(curr => [...curr, newVal]);
        console.log(inpArr);
    }

    // const handleSubmit = (e) => {
    //     alert("Handle submit clicked!!");
    // }

    return(
       <div>
        <form>
            <lable>Enter the Array elements by comma separated</lable>
            <input type='number' id='inputNumbers' ref={inputArrayDOM}></input>
            <button onClick={handleAddArrayElenments}>Add Elements</button>
            <label>The Ratio is: </label>
            <textarea id='taRationResult' value={taRatioResult}></textarea>
            <button onClick={handleClick}>Calc Ratio</button>
            {/* <button type='submit'>Submit</button> */}
        </form>
       </div>
    )
}

export default ArrayRatio;