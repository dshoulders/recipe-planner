let savedState = {}

export const update = (item, prop, value) => {
	return Object.assign({}, item, {
		[prop]: value
	})
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

export const getNextId = collection => collection.reduce((nextId, currentItem) => {
	return Math.max(nextId, currentItem.id + 1)
}, 1)

export const autoSave = (store) => {
	setInterval(() => {
		const currentState = store.getState()
		
		if(currentState !== savedState && currentState.haveData){
			savedState = currentState
			
			postJSON('/api/save', currentState).then(repsonse => {
				
			})
		}
	}, 1000)
}

export const postJSON = (url, data) => {

	return fetch(url, {
		headers: {
			"Content-Type": "application/json"
		},
		method: "POST",
		body: JSON.stringify(data)
	})
	.then(res => res.json())
}