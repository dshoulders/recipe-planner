export function addTag() {
	return {
		type: 'TAG_ADD'
	}
}

export function updateTag(id, value) {
	return {
		type: 'TAG_UPDATE',
		id,
		value
	}
}

export function removeTag(id) {
	return {
		type: 'TAG_REMOVE',
		id
	}
}