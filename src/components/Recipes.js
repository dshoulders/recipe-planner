import React from 'react'
import RecipeEditor from '../containers/RecipeEditor'
import '../css/recipes.css'

const Recipes = ({ recipes, addNew }) => {
	return (
		<div className={'recipes'}>
			<button className={'button add-recipe'} onClick={addNew}>Add Recipe</button>
			{ 
				recipes.map((recipe, i) => {
					return <RecipeEditor recipe={recipe} key={recipe.id} />
				})
			}
		</div>
	)
}

export default Recipes