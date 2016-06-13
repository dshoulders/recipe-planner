import React from 'react'
import RecipeEditor from '../containers/RecipeEditor'
import '../css/recipes.css'

const Recipes = ({ recipes, recipeSearch, addNew, handleSearchTextChange }) => {
	return (
		<div className={'recipes'}>
			<button className={'button add-recipe'} onClick={addNew}>Add Recipe</button>
			<input className="text-field search" type={'text'} placeholder={'Search'} value={recipeSearch.searchText} onChange={e => handleSearchTextChange(e.target.value)} />
			{ 
				recipes.map((recipe, i) => {
					return recipeSearch.visibleRecipeIds.indexOf(recipe.id) > -1 ?
						<RecipeEditor recipe={recipe} key={recipe.id} /> : null
				})
			}
		</div>
	)
}

export default Recipes