import { removeById } from '../utils'

const periods = (state = [], action) => {
	
	switch (action.type) {
		
		case 'DATA_RECEIVE':
			return action.data.periods
			
		case 'PERIOD_GENERATED':
			return state.concat(action.newPeriod)
			
		case 'PERIOD_REMOVE':
			return removeById(state, action.id)

		default:
			return state
	}
}

export default periods