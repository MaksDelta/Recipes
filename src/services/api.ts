import axios from "axios";
import { RecipeAPIResponse } from "../types/types";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

// Функція для отримання всіх рецептів
export const fetchRecipes = async (page: number): Promise<RecipeAPIResponse> => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=&page=${page}`);
  if (!response.ok) {
    throw new Error('Error fetching recipes');
  }
  return response.json();
};


export const fetchRecipeById = async (id: string) => {
	const response = await axios.get(
		`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
	);
	return response.data;
};

export const searchRecipes = async (query: string) => {
	const response = await axios.get(`${API_URL}/search.php?s=${query}`);
	return response.data;
};
