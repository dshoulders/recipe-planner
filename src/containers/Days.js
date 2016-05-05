import { connect } from 'react-redux'
import Days from '../components/Days'


const mapStateToProps = (state, ownProps) => {
	return {
		days: state.days
	}
}

const DaysContainer = connect(
	mapStateToProps
)(Days)

export default DaysContainer