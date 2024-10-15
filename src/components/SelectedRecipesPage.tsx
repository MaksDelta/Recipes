import React from 'react';
import useSelectedRecipes from '../hooks/useSelectedRecipes';
import { Recipe } from '../models/Recipe';

const SelectedRecipesPage: React.FC = () => {
  const { data, error, isLoading } = useSelectedRecipes();

  if (isLoading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    // Тут додаємо перевірку на існування властивості message
    const errorMessage = (error as any).message || 'Сталася невідома помилка.';
    return <div>Помилка: {errorMessage}</div>;
  }

  return (
    <div>
      <h1>Вибрані рецепти</h1>
      <ul>
        {data.map((recipe: Recipe) => (
          <li key={recipe.idMeal}>{recipe.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedRecipesPage;