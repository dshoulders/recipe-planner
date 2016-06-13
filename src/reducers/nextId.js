const nextId = (state = {}, action) => {
	switch (action.type) {
		
		case 'DATA_RECEIVE':
			return action.data.nextId
			
		case 'RECIPE_ADD':
			return Object.assign(state, { recipe: state.recipe + 1 }) 
			
		case 'PERIOD_GENERATED':
			return Object.assign(state, { period: state.period + 1 })
			
		case 'TAG_ADD':
			return Object.assign(state, { tag: state.tag + 1 })

		default:
			return state
	}
}

export default nextId