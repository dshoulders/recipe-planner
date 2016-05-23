import React from 'react'
import Recipe from '../components/Recipe'

let PeriodList = ({ recipes }) => {
	return (
			<ul className={'recipe-list'}>
				{
					recipes.map((recipe, index) => {
						
						const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][index % 7]
						const { isFuture, isToday, isPast } = recipe
						const listClassName = `recipe-list-item${ isFuture ? ' future' : '' }${ isToday ? ' today' : '' }${ isPast ? ' past' : '' }`
						
						return (
							<li className={listClassName} key={index}>
								<span className={'recipe-list-day'}>{day}</span>
								<Recipe {...recipe} />
							</li>
						)
					})
				}
			</ul>
	)
}

export default PeriodList