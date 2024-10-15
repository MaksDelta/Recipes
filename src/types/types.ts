// /types/types.ts
export interface Recipe {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	strCategory: string;
	strArea: string;
	strInstructions: string;
	strIngredient1: string;
	strIngredient2: string;
	// Додайте інші інгредієнти та властивості, якщо потрібно
}

export interface RecipeAPIResponse {
	meals: Recipe[];
}
