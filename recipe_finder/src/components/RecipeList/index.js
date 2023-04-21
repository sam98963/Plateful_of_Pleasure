// .map(resultsList state) and display <Recipe/> components
// rendering: Title and <Recipe />
// props (recipeList)
import Recipe from "../Recipe/index";
import './recipeList.css'

// show a Recipe component for eact index of the resultsList

/* {results.map((e) => (
    <Recipe title={e.} />
))}
*/

function RecipeList({ resultsList }) {
  return (
    <div id="recipe-list">
      <h1>Here are our suggestions:</h1>
      {resultsList.map((e) => (
        <Recipe id={e.idMeal} title={e.strMeal} image={e.strMealThumb} />
      ))}
      ;
    </div>
  );
}

export default RecipeList;
