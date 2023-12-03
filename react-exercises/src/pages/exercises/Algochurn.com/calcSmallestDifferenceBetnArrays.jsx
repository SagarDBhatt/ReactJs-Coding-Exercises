//Give the 2 arrays, iterate each elements and find the elements with the minimal differences. 

import React, {useState} from "react";

const CalculateTheSmallestDifference = () => {

    const [array1, setArray1] = useState([-1, 5, 10, 20, 28, 3]);
    const [array2, setArray2] = useState([26, 134, 135, 15, 17]);
    const [resultArr, setResultArr] = useState([]);

    const calcTheSmallestDistance = (arr1, arr2) => {
        let minDistance = 10000000; 
        let newArr = [...resultArr];

        for(let i = 0; i < arr1.length; i++){
            for(let j = 0; j < arr2.length; j++){
                if( Math.abs(arr1[i] - arr2[j] ) < minDistance){
                    minDistance = Math.abs(arr1[i] - arr2[j]);
                    // newArr.push(arr1[i]);
                    // newArr.push(arr2[j]);
                    newArr[0] = arr1[i];
                    newArr[1] = arr2[j];

                    console.log(newArr);
                } 
            }//EofFor J
        }//EofFor I
        return newArr;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setResultArr(calcTheSmallestDistance(array1, array2));
    }

    return(
        <div id="smallestDistance">
            <form id="calcMinDist" onSubmit={handleSubmit}>
                <label id="smallestDistanceLabel">The smallest Distance Pair:</label>
                <textarea id="answerSmallestDistance" value={resultArr}></textarea>
                <button type="suibmit">CalcDistance</button>
            </form>

        </div>
    )
}

export default CalculateTheSmallestDifference;