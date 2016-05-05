import { connect } from 'react-redux'
import { updateRecipe, removeRecipe } from '../actions'
import RecipeEditor from '../components/RecipeEditor'
import '../css/recipe-editor.css'

const mapStateToProps = (state, ownProps) => {
	return {
		recipe: ownProps.recipe
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleTextChange: (id, property, value) => dispatch(updateRecipe(id, property, value)),
		remove: (id) => dispatch(removeRecipe(id))
	}
}

const RecipeEditorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RecipeEditor)

export default RecipeEditorContainer