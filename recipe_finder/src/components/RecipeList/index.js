// .map(recipeList state) and display <Recipe/> components
// rendering: Title and <Recipe />
// props (recipeList)
import Recipe from "../Recipe/index";

function RecipeList() {
  return (
    <div id="recipe-list">
      <h1>Here are our suggestions:</h1>
      <Recipe />
    </div>
  );
}

export default RecipeList;
