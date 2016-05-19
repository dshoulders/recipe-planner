import { connect } from 'react-redux'
import Calendar from '../components/Calendar'
import { addPeriod } from '../actions/period'


const mapStateToProps = (state, ownProps) => {
	return {
		periods: state.periods
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPeriod: () => dispatch(addPeriod())
	}
}

const CalendarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Calendar)

export default CalendarContainer