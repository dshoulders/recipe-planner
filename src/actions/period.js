import { getNextStartDate, generateRecipeList } from '../utils'

export function addPeriod() {
	
	return (dispatch, getState) => {
		
		const state = getState()
		const lastPeriod = state.periods[state.periods.length - 1]
		const lastStartDate = lastPeriod ? lastPeriod.startDate : null
		
		const newPeriod = {
			id: state.nextId.period,
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