/* PASTED FROM TEST RUN
// fetching data from https://www.themealdb.com/api/json/v1/1/random.php
// show it in the console
// show the data on the webpage

async function getRecipe() {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  let data = response.json();
  console.log(data);
}

getRecipe();
*/



import React from "react";
import SearchRecipe from "../SearchRecipe/index.js";
import './App.css';

function App() {
  return (
    <div className="App">
    <SearchRecipe />
    </div>
  );
}

export default App;
