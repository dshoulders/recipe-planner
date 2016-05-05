const ui = (state = {
	view: 'WEEK'
}, action) => {
	switch (action.type) {
		
		case 'VIEW_CHANGE':	
			return Object.assign({}, ui, { view: ation.view })

		default:
			return state
	}
}

export default ui