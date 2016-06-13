import { connect } from 'react-redux'
import App from '../components/App'
import { postJSON } from '../utils'
import { authCheck } from '../actions/simpleAuth'
import { fetchData, saveData } from '../actions/data'

let previousState = {}

const mapStateToProps = (state) => {
	
	const haveData = state.haveData
	const isAuthenticated = state.simpleAuth.isAuthenticated
	
	const needToSave = 
		isAuthenticated &&
		state.haveData === true &&
		(state.periods !== previousState.periods ||
		state.recipes !== previousState.recipes ||
		state.tags !== previousState.tags ||
		state.days !== previousState.days ||
		state.isAuthenticated !== previousState.isAuthenticated)
		
	const dataToSave = {
		periods: state.periods,
		recipes: state.recipes,
		tags: state.tags,
		days: state.days,
		nextId: state.nextId
	}
		
	previousState = state
	
	return {
		isAuthenticated,
		haveData,
		needToSave,
		dataToSave
	}
}

const mapDispatchToProps = (dispatch) => {
	
	const sendAuthCheck = () => dispatch(authCheck())	
	const attemptSave = (data) => dispatch(saveData(data))	
	const attemptGetData = () => dispatch(fetchData())
	
	return {
		sendAuthCheck,
		attemptSave,
		attemptGetData
	}
}

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

export default AppContainer