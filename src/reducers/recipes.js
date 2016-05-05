import { getNextId, updateById } from '../utils'

const recipes = (state = [], action) => {
	
	const createRecipe = (fields = {}) => Object.assign({
		id: getNextId(state),
		name: null,
		book: null,
		page: null,
		url: null,
		tags: []
	}, fields)	
	
	switch (action.type) {
		
		case 'DATA_RECEIVE':
			return action.data.recipes
		
		case 'RECIPE_UPDATE':	
			return updateById(state, action.id, action.property, action.value)			
			
		case 'RECIPE_ADD':
			return [createRecipe()].concat(state)
			
		case 'RECIPE_SET_TAG':		
			let { recipeId, tagId, value } = action
			
			let selectedTags = state.reduce((prev, recipe) => {
				return recipe.id === recipeId ? recipe.tags : prev
			}, {})
			
			if(value){
				selectedTags.push(tagId)
			} else {
				selectedTags.splice(selectedTags.indexOf(tagId), 1)
			}
			
			return updateById(state, action.recipeId, 'tags', selectedTags)
			
		case 'RECIPE_REMOVE':
			return removeById(state, action.id)

		default:
			return state
	}
}

export default recipes