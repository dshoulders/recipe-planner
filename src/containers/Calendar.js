import { connect } from 'react-redux'
import Calendar from '../components/Calendar'


const mapStateToProps = (state, ownProps) => {
	return {
		periods: state.periods
	}
}

const CalendarContainer = connect(
	mapStateToProps
)(Calendar)

export default CalendarContainer