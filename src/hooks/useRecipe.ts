import { useQuery } from "react-query";
import { fetchRecipeById } from "../api";


const useRecipe = (id: string) => {
	return useQuery(["recipe", id], () => fetchRecipeById(id));
};

export default useRecipe;
