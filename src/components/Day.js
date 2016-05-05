import React from 'react'

const Day = ({ date, recipe }) => {
	return (
		<div className={'day'}>
			<div className={'date'}>{ date }</div>
			<Recipe recipe={recipe} />
		</div>
	)
}

export default Day