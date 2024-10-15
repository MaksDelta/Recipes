import { useQuery } from "react-query";
import { fetchRecipes } from "../api";

const useRecipes = () => {
	return useQuery("recipes", fetchRecipes);
};

export default useRecipes;
