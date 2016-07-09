export function authCheck() {
	
	var config = {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + sessionStorage.getItem('auth')
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
		sessionStorage.removeItem('auth')
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
			'Accept': 'application/json'
		},
		body: {
			password: value
		}
	}
	
	return dispatch => {

		return fetch('/api/login', config)
			.then(response => {
				if(response.ok) {
					return response.json()
				} else {
					return ""
				}
			})
			.then(json => {
				sessionStorage.setItem('auth', json)
				dispatch(authResponse(json))
			})
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