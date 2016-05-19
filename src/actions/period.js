import { getNextId, getNextStartDate, generateRecipeList } from '../utils'

export function addPeriod() {
	
	return (dispatch, getState) => {
		
		const state = getState()
		const lastStartDate = state.periods[state.periods.length - 1].startDate
		
		const newPeriod = {
			id: getNextId(state.periods),
			startDate: getNextStartDate(lastStartDate),
			recipes: generateRecipeList(state)
		}
		
		dispatch({
			type: 'PERIOD_GENERATED',
			newPeriod
		})
	}	
}

export function removePeriod(id) {
	return {
		type: 'PERIOD_REMOVE',
		id
	}
}