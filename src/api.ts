import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

const fetchRecipes = async () => {
	const { data } = await axios.get(`${API_URL}/search.php?s=`);
	return data.meals;
};

const fetchRecipeById = async (id: string) => {
	const { data } = await axios.get(`${API_URL}/lookup.php?i=${id}`);
	return data.meals[0];
};

export { fetchRecipes, fetchRecipeById };
