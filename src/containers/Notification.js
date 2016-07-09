import { connect } from 'react-redux'
import Notification from '../components/Notification'


const mapStateToProps = (state, ownProps) => {
	return state.notification || { isActive: true, message: 'eggy' } 
}

const NotificationContainer = connect(
	mapStateToProps
)(Notification)

export default NotificationContainer