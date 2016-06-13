export function addRecipe() {
	return (dispatch, getState) => {
		
		const state = getState()
		const id = state.nextId.recipe
		
		dispatch({
			type: 'RECIPE_ADD',
			id
		})
	}
}

export function updateRecipe(id, property, value) {
	return {
		type: 'RECIPE_UPDATE',
		id,
		property,
		value
	}
}

export function removeRecipe(id) {
	return {
		type: 'RECIPE_REMOVE',
		id
	}
}

export function setRecipeTag(recipeId, tagId, value) {
	return {
		type: 'RECIPE_SET_TAG',
		recipeId,
		tagId,
		value
	}
}