import React, {useState} from "react";

const FindLevenshteinDistance = () => {

    const [string1, setString1] = useState();
    const [string2, setString2] = useState();
    const [result, setResult] = useState();

    const handleChangeS1 = (event) => {
        setString1(event.target.value);
    }

    const handleChangeS2 = (event) => {
        setString2(event.target.value);
    }

    const handlesubmit = (e) => {
        // alert("Given values - " + string1 + " - " + string2);
        // setResult(string1+string2);

        //To avoid the auto-refreshing of the page. 
        e.preventDefault();

        //Find the minimum distance among the 2 strings: 
        let distance = findTheMinimumDistance(string1, string2);
        setResult(distance);
    }

    const findTheMinimumDistance = (str1, str2) => {
        const track = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null));
        for (let i = 0; i <= str1.length; i += 1) {
            track[0][i] = i;
        }
        for (let j = 0; j <= str2.length; j += 1) {
            track[j][0] = j;
        }
        for (let j = 1; j <= str2.length; j += 1) {
            for (let i = 1; i <= str1.length; i += 1) {
                const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
                track[j][i] = Math.min(
                    track[j][i - 1] + 1, // deletion
                    track[j - 1][i] + 1, // insertion
                    track[j - 1][i - 1] + indicator, // substitution
                );
            }
        }
        return track[str2.length][str1.length];

    }

    return(
        <div id="divLevenshteinDistance">
            <h1>Test</h1>
            <form onSubmit={handlesubmit}>
                <lable>Enter first String: 
                    <input type="text" name="string1" value={string1} onChange={handleChangeS1}></input>
                </lable>
                <label>Enter Second String:
                    <input type="text" name="string2" value={string2} onChange={handleChangeS2}></input>
                </label>
                <button type="submit">Submit</button>
                <br></br>
                <textarea id="resultTextArea" value={result}></textarea>
            </form>
            {/* <input id="stringOne">Enter First String: </input>
            <input id="stringTwo">Enter Sencond String: </input> */}
        </div>
    )
}//end of function

export default FindLevenshteinDistance;