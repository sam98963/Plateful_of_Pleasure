//  Input element - Be able to input a search term to find a desired recipe from the API 
//  Submit button - Add a search button to send the request
//  Import a new useState
//  Set the new state to be input and setInput (initial state as empty string)
//  A function that saves the value of the input box to the input state 
//  

import { useState } from "react";



function SearchRecipe(){

const [input, setInput] = useState("");

console.log(input);

return (

    <div>
    <label>Search Recipes:
    <input type="text" onChange={(e) => {setInput(e.target.value)}}></input>
    </label>
    <button type="submit">Search</button>
    
    </div>
    
)

}

export default SearchRecipe;