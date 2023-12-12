import React, {useState} from 'react';

const DrawStaircase = (props) => {
    //console.log("Provided prosp = " + props.name + props.n);
    const [n, setN] = useState(0);
    const [resutlEx4, setResultEx4] = useState([]);

    const handleChangeN = (event) => {
        setN(event.target.value);
    }

    const handleSubmitEx4 = (e) => {
        e.preventDefault();

        for(var i = 0; i < n; i++){
            console.log("I loop: " + i);
            for(var  j = 0; j < n; j++){
                console.log("J Loop:: " + j)
                if(j < n - (i+1)){
                    setResultEx4(curr => [...curr, "-"]);
                }
                else{
                    setResultEx4(curr => [...curr, "#"]);
                }
            }
            setResultEx4(curr => [...curr, "*"]);
        }
    } 

    return(
        <div>
            <form onSubmit={handleSubmitEx4}>
                <label name="labelEx4N">Enter N: </label>
                <input type='text' id='inputN' onChange={handleChangeN}></input>
                <button type='submit'>Staircase</button>
            </form>
            <div>
                {resutlEx4.map((value,index) => 
                    {
                        console.log("Array val::  " + resutlEx4);
                        if(value == "*"){ 
                            console.log("Inside if **  " + index);
                            return(<br />);
                        }
                        else{
                            console.log("Inside else"+ index);
                            return(<span key={index}>{value}</span>);
                        } 
                    }
                )}
            </div>
        </div>
    )
}

export default DrawStaircase;