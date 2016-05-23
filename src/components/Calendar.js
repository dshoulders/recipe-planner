import React from 'react'
import Period from '../containers/Period'
import '../css/app.css'

const Calendar = ({ periods, addPeriod }) => {
	
	return (
		<div className={'calendar'}>
			<button className={'button generate-period'} onClick={addPeriod}>Generate</button>
			{
				periods.map((period, i) => {
					return <Period period={period} key={i} />
				})
			}			
		</div>
	)
}

export default Calendar