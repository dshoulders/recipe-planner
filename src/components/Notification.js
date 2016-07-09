import React from 'react'

const Notification = ({ isActive, message }) => {
	return (
		<div className={`notification${isActive ? ' active' : ''}`}>
			{ message }
		</div>
	)
}

export default Notification