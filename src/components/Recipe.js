import React from 'react'
import '../css/recipe.css'

const Recipe = ({ date, name, book, page, url, tags }) => {
	return (
		<div className={'recipe'}>
			<div className={'date'}>{ date.format('Do MMM') }</div>
			<div className={'name'}>{ name }</div>
			{
				book ? 
				(
					<div className={'book'}>
						{ 
							book 
						}
						{
							page ? <span className={'page'}> p{ page }</span> : null
						}
					</div>
				) : null
				
			}
			{
				url ? <div className={'url'}><a href={ url }>{ url }</a></div> : null
			}
		</div>
	)
}

export default Recipe