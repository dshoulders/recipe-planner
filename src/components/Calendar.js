import React from 'react'
import Period from '../containers/Period'
import '../css/app.css'

const Calendar = ({ periods }) => {
	
	return (
		<div className={'calendar'}>
			{
				periods.map((period, i) => {
					return <Period period={period} key={i} />
				})
			}			
		</div>
	)
}

export default Calendar