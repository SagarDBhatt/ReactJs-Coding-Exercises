import React, {useState} from 'react';

const TimeConversion = () => {
    const [inputTime, setInputTime] = useState('');
    const [result,setResult] = useState('intialValue');

    const handleIpTime = (e) => {
        e.preventDefault();
       if(e.target.value.match("^([0-9]{2}:[0-9]{2}:[0-9]{2})(AM|PM)$")){
        console.log("Correct format = " + e.target.value);
        setInputTime(e.target.value);
       }
       else{
        console.log("Wrong input: " + e.target.value);
       }
    }

    const handleSubmitTC = (e) => {
        e.preventDefault();

        console.log(inputTime.split(":")[0]);
        console.log(inputTime.substring(inputTime.length-2));

        var timezoneIdentifier = inputTime.substring(inputTime.length-2);

        if(timezoneIdentifier == "AM"){
            if(inputTime.split(":")[0] == '12'){
                var updatedTime = inputTime;
                updatedTime = "00" + updatedTime.substring(2, inputTime.length-2);
                console.log("Updated time - " + updatedTime);
                setResult(updatedTime);
            }
            else{ 
                setResult(inputTime.substring(0,inputTime.length-2))
            }
        }
        else{
            if(inputTime.split(":")[0] == '12'){
                var updatedTime = "12" + inputTime.substring(2, inputTime.length-2);
                setResult(updatedTime);
            }
            else{
                var updatedTime = inputTime;
                updatedTime = parseInt(inputTime.split(":")[0],10) + 12 + inputTime.substring(2, inputTime.length - 2);
                setResult(updatedTime);
            }
        }
        

    }

    return(
        <div>
            <form onSubmit={handleSubmitTC}>
                <label for='ipTime'>Enter time in AM/PM format</label>
                <input id='ipTime' onChange={handleIpTime}></input>
                <button type='submit'>Convert</button>
                <textarea value={result}></textarea>
            </form>
        </div>
    )
}

export default TimeConversion;