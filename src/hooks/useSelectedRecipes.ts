import { useQuery } from "react-query";
import { fetchRecipes } from "../api";

const useSelectedRecipes = () => {
	return useQuery("selectedRecipes", fetchRecipes);
};

export default useSelectedRecipes;
