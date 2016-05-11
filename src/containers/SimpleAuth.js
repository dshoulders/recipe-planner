import { connect } from 'react-redux'
import SimpleAuth from '../components/SimpleAuth'
import { showLogin, logout, onPwdInput, login } from '../actions/simpleAuth'
import '../css/simple-auth.css'


const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.simpleAuth.isAuthenticated,
		pwdValue: state.simpleAuth.pwdValue,
		showLogin: state.simpleAuth.showLogin
	}
}

const mapDispatchToProps = (dispatch) => {
	
	const revealLogin = () => dispatch(showLogin(true))
	const logoutClick = () => dispatch(logout())
	const pwdChange = (value) => dispatch(onPwdInput(value))
	const pwdKeyUp = (keyCode, value) => {	
		if(keyCode === 13) {
			dispatch(login(value))
		}
	}
	
	return { revealLogin, logoutClick, pwdChange, pwdKeyUp }
}

const SimpleAuthContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SimpleAuth)

export default SimpleAuthContainer