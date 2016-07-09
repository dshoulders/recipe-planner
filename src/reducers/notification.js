const notification = (state = { isActive: false, message: '' }, action) => {
	switch (action.type) {
		
		case 'BACKUP_SUCCESS':
			return { isActive: true, message: 'backup success' }

		case 'DISMISS_BACKUP_NOTIFICATION':
			return { isActive: false, message: '' }

		default:
			return state
	}
}

export default notification