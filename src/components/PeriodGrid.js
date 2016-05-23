import React from 'react'
import Recipe from '../components/Recipe'

let PeriodGrid = ({ recipes }) => {
	
	const dayRows = recipes.reduce((accumulator, currentRecipe, index) => {
		accumulator[index % 7].push(currentRecipe)
		return accumulator
	}, [[], [], [], [], [], [], []])
	
	return (
				<table className={'grid'}>
					<thead>
						<tr>
							<th></th><th>Week 1</th><th>Week 2</th><th>Week 3</th><th>Week 4</th>
						</tr>
					</thead>
					<tbody>
					{
						dayRows.map((dayRow, rowIndex) => {
							return (
								<tr key={rowIndex}>
									<td>
										{
											['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][rowIndex]
										}
									</td>
									{
										dayRow.map((recipe, cellIndex) => {
											
											const { isFuture, isToday, isPast } = recipe
											const cellClassName = `recipe-cell${ isFuture ? ' future' : '' }${ isToday ? ' today' : '' }${ isPast ? ' past' : '' }`

											return (
												<td className={cellClassName} key={cellIndex}>
													<Recipe {...recipe} />
												</td>
											)
										})
									}
								</tr>
							)
						})
					}
					</tbody>
				</table>	
	)
}

export default PeriodGrid