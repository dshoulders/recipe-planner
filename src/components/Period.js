import React from 'react'
import { connect } from 'react-redux'
import Recipe from '../components/Recipe'
import '../css/period.css'

let Period = ({ id, startDateFormatted, endDateFormatted, dayRows, removePeriod }) => {
	return (
		<div className={'period'}>
			<header className={'period-header'}>
				<div className={'start-date'}>{startDateFormatted} - {endDateFormatted}</div>
				<button className={'button period-remove'} onClick={() => removePeriod(id)}>X</button>
			</header>
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
											<td className={'recipe-cell'} key={cellIndex}>
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