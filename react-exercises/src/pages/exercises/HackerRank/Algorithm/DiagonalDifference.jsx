import React, {useState} from "react";

const SolveDiagonalDifference = () => {

    const [array, setArray] = useState([[1,2,3], [4,5,6], [9,8,9]]);
    const [difference, setDifference] = useState(0);
    const [leftDiagonal, setLeftDiagonal] = useState(0);
    const [rightDiagonal, setRightDiagonal] = useState(0);

    const handleDiagonalDifference = () => {
        let leftDiagonal = 0; 
        let rightDiagonal = 0; 

        for(var i = 0; i < array.length; i++){
            //console.log(array[i]);

            for(var j =0; j < array[i].length; j++){
                //console.log("array[i][j]" + array[i][j]);
                if(i == j){
                    console.log("LD = " + array[i][j]);
                    leftDiagonal += array[i][j];
                }
                if(i == (array[i].length-j-1)){
                    console.log("Right DD = " + array[i][j]);
                    rightDiagonal +=  array[i][j];
                }
            }
        }

        setDifference(Math.abs(leftDiagonal-rightDiagonal));
    }

    const handleSubmitDD = (e) => {
        e.preventDefault();
        handleDiagonalDifference();
    }   

    return(
        <div>
            <form onSubmit={handleSubmitDD}>
                <button id="btnFindDD" type="submit">Find Diagonal Difference</button>
                <lable>Diagonal Difference is: </lable>
                <textarea value={difference}></textarea>
            </form>
        </div>

    )

}

export default SolveDiagonalDifference;