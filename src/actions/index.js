export function requestData() {
	return {
		type: 'DATA_REQUEST'
	}
}

export function receiveData(data) {
	return {
		type: 'DATA_RECEIVE',
		data
	}
}

export function fetchData() {

	return function (dispatch) {

		dispatch(requestData())

		return fetch('/api/data')
			.then(response => response.json())
			.then(json => dispatch(receiveData(json)))
	}
}

export function addRecipe() {
	return {
		type: 'RECIPE_ADD'
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

export function removeRecipe(id){
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

export function setDayTag(dayId, tagId, value) {
	return {
		type: 'DAY_SET_TAG',
		dayId,
		tagId,
		value
	}	
}

export function addTag() {
	return {
		type: 'TAG_ADD'
	}
}

export function updateTag(id, value) {
	return {
		type: 'TAG_UPDATE',
		id,
		value
	}
}

export function removeTag(id){
	return {
		type: 'TAG_REMOVE',
		id
	}
}