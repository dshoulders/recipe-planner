import { updateById } from '../utils'

const days = (state = [], action) => {
	
	switch (action.type) {
		
		case 'DATA_RECEIVE':
			return action.data.days
			
		case 'DAY_SET_TAG':
			let { dayId, tagId, value } = action
			
			let selectedTags = state.reduce((prev, day) => {
				return day.id === dayId ? day.allowedTags : prev
			}, {})
			
			if(value){
				selectedTags.push(tagId)
			} else {
				selectedTags.splice(selectedTags.indexOf(tagId), 1)
			}
			
			return updateById(state, action.dayId, 'tags', selectedTags)

		default:
			return state
	}
}

export default days