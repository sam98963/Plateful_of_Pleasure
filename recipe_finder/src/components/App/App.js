/* PASTED FROM TEST RUN
// fetching data from https://www.themealdb.com/api/json/v1/1/random.php
// main ingredient https://www.themealdb.com/api/json/v1/1/filter.php?i=${search} 
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

import React, { useState } from "react";
import SearchRecipe from "../SearchRecipe/index.js";
import "./App.css";
import RecipeList from "../RecipeList/index.js";

// API function
async function getRecipe(search) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
  );
  let data = response.json();
  console.log(data);
}

getRecipe();

function App() {
  return (
    <div className="App">
      <SearchRecipe getRecipe={getRecipe} />
      <RecipeList />
    </div>
  );
}

export default App;
