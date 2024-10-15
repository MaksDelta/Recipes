import React from 'react';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  recipe: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <p>Category: {recipe.strCategory}</p>
      <p>Area: {recipe.strArea}</p>
      <Link to={`/recipe/${recipe.idMeal}`}>View Recipe</Link>
    </div>
  );
};

export default RecipeCard;
