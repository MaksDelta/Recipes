import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchRecipeById } from '../services/api';
import { Recipe } from '../types/types';

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Використання useQuery
  const { data, error, isLoading } = useQuery(['recipe', id], () => fetchRecipeById(id!), {
    enabled: !!id, // Запит виконується тільки якщо id існує
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{(error as Error).message}</div>;

  // Перевірка на наявність даних
  if (!data || !data.meals || data.meals.length === 0) {
    return <div>Recipe not found</div>;
  }

  const recipe: Recipe = data.meals[0];

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
      <ul>
        {Array.from({ length: 20 }, (_, index) => {
          const ingredient = recipe[`strIngredient${index + 1}`];
          const measure = recipe[`strMeasure${index + 1}`];

          return ingredient ? <li key={index}>{measure} {ingredient}</li> : null;
        })}
      </ul>
    </div>
  );
};

export default RecipePage;
