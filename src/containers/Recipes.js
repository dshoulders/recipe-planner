import { connect } from 'react-redux'
import Recipes from '../components/Recipes'
import { addRecipe, searchRecipes } from '../actions/recipe'


const mapStateToProps = (state, ownProps) => {
	return {
		recipes: state.recipes,
		recipeSearch: state.recipeSearch,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNew: () => dispatch(addRecipe()),
		handleSearchTextChange: newValue => dispatch(searchRecipes(newValue))
	}
}

const RecipesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Recipes)

export default RecipesContainer