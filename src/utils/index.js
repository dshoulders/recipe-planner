import moment from 'moment'

export const isSearchMatch = (text, searchText) => {
	const regex = new RegExp(searchText, 'gi')
	return regex.test(text)
}

export const haveMatchingItem = (arr1, arr2) => {	
	return arr1.reduce((matched, item) => {
		return matched || arr2.indexOf(item) >= 0
	}, false)
}

export const update = (item, prop, value) => {
	return Object.assign({}, item, {
		[prop]: value
	})
}

export const getById = (collection, id) => {
	return collection.reduce((match, item) => {
		let result = match
		
		if(result === null) {
			result = item.id === id ? item : null
		}
		
		return result
	}, null)
}

export const updateById = (collection, id, prop, value) => {
	return collection.map(item => {
		if(item.id === id){
			return update(item, prop, value)
		} else {
			return item
		}
	})
}

export const removeById = (collection, id) => {
	return collection.reduce((itemsToKeep, item) => {
		if(item.id !== id) {
			itemsToKeep.push(item)
		}
		
		return itemsToKeep
	}, [])
}

export const postJSON = (url, data) => {

	return fetch(url, {
		headers: {
			"Content-Type": "application/json",
			"pwd": sessionStorage.getItem('pwd')
		},
		method: "POST",
		body: JSON.stringify(data)
	})
	.then(res => res.json())
}

export const getNextStartDate = (lastStartDate = new Date()) => {
	const mondayFollowingLastPeriod = moment(new Date(lastStartDate)).add(28, 'days')
	const mondayFollowingToday = moment(new Date()).day(8)
	
	return Math.max(mondayFollowingLastPeriod, mondayFollowingToday)
}

const getLastUsed = (item, currentList, previousList) => {
	
	const currentListIndex = currentList.lastIndexOf(item.id)
	const previousListIndex = previousList.lastIndexOf(item.id)	
	
	return currentListIndex >= 0 ? currentList.length - currentListIndex : 
		previousListIndex >= 0 ? previousList.length - previousListIndex + currentList.length :
			null
}

const selectRecipe = (index, recipes, currentList, previousList, days) => {
	
	const dayId = index % 7
	const allowedTags = getById(days, dayId).tags
	const recipeCount = recipes.length
	
	const preferences = recipes.map(recipe => {
		
		const { id } = recipe
		const isValid = haveMatchingItem(recipe.tags, allowedTags)
		let lastUsed = null
		let score = 0
		
		if(isValid) {
			lastUsed = getLastUsed(recipe, currentList, previousList)		
				
			if(lastUsed) {
				score = lastUsed
			} else {
				score = previousList.length + currentList.length + Math.floor(Math.random() * 100)
			}
		}
		
		return { id, score }
	})
	
	const highestPreference = preferences.reduce((highest, current) => {
		return current.score > highest.score ? current : highest
	}, { id: null, score: 0 })
	
	return highestPreference.id
}

export const generateRecipeList = (state) => {

	const latestPeriod = state.periods[state.periods.length - 1]
	const previousRecipeList = latestPeriod ? latestPeriod.recipes : []
	const { recipes, tags, days } = state		
		
	const recipeList = []
	
	for(let i = 0; i < 28; i++){
		recipeList.push(selectRecipe(i, recipes, recipeList, previousRecipeList, days))
	}
	
	console.log(recipeList)
	
	return recipeList
}