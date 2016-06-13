export function addTag() {
	return (dispatch, getState) => {
		
		const state = getState()
		const id = state.nextId.tag
		
		dispatch({
			type: 'TAG_ADD',
			id
		})
	}
}

export function updateTag(id, value) {
	return {
		type: 'TAG_UPDATE',
		id,
		value
	}
}

export function removeTag(id) {
	return {
		type: 'TAG_REMOVE',
		id
	}
}