import React from 'react'
import { connect } from 'react-redux'
import Recipe from '../components/Recipe'
import '../css/period.css'

let Period = ({ startDateFormatted, endDateFormatted, dayRows }) => {
	return (
		<div className={'period'}>
			<div className={'startDate'}>{startDateFormatted} - {endDateFormatted}</div>
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
										return (
											<td className={'recipeCell'} key={cellIndex}>
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
		</div>
	)
}

export default Period