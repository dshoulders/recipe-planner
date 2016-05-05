import { connect } from 'react-redux'
import TagList from '../components/TagList'
import { setRecipeTag } from '../actions'

const mapStateToProps = (state, ownProps) => {
	return {
		tags: state.tags,
		selectedTags: ownProps.selectedTags
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	
	const recipeId = ownProps.recipeId
	
	return {
		onClick: (prop, value) => dispatch(setRecipeTag(recipeId, parseInt(prop), value))
	}
}

const RecipeTagList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagList)

export default RecipeTagList