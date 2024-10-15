import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchRecipes } from '../services/api';
import { Recipe } from '../types/types';
import RecipeCard from '../components/RecipeCard';
import Pagination from '../components/Pagination';

const RecipesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useQuery(['recipes', page], () => fetchRecipes(page));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{(error as Error).message}</div>;

  // Перевірка наявності даних
  if (!data || !data.meals || data.meals.length === 0) {
    return <div>No recipes found</div>;
  }

  return (
    <div>
      <h1>All Recipes</h1>
      <div className="recipe-grid">
        {data.meals.map((recipe: Recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
      <Pagination page={page} totalPages={10} onPageChange={setPage} />
    </div>
  );
};

export default RecipesPage;
