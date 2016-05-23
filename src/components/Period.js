import React from 'react'
import PeriodList from './PeriodList'
import PeriodGrid from './PeriodGrid'
import { MatchMedia } from 'react-match-media'
import '../css/period.css'

let Period = ({ id, startDateFormatted, endDateFormatted, recipes, removePeriod }) => {
	return (
		<div className={'period'}>
		
			<header className={'period-header'}>
				<div className={'start-date'}>{startDateFormatted} - {endDateFormatted}</div>
				<button className={'button period-remove'} onClick={() => removePeriod(id)}>X</button>
			</header>
			
			<MatchMedia mediaQuery={'(max-width: 799px)'}>
				<PeriodList recipes={recipes} />
			</MatchMedia>			
			
			<MatchMedia mediaQuery={'(min-width: 800px)'}>
				<PeriodGrid recipes={recipes} />
			</MatchMedia>	
		</div>
	)
}

export default Period