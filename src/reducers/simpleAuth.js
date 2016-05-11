import { update } from '../utils' 

const simpleAuth = (state = {
	isAuthenticated: null,
	showLogin: false,
	pwdValue: ''
}, action) => {
	
	switch (action.type) {
		
		case 'SIMPLEAUTH_SHOW_LOGIN':
			return update(state, 'showLogin', action.value)
			
		case 'SIMPLEAUTH_UPDATE_PWD':
			return update(state, 'pwdValue', action.value)
			
		case 'SIMPLEAUTH_LOGGED_OUT':
			return update(state, 'isAuthenticated', false)
			
		case 'SIMPLEAUTH_RESPONSE':
			return {
				isAuthenticated: action.response.success,
				showLogin: false,
				pwdValue: ''
			}

		default:
			return state
	}
}

export default simpleAuth