import { connect } from 'react-redux'
import App from '../components/App'


const mapStateToProps = (state) => {
	return {
		haveData: state.haveData
	}
}

const AppContainer = connect(
	mapStateToProps
)(App)

export default AppContainer