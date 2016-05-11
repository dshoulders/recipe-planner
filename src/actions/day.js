export function setDayTag(dayId, tagId, value) {
	return {
		type: 'DAY_SET_TAG',
		dayId,
		tagId,
		value
	}
}