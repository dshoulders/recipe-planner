import { postJSON } from '../utils'

export function receiveData(data) {
	return {
		type: 'DATA_RECEIVE',
		data
	}
}

export function fetchData() {

	return dispatch => {

		return fetch('/api/data')
			.then(response => response.json())
			.then(json => dispatch(receiveData(json)))
	}
}

export function saveData (data) {

	return dispatch => {

		postJSON('/api/save', data).then(repsonse => {
			if(repsonse.success) {
				dispatch(saveSuccess())
			}
		})
	}
}

export function saveSuccess () {
	return {
		type: 'SIMPLEAUTH_SAVE_SUCCESS'
	}
}

export function backupData () {

	return dispatch => {

		postJSON('/api/backup').then(repsonse => {
			if(repsonse.success) {
				dispatch(backupSuccess())

				setTimeout(() => {
					dispatch(dismissNotification())
				}, 2000)
			}
		})
	}
}

export function backupSuccess () {
	return {
		type: 'BACKUP_SUCCESS'
	}
}

export function dismissNotification () {
	return {
		type: 'DISMISS_BACKUP_NOTIFICATION'
	}
}