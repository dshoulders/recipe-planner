import { connect } from 'react-redux'
import Recipes from '../components/Recipes'
import { addRecipe } from '../actions'


const mapStateToProps = (state, ownProps) => {
	return {
		recipes: state.recipes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNew: () => dispatch(addRecipe())
	}
}

const RecipesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Recipes)

export default RecipesContainer