import { connect } from 'react-redux'
import TagList from '../components/TagList'
import { setDayTag } from '../actions/day'

const mapStateToProps = (state, ownProps) => {
	return {
		tags: state.tags,
		selectedTags: ownProps.selectedTags
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	
	const dayId = ownProps.dayId
	
	return {
		onClick: (prop, value) => dispatch(setDayTag(dayId, parseInt(prop), value))
	}
}

const DayTagList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagList)

export default DayTagList