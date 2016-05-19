import React from 'react'
import DayTagList from '../containers/DayTagList'
import '../css/days.css'

const Days = ({ days, onClick }) => {
	return (
		<div className={'days'}>
			{
				days.map(day => {
					return (
						<div className={'day'} key={day.id}>
							<div className={'day-name'}>{ day.name }</div>
							<DayTagList dayId={day.id} selectedTags={day.tags} />
						</div>
					)
				})
			}
		</div>
	)
}

export default Days