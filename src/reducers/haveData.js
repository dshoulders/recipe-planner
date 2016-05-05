const haveData = (state = false, action) => {
	switch (action.type) {
		
		case 'DATA_RECEIVE':
			return true

		default:
			return state
	}
}

export default haveData