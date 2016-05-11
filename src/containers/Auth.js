import { connect } from 'react-redux'
import Auth from '../components/Auth'


const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: () => dispatch(loginUser()),
		logoutUser: () => dispatch(logoutUser())
	}
}

const AuthContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Auth)

export default AuthContainer