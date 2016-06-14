import { removeById, updateById, isSearchMatch } from '../utils'

const recipeSearch = (state = { searchText: '', visibleRecipeIds: [] }, action) => {
	
	const getVisibleRecipeIds = (recipes, searchText) => recipes.reduce((accumulatedIds, currentRecipe) => {

		if(isSearchMatch(currentRecipe.name, searchText)){
			accumulatedIds.push(currentRecipe.id)
		}

		return accumulatedIds
	}, [])
	
	switch (action.type) {

		case 'DATA_RECEIVE':
			return {				
				searchText: state.searchText,
				visibleRecipeIds: action.data.recipes.map(recipe => recipe.id)
			}
		
		case 'RECIPE_SEARCH':
			return {
				searchText: action.searchText,
				visibleRecipeIds: getVisibleRecipeIds(action.recipes, action.searchText)
			}
		
		default:
			return state
	}
}

export default recipeSearch