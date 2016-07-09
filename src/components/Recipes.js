import React from 'react'
import RecipeEditor from '../containers/RecipeEditor'
import '../css/recipes.css'

const Recipes = ({ recipes, recipeSearch, addNew, handleSearchTextChange, backup }) => {
	return (
		<div className={'recipes'}>
			<div className={'buttons'}>
				<button className={'button add-recipe'} onClick={addNew}>Add Recipe</button>
				<button className={'button backup'} onClick={backup}>Backup Data</button>
			</div>

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