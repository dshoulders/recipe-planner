import { getNextId, updateById, removeById } from '../utils'

const tags = (state = [], action) => {
	
	const createTag = (fields = {}) => Object.assign({
		id: getNextId(state),
		text: null
	}, fields)
	
	switch (action.type) {
		
		case 'DATA_RECEIVE':
			return action.data.tags
		
		case 'TAG_ADD':	
			return [createTag()].concat(state)
			
		case 'TAG_UPDATE':
			return updateById(state, action.id, 'text', action.value)
			
		case 'TAG_REMOVE':
			return removeById(state, action.id)

		default:
			return state
	}
}

export default tags