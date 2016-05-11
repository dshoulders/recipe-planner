export function authCheck() {
	
	var config = {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'pwd': sessionStorage.getItem('pwd')
		}
	}
	
	return dispatch => {

		return fetch('/api/authcheck', config)
			.then(response => response.json())
			.then(json => dispatch(authResponse(json)))
	}
}

export function showLogin (value) {
	return {
		type: 'SIMPLEAUTH_SHOW_LOGIN', 
		value
	}
}

export function logout () {
	return dispatch => {
		sessionStorage.removeItem('pwd')
		dispatch(loggedOut())
	}
}

export function onPwdInput  (value) {
	return {
		type: 'SIMPLEAUTH_UPDATE_PWD',
		value: value
	}
}

export function login (value) {
	
	var config = {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'pwd': value
		}
	}
	
	sessionStorage.setItem('pwd', value)
	
	return dispatch => {

		return fetch('/api/authcheck', config)
			.then(response => response.json())
			.then(json => dispatch(authResponse(json)))
	}
}

function authResponse(response) {
	return {
		type: 'SIMPLEAUTH_RESPONSE',
		response
	}
}

function loggedOut() {
	return {
		type: 'SIMPLEAUTH_LOGGED_OUT'
	}
}