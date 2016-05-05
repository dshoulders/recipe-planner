const periods = (state = [], action) => {
	switch (action.type) {
		
		case 'DATA_RECEIVE':
			return action.data.periods

		default:
			return state
	}
}

export default periods