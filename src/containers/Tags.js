import { connect } from 'react-redux'
import Tags from '../components/Tags'
import { addTag, removeTag, updateTag } from '../actions'


const mapStateToProps = (state) => {
	return {
		tags: state.tags
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTag: () => dispatch(addTag()),
		removeTag: (id) => dispatch(removeTag(id)),
		handleTextChange: (id, text) => dispatch(updateTag(id, text))
	}
}

const TagsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Tags)

export default TagsContainer