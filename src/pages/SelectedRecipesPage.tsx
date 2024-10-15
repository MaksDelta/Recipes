const SelectedRecipesPage: React.FC<{ selectedRecipes: any[] }> = ({ selectedRecipes }) => {
  const combinedIngredients = selectedRecipes.reduce((acc, recipe) => {
    recipe.ingredients.forEach((ingredient: string) => {
      acc[ingredient] = (acc[ingredient] || 0) + 1;
    });
    return acc;
  }, {});

  return (
    <div>
      <h1>Selected Recipes</h1>
      {selectedRecipes.map((recipe) => (
        <div key={recipe.idMeal}>{recipe.strMeal}</div>
      ))}
      <h2>Combined Ingredients</h2>
      <ul>
        {Object.entries(combinedIngredients).map(([ingredient, count]) => (
          <li key={ingredient}>
            {ingredient}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedRecipesPage;
